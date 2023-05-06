# no-redundant-type-constituents

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
type T = number | any;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = number | any;
    |                   ^^^ 'any' overrides all other types in this union type.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

        type B = number;
        type T = B | any;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type B = number;
> 3 |         type T = B | any;
    |                      ^^^ 'any' overrides all other types in this union type.
  4 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
type T = any | number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = any | number;
    |          ^^^ 'any' overrides all other types in this union type.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

        type B = any;
        type T = B | number;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type B = any;
> 3 |         type T = B | number;
    |                  ^ 'any' overrides all other types in this union type.
  4 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
type T = number | never;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = number | never;
    |                   ^^^^^ 'never' is overridden by other types in this union type.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        type B = number;
        type T = B | never;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type B = number;
> 3 |         type T = B | never;
    |                      ^^^^^ 'never' is overridden by other types in this union type.
  4 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        type B = never;
        type T = B | number;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type B = never;
> 3 |         type T = B | number;
    |                  ^ 'never' is overridden by other types in this union type.
  4 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
type T = never | number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = never | number;
    |          ^^^^^ 'never' is overridden by other types in this union type.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
type T = number | unknown;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = number | unknown;
    |                   ^^^^^^^ 'unknown' overrides all other types in this union type.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
type T = unknown | number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = unknown | number;
    |          ^^^^^^^ 'unknown' overrides all other types in this union type.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
type T = number | 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = number | 0;
    |                   ^ 0 is overridden by number in this union type.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
type T = number | (0 | 1);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = number | (0 | 1);
    |                    ^^^^^ 0 | 1 is overridden by number in this union type.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
type T = (0 | 0) | number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (0 | 0) | number;
    |           ^^^^^ 0 | 0 is overridden by number in this union type.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

        type B = 0 | 1;
        type T = (2 | B) | number;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type B = 0 | 1;
> 3 |         type T = (2 | B) | number;
    |                   ^^^^^ 2 | 0 | 1 is overridden by number in this union type.
  4 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
type T = (0 | (1 | 2)) | number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (0 | (1 | 2)) | number;
    |           ^^^^^^^^^^^ 0 | 1 | 2 is overridden by number in this union type.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
type T = (0 | 1) | number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (0 | 1) | number;
    |           ^^^^^ 0 | 1 is overridden by number in this union type.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
type T = (0 | (0 | 1)) | number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (0 | (0 | 1)) | number;
    |           ^^^^^^^^^^^ 0 | 0 | 1 is overridden by number in this union type.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
type T = (2 | 'other' | 3) | number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (2 | 'other' | 3) | number;
    |           ^^^^^^^^^^^^^^^ 2 | 3 is overridden by number in this union type.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
type T = '' | string;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = '' | string;
    |          ^^ "" is overridden by string in this union type.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

        type B = 'b';
        type T = B | string;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type B = 'b';
> 3 |         type T = B | string;
    |                  ^ "b" is overridden by string in this union type.
  4 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
type T = `a${number}c` | string;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = `a${number}c` | string;
    |          ^^^^^^^^^^^^^ template literal type is overridden by string in this union type.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

        type B = `a${number}c`;
        type T = B | string;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type B = `a${number}c`;
> 3 |         type T = B | string;
    |                  ^ template literal type is overridden by string in this union type.
  4 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
type T = `${number}` | string;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = `${number}` | string;
    |          ^^^^^^^^^^^ template literal type is overridden by string in this union type.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
type T = 0n | bigint;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = 0n | bigint;
    |          ^^ 0n is overridden by bigint in this union type.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
type T = -1n | bigint;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = -1n | bigint;
    |          ^^^ -1n is overridden by bigint in this union type.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
type T = (-1n | 1n) | bigint;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = (-1n | 1n) | bigint;
    |           ^^^^^^^^ -1n | 1n is overridden by bigint in this union type.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

        type B = boolean;
        type T = B | false;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type B = boolean;
> 3 |         type T = B | false;
    |                      ^^^^^ false is overridden by boolean in this union type.
  4 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
type T = false | boolean;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = false | boolean;
    |          ^^^^^ false is overridden by boolean in this union type.
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
type T = true | boolean;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = true | boolean;
    |          ^^^^ true is overridden by boolean in this union type.
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
type T = false & boolean;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = false & boolean;
    |                  ^^^^^^^ boolean is overridden by the false in this intersection type.
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

        type B = false;
        type T = B & boolean;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type B = false;
> 3 |         type T = B & boolean;
    |                      ^^^^^^^ boolean is overridden by the false in this intersection type.
  4 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

        type B = true;
        type T = B & boolean;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type B = true;
> 3 |         type T = B & boolean;
    |                      ^^^^^^^ boolean is overridden by the true in this intersection type.
  4 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
type T = true & boolean;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = true & boolean;
    |                 ^^^^^^^ boolean is overridden by the true in this intersection type.
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
type T = number & any;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = number & any;
    |                   ^^^ 'any' overrides all other types in this intersection type.
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts
type T = any & number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = any & number;
    |          ^^^ 'any' overrides all other types in this intersection type.
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts
type T = number & never;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = number & never;
    |                   ^^^^^ 'never' overrides all other types in this intersection type.
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

        type B = never;
        type T = B & number;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type B = never;
> 3 |         type T = B & number;
    |                  ^ 'never' overrides all other types in this intersection type.
  4 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts
type T = never & number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = never & number;
    |          ^^^^^ 'never' overrides all other types in this intersection type.
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts
type T = number & unknown;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = number & unknown;
    |                   ^^^^^^^ 'unknown' is overridden by other types in this intersection type.
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts
type T = unknown & number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = unknown & number;
    |          ^^^^^^^ 'unknown' is overridden by other types in this intersection type.
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts
type T = number & 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = number & 0;
    |          ^^^^^^ number is overridden by the 0 in this intersection type.
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts
type T = '' & string;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = '' & string;
    |               ^^^^^^ string is overridden by the "" in this intersection type.
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

        type B = 0n;
        type T = B & bigint;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type B = 0n;
> 3 |         type T = B & bigint;
    |                      ^^^^^^ bigint is overridden by the 0n in this intersection type.
  4 |       
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts
type T = 0n & bigint;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = 0n & bigint;
    |               ^^^^^^ bigint is overridden by the 0n in this intersection type.
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts
type T = -1n & bigint;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type T = -1n & bigint;
    |                ^^^^^^ bigint is overridden by the -1n in this intersection type.
```
