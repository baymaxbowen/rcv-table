import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'

export default tseslint.config(
  // 基础 JavaScript 推荐配置
  js.configs.recommended,

  // TypeScript 推荐配置
  ...tseslint.configs.recommended,

  // React 配置
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'react/react-in-jsx-scope': 'off',
    },
  },

  // 忽略配置
  {
    ignores: [
      'dist',
      'node_modules',
      '**/*.d.ts',
      'coverage',
      '.vite',
      'apps/playground/dist',
      'packages/*/dist',
    ],
  }
)
