import {
  JetBrains_Mono as FontMono,
  Manrope as FontSans,
  Syne as FontDisplay,
} from "next/font/google";

export const fontSans = FontSans({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontDisplay = FontDisplay({
  weight: ["500", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-display",
});
