// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'vue/require-v-for-keys': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'comma-dangle': 0,
    'no-plusplus': 'off',
    'no-undef': 'off',
    'semi': 0,
    'no-param-reassign': ['error', { 'props': false }],
    'space-before-function-paren': 0,
    'one-var': ['error', 'never' ],
    'import/first': 0,
    'import/no-webpack-loader-syntax': 'off',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
    'allowTernary': true,
    'no-unmodified-loop-condition': 'off',
    'eqeqeq': 'off'
  }
}
