import { Suspense } from "react";

import { getGitHubContributions } from "../../data/github-contributions";
import { Panel } from "../panel";
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph";

async function GitHubContributionGraphLoader() {
  const contributions = await getGitHubContributions();
  return <GitHubContributionGraph contributions={contributions} />;
}

export function GitHubContributions() {
  return (
    <Panel>
      <h2 className="sr-only">GitHub Contributions</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraphLoader />
      </Suspense>
    </Panel>
  );
}
