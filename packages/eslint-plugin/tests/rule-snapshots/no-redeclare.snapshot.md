# no-redeclare

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

var a = 3;
var a = 10;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 3;
> 3 | var a = 10;
    |     ^ 'a' is already defined.
  4 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

switch (foo) {
  case a:
    var b = 3;
  case b:
    var b = 4;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | switch (foo) {
  3 |   case a:
  4 |     var b = 3;
  5 |   case b:
> 6 |     var b = 4;
    |         ^ 'b' is already defined.
  7 | }
  8 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

var a = 3;
var a = 10;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 3;
> 3 | var a = 10;
    |     ^ 'a' is already defined.
  4 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

var a = {};
var a = [];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = {};
> 3 | var a = [];
    |     ^ 'a' is already defined.
  4 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

var a;
function a() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a;
> 3 | function a() {}
    |          ^ 'a' is already defined.
  4 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

function a() {}
function a() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function a() {}
> 3 | function a() {}
    |          ^ 'a' is already defined.
  4 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

var a = function () {};
var a = function () {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = function () {};
> 3 | var a = function () {};
    |     ^ 'a' is already defined.
  4 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

var a = function () {};
var a = new Date();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = function () {};
> 3 | var a = new Date();
    |     ^ 'a' is already defined.
  4 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

var a = 3;
var a = 10;
var a = 15;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 3;
> 3 | var a = 10;
    |     ^ 'a' is already defined.
  4 | var a = 15;
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 3;
  3 | var a = 10;
> 4 | var a = 15;
    |     ^ 'a' is already defined.
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

var a;
var a;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a;
> 3 | var a;
    |     ^ 'a' is already defined.
  4 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

export var a;
var a;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export var a;
> 3 | var a;
    |     ^ 'a' is already defined.
  4 |       
```

## Test #12

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
    |     ^^^^^^ 'Object' is already defined as a built-in global variable.
```

## Test #13

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
    |     ^^^ 'top' is already defined as a built-in global variable.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

var a;
var { a = 0, b: Object = 0 } = {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a;
> 3 | var { a = 0, b: Object = 0 } = {};
    |       ^ 'a' is already defined.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a;
> 3 | var { a = 0, b: Object = 0 } = {};
    |                 ^^^^^^ 'Object' is already defined as a built-in global variable.
  4 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

var a;
var { a = 0, b: Object = 0 } = {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a;
> 3 | var { a = 0, b: Object = 0 } = {};
    |       ^ 'a' is already defined.
  4 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

var a;
var { a = 0, b: Object = 0 } = {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a;
> 3 | var { a = 0, b: Object = 0 } = {};
    |       ^ 'a' is already defined.
  4 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

var a;
var { a = 0, b: Object = 0 } = {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a;
> 3 | var { a = 0, b: Object = 0 } = {};
    |       ^ 'a' is already defined.
  4 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
/*global b:false*/ var b = 1;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /*global b:false*/ var b = 1;
    |                        ^ 'b' is already defined by a variable declaration.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

type T = 1;
type T = 2;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = 1;
> 3 | type T = 2;
    |      ^ 'T' is already defined.
  4 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

type NodeListOf = 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | type NodeListOf = 1;
    |      ^^^^^^^^^^ 'NodeListOf' is already defined as a built-in global variable.
  3 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

interface A {}
interface A {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface A {}
> 3 | interface A {}
    |           ^ 'A' is already defined.
  4 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

interface A {}
class A {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface A {}
> 3 | class A {}
    |       ^ 'A' is already defined.
  4 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

class A {}
namespace A {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {}
> 3 | namespace A {}
    |           ^ 'A' is already defined.
  4 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

interface A {}
class A {}
namespace A {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface A {}
> 3 | class A {}
    |       ^ 'A' is already defined.
  4 | namespace A {}
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface A {}
  3 | class A {}
> 4 | namespace A {}
    |           ^ 'A' is already defined.
  5 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

class A {}
class A {}
namespace A {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {}
> 3 | class A {}
    |       ^ 'A' is already defined.
  4 | namespace A {}
  5 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

function A() {}
namespace A {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function A() {}
> 3 | namespace A {}
    |           ^ 'A' is already defined.
  4 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

function A() {}
function A() {}
namespace A {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function A() {}
> 3 | function A() {}
    |          ^ 'A' is already defined.
  4 | namespace A {}
  5 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

function A() {}
class A {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function A() {}
> 3 | class A {}
    |       ^ 'A' is already defined.
  4 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

enum A {}
namespace A {}
enum A {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum A {}
  3 | namespace A {}
> 4 | enum A {}
    |      ^ 'A' is already defined.
  5 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

function A() {}
class A {}
namespace A {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function A() {}
> 3 | class A {}
    |       ^ 'A' is already defined.
  4 | namespace A {}
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | function A() {}
  3 | class A {}
> 4 | namespace A {}
    |           ^ 'A' is already defined.
  5 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

type something = string;
const something = 2;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type something = string;
> 3 | const something = 2;
    |       ^^^^^^^^^ 'something' is already defined.
  4 |       
```
