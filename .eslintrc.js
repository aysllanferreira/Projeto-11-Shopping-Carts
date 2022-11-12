module.exports = {
  env: {
    browser: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [
    {
      files: ['script.js'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-alert': 'off',
    'no-console': 'off',
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
    'no-unused-vars': 'warn',
  },
};
