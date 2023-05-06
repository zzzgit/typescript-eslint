# no-unnecessary-condition

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

const b1 = true;
declare const b2: boolean;
const t1 = b1 && b2;
const t2 = b1 || b2;
if (b1 && b2) {
}
if (b2 && b1) {
}
while (b1 && b2) {}
while (b2 && b1) {}
for (let i = 0; b1 && b2; i++) {
  break;
}
const t1 = b1 && b2 ? 'yes' : 'no';
const t1 = b2 && b1 ? 'yes' : 'no';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const b1 = true;
   3 | declare const b2: boolean;
>  4 | const t1 = b1 && b2;
     |            ^^ Unnecessary conditional, value is always truthy.
   5 | const t2 = b1 || b2;
   6 | if (b1 && b2) {
   7 | }
   8 | if (b2 && b1) {
   9 | }
  10 | while (b1 && b2) {}
  11 | while (b2 && b1) {}
  12 | for (let i = 0; b1 && b2; i++) {
  13 |   break;
  14 | }
  15 | const t1 = b1 && b2 ? 'yes' : 'no';
  16 | const t1 = b2 && b1 ? 'yes' : 'no';
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const b1 = true;
   3 | declare const b2: boolean;
   4 | const t1 = b1 && b2;
>  5 | const t2 = b1 || b2;
     |            ^^ Unnecessary conditional, value is always truthy.
   6 | if (b1 && b2) {
   7 | }
   8 | if (b2 && b1) {
   9 | }
  10 | while (b1 && b2) {}
  11 | while (b2 && b1) {}
  12 | for (let i = 0; b1 && b2; i++) {
  13 |   break;
  14 | }
  15 | const t1 = b1 && b2 ? 'yes' : 'no';
  16 | const t1 = b2 && b1 ? 'yes' : 'no';
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const b1 = true;
   3 | declare const b2: boolean;
   4 | const t1 = b1 && b2;
   5 | const t2 = b1 || b2;
>  6 | if (b1 && b2) {
     |     ^^ Unnecessary conditional, value is always truthy.
   7 | }
   8 | if (b2 && b1) {
   9 | }
  10 | while (b1 && b2) {}
  11 | while (b2 && b1) {}
  12 | for (let i = 0; b1 && b2; i++) {
  13 |   break;
  14 | }
  15 | const t1 = b1 && b2 ? 'yes' : 'no';
  16 | const t1 = b2 && b1 ? 'yes' : 'no';
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const b1 = true;
   3 | declare const b2: boolean;
   4 | const t1 = b1 && b2;
   5 | const t2 = b1 || b2;
   6 | if (b1 && b2) {
   7 | }
>  8 | if (b2 && b1) {
     |           ^^ Unnecessary conditional, value is always truthy.
   9 | }
  10 | while (b1 && b2) {}
  11 | while (b2 && b1) {}
  12 | for (let i = 0; b1 && b2; i++) {
  13 |   break;
  14 | }
  15 | const t1 = b1 && b2 ? 'yes' : 'no';
  16 | const t1 = b2 && b1 ? 'yes' : 'no';
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const b1 = true;
   3 | declare const b2: boolean;
   4 | const t1 = b1 && b2;
   5 | const t2 = b1 || b2;
   6 | if (b1 && b2) {
   7 | }
   8 | if (b2 && b1) {
   9 | }
> 10 | while (b1 && b2) {}
     |        ^^ Unnecessary conditional, value is always truthy.
  11 | while (b2 && b1) {}
  12 | for (let i = 0; b1 && b2; i++) {
  13 |   break;
  14 | }
  15 | const t1 = b1 && b2 ? 'yes' : 'no';
  16 | const t1 = b2 && b1 ? 'yes' : 'no';
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const b1 = true;
   3 | declare const b2: boolean;
   4 | const t1 = b1 && b2;
   5 | const t2 = b1 || b2;
   6 | if (b1 && b2) {
   7 | }
   8 | if (b2 && b1) {
   9 | }
  10 | while (b1 && b2) {}
> 11 | while (b2 && b1) {}
     |              ^^ Unnecessary conditional, value is always truthy.
  12 | for (let i = 0; b1 && b2; i++) {
  13 |   break;
  14 | }
  15 | const t1 = b1 && b2 ? 'yes' : 'no';
  16 | const t1 = b2 && b1 ? 'yes' : 'no';
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const b1 = true;
   3 | declare const b2: boolean;
   4 | const t1 = b1 && b2;
   5 | const t2 = b1 || b2;
   6 | if (b1 && b2) {
   7 | }
   8 | if (b2 && b1) {
   9 | }
  10 | while (b1 && b2) {}
  11 | while (b2 && b1) {}
> 12 | for (let i = 0; b1 && b2; i++) {
     |                 ^^ Unnecessary conditional, value is always truthy.
  13 |   break;
  14 | }
  15 | const t1 = b1 && b2 ? 'yes' : 'no';
  16 | const t1 = b2 && b1 ? 'yes' : 'no';
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const b1 = true;
   3 | declare const b2: boolean;
   4 | const t1 = b1 && b2;
   5 | const t2 = b1 || b2;
   6 | if (b1 && b2) {
   7 | }
   8 | if (b2 && b1) {
   9 | }
  10 | while (b1 && b2) {}
  11 | while (b2 && b1) {}
  12 | for (let i = 0; b1 && b2; i++) {
  13 |   break;
  14 | }
> 15 | const t1 = b1 && b2 ? 'yes' : 'no';
     |            ^^ Unnecessary conditional, value is always truthy.
  16 | const t1 = b2 && b1 ? 'yes' : 'no';
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const b1 = true;
   3 | declare const b2: boolean;
   4 | const t1 = b1 && b2;
   5 | const t2 = b1 || b2;
   6 | if (b1 && b2) {
   7 | }
   8 | if (b2 && b1) {
   9 | }
  10 | while (b1 && b2) {}
  11 | while (b2 && b1) {}
  12 | for (let i = 0; b1 && b2; i++) {
  13 |   break;
  14 | }
  15 | const t1 = b1 && b2 ? 'yes' : 'no';
> 16 | const t1 = b2 && b1 ? 'yes' : 'no';
     |                  ^^ Unnecessary conditional, value is always truthy.
  17 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

declare const b1: object;
declare const b2: boolean;
const t1 = b1 && b2;

```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const b1: object;
  3 | declare const b2: boolean;
> 4 | const t1 = b1 && b2;
    |            ^^ Unnecessary conditional, value is always truthy.
  5 |
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

declare const b1: object | true;
declare const b2: boolean;
const t1 = b1 && b2;

```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const b1: object | true;
  3 | declare const b2: boolean;
> 4 | const t1 = b1 && b2;
    |            ^^ Unnecessary conditional, value is always truthy.
  5 |
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

declare const b1: "" | false;
declare const b2: boolean;
const t1 = b1 && b2;

```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const b1: "" | false;
  3 | declare const b2: boolean;
> 4 | const t1 = b1 && b2;
    |            ^^ Unnecessary conditional, value is always falsy.
  5 |
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

declare const b1: "always truthy";
declare const b2: boolean;
const t1 = b1 && b2;

```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const b1: "always truthy";
  3 | declare const b2: boolean;
