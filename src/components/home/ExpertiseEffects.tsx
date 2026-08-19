"use client";

import * as THREE from "three";
import {
  useEffect,
  useRef,
  type PointerEvent,
  type ReactNode,
} from "react";

type ExpertiseEffectsProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

const CANVAS_BLEED = 96;
const TEXTURE_PADDING = 96;

const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uTexture;
  uniform float uStrength;
  uniform vec2 uVelocity;
  uniform vec2 uPointer;
  uniform vec2 uTextureSize;
  uniform float uImageMode;

  varying vec2 vUv;

  void main() {
    vec2 pointerDelta = (vUv - uPointer) * uTextureSize;
    float pointerDistance = length(pointerDelta);
    float pointerInfluence = 1.0 - smoothstep(12.0, 118.0, pointerDistance);
    float pressure = pointerInfluence * pointerInfluence * uStrength;
    vec2 radialDirection = normalize(pointerDelta + vec2(0.0001));
    vec2 flowDirection = normalize(uVelocity + vec2(0.0001));
    vec2 tangentDirection = vec2(-radialDirection.y, radialDirection.x);
    float motionAmount = min(length(uVelocity), 1.0);
    float ripple = sin(pointerDistance * 0.09 - motionAmount * 3.0);
    vec2 lensOffset = radialDirection * (18.0 / uTextureSize) * pressure;
    vec2 dragOffset = flowDirection * (48.0 / uTextureSize) * pressure * motionAmount;
    vec2 rippleOffset = tangentDirection * (7.0 / uTextureSize) * ripple * pressure;
    vec2 distortedUv = vUv - lensOffset - dragOffset - rippleOffset;
    vec2 aberrationDirection = normalize(dragOffset + lensOffset + vec2(0.0001));
    vec2 aberration = aberrationDirection * (9.0 / uTextureSize) * pressure;

    vec4 centerSample = texture2D(uTexture, distortedUv);
    vec4 redSample = texture2D(uTexture, distortedUv + aberration);
    vec4 blueSample = texture2D(uTexture, distortedUv - aberration);
    float centerMask = centerSample.a;
    float redMask = redSample.a;
    float blueMask = blueSample.a;
    float alpha = max(centerMask, max(redMask, blueMask));
    vec3 textColor = vec3(
      1.0 - redMask,
      1.0 - centerMask,
      1.0 - blueMask
    );
    vec3 imageColor = vec3(redSample.r, centerSample.g, blueSample.b);
    vec3 color = mix(textColor, imageColor, uImageMode);

    gl_FragColor = vec4(color, alpha);

    #include <colorspace_fragment>
  }
