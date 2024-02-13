module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    'no-shadow': 0,
    'no-catch-shadow': 0,
    'no-extra-boolean-cast': 0,
    'jest/no-disabled-tests': 0,
    'no-unused-vars': 0,
  },
  overrides: [
    {
      files: ['**/*.spec.*'],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
};
