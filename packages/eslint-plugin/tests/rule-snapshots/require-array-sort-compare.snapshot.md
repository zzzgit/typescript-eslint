# require-array-sort-compare

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: Array<any>) {
          a.sort();
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: Array<any>) {
> 3 |           a.sort();
    |           ^^^^^^^^ Require 'compare' argument.
  4 |         }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: string[]) {
          a.sort();
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: string[]) {
> 3 |           a.sort();
    |           ^^^^^^^^ Require 'compare' argument.
  4 |         }
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: string | string[]) {
          if (Array.isArray(a)) a.sort();
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: string | string[]) {
> 3 |           if (Array.isArray(a)) a.sort();
    |                                 ^^^^^^^^ Require 'compare' argument.
  4 |         }
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: number[] | string[]) {
          a.sort();
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: number[] | string[]) {
> 3 |           a.sort();
    |           ^^^^^^^^ Require 'compare' argument.
  4 |         }
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        function f<T extends number[]>(a: T) {
          a.sort();
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f<T extends number[]>(a: T) {
> 3 |           a.sort();
    |           ^^^^^^^^ Require 'compare' argument.
  4 |         }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        function f<T, U extends T[]>(a: U) {
          a.sort();
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f<T, U extends T[]>(a: U) {
> 3 |           a.sort();
    |           ^^^^^^^^ Require 'compare' argument.
  4 |         }
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: string[]) {
          a?.sort();
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: string[]) {
> 3 |           a?.sort();
    |           ^^^^^^^^^ Require 'compare' argument.
  4 |         }
  5 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        ['foo', 'bar', 'baz'].sort();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         ['foo', 'bar', 'baz'].sort();
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Require 'compare' argument.
  3 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        function getString() {
          return 'foo';
        }
        [getString(), getString()].sort();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function getString() {
  3 |           return 'foo';
  4 |         }
> 5 |         [getString(), getString()].sort();
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Require 'compare' argument.
  6 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

        const foo = 'foo';
        const bar = 'bar';
        const baz = 'baz';
        [foo, bar, baz].sort();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const foo = 'foo';
  3 |         const bar = 'bar';
  4 |         const baz = 'baz';
> 5 |         [foo, bar, baz].sort();
    |         ^^^^^^^^^^^^^^^^^^^^^^ Require 'compare' argument.
  6 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

        [2, 'bar', 'baz'].sort();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         [2, 'bar', 'baz'].sort();
    |         ^^^^^^^^^^^^^^^^^^^^^^^^ Require 'compare' argument.
  3 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

        function getNumber() {
          return 2;
        }
        [2, 3].sort();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function getNumber() {
  3 |           return 2;
  4 |         }
> 5 |         [2, 3].sort();
    |         ^^^^^^^^^^^^^ Require 'compare' argument.
  6 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

        const one = 1;
        const two = 2;
        const three = 3;
        [one, two, three].sort();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const one = 1;
  3 |         const two = 2;
  4 |         const three = 3;
> 5 |         [one, two, three].sort();
    |         ^^^^^^^^^^^^^^^^^^^^^^^^ Require 'compare' argument.
  6 |       
```
