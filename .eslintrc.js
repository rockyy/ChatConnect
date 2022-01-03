module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb', 'airbnb/hooks', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'no-null'],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error", { "functions": true, "classes": true, "variables": false }],
    'no-null/no-null': ['error'],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ], // force to define function return type
    'class-methods-use-this': [
      'error',
      { exceptMethods: ['componentDidCatch', 'componentDidAppear', 'componentDidDisappear'] },
    ],
    'import/no-unresolved': ['error', { ignore: ['@app'] }], // ignore import with @app & .
    'max-len': ['error', 120], // change max length for a line to 120
    'no-console': 'error', // don't allow console
     // no params reassigned except using immer
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft', 'draftState'] }],
    // don't use unused expressions except short circuit
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // don't use unused var except with _ prefix
    '@typescript-eslint/no-explicit-any': ['error'], // forbid to use 'any' type
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};