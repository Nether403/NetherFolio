"use client";

import { useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { Laser } from "@/components/canvasui/Laser";

type LaserShellProps = {
  children: ReactNode;
};

/**
 * Coastal laser accent — WebGL beam overlay only (no html-in-canvas polyfill).
 * Content stays normal DOM; the beam is a light viewport decoration.
 */
export function LaserShell({ children }: LaserShellProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <Laser
      className="h-svh w-full"
      // Teal ink — matches --brand / coastal forge (not default electric blue)
      color={[0.14, 0.58, 0.6]}
      speed={0.35}
      offset={110}
      thickness={2.5}
      core={0.45}
      radius={12}
      glow={0.75}
      wave={5}
      width={0.42}
      flicker={0.1}
      // Overlay mode: keep reveal/heat soft — no content capture
      reveal={80}
      heat={0.25}
      shimmer={0}
      sparkle={0.12}
      reactivity={0.45}
    >
      {children}
    </Laser>
  );
}
