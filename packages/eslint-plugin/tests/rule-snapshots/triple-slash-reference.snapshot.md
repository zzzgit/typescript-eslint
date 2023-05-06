# triple-slash-reference

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

/// <reference types="foo" />
import * as foo from 'foo';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | /// <reference types="foo" />
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use a triple slash reference for foo, use `import` style instead.
  3 | import * as foo from 'foo';
  4 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

/// <reference types="foo" />
import foo = require('foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | /// <reference types="foo" />
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use a triple slash reference for foo, use `import` style instead.
  3 | import foo = require('foo');
  4 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
/// <reference path="foo" />
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /// <reference path="foo" />
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use a triple slash reference for foo, use `import` style instead.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
/// <reference types="foo" />
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /// <reference types="foo" />
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use a triple slash reference for foo, use `import` style instead.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
/// <reference lib="foo" />
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /// <reference lib="foo" />
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use a triple slash reference for foo, use `import` style instead.
```
