# sort-type-constituents

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
type T = B | A;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = A | B;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = B | A;
    |          ^^^^^ Union type T constituents must be sorted.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
type T = 'B' | 'A';
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = 'A' | 'B';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = 'B' | 'A';
    |          ^^^^^^^^^ Union type T constituents must be sorted.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
type T = 2 | 1;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = 1 | 2;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = 2 | 1;
    |          ^^^^^ Union type T constituents must be sorted.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
type T = (B) | (A);
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = A | B;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (B) | (A);
    |          ^^^^^^^^^ Union type T constituents must be sorted.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
type T = { b: string } | { a: string };
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = { a: string } | { b: string };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = { b: string } | { a: string };
    |          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Union type T constituents must be sorted.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
type T = [1, 2, 4] | [1, 2, 3];
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = [1, 2, 3] | [1, 2, 4];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = [1, 2, 4] | [1, 2, 3];
    |          ^^^^^^^^^^^^^^^^^^^^^ Union type T constituents must be sorted.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
type T = (() => void) | (() => string);
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = (() => string) | (() => void);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (() => void) | (() => string);
    |          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Union type T constituents must be sorted.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
type T = () => void | string;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = () => string | void;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = () => void | string;
    |                ^^^^^^^^^^^^^ Union type constituents must be sorted.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
type T = () => undefined | null;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = () => null | undefined;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = () => undefined | null;
    |                ^^^^^^^^^^^^^^^^ Union type constituents must be sorted.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

type T =
  | [1, 2, 4]
  | [1, 2, 3]
  | { b: string }
  | { a: string }
  | (() => void)
  | (() => string)
  | "b"
  | "a"
  | 'b'
  | 'a'
  | readonly string[]
  | readonly number[]
  | string[]
  | number[]
  | D.E
  | C.D
  | B
  | A
  | undefined
  | null
  | string
  | any;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type T =
  A | B | C.D | D.E | number[] | string[] | any | string | readonly number[] | readonly string[] | 'a' | 'b' | "a" | "b" | (() => string) | (() => void) | { a: string } | { b: string } | [1, 2, 3] | [1, 2, 4] | null | undefined;
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | type T =
>  3 |   | [1, 2, 4]
     |   ^^^^^^^^^^^
>  4 |   | [1, 2, 3]
     | ^^^^^^^^^^^^^
>  5 |   | { b: string }
     | ^^^^^^^^^^^^^
>  6 |   | { a: string }
     | ^^^^^^^^^^^^^
>  7 |   | (() => void)
     | ^^^^^^^^^^^^^
>  8 |   | (() => string)
     | ^^^^^^^^^^^^^
>  9 |   | "b"
     | ^^^^^^^^^^^^^
> 10 |   | "a"
     | ^^^^^^^^^^^^^
> 11 |   | 'b'
     | ^^^^^^^^^^^^^
> 12 |   | 'a'
     | ^^^^^^^^^^^^^
> 13 |   | readonly string[]
     | ^^^^^^^^^^^^^
> 14 |   | readonly number[]
     | ^^^^^^^^^^^^^
> 15 |   | string[]
     | ^^^^^^^^^^^^^
> 16 |   | number[]
     | ^^^^^^^^^^^^^
> 17 |   | D.E
     | ^^^^^^^^^^^^^
> 18 |   | C.D
     | ^^^^^^^^^^^^^
> 19 |   | B
     | ^^^^^^^^^^^^^
> 20 |   | A
     | ^^^^^^^^^^^^^
> 21 |   | undefined
     | ^^^^^^^^^^^^^
> 22 |   | null
     | ^^^^^^^^^^^^^
> 23 |   | string
     | ^^^^^^^^^^^^^
> 24 |   | any;
     | ^^^^^^^^ Union type T constituents must be sorted.
  25 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
type T = B | /* comment */ A;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = B | /* comment */ A;
    |          ^^^^^^^^^^^^^^^^^^^ Union type T constituents must be sorted.
```

#### Suggestions

##### Sort constituents of type (removes all comments).

<!-- prettier-ignore -->
```ts
type T = A | B;
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
type T = (() => /* comment */ A) | B;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = B | (() => /* comment */ A);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (() => /* comment */ A) | B;
    |          ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Union type T constituents must be sorted.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
type Expected = (new (x: number) => boolean) | string;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Expected = string | (new (x: number) => boolean);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Expected = (new (x: number) => boolean) | string;
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Union type Expected constituents must be sorted.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
type T = (| A) | B;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = B | (| A);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (| A) | B;
    |          ^^^^^^^^^ Union type T constituents must be sorted.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
type T = (& A) | B;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = B | (& A);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (& A) | B;
    |          ^^^^^^^^^ Union type T constituents must be sorted.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
type T = B & A;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = A & B;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = B & A;
    |          ^^^^^ Intersection type T constituents must be sorted.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
type T = 'B' & 'A';
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = 'A' & 'B';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = 'B' & 'A';
    |          ^^^^^^^^^ Intersection type T constituents must be sorted.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
