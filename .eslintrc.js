// module.exports = {
//   root: true,
//   extends: '@react-native-community',
//   parser: '@typescript-eslint/parser',
//   plugins: ['@typescript-eslint'],
// };
module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
};
