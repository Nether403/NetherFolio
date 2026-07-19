import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { Providers } from "@/components/providers";
import { META_THEME_COLORS, SITE_INFO } from "@/config/site";
import { USER } from "@/features/profile/data/user";
import { fontMono, fontSans } from "@/lib/fonts";

const TITLE_DEFAULT = `${USER.displayName} – ${USER.jobTitle}`;

function getSiteJsonLd() {
  const personId = `${SITE_INFO.url}/#person`;
  const ddlId = `${SITE_INFO.url}/#org-dutch-data-labs`;
  const twpfId = `${SITE_INFO.url}/#org-twpf`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_INFO.url}/#website`,
        name: `${USER.displayName} · Dev Portfolio`,
        url: SITE_INFO.url,
        description: SITE_INFO.description,
        alternateName: [
          USER.displayName,
          USER.displayNameTag,
          USER.username,
          "Nether101",
          "101dev portfolio",
        ],
        inLanguage: "en",
        publisher: { "@id": personId },
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
        "@id": personId,
        name: USER.displayName,
        alternateName: [USER.displayNameTag, USER.username, "Nether101"],
        givenName: USER.firstName,
        familyName: "van Deursen",
        url: SITE_INFO.url,
        jobTitle: USER.jobTitle,
        description: USER.bio,
        image: `${SITE_INFO.url}${USER.avatar}`,
        email: USER.emails.map((item) => `mailto:${item.address}`),
        sameAs: [
          "https://github.com/Nether403/",
          "https://www.linkedin.com/in/mvd101/",
          "https://www.f6s.com/martin-deursen1",
          "https://x.com/StackStudio101",
          "https://here.now/@nether101",
          "https://TWPF.online",
          "https://dutchdatalabs.online/",
          "https://portfolio.twpf.online",
          "https://portfolio.the1o1.one",
          "https://portal.101dev.xyz/",
        ],
        worksFor: [{ "@id": ddlId }, { "@id": twpfId }],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Haarlem",
          addressCountry: "NL",
        },
        knowsAbout: [
          "Software development",
          "AI-assisted development",
          "TypeScript",
          "Next.js",
          "Startup founding",
          "GitHub repository maintenance",
          "AI governance tooling",
          "Product design engineering",
        ],
      },
      {
        "@type": "Organization",
        "@id": ddlId,
        name: "Dutch Data Labs",
        url: "https://dutchdatalabs.online/",
        founder: { "@id": personId },
      },
      {
        "@type": "Organization",
        "@id": twpfId,
        name: "The Witness Protocol Foundation",
        alternateName: ["TWPF", "The Witness Protocol"],
        url: "https://TWPF.online",
        founder: { "@id": personId },
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
    types: {
      "application/rss+xml": [
        {
          url: "/rss",
          title: `${USER.displayName} Blog RSS`,
        },
      ],
      "text/plain": [
        {
          url: "/llms.txt",
          title: "LLMs.txt",
        },
      ],
    },
  },
  title: {
    template: `%s | ${SITE_INFO.name}`,
    default: TITLE_DEFAULT,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: USER.displayName,
      url: SITE_INFO.url,
    },
    {
      name: USER.displayNameTag,
      url: SITE_INFO.url,
    },
  ],
  creator: USER.displayName,
  publisher: USER.displayName,
  category: "technology",
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
    siteName: `${USER.displayName} · Dev Portfolio`,
    url: SITE_INFO.url,
    type: "profile",
    locale: "en_NL",
    title: TITLE_DEFAULT,
    description: SITE_INFO.description,
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: TITLE_DEFAULT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_DEFAULT,
    description: SITE_INFO.description,
    images: [SITE_INFO.ogImage],
    creator: "@StackStudio101",
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
