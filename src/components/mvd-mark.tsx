"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

import { useIsClient } from "@/hooks/use-is-client";

export function MvDMark({
  className,
  ...props
}: React.ComponentProps<"div"> & { className?: string }) {
  const { resolvedTheme } = useTheme();
  const isClient = useIsClient();

  const logoSrc = isClient && resolvedTheme === "light" ? "/MvDark.png" : "/MvD.png";

  return (
    <div className={className} {...props}>
      <Image
        src={logoSrc}
        alt="MvD Logo"
        width={512}
        height={256}
        className="w-full h-full object-contain"
        unoptimized
      />
    </div>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${color}" font-size="180" font-weight="700" font-family="system-ui, -apple-system, sans-serif">M<tspan font-size="140" dy="10">v</tspan><tspan font-size="180" dy="-10">D</tspan></text></svg>`;
}