`;

type TextRun = {
  rect: DOMRect;
  styles: CSSStyleDeclaration;
  text: string;
};

function getTextRuns(element: HTMLElement) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const runs: TextRun[] = [];
  let node = walker.nextNode();

  while (node) {
    const textNode = node as Text;
    const text = textNode.textContent ?? "";
    const parent = textNode.parentElement;

    if (parent && text.trim()) {
      const styles = window.getComputedStyle(parent);
      let currentRun: TextRun | null = null;

      for (const word of text.matchAll(/\S+\s*/g)) {
        const start = word.index ?? 0;
        const range = document.createRange();

        range.setStart(textNode, start);
        range.setEnd(textNode, Math.min(start + word[0].length, text.length));

        const rect = range.getBoundingClientRect();

        if (currentRun && Math.abs(currentRun.rect.top - rect.top) < 2) {
          currentRun.text += word[0];
        } else {
          currentRun = { rect, styles, text: word[0] };
          runs.push(currentRun);
        }
      }
    }

    node = walker.nextNode();
  }

  return runs;
}

function createTitleTexture(element: HTMLElement, padding: number) {
  const bounds = element.getBoundingClientRect();
  const pixelRatio = Math.min(window.devicePixelRatio, 2);
  const canvas = document.createElement("canvas");
  const width = Math.ceil(bounds.width + padding * 2);
  const height = Math.ceil(bounds.height + padding * 2);

  canvas.width = Math.ceil(width * pixelRatio);
  canvas.height = Math.ceil(height * pixelRatio);

  const context = canvas.getContext("2d");

  if (!context) return null;

  context.scale(pixelRatio, pixelRatio);
  context.textBaseline = "alphabetic";

  getTextRuns(element).forEach((run) => {
    context.font = `${run.styles.fontStyle} ${run.styles.fontWeight} ${run.styles.fontSize} ${run.styles.fontFamily}`;
    context.fillStyle = run.styles.color;

    if (["auto", "normal", "none"].includes(run.styles.fontKerning)) {
      context.fontKerning = run.styles.fontKerning as CanvasFontKerning;
    }

    if ("letterSpacing" in context) {
      context.letterSpacing = run.styles.letterSpacing;
    }

    const metrics = context.measureText(run.text);
    const ascent = metrics.fontBoundingBoxAscent || metrics.actualBoundingBoxAscent;
    const descent = metrics.fontBoundingBoxDescent || metrics.actualBoundingBoxDescent;
    const fontBoxHeight = ascent + descent;
    const baseline = run.rect.top - bounds.top
      + (run.rect.height - fontBoxHeight) / 2
      + ascent;

    context.fillText(
      run.text.trimEnd(),
      padding + run.rect.left - bounds.left,
      padding + baseline,
    );
  });

  const texture = new THREE.CanvasTexture(canvas);

  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  return { texture, width, height, bounds };
}

function getObjectPositionFactor(value: string, axis: "x" | "y") {
  const parts = value.trim().split(/\s+/);
  const part = parts[axis === "x" ? 0 : 1] ?? "50%";

  if (part === "left" || part === "top") return 0;
  if (part === "right" || part === "bottom") return 1;
  if (part === "center") return 0.5;
  if (part.endsWith("%")) return Number.parseFloat(part) / 100;
  if (Number.parseFloat(part) === 0) return 0;

  return 0.5;
}

function createImageTexture(element: HTMLImageElement, padding: number) {
  if (!element.complete || !element.naturalWidth || !element.naturalHeight) {
    return null;
  }

  const bounds = element.getBoundingClientRect();
  const styles = window.getComputedStyle(element);
  const pixelRatio = Math.min(window.devicePixelRatio, 2);
  const canvas = document.createElement("canvas");
  const width = Math.ceil(bounds.width + padding * 2);
  const height = Math.ceil(bounds.height + padding * 2);

  canvas.width = Math.ceil(width * pixelRatio);
  canvas.height = Math.ceil(height * pixelRatio);

  const context = canvas.getContext("2d");

  if (!context) return null;

  const coverScale = styles.objectFit === "cover"
    ? Math.max(
        bounds.width / element.naturalWidth,
        bounds.height / element.naturalHeight,
      )
    : Math.min(
        bounds.width / element.naturalWidth,
        bounds.height / element.naturalHeight,
      );
  const drawWidth = element.naturalWidth * coverScale;
  const drawHeight = element.naturalHeight * coverScale;
  const drawX = padding + (bounds.width - drawWidth)
    * getObjectPositionFactor(styles.objectPosition, "x");
  const drawY = padding + (bounds.height - drawHeight)
    * getObjectPositionFactor(styles.objectPosition, "y");

  context.scale(pixelRatio, pixelRatio);
  context.save();
  context.beginPath();
  context.rect(padding, padding, bounds.width, bounds.height);
  context.clip();
  context.drawImage(
    element,
    drawX,
    drawY,
    drawWidth,
    drawHeight,
  );
  context.restore();

  const texture = new THREE.CanvasTexture(canvas);

  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  return { texture, width, height, bounds };
}

function getActiveClass(element: HTMLElement) {
  return element instanceof HTMLImageElement
    ? "webgl-image-active"
    : "webgl-title-active";
}

export function ExpertiseEffects({
  children,
  className,
  intensity = 1,
}: ExpertiseEffectsProps) {
  const field = useRef<HTMLDivElement>(null);
  const parallaxFrame = useRef(0);

  useEffect(() => {
    const container = field.current;

    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const canvas = container.querySelector<HTMLCanvasElement>("[data-distortion-canvas]");

    if (!canvas) return;

    const root = container;

    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera();
    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.ShaderMaterial({
      fragmentShader,
      transparent: true,
      uniforms: {
        uPointer: { value: new THREE.Vector2(0.5, 0.5) },
        uImageMode: { value: 0 },
        uStrength: { value: 0 },
        uTexture: { value: null },
        uTextureSize: { value: new THREE.Vector2(1, 1) },
        uVelocity: { value: new THREE.Vector2() },
      },
      vertexShader,
    });
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    let activeTitle: HTMLElement | null = null;
    let activeTexture: THREE.Texture | null = null;
    let animationFrame = 0;
    let layoutFrame = 0;
    let clearTimer = 0;
    let activeTextureWidth = 1;
    let activeTextureHeight = 1;
    let activeTexturePadding = TEXTURE_PADDING;
    let targetStrength = 0;
    let pointerIsOverTitle = false;
    const pointerVelocity = new THREE.Vector2();
    const renderedVelocity = new THREE.Vector2();
    let previousPointerX = 0;
    let previousPointerY = 0;
    let lastPointerTime = performance.now();

    function resizeRenderer() {
      const rootWidth = root.clientWidth;
      const rootHeight = root.clientHeight;
      const width = rootWidth + CANVAS_BLEED * 2;
      const height = rootHeight + CANVAS_BLEED * 2;

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(width, height, false);

      camera.left = -width / 2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = -height / 2;
      camera.near = -10;
      camera.far = 10;
      camera.updateProjectionMatrix();
    }

    function updateMeshPosition(title: HTMLElement) {
      const titleBounds = title.getBoundingClientRect();
      const containerBounds = root.getBoundingClientRect();
      const centerX = titleBounds.left - containerBounds.left + titleBounds.width / 2;
      const centerY = titleBounds.top - containerBounds.top + titleBounds.height / 2;

      mesh.scale.set(activeTextureWidth, activeTextureHeight, 1);
      mesh.position.set(
        centerX - containerBounds.width / 2,
        containerBounds.height / 2 - centerY,
        0,
      );
    }

    function positionMesh(title: HTMLElement) {
      activeTexturePadding = TEXTURE_PADDING;
      const titleTexture = title instanceof HTMLImageElement
        ? createImageTexture(title, activeTexturePadding)
        : createTitleTexture(title, activeTexturePadding);

      if (!titleTexture) return false;

      activeTexture?.dispose();
      activeTexture = titleTexture.texture;
      activeTextureWidth = titleTexture.width;
      activeTextureHeight = titleTexture.height;
      material.uniforms.uTexture.value = activeTexture;
      material.uniforms.uTextureSize.value.set(activeTextureWidth, activeTextureHeight);
      material.uniforms.uImageMode.value = title instanceof HTMLImageElement ? 1 : 0;
      updateMeshPosition(title);

      return true;
    }

    function render() {
      const strength = material.uniforms.uStrength.value as number;
      const nextStrength = THREE.MathUtils.lerp(strength, targetStrength, 0.22);

      material.uniforms.uStrength.value = nextStrength;
      renderedVelocity.lerp(pointerVelocity, 0.18);
      material.uniforms.uVelocity.value.copy(renderedVelocity);

      targetStrength *= 0.84;
      pointerVelocity.multiplyScalar(0.82);

      renderer.render(scene, camera);

      if (targetStrength < 0.01 && nextStrength < 0.015) {
        material.uniforms.uStrength.value = 0;

        if (!pointerIsOverTitle) {
          restoreSurface();
        } else {
          renderer.render(scene, camera);
        }

        animationFrame = 0;
        return;
      }

      animationFrame = requestAnimationFrame(render);
    }

    function startRendering() {
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(render);
      }
    }

    function activateTitle(title: HTMLElement, event: globalThis.PointerEvent) {
      window.clearTimeout(clearTimer);

      if (activeTitle === title) {
        pointerIsOverTitle = true;
        updateShaderPointer(title, event);
        return;
      }

      if (activeTitle) activeTitle.classList.remove(getActiveClass(activeTitle));
      activeTitle = title;

      if (!positionMesh(title)) {
        activeTitle = null;
        return;
      }

      pointerIsOverTitle = true;
      targetStrength = 0;
      material.uniforms.uStrength.value = 0;
      pointerVelocity.set(0, 0);
      renderedVelocity.set(0, 0);
      previousPointerX = event.clientX;
      previousPointerY = event.clientY;
      lastPointerTime = performance.now();
      updateShaderPointer(title, event);
      renderer.render(scene, camera);
      title.classList.add(getActiveClass(title));
    }

    function updateShaderPointer(title: HTMLElement, event: globalThis.PointerEvent) {
      const bounds = title.getBoundingClientRect();
      const now = performance.now();
      const elapsed = Math.max(now - lastPointerTime, 8);
      const deltaX = event.clientX - previousPointerX;
      const deltaY = event.clientY - previousPointerY;
      const speed = Math.hypot(deltaX, deltaY) / elapsed;

      pointerVelocity.set(
        THREE.MathUtils.clamp(deltaX / elapsed, -1.5, 1.5),
        THREE.MathUtils.clamp(-deltaY / elapsed, -1.5, 1.5),
      );
      targetStrength = Math.max(
        targetStrength,
        THREE.MathUtils.clamp(speed * 1.15 * intensity, 0, intensity),
      );
      previousPointerX = event.clientX;
      previousPointerY = event.clientY;
      lastPointerTime = now;

      material.uniforms.uPointer.value.set(
        THREE.MathUtils.clamp(
          (event.clientX - bounds.left + activeTexturePadding)
            / (bounds.width + activeTexturePadding * 2),
          0,
          1,
        ),
        THREE.MathUtils.clamp(
          1 - (event.clientY - bounds.top + activeTexturePadding)
            / (bounds.height + activeTexturePadding * 2),
          0,
          1,
        ),
      );

      if (targetStrength > 0.025) {
        startRendering();
      }
    }

    function findSurface(event: globalThis.PointerEvent) {
      const eventTarget = event.target as HTMLElement;
      const title = eventTarget.closest<HTMLElement>("[data-distort-title]");

      if (title) return title;

      return [...root.querySelectorAll<HTMLImageElement>("[data-distort-image]")].find((image) => {
        if (image.closest("[inert], [aria-hidden='true']")) return false;

        const bounds = image.getBoundingClientRect();

        return event.clientX >= bounds.left
          && event.clientX <= bounds.right
          && event.clientY >= bounds.top
          && event.clientY <= bounds.bottom;
      }) ?? null;
    }

    function handlePointerMove(event: globalThis.PointerEvent) {
      const surface = findSurface(event);

      if (surface) {
        if (activeTitle === surface) {
          updateShaderPointer(activeTitle, event);
        } else {
          activateTitle(surface, event);
        }
      } else if (activeTitle && pointerIsOverTitle) {
        deactivateSurface();
      }
    }

    function deactivateSurface() {
      if (!activeTitle) return;

      pointerIsOverTitle = false;
      targetStrength = 0;

      if (animationFrame) {
        startRendering();
      } else {
        restoreSurface();
      }
    }

    function restoreSurface() {
      if (!activeTitle) return;

      const surface = activeTitle;

      surface.classList.remove(getActiveClass(surface));
      activeTitle = null;
      window.clearTimeout(clearTimer);

      clearTimer = window.setTimeout(() => renderer.clear(), 160);
    }

    function handleLayoutResize() {
      cancelAnimationFrame(layoutFrame);
      layoutFrame = requestAnimationFrame(() => {
        resizeRenderer();

        if (activeTitle) {
          const activeBounds = activeTitle.getBoundingClientRect();
          const imageSizeChanged = activeTitle instanceof HTMLImageElement
            && (
              Math.abs(
                activeBounds.width + activeTexturePadding * 2 - activeTextureWidth,
              ) > 1
              || Math.abs(
                activeBounds.height + activeTexturePadding * 2 - activeTextureHeight,
              ) > 1
            );

          if (imageSizeChanged) {
            positionMesh(activeTitle);
          } else {
            updateMeshPosition(activeTitle);
          }

          renderer.render(scene, camera);
        }
      });
    }

    const resizeObserver = new ResizeObserver(handleLayoutResize);

    resizeRenderer();
    resizeObserver.observe(root);
    root.addEventListener("pointermove", handlePointerMove);
    root.addEventListener("pointerleave", deactivateSurface);

    return () => {
      cancelAnimationFrame(animationFrame);
      cancelAnimationFrame(layoutFrame);
      window.clearTimeout(clearTimer);
      resizeObserver.disconnect();
      if (activeTitle) activeTitle.classList.remove(getActiveClass(activeTitle));
      activeTexture?.dispose();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      root.removeEventListener("pointermove", handlePointerMove);
      root.removeEventListener("pointerleave", deactivateSurface);
    };
  }, [intensity]);

  function updateParallax(event: PointerEvent<HTMLDivElement>) {
    const element = field.current;

    if (!element) return;

    const bounds = element.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 18;

    cancelAnimationFrame(parallaxFrame.current);
    parallaxFrame.current = requestAnimationFrame(() => {
      element.style.setProperty("--parallax-x", `${x.toFixed(2)}px`);
      element.style.setProperty("--parallax-y", `${y.toFixed(2)}px`);
      element.style.setProperty("--parallax-x-reverse", `${(-x).toFixed(2)}px`);
      element.style.setProperty("--parallax-y-reverse", `${(-y).toFixed(2)}px`);
    });
  }

  function resetParallax() {
    const element = field.current;

    if (!element) return;

    element.style.setProperty("--parallax-x", "0px");
    element.style.setProperty("--parallax-y", "0px");
    element.style.setProperty("--parallax-x-reverse", "0px");
    element.style.setProperty("--parallax-y-reverse", "0px");
  }

  return (
    <div
      ref={field}
      className={className}
      onPointerMove={updateParallax}
      onPointerLeave={resetParallax}
    >
      {children}

      <canvas
        className="pointer-events-none absolute -inset-24 z-10 h-[calc(100%+12rem)] w-[calc(100%+12rem)]"
        data-distortion-canvas
        aria-hidden="true"
      />
    </div>
  );
}
