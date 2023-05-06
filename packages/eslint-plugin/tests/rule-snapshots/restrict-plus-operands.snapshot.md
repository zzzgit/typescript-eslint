# restrict-plus-operands

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
var foo = '1' + 1;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = '1' + 1;
    |           ^^^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
var foo = [] + {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = [] + {};
    |           ^^^^^^^ Operands of '+' operation must either be one of string, number, bigint or any (if allowed by option)
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
var foo = 5 + '10';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = 5 + '10';
    |           ^^^^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
var foo = [] + 5;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = [] + 5;
    |           ^^^^^^ Operands of '+' operation must either be both strings or both numbers.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
var foo = [] + [];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = [] + [];
    |           ^^^^^^^ Operands of '+' operation must either be one of string, number, bigint or any (if allowed by option)
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
var foo = 5 + [];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = 5 + [];
    |           ^^^^^^ Operands of '+' operation must either be both strings or both numbers.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
var foo = '5' + {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = '5' + {};
    |           ^^^^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
var foo = 5.5 + '5';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = 5.5 + '5';
    |           ^^^^^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
var foo = '5.5' + 5;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = '5.5' + 5;
    |           ^^^^^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

var x = 5;
var y = '10';
var foo = x + y;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var x = 5;
  3 | var y = '10';
> 4 | var foo = x + y;
    |           ^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  5 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

var x = 5;
var y = '10';
var foo = y + x;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var x = 5;
  3 | var y = '10';
> 4 | var foo = y + x;
    |           ^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

var x = 5;
var foo = x + {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var x = 5;
> 3 | var foo = x + {};
    |           ^^^^^^ Operands of '+' operation must either be both strings or both numbers.
  4 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

var y = '10';
var foo = [] + y;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var y = '10';
> 3 | var foo = [] + y;
    |           ^^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  4 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

var pair: { first: number; second: string } = { first: 5, second: '10' };
var foo = pair.first + '10';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var pair: { first: number; second: string } = { first: 5, second: '10' };
> 3 | var foo = pair.first + '10';
    |           ^^^^^^^^^^^^^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  4 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

var pair: { first: number; second: string } = { first: 5, second: '10' };
var foo = 5 + pair.second;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var pair: { first: number; second: string } = { first: 5, second: '10' };
> 3 | var foo = 5 + pair.second;
    |           ^^^^^^^^^^^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  4 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
var foo = parseInt('5.5', 10) + '10';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = parseInt('5.5', 10) + '10';
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

var pair = { first: 5, second: '10' };
var foo = pair + pair;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var pair = { first: 5, second: '10' };
> 3 | var foo = pair + pair;
    |           ^^^^^^^^^^^ Operands of '+' operation must either be one of string, number, bigint or any (if allowed by option)
  4 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
var foo = 1n + 1;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = 1n + 1;
    |           ^^^^^^ Operands of '+' operation must be both bigints.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
var foo = 1 + 1n;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = 1 + 1n;
    |           ^^^^^^ Operands of '+' operation must be both bigints.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

        var foo = 1n;
        foo + 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         var foo = 1n;
> 3 |         foo + 1;
    |         ^^^^^^^ Operands of '+' operation must be both bigints.
  4 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

        var foo = 1;
        foo + 1n;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         var foo = 1;
> 3 |         foo + 1n;
    |         ^^^^^^^^ Operands of '+' operation must be both bigints.
  4 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

function foo<T extends string>(a: T) {
  return a + 1;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo<T extends string>(a: T) {
> 3 |   return a + 1;
    |          ^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  4 | }
  5 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

function foo<T extends 'a' | 'b'>(a: T) {
  return a + 1;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo<T extends 'a' | 'b'>(a: T) {
> 3 |   return a + 1;
    |          ^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  4 | }
  5 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

function foo<T extends number>(a: T) {
  return a + '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo<T extends number>(a: T) {
> 3 |   return a + '';
    |          ^^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  4 | }
  5 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

function foo<T extends 1>(a: T) {
  return a + '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo<T extends 1>(a: T) {
> 3 |   return a + '';
    |          ^^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  4 | }
  5 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: boolean & string;
        declare const b: string;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: boolean & string;
  3 |         declare const b: string;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  5 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: number & string;
        declare const b: string;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: number & string;
  3 |         declare const b: string;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  5 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: symbol & string;
        declare const b: string;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: symbol & string;
  3 |         declare const b: string;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  5 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: object & string;
        declare const b: string;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: object & string;
  3 |         declare const b: string;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  5 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: never & string;
        declare const b: string;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: never & string;
  3 |         declare const b: string;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  5 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: any & string;
        declare const b: string;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: any & string;
  3 |         declare const b: string;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation with any is possible only with string, number, bigint or any
  5 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: { a: 1 } & { b: 2 };
        declare const b: string;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: { a: 1 } & { b: 2 };
  3 |         declare const b: string;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  5 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: boolean & number;
        declare const b: number;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: boolean & number;
  3 |         declare const b: number;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must either be both strings or both numbers.
  5 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: symbol & number;
        declare const b: number;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: symbol & number;
  3 |         declare const b: number;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must either be both strings or both numbers.
  5 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: object & number;
        declare const b: number;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: object & number;
  3 |         declare const b: number;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must either be both strings or both numbers.
  5 |       
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: never & number;
        declare const b: number;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: never & number;
  3 |         declare const b: number;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must either be both strings or both numbers.
  5 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: any & number;
        declare const b: number;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: any & number;
  3 |         declare const b: number;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation with any is possible only with string, number, bigint or any
  5 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: { a: 1 } & { b: 2 };
        declare const b: number;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: { a: 1 } & { b: 2 };
  3 |         declare const b: number;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must either be both strings or both numbers.
  5 |       
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: boolean & bigint;
        declare const b: bigint;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: boolean & bigint;
  3 |         declare const b: bigint;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must be both bigints.
  5 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: number & bigint;
        declare const b: bigint;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: number & bigint;
  3 |         declare const b: bigint;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must be both bigints.
  5 |       
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: symbol & bigint;
        declare const b: bigint;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: symbol & bigint;
  3 |         declare const b: bigint;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must be both bigints.
  5 |       
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: object & bigint;
        declare const b: bigint;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: object & bigint;
  3 |         declare const b: bigint;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must be both bigints.
  5 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: never & bigint;
        declare const b: bigint;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: never & bigint;
  3 |         declare const b: bigint;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must be both bigints.
  5 |       
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: any & bigint;
        declare const b: bigint;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: any & bigint;
  3 |         declare const b: bigint;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation with any is possible only with string, number, bigint or any
  5 |       
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts

        declare const a: { a: 1 } & { b: 2 };
        declare const b: bigint;
        const x = a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const a: { a: 1 } & { b: 2 };
  3 |         declare const b: bigint;
> 4 |         const x = a + b;
    |                   ^^^^^ Operands of '+' operation must be both bigints.
  5 |       
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts

let foo: string | undefined;
foo += 'some data';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo: string | undefined;
> 3 | foo += 'some data';
    | ^^^^^^^^^^^^^^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  4 |       
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts

let foo = '';
foo += 0;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo = '';
> 3 | foo += 0;
    | ^^^^^^^^ Operands of '+' operation must either be both strings or both numbers. Consider using a template literal.
  4 |       
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts

const f = (a: any, b: boolean) => a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const f = (a: any, b: boolean) => a + b;
    |                                   ^^^^^ Operands of '+' operation with any is possible only with string, number, bigint or any
  3 |       
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts

const f = (a: any, b: []) => a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const f = (a: any, b: []) => a + b;
    |                              ^^^^^ Operands of '+' operation with any is possible only with string, number, bigint or any
  3 |       
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts

const f = (a: any, b: any) => a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const f = (a: any, b: any) => a + b;
    |                               ^^^^^ Operands of '+' operation with any is possible only with string, number, bigint or any
  3 |       
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts

const f = (a: any, b: string) => a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const f = (a: any, b: string) => a + b;
    |                                  ^^^^^ Operands of '+' operation with any is possible only with string, number, bigint or any
  3 |       
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts

const f = (a: any, b: bigint) => a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const f = (a: any, b: bigint) => a + b;
    |                                  ^^^^^ Operands of '+' operation with any is possible only with string, number, bigint or any
  3 |       
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts

const f = (a: any, b: number) => a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const f = (a: any, b: number) => a + b;
    |                                  ^^^^^ Operands of '+' operation with any is possible only with string, number, bigint or any
  3 |       
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts

const f = (a: any, b: boolean) => a + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const f = (a: any, b: boolean) => a + b;
    |                                   ^^^^^ Operands of '+' operation with any is possible only with string, number, bigint or any
  3 |       
```
