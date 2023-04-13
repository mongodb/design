module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['@emotion', 'simple-import-sort'],
  ignorePatterns: ['**/*.md', '**/*.mdx'],
  extends: [
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'next'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: '16.13.1',
    },
    'import/resolver': {
      typescript: true,
      node: true
    }
  },
  rules: {
    '@emotion/pkg-renaming': 'error',
    'import/no-deprecated': 'error',
    'import/no-named-as-default': 'off',
    'jest/no-conditional-expect': 'off',
    'jest/valid-title': 'off',
    'react/jsx-key': 1,
    // can't detect titles that are string variables
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.tsx'],
      },
    ],
    'react/forbid-prop-types': 'warn',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useIsomorphicLayoutEffect)',
      },
    ],
    'react/sort-comp': 'error',
    'import/no-extraneous-dependencies': 'off',
    'padding-line-between-statements': [
      1,
      {
        blankLine: 'always',
        prev: ['block-like', 'const', 'let', 'if', 'while', 'return'],
        next: 'block-like',
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: ['block-like', 'const', 'let', 'case', 'if', 'while', 'return'],
      },
    ],
    'no-redeclare': 'off',
    // covered by TypeScript
    'no-trailing-spaces': 'error',
    'no-undef': 'off',
    // covered by TypeScript
    'no-var': 'warn',
    'prefer-const': 'warn',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'quotes': [1, 'single', { 'avoidEscape': true }],
    // increase the severity of rules so they are auto-fixable
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        // The regular rule thinks imported types are unused
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'generic',
          },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'class',
            format: ['PascalCase'],
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: false,
            },
          },
        ],
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
          },
        ],
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-inferrable-types': 'warn',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.
              ['^(@|components)(/.*|$)'],
              ['^@leafygreen-ui', '^@?\\w'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
    {
      files: ['website/**/*.{ts,tsx}'],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
    {
      files: ['packages/**/*.spec.{ts,tsx}'],
      globals: {
        expect: true,
        should: true,
        jest: true,
      },
      rules: {
        'jest/no-disabled-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/valid-expect': 'error',
        'jest/expect-expect': [
          'warn',
          {
            assertFunctionNames: ['expect', 'waitForElementToBeRemoved'],
          },
        ],
      },
    },
  ],
};
