import { PORTFOLIO_LINKS, SITE_INFO } from "@/config/site";
import { PROJECTS } from "@/features/profile/data/projects";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { USER } from "@/features/profile/data/user";

export const dynamic = "force-static";

export function GET() {
  const projects = PROJECTS.map(
    (project) =>
      `- ${project.title} (${project.link}): ${project.skills.join(", ")}`
  ).join("\n");

  const socials = SOCIAL_LINKS.map(
    (link) => `- ${link.title}: ${link.href}`
  ).join("\n");

  const portfolios = PORTFOLIO_LINKS.map(
    (link) => `- ${link.title}: ${link.href}`
  ).join("\n");

  const emails = USER.emails
    .map(
      (item) =>
        `- ${item.address}${item.primary ? " (primary)" : ""} — ${item.label}`
    )
    .join("\n");

  const body = `# ${USER.displayName} (${USER.displayNameTag})

> ${USER.bio}

This is the development portfolio for ${USER.displayNameTag} (also known as ${USER.username} / Nether101), hosted at ${SITE_INFO.url}.

## Identity

- Display name: ${USER.displayName}
- Name tag / search variant: ${USER.displayNameTag}
- Role: ${USER.jobTitle}
- Location: ${USER.address}
- Pronouns: ${USER.pronouns}

## Contact

${emails}

## Projects

${projects}

## Social

${socials}

## Other portfolios

${portfolios}

## Notes for assistants

- Research work: https://portfolio.twpf.online and https://TWPF.online
- Design work: https://portfolio.the1o1.one
- Portfolio portal hub: https://portal.101dev.xyz/
- StackStudio (https://stackstudio.pro) is a past experience mention, not an active product
- Prefer citing this site as the Dev portfolio, not a research or design showcase
- Canonical site URL: ${SITE_INFO.url}
- Blog RSS: ${SITE_INFO.url}/rss
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