type T = 2 & 1;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = 1 & 2;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = 2 & 1;
    |          ^^^^^ Intersection type T constituents must be sorted.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
type T = (B) & (A);
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = A & B;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (B) & (A);
    |          ^^^^^^^^^ Intersection type T constituents must be sorted.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
type T = { b: string } & { a: string };
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = { a: string } & { b: string };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = { b: string } & { a: string };
    |          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Intersection type T constituents must be sorted.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
type T = [1, 2, 4] & [1, 2, 3];
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = [1, 2, 3] & [1, 2, 4];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = [1, 2, 4] & [1, 2, 3];
    |          ^^^^^^^^^^^^^^^^^^^^^ Intersection type T constituents must be sorted.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
type T = (() => void) & (() => string);
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = (() => string) & (() => void);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (() => void) & (() => string);
    |          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Intersection type T constituents must be sorted.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
type T = () => void & string;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = () => string & void;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = () => void & string;
    |                ^^^^^^^^^^^^^ Intersection type constituents must be sorted.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
type T = () => undefined & null;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = () => null & undefined;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = () => undefined & null;
    |                ^^^^^^^^^^^^^^^^ Intersection type constituents must be sorted.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

type T =
  & [1, 2, 4]
  & [1, 2, 3]
  & { b: string }
  & { a: string }
  & (() => void)
  & (() => string)
  & "b"
  & "a"
  & 'b'
  & 'a'
  & readonly string[]
  & readonly number[]
  & string[]
  & number[]
  & D.E
  & C.D
  & B
  & A
  & undefined
  & null
  & string
  & any;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type T =
  A & B & C.D & D.E & number[] & string[] & any & string & readonly number[] & readonly string[] & 'a' & 'b' & "a" & "b" & (() => string) & (() => void) & { a: string } & { b: string } & [1, 2, 3] & [1, 2, 4] & null & undefined;
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | type T =
>  3 |   & [1, 2, 4]
     |   ^^^^^^^^^^^
>  4 |   & [1, 2, 3]
     | ^^^^^^^^^^^^^
>  5 |   & { b: string }
     | ^^^^^^^^^^^^^
>  6 |   & { a: string }
     | ^^^^^^^^^^^^^
>  7 |   & (() => void)
     | ^^^^^^^^^^^^^
>  8 |   & (() => string)
     | ^^^^^^^^^^^^^
>  9 |   & "b"
     | ^^^^^^^^^^^^^
> 10 |   & "a"
     | ^^^^^^^^^^^^^
> 11 |   & 'b'
     | ^^^^^^^^^^^^^
> 12 |   & 'a'
     | ^^^^^^^^^^^^^
> 13 |   & readonly string[]
     | ^^^^^^^^^^^^^
> 14 |   & readonly number[]
     | ^^^^^^^^^^^^^
> 15 |   & string[]
     | ^^^^^^^^^^^^^
> 16 |   & number[]
     | ^^^^^^^^^^^^^
> 17 |   & D.E
     | ^^^^^^^^^^^^^
> 18 |   & C.D
     | ^^^^^^^^^^^^^
> 19 |   & B
     | ^^^^^^^^^^^^^
> 20 |   & A
     | ^^^^^^^^^^^^^
> 21 |   & undefined
     | ^^^^^^^^^^^^^
> 22 |   & null
     | ^^^^^^^^^^^^^
> 23 |   & string
     | ^^^^^^^^^^^^^
> 24 |   & any;
     | ^^^^^^^^ Intersection type T constituents must be sorted.
  25 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
type T = B & /* comment */ A;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = B & /* comment */ A;
    |          ^^^^^^^^^^^^^^^^^^^ Intersection type T constituents must be sorted.
```

#### Suggestions

##### Sort constituents of type (removes all comments).

<!-- prettier-ignore -->
```ts
type T = A & B;
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
type T = (() => /* comment */ A) & B;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = B & (() => /* comment */ A);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (() => /* comment */ A) & B;
    |          ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Intersection type T constituents must be sorted.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
type Expected = (new (x: number) => boolean) & string;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Expected = string & (new (x: number) => boolean);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Expected = (new (x: number) => boolean) & string;
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Intersection type Expected constituents must be sorted.
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
type T = (| A) & B;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = B & (| A);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (| A) & B;
    |          ^^^^^^^^^ Intersection type T constituents must be sorted.
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
type T = (& A) & B;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = B & (& A);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (& A) & B;
    |          ^^^^^^^^^ Intersection type T constituents must be sorted.
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
type T = (B | C) & A;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = A & (B | C);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (B | C) & A;
    |          ^^^^^^^^^^^ Intersection type T constituents must be sorted.
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
type A<T> = (T extends number ? 'hi' : 'there') | string;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type A<T> = string | (T extends number ? 'hi' : 'there');
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type A<T> = (T extends number ? 'hi' : 'there') | string;
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Union type A constituents must be sorted.
```
