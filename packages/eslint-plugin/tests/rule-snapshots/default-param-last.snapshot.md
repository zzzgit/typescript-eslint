# default-param-last

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
function foo(a = 1, b: number) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(a = 1, b: number) {}
    |              ^^^^^ Default parameters should be last.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
function foo(a = 1, b = 2, c: number) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(a = 1, b = 2, c: number) {}
    |              ^^^^^ Default parameters should be last.
```

<!-- prettier-ignore -->
```ts
> 1 | function foo(a = 1, b = 2, c: number) {}
    |                     ^^^^^ Default parameters should be last.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
function foo(a = 1, b: number, c = 2, d: number) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(a = 1, b: number, c = 2, d: number) {}
    |              ^^^^^ Default parameters should be last.
```

<!-- prettier-ignore -->
```ts
> 1 | function foo(a = 1, b: number, c = 2, d: number) {}
    |                                ^^^^^ Default parameters should be last.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
function foo(a = 1, b: number, c = 2) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(a = 1, b: number, c = 2) {}
    |              ^^^^^ Default parameters should be last.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
function foo(a = 1, b: number, ...c) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(a = 1, b: number, ...c) {}
    |              ^^^^^ Default parameters should be last.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
function foo(a?: number, b: number) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(a?: number, b: number) {}
    |              ^^^^^^^^^^ Default parameters should be last.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
function foo(a: number, b?: number, c: number) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(a: number, b?: number, c: number) {}
    |                         ^^^^^^^^^^ Default parameters should be last.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
function foo(a = 1, b?: number, c: number) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(a = 1, b?: number, c: number) {}
    |              ^^^^^ Default parameters should be last.
```

<!-- prettier-ignore -->
```ts
> 1 | function foo(a = 1, b?: number, c: number) {}
    |                     ^^^^^^^^^^ Default parameters should be last.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
function foo(a = 1, { b }) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(a = 1, { b }) {}
    |              ^^^^^ Default parameters should be last.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
function foo({ a } = {}, b) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo({ a } = {}, b) {}
    |              ^^^^^^^^^^ Default parameters should be last.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
function foo({ a, b } = { a: 1, b: 2 }, c) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo({ a, b } = { a: 1, b: 2 }, c) {}
    |              ^^^^^^^^^^^^^^^^^^^^^^^^^ Default parameters should be last.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
function foo([a] = [], b) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo([a] = [], b) {}
    |              ^^^^^^^^ Default parameters should be last.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
function foo([a, b] = [1, 2], c) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo([a, b] = [1, 2], c) {}
    |              ^^^^^^^^^^^^^^^ Default parameters should be last.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
