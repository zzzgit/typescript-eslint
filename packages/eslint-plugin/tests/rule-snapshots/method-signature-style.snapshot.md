# method-signature-style

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          f(a: string): number;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          f: (a: string) => number;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           f(a: string): number;
    |           ^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  4 |         }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          ['f'](a: boolean): void;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          ['f']: (a: boolean) => void;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           ['f'](a: boolean): void;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  4 |         }
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          f<T>(a: T): T;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          f: <T>(a: T) => T;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           f<T>(a: T): T;
    |           ^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  4 |         }
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          ['f']<T extends {}>(a: T, b: T): T;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          ['f']: <T extends {}>(a: T, b: T) => T;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           ['f']<T extends {}>(a: T, b: T): T;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  4 |         }
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          'f!'</* a */>(/* b */ x: any /* c */): void;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          'f!': </* a */>(/* b */ x: any /* c */) => void;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           'f!'</* a */>(/* b */ x: any /* c */): void;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  4 |         }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = { f(a: string): number };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = { f: (a: string) => number };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = { f(a: string): number };
    |                       ^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  3 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = { ['f']?(a: boolean): void };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = { ['f']?: (a: boolean) => void };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = { ['f']?(a: boolean): void };
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  3 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = { f?<T>(a?: T): T };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = { f?: <T>(a?: T) => T };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = { f?<T>(a?: T): T };
    |                       ^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  3 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = { ['f']?<T>(a: T, b: T): T };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = { ['f']?: <T>(a: T, b: T) => T };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = { ['f']?<T>(a: T, b: T): T };
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  3 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          f: (a: string) => number;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          f(a: string): number;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           f: (a: string) => number;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^ Function property signature is forbidden. Use a method shorthand instead.
  4 |         }
  5 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          ['f']: (a: boolean) => void;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          ['f'](a: boolean): void;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           ['f']: (a: boolean) => void;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Function property signature is forbidden. Use a method shorthand instead.
  4 |         }
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          f: <T>(a: T) => T;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          f<T>(a: T): T;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           f: <T>(a: T) => T;
    |           ^^^^^^^^^^^^^^^^^^ Function property signature is forbidden. Use a method shorthand instead.
  4 |         }
  5 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          ['f']: <T extends {}>(a: T, b: T) => T;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          ['f']<T extends {}>(a: T, b: T): T;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           ['f']: <T extends {}>(a: T, b: T) => T;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Function property signature is forbidden. Use a method shorthand instead.
  4 |         }
  5 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          'f!': </* a */>(/* b */ x: any /* c */) => void;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          'f!'</* a */>(/* b */ x: any /* c */): void;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           'f!': </* a */>(/* b */ x: any /* c */) => void;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Function property signature is forbidden. Use a method shorthand instead.
  4 |         }
  5 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = { f: (a: string) => number };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = { f(a: string): number };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = { f: (a: string) => number };
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^ Function property signature is forbidden. Use a method shorthand instead.
  3 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = { ['f']?: (a: boolean) => void };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = { ['f']?(a: boolean): void };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = { ['f']?: (a: boolean) => void };
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Function property signature is forbidden. Use a method shorthand instead.
  3 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = { f?: <T>(a?: T) => T };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = { f?<T>(a?: T): T };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = { f?: <T>(a?: T) => T };
    |                       ^^^^^^^^^^^^^^^^^^^ Function property signature is forbidden. Use a method shorthand instead.
  3 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = { ['f']?: <T>(a: T, b: T) => T };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = { ['f']?<T>(a: T, b: T): T };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = { ['f']?: <T>(a: T, b: T) => T };
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Function property signature is forbidden. Use a method shorthand instead.
  3 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  semi(arg: string): void;
  comma(arg: string): void,
  none(arg: string): void
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
  semi: (arg: string) => void;
  comma: (arg: string) => void,
  none: (arg: string) => void
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |   semi(arg: string): void;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  4 |   comma(arg: string): void,
  5 |   none(arg: string): void
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   semi(arg: string): void;
> 4 |   comma(arg: string): void,
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  5 |   none(arg: string): void
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   semi(arg: string): void;
  4 |   comma(arg: string): void,
