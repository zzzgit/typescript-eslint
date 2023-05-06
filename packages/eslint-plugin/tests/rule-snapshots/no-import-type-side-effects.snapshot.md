# no-import-type-side-effects

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
import { type A } from 'mod';
```

### Fix Output

<!-- prettier-ignore -->
```ts
import type { A } from 'mod';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import { type A } from 'mod';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ TypeScript will only remove the inline type specifiers which will leave behind a side effect import at runtime. Convert this to a top-level type qualifier to properly remove the entire import.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
import { type A as AA } from 'mod';
```

### Fix Output

<!-- prettier-ignore -->
```ts
import type { A as AA } from 'mod';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import { type A as AA } from 'mod';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ TypeScript will only remove the inline type specifiers which will leave behind a side effect import at runtime. Convert this to a top-level type qualifier to properly remove the entire import.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
import { type A, type B } from 'mod';
```

### Fix Output

<!-- prettier-ignore -->
```ts
import type { A, B } from 'mod';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import { type A, type B } from 'mod';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ TypeScript will only remove the inline type specifiers which will leave behind a side effect import at runtime. Convert this to a top-level type qualifier to properly remove the entire import.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
import { type A as AA, type B as BB } from 'mod';
```

### Fix Output

<!-- prettier-ignore -->
```ts
import type { A as AA, B as BB } from 'mod';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import { type A as AA, type B as BB } from 'mod';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ TypeScript will only remove the inline type specifiers which will leave behind a side effect import at runtime. Convert this to a top-level type qualifier to properly remove the entire import.
```
