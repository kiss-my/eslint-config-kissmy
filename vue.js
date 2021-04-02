const vue = require('./rules/vue')

module.exports = {
  extends: [
    'plugin:vue/recommended',
  ],
  rules: {
    ...vue,
  },
}