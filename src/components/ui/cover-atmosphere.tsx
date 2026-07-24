"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type CoverAtmosphereProps = {
  className?: string;
};

/**
 * Soft coastal mesh for the hero cover.
 * Intentional drift — not rainbow/glow noise.
 */
export function CoverAtmosphere({ className }: CoverAtmosphereProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[linear-gradient(160deg,var(--hero-from)_0%,var(--hero-mid)_45%,var(--hero-to)_100%)]" />

      <motion.div
        className="absolute -inset-[20%] opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 50% 40% at 20% 30%, var(--hero-blob-a), transparent 70%),
            radial-gradient(ellipse 45% 50% at 80% 20%, var(--hero-blob-b), transparent 65%),
            radial-gradient(ellipse 40% 35% at 60% 85%, var(--hero-blob-c), transparent 70%)
          `,
        }}
        animate={{
          x: [0, 24, -12, 0],
          y: [0, -16, 10, 0],
          scale: [1, 1.04, 0.98, 1],
        }}
        transition={{
          duration: 22,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--hero-grid) 1px, transparent 1px),
            linear-gradient(to bottom, var(--hero-grid) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/40 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}
