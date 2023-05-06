# typedef

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
const [a] = [1];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const [a] = [1];
    |       ^^^ Expected a type annotation.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
const [a, b] = [1, 2];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const [a, b] = [1, 2];
    |       ^^^^^^ Expected a type annotation.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
const { a } = { a: 1 };
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const { a } = { a: 1 };
    |       ^^^^^ Expected a type annotation.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
const { a, b } = { a: 1, b: 2 };
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const { a, b } = { a: 1, b: 2 };
    |       ^^^^^^^^ Expected a type annotation.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        const {
          id,
          details: {
            name: {
              first,
              middle,
              last,
              forTest: { moreNested },
            },
          },
        } = getUser();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 |         const {
     |               ^
>  3 |           id,
     | ^^^^^^^^^^^^^
>  4 |           details: {
     | ^^^^^^^^^^^^^
>  5 |             name: {
     | ^^^^^^^^^^^^^
>  6 |               first,
     | ^^^^^^^^^^^^^
>  7 |               middle,
     | ^^^^^^^^^^^^^
>  8 |               last,
     | ^^^^^^^^^^^^^
>  9 |               forTest: { moreNested },
     | ^^^^^^^^^^^^^
> 10 |             },
     | ^^^^^^^^^^^^^
> 11 |           },
     | ^^^^^^^^^^^^^
> 12 |         } = getUser();
     | ^^^^^^^^^^ Expected a type annotation.
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const {
   3 |           id,
>  4 |           details: {
     |                    ^
>  5 |             name: {
     | ^^^^^^^^^^^^^^^^^^^
>  6 |               first,
     | ^^^^^^^^^^^^^^^^^^^
>  7 |               middle,
     | ^^^^^^^^^^^^^^^^^^^
>  8 |               last,
     | ^^^^^^^^^^^^^^^^^^^
>  9 |               forTest: { moreNested },
     | ^^^^^^^^^^^^^^^^^^^
> 10 |             },
     | ^^^^^^^^^^^^^^^^^^^
> 11 |           },
     | ^^^^^^^^^^^^ Expected a type annotation.
  12 |         } = getUser();
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const {
   3 |           id,
   4 |           details: {
>  5 |             name: {
     |                   ^
>  6 |               first,
     | ^^^^^^^^^^^^^^^^^^^^
>  7 |               middle,
     | ^^^^^^^^^^^^^^^^^^^^
>  8 |               last,
     | ^^^^^^^^^^^^^^^^^^^^
>  9 |               forTest: { moreNested },
     | ^^^^^^^^^^^^^^^^^^^^
> 10 |             },
     | ^^^^^^^^^^^^^^ Expected a type annotation.
  11 |           },
  12 |         } = getUser();
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const {
   3 |           id,
   4 |           details: {
   5 |             name: {
   6 |               first,
   7 |               middle,
   8 |               last,
>  9 |               forTest: { moreNested },
     |                        ^^^^^^^^^^^^^^ Expected a type annotation.
  10 |             },
  11 |           },
  12 |         } = getUser();
  13 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
const receivesNumber = (a): void => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const receivesNumber = (a): void => {};
    |                         ^ Expected a to have a type annotation.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
const receivesStrings = (a, b): void => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const receivesStrings = (a, b): void => {};
    |                          ^ Expected a to have a type annotation.
