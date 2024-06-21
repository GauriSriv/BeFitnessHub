module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/function-component-definition': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'react/state-in-constructor': 'off',
    'import/prefer-default-export': 'off',
  },
};
