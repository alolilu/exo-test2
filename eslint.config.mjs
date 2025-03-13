import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      "no-var": "error",
      "prefer-const": "error",
    },
  },
  pluginJs.configs.recommended,
];
