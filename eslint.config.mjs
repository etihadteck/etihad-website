import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  js.configs.recommended,
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': ['warn', { usePrettierrc: false }],
      'no-unused-vars': [
        'warn',
        {
          args: 'none',
          varsIgnorePattern: '^[A-Z]',
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  prettierConfig,
];

export default eslintConfig;
