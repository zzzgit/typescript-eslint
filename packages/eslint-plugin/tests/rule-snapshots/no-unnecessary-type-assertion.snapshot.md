# no-unnecessary-type-assertion

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

const foo = 3;
const bar = foo!;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const foo = 3;
const bar = foo;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = 3;
> 3 | const bar = foo!;
    |             ^^^^ This assertion is unnecessary since it does not change the type of the expression.
  4 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

const foo = (3 + 5) as number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const foo = (3 + 5);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const foo = (3 + 5) as number;
    |             ^^^^^^^^^^^^^^^^^ This assertion is unnecessary since it does not change the type of the expression.
  3 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

const foo = <number>(3 + 5);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const foo = (3 + 5);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const foo = <number>(3 + 5);
    |             ^^^^^^^^^^^^^^^ This assertion is unnecessary since it does not change the type of the expression.
  3 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = number;
const foo = (3 + 5) as Foo;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = number;
const foo = (3 + 5);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = number;
> 3 | const foo = (3 + 5) as Foo;
    |             ^^^^^^^^^^^^^^ This assertion is unnecessary since it does not change the type of the expression.
  4 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = number;
const foo = <Foo>(3 + 5);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = number;
const foo = (3 + 5);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = number;
> 3 | const foo = <Foo>(3 + 5);
    |             ^^^^^^^^^^^^ This assertion is unnecessary since it does not change the type of the expression.
  4 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

let bar: number = 1;
bar! + 1;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

let bar: number = 1;
bar + 1;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let bar: number = 1;
> 3 | bar! + 1;
    | ^^^^ This assertion is unnecessary since it does not change the type of the expression.
  4 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

let bar!: number;
bar! + 1;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

let bar!: number;
bar + 1;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let bar!: number;
> 3 | bar! + 1;
    | ^^^^ This assertion is unnecessary since it does not change the type of the expression.
  4 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

let bar: number | undefined;
bar = 1;
bar! + 1;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

let bar: number | undefined;
bar = 1;
bar + 1;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let bar: number | undefined;
  3 | bar = 1;
> 4 | bar! + 1;
    | ^^^^ This assertion is unnecessary since it does not change the type of the expression.
  5 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

function foo<T extends string>(bar: T) {
  return bar!;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo<T extends string>(bar: T) {
  return bar;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo<T extends string>(bar: T) {
> 3 |   return bar!;
    |          ^^^^ This assertion is unnecessary since it does not change the type of the expression.
  4 | }
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

declare const foo: Foo;
const bar = <Foo>foo;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare const foo: Foo;
const bar = foo;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const foo: Foo;
> 3 | const bar = <Foo>foo;
    |             ^^^^^^^^ This assertion is unnecessary since it does not change the type of the expression.
  4 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

declare function nonNull(s: string | null);
let s: string | null = null;
nonNull(s!);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare function nonNull(s: string | null);
let s: string | null = null;
nonNull(s);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function nonNull(s: string | null);
  3 | let s: string | null = null;
> 4 | nonNull(s!);
    |         ^^ This assertion is unnecessary since the receiver accepts the original type of the expression.
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

const x: number | null = null;
const y: number | null = x!;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const x: number | null = null;
const y: number | null = x;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const x: number | null = null;
> 3 | const y: number | null = x!;
    |                          ^^ This assertion is unnecessary since the receiver accepts the original type of the expression.
  4 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

const x: number | null = null;
class Foo {
  prop: number | null = x!;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const x: number | null = null;
class Foo {
  prop: number | null = x;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const x: number | null = null;
  3 | class Foo {
> 4 |   prop: number | null = x!;
    |                         ^^ This assertion is unnecessary since the receiver accepts the original type of the expression.
  5 | }
  6 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

declare function a(a: string): any;
const b = 'asdf';
class Mx {
  @a(b!)
  private prop = 1;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare function a(a: string): any;
const b = 'asdf';
class Mx {
  @a(b)
  private prop = 1;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function a(a: string): any;
  3 | const b = 'asdf';
  4 | class Mx {
> 5 |   @a(b!)
    |      ^^ This assertion is unnecessary since it does not change the type of the expression.
  6 |   private prop = 1;
  7 | }
  8 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```tsx

declare namespace JSX {
  interface IntrinsicElements {
    div: { key?: string | number };
  }
}

function Test(props: { id?: string | number }) {
  return <div key={props.id!} />;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```tsx

declare namespace JSX {
  interface IntrinsicElements {
    div: { key?: string | number };
  }
}

function Test(props: { id?: string | number }) {
  return <div key={props.id} />;
}
      
```

### Errors

<!-- prettier-ignore -->
```tsx
   1 |
   2 | declare namespace JSX {
   3 |   interface IntrinsicElements {
   4 |     div: { key?: string | number };
   5 |   }
   6 | }
   7 |
   8 | function Test(props: { id?: string | number }) {
>  9 |   return <div key={props.id!} />;
     |                    ^^^^^^^^^ This assertion is unnecessary since the receiver accepts the original type of the expression.
  10 | }
  11 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

let x: number | undefined;
let y: number | undefined;
y = x!;
y! = 0;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

let x: number | undefined;
let y: number | undefined;
y = x!;
y = 0;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let x: number | undefined;
  3 | let y: number | undefined;
  4 | y = x!;
> 5 | y! = 0;
    | ^^ This assertion is unnecessary since the receiver accepts the original type of the expression.
  6 |       
```
