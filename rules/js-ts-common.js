module.exports = {
  'comma-dangle': ['error', 'always-multiline'],
  'indent': ['error', 2, {
    'SwitchCase': 1,
  }],
  'import/no-extraneous-dependencies': ['off'],
  'func-names': ['off'],
  'max-len': ['error', 600],
  'no-console': process.env.NODE_ENV === 'production' ? ['error'] : ['off'],
  'no-debugger': process.env.NODE_ENV === 'production' ? ['error'] : ['off'],
  'semi': ['error', 'never'],
  'space-before-function-paren': ['error', 'never'],
}