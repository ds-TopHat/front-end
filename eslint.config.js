import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginImport from 'eslint-plugin-import';
import react from 'eslint-plugin-react';

export default tseslint.config(
  { ignores: ['node_modules', 'dist', 'dist-ssr'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: 'module',
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: eslintPluginImport,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      // 콘솔 사용 경고
      'no-console': 'warn',
      // 변수는 선언했지만 사용하지 않았을 때 경고
      'no-unused-vars': 'off',
      // TS 전용으로만 사용
      '@typescript-eslint/no-unused-vars': 'warn',
      // if/for 등에 항상 중괄호 사용
      curly: 'error',
      // import 정렬
      'import/order': [
        'warn',
        {
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],
      // JSX 안에 content가 없을 경우 self-closing 강제
      'react/self-closing-comp': 'warn',
      // TS: any 사용 금지
      '@typescript-eslint/no-explicit-any': 'warn',
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
);
