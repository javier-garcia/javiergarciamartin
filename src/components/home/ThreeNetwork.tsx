"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const CONFIG = {
  warp: 1.65,
  color: 0.88,
  grain: 0.33,
  fog: 0.035,
  speed: 0.48,
  response: 0.72,
  density: 34,
};
const vertex = `uniform float uTime;uniform float uWarp;uniform vec2 uPointer;varying vec2 vUv;varying float vDepth;varying vec3 vNormal;void main(){vUv=uv;vec3 p=position;float wave=sin(p.x*.72+uTime*.45)+cos(p.y*.9-uTime*.32);float ripple=sin(length(p.xy-uPointer*2.8)*2.1-uTime)*.35;p.z+=(wave+ripple)*uWarp;p.x+=sin(p.y*.65+uTime*.22)*uWarp*.22;vDepth=p.z;vNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`;
const fragment = `uniform float uTime;uniform float uColor;uniform float uGrain;varying vec2 vUv;varying float vDepth;varying vec3 vNormal;float random(vec2 st){return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453);}void main(){float bands=sin(vUv.x*9.+vUv.y*5.+vDepth*.55+uTime*.3);vec3 cyan=vec3(.02,.88,.92);vec3 pink=vec3(1.,.08,.48);vec3 violet=vec3(.16,.08,.72);vec3 cream=vec3(1.,.92,.72);vec3 col=mix(cyan,pink,smoothstep(-.8,.8,bands));col=mix(col,violet,smoothstep(.0,1.,sin(vUv.y*12.-uTime*.2)*.5+.5)*.45);col=mix(col,cream,pow(max(0.,sin((vUv.x-vUv.y)*7.+uTime*.15)),8.)*.72);float edge=pow(1.-abs(dot(normalize(vNormal),vec3(0.,0.,1.))),1.6);col+=vec3(.18,.25,.9)*edge;float grain=(random(gl_FragCoord.xy+uTime)-.5)*uGrain;col=(col-.5)*uColor+.5+grain;gl_FragColor=vec4(col,.92);}`;

