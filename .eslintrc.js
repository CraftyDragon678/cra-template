module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-nested-ternary': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.stories.tsx'] },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin', 'external', 'internal', 'parent', 'sibling', 'index',
        ],
        pathGroups: [{
          pattern: '@src/**',
          group: 'internal',
        }]
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
      alias: {
        map: [
          ['@src', './src'],
        ],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};