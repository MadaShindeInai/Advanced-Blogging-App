module.exports = {
  root: true,
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    project: `./tsconfig.json`,
  },
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    'react/prop-types': 0,
    'global-require': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-use-before-define': 0,
  },
};
