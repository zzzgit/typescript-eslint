# no-empty-interface

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
interface Foo {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Foo {}
    |           ^^^ An empty interface is equivalent to `{}`.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
interface Foo extends {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Foo extends {}
    |           ^^^ An empty interface is equivalent to `{}`.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  props: string;
}

interface Bar extends Foo {}

class Baz {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
  props: string;
}

type Bar = Foo

class Baz {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   props: string;
  4 | }
  5 |
> 6 | interface Bar extends Foo {}
    |           ^^^ An interface declaring no members is equivalent to its supertype.
  7 |
  8 | class Baz {}
  9 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  props: string;
}

interface Bar extends Foo {}

class Bar {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   props: string;
  4 | }
  5 |
> 6 | interface Bar extends Foo {}
    |           ^^^ An interface declaring no members is equivalent to its supertype.
  7 |
  8 | class Bar {}
  9 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  props: string;
}

interface Bar extends Foo {}

const bar = class Bar {};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
  props: string;
}

type Bar = Foo

const bar = class Bar {};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   props: string;
  4 | }
  5 |
> 6 | interface Bar extends Foo {}
    |           ^^^ An interface declaring no members is equivalent to its supertype.
  7 |
  8 | const bar = class Bar {};
  9 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  name: string;
}

interface Bar extends Foo {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
  name: string;
}

type Bar = Foo
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   name: string;
  4 | }
  5 |
> 6 | interface Bar extends Foo {}
    |           ^^^ An interface declaring no members is equivalent to its supertype.
  7 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
interface Foo extends Array<number> {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = Array<number>
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Foo extends Array<number> {}
    |           ^^^ An interface declaring no members is equivalent to its supertype.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
interface Foo extends Array<number | {}> {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = Array<number | {}>
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Foo extends Array<number | {}> {}
    |           ^^^ An interface declaring no members is equivalent to its supertype.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {
  bar: string;
}
interface Foo extends Array<Bar> {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Bar {
  bar: string;
}
type Foo = Array<Bar>
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {
  3 |   bar: string;
  4 | }
> 5 | interface Foo extends Array<Bar> {}
    |           ^^^ An interface declaring no members is equivalent to its supertype.
  6 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

type R = Record<string, unknown>;
interface Foo extends R {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type R = Record<string, unknown>;
type Foo = R
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type R = Record<string, unknown>;
> 3 | interface Foo extends R {}
    |           ^^^ An interface declaring no members is equivalent to its supertype.
  4 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo<T> extends Bar<T> {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo<T> = Bar<T>
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface Foo<T> extends Bar<T> {}
    |           ^^^ An interface declaring no members is equivalent to its supertype.
  3 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

declare module FooBar {
  type Baz = typeof baz;
  export interface Bar extends Baz {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare module FooBar {
  3 |   type Baz = typeof baz;
> 4 |   export interface Bar extends Baz {}
    |                    ^^^ An interface declaring no members is equivalent to its supertype.
  5 | }
  6 |       
```

#### Suggestions

##### An interface declaring no members is equivalent to its supertype.

<!-- prettier-ignore -->
```ts

declare module FooBar {
  type Baz = typeof baz;
  export type Bar = Baz
}
      
```
