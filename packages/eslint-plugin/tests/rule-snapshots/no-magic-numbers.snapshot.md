# no-magic-numbers

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 1;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 1;
    |            ^ No magic number: 1.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = -1;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = -1;
    |            ^^ No magic number: -1.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 1 | 2 | 3;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 1 | 2 | 3;
    |            ^ No magic number: 1.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 1 | 2 | 3;
    |                ^ No magic number: 2.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 1 | 2 | 3;
    |                    ^ No magic number: 3.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 1 | -1;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 1 | -1;
    |            ^ No magic number: 1.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 1 | -1;
    |                ^^ No magic number: -1.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  bar: 1;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |   bar: 1;
    |        ^ No magic number: 1.
  4 | }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

enum foo {
  SECOND = 1000,
  NUM = '0123456789',
  NEG = -1,
  POS = +1,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum foo {
> 3 |   SECOND = 1000,
    |            ^^^^ No magic number: 1000.
  4 |   NUM = '0123456789',
  5 |   NEG = -1,
  6 |   POS = +1,
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum foo {
  3 |   SECOND = 1000,
  4 |   NUM = '0123456789',
> 5 |   NEG = -1,
    |         ^^ No magic number: -1.
  6 |   POS = +1,
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum foo {
  3 |   SECOND = 1000,
  4 |   NUM = '0123456789',
  5 |   NEG = -1,
> 6 |   POS = +1,
    |          ^ No magic number: 1.
  7 | }
  8 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  readonly A = 1;
  readonly B = 2;
  public static readonly C = 3;
  static readonly D = 4;
  readonly E = -5;
  readonly F = +6;
  private readonly G = 100n;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
>  3 |   readonly A = 1;
     |                ^ No magic number: 1.
   4 |   readonly B = 2;
   5 |   public static readonly C = 3;
   6 |   static readonly D = 4;
   7 |   readonly E = -5;
   8 |   readonly F = +6;
   9 |   private readonly G = 100n;
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   readonly A = 1;
>  4 |   readonly B = 2;
     |                ^ No magic number: 2.
   5 |   public static readonly C = 3;
   6 |   static readonly D = 4;
   7 |   readonly E = -5;
   8 |   readonly F = +6;
   9 |   private readonly G = 100n;
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   readonly A = 1;
   4 |   readonly B = 2;
>  5 |   public static readonly C = 3;
     |                              ^ No magic number: 3.
   6 |   static readonly D = 4;
   7 |   readonly E = -5;
   8 |   readonly F = +6;
   9 |   private readonly G = 100n;
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   readonly A = 1;
   4 |   readonly B = 2;
   5 |   public static readonly C = 3;
>  6 |   static readonly D = 4;
     |                       ^ No magic number: 4.
   7 |   readonly E = -5;
   8 |   readonly F = +6;
   9 |   private readonly G = 100n;
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   readonly A = 1;
   4 |   readonly B = 2;
   5 |   public static readonly C = 3;
   6 |   static readonly D = 4;
>  7 |   readonly E = -5;
     |                ^^ No magic number: -5.
   8 |   readonly F = +6;
   9 |   private readonly G = 100n;
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   readonly A = 1;
   4 |   readonly B = 2;
   5 |   public static readonly C = 3;
   6 |   static readonly D = 4;
   7 |   readonly E = -5;
>  8 |   readonly F = +6;
     |                 ^ No magic number: 6.
   9 |   private readonly G = 100n;
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   readonly A = 1;
   4 |   readonly B = 2;
   5 |   public static readonly C = 3;
   6 |   static readonly D = 4;
   7 |   readonly E = -5;
   8 |   readonly F = +6;
>  9 |   private readonly G = 100n;
     |                        ^^^^ No magic number: 100n.
  10 | }
  11 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Bar[0];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Bar[0];
    |                ^ No magic number: 0.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Bar[-1];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Bar[-1];
    |                ^^ No magic number: -1.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Bar[0xab];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Bar[0xab];
    |                ^^^^ No magic number: 0xab.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Bar[5.6e1];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Bar[5.6e1];
    |                ^^^^^ No magic number: 5.6e1.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Bar[10n];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Bar[10n];
    |                ^^^ No magic number: 10n.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Bar[1 | -2];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Bar[1 | -2];
    |                ^ No magic number: 1.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Bar[1 | -2];
    |                    ^^ No magic number: -2.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Bar[1 & -2];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Bar[1 & -2];
    |                ^ No magic number: 1.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Bar[1 & -2];
    |                    ^^ No magic number: -2.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Bar[1 & number];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Bar[1 & number];
    |                ^ No magic number: 1.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Bar[((1 & -2) | 3) | 4];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Bar[((1 & -2) | 3) | 4];
    |                  ^ No magic number: 1.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Bar[((1 & -2) | 3) | 4];
    |                      ^^ No magic number: -2.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Bar[((1 & -2) | 3) | 4];
    |                            ^ No magic number: 3.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Bar[((1 & -2) | 3) | 4];
    |                                 ^ No magic number: 4.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Parameters<Bar>[2];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Parameters<Bar>[2];
    |                            ^ No magic number: 2.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

type Others = [['a'], ['b']];

type Foo = {
  [K in keyof Others[0]]: Others[K];
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Others = [['a'], ['b']];
  3 |
  4 | type Foo = {
> 5 |   [K in keyof Others[0]]: Others[K];
    |                      ^ No magic number: 0.
  6 | };
  7 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

type Other = {
  [0]: 3;
};

type Foo = {
  [K in keyof Other]: `${K & number}`;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Other = {
> 3 |   [0]: 3;
    |    ^ No magic number: 0.
  4 | };
  5 |
  6 | type Foo = {
  7 |   [K in keyof Other]: `${K & number}`;
  8 | };
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Other = {
> 3 |   [0]: 3;
    |        ^ No magic number: 3.
  4 | };
  5 |
  6 | type Foo = {
  7 |   [K in keyof Other]: `${K & number}`;
  8 | };
  9 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  [K in 0 | 1 | 2]: 0;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |   [K in 0 | 1 | 2]: 0;
    |         ^ No magic number: 0.
  4 | };
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |   [K in 0 | 1 | 2]: 0;
    |             ^ No magic number: 1.
  4 | };
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |   [K in 0 | 1 | 2]: 0;
    |                 ^ No magic number: 2.
  4 | };
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |   [K in 0 | 1 | 2]: 0;
    |                     ^ No magic number: 0.
  4 | };
  5 |       
```
