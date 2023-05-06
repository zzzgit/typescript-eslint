# consistent-generic-constructors

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
const a: Foo<string> = new Foo();
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = new Foo<string>();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: Foo<string> = new Foo();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the constructor type arguments.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
const a: Map<string, number> = new Map();
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = new Map<string, number>();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: Map<string, number> = new Map();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the constructor type arguments.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
const a: Map <string, number> = new Map();
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = new Map<string, number>();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: Map <string, number> = new Map();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the constructor type arguments.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
const a: Map< string, number > = new Map();
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = new Map< string, number >();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: Map< string, number > = new Map();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the constructor type arguments.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
const a: Map<string, number> = new Map ();
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = new Map<string, number> ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: Map<string, number> = new Map ();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the constructor type arguments.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
const a: Foo<number> = new Foo;
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = new Foo<number>();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: Foo<number> = new Foo;
    |       ^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the constructor type arguments.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
const a: /* comment */ Foo/* another */ <string> = new Foo();
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = new Foo/* comment *//* another */<string>();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: /* comment */ Foo/* another */ <string> = new Foo();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the constructor type arguments.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
const a: Foo/* comment */ <string> = new Foo /* another */();
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = new Foo/* comment */<string> /* another */();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: Foo/* comment */ <string> = new Foo /* another */();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the constructor type arguments.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
const a: Foo<string> = new 
 Foo 
 ();
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = new 
 Foo<string> 
 ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a: Foo<string> = new 
    |       ^^^^^^^^^^^^^^^^^^^^^
> 2 |  Foo 
    | ^^^^^
> 3 |  ();
    | ^^^^ The generic type arguments should be specified as part of the constructor type arguments.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  a: Foo<string> = new Foo();
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  a = new Foo<string>();
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   a: Foo<string> = new Foo();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the constructor type arguments.
  4 | }
  5 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  [a]: Foo<string> = new Foo();
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  [a] = new Foo<string>();
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   [a]: Foo<string> = new Foo();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the constructor type arguments.
  4 | }
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

function foo(a: Foo<string> = new Foo()) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo(a = new Foo<string>()) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(a: Foo<string> = new Foo()) {}
    |              ^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the constructor type arguments.
  3 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

function foo({ a }: Foo<string> = new Foo()) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo({ a } = new Foo<string>()) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo({ a }: Foo<string> = new Foo()) {}
    |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the constructor type arguments.
  3 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

function foo([a]: Foo<string> = new Foo()) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo([a] = new Foo<string>()) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo([a]: Foo<string> = new Foo()) {}
    |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the constructor type arguments.
  3 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  constructor(a: Foo<string> = new Foo()) {}
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class A {
  constructor(a = new Foo<string>()) {}
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
> 3 |   constructor(a: Foo<string> = new Foo()) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the constructor type arguments.
  4 | }
  5 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

const a = function (a: Foo<string> = new Foo()) {};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const a = function (a = new Foo<string>()) {};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const a = function (a: Foo<string> = new Foo()) {};
    |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the constructor type arguments.
  3 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
const a = new Foo<string>();
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a: Foo<string> = new Foo();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a = new Foo<string>();
    |       ^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the type annotation.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
const a = new Map<string, number>();
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a: Map<string, number> = new Map();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a = new Map<string, number>();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the type annotation.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
const a = new Map <string, number> ();
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a: Map<string, number> = new Map  ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a = new Map <string, number> ();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the type annotation.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
const a = new Map< string, number >();
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a: Map< string, number > = new Map();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a = new Map< string, number >();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the type annotation.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
const a = new 
 Foo<string> 
 ();
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a: Foo<string> = new 
 Foo 
 ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a = new 
    |       ^^^^^^^^
> 2 |  Foo<string> 
    | ^^^^^^^^^^^^^
> 3 |  ();
    | ^^^^ The generic type arguments should be specified as part of the type annotation.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
const a = new Foo/* comment */ <string> /* another */();
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a: Foo<string> = new Foo/* comment */  /* another */();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a = new Foo/* comment */ <string> /* another */();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the type annotation.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
const a = new Foo</* comment */ string, /* another */ number>();
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a: Foo</* comment */ string, /* another */ number> = new Foo();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a = new Foo</* comment */ string, /* another */ number>();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the type annotation.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  a = new Foo<string>();
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  a: Foo<string> = new Foo();
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   a = new Foo<string>();
    |   ^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the type annotation.
  4 | }
  5 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  [a] = new Foo<string>();
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  [a]: Foo<string> = new Foo();
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   [a] = new Foo<string>();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the type annotation.
  4 | }
  5 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  [a + b] = new Foo<string>();
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  [a + b]: Foo<string> = new Foo();
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   [a + b] = new Foo<string>();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the type annotation.
  4 | }
  5 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

function foo(a = new Foo<string>()) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo(a: Foo<string> = new Foo()) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(a = new Foo<string>()) {}
    |              ^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the type annotation.
  3 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

function foo({ a } = new Foo<string>()) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo({ a }: Foo<string> = new Foo()) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo({ a } = new Foo<string>()) {}
    |              ^^^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the type annotation.
  3 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

function foo([a] = new Foo<string>()) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo([a]: Foo<string> = new Foo()) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo([a] = new Foo<string>()) {}
    |              ^^^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the type annotation.
  3 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  constructor(a = new Foo<string>()) {}
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class A {
  constructor(a: Foo<string> = new Foo()) {}
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
> 3 |   constructor(a = new Foo<string>()) {}
    |               ^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the type annotation.
  4 | }
  5 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

const a = function (a = new Foo<string>()) {};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const a = function (a: Foo<string> = new Foo()) {};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const a = function (a = new Foo<string>()) {};
    |                     ^^^^^^^^^^^^^^^^^^^^^ The generic type arguments should be specified as part of the type annotation.
  3 |       
```
