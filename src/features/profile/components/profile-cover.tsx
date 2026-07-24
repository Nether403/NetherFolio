"use client";

import { motion, useReducedMotion } from "motion/react";
import dynamic from "next/dynamic";

import { CoverAtmosphere } from "@/components/ui/cover-atmosphere";
import { cn } from "@/lib/utils";

const DitheredObject = dynamic(
  () =>
    import("@/components/canvasui/DitheredObject").then(
      (m) => m.DitheredObject
    ),
  { ssr: false }
);

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
          className="relative h-28 w-56 sm:h-36 sm:w-72"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          <DitheredObject
            src="/models/MvD.glb"
            className="size-full"
            // Coastal teal accent — matches --brand / --ring
            highlight="#2a9aaa"
            background=""
            grayscale
            dither
            gridSize={3}
            pixelSizeRatio={1}
            scale={2.8}
            floatIntensity={reduceMotion ? 0 : 1.2}
            rotationIntensity={reduceMotion ? 0 : 0.7}
            floatSpeed={1.4}
            orbit={false}
            zoom={false}
            autoRotate={false}
            cameraDistance={4}
            fov={55}
            environmentIntensity={0.14}
            roughness={0.35}
          />
          <span className="sr-only">Martin vanDeursen monogram</span>
        </motion.div>
      </div>
    </div>
  );
}
