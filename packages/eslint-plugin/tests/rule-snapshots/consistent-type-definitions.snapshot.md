# consistent-type-definitions

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
type T = { x: number; };
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface T { x: number; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = { x: number; };
    |      ^ Use an `interface` instead of a `type`.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
type T={ x: number; };
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface T { x: number; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T={ x: number; };
    |      ^ Use an `interface` instead of a `type`.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
type T=                         { x: number; };
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface T { x: number; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T=                         { x: number; };
    |      ^ Use an `interface` instead of a `type`.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

export type W<T> = {
  x: T;
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

export interface W<T> {
  x: T;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export type W<T> = {
    |             ^ Use an `interface` instead of a `type`.
  3 |   x: T;
  4 | };
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
interface T { x: number; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = { x: number; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface T { x: number; }
    |           ^ Use a `type` instead of an `interface`.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
interface T{ x: number; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = { x: number; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface T{ x: number; }
    |           ^ Use a `type` instead of an `interface`.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
interface T                          { x: number; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = { x: number; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface T                          { x: number; }
    |           ^ Use a `type` instead of an `interface`.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
interface A extends B, C { x: number; };
```

### Fix Output

<!-- prettier-ignore -->
```ts
type A = { x: number; } & B & C;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface A extends B, C { x: number; };
    |           ^ Use a `type` instead of an `interface`.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
interface A extends B<T1>, C<T2> { x: number; };
```

### Fix Output

<!-- prettier-ignore -->
```ts
type A = { x: number; } & B<T1> & C<T2>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface A extends B<T1>, C<T2> { x: number; };
    |           ^ Use a `type` instead of an `interface`.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

export interface W<T> {
  x: T;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

export type W<T> = {
  x: T;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export interface W<T> {
    |                  ^ Use a `type` instead of an `interface`.
  3 |   x: T;
  4 | }
  5 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

namespace JSX {
  interface Array<T> {
    foo(x: (x: number) => T): T[];
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

namespace JSX {
  type Array<T> = {
    foo(x: (x: number) => T): T[];
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace JSX {
> 3 |   interface Array<T> {
    |             ^^^^^ Use a `type` instead of an `interface`.
  4 |     foo(x: (x: number) => T): T[];
  5 |   }
  6 | }
  7 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

global {
  interface Array<T> {
    foo(x: (x: number) => T): T[];
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

global {
  type Array<T> = {
    foo(x: (x: number) => T): T[];
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | global {
> 3 |   interface Array<T> {
    |             ^^^^^ Use a `type` instead of an `interface`.
  4 |     foo(x: (x: number) => T): T[];
  5 |   }
  6 | }
  7 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

declare global {
  interface Array<T> {
    foo(x: (x: number) => T): T[];
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare global {
> 3 |   interface Array<T> {
    |             ^^^^^ Use a `type` instead of an `interface`.
  4 |     foo(x: (x: number) => T): T[];
  5 |   }
  6 | }
  7 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

declare global {
  namespace Foo {
    interface Bar {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare global {
  3 |   namespace Foo {
> 4 |     interface Bar {}
    |               ^^^ Use a `type` instead of an `interface`.
  5 |   }
  6 | }
  7 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

export default interface Test {
  bar(): string;
  foo(): number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Test = {
  bar(): string;
  foo(): number;
}
export default Test
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export default interface Test {
    |                          ^^^^ Use a `type` instead of an `interface`.
  3 |   bar(): string;
  4 |   foo(): number;
  5 | }
  6 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

export declare type Test = {
  foo: string;
  bar: string;
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

export declare interface Test {
  foo: string;
  bar: string;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export declare type Test = {
    |                     ^^^^ Use an `interface` instead of a `type`.
  3 |   foo: string;
  4 |   bar: string;
  5 | };
  6 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

export declare interface Test {
  foo: string;
  bar: string;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

export declare type Test = {
  foo: string;
  bar: string;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export declare interface Test {
    |                          ^^^^ Use a `type` instead of an `interface`.
  3 |   foo: string;
  4 |   bar: string;
  5 | }
  6 |       
```
