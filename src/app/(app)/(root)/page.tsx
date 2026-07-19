import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { SITE_INFO } from "@/config/site";
import { About } from "@/features/profile/components/about";
import { Blog } from "@/features/profile/components/blog";
import { Contact } from "@/features/profile/components/contact";
import { GitHubContributions } from "@/features/profile/components/github-contributions";
import { PortfolioLinks } from "@/features/profile/components/portfolio-links";
import { ProfileCover } from "@/features/profile/components/profile-cover";
import { ProfileHeader } from "@/features/profile/components/profile-header";
import { Projects } from "@/features/profile/components/projects";
import { SocialLinks } from "@/features/profile/components/social-links";
import { TeckStack } from "@/features/profile/components/teck-stack";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto md:max-w-3xl">
        <ProfileCover />
        <ProfileHeader />
        <Separator />

        <SocialLinks />
        <Separator />

        <About />
        <Separator />

        <Projects />
        <Separator />

        <Contact />
        <Separator />

        <PortfolioLinks />
        <Separator />

        <GitHubContributions />
        <Separator />

        <TeckStack />
        <Separator />

        <Blog />
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_INFO.url}/#person`,
      name: USER.displayName,
      alternateName: [USER.displayNameTag, USER.username, "Nether101"],
      identifier: USER.username,
      url: SITE_INFO.url,
      image: `${SITE_INFO.url}${USER.avatar}`,
      jobTitle: USER.jobTitle,
      description: USER.bio,
      email: USER.emails.map((item) => item.address),
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
    },
  };
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
