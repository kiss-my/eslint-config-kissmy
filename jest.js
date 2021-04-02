module.exports = {
  env: {
    'jest/globals': true,
  },
  plugins: ['jest'],
  extends: ['plugin:jest/all'],
  rules: {
    // Jest
    'jest/lowercase-name': ['error', { 'ignore': ['describe'] }],
  },

}