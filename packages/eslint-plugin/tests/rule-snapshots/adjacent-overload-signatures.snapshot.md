# adjacent-overload-signatures

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

function wrap() {
  function foo(s: string);
  function foo(n: number);
  type bar = number;
  function foo(sn: string | number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function wrap() {
  3 |   function foo(s: string);
  4 |   function foo(n: number);
  5 |   type bar = number;
> 6 |   function foo(sn: string | number) {}
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  7 | }
  8 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

if (true) {
  function foo(s: string);
  function foo(n: number);
  let a = 1;
  function foo(sn: string | number) {}
  foo(a);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | if (true) {
  3 |   function foo(s: string);
  4 |   function foo(n: number);
  5 |   let a = 1;
> 6 |   function foo(sn: string | number) {}
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  7 |   foo(a);
  8 | }
  9 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

export function foo(s: string);
export function foo(n: number);
export function bar(): void {}
export function baz(): void {}
export function foo(sn: string | number) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export function foo(s: string);
  3 | export function foo(n: number);
  4 | export function bar(): void {}
  5 | export function baz(): void {}
> 6 | export function foo(sn: string | number) {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  7 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

export function foo(s: string);
export function foo(n: number);
export type bar = number;
export type baz = number | string;
export function foo(sn: string | number) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export function foo(s: string);
  3 | export function foo(n: number);
  4 | export type bar = number;
  5 | export type baz = number | string;
> 6 | export function foo(sn: string | number) {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  7 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

function foo(s: string);
function foo(n: number);
function bar(): void {}
function baz(): void {}
function foo(sn: string | number) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(s: string);
  3 | function foo(n: number);
  4 | function bar(): void {}
  5 | function baz(): void {}
> 6 | function foo(sn: string | number) {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  7 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

function foo(s: string);
function foo(n: number);
type bar = number;
type baz = number | string;
function foo(sn: string | number) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(s: string);
  3 | function foo(n: number);
  4 | type bar = number;
  5 | type baz = number | string;
> 6 | function foo(sn: string | number) {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  7 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

function foo(s: string) {}
function foo(n: number) {}
const a = '';
const b = '';
function foo(sn: string | number) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(s: string) {}
  3 | function foo(n: number) {}
  4 | const a = '';
  5 | const b = '';
> 6 | function foo(sn: string | number) {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  7 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

function foo(s: string) {}
function foo(n: number) {}
class Bar {}
function foo(sn: string | number) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(s: string) {}
  3 | function foo(n: number) {}
  4 | class Bar {}
> 5 | function foo(sn: string | number) {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  6 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

function foo(s: string) {}
function foo(n: number) {}
function foo(sn: string | number) {}
class Bar {
  foo(s: string);
  foo(n: number);
  name: string;
  foo(sn: string | number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | function foo(s: string) {}
   3 | function foo(n: number) {}
   4 | function foo(sn: string | number) {}
   5 | class Bar {
   6 |   foo(s: string);
   7 |   foo(n: number);
   8 |   name: string;
>  9 |   foo(sn: string | number) {}
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  10 | }
  11 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(s: string);
declare function foo(n: number);
declare function bar(): void;
declare function baz(): void;
declare function foo(sn: string | number);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(s: string);
  3 | declare function foo(n: number);
  4 | declare function bar(): void;
  5 | declare function baz(): void;
> 6 | declare function foo(sn: string | number);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  7 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(s: string);
declare function foo(n: number);
const a = '';
const b = '';
declare function foo(sn: string | number);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(s: string);
  3 | declare function foo(n: number);
  4 | const a = '';
  5 | const b = '';
> 6 | declare function foo(sn: string | number);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  7 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

declare module 'Foo' {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function bar(): void;
  export function baz(): void;
  export function foo(sn: string | number): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare module 'Foo' {
  3 |   export function foo(s: string): void;
  4 |   export function foo(n: number): void;
  5 |   export function bar(): void;
  6 |   export function baz(): void;
> 7 |   export function foo(sn: string | number): void;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  8 | }
  9 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

declare module 'Foo' {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function foo(sn: string | number): void;
  function baz(s: string): void;
  export function bar(): void;
  function baz(n: number): void;
  function baz(sn: string | number): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | declare module 'Foo' {
   3 |   export function foo(s: string): void;
   4 |   export function foo(n: number): void;
   5 |   export function foo(sn: string | number): void;
   6 |   function baz(s: string): void;
   7 |   export function bar(): void;
>  8 |   function baz(n: number): void;
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All baz signatures should be adjacent.
   9 |   function baz(sn: string | number): void;
  10 | }
  11 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function bar(): void;
  export function baz(): void;
  export function foo(sn: string | number): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare namespace Foo {
  3 |   export function foo(s: string): void;
  4 |   export function foo(n: number): void;
  5 |   export function bar(): void;
  6 |   export function baz(): void;
> 7 |   export function foo(sn: string | number): void;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  8 | }
  9 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function foo(sn: string | number): void;
  function baz(s: string): void;
  export function bar(): void;
  function baz(n: number): void;
  function baz(sn: string | number): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | declare namespace Foo {
   3 |   export function foo(s: string): void;
   4 |   export function foo(n: number): void;
   5 |   export function foo(sn: string | number): void;
   6 |   function baz(s: string): void;
   7 |   export function bar(): void;
>  8 |   function baz(n: number): void;
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All baz signatures should be adjacent.
   9 |   function baz(sn: string | number): void;
  10 | }
  11 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  baz(): void;
  foo(sn: string | number): void;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   foo(s: string): void;
  4 |   foo(n: number): void;
  5 |   bar(): void;
  6 |   baz(): void;
> 7 |   foo(sn: string | number): void;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  8 | };
  9 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  foo(s: string): void;
  ['foo'](n: number): void;
  bar(): void;
  baz(): void;
  foo(sn: string | number): void;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   foo(s: string): void;
  4 |   ['foo'](n: number): void;
  5 |   bar(): void;
  6 |   baz(): void;
> 7 |   foo(sn: string | number): void;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  8 | };
  9 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  foo(s: string): void;
  name: string;
  foo(n: number): void;
  foo(sn: string | number): void;
  bar(): void;
  baz(): void;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Foo = {
   3 |   foo(s: string): void;
   4 |   name: string;
>  5 |   foo(n: number): void;
     |   ^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
   6 |   foo(sn: string | number): void;
   7 |   bar(): void;
   8 |   baz(): void;
   9 | };
  10 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  (s: string): void;
  foo(n: number): void;
  (n: number): void;
  (sn: string | number): void;
  bar(): void;
  baz(): void;
  call(): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 |   (s: string): void;
   4 |   foo(n: number): void;
>  5 |   (n: number): void;
     |   ^^^^^^^^^^^^^^^^^^ All call signatures should be adjacent.
   6 |   (sn: string | number): void;
   7 |   bar(): void;
   8 |   baz(): void;
   9 |   call(): void;
  10 | }
  11 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  baz(): void;
  foo(sn: string | number): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   foo(s: string): void;
  4 |   foo(n: number): void;
  5 |   bar(): void;
  6 |   baz(): void;
> 7 |   foo(sn: string | number): void;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  8 | }
  9 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  foo(s: string): void;
  ['foo'](n: number): void;
  bar(): void;
  baz(): void;
  foo(sn: string | number): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   foo(s: string): void;
  4 |   ['foo'](n: number): void;
  5 |   bar(): void;
  6 |   baz(): void;
> 7 |   foo(sn: string | number): void;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  8 | }
  9 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  foo(s: string): void;
  'foo'(n: number): void;
  bar(): void;
  baz(): void;
  foo(sn: string | number): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   foo(s: string): void;
  4 |   'foo'(n: number): void;
  5 |   bar(): void;
  6 |   baz(): void;
> 7 |   foo(sn: string | number): void;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  8 | }
  9 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  foo(s: string): void;
  name: string;
  foo(n: number): void;
  foo(sn: string | number): void;
  bar(): void;
  baz(): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 |   foo(s: string): void;
   4 |   name: string;
>  5 |   foo(n: number): void;
     |   ^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
   6 |   foo(sn: string | number): void;
   7 |   bar(): void;
   8 |   baz(): void;
   9 | }
  10 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  foo(): void;
  bar: {
    baz(s: string): void;
    baz(n: number): void;
    foo(): void;
    baz(sn: string | number): void;
  };
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 |   foo(): void;
   4 |   bar: {
   5 |     baz(s: string): void;
   6 |     baz(n: number): void;
   7 |     foo(): void;
>  8 |     baz(sn: string | number): void;
     |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All baz signatures should be adjacent.
   9 |   };
  10 | }
  11 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  new (s: string);
  new (n: number);
  foo(): void;
  bar(): void;
  new (sn: string | number);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   new (s: string);
  4 |   new (n: number);
  5 |   foo(): void;
  6 |   bar(): void;
> 7 |   new (sn: string | number);
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^ All new signatures should be adjacent.
  8 | }
  9 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  new (s: string);
  foo(): void;
  new (n: number);
  bar(): void;
  new (sn: string | number);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   new (s: string);
  4 |   foo(): void;
> 5 |   new (n: number);
    |   ^^^^^^^^^^^^^^^^ All new signatures should be adjacent.
  6 |   bar(): void;
  7 |   new (sn: string | number);
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   new (s: string);
  4 |   foo(): void;
  5 |   new (n: number);
  6 |   bar(): void;
> 7 |   new (sn: string | number);
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^ All new signatures should be adjacent.
  8 | }
  9 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(s: string);
  constructor(n: number);
  bar(): void {}
  baz(): void {}
  constructor(sn: string | number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   constructor(s: string);
  4 |   constructor(n: number);
  5 |   bar(): void {}
  6 |   baz(): void {}
> 7 |   constructor(sn: string | number) {}
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All constructor signatures should be adjacent.
  8 | }
  9 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void {}
  baz(): void {}
  foo(sn: string | number): void {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   foo(s: string): void;
  4 |   foo(n: number): void;
  5 |   bar(): void {}
  6 |   baz(): void {}
> 7 |   foo(sn: string | number): void {}
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  8 | }
  9 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  foo(s: string): void;
  ['foo'](n: number): void;
  bar(): void {}
  baz(): void {}
  foo(sn: string | number): void {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   foo(s: string): void;
  4 |   ['foo'](n: number): void;
  5 |   bar(): void {}
  6 |   baz(): void {}
> 7 |   foo(sn: string | number): void {}
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
  8 | }
  9 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  // prettier-ignore
  "foo"(s: string): void;
  foo(n: number): void;
  bar(): void {}
  baz(): void {}
  foo(sn: string | number): void {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   // prettier-ignore
   4 |   "foo"(s: string): void;
   5 |   foo(n: number): void;
   6 |   bar(): void {}
   7 |   baz(): void {}
>  8 |   foo(sn: string | number): void {}
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
   9 | }
  10 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(s: string);
  name: string;
  constructor(n: number);
  constructor(sn: string | number) {}
  bar(): void {}
  baz(): void {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   constructor(s: string);
   4 |   name: string;
>  5 |   constructor(n: number);
     |   ^^^^^^^^^^^^^^^^^^^^^^^ All constructor signatures should be adjacent.
   6 |   constructor(sn: string | number) {}
   7 |   bar(): void {}
   8 |   baz(): void {}
   9 | }
  10 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  foo(s: string): void;
  name: string;
  foo(n: number): void;
  foo(sn: string | number): void {}
  bar(): void {}
  baz(): void {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   foo(s: string): void;
   4 |   name: string;
>  5 |   foo(n: number): void;
     |   ^^^^^^^^^^^^^^^^^^^^^ All foo signatures should be adjacent.
   6 |   foo(sn: string | number): void {}
   7 |   bar(): void {}
   8 |   baz(): void {}
   9 | }
  10 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  static foo(s: string): void;
  name: string;
  static foo(n: number): void;
  static foo(sn: string | number): void {}
  bar(): void {}
  baz(): void {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   static foo(s: string): void;
   4 |   name: string;
>  5 |   static foo(n: number): void;
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All static foo signatures should be adjacent.
   6 |   static foo(sn: string | number): void {}
   7 |   bar(): void {}
   8 |   baz(): void {}
   9 | }
  10 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  #private(): void;
  '#private'(): void;
  #private(arg: number): void {}
  '#private'(arg: number): void {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
  3 |   #private(): void;
  4 |   '#private'(): void;
> 5 |   #private(arg: number): void {}
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All #private signatures should be adjacent.
  6 |   '#private'(arg: number): void {}
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
  3 |   #private(): void;
  4 |   '#private'(): void;
  5 |   #private(arg: number): void {}
> 6 |   '#private'(arg: number): void {}
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All "#private" signatures should be adjacent.
  7 | }
  8 |       
```
