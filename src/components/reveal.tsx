"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.96, y: 12 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

type CountUpProps = {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  tone?: "dark" | "light";
};

export function CountUp({
  value,
  label,
  suffix = "",
  prefix = "",
  tone = "dark",
}: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const startedAt = performance.now();
    const duration = 1100;

    const tick = (time: number) => {
      const progress = Math.min((time - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <div ref={ref}>
      <div
        className={`text-3xl font-semibold ${
          tone === "light" ? "text-white" : "text-[#2b2522]"
        }`}
      >
        {prefix}
        {current}
        {suffix}
      </div>
      <div
        className={`mt-1 text-sm font-medium ${
          tone === "light" ? "text-white/75" : "text-[#7b6b62]"
        }`}
      >
        {label}
      </div>
    </div>
  );
}
