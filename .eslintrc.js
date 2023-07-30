const prettierOptions = require('./.prettierrc');

module.exports = {
  root: true,
  extends: 'next/core-web-vitals',
  plugins: ['eslint-plugin-prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    semi: 'off',
    curly: ['error', 'multi-line', 'consistent'],
    'react/jsx-sort-props': [
      'error',
      { shorthandFirst: true, callbacksLast: true },
    ],
  },
};
