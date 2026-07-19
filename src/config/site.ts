import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://portfolio.101dev.xyz",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Dev",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const GITHUB_USERNAME = "Nether403";
export const SOURCE_CODE_GITHUB_REPO = "Nether403/NetherFolio";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/Nether403/NetherFolio";

export const PORTFOLIO_LINKS = [
  {
    title: "Research",
    href: "https://portfolio.twpf.online",
  },
  {
    title: "Design",
    href: "https://portfolio.the1o1.one",
  },
  {
    title: "Portal",
    href: "https://portal.101dev.xyz/",
  },
] as const;

export const UTM_PARAMS = {
  utm_source: "portfolio.101dev.xyz",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
