# no-unused-vars

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

function foox() {
  return foox();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foox() {
    |          ^^^^ 'foox' is defined but never used.
  3 |   return foox();
  4 | }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

(function () {
  function foox() {
    if (true) {
      return foox();
    }
  }
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function () {
> 3 |   function foox() {
    |            ^^^^ 'foox' is defined but never used.
  4 |     if (true) {
  5 |       return foox();
  6 |     }
  7 |   }
  8 | })();
  9 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
var a = 10;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var a = 10;
    |     ^ 'a' is assigned a value but never used.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

function f() {
  var a = 1;
  return function () {
    f((a *= 2));
  };
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function f() {
    |          ^ 'f' is defined but never used.
  3 |   var a = 1;
  4 |   return function () {
  5 |     f((a *= 2));
  6 |   };
  7 | }
  8 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

function f() {
  var a = 1;
  return function () {
    f(++a);
  };
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function f() {
    |          ^ 'f' is defined but never used.
  3 |   var a = 1;
  4 |   return function () {
  5 |     f(++a);
  6 |   };
  7 | }
  8 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
/*global a */
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /*global a */
    |          ^ 'a' is defined but never used.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

function foo(first, second) {
  doStuff(function () {
    console.log(second);
  });
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(first, second) {
    |          ^^^ 'foo' is defined but never used.
  3 |   doStuff(function () {
  4 |     console.log(second);
  5 |   });
  6 | }
  7 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
var a = 10;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var a = 10;
    |     ^ 'a' is assigned a value but never used.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

var a = 10;
a = 20;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 10;
> 3 | a = 20;
    | ^ 'a' is assigned a value but never used.
  4 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

var a = 10;
(function () {
  var a = 1;
  alert(a);
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | var a = 10;
    |     ^ 'a' is assigned a value but never used.
  3 | (function () {
  4 |   var a = 1;
  5 |   alert(a);
  6 | })();
  7 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

var a = 10,
  b = 0,
  c = null;
alert(a + b);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 10,
  3 |   b = 0,
> 4 |   c = null;
    |   ^ 'c' is assigned a value but never used.
  5 | alert(a + b);
  6 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

var a = 10,
  b = 0,
  c = null;
setTimeout(function () {
  var b = 2;
  alert(a + b + c);
}, 0);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 10,
> 3 |   b = 0,
    |   ^ 'b' is assigned a value but never used.
  4 |   c = null;
  5 | setTimeout(function () {
  6 |   var b = 2;
  7 |   alert(a + b + c);
  8 | }, 0);
  9 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

var a = 10,
  b = 0,
  c = null;
setTimeout(function () {
  var b = 2;
  var c = 2;
  alert(a + b + c);
}, 0);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | var a = 10,
>  3 |   b = 0,
     |   ^ 'b' is assigned a value but never used.
   4 |   c = null;
   5 | setTimeout(function () {
   6 |   var b = 2;
   7 |   var c = 2;
   8 |   alert(a + b + c);
   9 | }, 0);
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | var a = 10,
   3 |   b = 0,
>  4 |   c = null;
     |   ^ 'c' is assigned a value but never used.
   5 | setTimeout(function () {
   6 |   var b = 2;
   7 |   var c = 2;
   8 |   alert(a + b + c);
   9 | }, 0);
  10 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

function f() {
  var a = [];
  return a.map(function () {});
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function f() {
    |          ^ 'f' is defined but never used.
  3 |   var a = [];
  4 |   return a.map(function () {});
  5 | }
  6 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

function f() {
  var a = [];
  return a.map(function g() {});
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function f() {
    |          ^ 'f' is defined but never used.
  3 |   var a = [];
  4 |   return a.map(function g() {});
  5 | }
  6 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  function foo(x) {
    return x;
  }
  return function () {
    return foo;
  };
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 | function foo() {
     |          ^^^ 'foo' is defined but never used.
   3 |   function foo(x) {
   4 |     return x;
   5 |   }
   6 |   return function () {
   7 |     return foo;
   8 |   };
   9 | }
  10 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

function f() {
  var x;
  function a() {
    x = 42;
  }
  function b() {
    alert(x);
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 | function f() {
     |          ^ 'f' is defined but never used.
   3 |   var x;
   4 |   function a() {
   5 |     x = 42;
   6 |   }
   7 |   function b() {
   8 |     alert(x);
   9 |   }
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function f() {
   3 |   var x;
>  4 |   function a() {
     |            ^ 'a' is defined but never used.
   5 |     x = 42;
   6 |   }
   7 |   function b() {
   8 |     alert(x);
   9 |   }
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function f() {
   3 |   var x;
   4 |   function a() {
   5 |     x = 42;
   6 |   }
>  7 |   function b() {
     |            ^ 'b' is defined but never used.
   8 |     alert(x);
   9 |   }
  10 | }
  11 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

function f(a) {}
f();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function f(a) {}
    |            ^ 'a' is defined but never used.
  3 | f();
  4 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

function a(x, y, z) {
  return y;
}
a();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function a(x, y, z) {
    |                  ^ 'z' is defined but never used.
  3 |   return y;
  4 | }
  5 | a();
  6 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
var min = Math.min;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var min = Math.min;
    |     ^^^ 'min' is assigned a value but never used.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
var min = { min: 1 };
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var min = { min: 1 };
    |     ^^^ 'min' is assigned a value but never used.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

Foo.bar = function (baz) {
  return 1;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | Foo.bar = function (baz) {
    |                     ^^^ 'baz' is defined but never used.
  3 |   return 1;
  4 | };
  5 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
var min = { min: 1 };
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var min = { min: 1 };
    |     ^^^ 'min' is assigned a value but never used.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

function gg(baz, bar) {
  return baz;
}
gg();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function gg(baz, bar) {
    |                  ^^^ 'bar' is defined but never used.
  3 |   return baz;
  4 | }
  5 | gg();
  6 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

(function (foo, baz, bar) {
  return baz;
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (function (foo, baz, bar) {
    |                      ^^^ 'bar' is defined but never used.
  3 |   return baz;
  4 | })();
  5 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

(function (foo, baz, bar) {
  return baz;
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (function (foo, baz, bar) {
    |            ^^^ 'foo' is defined but never used.
  3 |   return baz;
  4 | })();
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (function (foo, baz, bar) {
    |                      ^^^ 'bar' is defined but never used.
  3 |   return baz;
  4 | })();
  5 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

(function z(foo) {
  var bar = 33;
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (function z(foo) {
    |             ^^^ 'foo' is defined but never used.
  3 |   var bar = 33;
  4 | })();
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function z(foo) {
> 3 |   var bar = 33;
    |       ^^^ 'bar' is assigned a value but never used.
  4 | })();
  5 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

(function z(foo) {
  z();
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (function z(foo) {
    |             ^^^ 'foo' is defined but never used.
  3 |   z();
  4 | })();
  5 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

function f() {
  var a = 1;
  return function () {
    f((a = 2));
  };
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function f() {
    |          ^ 'f' is defined but never used.
  3 |   var a = 1;
  4 |   return function () {
  5 |     f((a = 2));
  6 |   };
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | function f() {
> 3 |   var a = 1;
    |       ^ 'a' is assigned a value but never used.
  4 |   return function () {
  5 |     f((a = 2));
  6 |   };
  7 | }
  8 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
import x from 'y';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import x from 'y';
    |        ^ 'x' is defined but never used.
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

export function fn2({ x, y }) {
  console.log(x);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export function fn2({ x, y }) {
    |                          ^ 'y' is defined but never used.
  3 |   console.log(x);
  4 | }
  5 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

export function fn2(x, y) {
  console.log(x);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export function fn2(x, y) {
    |                        ^ 'y' is defined but never used.
  3 |   console.log(x);
  4 | }
  5 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

/*exported max*/ var max = 1,
  min = { min: 1 };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | /*exported max*/ var max = 1,
> 3 |   min = { min: 1 };
    |   ^^^ 'min' is assigned a value but never used.
  4 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
/*exported x*/ var { x, y } = z;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /*exported x*/ var { x, y } = z;
    |                         ^ 'y' is assigned a value but never used.
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

var _a;
var b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var _a;
> 3 | var b;
    |     ^ 'b' is defined but never used. Allowed unused vars must match /^_/u.
  4 |       
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

var a;
function foo() {
  var _b;
  var c_;
}
foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a;
  3 | function foo() {
  4 |   var _b;
> 5 |   var c_;
    |       ^^ 'c_' is defined but never used. Allowed unused vars must match /^_/u.
  6 | }
  7 | foo();
  8 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

function foo(a, _b) {}
foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(a, _b) {}
    |              ^ 'a' is defined but never used. Allowed unused args must match /^_/u.
  3 | foo();
  4 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

function foo(a, _b, c) {
  return a;
}
foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(a, _b, c) {
    |                     ^ 'c' is defined but never used. Allowed unused args must match /^_/u.
  3 |   return a;
  4 | }
  5 | foo();
  6 |       
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

function foo(_a) {}
foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(_a) {}
    |              ^^ '_a' is defined but never used. Allowed unused args must match /[iI]gnored/u.
  3 | foo();
  4 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts
var [firstItemIgnored, secondItem] = items;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var [firstItemIgnored, secondItem] = items;
    |                        ^^^^^^^^^^ 'secondItem' is assigned a value but never used. Allowed unused vars must match /[iI]gnored/u.
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

const array = ['a', 'b', 'c'];
const [a, _b, c] = array;
const newArray = [a, c];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const array = ['a', 'b', 'c'];
  3 | const [a, _b, c] = array;
> 4 | const newArray = [a, c];
    |       ^^^^^^^^ 'newArray' is assigned a value but never used.
  5 |       
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

const array = ['a', 'b', 'c', 'd', 'e'];
const [a, _b, c] = array;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const array = ['a', 'b', 'c', 'd', 'e'];
> 3 | const [a, _b, c] = array;
    |        ^ 'a' is assigned a value but never used. Allowed unused elements of array destructuring patterns must match /^_/u.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const array = ['a', 'b', 'c', 'd', 'e'];
> 3 | const [a, _b, c] = array;
    |               ^ 'c' is assigned a value but never used. Allowed unused elements of array destructuring patterns must match /^_/u.
  4 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

const array = ['a', 'b', 'c'];
const [a, _b, c] = array;
const fooArray = ['foo'];
const barArray = ['bar'];
const ignoreArray = ['ignore'];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const array = ['a', 'b', 'c'];
> 3 | const [a, _b, c] = array;
    |        ^ 'a' is assigned a value but never used. Allowed unused elements of array destructuring patterns must match /^_/u.
  4 | const fooArray = ['foo'];
  5 | const barArray = ['bar'];
  6 | const ignoreArray = ['ignore'];
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const array = ['a', 'b', 'c'];
> 3 | const [a, _b, c] = array;
    |               ^ 'c' is assigned a value but never used. Allowed unused elements of array destructuring patterns must match /^_/u.
  4 | const fooArray = ['foo'];
  5 | const barArray = ['bar'];
  6 | const ignoreArray = ['ignore'];
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const array = ['a', 'b', 'c'];
  3 | const [a, _b, c] = array;
> 4 | const fooArray = ['foo'];
    |       ^^^^^^^^ 'fooArray' is assigned a value but never used. Allowed unused vars must match /ignore/u.
  5 | const barArray = ['bar'];
  6 | const ignoreArray = ['ignore'];
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const array = ['a', 'b', 'c'];
  3 | const [a, _b, c] = array;
  4 | const fooArray = ['foo'];
> 5 | const barArray = ['bar'];
    |       ^^^^^^^^ 'barArray' is assigned a value but never used. Allowed unused vars must match /ignore/u.
  6 | const ignoreArray = ['ignore'];
  7 |       
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts

const array = [obj];
const [{ _a, foo }] = array;
console.log(foo);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const array = [obj];
> 3 | const [{ _a, foo }] = array;
    |          ^^ '_a' is assigned a value but never used.
  4 | console.log(foo);
  5 |       
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts

function foo([{ _a, bar }]) {
  bar;
}
foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo([{ _a, bar }]) {
    |                 ^^ '_a' is defined but never used.
  3 |   bar;
  4 | }
  5 | foo();
  6 |       
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts

let _a, b;
foo.forEach(item => {
  [a, b] = item;
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | let _a, b;
    |     ^^ '_a' is defined but never used.
  3 | foo.forEach(item => {
  4 |   [a, b] = item;
  5 | });
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | let _a, b;
    |         ^ 'b' is assigned a value but never used.
  3 | foo.forEach(item => {
  4 |   [a, b] = item;
  5 | });
  6 |       
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts

(function (obj) {
  var name;
  for (name in obj) {
    i();
    return;
  }
})({});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function (obj) {
  3 |   var name;
> 4 |   for (name in obj) {
    |        ^^^^ 'name' is assigned a value but never used.
  5 |     i();
  6 |     return;
  7 |   }
  8 | })({});
  9 |       
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts

(function (obj) {
  var name;
  for (name in obj) {
  }
})({});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function (obj) {
  3 |   var name;
> 4 |   for (name in obj) {
    |        ^^^^ 'name' is assigned a value but never used.
  5 |   }
  6 | })({});
  7 |       
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts

(function (obj) {
  for (var name in obj) {
  }
})({});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function (obj) {
> 3 |   for (var name in obj) {
    |            ^^^^ 'name' is assigned a value but never used.
  4 |   }
  5 | })({});
  6 |       
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts

/* global foobar, foo, bar */
foobar;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | /* global foobar, foo, bar */
    |                   ^^^ 'foo' is defined but never used.
  3 | foobar;
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | /* global foobar, foo, bar */
    |                        ^^^ 'bar' is defined but never used.
  3 | foobar;
  4 |       
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts

/* global foobar,
   foo,
   bar
 */
foobar;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | /* global foobar,
> 3 |    foo,
    |    ^^^ 'foo' is defined but never used.
  4 |    bar
  5 |  */
  6 | foobar;
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | /* global foobar,
  3 |    foo,
> 4 |    bar
    |    ^^^ 'bar' is defined but never used.
  5 |  */
  6 | foobar;
  7 |       
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts

const data = { type: 'coords', x: 1, y: 2 };
const { type, ...coords } = data;
console.log(coords);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const data = { type: 'coords', x: 1, y: 2 };
> 3 | const { type, ...coords } = data;
    |         ^^^^ 'type' is assigned a value but never used.
  4 | console.log(coords);
  5 |       
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts

const data = { type: 'coords', x: 2, y: 2 };
const { type, ...coords } = data;
console.log(type);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const data = { type: 'coords', x: 2, y: 2 };
> 3 | const { type, ...coords } = data;
    |                  ^^^^^^ 'coords' is assigned a value but never used.
  4 | console.log(type);
  5 |       
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts

let type, coords;
({ type, ...coords } = data);
console.log(type);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let type, coords;
> 3 | ({ type, ...coords } = data);
    |             ^^^^^^ 'coords' is assigned a value but never used.
  4 | console.log(type);
  5 |       
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts

const data = { type: 'coords', x: 3, y: 2 };
const { type, ...coords } = data;
console.log(type);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const data = { type: 'coords', x: 3, y: 2 };
> 3 | const { type, ...coords } = data;
    |                  ^^^^^^ 'coords' is assigned a value but never used.
  4 | console.log(type);
  5 |       
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts

const data = { vars: ['x', 'y'], x: 1, y: 2 };
const {
  vars: [x],
  ...coords
} = data;
console.log(coords);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const data = { vars: ['x', 'y'], x: 1, y: 2 };
  3 | const {
> 4 |   vars: [x],
    |          ^ 'x' is assigned a value but never used.
  5 |   ...coords
  6 | } = data;
  7 | console.log(coords);
  8 |       
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts

const data = { defaults: { x: 0 }, x: 1, y: 2 };
const {
  defaults: { x },
  ...coords
} = data;
console.log(coords);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const data = { defaults: { x: 0 }, x: 1, y: 2 };
  3 | const {
> 4 |   defaults: { x },
    |               ^ 'x' is assigned a value but never used.
  5 |   ...coords
  6 | } = data;
  7 | console.log(coords);
  8 |       
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts
({ a, ...rest }) => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ({ a, ...rest }) => {};
    |          ^^^^ 'rest' is defined but never used.
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts
/* global a$fooz,$foo */
a$fooz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /* global a$fooz,$foo */
    |                  ^^^^ '$foo' is defined but never used.
  2 | a$fooz;
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts
/* globals a$fooz, $ */
a$fooz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /* globals a$fooz, $ */
    |                    ^ '$' is defined but never used.
  2 | a$fooz;
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts
/*globals $foo*/
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /*globals $foo*/
    |           ^^^^ '$foo' is defined but never used.
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts
/* global global*/
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /* global global*/
    |           ^^^^^^ 'global' is defined but never used.
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts
/*global foo:true*/
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /*global foo:true*/
    |          ^^^ 'foo' is defined but never used.
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts
/*global 変数, 数*/
変数;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /*global 変数, 数*/
    |              ^ '数' is defined but never used.
  2 | 変数;
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts

/*global 𠮷𩸽, 𠮷*/
𠮷𩸽;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | /*global 𠮷𩸽, 𠮷*/
    |                ^^ '𠮷' is defined but never used.
  3 | 𠮷𩸽;
  4 |       
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts
export default function (a) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export default function (a) {}
    |                          ^ 'a' is defined but never used.
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts

export default function (a, b) {
  console.log(a);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export default function (a, b) {
    |                             ^ 'b' is defined but never used.
  3 |   console.log(a);
  4 | }
  5 |       
```

## Test #68

### Test Code

<!-- prettier-ignore -->
```ts
export default (function (a) {});
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export default (function (a) {});
    |                           ^ 'a' is defined but never used.
```

## Test #69

### Test Code

<!-- prettier-ignore -->
```ts

export default (function (a, b) {
  console.log(a);
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export default (function (a, b) {
    |                              ^ 'b' is defined but never used.
  3 |   console.log(a);
  4 | });
  5 |       
```

## Test #70

### Test Code

<!-- prettier-ignore -->
```ts
export default a => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export default a => {};
    |                ^ 'a' is defined but never used.
```

## Test #71

### Test Code

<!-- prettier-ignore -->
```ts

export default (a, b) => {
  console.log(a);
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export default (a, b) => {
    |                    ^ 'b' is defined but never used.
  3 |   console.log(a);
  4 | };
  5 |       
```

## Test #72

### Test Code

<!-- prettier-ignore -->
```ts

try {
} catch (err) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | try {
> 3 | } catch (err) {}
    |          ^^^ 'err' is defined but never used.
  4 |       
```

## Test #73

### Test Code

<!-- prettier-ignore -->
```ts

try {
} catch (err) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | try {
> 3 | } catch (err) {}
    |          ^^^ 'err' is defined but never used. Allowed unused args must match /^ignore/u.
  4 |       
```

## Test #74

### Test Code

<!-- prettier-ignore -->
```ts

try {
} catch (ignoreErr) {}
try {
} catch (err) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | try {
  3 | } catch (ignoreErr) {}
  4 | try {
> 5 | } catch (err) {}
    |          ^^^ 'err' is defined but never used. Allowed unused args must match /^ignore/u.
  6 |       
```

## Test #75

### Test Code

<!-- prettier-ignore -->
```ts

try {
} catch (error) {}
try {
} catch (err) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | try {
> 3 | } catch (error) {}
    |          ^^^^^ 'error' is defined but never used. Allowed unused args must match /^ignore/u.
  4 | try {
  5 | } catch (err) {}
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | try {
  3 | } catch (error) {}
  4 | try {
> 5 | } catch (err) {}
    |          ^^^ 'err' is defined but never used. Allowed unused args must match /^ignore/u.
  6 |       
```

## Test #76

### Test Code

<!-- prettier-ignore -->
```ts

try {
} catch (err) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | try {
> 3 | } catch (err) {}
    |          ^^^ 'err' is defined but never used.
  4 |       
```

## Test #77

### Test Code

<!-- prettier-ignore -->
```ts

try {
} catch (err) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | try {
> 3 | } catch (err) {}
    |          ^^^ 'err' is defined but never used.
  4 |       
```

## Test #78

### Test Code

<!-- prettier-ignore -->
```ts

var a = 0;
a = a + 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 0;
> 3 | a = a + 1;
    | ^ 'a' is assigned a value but never used.
  4 |       
```

## Test #79

### Test Code

<!-- prettier-ignore -->
```ts

var a = 0;
a = a + a;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 0;
> 3 | a = a + a;
    | ^ 'a' is assigned a value but never used.
  4 |       
```

## Test #80

### Test Code

<!-- prettier-ignore -->
```ts

var a = 0;
a += a + 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 0;
> 3 | a += a + 1;
    | ^ 'a' is assigned a value but never used.
  4 |       
```

## Test #81

### Test Code

<!-- prettier-ignore -->
```ts

var a = 0;
a++;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 0;
> 3 | a++;
    | ^ 'a' is assigned a value but never used.
  4 |       
```

## Test #82

### Test Code

<!-- prettier-ignore -->
```ts

function foo(a) {
  a = a + 1;
}
foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(a) {
> 3 |   a = a + 1;
    |   ^ 'a' is assigned a value but never used.
  4 | }
  5 | foo();
  6 |       
```

## Test #83

### Test Code

<!-- prettier-ignore -->
```ts

function foo(a) {
  a += a + 1;
}
foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(a) {
> 3 |   a += a + 1;
    |   ^ 'a' is assigned a value but never used.
  4 | }
  5 | foo();
  6 |       
```

## Test #84

### Test Code

<!-- prettier-ignore -->
```ts

function foo(a) {
  a++;
}
foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(a) {
> 3 |   a++;
    |   ^ 'a' is assigned a value but never used.
  4 | }
  5 | foo();
  6 |       
```

## Test #85

### Test Code

<!-- prettier-ignore -->
```ts

var a = 3;
a = a * 5 + 6;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 3;
> 3 | a = a * 5 + 6;
    | ^ 'a' is assigned a value but never used.
  4 |       
```

## Test #86

### Test Code

<!-- prettier-ignore -->
```ts

var a = 2,
  b = 4;
a = a * 2 + b;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 2,
  3 |   b = 4;
> 4 | a = a * 2 + b;
    | ^ 'a' is assigned a value but never used.
  5 |       
```

## Test #87

### Test Code

<!-- prettier-ignore -->
```ts

function foo(cb) {
  cb = function (a) {
    cb(1 + a);
  };
  bar(not_cb);
}
foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(cb) {
> 3 |   cb = function (a) {
    |   ^^ 'cb' is assigned a value but never used.
  4 |     cb(1 + a);
  5 |   };
  6 |   bar(not_cb);
  7 | }
  8 | foo();
  9 |       
```

## Test #88

### Test Code

<!-- prettier-ignore -->
```ts

function foo(cb) {
  cb = (function (a) {
    return cb(1 + a);
  })();
}
foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(cb) {
> 3 |   cb = (function (a) {
    |   ^^ 'cb' is assigned a value but never used.
  4 |     return cb(1 + a);
  5 |   })();
  6 | }
  7 | foo();
  8 |       
```

## Test #89

### Test Code

<!-- prettier-ignore -->
```ts

function foo(cb) {
  cb =
    (function (a) {
      cb(1 + a);
    },
    cb);
}
foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | function foo(cb) {
>  3 |   cb =
     |   ^^ 'cb' is assigned a value but never used.
   4 |     (function (a) {
   5 |       cb(1 + a);
   6 |     },
   7 |     cb);
   8 | }
   9 | foo();
  10 |       
```

## Test #90

### Test Code

<!-- prettier-ignore -->
```ts

function foo(cb) {
  cb =
    (0,
    function (a) {
      cb(1 + a);
    });
}
foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | function foo(cb) {
>  3 |   cb =
     |   ^^ 'cb' is assigned a value but never used.
   4 |     (0,
   5 |     function (a) {
   6 |       cb(1 + a);
   7 |     });
   8 | }
   9 | foo();
  10 |       
```

## Test #91

### Test Code

<!-- prettier-ignore -->
```ts
while (a) {
    function foo(b) {
        b = b + 1;
    }
    foo()
}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 | while (a) {
  2 |     function foo(b) {
> 3 |         b = b + 1;
    |         ^ 'b' is assigned a value but never used.
  4 |     }
  5 |     foo()
  6 | }
```

## Test #92

### Test Code

<!-- prettier-ignore -->
```ts
(function (a, b, c) {});
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (function (a, b, c) {});
    |            ^ 'a' is defined but never used. Allowed unused args must match /c/u.
```

<!-- prettier-ignore -->
```ts
> 1 | (function (a, b, c) {});
    |               ^ 'b' is defined but never used. Allowed unused args must match /c/u.
```

## Test #93

### Test Code

<!-- prettier-ignore -->
```ts
(function (a, b, { c, d }) {});
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (function (a, b, { c, d }) {});
    |            ^ 'a' is defined but never used. Allowed unused args must match /[cd]/u.
```

<!-- prettier-ignore -->
```ts
> 1 | (function (a, b, { c, d }) {});
    |               ^ 'b' is defined but never used. Allowed unused args must match /[cd]/u.
```

## Test #94

### Test Code

<!-- prettier-ignore -->
```ts
(function (a, b, { c, d }) {});
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (function (a, b, { c, d }) {});
    |            ^ 'a' is defined but never used. Allowed unused args must match /c/u.
```

<!-- prettier-ignore -->
```ts
> 1 | (function (a, b, { c, d }) {});
    |               ^ 'b' is defined but never used. Allowed unused args must match /c/u.
```

<!-- prettier-ignore -->
```ts
> 1 | (function (a, b, { c, d }) {});
    |                       ^ 'd' is defined but never used. Allowed unused args must match /c/u.
```

## Test #95

### Test Code

<!-- prettier-ignore -->
```ts
(function (a, b, { c, d }) {});
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (function (a, b, { c, d }) {});
    |            ^ 'a' is defined but never used. Allowed unused args must match /d/u.
```

<!-- prettier-ignore -->
```ts
> 1 | (function (a, b, { c, d }) {});
    |               ^ 'b' is defined but never used. Allowed unused args must match /d/u.
```

<!-- prettier-ignore -->
```ts
> 1 | (function (a, b, { c, d }) {});
    |                    ^ 'c' is defined but never used. Allowed unused args must match /d/u.
```

## Test #96

### Test Code

<!-- prettier-ignore -->
```ts

/*global
foo*/
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | /*global
> 3 | foo*/
    | ^^^ 'foo' is defined but never used.
  4 |       
```

## Test #97

### Test Code

<!-- prettier-ignore -->
```ts

(function ({ a }, b) {
  return b;
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (function ({ a }, b) {
    |              ^ 'a' is defined but never used.
  3 |   return b;
  4 | })();
  5 |       
```

## Test #98

### Test Code

<!-- prettier-ignore -->
```ts

(function ({ a }, { b, c }) {
  return b;
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (function ({ a }, { b, c }) {
    |              ^ 'a' is defined but never used.
  3 |   return b;
  4 | })();
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (function ({ a }, { b, c }) {
    |                        ^ 'c' is defined but never used.
  3 |   return b;
  4 | })();
  5 |       
```

## Test #99

### Test Code

<!-- prettier-ignore -->
```ts

(function ({ a, b }, { c }) {
  return b;
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (function ({ a, b }, { c }) {
    |              ^ 'a' is defined but never used.
  3 |   return b;
  4 | })();
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (function ({ a, b }, { c }) {
    |                        ^ 'c' is defined but never used.
  3 |   return b;
  4 | })();
  5 |       
```

## Test #100

### Test Code

<!-- prettier-ignore -->
```ts

(function ([a], b) {
  return b;
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (function ([a], b) {
    |             ^ 'a' is defined but never used.
  3 |   return b;
  4 | })();
  5 |       
```

## Test #101

### Test Code

<!-- prettier-ignore -->
```ts

(function ([a], [b, c]) {
  return b;
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (function ([a], [b, c]) {
    |             ^ 'a' is defined but never used.
  3 |   return b;
  4 | })();
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (function ([a], [b, c]) {
    |                     ^ 'c' is defined but never used.
  3 |   return b;
  4 | })();
  5 |       
```

## Test #102

### Test Code

<!-- prettier-ignore -->
```ts

(function ([a, b], [c]) {
  return b;
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (function ([a, b], [c]) {
    |             ^ 'a' is defined but never used.
  3 |   return b;
  4 | })();
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | (function ([a, b], [c]) {
    |                     ^ 'c' is defined but never used.
  3 |   return b;
  4 | })();
  5 |       
```

## Test #103

### Test Code

<!-- prettier-ignore -->
```ts
(function (_a) {})();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (function (_a) {})();
    |            ^^ '_a' is defined but never used.
```

## Test #104

### Test Code

<!-- prettier-ignore -->
```ts
(function (_a) {})();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (function (_a) {})();
    |            ^^ '_a' is defined but never used.
```

## Test #105

### Test Code

<!-- prettier-ignore -->
```ts

var a = function () {
  a();
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | var a = function () {
    |     ^ 'a' is assigned a value but never used.
  3 |   a();
  4 | };
  5 |       
```

## Test #106

### Test Code

<!-- prettier-ignore -->
```ts

var a = function () {
  return function () {
    a();
  };
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | var a = function () {
    |     ^ 'a' is assigned a value but never used.
  3 |   return function () {
  4 |     a();
  5 |   };
  6 | };
  7 |       
```

## Test #107

### Test Code

<!-- prettier-ignore -->
```ts

const a = () => {
  a();
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const a = () => {
    |       ^ 'a' is assigned a value but never used.
  3 |   a();
  4 | };
  5 |       
```

## Test #108

### Test Code

<!-- prettier-ignore -->
```ts

const a = () => () => {
  a();
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const a = () => () => {
    |       ^ 'a' is assigned a value but never used.
  3 |   a();
  4 | };
  5 |       
```

## Test #109

### Test Code

<!-- prettier-ignore -->
```ts

let myArray = [1, 2, 3, 4].filter(x => x == 0);
myArray = myArray.filter(x => x == 1);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let myArray = [1, 2, 3, 4].filter(x => x == 0);
> 3 | myArray = myArray.filter(x => x == 1);
    | ^^^^^^^ 'myArray' is assigned a value but never used.
  4 |       
```

## Test #110

### Test Code

<!-- prettier-ignore -->
```ts

const a = 1;
a += 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const a = 1;
> 3 | a += 1;
    | ^ 'a' is assigned a value but never used.
  4 |       
```

## Test #111

### Test Code

<!-- prettier-ignore -->
```ts

var a = function () {
  a();
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | var a = function () {
    |     ^ 'a' is assigned a value but never used.
  3 |   a();
  4 | };
  5 |       
```

## Test #112

### Test Code

<!-- prettier-ignore -->
```ts

var a = function () {
  return function () {
    a();
  };
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | var a = function () {
    |     ^ 'a' is assigned a value but never used.
  3 |   return function () {
  4 |     a();
  5 |   };
  6 | };
  7 |       
```

## Test #113

### Test Code

<!-- prettier-ignore -->
```ts

const a = () => {
  a();
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const a = () => {
    |       ^ 'a' is assigned a value but never used.
  3 |   a();
  4 | };
  5 |       
```

## Test #114

### Test Code

<!-- prettier-ignore -->
```ts

const a = () => () => {
  a();
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const a = () => () => {
    |       ^ 'a' is assigned a value but never used.
  3 |   a();
  4 | };
  5 |       
```

## Test #115

### Test Code

<!-- prettier-ignore -->
```ts
let x = [];
x = x.concat(x);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 | let x = [];
> 2 | x = x.concat(x);
    | ^ 'x' is assigned a value but never used.
```

## Test #116

### Test Code

<!-- prettier-ignore -->
```ts

let a = 'a';
a = 10;
function foo() {
  a = 11;
  a = () => {
    a = 13;
  };
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | let a = 'a';
>  3 | a = 10;
     | ^ 'a' is assigned a value but never used.
   4 | function foo() {
   5 |   a = 11;
   6 |   a = () => {
   7 |     a = 13;
   8 |   };
   9 | }
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | let a = 'a';
   3 | a = 10;
>  4 | function foo() {
     |          ^^^ 'foo' is defined but never used.
   5 |   a = 11;
   6 |   a = () => {
   7 |     a = 13;
   8 |   };
   9 | }
  10 |       
```

## Test #117

### Test Code

<!-- prettier-ignore -->
```ts

let foo;
init();
foo = foo + 2;
function init() {
  foo = 1;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo;
  3 | init();
> 4 | foo = foo + 2;
    | ^^^ 'foo' is assigned a value but never used.
  5 | function init() {
  6 |   foo = 1;
  7 | }
  8 |       
```

## Test #118

### Test Code

<!-- prettier-ignore -->
```ts

function foo(n) {
  if (n < 2) return 1;
  return n * foo(n - 1);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(n) {
    |          ^^^ 'foo' is defined but never used.
  3 |   if (n < 2) return 1;
  4 |   return n * foo(n - 1);
  5 | }
  6 |       
```

## Test #119

### Test Code

<!-- prettier-ignore -->
```ts

let c = 'c';
c = 10;
function foo1() {
  c = 11;
  c = () => {
    c = 13;
  };
}
c = foo1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | let c = 'c';
   3 | c = 10;
   4 | function foo1() {
   5 |   c = 11;
   6 |   c = () => {
   7 |     c = 13;
   8 |   };
   9 | }
> 10 | c = foo1;
     | ^ 'c' is assigned a value but never used.
  11 |       
```
