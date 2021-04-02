const nuxt = require('./rules/nuxt')

module.exports = {
  extends: [
    require.resolve('./vue.js'),
  ],
  rules: {
    ...nuxt,
  },
  settings: {
    'import/resolver': {
      'nuxt-import': {},
    },
  },
}