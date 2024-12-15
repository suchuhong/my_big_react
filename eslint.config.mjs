import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'], // Apply to all common JavaScript/TypeScript
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				project: true
			},
			globals: {
				...globals.browser,
				...globals.node
			}
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			prettier: pluginPrettierRecommended.plugins.prettier
		},
		rules: {
			'prettier/prettier': 'error',
			'no-case-declarations': 'off',
			'no-constant-condition': 'off',
			'@typescript-eslint/ban-ts-comment': 'off'
		}
	},
	js.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	eslintConfigPrettier // Or put in plugin if you want, but this works fine
];