> 4 | const t1 = b1 && b2;
    |            ^^ Unnecessary conditional, value is always truthy.
  5 |
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

declare const b1: undefined;
declare const b2: boolean;
const t1 = b1 && b2;

```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const b1: undefined;
  3 | declare const b2: boolean;
> 4 | const t1 = b1 && b2;
    |            ^^ Unnecessary conditional, value is always falsy.
  5 |
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

declare const b1: null;
declare const b2: boolean;
const t1 = b1 && b2;

```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const b1: null;
  3 | declare const b2: boolean;
> 4 | const t1 = b1 && b2;
    |            ^^ Unnecessary conditional, value is always falsy.
  5 |
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

declare const b1: void;
declare const b2: boolean;
const t1 = b1 && b2;

```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const b1: void;
  3 | declare const b2: boolean;
> 4 | const t1 = b1 && b2;
    |            ^^ Unnecessary conditional, value is always falsy.
  5 |
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

declare const b1: never;
declare const b2: boolean;
const t1 = b1 && b2;

```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const b1: never;
  3 | declare const b2: boolean;
> 4 | const t1 = b1 && b2;
    |            ^^ Unnecessary conditional, value is `never`.
  5 |
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

declare const b1: boolean;
declare const b2: boolean;
if (true && b1 && b2) {
}
if (b1 && false && b2) {
}
if (b1 || b2 || true) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | declare const b1: boolean;
   3 | declare const b2: boolean;
>  4 | if (true && b1 && b2) {
     |     ^^^^ Unnecessary conditional, value is always truthy.
   5 | }
   6 | if (b1 && false && b2) {
   7 | }
   8 | if (b1 || b2 || true) {
   9 | }
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | declare const b1: boolean;
   3 | declare const b2: boolean;
   4 | if (true && b1 && b2) {
   5 | }
>  6 | if (b1 && false && b2) {
     |           ^^^^^ Unnecessary conditional, value is always falsy.
   7 | }
   8 | if (b1 || b2 || true) {
   9 | }
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | declare const b1: boolean;
   3 | declare const b2: boolean;
   4 | if (true && b1 && b2) {
   5 | }
   6 | if (b1 && false && b2) {
   7 | }
>  8 | if (b1 || b2 || true) {
     |                 ^^^^ Unnecessary conditional, value is always truthy.
   9 | }
  10 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

