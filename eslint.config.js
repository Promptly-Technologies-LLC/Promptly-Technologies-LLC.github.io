import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

export default [
  { ignores: ['dist/**', '.astro/**', 'node_modules/**', '**/*.d.ts'] },
  eslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...tsPlugin.configs['recommended-requiring-type-checking'].rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
];
