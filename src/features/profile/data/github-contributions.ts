import type { Activity } from "@/components/ui/contribution-graph";
import { GITHUB_USERNAME } from "@/config/site";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export async function getGitHubContributions(): Promise<Activity[]> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return [];
    }

    const data = (await res.json()) as Partial<GitHubContributionsResponse>;
    if (!Array.isArray(data?.contributions)) {
      return [];
    }
    return data.contributions.filter(
      (a): a is Activity =>
        !!a &&
        typeof a.date === "string" &&
        typeof a.count === "number" &&
        typeof a.level === "number"
    );
  } catch {
    return [];
  }
}
