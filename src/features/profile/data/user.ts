import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Martin vanDeursen",
  lastName: "vanDeursen",
  displayName: "Martin vanDeursen",
  username: "Nether101",
  gender: "male",
  pronouns: "he/him",
  bio: "AI alignment researcher, design engineer, and solo developer based in Haarlem, Netherlands. Building transparent AI auditing frameworks, interactive alignment tools, and thoughtful digital experiences.",
  flipSentences: [
    "Prompt/Context/Design Engineer",
    "The AI-whatever-guy",
    "Tinkerer",
  ],
  address: "Haarlem, The Netherlands",
  phoneNumber: "KzMxNjgxNDc4Mjk5", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "TWFydGluQFJlYWxtMTAxLmNvbQ==", // base64 encoded
  website: "https://Nether101.nl",
  jobTitle: "Design Engineer",
  jobs: [
    {
      title: "Project Lead on Stackstudio platform",
      company: "Realm101",
      website: "https://Realm101.com",
    },
    {
      title: "Founder",
      company: "ThewitnessProtocol",
      website: "https://Witnessprotocol.online",
    },
  ],
  about: `
Hello I'm Martin an AI-assisted solo developer and design engineer 

I started in consultancy and project management and pivoted hard into AI when it became obvious that "how we learn and build" was about to change. 
I lean on AI where it's strong, and obsess somewhat over the design phase and thoughtful UI systems. 
Product design (shadcn/ui, motion), WebGL/visuals, Recently fell in love with Unicorn.studio. 

AI-assisted dev (Cursor, Kiro, Lovable, Bubble), rapid prototyping, prompt/context engineering, research UX (consent, datasheets, rubrics). When it's safety-adjacent, I ship receipts: datasheets, timestamp hashes, inter-rater agreement, and explicit non-commercial posture.

Currently working on Realm101.com 's StackStudio, a builder's ecosystem that simplifies stack choices and turns briefs into shippable plans and The Witness Protocol witnessprotocol.info — a research non-profit curating a permissioned, high-signal human testimony corpus (counts and receipts, no hype).
  `,
  avatar: "/avatar.jpg",
  ogImage: "/MvD.png",
  namePronunciationUrl: "/pronounceName.mp3",
  keywords: [
    "Martin vanDeursen",
    "Martin van Deursen",
    "Nether101",
    "Nether403",
    "AI alignment researcher",
    "AI safety",
    "AI alignment",
    "The Witness Protocol",
    "Witness Protocol",
    "Disalignment",
    "Alignment Saga",
    "Realm101",
    "StackStudio",
    "design engineer",
    "prompt engineering",
    "AI auditing",
    "interpretability",
    "Haarlem Netherlands",
    "Processo Ergo Sum",
    "P.E.S.",
  ],
  dateCreated: "2024-10-20", // YYYY-MM-DD
};
