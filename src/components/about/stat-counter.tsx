"use client";

import { useRef, useEffect, useState } from "react";

interface StatCounterProps {
  target:    number;
  label:     string;
  duration?: number;
  prefix?:   string;
  suffix?:   string;
}

export function useCounter(target: number, duration: number = 2000) {
  const [count, setCount]       = useState(0);
  const [isVisible, setVisible] = useState(false);
  const elementRef   = useRef<HTMLDivElement>(null);
  const rafRef       = useRef<number>();
  const startRef     = useRef<number>();
  const animatedRef  = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          setVisible(true);
          animatedRef.current = true;
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const animate = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const p = Math.min((ts - startRef.current) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3); // cubic ease-out
      setCount(Math.floor(e * target));
      if (p < 1) rafRef.current = requestAnimationFrame(animate);
      else setCount(target);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [isVisible, target, duration]);

  return { count, elementRef };
}

export function StatCounter({ target, label, duration = 2000, prefix = "", suffix = "" }: StatCounterProps) {
  const { count, elementRef } = useCounter(target, duration);
  return (
    <div ref={elementRef} className="flex flex-col items-center justify-center p-6">
      <div
        className="text-4xl md:text-5xl font-bold"
        style={{ color: "#b44fff", textShadow: "0 0 20px #b44fff66" }}
      >
        {prefix}{count}{suffix}
      </div>
      <div className="mt-2 text-xs text-muted font-mono tracking-[0.2em] uppercase">
        {label}
      </div>
    </div>
  );
}

export function LegacyStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      <StatCounter target={12}  label="Artists Signed"   suffix="+" duration={2500} />
      <StatCounter target={40}  label="Releases"         suffix="+" duration={2000} />
      <StatCounter target={15}  label="Countries"        suffix="+" duration={1500} />
      <StatCounter target={100} label="Tracks Streamed"  suffix="K+" duration={3000} />
    </div>
  );
}
