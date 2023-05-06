# no-duplicate-type-constituents

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
type T = 1 | 1;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = 1  ;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = 1 | 1;
    |              ^ Union type constituent is duplicated with 1.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
type T = true & true;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = true  ;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = true & true;
    |                 ^^^^ Intersection type constituent is duplicated with true.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
type T = null | null;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = null  ;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = null | null;
    |                 ^^^^ Union type constituent is duplicated with null.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
type T = any | any;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = any  ;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = any | any;
    |                ^^^ Union type constituent is duplicated with any.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
type T = { a: string | string };
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = { a: string   };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = { a: string | string };
    |                        ^^^^^^ Union type constituent is duplicated with string.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
type T = { a: string } | { a: string };
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = { a: string }  ;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = { a: string } | { a: string };
    |                          ^^^^^^^^^^^^^ Union type constituent is duplicated with { a: string }.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
type T = { a: string; b: number } | { a: string; b: number };
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = { a: string; b: number }  ;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = { a: string; b: number } | { a: string; b: number };
    |                                     ^^^^^^^^^^^^^^^^^^^^^^^^ Union type constituent is duplicated with { a: string; b: number }.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
type T = Set<string> | Set<string>;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = Set<string>  ;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = Set<string> | Set<string>;
    |                        ^^^^^^^^^^^ Union type constituent is duplicated with Set<string>.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

type IsArray<T> = T extends any[] ? true : false;
type ActuallyDuplicated = IsArray<number> | IsArray<string>;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type IsArray<T> = T extends any[] ? true : false;
type ActuallyDuplicated = IsArray<number>  ;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type IsArray<T> = T extends any[] ? true : false;
> 3 | type ActuallyDuplicated = IsArray<number> | IsArray<string>;
    |                                             ^^^^^^^^^^^^^^^ Union type constituent is duplicated with IsArray<number>.
  4 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
type T = Class<string> | Class<string>;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = Class<string>  ;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = Class<string> | Class<string>;
    |                          ^^^^^^^^^^^^^ Union type constituent is duplicated with Class<string>.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
type T = string[] | string[];
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = string[]  ;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = string[] | string[];
    |                     ^^^^^^^^ Union type constituent is duplicated with string[].
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
type T = string[][] | string[][];
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = string[][]  ;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = string[][] | string[][];
    |                       ^^^^^^^^^^ Union type constituent is duplicated with string[][].
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
type T = [1, 2, 3] | [1, 2, 3];
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = [1, 2, 3]  ;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = [1, 2, 3] | [1, 2, 3];
    |                      ^^^^^^^^^ Union type constituent is duplicated with [1, 2, 3].
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
type T = () => string | string;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = () => string  ;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = () => string | string;
    |                         ^^^^^^ Union type constituent is duplicated with string.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
type T = () => null | null;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = () => null  ;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = () => null | null;
    |                       ^^^^ Union type constituent is duplicated with null.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
type T = (arg: string | string) => void;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = (arg: string  ) => void;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (arg: string | string) => void;
    |                         ^^^^^^ Union type constituent is duplicated with string.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
type T = 'A' | 'A';
```

### Fix Output

<!-- prettier-ignore -->
```ts
type T = 'A'  ;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = 'A' | 'A';
    |                ^^^ Union type constituent is duplicated with 'A'.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

type A = 'A';
type T = A | A;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A = 'A';
type T = A  ;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = 'A';
> 3 | type T = A | A;
    |              ^ Union type constituent is duplicated with A.
  4 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

type A = 'A';
const a: A | A = 'A';
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A = 'A';
const a: A   = 'A';
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = 'A';
> 3 | const a: A | A = 'A';
    |              ^ Union type constituent is duplicated with A.
  4 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

type A = 'A';
type T = A | /* comment */ A;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A = 'A';
type T = A  /* comment */ ;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = 'A';
> 3 | type T = A | /* comment */ A;
    |                            ^ Union type constituent is duplicated with A.
  4 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

