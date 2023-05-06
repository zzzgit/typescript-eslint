# no-shadow TS tests

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

type T = 1;
{
  type T = 2;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = 1;
  3 | {
> 4 |   type T = 2;
    |        ^ 'T' is already declared in the upper scope on line 2 column 6.
  5 | }
  6 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

type T = 1;
function foo<T>(arg: T) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = 1;
> 3 | function foo<T>(arg: T) {}
    |              ^ 'T' is already declared in the upper scope on line 2 column 6.
  4 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

function foo<T>() {
  return function <T>() {};
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo<T>() {
> 3 |   return function <T>() {};
    |                    ^ 'T' is already declared in the upper scope on line 2 column 14.
  4 | }
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

type T = string;
function foo<T extends (arg: any) => void>(arg: T) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = string;
> 3 | function foo<T extends (arg: any) => void>(arg: T) {}
    |              ^ 'T' is already declared in the upper scope on line 2 column 6.
  4 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

const x = 1;
{
  type x = string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const x = 1;
  3 | {
> 4 |   type x = string;
    |        ^ 'x' is already declared in the upper scope on line 2 column 7.
  5 | }
  6 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | type Foo = 1;
    |      ^^^ 'Foo' is already a global variable.
  3 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

const test = 1;
type Fn = (test: string) => typeof test;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const test = 1;
> 3 | type Fn = (test: string) => typeof test;
    |            ^^^^^^^^^^^^ 'test' is already declared in the upper scope on line 2 column 7.
  4 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

type Fn = (Foo: string) => typeof Foo;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | type Fn = (Foo: string) => typeof Foo;
    |            ^^^^^^^^^^^ 'Foo' is already a global variable.
  3 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

const arg = 0;

interface Test {
  (arg: string): typeof arg;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const arg = 0;
  3 |
  4 | interface Test {
> 5 |   (arg: string): typeof arg;
    |    ^^^^^^^^^^^ 'arg' is already declared in the upper scope on line 2 column 7.
  6 | }
  7 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

const arg = 0;

interface Test {
  p1(arg: string): typeof arg;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const arg = 0;
  3 |
  4 | interface Test {
> 5 |   p1(arg: string): typeof arg;
    |      ^^^^^^^^^^^ 'arg' is already declared in the upper scope on line 2 column 7.
  6 | }
  7 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

import type { foo } from './foo';
function doThing(foo: number) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import type { foo } from './foo';
> 3 | function doThing(foo: number) {}
    |                  ^^^^^^^^^^^ 'foo' is already declared in the upper scope on line 2 column 15.
  4 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

import { type foo } from './foo';
function doThing(foo: number) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { type foo } from './foo';
> 3 | function doThing(foo: number) {}
    |                  ^^^^^^^^^^^ 'foo' is already declared in the upper scope on line 2 column 15.
  4 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

import { foo } from './foo';
function doThing(foo: number, bar: number) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { foo } from './foo';
> 3 | function doThing(foo: number, bar: number) {}
    |                  ^^^^^^^^^^^ 'foo' is already declared in the upper scope on line 2 column 10.
  4 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {}

declare module 'bar' {
  export interface Foo {
    x: string;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {}
  3 |
  4 | declare module 'bar' {
> 5 |   export interface Foo {
    |                    ^^^ 'Foo' is already declared in the upper scope on line 2 column 11.
  6 |     x: string;
  7 |   }
  8 | }
  9 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

import type { Foo } from 'bar';

declare module 'baz' {
  export interface Foo {
    x: string;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import type { Foo } from 'bar';
  3 |
  4 | declare module 'baz' {
> 5 |   export interface Foo {
    |                    ^^^ 'Foo' is already declared in the upper scope on line 2 column 15.
  6 |     x: string;
  7 |   }
  8 | }
  9 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

import type { Foo } from 'bar';

declare module 'bar' {
  export type Foo = string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import type { Foo } from 'bar';
  3 |
  4 | declare module 'bar' {
> 5 |   export type Foo = string;
    |               ^^^ 'Foo' is already declared in the upper scope on line 2 column 15.
  6 | }
  7 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

import type { Foo } from 'bar';

declare module 'bar' {
  interface Foo {
    x: string;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import type { Foo } from 'bar';
  3 |
  4 | declare module 'bar' {
> 5 |   interface Foo {
    |             ^^^ 'Foo' is already declared in the upper scope on line 2 column 15.
  6 |     x: string;
  7 |   }
  8 | }
  9 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

import { type Foo } from 'bar';

declare module 'baz' {
  export interface Foo {
    x: string;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { type Foo } from 'bar';
  3 |
  4 | declare module 'baz' {
> 5 |   export interface Foo {
    |                    ^^^ 'Foo' is already declared in the upper scope on line 2 column 15.
  6 |     x: string;
  7 |   }
  8 | }
  9 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

import { type Foo } from 'bar';

declare module 'bar' {
  export type Foo = string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { type Foo } from 'bar';
  3 |
  4 | declare module 'bar' {
> 5 |   export type Foo = string;
    |               ^^^ 'Foo' is already declared in the upper scope on line 2 column 15.
  6 | }
  7 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

import { type Foo } from 'bar';

declare module 'bar' {
  interface Foo {
    x: string;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { type Foo } from 'bar';
  3 |
  4 | declare module 'bar' {
> 5 |   interface Foo {
    |             ^^^ 'Foo' is already declared in the upper scope on line 2 column 15.
  6 |     x: string;
  7 |   }
  8 | }
  9 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

let x = foo((x, y) => {});
let y;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | let x = foo((x, y) => {});
    |              ^ 'x' is already declared in the upper scope on line 2 column 5.
  3 | let y;
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | let x = foo((x, y) => {});
    |                 ^ 'y' is already declared in the upper scope on line 3 column 5.
  3 | let y;
  4 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

function foo<T extends (...args: any[]) => any>(fn: T, args: any[]) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo<T extends (...args: any[]) => any>(fn: T, args: any[]) {}
    |                                                        ^^^^^^^^^^^ 'args' is already a global variable.
  3 |       
```