```

<!-- prettier-ignore -->
```ts
> 1 | const receivesStrings = (a, b): void => {};
    |                             ^ Expected b to have a type annotation.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          state = 1;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           state = 1;
    |           ^^^^^^^^^^ Expected state to have a type annotation.
  4 |         }
  5 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          ['state'] = 1;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           ['state'] = 1;
    |           ^^^^^^^^^^^^^^ Expected a type annotation.
  4 |         }
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
function receivesNumber(a): void {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function receivesNumber(a): void {}
    |                         ^ Expected a to have a type annotation.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
function receivesStrings(a, b): void {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function receivesStrings(a, b): void {}
    |                          ^ Expected a to have a type annotation.
```

<!-- prettier-ignore -->
```ts
> 1 | function receivesStrings(a, b): void {}
    |                             ^ Expected b to have a type annotation.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
function receivesNumber([a]): void {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function receivesNumber([a]): void {}
    |                         ^^^ Expected a type annotation.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
function receivesNumbers([a, b]): void {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function receivesNumbers([a, b]): void {}
    |                          ^^^^^^ Expected a type annotation.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
function receivesString({ a }): void {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function receivesString({ a }): void {}
    |                         ^^^^^ Expected a type annotation.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
function receivesStrings({ a, b }): void {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function receivesStrings({ a, b }): void {}
    |                          ^^^^^^^^ Expected a type annotation.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          constructor(param) {}
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           constructor(param) {}
    |                       ^^^^^ Expected param to have a type annotation.
  4 |         }
  5 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          constructor(param = 'something') {}
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           constructor(param = 'something') {}
    |                       ^^^^^^^^^^^^^^^^^^^ Expected a type annotation.
  4 |         }
  5 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          constructor(private param = 'something') {}
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           constructor(private param = 'something') {}
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected a type annotation.
  4 |         }
  5 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          public method(x): number {
            return x;
          }
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           public method(x): number {
    |                         ^ Expected x to have a type annotation.
  4 |             return x;
  5 |           }
  6 |         }
  7 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          public method(x = 123): number {
            return x;
          }
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           public method(x = 123): number {
    |                         ^^^^^^^ Expected a type annotation.
  4 |             return x;
  5 |           }
  6 |         }
  7 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          public constructor(public x) {}
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           public constructor(public x) {}
    |                              ^^^^^^^^ Expected a type annotation.
  4 |         }
  5 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = {
          member;
        };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type Test = {
> 3 |           member;
    |           ^^^^^^^ Expected member to have a type annotation.
  4 |         };
  5 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = {
          [i: string];
        };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type Test = {
> 3 |           [i: string];
    |           ^^^^^^^^^^^^ Expected a type annotation.
  4 |         };
  5 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          member;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           member;
    |           ^^^^^^^ Expected member to have a type annotation.
  4 |         }
  5 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          [i: string];
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           [i: string];
    |           ^^^^^^^^^^^^ Expected a type annotation.
  4 |         }
  5 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
const a = 1;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a = 1;
    |       ^^^^^ Expected a to have a type annotation.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

        const a = 1,
          b: number = 2,
          c = 3;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const a = 1,
    |               ^^^^^ Expected a to have a type annotation.
  3 |           b: number = 2,
  4 |           c = 3;
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const a = 1,
  3 |           b: number = 2,
> 4 |           c = 3;
    |           ^^^^^ Expected c to have a type annotation.
  5 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
let a;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a;
    |     ^ Expected a to have a type annotation.
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
let a = 1;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a = 1;
    |     ^^^^^ Expected a to have a type annotation.
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

        let a = 1,
          b: number,
          c = 2;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         let a = 1,
    |             ^^^^^ Expected a to have a type annotation.
  3 |           b: number,
  4 |           c = 2;
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         let a = 1,
  3 |           b: number,
> 4 |           c = 2;
    |           ^^^^^ Expected c to have a type annotation.
  5 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
const foo = 'foo';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = 'foo';
    |       ^^^^^^^^^^^ Expected foo to have a type annotation.
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
const foo = function (): void {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = function (): void {};
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected foo to have a type annotation.
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
const foo = (): void => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = (): void => {};
    |       ^^^^^^^^^^^^^^^^^^^^ Expected foo to have a type annotation.
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  a = (): void => {};
  b = function (): void {};
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   a = (): void => {};
    |   ^^^^^^^^^^^^^^^^^^^ Expected a to have a type annotation.
  4 |   b = function (): void {};
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   a = (): void => {};
> 4 |   b = function (): void {};
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^ Expected b to have a type annotation.
  5 | }
  6 |       
```
