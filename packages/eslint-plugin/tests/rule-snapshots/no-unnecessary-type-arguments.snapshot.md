# no-unnecessary-type-arguments

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

function f<T = number>() {}
f<number>();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function f<T = number>() {}
f();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function f<T = number>() {}
> 3 | f<number>();
    |   ^^^^^^ This is the default value for this type parameter, so it can be omitted.
  4 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

function g<T = number, U = string>() {}
g<string, string>();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function g<T = number, U = string>() {}
g<string>();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function g<T = number, U = string>() {}
> 3 | g<string, string>();
    |           ^^^^^^ This is the default value for this type parameter, so it can be omitted.
  4 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

class C<T = number> {}
function h(c: C<number>) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class C<T = number> {}
function h(c: C) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class C<T = number> {}
> 3 | function h(c: C<number>) {}
    |                 ^^^^^^ This is the default value for this type parameter, so it can be omitted.
  4 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

class C<T = number> {}
new C<number>();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class C<T = number> {}
new C();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class C<T = number> {}
> 3 | new C<number>();
    |       ^^^^^^ This is the default value for this type parameter, so it can be omitted.
  4 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

class C<T = number> {}
class D extends C<number> {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class C<T = number> {}
class D extends C {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class C<T = number> {}
> 3 | class D extends C<number> {}
    |                   ^^^^^^ This is the default value for this type parameter, so it can be omitted.
  4 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

interface I<T = number> {}
class Impl implements I<number> {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface I<T = number> {}
class Impl implements I {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface I<T = number> {}
> 3 | class Impl implements I<number> {}
    |                         ^^^^^^ This is the default value for this type parameter, so it can be omitted.
  4 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

class Foo<T = number> {}
const foo = new Foo<number>();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo<T = number> {}
const foo = new Foo();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo<T = number> {}
> 3 | const foo = new Foo<number>();
    |                     ^^^^^^ This is the default value for this type parameter, so it can be omitted.
  4 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar<T = string> {}
class Foo<T = number> implements Bar<string> {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Bar<T = string> {}
class Foo<T = number> implements Bar {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar<T = string> {}
> 3 | class Foo<T = number> implements Bar<string> {}
    |                                      ^^^^^^ This is the default value for this type parameter, so it can be omitted.
  4 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

class Bar<T = string> {}
class Foo<T = number> extends Bar<string> {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Bar<T = string> {}
class Foo<T = number> extends Bar {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Bar<T = string> {}
> 3 | class Foo<T = number> extends Bar<string> {}
    |                                   ^^^^^^ This is the default value for this type parameter, so it can be omitted.
  4 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

import { F } from './missing';
function bar<T = F<string>>() {}
bar<F<string>>();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import { F } from './missing';
function bar<T = F<string>>() {}
bar();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { F } from './missing';
  3 | function bar<T = F<string>>() {}
> 4 | bar<F<string>>();
    |     ^^^^^^^^^ This is the default value for this type parameter, so it can be omitted.
  5 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

type DefaultE = { foo: string };
type T<E = DefaultE> = { box: E };
type G = T<DefaultE>;
declare module 'bar' {
  type DefaultE = { somethingElse: true };
  type G = T<DefaultE>;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type DefaultE = { foo: string };
type T<E = DefaultE> = { box: E };
type G = T;
declare module 'bar' {
  type DefaultE = { somethingElse: true };
  type G = T<DefaultE>;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type DefaultE = { foo: string };
  3 | type T<E = DefaultE> = { box: E };
> 4 | type G = T<DefaultE>;
    |            ^^^^^^^^ This is the default value for this type parameter, so it can be omitted.
  5 | declare module 'bar' {
  6 |   type DefaultE = { somethingElse: true };
  7 |   type G = T<DefaultE>;
  8 | }
  9 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

type A<T = Map<string, string>> = T;
type B = A<Map<string, string>>;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A<T = Map<string, string>> = T;
type B = A;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A<T = Map<string, string>> = T;
> 3 | type B = A<Map<string, string>>;
    |            ^^^^^^^^^^^^^^^^^^^ This is the default value for this type parameter, so it can be omitted.
  4 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

type A = Map<string, string>;
type B<T = A> = T;
type C = B<A>;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A = Map<string, string>;
type B<T = A> = T;
type C = B;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = Map<string, string>;
  3 | type B<T = A> = T;
> 4 | type C = B<A>;
    |            ^ This is the default value for this type parameter, so it can be omitted.
  5 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

type A = Map<string, string>;
type B<T = A> = T;
type C = B<Map<string, string>>;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A = Map<string, string>;
type B<T = A> = T;
type C = B;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = Map<string, string>;
  3 | type B<T = A> = T;
> 4 | type C = B<Map<string, string>>;
    |            ^^^^^^^^^^^^^^^^^^^ This is the default value for this type parameter, so it can be omitted.
  5 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

type A = Map<string, string>;
type B = Map<string, string>;
type C<T = A> = T;
type D = C<B>;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A = Map<string, string>;
type B = Map<string, string>;
type C<T = A> = T;
type D = C;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = Map<string, string>;
  3 | type B = Map<string, string>;
  4 | type C<T = A> = T;
> 5 | type D = C<B>;
    |            ^ This is the default value for this type parameter, so it can be omitted.
  6 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

type A = Map<string, string>;
type B = A;
type C = Map<string, string>;
type D = C;
type E<T = B> = T;
type F = E<D>;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A = Map<string, string>;
type B = A;
type C = Map<string, string>;
type D = C;
type E<T = B> = T;
type F = E;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = Map<string, string>;
  3 | type B = A;
  4 | type C = Map<string, string>;
  5 | type D = C;
  6 | type E<T = B> = T;
> 7 | type F = E<D>;
    |            ^ This is the default value for this type parameter, so it can be omitted.
  8 |       
```
