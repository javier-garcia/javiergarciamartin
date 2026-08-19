"use client";

import { useEffect, useState } from "react";

export function useScrollHeader() {
  const [hidden, setHidden] = useState(false);
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    let last = scrollY,
      up = 0,
      down = 0,
      raf = 0;
    const update = () => {
      raf = 0;
      const current = scrollY,
        delta = current - last;
      last = current;
      setFloating(current >= 80);
      if (current < 80) {
        up = down = 0;
        setHidden(false);
        return;
      }
      if (delta > 0) {
        down += delta;
        up = 0;
        if (down > 18) setHidden(true);
      } else if (delta < 0) {
        up -= delta;
        down = 0;
        if (up > 12) setHidden(false);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return { hidden, floating, show: () => setHidden(false) };
}
