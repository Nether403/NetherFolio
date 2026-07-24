import dynamic from "next/dynamic";
import Link from "next/link";

import { DesktopNav } from "@/components/desktop-nav";
import { NavItemGitHub } from "@/components/nav-item-github";
import { MAIN_NAV } from "@/config/site";
import { cn } from "@/lib/utils";

import { SiteHeaderMark } from "./site-header-mark";
import { SiteHeaderWrapper } from "./site-header-wrapper";
import { ToggleTheme } from "./toggle-theme";

const MobileNav = dynamic(() =>
  import("@/components/mobile-nav").then((mod) => mod.MobileNav)
);

export function SiteHeader() {
  return (
    <SiteHeaderWrapper
      className={cn(
        "sticky top-0 z-50 max-w-screen overflow-x-clip bg-background/80 px-2 pt-2 backdrop-blur-md",
        "data-[affix=true]:bg-background/90",
        "data-[affix=true]:shadow-[0_8px_24px_0_oklch(0.3_0.04_245/0.08)] dark:data-[affix=true]:shadow-[0_8px_24px_0_oklch(0_0_0/0.35)]",
        "not-dark:data-[affix=true]:**:data-header-container:after:bg-border",
        "transition-[background-color,box-shadow] duration-300"
      )}
    >
      <div
        className="screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge bg-card/40 px-2 after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl"
        data-header-container
      >
        <Link href="/" aria-label="Home" className="h-8 w-16">
          <SiteHeaderMark />
        </Link>

        <div className="flex-1" />

        <DesktopNav items={MAIN_NAV} />

        <div className="flex items-center gap-2">
          <NavItemGitHub />
          <ToggleTheme />
          <MobileNav className="sm:hidden" items={MAIN_NAV} />
        </div>
      </div>
    </SiteHeaderWrapper>
  );
}