> 5 |   none(arg: string): void
    |   ^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  6 | }
  7 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  semi: (arg: string) => void;
  comma: (arg: string) => void,
  none: (arg: string) => void
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
  semi(arg: string): void;
  comma(arg: string): void,
  none(arg: string): void
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |   semi: (arg: string) => void;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Function property signature is forbidden. Use a method shorthand instead.
  4 |   comma: (arg: string) => void,
  5 |   none: (arg: string) => void
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   semi: (arg: string) => void;
> 4 |   comma: (arg: string) => void,
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Function property signature is forbidden. Use a method shorthand instead.
  5 |   none: (arg: string) => void
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   semi: (arg: string) => void;
  4 |   comma: (arg: string) => void,
> 5 |   none: (arg: string) => void
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Function property signature is forbidden. Use a method shorthand instead.
  6 | }
  7 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  x(
    args: Pick<
      Bar,
      'one' | 'two' | 'three'
    >,
  ): Baz;
  y(
    foo: string,
    bar: number,
  ): void;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
  x: (
    args: Pick<
      Bar,
      'one' | 'two' | 'three'
    >,
  ) => Baz;
  y: (
    foo: string,
    bar: number,
  ) => void;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
>  3 |   x(
     |   ^^
>  4 |     args: Pick<
     | ^^^^^^^^^^^^^^^
>  5 |       Bar,
     | ^^^^^^^^^^^^^^^
>  6 |       'one' | 'two' | 'three'
     | ^^^^^^^^^^^^^^^
>  7 |     >,
     | ^^^^^^^^^^^^^^^
>  8 |   ): Baz;
     | ^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
   9 |   y(
  10 |     foo: string,
  11 |     bar: number,
  12 |   ): void;
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 |   x(
   4 |     args: Pick<
   5 |       Bar,
   6 |       'one' | 'two' | 'three'
   7 |     >,
   8 |   ): Baz;
>  9 |   y(
     |   ^^
> 10 |     foo: string,
     | ^^^^^^^^^^^^^^^^
> 11 |     bar: number,
     | ^^^^^^^^^^^^^^^^
> 12 |   ): void;
     | ^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  13 | }
  14 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  foo(): one;
  foo(): two;
  foo(): three;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
  foo: (() => one) & (() => two) & (() => three);
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |   foo(): one;
    |   ^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  4 |   foo(): two;
  5 |   foo(): three;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   foo(): one;
> 4 |   foo(): two;
    |   ^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  5 |   foo(): three;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   foo(): one;
  4 |   foo(): two;
> 5 |   foo(): three;
    |   ^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  6 | }
  7 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  foo(bar: string): one;
  foo(bar: number, baz: string): two;
  foo(): three;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
  foo: ((bar: string) => one) & ((bar: number, baz: string) => two) & (() => three);
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |   foo(bar: string): one;
    |   ^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  4 |   foo(bar: number, baz: string): two;
  5 |   foo(): three;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   foo(bar: string): one;
> 4 |   foo(bar: number, baz: string): two;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  5 |   foo(): three;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   foo(bar: string): one;
  4 |   foo(bar: number, baz: string): two;
> 5 |   foo(): three;
    |   ^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  6 | }
  7 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  [foo](bar: string): one;
  [foo](bar: number, baz: string): two;
  [foo](): three;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
  [foo]: ((bar: string) => one) & ((bar: number, baz: string) => two) & (() => three);
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |   [foo](bar: string): one;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  4 |   [foo](bar: number, baz: string): two;
  5 |   [foo](): three;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   [foo](bar: string): one;
> 4 |   [foo](bar: number, baz: string): two;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  5 |   [foo](): three;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   [foo](bar: string): one;
  4 |   [foo](bar: number, baz: string): two;
