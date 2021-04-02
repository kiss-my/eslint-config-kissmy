const jsTsCommon = require('./rules/js-ts-common')
const tsRules = require('./rules/ts')

module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    ...jsTsCommon,
    ...tsRules,
  }
}