const foo = function (a = 1, b: number) {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = function (a = 1, b: number) {};
    |                       ^^^^^ Default parameters should be last.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
const foo = function (a = 1, b = 2, c: number) {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = function (a = 1, b = 2, c: number) {};
    |                       ^^^^^ Default parameters should be last.
```

<!-- prettier-ignore -->
```ts
> 1 | const foo = function (a = 1, b = 2, c: number) {};
    |                              ^^^^^ Default parameters should be last.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
const foo = function (a = 1, b: number, c = 2, d: number) {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = function (a = 1, b: number, c = 2, d: number) {};
    |                       ^^^^^ Default parameters should be last.
```

<!-- prettier-ignore -->
```ts
> 1 | const foo = function (a = 1, b: number, c = 2, d: number) {};
    |                                         ^^^^^ Default parameters should be last.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
const foo = function (a = 1, b: number, c = 2) {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = function (a = 1, b: number, c = 2) {};
    |                       ^^^^^ Default parameters should be last.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
const foo = function (a = 1, b: number, ...c) {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = function (a = 1, b: number, ...c) {};
    |                       ^^^^^ Default parameters should be last.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
const foo = function (a?: number, b: number) {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = function (a?: number, b: number) {};
    |                       ^^^^^^^^^^ Default parameters should be last.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
const foo = function (a: number, b?: number, c: number) {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = function (a: number, b?: number, c: number) {};
    |                                  ^^^^^^^^^^ Default parameters should be last.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
const foo = function (a = 1, b?: number, c: number) {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = function (a = 1, b?: number, c: number) {};
    |                       ^^^^^ Default parameters should be last.
```

<!-- prettier-ignore -->
```ts
> 1 | const foo = function (a = 1, b?: number, c: number) {};
    |                              ^^^^^^^^^^ Default parameters should be last.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
const foo = function (a = 1, { b }) {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = function (a = 1, { b }) {};
    |                       ^^^^^ Default parameters should be last.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
const foo = function ({ a } = {}, b) {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = function ({ a } = {}, b) {};
    |                       ^^^^^^^^^^ Default parameters should be last.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
const foo = function ({ a, b } = { a: 1, b: 2 }, c) {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = function ({ a, b } = { a: 1, b: 2 }, c) {};
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^ Default parameters should be last.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
const foo = function ([a] = [], b) {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = function ([a] = [], b) {};
    |                       ^^^^^^^^ Default parameters should be last.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
const foo = function ([a, b] = [1, 2], c) {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = function ([a, b] = [1, 2], c) {};
    |                       ^^^^^^^^^^^^^^^ Default parameters should be last.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
const foo = (a = 1, b: number) => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = (a = 1, b: number) => {};
    |              ^^^^^ Default parameters should be last.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
const foo = (a = 1, b = 2, c: number) => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = (a = 1, b = 2, c: number) => {};
    |              ^^^^^ Default parameters should be last.
```

<!-- prettier-ignore -->
```ts
> 1 | const foo = (a = 1, b = 2, c: number) => {};
    |                     ^^^^^ Default parameters should be last.
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
const foo = (a = 1, b: number, c = 2, d: number) => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = (a = 1, b: number, c = 2, d: number) => {};
    |              ^^^^^ Default parameters should be last.
```

<!-- prettier-ignore -->
```ts
> 1 | const foo = (a = 1, b: number, c = 2, d: number) => {};
    |                                ^^^^^ Default parameters should be last.
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
const foo = (a = 1, b: number, c = 2) => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = (a = 1, b: number, c = 2) => {};
    |              ^^^^^ Default parameters should be last.
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
const foo = (a = 1, b: number, ...c) => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = (a = 1, b: number, ...c) => {};
    |              ^^^^^ Default parameters should be last.
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
const foo = (a?: number, b: number) => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = (a?: number, b: number) => {};
    |              ^^^^^^^^^^ Default parameters should be last.
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
const foo = (a: number, b?: number, c: number) => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = (a: number, b?: number, c: number) => {};
    |                         ^^^^^^^^^^ Default parameters should be last.
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
const foo = (a = 1, b?: number, c: number) => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = (a = 1, b?: number, c: number) => {};
    |              ^^^^^ Default parameters should be last.
```

<!-- prettier-ignore -->
```ts
> 1 | const foo = (a = 1, b?: number, c: number) => {};
    |                     ^^^^^^^^^^ Default parameters should be last.
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts
const foo = (a = 1, { b }) => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = (a = 1, { b }) => {};
    |              ^^^^^ Default parameters should be last.
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts
const foo = ({ a } = {}, b) => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = ({ a } = {}, b) => {};
    |              ^^^^^^^^^^ Default parameters should be last.
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts
const foo = ({ a, b } = { a: 1, b: 2 }, c) => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = ({ a, b } = { a: 1, b: 2 }, c) => {};
    |              ^^^^^^^^^^^^^^^^^^^^^^^^^ Default parameters should be last.
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts
const foo = ([a] = [], b) => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = ([a] = [], b) => {};
    |              ^^^^^^^^ Default parameters should be last.
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts
const foo = ([a, b] = [1, 2], c) => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = ([a, b] = [1, 2], c) => {};
    |              ^^^^^^^^^^^^^^^ Default parameters should be last.
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(public a: number, protected b?: number, private c: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(public a: number, protected b?: number, private c: number) {}
    |                                 ^^^^^^^^^^^^^^^^^^^^ Default parameters should be last.
  4 | }
  5 |       
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(public a: number, protected b = 0, private c: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(public a: number, protected b = 0, private c: number) {}
    |                                 ^^^^^^^^^^^^^^^ Default parameters should be last.
  4 | }
  5 |       
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(public a?: number, private b: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(public a?: number, private b: number) {}
    |               ^^^^^^^^^^^^^^^^^ Default parameters should be last.
  4 | }
  5 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(public a = 0, private b: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(public a = 0, private b: number) {}
    |               ^^^^^^^^^^^^ Default parameters should be last.
  4 | }
  5 |       
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(a = 0, b: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(a = 0, b: number) {}
    |               ^^^^^ Default parameters should be last.
  4 | }
  5 |       
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(a?: number, b: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(a?: number, b: number) {}
    |               ^^^^^^^^^^ Default parameters should be last.
  4 | }
  5 |       
```
