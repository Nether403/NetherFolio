import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "dutch-data-labs",
    title: "Dutch Data Labs",
    period: {
      start: "07.2026",
    },
    link: "https://dutchdatalabs.online/",
    skills: ["Startup", "Product", "Social", "LLM", "TypeScript"],
    description: `New startup building products at the intersection of social software and AI debate tooling.

Includes:
- [F-socials](https://github.com/Nether403/F-socials) — social product surface
- [AIdebate (LLMargument)](https://github.com/Nether403/AIdebate) — structured LLM debate / argument experiments

https://dutchdatalabs.online/
`,
    logo: "https://www.google.com/s2/favicons?domain=dutchdatalabs.online&sz=64",
    isExpanded: true,
  },
  {
    id: "repoguardian",
    title: "RepoGuardian",
    period: {
      start: "07.2026",
    },
    link: "https://RepoGuardian.101dev.xyz",
    skills: ["GitHub", "Fleet triage", "TypeScript", "Next.js", "Maintenance"],
    description: `Supervised GitHub repository triage and maintenance assistant (live alpha). Helps keep a multi-repo fleet healthy with structured review and upkeep workflows.

- Repo intelligence & triage
- Maintenance assistant for active fleets

https://RepoGuardian.101dev.xyz  
https://github.com/Nether403/RepoGuardian
`,
    logo: "https://www.google.com/s2/favicons?domain=repoguardian.101dev.xyz&sz=64",
    isExpanded: true,
  },
  {
    id: "twpf",
    title: "The Witness Protocol Foundation",
    period: {
      start: "01.2025",
    },
    link: "https://TWPF.online",
    skills: ["Foundation", "AI transparency", "Research ops", "Non-profit"],
    description: `Research non-profit focused on transparent, high-signal human testimony and AI auditing posture — counts and receipts, no hype.

Also featured on the [Research portfolio](https://portfolio.twpf.online).

https://TWPF.online
`,
    logo: "https://www.google.com/s2/favicons?domain=twpf.online&sz=64",
    isExpanded: true,
  },
  {
    id: "g52",
    title: "G_5.2",
    period: {
      start: "06.2026",
    },
    link: "https://github.com/Nether403/G_5.2",
    skills: ["AI governance", "Runtime kernel", "TypeScript", "Research eng"],
    description: `A shared runtime and governance kernel I'm proud of — also listed on the research side, and worth calling out here as a development artifact.

https://github.com/Nether403/G_5.2
`,
    logo: "https://cdn.simpleicons.org/github",
    isExpanded: false,
  },
  {
    id: "metal-marines-reborn",
    title: "Metal Marines Reborn",
    period: {
      start: "07.2026",
    },
    link: "https://github.com/Nether403/Metal-Marines-Reborn",
    skills: ["Game remake", "TypeScript", "30th anniversary"],
    description: `Metal Marines 30th-anniversary remake — a passion project rebuilding the classic strategy experience for modern platforms.

https://github.com/Nether403/Metal-Marines-Reborn
`,
    logo: "https://cdn.simpleicons.org/github",
    isExpanded: false,
  },
  {
    id: "stackstudio",
    title: "StackStudio",
    period: {
      start: "2024",
      end: "2025",
    },
    link: "https://stackstudio.pro",
    skills: ["Product", "Builder tools", "Experience", "Legacy"],
    description: `Former builder's ecosystem for stack choices and shippable plans. No longer actively developed — kept here as an experience / portfolio mention.

https://stackstudio.pro
`,
    logo: "https://www.google.com/s2/favicons?domain=stackstudio.pro&sz=64",
    isExpanded: false,
  },
];
