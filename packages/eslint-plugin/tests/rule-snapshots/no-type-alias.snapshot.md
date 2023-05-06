# no-type-alias

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a';
    |            ^^^ Type aliases are not allowed.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a';
    |            ^^^ Type aliases are not allowed.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = typeof import('foo');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = typeof import('foo');
    |            ^^^^^^^^^^^^^^^^^^^^ Type aliases are not allowed.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | 'b';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b';
    |            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b';
    |                  ^^^ Aliases in union types are not allowed.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | typeof import('foo');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | typeof import('foo');
    |            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | typeof import('foo');
    |                  ^^^^^^^^^^^^^^^^^^^^ Aliases in union types are not allowed.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | 'b';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b';
    |            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b';
    |                  ^^^ Aliases in union types are not allowed.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | 'b';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b';
    |            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b';
    |                  ^^^ Aliases in union types are not allowed.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | 'b';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b';
    |            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b';
    |                  ^^^ Aliases in union types are not allowed.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | 'b';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b';
    |            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b';
    |                  ^^^ Aliases in union types are not allowed.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | 'b' | 'c';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |                  ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |                        ^^^ Aliases in union types are not allowed.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | 'b' | 'c';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |                  ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |                        ^^^ Aliases in union types are not allowed.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | 'b' | 'c';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |                  ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |                        ^^^ Aliases in union types are not allowed.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | 'b' | 'c';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |                  ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |                        ^^^ Aliases in union types are not allowed.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | 'b' | 'c';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |                  ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |                        ^^^ Aliases in union types are not allowed.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | 'b' | 'c';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |                  ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | 'b' | 'c';
    |                        ^^^ Aliases in union types are not allowed.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' & 'b';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b';
    |            ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b';
    |                  ^^^ Aliases in intersection types are not allowed.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' & 'b';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b';
    |            ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b';
    |                  ^^^ Aliases in intersection types are not allowed.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' & 'b';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b';
    |            ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b';
    |                  ^^^ Aliases in intersection types are not allowed.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' & 'b';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b';
    |            ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b';
    |                  ^^^ Aliases in intersection types are not allowed.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' & 'b';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b';
    |            ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b';
    |                  ^^^ Aliases in intersection types are not allowed.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' & 'b';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b';
    |            ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b';
    |                  ^^^ Aliases in intersection types are not allowed.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' & 'b' & 'c';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |            ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |                  ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |                        ^^^ Aliases in intersection types are not allowed.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' & 'b' & 'c';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |            ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |                  ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |                        ^^^ Aliases in intersection types are not allowed.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' & 'b' & 'c';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |            ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |                  ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |                        ^^^ Aliases in intersection types are not allowed.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' & 'b' & 'c';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |            ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |                  ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |                        ^^^ Aliases in intersection types are not allowed.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' & 'b' & 'c';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |            ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |                  ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |                        ^^^ Aliases in intersection types are not allowed.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' & 'b' & 'c';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |            ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |                  ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' & 'b' & 'c';
    |                        ^^^ Aliases in intersection types are not allowed.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | ('b' & 'c');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |                   ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |                         ^^^ Aliases in intersection types are not allowed.
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | ('b' & 'c');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |                   ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |                         ^^^ Aliases in intersection types are not allowed.
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | ('b' & 'c');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |                   ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |                         ^^^ Aliases in intersection types are not allowed.
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | ('b' & 'c');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |                   ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |                         ^^^ Aliases in intersection types are not allowed.
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | ('b' & 'c');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |                   ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |                         ^^^ Aliases in intersection types are not allowed.
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | ('b' & 'c');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |                   ^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |                         ^^^ Aliases in intersection types are not allowed.
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | ('b' & 'c');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |            ^^^ Aliases in union types are not allowed.
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = 'a' | ('b' & 'c');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = 'a' | ('b' & 'c');
    |            ^^^ Aliases in union types are not allowed.
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string;
    |            ^^^^^^ Type aliases are not allowed.
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string;
    |            ^^^^^^ Type aliases are not allowed.
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string;
    |            ^^^^^^ Type aliases are not allowed.
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string;
    |            ^^^^^^ Type aliases are not allowed.
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string;
    |            ^^^^^^ Type aliases are not allowed.
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | string[];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[];
    |            ^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[];
    |                     ^^^^^^^^ Aliases in union types are not allowed.
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | string[];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[];
    |            ^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[];
    |                     ^^^^^^^^ Aliases in union types are not allowed.
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | string[];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[];
    |            ^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[];
    |                     ^^^^^^^^ Aliases in union types are not allowed.
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | string[];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[];
    |            ^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[];
    |                     ^^^^^^^^ Aliases in union types are not allowed.
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | string[];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[];
    |            ^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[];
    |                     ^^^^^^^^ Aliases in union types are not allowed.
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | string[];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[];
    |            ^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[];
    |                     ^^^^^^^^ Aliases in union types are not allowed.
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | string[] | number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |            ^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |                     ^^^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |                                ^^^^^^ Aliases in union types are not allowed.
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | string[] | number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |            ^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |                     ^^^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |                                ^^^^^^ Aliases in union types are not allowed.
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | string[] | number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |            ^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |                     ^^^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |                                ^^^^^^ Aliases in union types are not allowed.
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | string[] | number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |            ^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |                     ^^^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |                                ^^^^^^ Aliases in union types are not allowed.
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | string[] | number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |            ^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |                     ^^^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |                                ^^^^^^ Aliases in union types are not allowed.
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | string[] | number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |            ^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |                     ^^^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | string[] | number;
    |                                ^^^^^^ Aliases in union types are not allowed.
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | (string[] & number);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |            ^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |                      ^^^^^^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |                                 ^^^^^^ Aliases in intersection types are not allowed.
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | (string[] & number);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |            ^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |                      ^^^^^^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |                                 ^^^^^^ Aliases in intersection types are not allowed.
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | (string[] & number);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |            ^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |                      ^^^^^^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |                                 ^^^^^^ Aliases in intersection types are not allowed.
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | (string[] & number);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |            ^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |                      ^^^^^^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |                                 ^^^^^^ Aliases in intersection types are not allowed.
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | (string[] & number);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |                      ^^^^^^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |                                 ^^^^^^ Aliases in intersection types are not allowed.
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | (string[] & number);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |                      ^^^^^^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |                                 ^^^^^^ Aliases in intersection types are not allowed.
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | (string[] & number);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |            ^^^^^^ Aliases in union types are not allowed.
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = string | (string[] & number);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = string | (string[] & number);
    |            ^^^^^^ Aliases in union types are not allowed.
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {}
type Foo = Bar;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar;
    |            ^^^ Type aliases are not allowed.
  4 |       
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {}
type Foo = Bar;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar;
    |            ^^^ Type aliases are not allowed.
  4 |       
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {}
type Foo = Bar;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar;
    |            ^^^ Type aliases are not allowed.
  4 |       
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {}
type Foo = Bar;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar;
    |            ^^^ Type aliases are not allowed.
  4 |       
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {}
type Foo = Bar;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar;
    |            ^^^ Type aliases are not allowed.
  4 |       
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {}
type Foo = Bar | {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar | {};
    |            ^^^ Aliases in union types are not allowed.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar | {};
    |                  ^^ Literals in union types are not allowed.
  4 |       
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {}
type Foo = Bar | {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar | {};
    |            ^^^ Aliases in union types are not allowed.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar | {};
    |                  ^^ Literals in union types are not allowed.
  4 |       
```

## Test #68

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {}
type Foo = Bar | {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar | {};
    |                  ^^ Literals in union types are not allowed.
  4 |       
```

## Test #69

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {}
type Foo = Bar | {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar | {};
    |            ^^^ Aliases in union types are not allowed.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar | {};
    |                  ^^ Literals in union types are not allowed.
  4 |       
```

## Test #70

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {}
type Foo = Bar | {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar | {};
    |                  ^^ Literals in union types are not allowed.
  4 |       
```

## Test #71

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {}
type Foo = Bar & {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar & {};
    |            ^^^ Aliases in intersection types are not allowed.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar & {};
    |                  ^^ Literals in intersection types are not allowed.
  4 |       
```

## Test #72

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {}
type Foo = Bar & {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar & {};
    |            ^^^ Aliases in intersection types are not allowed.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar & {};
    |                  ^^ Literals in intersection types are not allowed.
  4 |       
```

## Test #73

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {}
type Foo = Bar & {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar & {};
    |            ^^^ Aliases in intersection types are not allowed.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar & {};
    |                  ^^ Literals in intersection types are not allowed.
  4 |       
```

## Test #74

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {}
type Foo = Bar & {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar & {};
    |                  ^^ Literals in intersection types are not allowed.
  4 |       
```

## Test #75

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {}
type Foo = Bar & {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {}
> 3 | type Foo = Bar & {};
    |                  ^^ Literals in intersection types are not allowed.
  4 |       
```

## Test #76

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = () => void;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = () => void;
    |            ^^^^^^^^^^ Type callbacks are not allowed.
```

## Test #77

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = () => void;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = () => void;
    |            ^^^^^^^^^^ Type callbacks are not allowed.
```

## Test #78

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {};
    |            ^^ Type literals are not allowed.
```

## Test #79

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {};
    |            ^^ Type literals are not allowed.
```

## Test #80

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {};
    |            ^^ Type literals are not allowed.
```

## Test #81

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {};
    |            ^^ Type literals are not allowed.
```

## Test #82

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {};
    |            ^^ Type literals are not allowed.
```

## Test #83

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {};
    |            ^^ Type literals are not allowed.
```

## Test #84

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {};
    |            ^^ Type literals are not allowed.
```

## Test #85

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {};
    |            ^^ Type literals are not allowed.
```

## Test #86

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {};
    |            ^^ Type literals are not allowed.
```

## Test #87

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {};
    |            ^^ Type literals are not allowed.
```

## Test #88

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {} | {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {} | {};
    |            ^^ Literals in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {} | {};
    |                 ^^ Literals in union types are not allowed.
```

## Test #89

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {} | {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {} | {};
    |            ^^ Literals in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {} | {};
    |                 ^^ Literals in union types are not allowed.
```

## Test #90

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {} | {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {} | {};
    |            ^^ Literals in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {} | {};
    |                 ^^ Literals in union types are not allowed.
```

## Test #91

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {} & {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {} & {};
    |            ^^ Literals in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {} & {};
    |                 ^^ Literals in intersection types are not allowed.
```

## Test #92

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {} & {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {} & {};
    |            ^^ Literals in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {} & {};
    |                 ^^ Literals in intersection types are not allowed.
```

## Test #93

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {} & {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {} & {};
    |            ^^ Literals in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {} & {};
    |                 ^^ Literals in intersection types are not allowed.
```

## Test #94

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = (string & {}) | 'a' | 1;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = (string & {}) | 'a' | 1;
    |             ^^^^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = (string & {}) | 'a' | 1;
    |                      ^^ Literals in intersection types are not allowed.
```

## Test #95

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = (string & {}) | 'a' | 1;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = (string & {}) | 'a' | 1;
    |                      ^^ Literals in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = (string & {}) | 'a' | 1;
    |                            ^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = (string & {}) | 'a' | 1;
    |                                  ^ Aliases in union types are not allowed.
```

## Test #96

### Test Code

<!-- prettier-ignore -->
```ts

type Foo<T> = {
  readonly [P in keyof T]: T[P];
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | type Foo<T> = {
    |               ^
> 3 |   readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | };
    | ^^ Type mapped types are not allowed.
  5 |       
```

## Test #97

### Test Code

<!-- prettier-ignore -->
```ts

type Foo<T> = {
  readonly [P in keyof T]: T[P];
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | type Foo<T> = {
    |               ^
> 3 |   readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | };
    | ^^ Type mapped types are not allowed.
  5 |       
```

## Test #98

### Test Code

<!-- prettier-ignore -->
```ts

type Foo<T> = {
  readonly [P in keyof T]: T[P];
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | type Foo<T> = {
    |               ^
> 3 |   readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | };
    | ^^ Type mapped types are not allowed.
  5 |       
```

## Test #99

### Test Code

<!-- prettier-ignore -->
```ts

type Foo<T> = {
  readonly [P in keyof T]: T[P];
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | type Foo<T> = {
    |               ^
> 3 |   readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | };
    | ^^ Type mapped types are not allowed.
  5 |       
```

## Test #100

### Test Code

<!-- prettier-ignore -->
```ts

type Foo<T> = {
  readonly [P in keyof T]: T[P];
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | type Foo<T> = {
    |               ^
> 3 |   readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | };
    | ^^ Type mapped types are not allowed.
  5 |       
```

## Test #101

### Test Code

<!-- prettier-ignore -->
```ts

type Foo<T> =
  | {
      readonly [P in keyof T]: T[P];
    }
  | {
      readonly [P in keyof T]: T[P];
    };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo<T> =
> 3 |   | {
    |     ^
> 4 |       readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |     }
    | ^^^^^^ Mapped types in union types are not allowed.
  6 |   | {
  7 |       readonly [P in keyof T]: T[P];
  8 |     };
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo<T> =
  3 |   | {
  4 |       readonly [P in keyof T]: T[P];
  5 |     }
> 6 |   | {
    |     ^
> 7 |       readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 8 |     };
    | ^^^^^^ Mapped types in union types are not allowed.
  9 |       
```

## Test #102

### Test Code

<!-- prettier-ignore -->
```ts

type Foo<T> =
  | {
      readonly [P in keyof T]: T[P];
    }
  | {
      readonly [P in keyof T]: T[P];
    };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo<T> =
> 3 |   | {
    |     ^
> 4 |       readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |     }
    | ^^^^^^ Mapped types in union types are not allowed.
  6 |   | {
  7 |       readonly [P in keyof T]: T[P];
  8 |     };
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo<T> =
  3 |   | {
  4 |       readonly [P in keyof T]: T[P];
  5 |     }
> 6 |   | {
    |     ^
> 7 |       readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 8 |     };
    | ^^^^^^ Mapped types in union types are not allowed.
  9 |       
```

## Test #103

### Test Code

<!-- prettier-ignore -->
```ts

type Foo<T> =
  | {
      readonly [P in keyof T]: T[P];
    }
  | {
      readonly [P in keyof T]: T[P];
    };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo<T> =
> 3 |   | {
    |     ^
> 4 |       readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |     }
    | ^^^^^^ Mapped types in union types are not allowed.
  6 |   | {
  7 |       readonly [P in keyof T]: T[P];
  8 |     };
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo<T> =
  3 |   | {
  4 |       readonly [P in keyof T]: T[P];
  5 |     }
> 6 |   | {
    |     ^
> 7 |       readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 8 |     };
    | ^^^^^^ Mapped types in union types are not allowed.
  9 |       
```

## Test #104

### Test Code

<!-- prettier-ignore -->
```ts

type Foo<T> = {
  readonly [P in keyof T]: T[P];
} & {
  readonly [P in keyof T]: T[P];
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | type Foo<T> = {
    |               ^
> 3 |   readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | } & {
    | ^^ Mapped types in intersection types are not allowed.
  5 |   readonly [P in keyof T]: T[P];
  6 | };
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo<T> = {
  3 |   readonly [P in keyof T]: T[P];
> 4 | } & {
    |     ^
> 5 |   readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 6 | };
    | ^^ Mapped types in intersection types are not allowed.
  7 |       
```

## Test #105

### Test Code

<!-- prettier-ignore -->
```ts

type Foo<T> = {
  readonly [P in keyof T]: T[P];
} & {
  readonly [P in keyof T]: T[P];
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | type Foo<T> = {
    |               ^
> 3 |   readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | } & {
    | ^^ Mapped types in intersection types are not allowed.
  5 |   readonly [P in keyof T]: T[P];
  6 | };
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo<T> = {
  3 |   readonly [P in keyof T]: T[P];
> 4 | } & {
    |     ^
> 5 |   readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 6 | };
    | ^^ Mapped types in intersection types are not allowed.
  7 |       
```

## Test #106

### Test Code

<!-- prettier-ignore -->
```ts

type Foo<T> = {
  readonly [P in keyof T]: T[P];
} & {
  readonly [P in keyof T]: T[P];
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | type Foo<T> = {
    |               ^
> 3 |   readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | } & {
    | ^^ Mapped types in intersection types are not allowed.
  5 |   readonly [P in keyof T]: T[P];
  6 | };
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo<T> = {
  3 |   readonly [P in keyof T]: T[P];
> 4 | } & {
    |     ^
> 5 |   readonly [P in keyof T]: T[P];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 6 | };
    | ^^ Mapped types in intersection types are not allowed.
  7 |       
```

## Test #107

### Test Code

<!-- prettier-ignore -->
```ts
export type ButtonProps = JSX.IntrinsicElements['button'];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export type ButtonProps = JSX.IntrinsicElements['button'];
    |                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type aliases are not allowed.
```

## Test #108

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = [number] | [number, number];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [number] | [number, number];
    |            ^^^^^^^^ Tuple Types in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [number] | [number, number];
    |                       ^^^^^^^^^^^^^^^^ Tuple Types in union types are not allowed.
```

## Test #109

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = [number] & [number, number];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [number] & [number, number];
    |            ^^^^^^^^ Tuple Types in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [number] & [number, number];
    |                       ^^^^^^^^^^^^^^^^ Tuple Types in intersection types are not allowed.
```

## Test #110

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = [number] | [number, number];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [number] | [number, number];
    |            ^^^^^^^^ Tuple Types in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [number] | [number, number];
    |                       ^^^^^^^^^^^^^^^^ Tuple Types in union types are not allowed.
```

## Test #111

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = [number];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [number];
    |            ^^^^^^^^ Type tuple types are not allowed.
```

## Test #112

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = [number];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [number];
    |            ^^^^^^^^ Type tuple types are not allowed.
```

## Test #113

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = [number];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [number];
    |            ^^^^^^^^ Type tuple types are not allowed.
```

## Test #114

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = readonly [number] | keyof [number, number];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = readonly [number] | keyof [number, number];
    |            ^^^^^^^^^^^^^^^^^ Tuple Types in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = readonly [number] | keyof [number, number];
    |                                ^^^^^^^^^^^^^^^^^^^^^^ Tuple Types in union types are not allowed.
```

## Test #115

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = keyof [number] & [number, number];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = keyof [number] & [number, number];
    |            ^^^^^^^^^^^^^^ Tuple Types in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = keyof [number] & [number, number];
    |                             ^^^^^^^^^^^^^^^^ Tuple Types in intersection types are not allowed.
```

## Test #116

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = [number] | readonly [number, number];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [number] | readonly [number, number];
    |            ^^^^^^^^ Tuple Types in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [number] | readonly [number, number];
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^ Tuple Types in union types are not allowed.
```

## Test #117

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = readonly [number];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = readonly [number];
    |            ^^^^^^^^^^^^^^^^^ Type tuple types are not allowed.
```

## Test #118

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = keyof [number];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = keyof [number];
    |            ^^^^^^^^^^^^^^ Type tuple types are not allowed.
```

## Test #119

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = readonly [number];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = readonly [number];
    |            ^^^^^^^^^^^^^^^^^ Type tuple types are not allowed.
```

## Test #120

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = new (bar: number) => string | null;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = new (bar: number) => string | null;
    |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type constructors are not allowed.
```

## Test #121

### Test Code

<!-- prettier-ignore -->
```ts
type MyType<T> = T extends number ? number : null;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type MyType<T> = T extends number ? number : null;
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type conditional types are not allowed.
```

## Test #122

### Test Code

<!-- prettier-ignore -->
```ts
type MyType<T> = T extends number ? number : null;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type MyType<T> = T extends number ? number : null;
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type conditional types are not allowed.
```

## Test #123

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = keyof [string] | unique symbol;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = keyof [string] | unique symbol;
    |            ^^^^^^^^^^^^^^ Tuple Types in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = keyof [string] | unique symbol;
    |                             ^^^^^^^^^^^^^ Unhandled in union types are not allowed.
```

## Test #124

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Record<string, number>;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Record<string, number>;
    |            ^^^^^^^^^^^^^^^^^^^^^^ Type generics are not allowed.
```

## Test #125

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = `foo-${number}`;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = `foo-${number}`;
    |            ^^^^^^^^^^^^^^^ Type aliases are not allowed.
```

## Test #126

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = `a-${number}` | `b-${number}`;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = `a-${number}` | `b-${number}`;
    |            ^^^^^^^^^^^^^ Aliases in union types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = `a-${number}` | `b-${number}`;
    |                            ^^^^^^^^^^^^^ Aliases in union types are not allowed.
```

## Test #127

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = `a-${number}` & `b-${number}`;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = `a-${number}` & `b-${number}`;
    |            ^^^^^^^^^^^^^ Aliases in intersection types are not allowed.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = `a-${number}` & `b-${number}`;
    |                            ^^^^^^^^^^^^^ Aliases in intersection types are not allowed.
```
