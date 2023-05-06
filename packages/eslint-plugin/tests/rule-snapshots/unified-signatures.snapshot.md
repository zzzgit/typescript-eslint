# unified-signatures

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

function f(a: number): void;
function f(b: string): void;
function f(a: number | string): void {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function f(a: number): void;
> 3 | function f(b: string): void;
    |            ^^^^^^^^^ These overloads can be combined into one signature taking `number | string`.
  4 | function f(a: number | string): void {}
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

function f(x: number): void;
function f(x: string): void;
function f(x: any): any {
  return x;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function f(x: number): void;
> 3 | function f(x: string): void;
    |            ^^^^^^^^^ These overloads can be combined into one signature taking `number | string`.
  4 | function f(x: any): any {
  5 |   return x;
  6 | }
  7 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

function f(x: number): void;
function f(x: string): void;
function f(x: any): any {
  return x;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function f(x: number): void;
> 3 | function f(x: string): void;
    |            ^^^^^^^^^ These overloads can be combined into one signature taking `number | string`.
  4 | function f(x: any): any {
  5 |   return x;
  6 | }
  7 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

function opt(xs?: number[]): void;
function opt(xs: number[], y: string): void;
function opt(...args: any[]) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function opt(xs?: number[]): void;
> 3 | function opt(xs: number[], y: string): void;
    |                            ^^^^^^^^^ These overloads can be combined into one signature with an optional parameter.
  4 | function opt(...args: any[]) {}
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

interface I {
  a0(): void;
  a0(x: string): string;
  a0(x: number): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface I {
  3 |   a0(): void;
  4 |   a0(x: string): string;
> 5 |   a0(x: number): void;
    |      ^^^^^^^^^ This overload and the one on line 3 can be combined into one signature with an optional parameter.
  6 | }
  7 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

interface I {
  a0(): void;
  a0(x: string): string;
  a0(x: number): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface I {
  3 |   a0(): void;
  4 |   a0(x: string): string;
> 5 |   a0(x: number): void;
    |      ^^^^^^^^^ This overload and the one on line 3 can be combined into one signature with an optional parameter.
  6 | }
  7 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

interface I {
  a1(): void;
  a1(x: number): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface I {
  3 |   a1(): void;
> 4 |   a1(x: number): void;
    |      ^^^^^^^^^ These overloads can be combined into one signature with an optional parameter.
  5 | }
  6 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

interface I {
  a3(): void;
  a3(x: number, y?: number, ...z: number[]): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface I {
  3 |   a3(): void;
> 4 |   a3(x: number, y?: number, ...z: number[]): void;
    |                             ^^^^^^^^^^^^^^ These overloads can be combined into one signature with a rest parameter.
  5 | }
  6 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

interface I {
  b(): void;
  b(...x: number[]): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface I {
  3 |   b(): void;
> 4 |   b(...x: number[]): void;
    |     ^^^^^^^^^^^^^^ These overloads can be combined into one signature with a rest parameter.
  5 | }
  6 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

interface I {
  c(): void;
  c(x?: number): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface I {
  3 |   c(): void;
> 4 |   c(x?: number): void;
    |     ^^^^^^^^^^ These overloads can be combined into one signature with an optional parameter.
  5 | }
  6 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

interface I {
  c2(x?: number): void;
  c2(x?: string): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface I {
  3 |   c2(x?: number): void;
> 4 |   c2(x?: string): void;
    |      ^^^^^^^^^^ These overloads can be combined into one signature taking `number | string`.
  5 | }
  6 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

interface I {
  d(x: number): void;
  d(x: string): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface I {
  3 |   d(x: number): void;
> 4 |   d(x: string): void;
    |     ^^^^^^^^^ These overloads can be combined into one signature taking `number | string`.
  5 | }
  6 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

type T = {
  (): void;
  (x: number): void;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = {
  3 |   (): void;
> 4 |   (x: number): void;
    |    ^^^^^^^^^ These overloads can be combined into one signature with an optional parameter.
  5 | };
  6 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

declare class C {
  constructor();
  constructor(x: number);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare class C {
  3 |   constructor();
> 4 |   constructor(x: number);
    |               ^^^^^^^^^ These overloads can be combined into one signature with an optional parameter.
  5 | }
  6 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

interface I {
  f(x: number);
  f(x: string | boolean);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface I {
  3 |   f(x: number);
> 4 |   f(x: string | boolean);
    |     ^^^^^^^^^^^^^^^^^^^ These overloads can be combined into one signature taking `number | string | boolean`.
  5 | }
  6 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

interface I {
  f(x: number);
  f(x: [string, boolean]);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface I {
  3 |   f(x: number);
> 4 |   f(x: [string, boolean]);
    |     ^^^^^^^^^^^^^^^^^^^^ These overloads can be combined into one signature taking `number | [string, boolean]`.
  5 | }
  6 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

interface Generic<T> {
  y(x: T[]): void;
  y(x: T): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Generic<T> {
  3 |   y(x: T[]): void;
> 4 |   y(x: T): void;
    |     ^^^^ These overloads can be combined into one signature taking `T[] | T`.
  5 | }
  6 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

function f<T>(x: T[]): void;
function f<T>(x: T): void;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function f<T>(x: T[]): void;
> 3 | function f<T>(x: T): void;
    |               ^^^^ These overloads can be combined into one signature taking `T[] | T`.
  4 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

function f<T extends number>(x: T[]): void;
function f<T extends number>(x: T): void;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function f<T extends number>(x: T[]): void;
> 3 | function f<T extends number>(x: T): void;
    |                              ^^^^ These overloads can be combined into one signature taking `T[] | T`.
  4 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

abstract class Foo {
  public abstract f(x: number): void;
  public abstract f(x: string): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class Foo {
  3 |   public abstract f(x: number): void;
> 4 |   public abstract f(x: string): void;
    |                     ^^^^^^^^^ These overloads can be combined into one signature taking `number | string`.
  5 | }
  6 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  'f'(x: string): void;
  'f'(x: number): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   'f'(x: string): void;
> 4 |   'f'(x: number): void;
    |       ^^^^^^^^^ These overloads can be combined into one signature taking `string | number`.
  5 | }
  6 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  new (x: string): Foo;
  new (x: number): Foo;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   new (x: string): Foo;
> 4 |   new (x: number): Foo;
    |        ^^^^^^^^^ These overloads can be combined into one signature taking `string | number`.
  5 | }
  6 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

enum Enum {
  Func = 'function',
}

interface IFoo {
  [Enum.Func](x: string): void;
  [Enum.Func](x: number): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | enum Enum {
   3 |   Func = 'function',
   4 | }
   5 |
   6 | interface IFoo {
   7 |   [Enum.Func](x: string): void;
>  8 |   [Enum.Func](x: number): void;
     |               ^^^^^^^^^ These overloads can be combined into one signature taking `string | number`.
   9 | }
  10 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

export function foo(line: number): number;
export function foo(line: number, character?: number): number;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export function foo(line: number): number;
> 3 | export function foo(line: number, character?: number): number;
    |                                   ^^^^^^^^^^^^^^^^^^ These overloads can be combined into one signature with an optional parameter.
  4 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(line: number): number;
export function foo(line: number, character?: number): number;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(line: number): number;
> 3 | export function foo(line: number, character?: number): number;
    |                                   ^^^^^^^^^^^^^^^^^^ These overloads can be combined into one signature with an optional parameter.
  4 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

declare module 'foo' {
  export default function (foo: number): string[];
  export default function (foo: number, bar?: string): string[];
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare module 'foo' {
  3 |   export default function (foo: number): string[];
> 4 |   export default function (foo: number, bar?: string): string[];
    |                                         ^^^^^^^^^^^^ These overloads can be combined into one signature with an optional parameter.
  5 | }
  6 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

export default function (foo: number): string[];
export default function (foo: number, bar?: string): string[];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export default function (foo: number): string[];
> 3 | export default function (foo: number, bar?: string): string[];
    |                                       ^^^^^^^^^^^^ These overloads can be combined into one signature with an optional parameter.
  4 |       
```
