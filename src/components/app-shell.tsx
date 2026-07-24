"use client";

import dynamic from "next/dynamic";
import { type ReactNode, useEffect, useState } from "react";

import { HexFloat } from "@/components/canvasui/HexFloat";
import { SiteHeader } from "@/components/site-header";

const ScrollTop = dynamic(() =>
  import("@/components/scroll-top").then((mod) => mod.ScrollTop)
);

type AppShellProps = {
  children: ReactNode;
};

function PageChrome({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-full bg-background">
      <SiteHeader />
      {/* overflow-x-clip (not hidden): overflow-x-hidden forces overflow-y:auto
          and creates a nested vertical scrollbar that steals wheel scroll. */}
      <main className="max-w-screen overflow-x-clip px-2 pb-10">
        {children}
      </main>
      <ScrollTop />
    </div>
  );
}

/**
 * Progressive HexFloat:
 * 1) Instant plain page
 * 2) After idle, warm HexFloat under a readable overlay
 * 3) Swap to hex tiles once the first snapshot is ready (no white void)
 */
export function AppShell({ children }: AppShellProps) {
  const [effectOn, setEffectOn] = useState(false);
  const [tilesReady, setTilesReady] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let cancelled = false;
    let idleId = 0;
    let timeoutId = 0;

    const enable = () => {
      void import("html-in-canvas-polyfill").then(() => {
        if (!cancelled) setEffectOn(true);
      });
    };

    timeoutId = window.setTimeout(() => {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(enable, { timeout: 2000 });
      } else {
        enable();
      }
    }, 700);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      if (idleId && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
    };
  }, []);

  const showReadableOverlay = !effectOn || !tilesReady;

  return (
    <div className="relative h-svh w-full bg-background">
      {effectOn ? (
        <HexFloat
          className="absolute inset-0 h-full w-full bg-background"
          size={168}
          gap={1}
          bevel={1.25}
          tilt={14}
          perspective={0.36}
          float={0.12}
          speed={0.75}
          shine={0.28}
          lift={0.18}
          radius={820}
          flow={0.55}
          swirl={1.5}
          trail={0.25}
          iridescence={0.06}
          bloom={0}
          grain={0}
          gapColor={[0.08, 0.14, 0.16]}
          onContentReady={() => setTilesReady(true)}
        >
          <PageChrome>{children}</PageChrome>
        </HexFloat>
      ) : null}

      {showReadableOverlay ? (
        <div
          className={
            effectOn
              ? "absolute inset-0 z-20 overflow-auto bg-background"
              : "h-full overflow-auto"
          }
        >
          <PageChrome>{children}</PageChrome>
        </div>
      ) : null}
    </div>
  );
}