type A1 = 'A';
type A2 = 'A';
type A3 = 'A';
type T = A1 | A2 | A3;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A1 = 'A';
type A2 = 'A';
type A3 = 'A';
type T = A1    ;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A1 = 'A';
  3 | type A2 = 'A';
  4 | type A3 = 'A';
> 5 | type T = A1 | A2 | A3;
    |               ^^ Union type constituent is duplicated with A1.
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A1 = 'A';
  3 | type A2 = 'A';
  4 | type A3 = 'A';
> 5 | type T = A1 | A2 | A3;
    |                    ^^ Union type constituent is duplicated with A1.
  6 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

type A = 'A';
type B = 'B';
type T = A | B | A;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A = 'A';
type B = 'B';
type T = A | B  ;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = 'A';
  3 | type B = 'B';
> 4 | type T = A | B | A;
    |                  ^ Union type constituent is duplicated with A.
  5 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

type A = 'A';
type B = 'B';
type T = A | B | A | B;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A = 'A';
type B = 'B';
type T = A | B    ;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = 'A';
  3 | type B = 'B';
> 4 | type T = A | B | A | B;
    |                  ^ Union type constituent is duplicated with A.
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = 'A';
  3 | type B = 'B';
> 4 | type T = A | B | A | B;
    |                      ^ Union type constituent is duplicated with B.
  5 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

type A = 'A';
type B = 'B';
type T = A | B | A | A;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A = 'A';
type B = 'B';
type T = A | B    ;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = 'A';
  3 | type B = 'B';
> 4 | type T = A | B | A | A;
    |                  ^ Union type constituent is duplicated with A.
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = 'A';
  3 | type B = 'B';
> 4 | type T = A | B | A | A;
    |                      ^ Union type constituent is duplicated with A.
  5 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

type A = 'A';
type B = 'B';
type C = 'C';
type T = A | B | A | C;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A = 'A';
type B = 'B';
type C = 'C';
type T = A | B   | C;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = 'A';
  3 | type B = 'B';
  4 | type C = 'C';
> 5 | type T = A | B | A | C;
    |                  ^ Union type constituent is duplicated with A.
  6 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

type A = 'A';
type B = 'B';
type T = (A | B) | (A | B);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A = 'A';
type B = 'B';
type T = (A | B)  ;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = 'A';
  3 | type B = 'B';
> 4 | type T = (A | B) | (A | B);
    |                     ^^^^^^ Union type constituent is duplicated with A | B.
  5 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

type A = 'A';
type T = A | (A | A);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A = 'A';
type T = A  ;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = 'A';
> 3 | type T = A | (A | A);
    |               ^^^^^^ Union type constituent is duplicated with A.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = 'A';
> 3 | type T = A | (A | A);
    |                   ^ Union type constituent is duplicated with A.
  4 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

type A = 'A';
type B = 'B';
type C = 'C';
type D = 'D';
type F = (A | B) | (A | B) | ((C | D) & (A | B)) | (A | B);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A = 'A';
type B = 'B';
type C = 'C';
type D = 'D';
type F = (A | B)   | ((C | D) & (A | B))  ;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = 'A';
  3 | type B = 'B';
  4 | type C = 'C';
  5 | type D = 'D';
> 6 | type F = (A | B) | (A | B) | ((C | D) & (A | B)) | (A | B);
    |                     ^^^^^^ Union type constituent is duplicated with A | B.
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = 'A';
  3 | type B = 'B';
  4 | type C = 'C';
  5 | type D = 'D';
> 6 | type F = (A | B) | (A | B) | ((C | D) & (A | B)) | (A | B);
    |                                                     ^^^^^^ Union type constituent is duplicated with A | B.
  7 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

type A = 'A';
type T = Record<string, A | A>;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type A = 'A';
type T = Record<string, A  >;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type A = 'A';
> 3 | type T = Record<string, A | A>;
    |                             ^ Union type constituent is duplicated with A.
  4 |       
```
