"use client";

import { useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { Frost } from "@/components/canvasui/Frost";

type FrostShellProps = {
  children: ReactNode;
};

/**
 * Coastal frost pane — WebGL overlay only (no html-in-canvas polyfill).
 * Cool mist ice that melts under the cursor; content stays normal DOM.
 */
export function FrostShell({ children }: FrostShellProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <Frost
      className="h-svh w-full"
      frost={0.04}
      strength={0.45}
      contrast={2.2}
      crispness={0.85}
      highlight={0.22}
      highlightStrength={0.55}
      haze={0.28}
      // Cool mist / coastal teal-leaning ice (not purple-blue)
      tintThin={[0.78, 0.9, 0.92]}
      tintThick={[0.88, 0.95, 0.96]}
      tintStrength={0.22}
      saturation={1.05}
      brightness={0.95}
      refraction={0.55}
      ior={1.31}
      detail={1.4}
      textureScale={2.2}
      fresnel={0.45}
      meltRadius={0.28}
      meltNoise={0.2}
      meltStrength={0.8}
      refreeze={1.6}
      edgeFade={0.12}
      meltEdges
      introDuration={1.6}
      opacity={0.42}
      shimmer={0}
      quality={0.85}
    >
      {children}
    </Frost>
  );
}
