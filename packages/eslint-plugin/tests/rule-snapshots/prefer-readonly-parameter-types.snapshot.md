# prefer-readonly-parameter-types

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arg: string[]) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(arg: string[]) {}
    |              ^^^^^^^^^^^^^ Parameter should be a read only type.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arg: string[]) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(arg: string[]) {}
    |              ^^^^^^^^^^^^^ Parameter should be a read only type.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arg: Array<string>) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(arg: Array<string>) {}
    |              ^^^^^^^^^^^^^^^^^^ Parameter should be a read only type.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arg: [string]) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(arg: [string]) {}
    |              ^^^^^^^^^^^^^ Parameter should be a read only type.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arg: [string]) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(arg: [string]) {}
    |              ^^^^^^^^^^^^^ Parameter should be a read only type.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arg: readonly string[][]) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(arg: readonly string[][]) {}
    |              ^^^^^^^^^^^^^^^^^^^^^^^^ Parameter should be a read only type.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arg: Readonly<string[][]>) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(arg: Readonly<string[][]>) {}
    |              ^^^^^^^^^^^^^^^^^^^^^^^^^ Parameter should be a read only type.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arg: ReadonlyArray<Array<string>>) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(arg: ReadonlyArray<Array<string>>) {}
    |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Parameter should be a read only type.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arg: { foo: "" }) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(arg: { foo: "" }) {}
    |              ^^^^^^^^^^^^^^^^ Parameter should be a read only type.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arg: { foo: readonly string[] }) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(arg: { foo: readonly string[] }) {}
    |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Parameter should be a read only type.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arg: { foo(): void }) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(arg: { foo(): void }) {}
    |              ^^^^^^^^^^^^^^^^^^^^ Parameter should be a read only type.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

        function foo(arg: {
          readonly foo: {
            bar: string;
          };
        }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo(arg: {
    |                      ^^^^^^
> 3 |           readonly foo: {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |             bar: string;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |           };
    | ^^^^^^^^^^^^^^^^^^^^^^^^^
> 6 |         }) {}
    | ^^^^^^^^^^ Parameter should be a read only type.
  7 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

        function foo(arg: { [key: string]: string }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo(arg: { [key: string]: string }) {}
    |                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Parameter should be a read only type.
  3 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

        function foo(arg: { [key: number]: string }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo(arg: { [key: number]: string }) {}
    |                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Parameter should be a read only type.
  3 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

    interface Test {
      (): void
      property: boolean
    }
    function foo(arg: Test) {}
  
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |     interface Test {
  3 |       (): void
  4 |       property: boolean
  5 |     }
> 6 |     function foo(arg: Test) {}
    |                  ^^^^^^^^^ Parameter should be a read only type.
  7 |   
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

    type Test = (() => void) & {
      property: boolean
    };
    function foo(arg: Test) {}
  
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |     type Test = (() => void) & {
  3 |       property: boolean
  4 |     };
> 5 |     function foo(arg: Test) {}
    |                  ^^^^^^^^^ Parameter should be a read only type.
  6 |   
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test extends Array<string> {
          readonly property: boolean;
        }
        function foo(arg: Test) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test extends Array<string> {
  3 |           readonly property: boolean;
  4 |         }
> 5 |         function foo(arg: Test) {}
    |                      ^^^^^^^^^ Parameter should be a read only type.
  6 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test extends Array<string> {
          property: boolean;
        }
        function foo(arg: Test) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test extends Array<string> {
  3 |           property: boolean;
  4 |         }
> 5 |         function foo(arg: Test) {}
    |                      ^^^^^^^^^ Parameter should be a read only type.
  6 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

        class Foo {
          constructor(
            private arg1: string[],
            public arg2: string[],
            protected arg3: string[],
            readonly arg4: string[],
          ) {}
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class Foo {
   3 |           constructor(
>  4 |             private arg1: string[],
     |                     ^^^^^^^^^^^^^^ Parameter should be a read only type.
   5 |             public arg2: string[],
   6 |             protected arg3: string[],
   7 |             readonly arg4: string[],
   8 |           ) {}
   9 |         }
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class Foo {
   3 |           constructor(
   4 |             private arg1: string[],
>  5 |             public arg2: string[],
     |                    ^^^^^^^^^^^^^^ Parameter should be a read only type.
   6 |             protected arg3: string[],
   7 |             readonly arg4: string[],
   8 |           ) {}
   9 |         }
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class Foo {
   3 |           constructor(
   4 |             private arg1: string[],
   5 |             public arg2: string[],
>  6 |             protected arg3: string[],
     |                       ^^^^^^^^^^^^^^ Parameter should be a read only type.
   7 |             readonly arg4: string[],
   8 |           ) {}
   9 |         }
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class Foo {
   3 |           constructor(
   4 |             private arg1: string[],
   5 |             public arg2: string[],
   6 |             protected arg3: string[],
>  7 |             readonly arg4: string[],
     |                      ^^^^^^^^^^^^^^ Parameter should be a read only type.
   8 |           ) {}
   9 |         }
  10 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

        class Foo {
          constructor(
            private arg1: readonly string[],
            public arg2: readonly string[],
            protected arg3: readonly string[],
            readonly arg4: readonly string[],
            arg5: string[],
          ) {}
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class Foo {
   3 |           constructor(
   4 |             private arg1: readonly string[],
   5 |             public arg2: readonly string[],
   6 |             protected arg3: readonly string[],
   7 |             readonly arg4: readonly string[],
>  8 |             arg5: string[],
     |             ^^^^^^^^^^^^^^ Parameter should be a read only type.
   9 |           ) {}
  10 |         }
  11 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

        interface Foo {
          (arg: string[]): void;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Foo {
> 3 |           (arg: string[]): void;
    |            ^^^^^^^^^^^^^ Parameter should be a read only type.
  4 |         }
  5 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

        interface Foo {
          new (arg: string[]): void;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Foo {
> 3 |           new (arg: string[]): void;
    |                ^^^^^^^^^^^^^ Parameter should be a read only type.
  4 |         }
  5 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
class Foo { foo(arg: string[]): void; };
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | class Foo { foo(arg: string[]): void; };
    |                 ^^^^^^^^^^^^^ Parameter should be a read only type.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arg: string[]);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(arg: string[]);
    |              ^^^^^^^^^^^^^ Parameter should be a read only type.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = (arg: string[]) => void;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = (arg: string[]) => void;
    |             ^^^^^^^^^^^^^ Parameter should be a read only type.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

        interface Foo {
          foo(arg: string[]): void;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Foo {
> 3 |           foo(arg: string[]): void;
    |               ^^^^^^^^^^^^^ Parameter should be a read only type.
  4 |         }
  5 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

        interface Foo {
          prop: Foo;
        }
        function foo(arg: Foo) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Foo {
  3 |           prop: Foo;
  4 |         }
> 5 |         function foo(arg: Foo) {}
    |                      ^^^^^^^^ Parameter should be a read only type.
  6 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

        interface Foo {
          prop: Foo;
        }
        function foo(arg: Readonly<Foo>) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Foo {
  3 |           prop: Foo;
  4 |         }
> 5 |         function foo(arg: Readonly<Foo>) {}
    |                      ^^^^^^^^^^^^^^^^^^ Parameter should be a read only type.
  6 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

        interface Foo {
          prop: Bar;
        }
        interface Bar {
          readonly prop: Foo;
        }
        function foo(arg: Foo) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Foo {
  3 |           prop: Bar;
  4 |         }
  5 |         interface Bar {
  6 |           readonly prop: Foo;
  7 |         }
> 8 |         function foo(arg: Foo) {}
    |                      ^^^^^^^^ Parameter should be a read only type.
  9 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

        interface Foo {
          prop: Bar;
        }
        interface Bar {
          readonly prop: Foo;
        }
        function foo(arg: Readonly<Foo>) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Foo {
  3 |           prop: Bar;
  4 |         }
  5 |         interface Bar {
  6 |           readonly prop: Foo;
  7 |         }
> 8 |         function foo(arg: Readonly<Foo>) {}
    |                      ^^^^^^^^^^^^^^^^^^ Parameter should be a read only type.
  9 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

        interface Foo {
          prop: Readonly<Bar>;
        }
        interface Bar {
          prop: Readonly<Foo>;
        }
        function foo(arg: Foo) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Foo {
  3 |           prop: Readonly<Bar>;
  4 |         }
  5 |         interface Bar {
  6 |           prop: Readonly<Foo>;
  7 |         }
> 8 |         function foo(arg: Foo) {}
    |                      ^^^^^^^^ Parameter should be a read only type.
  9 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

        const sym = Symbol('sym');

        interface WithSymbol {
          [sym]: number;
        }

        const willNot = (foo: WithSymbol) => {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const sym = Symbol('sym');
  3 |
  4 |         interface WithSymbol {
  5 |           [sym]: number;
  6 |         }
  7 |
> 8 |         const willNot = (foo: WithSymbol) => {};
    |                          ^^^^^^^^^^^^^^^ Parameter should be a read only type.
  9 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

        type Callback<T> = (options: T) => void;

        declare const acceptsCallback: <T>(callback: Callback<T>) => void;

        interface CallbackOptions {
          prop: string;
        }

        acceptsCallback<CallbackOptions>((options: CallbackOptions) => {});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         type Callback<T> = (options: T) => void;
   3 |
   4 |         declare const acceptsCallback: <T>(callback: Callback<T>) => void;
   5 |
   6 |         interface CallbackOptions {
   7 |           prop: string;
   8 |         }
   9 |
> 10 |         acceptsCallback<CallbackOptions>((options: CallbackOptions) => {});
     |                                           ^^^^^^^^^^^^^^^^^^^^^^^^ Parameter should be a read only type.
  11 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

        type MyType = {
          readonly prop: string;
          method(): string;
        };
        function foo(arg: MyType) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type MyType = {
  3 |           readonly prop: string;
  4 |           method(): string;
  5 |         };
> 6 |         function foo(arg: MyType) {}
    |                      ^^^^^^^^^^^ Parameter should be a read only type.
  7 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

        type MyType<T> = {
          [K in keyof T]: 'cat' | 'dog' | T[K];
        };

        function method<A extends any[] = string[]>(value: MyType<A>) {
          return value;
        }

        method(['cat', 'dog']);
        method<'mouse'[]>(['cat', 'mouse']);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         type MyType<T> = {
   3 |           [K in keyof T]: 'cat' | 'dog' | T[K];
   4 |         };
   5 |
>  6 |         function method<A extends any[] = string[]>(value: MyType<A>) {
     |                                                     ^^^^^^^^^^^^^^^^ Parameter should be a read only type.
   7 |           return value;
   8 |         }
   9 |
  10 |         method(['cat', 'dog']);
  11 |         method<'mouse'[]>(['cat', 'mouse']);
  12 |       
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

        function foo(arg: RegExp) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo(arg: RegExp) {}
    |                      ^^^^^^^^^^^ Parameter should be a read only type.
  3 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

        interface Foo {
          readonly prop: RegExp;
        }

        function foo(arg: Foo) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Foo {
  3 |           readonly prop: RegExp;
  4 |         }
  5 |
> 6 |         function foo(arg: Foo) {}
    |                      ^^^^^^^^ Parameter should be a read only type.
  7 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

        interface Foo {
          readonly prop: RegExp;
        }

        function foo(arg: Foo) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Foo {
  3 |           readonly prop: RegExp;
  4 |         }
  5 |
> 6 |         function foo(arg: Foo) {}
    |                      ^^^^^^^^ Parameter should be a read only type.
  7 |       
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

        interface Foo {
          readonly prop: RegExp;
        }

        function foo(arg: Foo) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Foo {
  3 |           readonly prop: RegExp;
  4 |         }
  5 |
> 6 |         function foo(arg: Foo) {}
    |                      ^^^^^^^^ Parameter should be a read only type.
  7 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

        function foo(arg: RegExp) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo(arg: RegExp) {}
    |                      ^^^^^^^^^^^ Parameter should be a read only type.
  3 |       
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

        function foo(arg: RegExp) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo(arg: RegExp) {}
    |                      ^^^^^^^^^^^ Parameter should be a read only type.
  3 |       
```
