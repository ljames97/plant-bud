import globals from "globals";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: [
      "node_modules/",
      "dist/",
      "src/__tests__/**/*.js",
      "src/__mocks__/**/*.js"
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest
      },
      ecmaVersion: 2021,
      sourceType: "module"
    },
  }
];
