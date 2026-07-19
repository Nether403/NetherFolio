export type User = {
  firstName: string;
  lastName: string;
  /** Preferred public-facing name */
  displayName: string;
  /** Spaced / searchable name variant shown as a tag */
  displayNameTag: string;
  /** Handle/username used in links or mentions */
  username: string;
  /** e.g. "male", "female", "non-binary" */
  gender: string;
  /** e.g. "he/him", "she/her", "they/them" */
  pronouns: string;
  bio: string;
  /** Short phrases rotated in UI (e.g., homepage flip effect) */
  flipSentences: string[];
  /** General location for display */
  address: string;
  /** Primary email, base64 encoded (https://t.io.vn/base64-string-converter) */
  email: string;
  /** Additional public emails (plain text for display / mailto) */
  emails: {
    label: string;
    address: string;
    primary?: boolean;
  }[];
  /** Personal/homepage URL */
  website: string;
  /** Primary/current role shown on profile */
  jobTitle: string;
  /** Work history entries */
  jobs: {
    title: string;
    company: string;
    website: string;
  }[];
  /** Rich about section; supports Markdown */
  about: string;
  /** Public URL to avatar image */
  avatar: string;
  /** Open Graph image URL for social sharing */
  ogImage: string;
  /** Audio URL for name pronunciation */
  namePronunciationUrl: string;
  /** SEO keywords list for metadata */
  keywords: string[];
  /** Profile/site start date in YYYY-MM-DD */
  dateCreated: string;
};
