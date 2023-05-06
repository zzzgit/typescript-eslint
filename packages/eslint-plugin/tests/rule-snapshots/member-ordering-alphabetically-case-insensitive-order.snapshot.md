# member-ordering-alphabetically-case-insensitive-order

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  c: string;
  B: string;
  a: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   c: string;
> 4 |   B: string;
    |   ^^^^^^^^^^ Member B should be declared before member c.
  5 |   a: string;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   c: string;
  4 |   B: string;
> 5 |   a: string;
    |   ^^^^^^^^^^ Member a should be declared before member B.
  6 | }
  7 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  B: b;
  a: b;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   B: b;
> 4 |   a: b;
    |   ^^^^^ Member a should be declared before member B.
  5 | }
  6 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  B: b;
  a: b;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   B: b;
> 4 |   a: b;
    |   ^^^^^ Member a should be declared before member B.
  5 | };
  6 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public static B: string;
  public static a: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   public static B: string;
> 4 |   public static a: string;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member a should be declared before member B.
  5 | }
  6 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class Foo {
  public static B: string;
  public static a: string;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = class Foo {
  3 |   public static B: string;
> 4 |   public static a: string;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member a should be declared before member B.
  5 | };
  6 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  [a: string]: number;

  a: x;
  B: x;
  c: x;

  c(): void;
  B(): void;
  a(): void;

  (): Baz;

  new (): Bar;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 |   [a: string]: number;
   4 |
   5 |   a: x;
   6 |   B: x;
   7 |   c: x;
   8 |
   9 |   c(): void;
  10 |   B(): void;
  11 |   a(): void;
  12 |
> 13 |   (): Baz;
     |   ^^^^^^^^ Member call should be declared before all field definitions.
  14 |
  15 |   new (): Bar;
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 |   [a: string]: number;
   4 |
   5 |   a: x;
   6 |   B: x;
   7 |   c: x;
   8 |
   9 |   c(): void;
  10 |   B(): void;
  11 |   a(): void;
  12 |
  13 |   (): Baz;
  14 |
> 15 |   new (): Bar;
     |   ^^^^^^^^^^^^ Member new should be declared before all method definitions.
  16 | }
  17 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  [a: string]: number;

  a: x;
  B: x;
  c: x;

  c(): void;
  B(): void;
  a(): void;

  (): Baz;

  new (): Bar;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Foo = {
   3 |   [a: string]: number;
   4 |
   5 |   a: x;
   6 |   B: x;
   7 |   c: x;
   8 |
   9 |   c(): void;
  10 |   B(): void;
  11 |   a(): void;
  12 |
> 13 |   (): Baz;
     |   ^^^^^^^^ Member call should be declared before all field definitions.
  14 |
  15 |   new (): Bar;
  16 | };
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Foo = {
   3 |   [a: string]: number;
   4 |
   5 |   a: x;
   6 |   B: x;
   7 |   c: x;
   8 |
   9 |   c(): void;
  10 |   B(): void;
  11 |   a(): void;
  12 |
  13 |   (): Baz;
  14 |
> 15 |   new (): Bar;
     |   ^^^^^^^^^^^^ Member new should be declared before all method definitions.
  16 | };
  17 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public static c: string = '';
  public static B: string = '';
  public static a: string;

  constructor() {}

  public d: string = '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static c: string = '';
   4 |   public static B: string = '';
   5 |   public static a: string;
   6 |
   7 |   constructor() {}
   8 |
>  9 |   public d: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^ Member d should be declared before all public constructor definitions.
  10 | }
  11 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class Foo {
  public static c: string = '';
  public static B: string = '';
  public static a: string;

  constructor() {}

  public d: string = '';
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class Foo {
   3 |   public static c: string = '';
   4 |   public static B: string = '';
   5 |   public static a: string;
   6 |
   7 |   constructor() {}
   8 |
>  9 |   public d: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^ Member d should be declared before all public constructor definitions.
  10 | };
  11 |       
```