> 5 |   [foo](): three;
    |   ^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  6 | }
  7 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  [foo](bar: string): one;
  [foo](bar: number, baz: string): two;
  [foo](): three;
  bar(arg: string): void;
  bar(baz: number): Foo;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
  [foo]: ((bar: string) => one) & ((bar: number, baz: string) => two) & (() => three);
  bar: ((arg: string) => void) & ((baz: number) => Foo);
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |   [foo](bar: string): one;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  4 |   [foo](bar: number, baz: string): two;
  5 |   [foo](): three;
  6 |   bar(arg: string): void;
  7 |   bar(baz: number): Foo;
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   [foo](bar: string): one;
> 4 |   [foo](bar: number, baz: string): two;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  5 |   [foo](): three;
  6 |   bar(arg: string): void;
  7 |   bar(baz: number): Foo;
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   [foo](bar: string): one;
  4 |   [foo](bar: number, baz: string): two;
> 5 |   [foo](): three;
    |   ^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  6 |   bar(arg: string): void;
  7 |   bar(baz: number): Foo;
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   [foo](bar: string): one;
  4 |   [foo](bar: number, baz: string): two;
  5 |   [foo](): three;
> 6 |   bar(arg: string): void;
    |   ^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  7 |   bar(baz: number): Foo;
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   [foo](bar: string): one;
  4 |   [foo](bar: number, baz: string): two;
  5 |   [foo](): three;
  6 |   bar(arg: string): void;
> 7 |   bar(baz: number): Foo;
    |   ^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  8 | }
  9 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

        declare global {
          namespace jest {
            interface Matchers<R, T> {
              // Add overloads specific to the DOM
              toHaveProp<K extends keyof DomPropsOf<T>>(name: K, value?: DomPropsOf<T>[K]): R;
              toHaveProps(props: Partial<DomPropsOf<T>>): R;
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
   2 |         declare global {
   3 |           namespace jest {
   4 |             interface Matchers<R, T> {
   5 |               // Add overloads specific to the DOM
>  6 |               toHaveProp<K extends keyof DomPropsOf<T>>(name: K, value?: DomPropsOf<T>[K]): R;
     |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
   7 |               toHaveProps(props: Partial<DomPropsOf<T>>): R;
   8 |             }
   9 |           }
  10 |         }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare global {
   3 |           namespace jest {
   4 |             interface Matchers<R, T> {
   5 |               // Add overloads specific to the DOM
   6 |               toHaveProp<K extends keyof DomPropsOf<T>>(name: K, value?: DomPropsOf<T>[K]): R;
>  7 |               toHaveProps(props: Partial<DomPropsOf<T>>): R;
     |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
   8 |             }
   9 |           }
  10 |         }
  11 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  foo(): one;
  foo(): two;
  foo(): three;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
  foo: (() => one) & (() => two) & (() => three);
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |   foo(): one;
    |   ^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  4 |   foo(): two;
  5 |   foo(): three;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   foo(): one;
> 4 |   foo(): two;
    |   ^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  5 |   foo(): three;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   foo(): one;
  4 |   foo(): two;
> 5 |   foo(): three;
    |   ^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  6 | }
  7 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

declare const Foo: {
  foo(): one;
  foo(): two;
  foo(): three;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare const Foo: {
  foo: (() => one) & (() => two) & (() => three);
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const Foo: {
> 3 |   foo(): one;
    |   ^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  4 |   foo(): two;
  5 |   foo(): three;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const Foo: {
  3 |   foo(): one;
> 4 |   foo(): two;
    |   ^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  5 |   foo(): three;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const Foo: {
  3 |   foo(): one;
  4 |   foo(): two;
> 5 |   foo(): three;
    |   ^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  6 | }
  7 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

interface MyInterface {
  methodReturningImplicitAny();
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface MyInterface {
  methodReturningImplicitAny: () => any;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface MyInterface {
> 3 |   methodReturningImplicitAny();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Shorthand method signature is forbidden. Use a function property instead.
  4 | }
  5 |       
```
