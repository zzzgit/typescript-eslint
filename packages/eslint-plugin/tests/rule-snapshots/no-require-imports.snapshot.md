# no-require-imports

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
var lib = require('lib');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var lib = require('lib');
    |           ^^^^^^^^^^^^^^ A `require()` style import is forbidden.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
let lib2 = require('lib2');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let lib2 = require('lib2');
    |            ^^^^^^^^^^^^^^^ A `require()` style import is forbidden.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

var lib5 = require('lib5'),
  lib6 = require('lib6');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | var lib5 = require('lib5'),
    |            ^^^^^^^^^^^^^^^ A `require()` style import is forbidden.
  3 |   lib6 = require('lib6');
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | var lib5 = require('lib5'),
> 3 |   lib6 = require('lib6');
    |          ^^^^^^^^^^^^^^^ A `require()` style import is forbidden.
  4 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
import lib8 = require('lib8');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import lib8 = require('lib8');
    |               ^^^^^^^^^^^^^^^ A `require()` style import is forbidden.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
var lib = require?.('lib');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var lib = require?.('lib');
    |           ^^^^^^^^^^^^^^^^ A `require()` style import is forbidden.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
let lib2 = require?.('lib2');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let lib2 = require?.('lib2');
    |            ^^^^^^^^^^^^^^^^^ A `require()` style import is forbidden.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

var lib5 = require?.('lib5'),
  lib6 = require?.('lib6');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | var lib5 = require?.('lib5'),
    |            ^^^^^^^^^^^^^^^^^ A `require()` style import is forbidden.
  3 |   lib6 = require?.('lib6');
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | var lib5 = require?.('lib5'),
> 3 |   lib6 = require?.('lib6');
    |          ^^^^^^^^^^^^^^^^^ A `require()` style import is forbidden.
  4 |       
```
