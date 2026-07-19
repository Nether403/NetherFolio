// Next.js 16 removed `next lint`; use ESLint directly on staged files.
const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames.map((f) => `"${f}"`).join(" ")}`;

/**
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, "prettier --write"],
  "*.mdx": "prettier --write",
};

export default lintStagedConfig;
