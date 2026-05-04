import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://Nether101.nl",
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
    title: "NetherFolio",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const GITHUB_USERNAME = "Nether403";
export const SOURCE_CODE_GITHUB_REPO = "Nether403/Nether101.nl";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/Nether403";

export const UTM_PARAMS = {
  utm_source: "Nether101.nl",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
