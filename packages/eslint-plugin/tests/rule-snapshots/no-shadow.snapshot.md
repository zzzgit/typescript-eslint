# no-shadow

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

function a(x) {
  var b = function c() {
    var x = 'foo';
  };
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function a(x) {
  3 |   var b = function c() {
> 4 |     var x = 'foo';
    |         ^ 'x' is already declared in the upper scope on line 2 column 12.
  5 |   };
  6 | }
  7 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

var a = x => {
  var b = () => {
    var x = 'foo';
  };
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = x => {
  3 |   var b = () => {
> 4 |     var x = 'foo';
    |         ^ 'x' is already declared in the upper scope on line 2 column 9.
  5 |   };
  6 | };
  7 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

function a(x) {
  var b = function () {
    var x = 'foo';
  };
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function a(x) {
  3 |   var b = function () {
> 4 |     var x = 'foo';
    |         ^ 'x' is already declared in the upper scope on line 2 column 12.
  5 |   };
  6 | }
  7 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

var x = 1;
function a(x) {
  return ++x;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var x = 1;
> 3 | function a(x) {
    |            ^ 'x' is already declared in the upper scope on line 2 column 5.
  4 |   return ++x;
  5 | }
  6 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

var a = 3;
function b() {
  var a = 10;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 3;
  3 | function b() {
> 4 |   var a = 10;
    |       ^ 'a' is already declared in the upper scope on line 2 column 5.
  5 | }
  6 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

var a = 3;
function b() {
  var a = 10;
}
setTimeout(function () {
  b();
}, 0);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 3;
  3 | function b() {
> 4 |   var a = 10;
    |       ^ 'a' is already declared in the upper scope on line 2 column 5.
  5 | }
  6 | setTimeout(function () {
  7 |   b();
  8 | }, 0);
  9 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

var a = 3;
function b() {
  var a = 10;
  var b = 0;
}
setTimeout(function () {
  b();
}, 0);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | var a = 3;
   3 | function b() {
>  4 |   var a = 10;
     |       ^ 'a' is already declared in the upper scope on line 2 column 5.
   5 |   var b = 0;
   6 | }
   7 | setTimeout(function () {
   8 |   b();
   9 | }, 0);
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | var a = 3;
   3 | function b() {
   4 |   var a = 10;
>  5 |   var b = 0;
     |       ^ 'b' is already declared in the upper scope on line 3 column 10.
   6 | }
   7 | setTimeout(function () {
   8 |   b();
   9 | }, 0);
  10 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

var x = 1;
{
  let x = 2;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var x = 1;
  3 | {
> 4 |   let x = 2;
    |       ^ 'x' is already declared in the upper scope on line 2 column 5.
  5 | }
  6 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

let x = 1;
{
  const x = 2;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let x = 1;
  3 | {
> 4 |   const x = 2;
    |         ^ 'x' is already declared in the upper scope on line 2 column 5.
  5 | }
  6 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

{
  let a;
}
function a() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | {
> 3 |   let a;
    |       ^ 'a' is already declared in the upper scope on line 5 column 10.
  4 | }
  5 | function a() {}
  6 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

{
  const a = 0;
}
function a() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | {
> 3 |   const a = 0;
    |         ^ 'a' is already declared in the upper scope on line 5 column 10.
  4 | }
  5 | function a() {}
  6 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  let a;
}
function a() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   let a;
    |       ^ 'a' is already declared in the upper scope on line 5 column 10.
  4 | }
  5 | function a() {}
  6 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  var a;
}
function a() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   var a;
    |       ^ 'a' is already declared in the upper scope on line 5 column 10.
  4 | }
  5 | function a() {}
  6 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

function foo(a) {}
function a() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(a) {}
    |              ^ 'a' is already declared in the upper scope on line 3 column 10.
  3 | function a() {}
  4 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

{
  let a;
}
let a;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | {
> 3 |   let a;
    |       ^ 'a' is already declared in the upper scope on line 5 column 5.
  4 | }
  5 | let a;
  6 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

{
  let a;
}
var a;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | {
> 3 |   let a;
    |       ^ 'a' is already declared in the upper scope on line 5 column 5.
  4 | }
  5 | var a;
  6 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

{
  let a;
}
function a() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | {
> 3 |   let a;
    |       ^ 'a' is already declared in the upper scope on line 5 column 10.
  4 | }
  5 | function a() {}
  6 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

{
  const a = 0;
}
const a = 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | {
> 3 |   const a = 0;
    |         ^ 'a' is already declared in the upper scope on line 5 column 7.
  4 | }
  5 | const a = 1;
  6 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

{
  const a = 0;
}
var a;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | {
> 3 |   const a = 0;
    |         ^ 'a' is already declared in the upper scope on line 5 column 5.
  4 | }
  5 | var a;
  6 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

{
  const a = 0;
}
function a() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | {
> 3 |   const a = 0;
    |         ^ 'a' is already declared in the upper scope on line 5 column 10.
  4 | }
  5 | function a() {}
  6 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  let a;
}
let a;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   let a;
    |       ^ 'a' is already declared in the upper scope on line 5 column 5.
  4 | }
  5 | let a;
  6 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  let a;
}
var a;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   let a;
    |       ^ 'a' is already declared in the upper scope on line 5 column 5.
  4 | }
  5 | var a;
  6 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  let a;
}
function a() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   let a;
    |       ^ 'a' is already declared in the upper scope on line 5 column 10.
  4 | }
  5 | function a() {}
  6 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  var a;
}
let a;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   var a;
    |       ^ 'a' is already declared in the upper scope on line 5 column 5.
  4 | }
  5 | let a;
  6 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  var a;
}
var a;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   var a;
    |       ^ 'a' is already declared in the upper scope on line 5 column 5.
  4 | }
  5 | var a;
  6 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  var a;
}
function a() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   var a;
    |       ^ 'a' is already declared in the upper scope on line 5 column 10.
  4 | }
  5 | function a() {}
  6 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

