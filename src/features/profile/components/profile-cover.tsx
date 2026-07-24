"use client";

import { motion, useReducedMotion } from "motion/react";

import { MvDMark } from "@/components/mvd-mark";
import { CoverAtmosphere } from "@/components/ui/cover-atmosphere";
import { cn } from "@/lib/utils";

export function ProfileCover() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative aspect-2/1 border-x border-edge select-none sm:aspect-[2.4/1]",
        "flex items-center justify-center",
        "screen-line-before screen-line-after before:-top-px after:-bottom-px",
        "overflow-hidden"
      )}
    >
      <CoverAtmosphere />

      <div className="relative z-10 flex flex-col items-center gap-3 px-4">
        <motion.p
          className="font-mono text-[10px] tracking-[0.28em] text-foreground/55 uppercase sm:text-xs"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Dev portfolio · Haarlem
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          <MvDMark
            id="js-cover-mark"
            className="relative h-16 w-32 drop-shadow-sm sm:h-20 sm:w-40"
          />
        </motion.div>
      </div>
    </div>
  );
}
