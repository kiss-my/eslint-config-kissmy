const jsTsCommon = require("./rules/js-ts-common");
const js = require("./rules/js");

module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    ...jsTsCommon,
    ...js,
  }
}