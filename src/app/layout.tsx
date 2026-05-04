import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { Providers } from "@/components/providers";
import { META_THEME_COLORS, SITE_INFO } from "@/config/site";
import { USER } from "@/features/profile/data/user";
import { fontMono, fontSans } from "@/lib/fonts";

function getSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: SITE_INFO.name,
        url: SITE_INFO.url,
        alternateName: [USER.username],
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_INFO.url}/blog?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_INFO.url}/#person`,
        name: USER.displayName,
        url: SITE_INFO.url,
        jobTitle: "AI Alignment Researcher & Design Engineer",
        description: USER.bio,
        image: `${SITE_INFO.url}${USER.avatar}`,
        sameAs: [
          "https://github.com/Nether403",
          "https://www.linkedin.com/in/mvd101/",
          "https://nether101.nl",
        ],
        worksFor: {
          "@type": "Organization",
          name: "Realm101",
          url: "https://Realm101.com",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Haarlem",
          addressCountry: "NL",
        },
        knowsAbout: [
          "AI Alignment",
          "AI Safety",
          "Machine Learning",
          "Prompt Engineering",
          "Design Engineering",
          "Interpretability Research",
        ],
      },
      {
        "@type": "Organization",
        "@id": `${SITE_INFO.url}/#organization`,
        name: "Realm101",
        url: "https://Realm101.com",
        founder: {
          "@type": "Person",
          "@id": `${SITE_INFO.url}/#person`,
        },
      },
    ],
  };
}

// Thanks @shadcn-ui, @tailwindcss
const darkModeScript = String.raw`
  try {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.documentElement.classList.add('os-macos')
    }
  } catch (_) {}
`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s | ${SITE_INFO.name}`,
    default: `${USER.displayName} – AI Alignment Researcher & Design Engineer`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: USER.displayName,
      url: SITE_INFO.url,
    },
  ],
  creator: USER.displayName,
  publisher: USER.displayName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    siteName: SITE_INFO.name,
    url: SITE_INFO.url,
    type: "profile",
    locale: "en_NL",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: `${USER.displayName} – AI Alignment Researcher & Design Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${USER.displayName} – AI Alignment Researcher & Design Engineer`,
    description: SITE_INFO.description,
    images: [SITE_INFO.ogImage],
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "any",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: META_THEME_COLORS.light,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <head suppressHydrationWarning>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: darkModeScript }}
        />
        {/*
          Thanks @tailwindcss. We inject the script via the `<Script/>` tag again,
          since we found the regular `<script>` tag to not execute when rendering a not-found page.
         */}
        <Script src={`data:text/javascript;base64,${btoa(darkModeScript)}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getSiteJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}