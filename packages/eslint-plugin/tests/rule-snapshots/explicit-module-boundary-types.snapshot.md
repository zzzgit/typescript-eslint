# explicit-module-boundary-types

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

export function test(a: number, b: number) {
  return;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export function test(a: number, b: number) {
    |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Missing return type on function.
  3 |   return;
  4 | }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

export function test() {
  return;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export function test() {
    |        ^^^^^^^^^^^^^^^ Missing return type on function.
  3 |   return;
  4 | }
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

export var fn = function () {
  return 1;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export var fn = function () {
    |                 ^^^^^^^^^^^ Missing return type on function.
  3 |   return 1;
  4 | };
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

export var arrowFn = () => 'test';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export var arrowFn = () => 'test';
    |                      ^^^^^ Missing return type on function.
  3 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

export class Test {
  constructor() {}
  get prop() {
    return 1;
  }
  set prop(value) {}
  method() {
    return;
  }
  arrow = arg => 'arrow';
  private method() {
    return;
  }
  abstract abs(arg);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | export class Test {
   3 |   constructor() {}
>  4 |   get prop() {
     |   ^^^^^^^^^^ Missing return type on function.
   5 |     return 1;
   6 |   }
   7 |   set prop(value) {}
   8 |   method() {
   9 |     return;
  10 |   }
  11 |   arrow = arg => 'arrow';
  12 |   private method() {
  13 |     return;
  14 |   }
  15 |   abstract abs(arg);
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | export class Test {
   3 |   constructor() {}
   4 |   get prop() {
   5 |     return 1;
   6 |   }
>  7 |   set prop(value) {}
     |            ^^^^^ Argument 'value' should be typed.
   8 |   method() {
   9 |     return;
  10 |   }
  11 |   arrow = arg => 'arrow';
  12 |   private method() {
  13 |     return;
  14 |   }
  15 |   abstract abs(arg);
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | export class Test {
   3 |   constructor() {}
   4 |   get prop() {
   5 |     return 1;
   6 |   }
   7 |   set prop(value) {}
>  8 |   method() {
     |   ^^^^^^^^ Missing return type on function.
   9 |     return;
  10 |   }
  11 |   arrow = arg => 'arrow';
  12 |   private method() {
  13 |     return;
  14 |   }
  15 |   abstract abs(arg);
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | export class Test {
   3 |   constructor() {}
   4 |   get prop() {
   5 |     return 1;
   6 |   }
   7 |   set prop(value) {}
   8 |   method() {
   9 |     return;
  10 |   }
> 11 |   arrow = arg => 'arrow';
     |           ^^^^^^ Missing return type on function.
  12 |   private method() {
  13 |     return;
  14 |   }
  15 |   abstract abs(arg);
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | export class Test {
   3 |   constructor() {}
   4 |   get prop() {
   5 |     return 1;
   6 |   }
   7 |   set prop(value) {}
   8 |   method() {
   9 |     return;
  10 |   }
> 11 |   arrow = arg => 'arrow';
     |           ^^^ Argument 'arg' should be typed.
  12 |   private method() {
  13 |     return;
  14 |   }
  15 |   abstract abs(arg);
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | export class Test {
   3 |   constructor() {}
   4 |   get prop() {
   5 |     return 1;
   6 |   }
   7 |   set prop(value) {}
   8 |   method() {
   9 |     return;
  10 |   }
  11 |   arrow = arg => 'arrow';
  12 |   private method() {
  13 |     return;
  14 |   }
> 15 |   abstract abs(arg);
     |               ^^^^^^ Missing return type on function.
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | export class Test {
   3 |   constructor() {}
   4 |   get prop() {
   5 |     return 1;
   6 |   }
   7 |   set prop(value) {}
   8 |   method() {
   9 |     return;
  10 |   }
  11 |   arrow = arg => 'arrow';
  12 |   private method() {
  13 |     return;
  14 |   }
> 15 |   abstract abs(arg);
     |                ^^^ Argument 'arg' should be typed.
  16 | }
  17 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

export class Foo {
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
   2 | export class Foo {
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
   2 | export class Foo {
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
   2 | export class Foo {
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
   2 | export class Foo {
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
   2 | export class Foo {
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

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
export default () => (true ? () => {} : (): void => {});
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export default () => (true ? () => {} : (): void => {});
    |                ^^^^^ Missing return type on function.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
export var arrowFn = () => 'test';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export var arrowFn = () => 'test';
    |                      ^^^^^ Missing return type on function.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

export var funcExpr = function () {
  return 'test';
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export var funcExpr = function () {
    |                       ^^^^^^^^^^^ Missing return type on function.
  3 |   return 'test';
  4 | };
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {}
export const x: Foo = {
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
  3 | export const x: Foo = {
> 4 |   foo: () => {},
    |        ^^^^^ Missing return type on function.
  5 | };
  6 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
export default () => () => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export default () => () => {};
    |                      ^^^^^ Missing return type on function.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
export default () => function () {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export default () => function () {};
    |                      ^^^^^^^^^^^ Missing return type on function.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

export default () => {
  return () => {};
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export default () => {
> 3 |   return () => {};
    |          ^^^^^ Missing return type on function.
  4 | };
  5 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

export default () => {
  return function () {};
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export default () => {
> 3 |   return function () {};
    |          ^^^^^^^^^^^ Missing return type on function.
  4 | };
  5 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

export function fn() {
  return () => {};
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export function fn() {
> 3 |   return () => {};
    |          ^^^^^ Missing return type on function.
  4 | }
  5 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

export function fn() {
  return function () {};
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export function fn() {
> 3 |   return function () {};
    |          ^^^^^^^^^^^ Missing return type on function.
  4 | }
  5 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

export function FunctionDeclaration() {
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
   2 | export function FunctionDeclaration() {
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

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

export default () => () => {
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
  2 | export default () => () => {
> 3 |   return () => {
    |          ^^^^^ Missing return type on function.
  4 |     return;
  5 |   };
  6 | };
  7 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

export const func1 = (value: number) => ({ type: 'X', value } as any);
export const func2 = (value: number) => ({ type: 'X', value } as Action);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export const func1 = (value: number) => ({ type: 'X', value } as any);
    |                      ^^^^^^^^^^^^^^^^^^ Missing return type on function.
  3 | export const func2 = (value: number) => ({ type: 'X', value } as Action);
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | export const func1 = (value: number) => ({ type: 'X', value } as any);
> 3 | export const func2 = (value: number) => ({ type: 'X', value } as Action);
    |                      ^^^^^^^^^^^^^^^^^^ Missing return type on function.
  4 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

export const func = (value: number) => ({ type: 'X', value } as const);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export const func = (value: number) => ({ type: 'X', value } as const);
    |                     ^^^^^^^^^^^^^^^^^^ Missing return type on function.
  3 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

export class Test {
  constructor() {}
  get prop() {
    return 1;
  }
  set prop() {}
  method() {
    return;
  }
  arrow = (): string => 'arrow';
  foo = () => 'bar';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | export class Test {
   3 |   constructor() {}
   4 |   get prop() {
   5 |     return 1;
   6 |   }
   7 |   set prop() {}
>  8 |   method() {
     |   ^^^^^^^^ Missing return type on function.
   9 |     return;
  10 |   }
  11 |   arrow = (): string => 'arrow';
  12 |   foo = () => 'bar';
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | export class Test {
   3 |   constructor() {}
   4 |   get prop() {
   5 |     return 1;
   6 |   }
   7 |   set prop() {}
   8 |   method() {
   9 |     return;
  10 |   }
  11 |   arrow = (): string => 'arrow';
> 12 |   foo = () => 'bar';
     |         ^^^^^ Missing return type on function.
  13 | }
  14 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

export class Test {
  constructor(public foo, private ...bar) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export class Test {
> 3 |   constructor(public foo, private ...bar) {}
    |                      ^^^ Argument 'foo' should be typed.
  4 | }
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | export class Test {
> 3 |   constructor(public foo, private ...bar) {}
    |                           ^^^^^^^^^^^^^^ Argument 'bar' should be typed.
  4 | }
  5 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

export const func1 = (value: number) => value;
export const func2 = (value: number) => value;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export const func1 = (value: number) => value;
    |                      ^^^^^^^^^^^^^^^^^^ Missing return type on function.
  3 | export const func2 = (value: number) => value;
  4 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

export function fn(test): string {
  return '123';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export function fn(test): string {
    |                    ^^^^ Argument 'test' should be typed.
  3 |   return '123';
  4 | }
  5 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

export const fn = (one: number, two): string => '123';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export const fn = (one: number, two): string => '123';
    |                                 ^^^ Argument 'two' should be typed.
  3 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

export function foo(outer) {
  return function (inner) {};
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export function foo(outer) {
    |                     ^^^^^ Argument 'outer' should be typed.
  3 |   return function (inner) {};
  4 | }
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | export function foo(outer) {
> 3 |   return function (inner) {};
    |          ^^^^^^^^^^^^^^^^ Missing return type on function.
  4 | }
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | export function foo(outer) {
> 3 |   return function (inner) {};
    |                    ^^^^^ Argument 'inner' should be typed.
  4 | }
  5 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
export const baz = arg => arg as const;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export const baz = arg => arg as const;
    |                    ^^^ Argument 'arg' should be typed.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

const foo = arg => arg;
export default foo;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const foo = arg => arg;
    |             ^^^^^^ Missing return type on function.
  3 | export default foo;
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const foo = arg => arg;
    |             ^^^ Argument 'arg' should be typed.
  3 | export default foo;
  4 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

const foo = arg => arg;
export = foo;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const foo = arg => arg;
    |             ^^^^^^ Missing return type on function.
  3 | export = foo;
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const foo = arg => arg;
    |             ^^^ Argument 'arg' should be typed.
  3 | export = foo;
  4 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

let foo = (arg: number): number => arg;
foo = arg => arg;
export default foo;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo = (arg: number): number => arg;
> 3 | foo = arg => arg;
    |       ^^^^^^ Missing return type on function.
  4 | export default foo;
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo = (arg: number): number => arg;
> 3 | foo = arg => arg;
    |       ^^^ Argument 'arg' should be typed.
  4 | export default foo;
  5 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

const foo = arg => arg;
export default [foo];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const foo = arg => arg;
    |             ^^^^^^ Missing return type on function.
  3 | export default [foo];
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const foo = arg => arg;
    |             ^^^ Argument 'arg' should be typed.
  3 | export default [foo];
  4 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

const foo = arg => arg;
export default { foo };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const foo = arg => arg;
    |             ^^^^^^ Missing return type on function.
  3 | export default { foo };
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const foo = arg => arg;
    |             ^^^ Argument 'arg' should be typed.
  3 | export default { foo };
  4 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

function foo(arg) {
  return arg;
}
export default foo;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(arg) {
    | ^^^^^^^^^^^^^^^^^ Missing return type on function.
  3 |   return arg;
  4 | }
  5 | export default foo;
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(arg) {
    |              ^^^ Argument 'arg' should be typed.
  3 |   return arg;
  4 | }
  5 | export default foo;
  6 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

function foo(arg) {
  return arg;
}
export default [foo];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(arg) {
    | ^^^^^^^^^^^^^^^^^ Missing return type on function.
  3 |   return arg;
  4 | }
  5 | export default [foo];
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(arg) {
    |              ^^^ Argument 'arg' should be typed.
  3 |   return arg;
  4 | }
  5 | export default [foo];
  6 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

function foo(arg) {
  return arg;
}
export default { foo };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(arg) {
    | ^^^^^^^^^^^^^^^^^ Missing return type on function.
  3 |   return arg;
  4 | }
  5 | export default { foo };
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo(arg) {
    |              ^^^ Argument 'arg' should be typed.
  3 |   return arg;
  4 | }
  5 | export default { foo };
  6 |       
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

const bar = function foo(arg) {
  return arg;
};
export default { bar };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const bar = function foo(arg) {
    |             ^^^^^^^^^^^^^^^^^ Missing return type on function.
  3 |   return arg;
  4 | };
  5 | export default { bar };
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const bar = function foo(arg) {
    |                          ^^^ Argument 'arg' should be typed.
  3 |   return arg;
  4 | };
  5 | export default { bar };
  6 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  bool(arg) {
    return arg;
  }
}
export default Foo;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   bool(arg) {
    |   ^^^^^^^^^ Missing return type on function.
  4 |     return arg;
  5 |   }
  6 | }
  7 | export default Foo;
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   bool(arg) {
    |        ^^^ Argument 'arg' should be typed.
  4 |     return arg;
  5 |   }
  6 | }
  7 | export default Foo;
  8 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  bool = arg => {
    return arg;
  };
}
export default Foo;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   bool = arg => {
    |          ^^^^^^ Missing return type on function.
  4 |     return arg;
  5 |   };
  6 | }
  7 | export default Foo;
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   bool = arg => {
    |          ^^^ Argument 'arg' should be typed.
  4 |     return arg;
  5 |   };
  6 | }
  7 | export default Foo;
  8 |       
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  bool = function (arg) {
    return arg;
  };
}
export default Foo;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   bool = function (arg) {
    |          ^^^^^^^^^^^^^^ Missing return type on function.
  4 |     return arg;
  5 |   };
  6 | }
  7 | export default Foo;
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   bool = function (arg) {
    |                    ^^^ Argument 'arg' should be typed.
  4 |     return arg;
  5 |   };
  6 | }
  7 | export default Foo;
  8 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  bool = function (arg) {
    return arg;
  };
}
export default [Foo];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   bool = function (arg) {
    |          ^^^^^^^^^^^^^^ Missing return type on function.
  4 |     return arg;
  5 |   };
  6 | }
  7 | export default [Foo];
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   bool = function (arg) {
    |                    ^^^ Argument 'arg' should be typed.
  4 |     return arg;
  5 |   };
  6 | }
  7 | export default [Foo];
  8 |       
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

let test = arg => argl;
test = (): void => {
  return;
};
export default test;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | let test = arg => argl;
    |            ^^^^^^ Missing return type on function.
  3 | test = (): void => {
  4 |   return;
  5 | };
  6 | export default test;
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | let test = arg => argl;
    |            ^^^ Argument 'arg' should be typed.
  3 | test = (): void => {
  4 |   return;
  5 | };
  6 | export default test;
  7 |       
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

let test = arg => argl;
test = (): void => {
  return;
};
export { test };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | let test = arg => argl;
    |            ^^^^^^ Missing return type on function.
  3 | test = (): void => {
  4 |   return;
  5 | };
  6 | export { test };
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | let test = arg => argl;
    |            ^^^ Argument 'arg' should be typed.
  3 | test = (): void => {
  4 |   return;
  5 | };
  6 | export { test };
  7 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

export const foo =
  () =>
  (a: string): ((n: number) => string) => {
    return function (n) {
      return String(n);
    };
  };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export const foo =
> 3 |   () =>
    |   ^^^^^ Missing return type on function.
  4 |   (a: string): ((n: number) => string) => {
  5 |     return function (n) {
  6 |       return String(n);
  7 |     };
  8 |   };
  9 |       
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts

export var arrowFn = () => () => {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export var arrowFn = () => () => {};
    |                            ^^^^^ Missing return type on function.
  3 |       
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts

export function fn() {
  return function () {};
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export function fn() {
> 3 |   return function () {};
    |          ^^^^^^^^^^^ Missing return type on function.
  4 | }
  5 |       
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts

export function foo(outer) {
  return function (inner): void {};
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export function foo(outer) {
    |                     ^^^^^ Argument 'outer' should be typed.
  3 |   return function (inner): void {};
  4 | }
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | export function foo(outer) {
> 3 |   return function (inner): void {};
    |                    ^^^^^ Argument 'inner' should be typed.
  4 | }
  5 |       
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts

export function foo({ foo }): void {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export function foo({ foo }): void {}
    |                     ^^^^^^^ Object pattern argument should be typed.
  3 |       
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts

export function foo([bar]): void {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export function foo([bar]): void {}
    |                     ^^^^^ Array pattern argument should be typed.
  3 |       
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts

export function foo(...bar): void {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export function foo(...bar): void {}
    |                     ^^^^^^ Argument 'bar' should be typed.
  3 |       
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts

export function foo(...[a]): void {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export function foo(...[a]): void {}
    |                     ^^^^^^ Rest argument should be typed.
  3 |       
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts

export function foo(foo: any): void {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export function foo(foo: any): void {}
    |                     ^^^^^^^^ Argument 'foo' should be typed with a non-any type.
  3 |       
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts

export function foo({ foo }: any): void {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export function foo({ foo }: any): void {}
    |                     ^^^^^^^^^^^^ Object pattern argument should be typed with a non-any type.
  3 |       
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts

export function foo([bar]: any): void {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export function foo([bar]: any): void {}
    |                     ^^^^^^^^^^ Array pattern argument should be typed with a non-any type.
  3 |       
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts

export function foo(...bar: any): void {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export function foo(...bar: any): void {}
    |                     ^^^^^^^^^^^ Argument 'bar' should be typed with a non-any type.
  3 |       
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts

export function foo(...[a]: any): void {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export function foo(...[a]: any): void {}
    |                     ^^^^^^^^^^^ Rest argument should be typed with a non-any type.
  3 |       
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts

export function func1() {
  return 0;
}
export const foo = {
  func2() {
    return 0;
  },
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 | export function func1() {
     |        ^^^^^^^^^^^^^^^^ Missing return type on function.
   3 |   return 0;
   4 | }
   5 | export const foo = {
   6 |   func2() {
   7 |     return 0;
   8 |   },
   9 | };
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | export function func1() {
   3 |   return 0;
   4 | }
   5 | export const foo = {
>  6 |   func2() {
     |   ^^^^^^^ Missing return type on function.
   7 |     return 0;
   8 |   },
   9 | };
  10 |       
```
