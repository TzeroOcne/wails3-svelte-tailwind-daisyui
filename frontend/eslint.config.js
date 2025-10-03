import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import svelteParser from 'svelte-eslint-parser';
import tseslint from 'typescript-eslint';
/**
 * @typedef {import('eslint/rules/stylistic-issues').StylisticIssues} StylisticIssues
 * @typedef {import('eslint-plugin-svelte/lib/rule-types').RuleOptions} SvelteRulesOptions
 * @typedef {{ [K in keyof StylisticIssues as `@stylistic/${K}`]: StylisticIssues[K] }} StylisticRules
 * @typedef {import('eslint/rules').ESLintRules} JSRules
 * @typedef {{ [K in keyof JSRules as `@typescript-eslint/${K}`]: JSRules[K] }} TSRUles
 * */

/** @type{StylisticRules} */
const stylisticRules = {
  '@stylistic/semi': ['error', 'always', { omitLastInOneLineBlock: true }],
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/quotes': ['error', 'single'],
  '@stylistic/no-multiple-empty-lines': ['error'],
  '@stylistic/indent': ['error', 2],
};
/** @type{JSRules} */
const jsRules = {
  'no-empty': ['error'],
  'no-empty-function': ['error'],
};
/** @type {SvelteRulesOptions} */
const svelteRules = {
  'svelte/indent': ['error', {
    indent: 2,
  }],
};
/** @type {TSRUles} */
const tsRules = {
  '@typescript-eslint/no-unused-expressions': 'off',
  '@typescript-eslint/no-unsafe-function-type': 'off',
};

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      ...js.configs.recommended.rules,
      ...jsRules,
    },
  },
  { files: ['**/*.{js,mjs,cjs,ts}'], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  eslintPluginSvelte.configs['flat/base'],
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: stylisticRules,
  },
  {
    files: ['**/*.svelte', '*.svelte'],
    rules: svelteRules,
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsparser,
      },
    },
  },
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: tsRules,
  },
]);
