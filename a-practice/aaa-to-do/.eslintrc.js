module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:node/recommended", "plugin:jest/recommended", "prettier"],
  plugins: ["prettier", "jest"],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-console": "off",
    "no-process-exit": "off",
    "node/no-unpublished-require": [
      "error",
      {
        allowModules: ["supertest", "jest"],
      },
    ],
    "jest/expect-expect": "error",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
  },
  overrides: [
    {
      files: ["tests/**/*.js", "**/*.test.js"],
      rules: {
        "node/no-unpublished-require": "off",
      },
    },
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
      rules: {
        "node/no-unsupported-features/es-syntax": "off",
        "node/no-missing-import": "off",
      },
    },
  ],
};
