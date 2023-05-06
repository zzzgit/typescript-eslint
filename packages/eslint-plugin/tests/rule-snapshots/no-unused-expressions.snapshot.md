# no-unused-expressions

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

if (0) 0;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | if (0) 0;
    |        ^^ Expected an assignment or function call and instead saw an expression.
  3 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

f(0), {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | f(0), {};
    | ^^^^^^^^^ Expected an assignment or function call and instead saw an expression.
  3 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

a, b();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | a, b();
    | ^^^^^^^ Expected an assignment or function call and instead saw an expression.
  3 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

a() &&
  function namedFunctionInExpressionContext() {
    f();
  };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | a() &&
    | ^^^^^^
> 3 |   function namedFunctionInExpressionContext() {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |     f();
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   };
    | ^^^^^ Expected an assignment or function call and instead saw an expression.
  6 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

a?.b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | a?.b;
    | ^^^^^ Expected an assignment or function call and instead saw an expression.
  3 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

(a?.b).c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (a?.b).c;
    | ^^^^^^^^^ Expected an assignment or function call and instead saw an expression.
  3 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

a?.['b'];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | a?.['b'];
    | ^^^^^^^^^ Expected an assignment or function call and instead saw an expression.
  3 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

(a?.['b']).c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (a?.['b']).c;
    | ^^^^^^^^^^^^^ Expected an assignment or function call and instead saw an expression.
  3 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

a?.b()?.c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | a?.b()?.c;
    | ^^^^^^^^^^ Expected an assignment or function call and instead saw an expression.
  3 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

(a?.b()).c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (a?.b()).c;
    | ^^^^^^^^^^^ Expected an assignment or function call and instead saw an expression.
  3 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

one[2]?.[3][4];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | one[2]?.[3][4];
    | ^^^^^^^^^^^^^^^ Expected an assignment or function call and instead saw an expression.
  3 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

one.two?.three.four;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | one.two?.three.four;
    | ^^^^^^^^^^^^^^^^^^^^ Expected an assignment or function call and instead saw an expression.
  3 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

module Foo {
  const foo = true;
  'use strict';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | module Foo {
  3 |   const foo = true;
> 4 |   'use strict';
    |   ^^^^^^^^^^^^^ Expected an assignment or function call and instead saw an expression.
  5 | }
  6 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

namespace Foo {
  export class Foo {}
  export class Bar {}

  'use strict';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace Foo {
  3 |   export class Foo {}
  4 |   export class Bar {}
  5 |
> 6 |   'use strict';
    |   ^^^^^^^^^^^^^ Expected an assignment or function call and instead saw an expression.
  7 | }
  8 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  const foo = true;

  'use strict';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
  3 |   const foo = true;
  4 |
> 5 |   'use strict';
    |   ^^^^^^^^^^^^^ Expected an assignment or function call and instead saw an expression.
  6 | }
  7 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.bar;
    | ^^^^^^^^^^^^^^^^ Expected an assignment or function call and instead saw an expression.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
foo ? foo?.bar : bar.baz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo ? foo?.bar : bar.baz;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Expected an assignment or function call and instead saw an expression.
```
