# kiss my ESLint configuration

## Basic JavaScript rules
```
yarn add -D eslint eslint-config-kissmy
```
```json
{
  "extends": ["kissmy"],
}
```

## Add Vue rules
```
yarn add -D eslint-plugin-vue
```
```json
{
  "extends": ["kissmy", "kissmy/vue"],
}
```

### Add Nuxt rules
```
yarn add -D eslint-plugin-nuxt eslint-import-resolver-nuxt-import
```
```json
{
  "extends": ["kissmy", "kissmy/vue", "kissmy/nuxt"],
}
```
### Add TypeScript rules
```
yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

```json
{
  "overrides": [
    {
      "files": ["**/**/*.ts"],
      "extends": ["kissmy/typescript",],
    },
  ]
}
```

Optionally with Nuxt: 

```json
{
  "overrides": [
    {
      "files": ["**/**/*.ts"],
      "extends": ["kissmy/typescript", "kissmy/nuxt"],
    },
  ]
}
```

### Add Jest rules
```
yarn add -D eslint-plugin-jest
```

```json
{
  "overrides": [
    {
      "files": ["**/*.spec.js"],
      "excludedFiles": ["tests/e2e/**/*.spec.js", "cypress/**/*.js"],
      "extends": ["kissmy/jest"],
    },
  ]
}
```


### Add Cypress rules
```
yarn add -D eslint-plugin-cypress
```

```json
{
  "overrides": [
    {
      "files": ["tests/e2e/**/*.{js,ts}"],
      "extends": ["kissmy/cypress"],
    },
  ]
}
```

## Licence

MIT

