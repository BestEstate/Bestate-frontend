module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '2022',
    sourceType: 'module',
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-unresolved': 'off',
  },
};
