const nuxt = require('./rules/nuxt')

module.exports = {
  rules: {
    ...nuxt,
  },
  settings: {
    'import/resolver': {
      'nuxt-import': {},
    },
  },
}