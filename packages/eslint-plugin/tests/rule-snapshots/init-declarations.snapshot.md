# init-declarations

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
var foo;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo;
    |     ^^^ Variable 'foo' should be initialized on declaration.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
for (var a in []) var foo;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | for (var a in []) var foo;
    |                       ^^^ Variable 'foo' should be initialized on declaration.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

var foo,
  bar = false,
  baz;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | var foo,
    |     ^^^ Variable 'foo' should be initialized on declaration.
  3 |   bar = false,
  4 |   baz;
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | var foo,
  3 |   bar = false,
> 4 |   baz;
    |   ^^^ Variable 'baz' should be initialized on declaration.
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  var foo = 0;
  var bar;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
  3 |   var foo = 0;
> 4 |   var bar;
    |       ^^^ Variable 'bar' should be initialized on declaration.
  5 | }
  6 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  var foo;
  var bar = foo;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   var foo;
    |       ^^^ Variable 'foo' should be initialized on declaration.
  4 |   var bar = foo;
  5 | }
  6 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
let a;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a;
    |     ^ Variable 'a' should be initialized on declaration.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  let a = 1,
    b;
  if (a) {
    let c = 3,
      d = null;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | function foo() {
   3 |   let a = 1,
>  4 |     b;
     |     ^ Variable 'b' should be initialized on declaration.
   5 |   if (a) {
   6 |     let c = 3,
   7 |       d = null;
   8 |   }
   9 | }
  10 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  let a;
  const b = false;
  var c;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   let a;
    |       ^ Variable 'a' should be initialized on declaration.
  4 |   const b = false;
  5 |   var c;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
  3 |   let a;
  4 |   const b = false;
> 5 |   var c;
    |       ^ Variable 'c' should be initialized on declaration.
  6 | }
  7 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
var foo = (bar = 2);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = (bar = 2);
    |     ^^^^^^^^^^^^^^^ Variable 'foo' should not be initialized on declaration.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
var foo = true;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = true;
    |     ^^^^^^^^^^ Variable 'foo' should not be initialized on declaration.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

var foo,
  bar = 5,
  baz = 3;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var foo,
> 3 |   bar = 5,
    |   ^^^^^^^ Variable 'bar' should not be initialized on declaration.
  4 |   baz = 3;
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | var foo,
  3 |   bar = 5,
> 4 |   baz = 3;
    |   ^^^^^^^ Variable 'baz' should not be initialized on declaration.
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  var foo;
  var bar = foo;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
  3 |   var foo;
> 4 |   var bar = foo;
    |       ^^^^^^^^^ Variable 'bar' should not be initialized on declaration.
  5 | }
  6 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
let a = 1;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a = 1;
    |     ^^^^^ Variable 'a' should not be initialized on declaration.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  let a = 'foo',
    b;
  if (a) {
    let c, d;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   let a = 'foo',
    |       ^^^^^^^^^ Variable 'a' should not be initialized on declaration.
  4 |     b;
  5 |   if (a) {
  6 |     let c, d;
  7 |   }
  8 | }
  9 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  let a;
  const b = false;
  var c = 1;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
  3 |   let a;
  4 |   const b = false;
> 5 |   var c = 1;
    |       ^^^^^ Variable 'c' should not be initialized on declaration.
  6 | }
  7 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
for (var i = 0; i < 1; i++) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | for (var i = 0; i < 1; i++) {}
    |          ^^^^^ Variable 'i' should not be initialized on declaration.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

for (var foo in []) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (var foo in []) {
    |          ^^^ Variable 'foo' should not be initialized on declaration.
  3 | }
  4 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

for (var foo of []) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (var foo of []) {
    |          ^^^ Variable 'foo' should not be initialized on declaration.
  3 | }
  4 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  var bar;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   var bar;
    |       ^^^ Variable 'bar' should be initialized on declaration.
  4 | }
  5 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
let arr: string[] = ['arr', 'ar'];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let arr: string[] = ['arr', 'ar'];
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable 'arr' should not be initialized on declaration.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
let arr: string = function () {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let arr: string = function () {};
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable 'arr' should not be initialized on declaration.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

const class1 = class NAME {
  constructor() {
    var name1: string = 'hello';
  }
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const class1 = class NAME {
  3 |   constructor() {
> 4 |     var name1: string = 'hello';
    |         ^^^^^^^^^^^^^^^^^^^^^^^ Variable 'name1' should not be initialized on declaration.
  5 |   }
  6 | };
  7 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
let arr: string;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let arr: string;
    |     ^^^^^^^^^^^ Variable 'arr' should be initialized on declaration.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
declare var foo: number = 'asd';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare var foo: number = 'asd';
    |             ^^^^^^^^^^^^^^^^^^^ Variable 'foo' should not be initialized on declaration.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

namespace myLib {
  let numberOfGreetings: number;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace myLib {
> 3 |   let numberOfGreetings: number;
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^ Variable 'numberOfGreetings' should be initialized on declaration.
  4 | }
  5 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

namespace myLib {
  let numberOfGreetings: number = 2;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace myLib {
> 3 |   let numberOfGreetings: number = 2;
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable 'numberOfGreetings' should not be initialized on declaration.
  4 | }
  5 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

namespace myLib1 {
  const foo: number;
  namespace myLib2 {
    let bar: string;
    namespace myLib3 {
      let baz: object;
    }
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | namespace myLib1 {
>  3 |   const foo: number;
     |         ^^^^^^^^^^^ Variable 'foo' should be initialized on declaration.
   4 |   namespace myLib2 {
   5 |     let bar: string;
   6 |     namespace myLib3 {
   7 |       let baz: object;
   8 |     }
   9 |   }
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | namespace myLib1 {
   3 |   const foo: number;
   4 |   namespace myLib2 {
>  5 |     let bar: string;
     |         ^^^^^^^^^^^ Variable 'bar' should be initialized on declaration.
   6 |     namespace myLib3 {
   7 |       let baz: object;
   8 |     }
   9 |   }
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | namespace myLib1 {
   3 |   const foo: number;
   4 |   namespace myLib2 {
   5 |     let bar: string;
   6 |     namespace myLib3 {
>  7 |       let baz: object;
     |           ^^^^^^^^^^^ Variable 'baz' should be initialized on declaration.
   8 |     }
   9 |   }
  10 | }
  11 |       
```
