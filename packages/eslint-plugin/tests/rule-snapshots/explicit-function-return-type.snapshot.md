# explicit-function-return-type

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

function test(a: number, b: number) {
  return;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function test(a: number, b: number) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Missing return type on function.
  3 |   return;
  4 | }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

function test() {
  return;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function test() {
    | ^^^^^^^^^^^^^^^ Missing return type on function.
  3 |   return;
  4 | }
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

var fn = function () {
  return 1;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | var fn = function () {
    |          ^^^^^^^^^^^ Missing return type on function.
  3 |   return 1;
  4 | };
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

var arrowFn = () => 'test';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | var arrowFn = () => 'test';
    |               ^^^^^ Missing return type on function.
  3 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  constructor() {}
  get prop() {
    return 1;
  }
  set prop() {}
  method() {
    return;
  }
  arrow = () => 'arrow';
  private method() {
    return;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Test {
   3 |   constructor() {}
>  4 |   get prop() {
     |   ^^^^^^^^^^ Missing return type on function.
   5 |     return 1;
   6 |   }
   7 |   set prop() {}
   8 |   method() {
   9 |     return;
  10 |   }
  11 |   arrow = () => 'arrow';
  12 |   private method() {
  13 |     return;
  14 |   }
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Test {
   3 |   constructor() {}
   4 |   get prop() {
   5 |     return 1;
   6 |   }
   7 |   set prop() {}
>  8 |   method() {
     |   ^^^^^^^^ Missing return type on function.
   9 |     return;
  10 |   }
  11 |   arrow = () => 'arrow';
  12 |   private method() {
  13 |     return;
  14 |   }
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Test {
   3 |   constructor() {}
   4 |   get prop() {
   5 |     return 1;
   6 |   }
   7 |   set prop() {}
   8 |   method() {
   9 |     return;
  10 |   }
> 11 |   arrow = () => 'arrow';
     |           ^^^^^ Missing return type on function.
  12 |   private method() {
  13 |     return;
  14 |   }
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Test {
   3 |   constructor() {}
   4 |   get prop() {
   5 |     return 1;
   6 |   }
   7 |   set prop() {}
   8 |   method() {
   9 |     return;
  10 |   }
  11 |   arrow = () => 'arrow';
> 12 |   private method() {
     |   ^^^^^^^^^^^^^^^^ Missing return type on function.
  13 |     return;
  14 |   }
  15 | }
  16 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

function test() {
  return;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function test() {
    | ^^^^^^^^^^^^^^^ Missing return type on function.
  3 |   return;
  4 | }
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
const foo = () => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = () => {};
    |             ^^^^^ Missing return type on function.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
const foo = function () {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = function () {};
    |             ^^^^^^^^^^^ Missing return type on function.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
export default () => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export default () => {};
    |                ^^^^^ Missing return type on function.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
export default function () {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export default function () {}
    |                ^^^^^^^^^^^ Missing return type on function.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public a = () => {};
  public b = function () {};
  public c = function test() {};

  static d = () => {};
  static e = function () {};
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
>  3 |   public a = () => {};
     |              ^^^^^ Missing return type on function.
   4 |   public b = function () {};
   5 |   public c = function test() {};
   6 |
   7 |   static d = () => {};
   8 |   static e = function () {};
   9 | }
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public a = () => {};
>  4 |   public b = function () {};
     |              ^^^^^^^^^^^ Missing return type on function.
   5 |   public c = function test() {};
   6 |
   7 |   static d = () => {};
   8 |   static e = function () {};
   9 | }
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public a = () => {};
   4 |   public b = function () {};
>  5 |   public c = function test() {};
     |              ^^^^^^^^^^^^^^^ Missing return type on function.
   6 |
   7 |   static d = () => {};
   8 |   static e = function () {};
   9 | }
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public a = () => {};
   4 |   public b = function () {};
   5 |   public c = function test() {};
   6 |
>  7 |   static d = () => {};
     |              ^^^^^ Missing return type on function.
   8 |   static e = function () {};
   9 | }
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public a = () => {};
   4 |   public b = function () {};
   5 |   public c = function test() {};
   6 |
   7 |   static d = () => {};
>  8 |   static e = function () {};
     |              ^^^^^^^^^^^ Missing return type on function.
   9 | }
  10 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
var arrowFn = () => 'test';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var arrowFn = () => 'test';
    |               ^^^^^ Missing return type on function.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

var funcExpr = function () {
  return 'test';
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | var funcExpr = function () {
    |                ^^^^^^^^^^^ Missing return type on function.
  3 |   return 'test';
  4 | };
  5 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
const x = (() => {}) as Foo;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = (() => {}) as Foo;
    |            ^^^^^ Missing return type on function.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {}
const x = {
  foo: () => {},
} as Foo;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {}
  3 | const x = {
> 4 |   foo: () => {},
    |        ^^^^^ Missing return type on function.
  5 | } as Foo;
  6 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {}
const x: Foo = {
  foo: () => {},
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {}
  3 | const x: Foo = {
> 4 |   foo: () => {},
    |        ^^^^^ Missing return type on function.
  5 | };
  6 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
() => () => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | () => () => {};
    |       ^^^^^ Missing return type on function.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
() => function () {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | () => function () {};
    |       ^^^^^^^^^^^ Missing return type on function.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

() => {
  return () => {};
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | () => {
> 3 |   return () => {};
    |          ^^^^^ Missing return type on function.
  4 | };
  5 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

() => {
  return function () {};
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | () => {
> 3 |   return function () {};
    |          ^^^^^^^^^^^ Missing return type on function.
  4 | };
  5 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

function fn() {
  return () => {};
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function fn() {
> 3 |   return () => {};
    |          ^^^^^ Missing return type on function.
  4 | }
  5 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

function fn() {
  return function () {};
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function fn() {
> 3 |   return function () {};
    |          ^^^^^^^^^^^ Missing return type on function.
  4 | }
  5 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

function FunctionDeclaration() {
  return function FunctionExpression_Within_FunctionDeclaration() {
    return function FunctionExpression_Within_FunctionExpression() {
      return () => {
        // ArrowFunctionExpression_Within_FunctionExpression
        return () =>
          // ArrowFunctionExpression_Within_ArrowFunctionExpression
          () =>
            1; // ArrowFunctionExpression_Within_ArrowFunctionExpression_WithNoBody
      };
    };
  };
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | function FunctionDeclaration() {
   3 |   return function FunctionExpression_Within_FunctionDeclaration() {
   4 |     return function FunctionExpression_Within_FunctionExpression() {
   5 |       return () => {
   6 |         // ArrowFunctionExpression_Within_FunctionExpression
   7 |         return () =>
   8 |           // ArrowFunctionExpression_Within_ArrowFunctionExpression
>  9 |           () =>
     |           ^^^^^ Missing return type on function.
  10 |             1; // ArrowFunctionExpression_Within_ArrowFunctionExpression_WithNoBody
  11 |       };
  12 |     };
  13 |   };
  14 | }
  15 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

() => () => {
  return () => {
    return;
  };
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | () => () => {
> 3 |   return () => {
    |          ^^^^^ Missing return type on function.
  4 |     return;
  5 |   };
  6 | };
  7 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(arg: () => void): void;
foo(() => 1);
foo(() => {});
foo(() => null);
foo(() => true);
foo(() => '');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(arg: () => void): void;
> 3 | foo(() => 1);
    |     ^^^^^ Missing return type on function.
  4 | foo(() => {});
  5 | foo(() => null);
  6 | foo(() => true);
  7 | foo(() => '');
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(arg: () => void): void;
  3 | foo(() => 1);
> 4 | foo(() => {});
    |     ^^^^^ Missing return type on function.
  5 | foo(() => null);
  6 | foo(() => true);
  7 | foo(() => '');
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(arg: () => void): void;
  3 | foo(() => 1);
  4 | foo(() => {});
> 5 | foo(() => null);
    |     ^^^^^ Missing return type on function.
  6 | foo(() => true);
  7 | foo(() => '');
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(arg: () => void): void;
  3 | foo(() => 1);
  4 | foo(() => {});
  5 | foo(() => null);
> 6 | foo(() => true);
    |     ^^^^^ Missing return type on function.
  7 | foo(() => '');
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(arg: () => void): void;
  3 | foo(() => 1);
  4 | foo(() => {});
  5 | foo(() => null);
  6 | foo(() => true);
> 7 | foo(() => '');
    |     ^^^^^ Missing return type on function.
  8 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

class Accumulator {
  private count: number = 0;

  public accumulate(fn: () => number): void {
    this.count += fn();
  }
}

new Accumulator().accumulate(() => 1);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Accumulator {
   3 |   private count: number = 0;
   4 |
   5 |   public accumulate(fn: () => number): void {
   6 |     this.count += fn();
   7 |   }
   8 | }
   9 |
> 10 | new Accumulator().accumulate(() => 1);
     |                              ^^^^^ Missing return type on function.
  11 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
(() => true)();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (() => true)();
    |  ^^^^^ Missing return type on function.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(arg: { meth: () => number }): void;
foo({
  meth() {
    return 1;
  },
});
foo({
  meth: function () {
    return 1;
  },
});
foo({
  meth: () => {
    return 1;
  },
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | declare function foo(arg: { meth: () => number }): void;
   3 | foo({
>  4 |   meth() {
     |   ^^^^^^ Missing return type on function.
   5 |     return 1;
   6 |   },
   7 | });
   8 | foo({
   9 |   meth: function () {
  10 |     return 1;
  11 |   },
  12 | });
  13 | foo({
  14 |   meth: () => {
  15 |     return 1;
  16 |   },
  17 | });
  18 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | declare function foo(arg: { meth: () => number }): void;
   3 | foo({
   4 |   meth() {
   5 |     return 1;
   6 |   },
   7 | });
   8 | foo({
>  9 |   meth: function () {
     |         ^^^^^^^^^^^ Missing return type on function.
  10 |     return 1;
  11 |   },
  12 | });
  13 | foo({
  14 |   meth: () => {
  15 |     return 1;
  16 |   },
  17 | });
  18 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | declare function foo(arg: { meth: () => number }): void;
   3 | foo({
   4 |   meth() {
   5 |     return 1;
   6 |   },
   7 | });
   8 | foo({
   9 |   meth: function () {
  10 |     return 1;
  11 |   },
  12 | });
  13 | foo({
> 14 |   meth: () => {
     |         ^^^^^ Missing return type on function.
  15 |     return 1;
  16 |   },
  17 | });
  18 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

type HigherOrderType = () => (arg1: string) => (arg2: number) => string;
const x: HigherOrderType = () => arg1 => arg2 => 'foo';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type HigherOrderType = () => (arg1: string) => (arg2: number) => string;
> 3 | const x: HigherOrderType = () => arg1 => arg2 => 'foo';
    |                                          ^^^^^^^ Missing return type on function.
  4 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

type HigherOrderType = () => (arg1: string) => (arg2: number) => string;
const x: HigherOrderType = () => arg1 => arg2 => 'foo';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type HigherOrderType = () => (arg1: string) => (arg2: number) => string;
> 3 | const x: HigherOrderType = () => arg1 => arg2 => 'foo';
    |                            ^^^^^ Missing return type on function.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type HigherOrderType = () => (arg1: string) => (arg2: number) => string;
> 3 | const x: HigherOrderType = () => arg1 => arg2 => 'foo';
    |                                  ^^^^^^^ Missing return type on function.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type HigherOrderType = () => (arg1: string) => (arg2: number) => string;
> 3 | const x: HigherOrderType = () => arg1 => arg2 => 'foo';
    |                                          ^^^^^^^ Missing return type on function.
  4 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

const func = (value: number) => ({ type: 'X', value } as any);
const func = (value: number) => ({ type: 'X', value } as Action);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const func = (value: number) => ({ type: 'X', value } as any);
    |              ^^^^^^^^^^^^^^^^^^ Missing return type on function.
  3 | const func = (value: number) => ({ type: 'X', value } as Action);
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const func = (value: number) => ({ type: 'X', value } as any);
> 3 | const func = (value: number) => ({ type: 'X', value } as Action);
    |              ^^^^^^^^^^^^^^^^^^ Missing return type on function.
  4 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

const func = (value: number) => ({ type: 'X', value } as const);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const func = (value: number) => ({ type: 'X', value } as const);
    |              ^^^^^^^^^^^^^^^^^^ Missing return type on function.
  3 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
const log = (message: string) => void console.log(message);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const log = (message: string) => void console.log(message);
    |             ^^^^^^^^^^^^^^^^^^^^ Missing return type on function.
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

        const log = (message: string) => {
          void console.log(message);
        };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const log = (message: string) => {
    |                     ^^^^^^^^^^^^^^^^^^^^ Missing return type on function.
  3 |           void console.log(message);
  4 |         };
  5 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts
const log = <A>(a: A) => a;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const log = <A>(a: A) => a;
    |             ^^^^^^^^^^^^ Missing return type on function.
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

function log<A>(a: A) {
  return a;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function log<A>(a: A) {
    | ^^^^^^^^^^^^^^^^^^^^^ Missing return type on function.
  3 |   return a;
  4 | }
  5 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

const log = function <A>(a: A) {
  return a;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const log = function <A>(a: A) {
    |             ^^^^^^^^^^^^^^^^^^ Missing return type on function.
  3 |   return a;
  4 | };
  5 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

function hoge() {
  return;
}
const foo = () => {
  return;
};
const baz = function () {
  return;
};
let [test, test] = function () {
  return;
};
class X {
  [test] = function () {
    return;
  };
}
const x = {
  1: function () {
    reutrn;
  },
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 | function hoge() {
     | ^^^^^^^^^^^^^^^ Missing return type on function.
   3 |   return;
   4 | }
   5 | const foo = () => {
   6 |   return;
   7 | };
   8 | const baz = function () {
   9 |   return;
  10 | };
  11 | let [test, test] = function () {
  12 |   return;
  13 | };
  14 | class X {
  15 |   [test] = function () {
  16 |     return;
  17 |   };
  18 | }
  19 | const x = {
  20 |   1: function () {
  21 |     reutrn;
  22 |   },
  23 | };
  24 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function hoge() {
   3 |   return;
   4 | }
>  5 | const foo = () => {
     |             ^^^^^ Missing return type on function.
   6 |   return;
   7 | };
   8 | const baz = function () {
   9 |   return;
  10 | };
  11 | let [test, test] = function () {
  12 |   return;
  13 | };
  14 | class X {
  15 |   [test] = function () {
  16 |     return;
  17 |   };
  18 | }
  19 | const x = {
  20 |   1: function () {
  21 |     reutrn;
  22 |   },
  23 | };
  24 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function hoge() {
   3 |   return;
   4 | }
   5 | const foo = () => {
   6 |   return;
   7 | };
>  8 | const baz = function () {
     |             ^^^^^^^^^^^ Missing return type on function.
   9 |   return;
  10 | };
  11 | let [test, test] = function () {
  12 |   return;
  13 | };
  14 | class X {
  15 |   [test] = function () {
  16 |     return;
  17 |   };
  18 | }
  19 | const x = {
  20 |   1: function () {
  21 |     reutrn;
  22 |   },
  23 | };
  24 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function hoge() {
   3 |   return;
   4 | }
   5 | const foo = () => {
   6 |   return;
   7 | };
   8 | const baz = function () {
   9 |   return;
  10 | };
> 11 | let [test, test] = function () {
     |                    ^^^^^^^^^^^ Missing return type on function.
  12 |   return;
  13 | };
  14 | class X {
  15 |   [test] = function () {
  16 |     return;
  17 |   };
  18 | }
  19 | const x = {
  20 |   1: function () {
  21 |     reutrn;
  22 |   },
  23 | };
  24 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function hoge() {
   3 |   return;
   4 | }
   5 | const foo = () => {
   6 |   return;
   7 | };
   8 | const baz = function () {
   9 |   return;
  10 | };
  11 | let [test, test] = function () {
  12 |   return;
  13 | };
  14 | class X {
> 15 |   [test] = function () {
     |            ^^^^^^^^^^^ Missing return type on function.
  16 |     return;
  17 |   };
  18 | }
  19 | const x = {
  20 |   1: function () {
  21 |     reutrn;
  22 |   },
  23 | };
  24 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function hoge() {
   3 |   return;
   4 | }
   5 | const foo = () => {
   6 |   return;
   7 | };
   8 | const baz = function () {
   9 |   return;
  10 | };
  11 | let [test, test] = function () {
  12 |   return;
  13 | };
  14 | class X {
  15 |   [test] = function () {
  16 |     return;
  17 |   };
  18 | }
  19 | const x = {
> 20 |   1: function () {
     |      ^^^^^^^^^^^ Missing return type on function.
  21 |     reutrn;
  22 |   },
  23 | };
  24 |       
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

const ignoredName = 'notIgnoredName';
class Foo {
  [ignoredName]() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const ignoredName = 'notIgnoredName';
  3 | class Foo {
> 4 |   [ignoredName]() {}
    |   ^^^^^^^^^^^^^^^ Missing return type on function.
  5 | }
  6 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

const foo = (function () {
  return 'foo';
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const foo = (function () {
    |              ^^^^^^^^^^^ Missing return type on function.
  3 |   return 'foo';
  4 | })();
  5 |       
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

const foo = (function () {
  return () => {
    return 1;
  };
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = (function () {
> 3 |   return () => {
    |          ^^^^^ Missing return type on function.
  4 |     return 1;
  5 |   };
  6 | })();
  7 |       
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

let foo = function () {
  return 'foo';
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | let foo = function () {
    |           ^^^^^^^^^^^ Missing return type on function.
  3 |   return 'foo';
  4 | };
  5 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

let foo = (() => () => {})()();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | let foo = (() => () => {})()();
    |                  ^^^^^ Missing return type on function.
  3 |       
```
