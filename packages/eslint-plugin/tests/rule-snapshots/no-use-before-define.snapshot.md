# no-use-before-define

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

a++;
var a = 19;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | a++;
    | ^ 'a' was used before it was defined.
  3 | var a = 19;
  4 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

a++;
var a = 19;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | a++;
    | ^ 'a' was used before it was defined.
  3 | var a = 19;
  4 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

a++;
var a = 19;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | a++;
    | ^ 'a' was used before it was defined.
  3 | var a = 19;
  4 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

a();
var a = function () {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | a();
    | ^ 'a' was used before it was defined.
  3 | var a = function () {};
  4 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

alert(a[1]);
var a = [1, 3];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | alert(a[1]);
    |       ^ 'a' was used before it was defined.
  3 | var a = [1, 3];
  4 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

a();
function a() {
  alert(b);
  var b = 10;
  a();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | a();
    | ^ 'a' was used before it was defined.
  3 | function a() {
  4 |   alert(b);
  5 |   var b = 10;
  6 |   a();
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | a();
  3 | function a() {
> 4 |   alert(b);
    |         ^ 'b' was used before it was defined.
  5 |   var b = 10;
  6 |   a();
  7 | }
  8 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

a();
var a = function () {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | a();
    | ^ 'a' was used before it was defined.
  3 | var a = function () {};
  4 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

(() => {
  alert(a);
  var a = 42;
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (() => {
> 3 |   alert(a);
    |         ^ 'a' was used before it was defined.
  4 |   var a = 42;
  5 | })();
  6 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

(() => a())();
function a() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (() => a())();
    |        ^ 'a' was used before it was defined.
  3 | function a() {}
  4 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

'use strict';
a();
{
  function a() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | 'use strict';
> 3 | a();
    | ^ 'a' was used before it was defined.
  4 | {
  5 |   function a() {}
  6 | }
  7 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

a();
try {
  throw new Error();
} catch (foo) {
  var a;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | a();
    | ^ 'a' was used before it was defined.
  3 | try {
  4 |   throw new Error();
  5 | } catch (foo) {
  6 |   var a;
  7 | }
  8 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

var f = () => a;
var a;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | var f = () => a;
    |               ^ 'a' was used before it was defined.
  3 | var a;
  4 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

new A();
class A {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | new A();
    |     ^ 'A' was used before it was defined.
  3 | class A {}
  4 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  new A();
}
class A {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   new A();
    |       ^ 'A' was used before it was defined.
  4 | }
  5 | class A {}
  6 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

new A();
var A = class {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | new A();
    |     ^ 'A' was used before it was defined.
  3 | var A = class {};
  4 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  new A();
}
var A = class {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   new A();
    |       ^ 'A' was used before it was defined.
  4 | }
  5 | var A = class {};
  6 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

a++;
{
  var a;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | a++;
    | ^ 'a' was used before it was defined.
  3 | {
  4 |   var a;
  5 | }
  6 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

'use strict';
{
  a();
  function a() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | 'use strict';
  3 | {
> 4 |   a();
    |   ^ 'a' was used before it was defined.
  5 |   function a() {}
  6 | }
  7 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

{
  a;
  let a = 1;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | {
> 3 |   a;
    |   ^ 'a' was used before it was defined.
  4 |   let a = 1;
  5 | }
  6 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

switch (foo) {
  case 1:
    a();
  default:
    let a;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | switch (foo) {
  3 |   case 1:
> 4 |     a();
    |     ^ 'a' was used before it was defined.
  5 |   default:
  6 |     let a;
  7 | }
  8 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

if (true) {
  function foo() {
    a;
  }
  let a;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | if (true) {
  3 |   function foo() {
> 4 |     a;
    |     ^ 'a' was used before it was defined.
  5 |   }
  6 |   let a;
  7 | }
  8 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

a();
var a = function () {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | a();
    | ^ 'a' was used before it was defined.
  3 | var a = function () {};
  4 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

new A();
var A = class {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | new A();
    |     ^ 'A' was used before it was defined.
  3 | var A = class {};
  4 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  new A();
}
var A = class {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   new A();
    |       ^ 'A' was used before it was defined.
  4 | }
  5 | var A = class {};
  6 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
var a = a;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var a = a;
    |         ^ 'a' was used before it was defined.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
let a = a + b;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a = a + b;
    |         ^ 'a' was used before it was defined.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
const a = foo(a);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a = foo(a);
    |               ^ 'a' was used before it was defined.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
function foo(a = a) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(a = a) {}
    |                  ^ 'a' was used before it was defined.
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
var { a = a } = [];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var { a = a } = [];
    |           ^ 'a' was used before it was defined.
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
var [a = a] = [];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var [a = a] = [];
    |          ^ 'a' was used before it was defined.
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
var { b = a, a } = {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var { b = a, a } = {};
    |           ^ 'a' was used before it was defined.
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
var [b = a, a] = {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var [b = a, a] = {};
    |          ^ 'a' was used before it was defined.
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
var { a = 0 } = a;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var { a = 0 } = a;
    |                 ^ 'a' was used before it was defined.
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
var [a = 0] = a;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var [a = 0] = a;
    |               ^ 'a' was used before it was defined.
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

for (var a in a) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (var a in a) {
    |               ^ 'a' was used before it was defined.
  3 | }
  4 |       
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

for (var a of a) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (var a of a) {
    |               ^ 'a' was used before it was defined.
  3 | }
  4 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {
  type: typeof Foo;
}

const Foo = 2;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {
> 3 |   type: typeof Foo;
    |                ^^^ 'Foo' was used before it was defined.
  4 | }
  5 |
  6 | const Foo = 2;
  7 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {
  type: typeof Foo.FOO;
}

class Foo {
  public static readonly FOO = '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Bar {
> 3 |   type: typeof Foo.FOO;
    |                ^^^ 'Foo' was used before it was defined.
  4 | }
  5 |
  6 | class Foo {
  7 |   public static readonly FOO = '';
  8 | }
  9 |       
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

interface Bar {
  type: typeof Foo.Bar.Baz;
}

const Foo = {
  Bar: {
    Baz: 1,
  },
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Bar {
>  3 |   type: typeof Foo.Bar.Baz;
     |                ^^^ 'Foo' was used before it was defined.
   4 | }
   5 |
   6 | const Foo = {
   7 |   Bar: {
   8 |     Baz: 1,
   9 |   },
  10 | };
  11 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  bar;
  var bar = 1;
}
var bar;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   bar;
    |   ^^^ 'bar' was used before it was defined.
  4 |   var bar = 1;
  5 | }
  6 | var bar;
  7 |       
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  foo(args: Foo): Foo {
    return Foo.FOO;
  }
}

enum Foo {
  FOO,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Test {
   3 |   foo(args: Foo): Foo {
>  4 |     return Foo.FOO;
     |            ^^^ 'Foo' was used before it was defined.
   5 |   }
   6 | }
   7 |
   8 | enum Foo {
   9 |   FOO,
  10 | }
  11 |       
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

function foo(): Foo {
  return Foo.FOO;
}

enum Foo {
  FOO,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(): Foo {
> 3 |   return Foo.FOO;
    |          ^^^ 'Foo' was used before it was defined.
  4 | }
  5 |
  6 | enum Foo {
  7 |   FOO,
  8 | }
  9 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

const foo = Foo.Foo;

enum Foo {
  FOO,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const foo = Foo.Foo;
    |             ^^^ 'Foo' was used before it was defined.
  3 |
  4 | enum Foo {
  5 |   FOO,
  6 | }
  7 |       
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts

export { a };
const a = 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export { a };
    |          ^ 'a' was used before it was defined.
  3 | const a = 1;
  4 |       
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts

export { a };
const a = 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export { a };
    |          ^ 'a' was used before it was defined.
  3 | const a = 1;
  4 |       
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts

export { a };
const a = 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export { a };
    |          ^ 'a' was used before it was defined.
  3 | const a = 1;
  4 |       
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts

export { a };
const a = 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export { a };
    |          ^ 'a' was used before it was defined.
  3 | const a = 1;
  4 |       
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts

export { a as b };
const a = 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export { a as b };
    |          ^ 'a' was used before it was defined.
  3 | const a = 1;
  4 |       
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts

export { a, b };
let a, b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export { a, b };
    |          ^ 'a' was used before it was defined.
  3 | let a, b;
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export { a, b };
    |             ^ 'b' was used before it was defined.
  3 | let a, b;
  4 |       
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts

export { a };
var a;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export { a };
    |          ^ 'a' was used before it was defined.
  3 | var a;
  4 |       
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts

export { f };
function f() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export { f };
    |          ^ 'f' was used before it was defined.
  3 | function f() {}
  4 |       
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts

export { C };
class C {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export { C };
    |          ^ 'C' was used before it was defined.
  3 | class C {}
  4 |       
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts

export const foo = a;
const a = 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export const foo = a;
    |                    ^ 'a' was used before it was defined.
  3 | const a = 1;
  4 |       
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts

export function foo() {
  return a;
}
const a = 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export function foo() {
> 3 |   return a;
    |          ^ 'a' was used before it was defined.
  4 | }
  5 | const a = 1;
  6 |       
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts

export class C {
  foo() {
    return a;
  }
}
const a = 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export class C {
  3 |   foo() {
> 4 |     return a;
    |            ^ 'a' was used before it was defined.
  5 |   }
  6 | }
  7 | const a = 1;
  8 |       
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts

export { Foo };

enum Foo {
  BAR,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export { Foo };
    |          ^^^ 'Foo' was used before it was defined.
  3 |
  4 | enum Foo {
  5 |   BAR,
  6 | }
  7 |       
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts

export { Foo };

namespace Foo {
  export let bar = () => console.log('bar');
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export { Foo };
    |          ^^^ 'Foo' was used before it was defined.
  3 |
  4 | namespace Foo {
  5 |   export let bar = () => console.log('bar');
  6 | }
  7 |       
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts

export { Foo, baz };

enum Foo {
  BAR,
}

let baz: Enum;
enum Enum {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 | export { Foo, baz };
     |          ^^^ 'Foo' was used before it was defined.
   3 |
   4 | enum Foo {
   5 |   BAR,
   6 | }
   7 |
   8 | let baz: Enum;
   9 | enum Enum {}
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
>  2 | export { Foo, baz };
     |               ^^^ 'baz' was used before it was defined.
   3 |
   4 | enum Foo {
   5 |   BAR,
   6 | }
   7 |
   8 | let baz: Enum;
   9 | enum Enum {}
  10 |       
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts

f();
function f() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | f();
    | ^ 'f' was used before it was defined.
  3 | function f() {}
  4 |       
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts

alert(a);
var a = 10;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | alert(a);
    |       ^ 'a' was used before it was defined.
  3 | var a = 10;
  4 |       
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts

f()?.();
function f() {
  return function t() {};
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | f()?.();
    | ^ 'f' was used before it was defined.
  3 | function f() {
  4 |   return function t() {};
  5 | }
  6 |       
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts

alert(a?.b);
var a = { b: 5 };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | alert(a?.b);
    |       ^ 'a' was used before it was defined.
  3 | var a = { b: 5 };
  4 |       
```
