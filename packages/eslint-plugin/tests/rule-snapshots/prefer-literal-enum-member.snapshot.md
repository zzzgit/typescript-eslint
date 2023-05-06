# prefer-literal-enum-member

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

enum InvalidObject {
  A = {},
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum InvalidObject {
> 3 |   A = {},
    |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  4 | }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

enum InvalidArray {
  A = [],
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum InvalidArray {
> 3 |   A = [],
    |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  4 | }
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

enum InvalidTemplateLiteral {
  A = `foo ${0}`,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum InvalidTemplateLiteral {
> 3 |   A = `foo ${0}`,
    |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  4 | }
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

enum InvalidConstructor {
  A = new Set(),
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum InvalidConstructor {
> 3 |   A = new Set(),
    |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  4 | }
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

enum InvalidExpression {
  A = 2 + 2,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum InvalidExpression {
> 3 |   A = 2 + 2,
    |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  4 | }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

enum InvalidExpression {
  A = delete 2,
  B = -a,
  C = void 2,
  D = ~2,
  E = !0,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum InvalidExpression {
> 3 |   A = delete 2,
    |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  4 |   B = -a,
  5 |   C = void 2,
  6 |   D = ~2,
  7 |   E = !0,
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum InvalidExpression {
  3 |   A = delete 2,
> 4 |   B = -a,
    |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  5 |   C = void 2,
  6 |   D = ~2,
  7 |   E = !0,
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum InvalidExpression {
  3 |   A = delete 2,
  4 |   B = -a,
> 5 |   C = void 2,
    |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  6 |   D = ~2,
  7 |   E = !0,
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum InvalidExpression {
  3 |   A = delete 2,
  4 |   B = -a,
  5 |   C = void 2,
> 6 |   D = ~2,
    |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  7 |   E = !0,
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum InvalidExpression {
  3 |   A = delete 2,
  4 |   B = -a,
  5 |   C = void 2,
  6 |   D = ~2,
> 7 |   E = !0,
    |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  8 | }
  9 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

const variable = 'Test';
enum InvalidVariable {
  A = 'TestStr',
  B = 2,
  C,
  V = variable,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const variable = 'Test';
  3 | enum InvalidVariable {
  4 |   A = 'TestStr',
  5 |   B = 2,
  6 |   C,
> 7 |   V = variable,
    |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  8 | }
  9 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

enum InvalidEnumMember {
  A = 'TestStr',
  B = A,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum InvalidEnumMember {
  3 |   A = 'TestStr',
> 4 |   B = A,
    |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  5 | }
  6 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

const Valid = { A: 2 };
enum InvalidObjectMember {
  A = 'TestStr',
  B = Valid.A,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const Valid = { A: 2 };
  3 | enum InvalidObjectMember {
  4 |   A = 'TestStr',
> 5 |   B = Valid.A,
    |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  6 | }
  7 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

enum Valid {
  A,
}
enum InvalidEnumMember {
  A = 'TestStr',
  B = Valid.A,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum Valid {
  3 |   A,
  4 | }
  5 | enum InvalidEnumMember {
  6 |   A = 'TestStr',
> 7 |   B = Valid.A,
    |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  8 | }
  9 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

const obj = { a: 1 };
enum InvalidSpread {
  A = 'TestStr',
  B = { ...a },
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const obj = { a: 1 };
  3 | enum InvalidSpread {
  4 |   A = 'TestStr',
> 5 |   B = { ...a },
    |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  6 | }
  7 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

enum Foo {
  A = 1 << 0,
  B = 1 >> 0,
  C = 1 >>> 0,
  D = 1 | 0,
  E = 1 & 0,
  F = 1 ^ 0,
  G = ~1,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | enum Foo {
>  3 |   A = 1 << 0,
     |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
   4 |   B = 1 >> 0,
   5 |   C = 1 >>> 0,
   6 |   D = 1 | 0,
   7 |   E = 1 & 0,
   8 |   F = 1 ^ 0,
   9 |   G = ~1,
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | enum Foo {
   3 |   A = 1 << 0,
>  4 |   B = 1 >> 0,
     |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
   5 |   C = 1 >>> 0,
   6 |   D = 1 | 0,
   7 |   E = 1 & 0,
   8 |   F = 1 ^ 0,
   9 |   G = ~1,
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | enum Foo {
   3 |   A = 1 << 0,
   4 |   B = 1 >> 0,
>  5 |   C = 1 >>> 0,
     |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
   6 |   D = 1 | 0,
   7 |   E = 1 & 0,
   8 |   F = 1 ^ 0,
   9 |   G = ~1,
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | enum Foo {
   3 |   A = 1 << 0,
   4 |   B = 1 >> 0,
   5 |   C = 1 >>> 0,
>  6 |   D = 1 | 0,
     |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
   7 |   E = 1 & 0,
   8 |   F = 1 ^ 0,
   9 |   G = ~1,
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | enum Foo {
   3 |   A = 1 << 0,
   4 |   B = 1 >> 0,
   5 |   C = 1 >>> 0,
   6 |   D = 1 | 0,
>  7 |   E = 1 & 0,
     |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
   8 |   F = 1 ^ 0,
   9 |   G = ~1,
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | enum Foo {
   3 |   A = 1 << 0,
   4 |   B = 1 >> 0,
   5 |   C = 1 >>> 0,
   6 |   D = 1 | 0,
   7 |   E = 1 & 0,
>  8 |   F = 1 ^ 0,
     |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
   9 |   G = ~1,
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | enum Foo {
   3 |   A = 1 << 0,
   4 |   B = 1 >> 0,
   5 |   C = 1 >>> 0,
   6 |   D = 1 | 0,
   7 |   E = 1 & 0,
   8 |   F = 1 ^ 0,
>  9 |   G = ~1,
     |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  10 | }
  11 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

const x = 1;
enum Foo {
  A = x << 0,
  B = x >> 0,
  C = x >>> 0,
  D = x | 0,
  E = x & 0,
  F = x ^ 0,
  G = ~x,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const x = 1;
   3 | enum Foo {
>  4 |   A = x << 0,
     |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
   5 |   B = x >> 0,
   6 |   C = x >>> 0,
   7 |   D = x | 0,
   8 |   E = x & 0,
   9 |   F = x ^ 0,
  10 |   G = ~x,
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const x = 1;
   3 | enum Foo {
   4 |   A = x << 0,
>  5 |   B = x >> 0,
     |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
   6 |   C = x >>> 0,
   7 |   D = x | 0,
   8 |   E = x & 0,
   9 |   F = x ^ 0,
  10 |   G = ~x,
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const x = 1;
   3 | enum Foo {
   4 |   A = x << 0,
   5 |   B = x >> 0,
>  6 |   C = x >>> 0,
     |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
   7 |   D = x | 0,
   8 |   E = x & 0,
   9 |   F = x ^ 0,
  10 |   G = ~x,
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const x = 1;
   3 | enum Foo {
   4 |   A = x << 0,
   5 |   B = x >> 0,
   6 |   C = x >>> 0,
>  7 |   D = x | 0,
     |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
   8 |   E = x & 0,
   9 |   F = x ^ 0,
  10 |   G = ~x,
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const x = 1;
   3 | enum Foo {
   4 |   A = x << 0,
   5 |   B = x >> 0,
   6 |   C = x >>> 0,
   7 |   D = x | 0,
>  8 |   E = x & 0,
     |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
   9 |   F = x ^ 0,
  10 |   G = ~x,
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const x = 1;
   3 | enum Foo {
   4 |   A = x << 0,
   5 |   B = x >> 0,
   6 |   C = x >>> 0,
   7 |   D = x | 0,
   8 |   E = x & 0,
>  9 |   F = x ^ 0,
     |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  10 |   G = ~x,
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const x = 1;
   3 | enum Foo {
   4 |   A = x << 0,
   5 |   B = x >> 0,
   6 |   C = x >>> 0,
   7 |   D = x | 0,
   8 |   E = x & 0,
   9 |   F = x ^ 0,
> 10 |   G = ~x,
     |   ^ Explicit enum value must only be a literal value (string, number, boolean, etc).
  11 | }
  12 |       
```
