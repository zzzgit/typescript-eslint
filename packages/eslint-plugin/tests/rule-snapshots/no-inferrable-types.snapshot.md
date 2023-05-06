# no-inferrable-types

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
const a: bigint = 10n
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = 10n
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: bigint = 10n
    |       ^^^^^^^^^^^^^^^ Type bigint trivially inferred from a bigint literal, remove type annotation.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
const a: bigint = -10n
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = -10n
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: bigint = -10n
    |       ^^^^^^^^^^^^^^^^ Type bigint trivially inferred from a bigint literal, remove type annotation.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
const a: bigint = BigInt(10)
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = BigInt(10)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: bigint = BigInt(10)
    |       ^^^^^^^^^^^^^^^^^^^^^^ Type bigint trivially inferred from a bigint literal, remove type annotation.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
const a: bigint = -BigInt(10)
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = -BigInt(10)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: bigint = -BigInt(10)
    |       ^^^^^^^^^^^^^^^^^^^^^^^ Type bigint trivially inferred from a bigint literal, remove type annotation.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
const a: bigint = BigInt?.(10)
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = BigInt?.(10)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: bigint = BigInt?.(10)
    |       ^^^^^^^^^^^^^^^^^^^^^^^^ Type bigint trivially inferred from a bigint literal, remove type annotation.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
const a: bigint = -BigInt?.(10)
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = -BigInt?.(10)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: bigint = -BigInt?.(10)
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^ Type bigint trivially inferred from a bigint literal, remove type annotation.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
const a: boolean = false
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = false
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: boolean = false
    |       ^^^^^^^^^^^^^^^^^^ Type boolean trivially inferred from a boolean literal, remove type annotation.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
const a: boolean = true
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = true
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: boolean = true
    |       ^^^^^^^^^^^^^^^^^ Type boolean trivially inferred from a boolean literal, remove type annotation.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
const a: boolean = Boolean(null)
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = Boolean(null)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: boolean = Boolean(null)
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^ Type boolean trivially inferred from a boolean literal, remove type annotation.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
const a: boolean = Boolean?.(null)
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = Boolean?.(null)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: boolean = Boolean?.(null)
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type boolean trivially inferred from a boolean literal, remove type annotation.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
const a: boolean = !0
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = !0
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: boolean = !0
    |       ^^^^^^^^^^^^^^^ Type boolean trivially inferred from a boolean literal, remove type annotation.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
const a: number = 10
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = 10
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: number = 10
    |       ^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
const a: number = +10
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = +10
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: number = +10
    |       ^^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
const a: number = -10
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = -10
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: number = -10
    |       ^^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
const a: number = Number("1")
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = Number("1")
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: number = Number("1")
    |       ^^^^^^^^^^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
const a: number = +Number("1")
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = +Number("1")
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: number = +Number("1")
    |       ^^^^^^^^^^^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
const a: number = -Number("1")
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = -Number("1")
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: number = -Number("1")
    |       ^^^^^^^^^^^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
const a: number = Number?.("1")
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = Number?.("1")
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: number = Number?.("1")
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
const a: number = +Number?.("1")
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = +Number?.("1")
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: number = +Number?.("1")
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
const a: number = -Number?.("1")
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = -Number?.("1")
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: number = -Number?.("1")
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
const a: number = Infinity
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = Infinity
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: number = Infinity
    |       ^^^^^^^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
const a: number = +Infinity
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = +Infinity
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: number = +Infinity
    |       ^^^^^^^^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
const a: number = -Infinity
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = -Infinity
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: number = -Infinity
    |       ^^^^^^^^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
const a: number = NaN
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = NaN
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: number = NaN
    |       ^^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
const a: number = +NaN
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = +NaN
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: number = +NaN
    |       ^^^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
const a: number = -NaN
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = -NaN
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: number = -NaN
    |       ^^^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
const a: null = null
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = null
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: null = null
    |       ^^^^^^^^^^^^^^ Type null trivially inferred from a null literal, remove type annotation.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
