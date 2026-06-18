import { useEffect, useRef, useState } from "react";


export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.15, ...options });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

/** Eased counter driven by requestAnimationFrame. */
export function useAnimatedCounter(target: number, duration = 2000, enabled = true) {
  const [count, setCount] = useState(0);
  // 🧠 FIX: Explicitly handle number | null type signatures to comply with SSR rules
  const rafRef   = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;
    startRef.current = null;

    const tick = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress    = Math.min((timestamp - startRef.current) / duration, 1);
      const eased       = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration, enabled]);

  return count;
}