function test<T extends object>(t: T) {
  return t ? 'yes' : 'no';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test<T extends object>(t: T) {
> 3 |   return t ? 'yes' : 'no';
    |          ^ Unnecessary conditional, value is always truthy.
  4 | }
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

function test<T extends false>(t: T) {
  return t ? 'yes' : 'no';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test<T extends false>(t: T) {
> 3 |   return t ? 'yes' : 'no';
    |          ^ Unnecessary conditional, value is always falsy.
  4 | }
  5 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

function test<T extends 'a' | 'b'>(t: T) {
  return t ? 'yes' : 'no';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test<T extends 'a' | 'b'>(t: T) {
> 3 |   return t ? 'yes' : 'no';
    |          ^ Unnecessary conditional, value is always truthy.
  4 | }
  5 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

function test(a: 'a') {
  return a === 'a';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test(a: 'a') {
> 3 |   return a === 'a';
    |          ^^^^^^^^^ Unnecessary conditional, both sides of the expression are literal values.
  4 | }
  5 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

const y = 1;
if (y === 0) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const y = 1;
> 3 | if (y === 0) {
    |     ^^^^^^^ Unnecessary conditional, both sides of the expression are literal values.
  4 | }
  5 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

enum Foo {
  a = 1,
  b = 2,
}

const x = Foo.a;
if (x === Foo.a) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | enum Foo {
   3 |   a = 1,
   4 |   b = 2,
   5 | }
   6 |
   7 | const x = Foo.a;
>  8 | if (x === Foo.a) {
     |     ^^^^^^^^^^^ Unnecessary conditional, both sides of the expression are literal values.
   9 | }
  10 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

function test(a: string) {
  const t1 = a === undefined;
  const t2 = undefined === a;
  const t3 = a !== undefined;
  const t4 = undefined !== a;
  const t5 = a === null;
  const t6 = null === a;
  const t7 = a !== null;
  const t8 = null !== a;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test(a: string) {
>  3 |   const t1 = a === undefined;
     |              ^^^^^^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   4 |   const t2 = undefined === a;
   5 |   const t3 = a !== undefined;
   6 |   const t4 = undefined !== a;
   7 |   const t5 = a === null;
   8 |   const t6 = null === a;
   9 |   const t7 = a !== null;
  10 |   const t8 = null !== a;
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test(a: string) {
   3 |   const t1 = a === undefined;
>  4 |   const t2 = undefined === a;
     |              ^^^^^^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   5 |   const t3 = a !== undefined;
   6 |   const t4 = undefined !== a;
   7 |   const t5 = a === null;
   8 |   const t6 = null === a;
   9 |   const t7 = a !== null;
  10 |   const t8 = null !== a;
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test(a: string) {
   3 |   const t1 = a === undefined;
   4 |   const t2 = undefined === a;
>  5 |   const t3 = a !== undefined;
     |              ^^^^^^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   6 |   const t4 = undefined !== a;
   7 |   const t5 = a === null;
   8 |   const t6 = null === a;
   9 |   const t7 = a !== null;
  10 |   const t8 = null !== a;
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test(a: string) {
   3 |   const t1 = a === undefined;
   4 |   const t2 = undefined === a;
   5 |   const t3 = a !== undefined;
>  6 |   const t4 = undefined !== a;
     |              ^^^^^^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   7 |   const t5 = a === null;
   8 |   const t6 = null === a;
   9 |   const t7 = a !== null;
  10 |   const t8 = null !== a;
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test(a: string) {
   3 |   const t1 = a === undefined;
   4 |   const t2 = undefined === a;
   5 |   const t3 = a !== undefined;
   6 |   const t4 = undefined !== a;
>  7 |   const t5 = a === null;
     |              ^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   8 |   const t6 = null === a;
   9 |   const t7 = a !== null;
  10 |   const t8 = null !== a;
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test(a: string) {
   3 |   const t1 = a === undefined;
   4 |   const t2 = undefined === a;
   5 |   const t3 = a !== undefined;
   6 |   const t4 = undefined !== a;
   7 |   const t5 = a === null;
>  8 |   const t6 = null === a;
     |              ^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   9 |   const t7 = a !== null;
  10 |   const t8 = null !== a;
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test(a: string) {
   3 |   const t1 = a === undefined;
   4 |   const t2 = undefined === a;
   5 |   const t3 = a !== undefined;
   6 |   const t4 = undefined !== a;
   7 |   const t5 = a === null;
   8 |   const t6 = null === a;
>  9 |   const t7 = a !== null;
     |              ^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
  10 |   const t8 = null !== a;
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test(a: string) {
   3 |   const t1 = a === undefined;
   4 |   const t2 = undefined === a;
   5 |   const t3 = a !== undefined;
   6 |   const t4 = undefined !== a;
   7 |   const t5 = a === null;
   8 |   const t6 = null === a;
   9 |   const t7 = a !== null;
> 10 |   const t8 = null !== a;
     |              ^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
  11 | }
  12 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

function test(a?: string) {
  const t1 = a === undefined;
  const t2 = undefined === a;
  const t3 = a !== undefined;
  const t4 = undefined !== a;
  const t5 = a === null;
  const t6 = null === a;
  const t7 = a !== null;
  const t8 = null !== a;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test(a?: string) {
   3 |   const t1 = a === undefined;
   4 |   const t2 = undefined === a;
   5 |   const t3 = a !== undefined;
   6 |   const t4 = undefined !== a;
>  7 |   const t5 = a === null;
     |              ^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   8 |   const t6 = null === a;
   9 |   const t7 = a !== null;
  10 |   const t8 = null !== a;
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test(a?: string) {
   3 |   const t1 = a === undefined;
   4 |   const t2 = undefined === a;
   5 |   const t3 = a !== undefined;
   6 |   const t4 = undefined !== a;
   7 |   const t5 = a === null;
>  8 |   const t6 = null === a;
     |              ^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   9 |   const t7 = a !== null;
  10 |   const t8 = null !== a;
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test(a?: string) {
   3 |   const t1 = a === undefined;
   4 |   const t2 = undefined === a;
   5 |   const t3 = a !== undefined;
   6 |   const t4 = undefined !== a;
   7 |   const t5 = a === null;
   8 |   const t6 = null === a;
>  9 |   const t7 = a !== null;
     |              ^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
  10 |   const t8 = null !== a;
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test(a?: string) {
   3 |   const t1 = a === undefined;
   4 |   const t2 = undefined === a;
   5 |   const t3 = a !== undefined;
   6 |   const t4 = undefined !== a;
   7 |   const t5 = a === null;
   8 |   const t6 = null === a;
   9 |   const t7 = a !== null;
> 10 |   const t8 = null !== a;
     |              ^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
  11 | }
  12 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

function test(a: null | string) {
  const t1 = a === undefined;
  const t2 = undefined === a;
  const t3 = a !== undefined;
  const t4 = undefined !== a;
  const t5 = a === null;
  const t6 = null === a;
  const t7 = a !== null;
  const t8 = null !== a;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test(a: null | string) {
>  3 |   const t1 = a === undefined;
     |              ^^^^^^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   4 |   const t2 = undefined === a;
   5 |   const t3 = a !== undefined;
   6 |   const t4 = undefined !== a;
   7 |   const t5 = a === null;
   8 |   const t6 = null === a;
   9 |   const t7 = a !== null;
  10 |   const t8 = null !== a;
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test(a: null | string) {
   3 |   const t1 = a === undefined;
>  4 |   const t2 = undefined === a;
     |              ^^^^^^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   5 |   const t3 = a !== undefined;
   6 |   const t4 = undefined !== a;
   7 |   const t5 = a === null;
   8 |   const t6 = null === a;
   9 |   const t7 = a !== null;
  10 |   const t8 = null !== a;
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test(a: null | string) {
   3 |   const t1 = a === undefined;
   4 |   const t2 = undefined === a;
>  5 |   const t3 = a !== undefined;
     |              ^^^^^^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   6 |   const t4 = undefined !== a;
   7 |   const t5 = a === null;
   8 |   const t6 = null === a;
   9 |   const t7 = a !== null;
  10 |   const t8 = null !== a;
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test(a: null | string) {
   3 |   const t1 = a === undefined;
   4 |   const t2 = undefined === a;
   5 |   const t3 = a !== undefined;
>  6 |   const t4 = undefined !== a;
     |              ^^^^^^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   7 |   const t5 = a === null;
   8 |   const t6 = null === a;
   9 |   const t7 = a !== null;
  10 |   const t8 = null !== a;
  11 | }
  12 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

function test<T extends object>(a: T) {
  const t1 = a == null;
  const t2 = null == a;
  const t3 = a != null;
  const t4 = null != a;
  const t5 = a == undefined;
  const t6 = undefined == a;
  const t7 = a != undefined;
  const t8 = undefined != a;
  const t9 = a === null;
  const t10 = null === a;
  const t11 = a !== null;
  const t12 = null !== a;
  const t13 = a === undefined;
  const t14 = undefined === a;
  const t15 = a !== undefined;
  const t16 = undefined !== a;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test<T extends object>(a: T) {
>  3 |   const t1 = a == null;
     |              ^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   4 |   const t2 = null == a;
   5 |   const t3 = a != null;
   6 |   const t4 = null != a;
   7 |   const t5 = a == undefined;
   8 |   const t6 = undefined == a;
   9 |   const t7 = a != undefined;
  10 |   const t8 = undefined != a;
  11 |   const t9 = a === null;
  12 |   const t10 = null === a;
  13 |   const t11 = a !== null;
  14 |   const t12 = null !== a;
  15 |   const t13 = a === undefined;
  16 |   const t14 = undefined === a;
  17 |   const t15 = a !== undefined;
  18 |   const t16 = undefined !== a;
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test<T extends object>(a: T) {
   3 |   const t1 = a == null;
>  4 |   const t2 = null == a;
     |              ^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   5 |   const t3 = a != null;
   6 |   const t4 = null != a;
   7 |   const t5 = a == undefined;
   8 |   const t6 = undefined == a;
   9 |   const t7 = a != undefined;
  10 |   const t8 = undefined != a;
  11 |   const t9 = a === null;
  12 |   const t10 = null === a;
  13 |   const t11 = a !== null;
  14 |   const t12 = null !== a;
  15 |   const t13 = a === undefined;
  16 |   const t14 = undefined === a;
  17 |   const t15 = a !== undefined;
  18 |   const t16 = undefined !== a;
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test<T extends object>(a: T) {
   3 |   const t1 = a == null;
   4 |   const t2 = null == a;
>  5 |   const t3 = a != null;
     |              ^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   6 |   const t4 = null != a;
   7 |   const t5 = a == undefined;
   8 |   const t6 = undefined == a;
   9 |   const t7 = a != undefined;
  10 |   const t8 = undefined != a;
  11 |   const t9 = a === null;
  12 |   const t10 = null === a;
  13 |   const t11 = a !== null;
  14 |   const t12 = null !== a;
  15 |   const t13 = a === undefined;
  16 |   const t14 = undefined === a;
  17 |   const t15 = a !== undefined;
  18 |   const t16 = undefined !== a;
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test<T extends object>(a: T) {
   3 |   const t1 = a == null;
   4 |   const t2 = null == a;
   5 |   const t3 = a != null;
>  6 |   const t4 = null != a;
     |              ^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   7 |   const t5 = a == undefined;
   8 |   const t6 = undefined == a;
   9 |   const t7 = a != undefined;
  10 |   const t8 = undefined != a;
  11 |   const t9 = a === null;
  12 |   const t10 = null === a;
  13 |   const t11 = a !== null;
  14 |   const t12 = null !== a;
  15 |   const t13 = a === undefined;
  16 |   const t14 = undefined === a;
  17 |   const t15 = a !== undefined;
  18 |   const t16 = undefined !== a;
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test<T extends object>(a: T) {
   3 |   const t1 = a == null;
   4 |   const t2 = null == a;
   5 |   const t3 = a != null;
   6 |   const t4 = null != a;
>  7 |   const t5 = a == undefined;
     |              ^^^^^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   8 |   const t6 = undefined == a;
   9 |   const t7 = a != undefined;
  10 |   const t8 = undefined != a;
  11 |   const t9 = a === null;
  12 |   const t10 = null === a;
  13 |   const t11 = a !== null;
  14 |   const t12 = null !== a;
  15 |   const t13 = a === undefined;
  16 |   const t14 = undefined === a;
  17 |   const t15 = a !== undefined;
  18 |   const t16 = undefined !== a;
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test<T extends object>(a: T) {
   3 |   const t1 = a == null;
   4 |   const t2 = null == a;
   5 |   const t3 = a != null;
   6 |   const t4 = null != a;
   7 |   const t5 = a == undefined;
>  8 |   const t6 = undefined == a;
     |              ^^^^^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
   9 |   const t7 = a != undefined;
  10 |   const t8 = undefined != a;
  11 |   const t9 = a === null;
  12 |   const t10 = null === a;
  13 |   const t11 = a !== null;
  14 |   const t12 = null !== a;
  15 |   const t13 = a === undefined;
  16 |   const t14 = undefined === a;
  17 |   const t15 = a !== undefined;
  18 |   const t16 = undefined !== a;
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test<T extends object>(a: T) {
   3 |   const t1 = a == null;
   4 |   const t2 = null == a;
   5 |   const t3 = a != null;
   6 |   const t4 = null != a;
   7 |   const t5 = a == undefined;
   8 |   const t6 = undefined == a;
>  9 |   const t7 = a != undefined;
     |              ^^^^^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
  10 |   const t8 = undefined != a;
  11 |   const t9 = a === null;
  12 |   const t10 = null === a;
  13 |   const t11 = a !== null;
  14 |   const t12 = null !== a;
  15 |   const t13 = a === undefined;
  16 |   const t14 = undefined === a;
  17 |   const t15 = a !== undefined;
  18 |   const t16 = undefined !== a;
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test<T extends object>(a: T) {
   3 |   const t1 = a == null;
   4 |   const t2 = null == a;
   5 |   const t3 = a != null;
   6 |   const t4 = null != a;
   7 |   const t5 = a == undefined;
   8 |   const t6 = undefined == a;
   9 |   const t7 = a != undefined;
> 10 |   const t8 = undefined != a;
     |              ^^^^^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
  11 |   const t9 = a === null;
  12 |   const t10 = null === a;
  13 |   const t11 = a !== null;
  14 |   const t12 = null !== a;
  15 |   const t13 = a === undefined;
  16 |   const t14 = undefined === a;
  17 |   const t15 = a !== undefined;
  18 |   const t16 = undefined !== a;
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test<T extends object>(a: T) {
   3 |   const t1 = a == null;
   4 |   const t2 = null == a;
   5 |   const t3 = a != null;
   6 |   const t4 = null != a;
   7 |   const t5 = a == undefined;
   8 |   const t6 = undefined == a;
   9 |   const t7 = a != undefined;
  10 |   const t8 = undefined != a;
> 11 |   const t9 = a === null;
     |              ^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
  12 |   const t10 = null === a;
  13 |   const t11 = a !== null;
  14 |   const t12 = null !== a;
  15 |   const t13 = a === undefined;
  16 |   const t14 = undefined === a;
  17 |   const t15 = a !== undefined;
  18 |   const t16 = undefined !== a;
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test<T extends object>(a: T) {
   3 |   const t1 = a == null;
   4 |   const t2 = null == a;
   5 |   const t3 = a != null;
   6 |   const t4 = null != a;
   7 |   const t5 = a == undefined;
   8 |   const t6 = undefined == a;
   9 |   const t7 = a != undefined;
  10 |   const t8 = undefined != a;
  11 |   const t9 = a === null;
> 12 |   const t10 = null === a;
     |               ^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
  13 |   const t11 = a !== null;
  14 |   const t12 = null !== a;
  15 |   const t13 = a === undefined;
  16 |   const t14 = undefined === a;
  17 |   const t15 = a !== undefined;
  18 |   const t16 = undefined !== a;
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test<T extends object>(a: T) {
   3 |   const t1 = a == null;
   4 |   const t2 = null == a;
   5 |   const t3 = a != null;
   6 |   const t4 = null != a;
   7 |   const t5 = a == undefined;
   8 |   const t6 = undefined == a;
   9 |   const t7 = a != undefined;
  10 |   const t8 = undefined != a;
  11 |   const t9 = a === null;
  12 |   const t10 = null === a;
> 13 |   const t11 = a !== null;
     |               ^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
  14 |   const t12 = null !== a;
  15 |   const t13 = a === undefined;
  16 |   const t14 = undefined === a;
  17 |   const t15 = a !== undefined;
  18 |   const t16 = undefined !== a;
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test<T extends object>(a: T) {
   3 |   const t1 = a == null;
   4 |   const t2 = null == a;
   5 |   const t3 = a != null;
   6 |   const t4 = null != a;
   7 |   const t5 = a == undefined;
   8 |   const t6 = undefined == a;
   9 |   const t7 = a != undefined;
  10 |   const t8 = undefined != a;
  11 |   const t9 = a === null;
  12 |   const t10 = null === a;
  13 |   const t11 = a !== null;
> 14 |   const t12 = null !== a;
     |               ^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
  15 |   const t13 = a === undefined;
  16 |   const t14 = undefined === a;
  17 |   const t15 = a !== undefined;
  18 |   const t16 = undefined !== a;
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test<T extends object>(a: T) {
   3 |   const t1 = a == null;
   4 |   const t2 = null == a;
   5 |   const t3 = a != null;
   6 |   const t4 = null != a;
   7 |   const t5 = a == undefined;
   8 |   const t6 = undefined == a;
   9 |   const t7 = a != undefined;
  10 |   const t8 = undefined != a;
  11 |   const t9 = a === null;
  12 |   const t10 = null === a;
  13 |   const t11 = a !== null;
  14 |   const t12 = null !== a;
> 15 |   const t13 = a === undefined;
     |               ^^^^^^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
  16 |   const t14 = undefined === a;
  17 |   const t15 = a !== undefined;
  18 |   const t16 = undefined !== a;
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test<T extends object>(a: T) {
   3 |   const t1 = a == null;
   4 |   const t2 = null == a;
   5 |   const t3 = a != null;
   6 |   const t4 = null != a;
   7 |   const t5 = a == undefined;
   8 |   const t6 = undefined == a;
   9 |   const t7 = a != undefined;
  10 |   const t8 = undefined != a;
  11 |   const t9 = a === null;
  12 |   const t10 = null === a;
  13 |   const t11 = a !== null;
  14 |   const t12 = null !== a;
  15 |   const t13 = a === undefined;
> 16 |   const t14 = undefined === a;
     |               ^^^^^^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
  17 |   const t15 = a !== undefined;
  18 |   const t16 = undefined !== a;
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test<T extends object>(a: T) {
   3 |   const t1 = a == null;
   4 |   const t2 = null == a;
   5 |   const t3 = a != null;
   6 |   const t4 = null != a;
   7 |   const t5 = a == undefined;
   8 |   const t6 = undefined == a;
   9 |   const t7 = a != undefined;
  10 |   const t8 = undefined != a;
  11 |   const t9 = a === null;
  12 |   const t10 = null === a;
  13 |   const t11 = a !== null;
  14 |   const t12 = null !== a;
  15 |   const t13 = a === undefined;
  16 |   const t14 = undefined === a;
> 17 |   const t15 = a !== undefined;
     |               ^^^^^^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
  18 |   const t16 = undefined !== a;
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function test<T extends object>(a: T) {
   3 |   const t1 = a == null;
   4 |   const t2 = null == a;
   5 |   const t3 = a != null;
   6 |   const t4 = null != a;
   7 |   const t5 = a == undefined;
   8 |   const t6 = undefined == a;
   9 |   const t7 = a != undefined;
  10 |   const t8 = undefined != a;
  11 |   const t9 = a === null;
  12 |   const t10 = null === a;
  13 |   const t11 = a !== null;
  14 |   const t12 = null !== a;
  15 |   const t13 = a === undefined;
  16 |   const t14 = undefined === a;
  17 |   const t15 = a !== undefined;
> 18 |   const t16 = undefined !== a;
     |               ^^^^^^^^^^^^^^^ Unnecessary conditional, the types have no overlap.
  19 | }
  20 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

function test(a: string) {
  return a ?? 'default';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test(a: string) {
> 3 |   return a ?? 'default';
    |          ^ Unnecessary conditional, expected left-hand side of `??` operator to be possibly null or undefined.
  4 | }
  5 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

function test(a: string | false) {
  return a ?? 'default';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test(a: string | false) {
> 3 |   return a ?? 'default';
    |          ^ Unnecessary conditional, expected left-hand side of `??` operator to be possibly null or undefined.
  4 | }
  5 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

function test<T extends string>(a: T) {
  return a ?? 'default';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test<T extends string>(a: T) {
> 3 |   return a ?? 'default';
    |          ^ Unnecessary conditional, expected left-hand side of `??` operator to be possibly null or undefined.
  4 | }
  5 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

function test(a: { foo: string }[]) {
  return a[0].foo ?? 'default';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test(a: { foo: string }[]) {
> 3 |   return a[0].foo ?? 'default';
    |          ^^^^^^^^ Unnecessary conditional, expected left-hand side of `??` operator to be possibly null or undefined.
  4 | }
  5 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

function test(a: null) {
  return a ?? 'default';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test(a: null) {
> 3 |   return a ?? 'default';
    |          ^ Unnecessary conditional, left-hand side of `??` operator is always `null` or `undefined`.
  4 | }
  5 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

function test(a: null[]) {
  return a[0] ?? 'default';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test(a: null[]) {
> 3 |   return a[0] ?? 'default';
    |          ^^^^ Unnecessary conditional, left-hand side of `??` operator is always `null` or `undefined`.
  4 | }
  5 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

function test<T extends null>(a: T) {
  return a ?? 'default';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test<T extends null>(a: T) {
> 3 |   return a ?? 'default';
    |          ^ Unnecessary conditional, left-hand side of `??` operator is always `null` or `undefined`.
  4 | }
  5 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

function test(a: never) {
  return a ?? 'default';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test(a: never) {
> 3 |   return a ?? 'default';
    |          ^ Unnecessary conditional, value is `never`.
  4 | }
  5 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

[1, 3, 5].filter(() => true);
[1, 2, 3].find(() => {
  return false;
});

// with non-literal array
function nothing(x: string[]) {
  return x.filter(() => false);
}
// with readonly array
function nothing2(x: readonly string[]) {
  return x.filter(() => false);
}
// with tuple
function nothing3(x: [string, string]) {
  return x.filter(() => false);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 | [1, 3, 5].filter(() => true);
     |                        ^^^^ Unnecessary conditional, value is always truthy.
   3 | [1, 2, 3].find(() => {
   4 |   return false;
   5 | });
   6 |
   7 | // with non-literal array
   8 | function nothing(x: string[]) {
   9 |   return x.filter(() => false);
  10 | }
  11 | // with readonly array
  12 | function nothing2(x: readonly string[]) {
  13 |   return x.filter(() => false);
  14 | }
  15 | // with tuple
  16 | function nothing3(x: [string, string]) {
  17 |   return x.filter(() => false);
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | [1, 3, 5].filter(() => true);
   3 | [1, 2, 3].find(() => {
>  4 |   return false;
     |          ^^^^^ Unnecessary conditional, value is always falsy.
   5 | });
   6 |
   7 | // with non-literal array
   8 | function nothing(x: string[]) {
   9 |   return x.filter(() => false);
  10 | }
  11 | // with readonly array
  12 | function nothing2(x: readonly string[]) {
  13 |   return x.filter(() => false);
  14 | }
  15 | // with tuple
  16 | function nothing3(x: [string, string]) {
  17 |   return x.filter(() => false);
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | [1, 3, 5].filter(() => true);
   3 | [1, 2, 3].find(() => {
   4 |   return false;
   5 | });
   6 |
   7 | // with non-literal array
   8 | function nothing(x: string[]) {
>  9 |   return x.filter(() => false);
     |                         ^^^^^ Unnecessary conditional, value is always falsy.
  10 | }
  11 | // with readonly array
  12 | function nothing2(x: readonly string[]) {
  13 |   return x.filter(() => false);
  14 | }
  15 | // with tuple
  16 | function nothing3(x: [string, string]) {
  17 |   return x.filter(() => false);
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | [1, 3, 5].filter(() => true);
   3 | [1, 2, 3].find(() => {
   4 |   return false;
   5 | });
   6 |
   7 | // with non-literal array
   8 | function nothing(x: string[]) {
   9 |   return x.filter(() => false);
  10 | }
  11 | // with readonly array
  12 | function nothing2(x: readonly string[]) {
> 13 |   return x.filter(() => false);
     |                         ^^^^^ Unnecessary conditional, value is always falsy.
  14 | }
  15 | // with tuple
  16 | function nothing3(x: [string, string]) {
  17 |   return x.filter(() => false);
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | [1, 3, 5].filter(() => true);
   3 | [1, 2, 3].find(() => {
   4 |   return false;
   5 | });
   6 |
   7 | // with non-literal array
   8 | function nothing(x: string[]) {
   9 |   return x.filter(() => false);
  10 | }
  11 | // with readonly array
  12 | function nothing2(x: readonly string[]) {
  13 |   return x.filter(() => false);
  14 | }
  15 | // with tuple
  16 | function nothing3(x: [string, string]) {
> 17 |   return x.filter(() => false);
     |                         ^^^^^ Unnecessary conditional, value is always falsy.
  18 | }
  19 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

declare const dict: Record<string, object>;
if (dict['mightNotExist']) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const dict: Record<string, object>;
> 3 | if (dict['mightNotExist']) {
    |     ^^^^^^^^^^^^^^^^^^^^^ Unnecessary conditional, value is always truthy.
  4 | }
  5 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

const x = [{}] as [{ foo: string }];
if (x[0]) {
}
if (x[0]?.foo) {
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const x = [{}] as [{ foo: string }];
if (x[0]) {
}
if (x[0].foo) {
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const x = [{}] as [{ foo: string }];
> 3 | if (x[0]) {
    |     ^^^^ Unnecessary conditional, value is always truthy.
  4 | }
  5 | if (x[0]?.foo) {
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const x = [{}] as [{ foo: string }];
  3 | if (x[0]) {
  4 | }
> 5 | if (x[0]?.foo) {
    |         ^^ Unnecessary optional chain on a non-nullish value.
  6 | }
  7 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

declare const arr: object[];
if (arr.filter) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const arr: object[];
> 3 | if (arr.filter) {
    |     ^^^^^^^^^^ Unnecessary conditional, value is always truthy.
  4 | }
  5 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

function truthy() {
  return [];
}
function falsy() {}
[1, 3, 5].filter(truthy);
[1, 2, 3].find(falsy);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function truthy() {
  3 |   return [];
  4 | }
  5 | function falsy() {}
> 6 | [1, 3, 5].filter(truthy);
    |                  ^^^^^^ This callback should return a conditional, but return is always truthy.
  7 | [1, 2, 3].find(falsy);
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | function truthy() {
  3 |   return [];
  4 | }
  5 | function falsy() {}
  6 | [1, 3, 5].filter(truthy);
> 7 | [1, 2, 3].find(falsy);
    |                ^^^^^ This callback should return a conditional, but return is always falsy.
  8 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

while (true) {}
for (; true; ) {}
do {} while (true);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | while (true) {}
    |        ^^^^ Unnecessary conditional, value is always truthy.
  3 | for (; true; ) {}
  4 | do {} while (true);
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | while (true) {}
> 3 | for (; true; ) {}
    |        ^^^^ Unnecessary conditional, value is always truthy.
  4 | do {} while (true);
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | while (true) {}
  3 | for (; true; ) {}
> 4 | do {} while (true);
    |              ^^^^ Unnecessary conditional, value is always truthy.
  5 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

let foo = { bar: true };
foo?.bar;
foo ?. bar;
foo ?.
  bar;
foo
  ?. bar;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

let foo = { bar: true };
foo.bar;
foo . bar;
foo .
  bar;
foo
  . bar;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo = { bar: true };
> 3 | foo?.bar;
    |    ^^ Unnecessary optional chain on a non-nullish value.
  4 | foo ?. bar;
  5 | foo ?.
  6 |   bar;
  7 | foo
  8 |   ?. bar;
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo = { bar: true };
  3 | foo?.bar;
> 4 | foo ?. bar;
    |     ^^ Unnecessary optional chain on a non-nullish value.
  5 | foo ?.
  6 |   bar;
  7 | foo
  8 |   ?. bar;
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo = { bar: true };
  3 | foo?.bar;
  4 | foo ?. bar;
> 5 | foo ?.
    |     ^^ Unnecessary optional chain on a non-nullish value.
  6 |   bar;
  7 | foo
  8 |   ?. bar;
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo = { bar: true };
  3 | foo?.bar;
  4 | foo ?. bar;
  5 | foo ?.
  6 |   bar;
  7 | foo
> 8 |   ?. bar;
    |   ^^ Unnecessary optional chain on a non-nullish value.
  9 |       
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

let foo = () => {};
foo?.();
foo ?. ();
foo ?.
  ();
foo
  ?. ();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

let foo = () => {};
foo();
foo  ();
foo 
  ();
foo
   ();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo = () => {};
> 3 | foo?.();
    |    ^^ Unnecessary optional chain on a non-nullish value.
  4 | foo ?. ();
  5 | foo ?.
  6 |   ();
  7 | foo
  8 |   ?. ();
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo = () => {};
  3 | foo?.();
> 4 | foo ?. ();
    |     ^^ Unnecessary optional chain on a non-nullish value.
  5 | foo ?.
  6 |   ();
  7 | foo
  8 |   ?. ();
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo = () => {};
  3 | foo?.();
  4 | foo ?. ();
> 5 | foo ?.
    |     ^^ Unnecessary optional chain on a non-nullish value.
  6 |   ();
  7 | foo
  8 |   ?. ();
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo = () => {};
  3 | foo?.();
  4 | foo ?. ();
  5 | foo ?.
  6 |   ();
  7 | foo
> 8 |   ?. ();
    |   ^^ Unnecessary optional chain on a non-nullish value.
  9 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

let foo = () => {};
foo?.(bar);
foo ?. (bar);
foo ?.
  (bar);
foo
  ?. (bar);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

let foo = () => {};
foo(bar);
foo  (bar);
foo 
  (bar);
foo
   (bar);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo = () => {};
> 3 | foo?.(bar);
    |    ^^ Unnecessary optional chain on a non-nullish value.
  4 | foo ?. (bar);
  5 | foo ?.
  6 |   (bar);
  7 | foo
  8 |   ?. (bar);
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo = () => {};
  3 | foo?.(bar);
> 4 | foo ?. (bar);
    |     ^^ Unnecessary optional chain on a non-nullish value.
  5 | foo ?.
  6 |   (bar);
  7 | foo
  8 |   ?. (bar);
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo = () => {};
  3 | foo?.(bar);
  4 | foo ?. (bar);
> 5 | foo ?.
    |     ^^ Unnecessary optional chain on a non-nullish value.
  6 |   (bar);
  7 | foo
  8 |   ?. (bar);
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo = () => {};
  3 | foo?.(bar);
  4 | foo ?. (bar);
  5 | foo ?.
  6 |   (bar);
  7 | foo
> 8 |   ?. (bar);
    |   ^^ Unnecessary optional chain on a non-nullish value.
  9 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts
const foo = [1, 2, 3]?.[0];
```

### Fix Output

<!-- prettier-ignore -->
```ts
const foo = [1, 2, 3][0];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = [1, 2, 3]?.[0];
    |                      ^^ Unnecessary optional chain on a non-nullish value.
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

declare const x: { a?: { b: string } };
x?.a?.b;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare const x: { a?: { b: string } };
x.a?.b;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const x: { a?: { b: string } };
> 3 | x?.a?.b;
    |  ^^ Unnecessary optional chain on a non-nullish value.
  4 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

declare const x: { a: { b?: { c: string } } };
x.a?.b?.c;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare const x: { a: { b?: { c: string } } };
x.a.b?.c;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const x: { a: { b?: { c: string } } };
> 3 | x.a?.b?.c;
    |    ^^ Unnecessary optional chain on a non-nullish value.
  4 |       
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

let x: { a?: string };
x?.a;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

let x: { a?: string };
x.a;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let x: { a?: string };
> 3 | x?.a;
    |  ^^ Unnecessary optional chain on a non-nullish value.
  4 |       
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

declare const foo: { bar: { baz: { c: string } } } | null;
foo?.bar?.baz;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare const foo: { bar: { baz: { c: string } } } | null;
foo?.bar.baz;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const foo: { bar: { baz: { c: string } } } | null;
> 3 | foo?.bar?.baz;
    |         ^^ Unnecessary optional chain on a non-nullish value.
  4 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

declare const foo: { bar?: { baz: { qux: string } } } | null;
foo?.bar?.baz?.qux;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare const foo: { bar?: { baz: { qux: string } } } | null;
foo?.bar?.baz.qux;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const foo: { bar?: { baz: { qux: string } } } | null;
> 3 | foo?.bar?.baz?.qux;
    |              ^^ Unnecessary optional chain on a non-nullish value.
  4 |       
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts

declare const foo: { bar: { baz: { qux?: () => {} } } } | null;
foo?.bar?.baz?.qux?.();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare const foo: { bar: { baz: { qux?: () => {} } } } | null;
foo?.bar.baz.qux?.();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const foo: { bar: { baz: { qux?: () => {} } } } | null;
> 3 | foo?.bar?.baz?.qux?.();
    |         ^^ Unnecessary optional chain on a non-nullish value.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const foo: { bar: { baz: { qux?: () => {} } } } | null;
> 3 | foo?.bar?.baz?.qux?.();
    |              ^^ Unnecessary optional chain on a non-nullish value.
  4 |       
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts

declare const foo: { bar: { baz: { qux: () => {} } } } | null;
foo?.bar?.baz?.qux?.();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare const foo: { bar: { baz: { qux: () => {} } } } | null;
foo?.bar.baz.qux();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const foo: { bar: { baz: { qux: () => {} } } } | null;
> 3 | foo?.bar?.baz?.qux?.();
    |         ^^ Unnecessary optional chain on a non-nullish value.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const foo: { bar: { baz: { qux: () => {} } } } | null;
> 3 | foo?.bar?.baz?.qux?.();
    |              ^^ Unnecessary optional chain on a non-nullish value.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const foo: { bar: { baz: { qux: () => {} } } } | null;
> 3 | foo?.bar?.baz?.qux?.();
    |                   ^^ Unnecessary optional chain on a non-nullish value.
  4 |       
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts

type baz = () => { qux: () => {} };
declare const foo: { bar: { baz: baz } } | null;
foo?.bar?.baz?.().qux?.();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type baz = () => { qux: () => {} };
declare const foo: { bar: { baz: baz } } | null;
foo?.bar.baz().qux();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type baz = () => { qux: () => {} };
  3 | declare const foo: { bar: { baz: baz } } | null;
> 4 | foo?.bar?.baz?.().qux?.();
    |         ^^ Unnecessary optional chain on a non-nullish value.
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type baz = () => { qux: () => {} };
  3 | declare const foo: { bar: { baz: baz } } | null;
> 4 | foo?.bar?.baz?.().qux?.();
    |              ^^ Unnecessary optional chain on a non-nullish value.
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type baz = () => { qux: () => {} };
  3 | declare const foo: { bar: { baz: baz } } | null;
> 4 | foo?.bar?.baz?.().qux?.();
    |                      ^^ Unnecessary optional chain on a non-nullish value.
  5 |       
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts

type baz = null | (() => { qux: () => {} });
declare const foo: { bar: { baz: baz } } | null;
foo?.bar?.baz?.().qux?.();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type baz = null | (() => { qux: () => {} });
declare const foo: { bar: { baz: baz } } | null;
foo?.bar.baz?.().qux();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type baz = null | (() => { qux: () => {} });
  3 | declare const foo: { bar: { baz: baz } } | null;
> 4 | foo?.bar?.baz?.().qux?.();
    |         ^^ Unnecessary optional chain on a non-nullish value.
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type baz = null | (() => { qux: () => {} });
  3 | declare const foo: { bar: { baz: baz } } | null;
> 4 | foo?.bar?.baz?.().qux?.();
    |                      ^^ Unnecessary optional chain on a non-nullish value.
  5 |       
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts

type baz = null | (() => { qux: () => {} } | null);
declare const foo: { bar: { baz: baz } } | null;
foo?.bar?.baz?.()?.qux?.();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type baz = null | (() => { qux: () => {} } | null);
declare const foo: { bar: { baz: baz } } | null;
foo?.bar.baz?.()?.qux();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type baz = null | (() => { qux: () => {} } | null);
  3 | declare const foo: { bar: { baz: baz } } | null;
> 4 | foo?.bar?.baz?.()?.qux?.();
    |         ^^ Unnecessary optional chain on a non-nullish value.
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type baz = null | (() => { qux: () => {} } | null);
  3 | declare const foo: { bar: { baz: baz } } | null;
> 4 | foo?.bar?.baz?.()?.qux?.();
    |                       ^^ Unnecessary optional chain on a non-nullish value.
  5 |       
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = { baz: number };
type Bar = { baz: null | string | { qux: string } };
declare const foo: { fooOrBar: Foo | Bar } | null;
foo?.fooOrBar?.baz?.qux;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = { baz: number };
type Bar = { baz: null | string | { qux: string } };
declare const foo: { fooOrBar: Foo | Bar } | null;
foo?.fooOrBar.baz?.qux;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = { baz: number };
  3 | type Bar = { baz: null | string | { qux: string } };
  4 | declare const foo: { fooOrBar: Foo | Bar } | null;
> 5 | foo?.fooOrBar?.baz?.qux;
    |              ^^ Unnecessary optional chain on a non-nullish value.
  6 |       
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts

declare const x: { a: { b: number } }[];
x[0].a?.b;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare const x: { a: { b: number } }[];
x[0].a.b;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const x: { a: { b: number } }[];
> 3 | x[0].a?.b;
    |       ^^ Unnecessary optional chain on a non-nullish value.
  4 |       
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = { [key: string]: string; foo: 'foo'; bar: 'bar' } | null;
type Key = 'bar' | 'foo';
declare const foo: Foo;
declare const key: Key;

foo?.[key]?.trim();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = { [key: string]: string; foo: 'foo'; bar: 'bar' } | null;
type Key = 'bar' | 'foo';
declare const foo: Foo;
declare const key: Key;

foo?.[key].trim();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = { [key: string]: string; foo: 'foo'; bar: 'bar' } | null;
  3 | type Key = 'bar' | 'foo';
  4 | declare const foo: Foo;
  5 | declare const key: Key;
  6 |
> 7 | foo?.[key]?.trim();
    |           ^^ Unnecessary optional chain on a non-nullish value.
  8 |       
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = { [key: string]: string; foo: 'foo'; bar: 'bar' } | null;
declare const foo: Foo;
const key = 'bar';
foo?.[key]?.trim();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = { [key: string]: string; foo: 'foo'; bar: 'bar' } | null;
declare const foo: Foo;
const key = 'bar';
foo?.[key].trim();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = { [key: string]: string; foo: 'foo'; bar: 'bar' } | null;
  3 | declare const foo: Foo;
  4 | const key = 'bar';
> 5 | foo?.[key]?.trim();
    |           ^^ Unnecessary optional chain on a non-nullish value.
  6 |       
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts

interface Outer {
  inner?: {
    [key: string]: string | undefined;
    bar: 'bar';
  };
}

export function test(outer: Outer): number | undefined {
  const key = 'bar';
  return outer.inner?.[key]?.charCodeAt(0);
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Outer {
  inner?: {
    [key: string]: string | undefined;
    bar: 'bar';
  };
}

export function test(outer: Outer): number | undefined {
  const key = 'bar';
  return outer.inner?.[key].charCodeAt(0);
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Outer {
   3 |   inner?: {
   4 |     [key: string]: string | undefined;
   5 |     bar: 'bar';
   6 |   };
   7 | }
   8 |
   9 | export function test(outer: Outer): number | undefined {
  10 |   const key = 'bar';
> 11 |   return outer.inner?.[key]?.charCodeAt(0);
     |                            ^^ Unnecessary optional chain on a non-nullish value.
  12 | }
  13 |       
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts

interface Outer {
  inner?: {
    [key: string]: string | undefined;
    bar: 'bar';
  };
}
type Bar = 'bar';

function Foo(outer: Outer, key: Bar): number | undefined {
  return outer.inner?.[key]?.charCodeAt(0);
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Outer {
  inner?: {
    [key: string]: string | undefined;
    bar: 'bar';
  };
}
type Bar = 'bar';

function Foo(outer: Outer, key: Bar): number | undefined {
  return outer.inner?.[key].charCodeAt(0);
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Outer {
   3 |   inner?: {
   4 |     [key: string]: string | undefined;
   5 |     bar: 'bar';
   6 |   };
   7 | }
   8 | type Bar = 'bar';
   9 |
  10 | function Foo(outer: Outer, key: Bar): number | undefined {
> 11 |   return outer.inner?.[key]?.charCodeAt(0);
     |                            ^^ Unnecessary optional chain on a non-nullish value.
  12 | }
  13 |       
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts

function test(testVal?: true) {
  if (testVal ?? true) {
    console.log('test');
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test(testVal?: true) {
> 3 |   if (testVal ?? true) {
    |       ^^^^^^^^^^^^^^^ Unnecessary conditional, value is always truthy.
  4 |     console.log('test');
  5 |   }
  6 | }
  7 |       
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts

const a = null;
if (!a) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const a = null;
> 3 | if (!a) {
    |      ^ Unnecessary conditional, value is always truthy.
  4 | }
  5 |       
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts

const a = true;
if (!a) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const a = true;
> 3 | if (!a) {
    |      ^ Unnecessary conditional, value is always falsy.
  4 | }
  5 |       
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts

function sayHi(): void {
  console.log('Hi!');
}

let speech: never = sayHi();
if (!speech) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function sayHi(): void {
  3 |   console.log('Hi!');
  4 | }
  5 |
  6 | let speech: never = sayHi();
> 7 | if (!speech) {
    |      ^^^^^^ Unnecessary conditional, value is `never`.
  8 | }
  9 |       
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts

declare const x: string[] | null;
if (x) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const x: string[] | null;
  3 | if (x) {
  4 | }
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const x: string[] | null;
> 3 | if (x) {
    |     ^ Unnecessary conditional, value is always truthy.
  4 | }
  5 |       
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  test: string;
  [key: string]: [string] | undefined;
}

type OptionalFoo = Foo | undefined;
declare const foo: OptionalFoo;
foo?.test?.length;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
  test: string;
  [key: string]: [string] | undefined;
}

type OptionalFoo = Foo | undefined;
declare const foo: OptionalFoo;
foo?.test.length;
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 |   test: string;
   4 |   [key: string]: [string] | undefined;
   5 | }
   6 |
   7 | type OptionalFoo = Foo | undefined;
   8 | declare const foo: OptionalFoo;
>  9 | foo?.test?.length;
     |          ^^ Unnecessary optional chain on a non-nullish value.
  10 |       
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts

function pick<Obj extends Record<string, 1 | 2 | 3>, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
): Obj[Key] {
  const k = obj[key];
  if (obj[key]) {
    return obj[key];
  }
  throw new Error('Boom!');
}

pick({ foo: 1, bar: 2 }, 'bar');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | function pick<Obj extends Record<string, 1 | 2 | 3>, Key extends keyof Obj>(
   3 |   obj: Obj,
   4 |   key: Key,
   5 | ): Obj[Key] {
   6 |   const k = obj[key];
>  7 |   if (obj[key]) {
     |       ^^^^^^^^ Unnecessary conditional, value is always truthy.
   8 |     return obj[key];
   9 |   }
  10 |   throw new Error('Boom!');
  11 | }
  12 |
  13 | pick({ foo: 1, bar: 2 }, 'bar');
  14 |       
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts

function getElem(dict: Record<string, { foo: string }>, key: string) {
  if (dict[key]) {
    return dict[key].foo;
  } else {
    return '';
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function getElem(dict: Record<string, { foo: string }>, key: string) {
> 3 |   if (dict[key]) {
    |       ^^^^^^^^^ Unnecessary conditional, value is always truthy.
  4 |     return dict[key].foo;
  5 |   } else {
  6 |     return '';
  7 |   }
  8 | }
  9 |       
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts

declare let foo: {};
foo ??= 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let foo: {};
> 3 | foo ??= 1;
    | ^^^ Unnecessary conditional, expected left-hand side of `??` operator to be possibly null or undefined.
  4 |       
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts

declare let foo: number;
foo ??= 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let foo: number;
> 3 | foo ??= 1;
    | ^^^ Unnecessary conditional, expected left-hand side of `??` operator to be possibly null or undefined.
  4 |       
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts

declare let foo: null;
foo ??= null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let foo: null;
> 3 | foo ??= null;
    | ^^^ Unnecessary conditional, left-hand side of `??` operator is always `null` or `undefined`.
  4 |       
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts

declare let foo: {};
foo ||= 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let foo: {};
> 3 | foo ||= 1;
    | ^^^ Unnecessary conditional, value is always truthy.
  4 |       
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts

declare let foo: null;
foo ||= null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let foo: null;
> 3 | foo ||= null;
    | ^^^ Unnecessary conditional, value is always falsy.
  4 |       
```

## Test #68

### Test Code

<!-- prettier-ignore -->
```ts

declare let foo: {};
foo &&= 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let foo: {};
> 3 | foo &&= 1;
    | ^^^ Unnecessary conditional, value is always truthy.
  4 |       
```

## Test #69

### Test Code

<!-- prettier-ignore -->
```ts

declare let foo: null;
foo &&= null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let foo: null;
> 3 | foo &&= null;
    | ^^^ Unnecessary conditional, value is always falsy.
  4 |       
```
