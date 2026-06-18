'use client';

import { useEffect, useRef, useState } from 'react';

export function useCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef   = useRef<HTMLDivElement>(null);
  const rafRef       = useRef<number | null>(null);
  const startRef     = useRef<number | null>(null);
  const animatedRef  = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          setIsVisible(true);
          animatedRef.current = true;
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const step = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      
      // Smooth cubic ease-out calculation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible, target, duration]);

  return { count, elementRef };
}

export function LegacyStats() {
  const c1 = useCounter(12);
  const c2 = useCounter(40);

  return (
    <div className="grid grid-cols-3 border-t border-[#2c2c32] mt-10">
      <div ref={c1.elementRef} className="py-6">
        <div className="text-5xl text-[#b44fff] font-extrabold" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          {c1.count}+
        </div>
        <div className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[#52525e] mt-1">Artists</div>
      </div>
      <div ref={c2.elementRef} className="py-6 pl-6 border-l border-[#2c2c32]">
        <div className="text-5xl text-[#b44fff] font-extrabold" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          {c2.count}+
        </div>
        <div className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[#52525e] mt-1">Releases</div>
      </div>
      <div className="py-6 pl-6 border-l border-[#2c2c32]">
        <div className="text-5xl text-[#b44fff] font-extrabold" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          1
        </div>
        <div className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[#52525e] mt-1">City. PH.</div>
      </div>
    </div>
  );
}