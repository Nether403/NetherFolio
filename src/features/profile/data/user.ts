import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Martin",
  lastName: "vanDeursen",
  displayName: "Martin vanDeursen",
  displayNameTag: "Martin van Deursen",
  username: "Nether403",
  gender: "male",
  pronouns: "he/him",
  bio: "Founder of Dutch Data Labs and The Witness Protocol Foundation. AI-assisted developer based in Haarlem, Netherlands — shipping tools, startups, and open-source projects.",
  flipSentences: [
    "Prompt/Context/Design Engineer",
    "The AI-whatever-guy",
    "Tinkerer",
  ],
  address: "Haarlem, The Netherlands",
  email: "TWFydGluQDEwMWRldi54eXo=", // Martin@101dev.xyz
  emails: [
    {
      label: "Dev",
      address: "Martin@101dev.xyz",
      primary: true,
    },
    {
      label: "Dutch Data Labs",
      address: "Martin@Dutchdatalabs.online",
    },
    {
      label: "TWPF",
      address: "Founder@twpf.online",
    },
  ],
  website: "https://portfolio.101dev.xyz",
  jobTitle: "Founder · Dutch Data Labs & The Witness Protocol",
  jobs: [
    {
      title: "Founder",
      company: "Dutch Data Labs",
      website: "https://dutchdatalabs.online/",
    },
    {
      title: "Founder",
      company: "The Witness Protocol Foundation",
      website: "https://TWPF.online",
    },
    {
      title: "Former Project Lead",
      company: "StackStudio",
      website: "https://stackstudio.pro",
    },
  ],
  about: `
I'm Martin — an AI-assisted solo developer and founder based in Haarlem.

I build practical software with modern AI tooling: Cursor, rapid prototyping, and careful product design. This site is my **development portfolio** — the place for shipped code, tools, and startups.

Current focus:
- **[Dutch Data Labs](https://dutchdatalabs.online/)** — a new startup exploring social and debate products ([F-socials](https://github.com/Nether403/F-socials), [AIdebate](https://github.com/Nether403/AIdebate))
- **[The Witness Protocol Foundation](https://TWPF.online)** — research non-profit for transparent, high-signal AI testimony work
- **[RepoGuardian](https://RepoGuardian.101dev.xyz)** — supervised GitHub fleet triage and maintenance

Research and design work live in separate portfolios (linked below). Past experience includes [StackStudio](https://stackstudio.pro) (no longer active, kept as a portfolio piece).
  `,
  avatar: "/avatar.jpg",
  ogImage: "/MvD.png",
  namePronunciationUrl: "/pronounceName.mp3",
  keywords: [
    "Martin vanDeursen",
    "Martin van Deursen",
    "Nether403",
    "Nether101",
    "101dev",
    "Dutch Data Labs",
    "The Witness Protocol",
    "The Witness Protocol Foundation",
    "TWPF",
    "RepoGuardian",
    "Metal Marines Reborn",
    "G_5.2",
    "AI-assisted developer",
    "Founder",
    "Haarlem Netherlands",
    "portfolio.101dev.xyz",
    "StackStudio",
  ],
  dateCreated: "2024-10-20",
};