function foo(a) {}
let a;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(a) {}
    |              ^ 'a' is already declared in the upper scope on line 3 column 5.
  3 | let a;
  4 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

function foo(a) {}
var a;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(a) {}
    |              ^ 'a' is already declared in the upper scope on line 3 column 5.
  3 | var a;
  4 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

function foo(a) {}
function a() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(a) {}
    |              ^ 'a' is already declared in the upper scope on line 3 column 10.
  3 | function a() {}
  4 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

(function a() {
  function a() {}
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function a() {
> 3 |   function a() {}
    |            ^ 'a' is already declared in the upper scope on line 2 column 11.
  4 | })();
  5 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

(function a() {
  class a {}
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function a() {
> 3 |   class a {}
    |         ^ 'a' is already declared in the upper scope on line 2 column 11.
  4 | })();
  5 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

(function a() {
  (function a() {});
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function a() {
> 3 |   (function a() {});
    |             ^ 'a' is already declared in the upper scope on line 2 column 11.
  4 | })();
  5 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

(function a() {
  (class a {});
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function a() {
> 3 |   (class a {});
    |          ^ 'a' is already declared in the upper scope on line 2 column 11.
  4 | })();
  5 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

(function () {
  var a = function (a) {};
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function () {
> 3 |   var a = function (a) {};
    |                     ^ 'a' is already declared in the upper scope on line 3 column 7.
  4 | })();
  5 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

(function () {
  var a = function () {
    function a() {}
  };
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function () {
  3 |   var a = function () {
> 4 |     function a() {}
    |              ^ 'a' is already declared in the upper scope on line 3 column 7.
  5 |   };
  6 | })();
  7 |       
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

(function () {
  var a = function () {
    class a {}
  };
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function () {
  3 |   var a = function () {
> 4 |     class a {}
    |           ^ 'a' is already declared in the upper scope on line 3 column 7.
  5 |   };
  6 | })();
  7 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

(function () {
  var a = function () {
    (function a() {});
  };
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function () {
  3 |   var a = function () {
> 4 |     (function a() {});
    |               ^ 'a' is already declared in the upper scope on line 3 column 7.
  5 |   };
  6 | })();
  7 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

(function () {
  var a = function () {
    (class a {});
  };
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function () {
  3 |   var a = function () {
> 4 |     (class a {});
    |            ^ 'a' is already declared in the upper scope on line 3 column 7.
  5 |   };
  6 | })();
  7 |       
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

(function () {
  var a = class {
    constructor() {
      class a {}
    }
  };
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function () {
  3 |   var a = class {
  4 |     constructor() {
> 5 |       class a {}
    |             ^ 'a' is already declared in the upper scope on line 3 column 7.
  6 |     }
  7 |   };
  8 | })();
  9 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  constructor() {
    var A;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
  3 |   constructor() {
> 4 |     var A;
    |         ^ 'A' is already declared in the upper scope on line 2 column 7.
  5 |   }
  6 | }
  7 |       
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

(function a() {
  function a() {
    function a() {}
  }
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function a() {
> 3 |   function a() {
    |            ^ 'a' is already declared in the upper scope on line 2 column 11.
  4 |     function a() {}
  5 |   }
  6 | })();
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function a() {
  3 |   function a() {
> 4 |     function a() {}
    |              ^ 'a' is already declared in the upper scope on line 3 column 12.
  5 |   }
  6 | })();
  7 |       
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  var Object = 0;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   var Object = 0;
    |       ^^^^^^ 'Object' is already a global variable.
  4 | }
  5 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  var top = 0;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   var top = 0;
    |       ^^^ 'top' is already a global variable.
  4 | }
  5 |       
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts
var Object = 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var Object = 0;
    |     ^^^^^^ 'Object' is already a global variable.
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts
var top = 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var top = 0;
    |     ^^^ 'top' is already a global variable.
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts
var Object = 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var Object = 0;
    |     ^^^^^^ 'Object' is already a global variable.
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts
var top = 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var top = 0;
    |     ^^^ 'top' is already a global variable.
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts

function foo(cb) {
  (function (cb) {
    cb(42);
  })(cb);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(cb) {
> 3 |   (function (cb) {
    |              ^^ 'cb' is already declared in the upper scope on line 2 column 14.
  4 |     cb(42);
  5 |   })(cb);
  6 | }
  7 |       
```
