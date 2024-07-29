# @antfu/eslint-define-config

A fork of [eslint-define-config](https://github.com/Shinigami92/eslint-define-config) to experiment better Flat Config support.

## Changes In This Fork

### 1. Re-export Rules for Each Plugin

```ts
import {
  VitestRules,
  VueRules,
  // ...
} from '@antfu/eslint-define-config'
```

### 2. Allow Overriding Rules

```ts
import pluginVitest from 'eslint-plugin-vitest'
import {
  defineFlatConfig,
  VitestRules
} from '@antfu/eslint-define-config'

export default defineFlatConfig<VitestRules, /* Strict */ true>({
  plugins: {
    vitest: pluginVitest,
  },
  rules: {
    // only `vitest/` rules are allowed and will be auto-completed
    'vitest/no-async': 'error',

    // @ts-expect-error not allowed
    'indent': 'error'
  },
})
```

### 3. Support Renaming Rules

```ts
import {
  RenamePrefix,
  TypeScriptRules // { '@typescript-eslint/indent': 'error', ... }
} from '@antfu/eslint-define-config'

type RenamedRules = RenamePrefix<TypeScriptRules, '@typescript-eslint/', 'ts/'>
// { 'ts/indent': 'error', ... }
```

This way it could work for Flat Config plugin renaming:

```ts
import pluginTypeScript from '@typescript-eslint/eslint-plugin'
import {
  defineFlatConfig,
  RenamePrefix,
  TypeScriptRules
} from '@antfu/eslint-define-config'

type RenamedRules = RenamePrefix<TypeScriptRules, '@typescript-eslint/', 'ts/'>

export default defineFlatConfig<RenamedRules>({
  plugins: {
    ts: pluginTypeScript, // renames to `ts/`
  },
  rules: {
    'ts/indent': 'error',

    // now we have auto-completion for `ts/` rules
  },
})
```
