import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: ["archive/"], // excludes
	},
	{ files: ["**/*.{js,ts,jsx,tsx}"] }, // includes
	{ languageOptions: { globals: globals.node } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		// overrides default rules
		// default rules: https://eslint.org/docs/latest/rules/
		rules: {
			"no-undef": "warn",
			"prefer-const": "warn",
			"no-unused-vars": "warn",
			"@typescript-eslint/no-unused-vars": "off",
			"no-constant-contidiotn": "warn",
		},
	},
];
