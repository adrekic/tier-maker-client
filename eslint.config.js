import js from "@eslint/js"
import reactPlugin from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
	{ ignores: ["dist"] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx,js}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			react: reactPlugin,
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react/react-in-jsx-scope": "off",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "error",
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					varsIgnorePattern: "^_",
					argsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_",
				},
			],
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},
)
