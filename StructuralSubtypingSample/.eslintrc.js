module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'sort-destructure-keys',
    'import-access',
    'unused-imports',
  ],
  rules: {
    // sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-destructure-keys/sort-destructure-keys': 2,
    // import/export
    'unused-imports/no-unused-imports': 'error',
    'import-access/jsdoc': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
