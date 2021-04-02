module.exports = {
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-explicit-any': ['off'],
  '@typescript-eslint/no-unused-vars': ['error', {
    'varsIgnorePattern': '[iI]gnored|^_',
    'argsIgnorePattern': '^_',
  }],
}