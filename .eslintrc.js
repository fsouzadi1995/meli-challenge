module.exports = {
  root: true,
  ignorePatterns: ['.eslintrc.js', 'lint-staged.config.js'],
  extends: ['react-app', 'react-app/jest'],
  plugins: ['react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: [],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': ['warn'],
    'import/order': ['warn', { 'newlines-between': 'always' }],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'react/self-closing-comp': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
  },
};
