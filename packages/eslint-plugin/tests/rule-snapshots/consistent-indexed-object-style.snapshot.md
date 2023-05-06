# consistent-indexed-object-style

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  [key: string]: any;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = Record<string, any>;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface Foo {
    | ^^^^^^^^^^^^^^^
> 3 |   [key: string]: any;
    | ^^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ A record is preferred over an index signature.
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  readonly [key: string]: any;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = Readonly<Record<string, any>>;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface Foo {
    | ^^^^^^^^^^^^^^^
> 3 |   readonly [key: string]: any;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ A record is preferred over an index signature.
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo<A> {
  [key: string]: A;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo<A> = Record<string, A>;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface Foo<A> {
    | ^^^^^^^^^^^^^^^^^^
> 3 |   [key: string]: A;
    | ^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ A record is preferred over an index signature.
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo<A = any> {
  [key: string]: A;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo<A = any> = Record<string, A>;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface Foo<A = any> {
    | ^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   [key: string]: A;
    | ^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ A record is preferred over an index signature.
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

interface B extends A {
  [index: number]: unknown;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface B extends A {
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   [index: number]: unknown;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ A record is preferred over an index signature.
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo<A> {
  readonly [key: string]: A;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo<A> = Readonly<Record<string, A>>;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface Foo<A> {
    | ^^^^^^^^^^^^^^^^^^
> 3 |   readonly [key: string]: A;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ A record is preferred over an index signature.
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo<A, B> {
  [key: A]: B;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo<A, B> = Record<A, B>;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface Foo<A, B> {
    | ^^^^^^^^^^^^^^^^^^^^^
> 3 |   [key: A]: B;
    | ^^^^^^^^^^^^^^
> 4 | }
    | ^^ A record is preferred over an index signature.
  5 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo<A, B> {
  readonly [key: A]: B;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo<A, B> = Readonly<Record<A, B>>;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface Foo<A, B> {
    | ^^^^^^^^^^^^^^^^^^^^^
> 3 |   readonly [key: A]: B;
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ A record is preferred over an index signature.
  5 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = { [key: string]: any };
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = Record<string, any>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = { [key: string]: any };
    |            ^^^^^^^^^^^^^^^^^^^^^^ A record is preferred over an index signature.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = { readonly [key: string]: any };
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = Readonly<Record<string, any>>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = { readonly [key: string]: any };
    |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ A record is preferred over an index signature.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Generic<{ [key: string]: any }>;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = Generic<Record<string, any>>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Generic<{ [key: string]: any }>;
    |                    ^^^^^^^^^^^^^^^^^^^^^^ A record is preferred over an index signature.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Generic<{ readonly [key: string]: any }>;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = Generic<Readonly<Record<string, any>>>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Generic<{ readonly [key: string]: any }>;
    |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ A record is preferred over an index signature.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arg: { [key: string]: any }) {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo(arg: Record<string, any>) {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(arg: { [key: string]: any }) {}
    |                   ^^^^^^^^^^^^^^^^^^^^^^ A record is preferred over an index signature.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
function foo(): { [key: string]: any } {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo(): Record<string, any> {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(): { [key: string]: any } {}
    |                 ^^^^^^^^^^^^^^^^^^^^^^ A record is preferred over an index signature.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arg: { readonly [key: string]: any }) {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo(arg: Readonly<Record<string, any>>) {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(arg: { readonly [key: string]: any }) {}
    |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ A record is preferred over an index signature.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
function foo(): { readonly [key: string]: any } {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo(): Readonly<Record<string, any>> {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(): { readonly [key: string]: any } {}
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ A record is preferred over an index signature.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Record<string, any>;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = { [key: string]: any };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Record<string, any>;
    |            ^^^^^^^^^^^^^^^^^^^ An index signature is preferred over a record.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = Record<string, T>;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [key: string]: T };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = Record<string, T>;
    |               ^^^^^^^^^^^^^^^^^ An index signature is preferred over a record.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = { [k: string]: A.Foo };
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = Record<string, A.Foo>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = { [k: string]: A.Foo };
    |            ^^^^^^^^^^^^^^^^^^^^^^ A record is preferred over an index signature.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = { [key: string]: AnotherFoo };
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = Record<string, AnotherFoo>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = { [key: string]: AnotherFoo };
    |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ A record is preferred over an index signature.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = { [key: string]: { [key: string]: Foo } };
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = { [key: string]: Record<string, Foo> };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = { [key: string]: { [key: string]: Foo } };
    |                             ^^^^^^^^^^^^^^^^^^^^^^ A record is preferred over an index signature.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = { [key: string]: string } | Foo;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = Record<string, string> | Foo;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = { [key: string]: string } | Foo;
    |            ^^^^^^^^^^^^^^^^^^^^^^^^^ A record is preferred over an index signature.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo<T> {
  [k: string]: T;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo<T> = Record<string, T>;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface Foo<T> {
    | ^^^^^^^^^^^^^^^^^^
> 3 |   [k: string]: T;
    | ^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ A record is preferred over an index signature.
  5 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  [k: string]: A.Foo;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = Record<string, A.Foo>;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface Foo {
    | ^^^^^^^^^^^^^^^
> 3 |   [k: string]: A.Foo;
    | ^^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ A record is preferred over an index signature.
  5 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  [k: string]: { [key: string]: Foo };
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
  [k: string]: Record<string, Foo>;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |   [k: string]: { [key: string]: Foo };
    |                ^^^^^^^^^^^^^^^^^^^^^^ A record is preferred over an index signature.
  4 | }
  5 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Generic<Record<string, any>>;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = Generic<{ [key: string]: any }>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Generic<Record<string, any>>;
    |                    ^^^^^^^^^^^^^^^^^^^ An index signature is preferred over a record.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arg: Record<string, any>) {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo(arg: { [key: string]: any }) {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(arg: Record<string, any>) {}
    |                   ^^^^^^^^^^^^^^^^^^^ An index signature is preferred over a record.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
function foo(): Record<string, any> {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo(): { [key: string]: any } {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(): Record<string, any> {}
    |                 ^^^^^^^^^^^^^^^^^^^ An index signature is preferred over a record.
```