const a: RegExp = /a/
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = /a/
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: RegExp = /a/
    |       ^^^^^^^^^^^^^^^ Type RegExp trivially inferred from a RegExp literal, remove type annotation.
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
const a: RegExp = RegExp("a")
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = RegExp("a")
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: RegExp = RegExp("a")
    |       ^^^^^^^^^^^^^^^^^^^^^^^ Type RegExp trivially inferred from a RegExp literal, remove type annotation.
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
const a: RegExp = RegExp?.("a")
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = RegExp?.("a")
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: RegExp = RegExp?.("a")
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^ Type RegExp trivially inferred from a RegExp literal, remove type annotation.
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
const a: RegExp = new RegExp("a")
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = new RegExp("a")
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: RegExp = new RegExp("a")
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type RegExp trivially inferred from a RegExp literal, remove type annotation.
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
const a: string = "str"
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = "str"
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: string = "str"
    |       ^^^^^^^^^^^^^^^^^ Type string trivially inferred from a string literal, remove type annotation.
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
const a: string = 'str'
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = 'str'
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: string = 'str'
    |       ^^^^^^^^^^^^^^^^^ Type string trivially inferred from a string literal, remove type annotation.
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
const a: string = `str`
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = `str`
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: string = `str`
    |       ^^^^^^^^^^^^^^^^^ Type string trivially inferred from a string literal, remove type annotation.
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts
const a: string = String(1)
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = String(1)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: string = String(1)
    |       ^^^^^^^^^^^^^^^^^^^^^ Type string trivially inferred from a string literal, remove type annotation.
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts
const a: string = String?.(1)
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = String?.(1)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: string = String?.(1)
    |       ^^^^^^^^^^^^^^^^^^^^^^^ Type string trivially inferred from a string literal, remove type annotation.
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts
const a: symbol = Symbol("a")
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = Symbol("a")
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: symbol = Symbol("a")
    |       ^^^^^^^^^^^^^^^^^^^^^^^ Type symbol trivially inferred from a symbol literal, remove type annotation.
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts
const a: symbol = Symbol?.("a")
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = Symbol?.("a")
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: symbol = Symbol?.("a")
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^ Type symbol trivially inferred from a symbol literal, remove type annotation.
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts
const a: undefined = undefined
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = undefined
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: undefined = undefined
    |       ^^^^^^^^^^^^^^^^^^^^^^^^ Type undefined trivially inferred from a undefined literal, remove type annotation.
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts
const a: undefined = void someValue
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = void someValue
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: undefined = void someValue
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type undefined trivially inferred from a undefined literal, remove type annotation.
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts
const fn = (a?: number = 5) => {};
```

### Fix Output

<!-- prettier-ignore -->
```ts
const fn = (a = 5) => {};
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const fn = (a?: number = 5) => {};
    |             ^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  a!: number = 1;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class A {
  a = 1;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
> 3 |   a!: number = 1;
    |   ^^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
  4 | }
  5 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts
const fn = (a: number = 5, b: boolean = true, c: string = 'foo') => {};
```

### Fix Output

<!-- prettier-ignore -->
```ts
const fn = (a = 5, b = true, c = 'foo') => {};
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const fn = (a: number = 5, b: boolean = true, c: string = 'foo') => {};
    |             ^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
```

<!-- prettier-ignore -->
```ts
> 1 | const fn = (a: number = 5, b: boolean = true, c: string = 'foo') => {};
    |                            ^^^^^^^^^^^^^^^^^ Type boolean trivially inferred from a boolean literal, remove type annotation.
```

<!-- prettier-ignore -->
```ts
> 1 | const fn = (a: number = 5, b: boolean = true, c: string = 'foo') => {};
    |                                               ^^^^^^^^^^^^^^^^^ Type string trivially inferred from a string literal, remove type annotation.
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  a: number = 5;
  b: boolean = true;
  c: string = 'foo';
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  a = 5;
  b = true;
  c = 'foo';
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   a: number = 5;
    |   ^^^^^^^^^^^^^^ Type number trivially inferred from a number literal, remove type annotation.
  4 |   b: boolean = true;
  5 |   c: string = 'foo';
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   a: number = 5;
> 4 |   b: boolean = true;
    |   ^^^^^^^^^^^^^^^^^^ Type boolean trivially inferred from a boolean literal, remove type annotation.
  5 |   c: string = 'foo';
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   a: number = 5;
  4 |   b: boolean = true;
> 5 |   c: string = 'foo';
    |   ^^^^^^^^^^^^^^^^^^ Type string trivially inferred from a string literal, remove type annotation.
  6 | }
  7 |       
```
