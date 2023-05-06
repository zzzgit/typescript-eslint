# prefer-function-type

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  (): string;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = () => string;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |   (): string;
    |   ^^^^^^^^^^^ Interface only has a call signature, you should use a function type instead.
  4 | }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

export default interface Foo {
  /** comment */
  (): string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export default interface Foo {
  3 |   /** comment */
> 4 |   (): string;
    |   ^^^^^^^^^^^ Interface only has a call signature, you should use a function type instead.
  5 | }
  6 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  // comment
  (): string;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

// comment
type Foo = () => string;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   // comment
> 4 |   (): string;
    |   ^^^^^^^^^^^ Interface only has a call signature, you should use a function type instead.
  5 | }
  6 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

export interface Foo {
  /** comment */
  (): string;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

/** comment */
export type Foo = () => string;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export interface Foo {
  3 |   /** comment */
> 4 |   (): string;
    |   ^^^^^^^^^^^ Interface only has a call signature, you should use a function type instead.
  5 | }
  6 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

export interface Foo {
  // comment
  (): string;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

// comment
export type Foo = () => string;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export interface Foo {
  3 |   // comment
> 4 |   (): string;
    |   ^^^^^^^^^^^ Interface only has a call signature, you should use a function type instead.
  5 | }
  6 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

function foo(bar: { /* comment */ (s: string): number } | undefined): number {
  return bar('hello');
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo(bar: /* comment */ ((s: string) => number) | undefined): number {
  return bar('hello');
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(bar: { /* comment */ (s: string): number } | undefined): number {
    |                                   ^^^^^^^^^^^^^^^^^^^ Type literal only has a call signature, you should use a function type instead.
  3 |   return bar('hello');
  4 | }
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  (): string;
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = () => string;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |   (): string;
    |   ^^^^^^^^^^^ Type literal only has a call signature, you should use a function type instead.
  4 | };
  5 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

function foo(bar: { (s: string): number }): number {
  return bar('hello');
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo(bar: (s: string) => number): number {
  return bar('hello');
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(bar: { (s: string): number }): number {
    |                     ^^^^^^^^^^^^^^^^^^^ Type literal only has a call signature, you should use a function type instead.
  3 |   return bar('hello');
  4 | }
  5 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

function foo(bar: { (s: string): number } | undefined): number {
  return bar('hello');
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo(bar: ((s: string) => number) | undefined): number {
  return bar('hello');
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(bar: { (s: string): number } | undefined): number {
    |                     ^^^^^^^^^^^^^^^^^^^ Type literal only has a call signature, you should use a function type instead.
  3 |   return bar('hello');
  4 | }
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo extends Function {
  (): void;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = () => void;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo extends Function {
> 3 |   (): void;
    |   ^^^^^^^^^ Interface only has a call signature, you should use a function type instead.
  4 | }
  5 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo<T> {
  (bar: T): string;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo<T> = (bar: T) => string;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo<T> {
> 3 |   (bar: T): string;
    |   ^^^^^^^^^^^^^^^^^ Interface only has a call signature, you should use a function type instead.
  4 | }
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo<T> {
  (this: T): void;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo<T> = (this: T) => void;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo<T> {
> 3 |   (this: T): void;
    |   ^^^^^^^^^^^^^^^^ Interface only has a call signature, you should use a function type instead.
  4 | }
  5 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

type Foo<T> = { (this: string): T };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo<T> = (this: string) => T;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | type Foo<T> = { (this: string): T };
    |                 ^^^^^^^^^^^^^^^^^ Type literal only has a call signature, you should use a function type instead.
  3 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  (arg: this): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |   (arg: this): void;
    |         ^^^^ `this` refers to the function type 'Foo', did you intend to use a generic `this` parameter like `<Self>(this: Self, ...) => Self` instead?
  4 | }
  5 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  (arg: number): this | undefined;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |   (arg: number): this | undefined;
    |                  ^^^^ `this` refers to the function type 'Foo', did you intend to use a generic `this` parameter like `<Self>(this: Self, ...) => Self` instead?
  4 | }
  5 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

// isn't actually valid ts but want to not give message saying it refers to Foo.
interface Foo {
  (): {
    a: {
      nested: this;
    };
    between: this;
    b: {
      nested: string;
    };
  };
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

// isn't actually valid ts but want to not give message saying it refers to Foo.
type Foo = () => {
    a: {
      nested: this;
    };
    between: this;
    b: {
      nested: string;
    };
  };
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // isn't actually valid ts but want to not give message saying it refers to Foo.
   3 | interface Foo {
>  4 |   (): {
     |   ^^^^^
>  5 |     a: {
     | ^^^^^^^^
>  6 |       nested: this;
     | ^^^^^^^^
>  7 |     };
     | ^^^^^^^^
>  8 |     between: this;
     | ^^^^^^^^
>  9 |     b: {
     | ^^^^^^^^
> 10 |       nested: string;
     | ^^^^^^^^
> 11 |     };
     | ^^^^^^^^
> 12 |   };
     | ^^^^^ Interface only has a call signature, you should use a function type instead.
  13 | }
  14 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

type X = {} | { (): void; }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type X = {} | (() => void)
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | type X = {} | { (): void; }
    |                 ^^^^^^^^^ Type literal only has a call signature, you should use a function type instead.
  3 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

type X = {} & { (): void; };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type X = {} & (() => void);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | type X = {} & { (): void; };
    |                 ^^^^^^^^^ Type literal only has a call signature, you should use a function type instead.
  3 |       
```