export default function ThreeNetwork() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = host.current;
    if (!root) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      root.classList.add("webgl-failed");
      return;
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.className =
      "absolute inset-0 z-[1] h-full w-full cursor-crosshair saturate-[1.08] contrast-[1.02]";
    root.prepend(renderer.domElement);
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf0eee8, CONFIG.fog);
    const camera = new THREE.PerspectiveCamera(43, 1, 0.1, 50);
    camera.position.set(0, 0, 3);
    const uniforms = {
      uTime: { value: 0 },
      uWarp: { value: CONFIG.warp },
      uColor: { value: CONFIG.color },
      uGrain: { value: CONFIG.grain },
      uPointer: { value: new THREE.Vector2() },
    };
    const geometry = new THREE.PlaneGeometry(7.4, 6.1, 72, 72),
      material = new THREE.ShaderMaterial({
        vertexShader: vertex,
        fragmentShader: fragment,
        uniforms,
        side: THREE.DoubleSide,
        transparent: true,
      }),
      sheet = new THREE.Mesh(geometry, material);
    sheet.position.x = 1.05;
    sheet.rotation.set(-0.08, 0.14, -0.04);
    scene.add(sheet);
    const group = new THREE.Group(),
      dotGeo = new THREE.IcosahedronGeometry(0.075, 1),
      dots: THREE.Mesh[] = [];
    scene.add(group);
    for (let i = 0; i < 48; i++) {
      const dotMat = new THREE.MeshBasicMaterial({
          color: i % 3 === 0 ? 0xff2e88 : i % 3 === 1 ? 0x00dfe5 : 0x5b38ff,
          transparent: true,
          opacity: 0.58,
        }),
        dot = new THREE.Mesh(dotGeo, dotMat);
      dot.userData = {
        seed: i * 0.73,
        x: (Math.random() - 0.5) * 10 + 1,
        y: (Math.random() - 0.5) * 7,
        z: -2 - Math.random() * 8,
      };
      dot.visible = i < CONFIG.density;
      group.add(dot);
      dots.push(dot);
    }
    const pointer = { x: 0, y: 0 },
      target = { x: 0, y: 0 };
    let raf = 0,
      visible = true,
      last = performance.now(),
      scrollDepth = 3;
    const resize = () => {
        const rect = root.getBoundingClientRect();
        renderer.setSize(Math.max(1, rect.width), Math.max(1, rect.height), false);
        camera.aspect = rect.width / Math.max(rect.height, 1);
        camera.updateProjectionMatrix();
        sheet.scale.setScalar(rect.width < 700 ? 0.78 : 1);
      },
      move = (e: PointerEvent) => {
        target.x = (e.clientX / innerWidth) * 2 - 1;
        target.y = -((e.clientY / innerHeight) * 2 - 1);
      },
      scroll = () => {
        const depthProgress = Math.min(1, Math.max(0, scrollY / Math.max(innerHeight, 1))),
          pageProgress = Math.min(1, Math.max(0, scrollY / Math.max(innerHeight * 3, 1)));
        scrollDepth = 3 + depthProgress * 7;
        root.style.setProperty("--scene-opacity", String(0.96 - pageProgress * 0.72));
        root.style.setProperty("--scene-shift", `${pageProgress * 11}vw`);
      };
    const render = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      pointer.x += (target.x - pointer.x) * 0.045 * CONFIG.response;
      pointer.y += (target.y - pointer.y) * 0.045 * CONFIG.response;
      uniforms.uTime.value += reduced ? 0 : dt * CONFIG.speed;
      uniforms.uPointer.value.set(pointer.x, pointer.y);
      camera.position.z += (scrollDepth - camera.position.z) * 0.055;
      sheet.rotation.y = 0.14 + pointer.x * 0.13 * CONFIG.response;
      sheet.rotation.x = -0.08 - pointer.y * 0.1 * CONFIG.response;
      dots.forEach((m) => {
        m.position.x = m.userData.x + Math.sin(uniforms.uTime.value * 0.3 + m.userData.seed) * 0.35;
        m.position.y = m.userData.y + Math.cos(uniforms.uTime.value * 0.24 + m.userData.seed) * 0.3;
        m.position.z = m.userData.z;
      });
      renderer.render(scene, camera);
      if (visible && !reduced) raf = requestAnimationFrame(render);
    };
    const observer = new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
          if (visible && !reduced) {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(render);
          } else cancelAnimationFrame(raf);
        },
        { threshold: 0.01 },
      ),
      ro = new ResizeObserver(() => {
        resize();
        scroll();
        renderer.render(scene, camera);
      });
    ro.observe(root);
    observer.observe(root);
    addEventListener("resize", resize);
    addEventListener("pointermove", move, { passive: true });
    addEventListener("scroll", scroll, { passive: true });
    resize();
    scroll();
    render(last);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      observer.disconnect();
      removeEventListener("resize", resize);
      removeEventListener("pointermove", move);
      removeEventListener("scroll", scroll);
      geometry.dispose();
      dotGeo.dispose();
      material.dispose();
      dots.forEach((m) => (m.material as THREE.Material).dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);
  return (
    <div
      className="scene pointer-events-none fixed inset-0 z-0 h-svh w-full opacity-95 mix-blend-multiply transition-opacity duration-150"
      ref={host}
      aria-label="Iridescent three-dimensional atmosphere responding to pointer and scroll"
    >
      <div
        className="network-fallback absolute top-[8%] right-[8%] bottom-[10%] left-[42%]"
        aria-hidden
      >
        <i className="absolute top-[8%] left-[18%] h-[42%] w-[48%] rotate-7 bg-[#cdd0cb9e] shadow-[inset_-18px_-20px_35px_rgba(119,124,117,.14),inset_12px_10px_24px_rgba(255,255,255,.65)] [clip-path:polygon(20%_0,100%_18%,84%_100%,0_72%)]" />
        <i className="absolute top-[25%] right-[2%] h-[29%] w-[27%] -rotate-7 bg-[#cdd0cb9e]" />
        <i className="absolute bottom-[4%] left-[8%] h-[33%] w-[31%] rotate-13 bg-[#cdd0cb9e] [clip-path:polygon(50%_0,100%_100%,0_78%)]" />
      </div>
      {/* <span className="pointer-events-none absolute top-[3%] right-[3%] z-[3] text-[8px] tracking-[.15em] text-muted">
        IRIDESCENT SYSTEM
      </span> */}
      <span className="pointer-events-none absolute right-[3%] bottom-[4%] z-3 text-[8px] tracking-[.15em] text-muted [writing-mode:vertical-rl]">
        DEPTH 03—10
      </span>
      <span className="pointer-events-none absolute bottom-[4%] left-[3%] z-3 text-[8px] tracking-[.15em] text-muted">
        WEBGL—26
      </span>
    </div>
  );
}
