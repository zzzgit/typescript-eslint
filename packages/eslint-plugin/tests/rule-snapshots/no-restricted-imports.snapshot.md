# no-restricted-imports

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
import foo from 'import1';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import foo from 'import1';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ 'import1' import is restricted from being used.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
export { foo } from 'import1';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export { foo } from 'import1';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 'import1' import is restricted from being used.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
import foo from 'import1';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import foo from 'import1';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ 'import1' import is restricted from being used.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
export { foo } from 'import1';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export { foo } from 'import1';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 'import1' import is restricted from being used.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
import foo from 'import1/private/foo';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import foo from 'import1/private/foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 'import1/private/foo' import is restricted from being used by a pattern.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
export { foo } from 'import1/private/foo';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export { foo } from 'import1/private/foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 'import1/private/foo' import is restricted from being used by a pattern.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
import foo from 'import-foo';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import foo from 'import-foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 'import-foo' import is restricted from being used. Please use import-bar instead.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
export { foo } from 'import-foo';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export { foo } from 'import-foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 'import-foo' import is restricted from being used. Please use import-bar instead.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
import { Bar } from 'import-foo';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import { Bar } from 'import-foo';
    |          ^^^ 'Bar' import from 'import-foo' is restricted. Please use Bar from /import-bar/baz/ instead.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
export { Bar } from 'import-foo';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export { Bar } from 'import-foo';
    |          ^^^ 'Bar' import from 'import-foo' is restricted. Please use Bar from /import-bar/baz/ instead.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
import foo from 'import1/private/foo';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import foo from 'import1/private/foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 'import1/private/foo' import is restricted from being used by a pattern. usage of import1 private modules not allowed.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
export { foo } from 'import1/private/foo';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export { foo } from 'import1/private/foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 'import1/private/foo' import is restricted from being used by a pattern. usage of import1 private modules not allowed.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
import foo from 'import-foo';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import foo from 'import-foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 'import-foo' import is restricted from being used. Please use import-bar instead.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
import { Bar } from 'import-foo';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import { Bar } from 'import-foo';
    |          ^^^ 'Bar' import from 'import-foo' is restricted. Please use Bar from /import-bar/baz/ instead.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
export { Bar } from 'import-foo';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export { Bar } from 'import-foo';
    |          ^^^ 'Bar' import from 'import-foo' is restricted. Please use Bar from /import-bar/baz/ instead.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
import foo from 'import1/private/bar';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import foo from 'import1/private/bar';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 'import1/private/bar' import is restricted from being used by a pattern. usage of import1 private modules not allowed.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
export { foo } from 'import1/private/bar';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export { foo } from 'import1/private/bar';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 'import1/private/bar' import is restricted from being used by a pattern. usage of import1 private modules not allowed.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
export * from 'import1';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export * from 'import1';
    | ^^^^^^^^^^^^^^^^^^^^^^^^ 'import1' import is restricted from being used.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
import type { InvalidTestCase } from '@typescript-eslint/utils/dist/ts-eslint';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import type { InvalidTestCase } from '@typescript-eslint/utils/dist/ts-eslint';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ '@typescript-eslint/utils/dist/ts-eslint' import is restricted from being used by a pattern.
```
