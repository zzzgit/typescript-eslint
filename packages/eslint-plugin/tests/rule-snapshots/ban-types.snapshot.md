# ban-types

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
let a: String;
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: string;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: String;
    |        ^^^^^^ Don't use `String` as a type. Use string instead
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
let a: Object;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Object;
    |        ^^^^^^ Don't use `Object` as a type. Use '{}' instead.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
let a: Object;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Object;
    |        ^^^^^^ Don't use `Object` as a type. The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.
- If you want a type meaning "any object", you probably want `object` instead.
- If you want a type meaning "any value", you probably want `unknown` instead.
- If you really want a type meaning "any non-nullish value", you probably want `NonNullable<unknown>` instead.
```

#### Suggestions

##### Replace `Object` with `object`.

<!-- prettier-ignore -->
```ts
let a: object;
```

##### Replace `Object` with `unknown`.

<!-- prettier-ignore -->
```ts
let a: unknown;
```

##### Replace `Object` with `NonNullable<unknown>`.

<!-- prettier-ignore -->
```ts
let a: NonNullable<unknown>;
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
let aa: Foo;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let aa: Foo;
    |         ^^^ Don't use `Foo` as a type.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
let b: { c: String };
```

### Fix Output

<!-- prettier-ignore -->
```ts
let b: { c: string };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let b: { c: String };
    |             ^^^^^^ Don't use `String` as a type. Use string instead.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
function foo(a: String) {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo(a: string) {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(a: String) {}
    |                 ^^^^^^ Don't use `String` as a type. Use string instead.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
'a' as String;
```

### Fix Output

<!-- prettier-ignore -->
```ts
'a' as string;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | 'a' as String;
    |        ^^^^^^ Don't use `String` as a type. Use string instead.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
let c: F;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let c: F;
    |        ^ Don't use `F` as a type.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

class Foo<F = String> extends Bar<String> implements Baz<Object> {
  constructor(foo: String | Object) {}

  exit(): Array<String> {
    const foo: String = 1 as String;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo<F = string> extends Bar<string> implements Baz<Object> {
  constructor(foo: string | Object) {}

  exit(): Array<string> {
    const foo: string = 1 as string;
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | class Foo<F = String> extends Bar<String> implements Baz<Object> {
    |               ^^^^^^ Don't use `String` as a type. Use string instead.
  3 |   constructor(foo: String | Object) {}
  4 |
  5 |   exit(): Array<String> {
  6 |     const foo: String = 1 as String;
  7 |   }
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | class Foo<F = String> extends Bar<String> implements Baz<Object> {
    |                                   ^^^^^^ Don't use `String` as a type. Use string instead.
  3 |   constructor(foo: String | Object) {}
  4 |
  5 |   exit(): Array<String> {
  6 |     const foo: String = 1 as String;
  7 |   }
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | class Foo<F = String> extends Bar<String> implements Baz<Object> {
    |                                                          ^^^^^^ Don't use `Object` as a type. Use '{}' instead.
  3 |   constructor(foo: String | Object) {}
  4 |
  5 |   exit(): Array<String> {
  6 |     const foo: String = 1 as String;
  7 |   }
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo<F = String> extends Bar<String> implements Baz<Object> {
> 3 |   constructor(foo: String | Object) {}
    |                    ^^^^^^ Don't use `String` as a type. Use string instead.
  4 |
  5 |   exit(): Array<String> {
  6 |     const foo: String = 1 as String;
  7 |   }
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo<F = String> extends Bar<String> implements Baz<Object> {
> 3 |   constructor(foo: String | Object) {}
    |                             ^^^^^^ Don't use `Object` as a type. Use '{}' instead.
  4 |
  5 |   exit(): Array<String> {
  6 |     const foo: String = 1 as String;
  7 |   }
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo<F = String> extends Bar<String> implements Baz<Object> {
  3 |   constructor(foo: String | Object) {}
  4 |
> 5 |   exit(): Array<String> {
    |           ^^^^^ Don't use `Array` as a type.
  6 |     const foo: String = 1 as String;
  7 |   }
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo<F = String> extends Bar<String> implements Baz<Object> {
  3 |   constructor(foo: String | Object) {}
  4 |
> 5 |   exit(): Array<String> {
    |                 ^^^^^^ Don't use `String` as a type. Use string instead.
  6 |     const foo: String = 1 as String;
  7 |   }
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo<F = String> extends Bar<String> implements Baz<Object> {
  3 |   constructor(foo: String | Object) {}
  4 |
  5 |   exit(): Array<String> {
> 6 |     const foo: String = 1 as String;
    |                ^^^^^^ Don't use `String` as a type. Use string instead.
  7 |   }
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo<F = String> extends Bar<String> implements Baz<Object> {
  3 |   constructor(foo: String | Object) {}
  4 |
  5 |   exit(): Array<String> {
> 6 |     const foo: String = 1 as String;
    |                              ^^^^^^ Don't use `String` as a type. Use string instead.
  7 |   }
  8 | }
  9 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
let a: NS.Bad;
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: NS.Good;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: NS.Bad;
    |        ^^^^^^ Don't use `NS.Bad` as a type. Use NS.Good instead.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

let a: NS.Bad<Foo>;
let b: Foo<NS.Bad>;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

let a: NS.Good<Foo>;
let b: Foo<NS.Good>;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | let a: NS.Bad<Foo>;
    |        ^^^^^^ Don't use `NS.Bad` as a type. Use NS.Good instead.
  3 | let b: Foo<NS.Bad>;
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | let a: NS.Bad<Foo>;
> 3 | let b: Foo<NS.Bad>;
    |            ^^^^^^ Don't use `NS.Bad` as a type. Use NS.Good instead.
  4 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
let foo: {} = {};
```

### Fix Output

<!-- prettier-ignore -->
```ts
let foo: object = {};
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let foo: {} = {};
    |          ^^ Don't use `{}` as a type. Use object instead.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

let foo: {} = {};
let bar: {     } = {};
let baz: {
} = {};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

let foo: object = {};
let bar: object = {};
let baz: object = {};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | let foo: {} = {};
    |          ^^ Don't use `{}` as a type. Use object instead.
  3 | let bar: {     } = {};
  4 | let baz: {
  5 | } = {};
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo: {} = {};
> 3 | let bar: {     } = {};
    |          ^^^^^^^ Don't use `{}` as a type. Use object instead.
  4 | let baz: {
  5 | } = {};
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | let foo: {} = {};
  3 | let bar: {     } = {};
> 4 | let baz: {
    |          ^
> 5 | } = {};
    | ^^ Don't use `{}` as a type. Use object instead.
  6 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
let a: NS.Bad;
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: NS.Good;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: NS.Bad;
    |        ^^^^^^ Don't use `NS.Bad` as a type. Use NS.Good instead.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
let a: Foo<   F   >;
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Foo<   T   >;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Foo<   F   >;
    |               ^ Don't use `F` as a type. Use T instead.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Bar<any>;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Bar<any>;
    |            ^^^^^^^^ Don't use `Bar<any>` as a type. Don't use `any` as a type parameter to `Bar`
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = Bar<A,B>;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = Bar<A,B>;
    |            ^^^^^^^^ Don't use `Bar<A,B>` as a type. Don't pass `A, B` as parameters to `Bar`
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
let a: [];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: [];
    |        ^^ Don't use `[]` as a type. `[]` does only allow empty arrays.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
let a:  [ ] ;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a:  [ ] ;
    |         ^^^ Don't use `[]` as a type. `[]` does only allow empty arrays.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
let a: [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: any[];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: [];
    |        ^^ Don't use `[]` as a type. `[]` does only allow empty arrays.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
let a: [[]];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: [[]];
    |         ^^ Don't use `[]` as a type. `[]` does only allow empty arrays.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
let a: Foo;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Foo;
    |        ^^^ Don't use `Foo` as a type.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
function foo(x: bigint) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(x: bigint) {}
    |                 ^^^^^^ Don't use `bigint` as a type.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
function foo(x: boolean) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(x: boolean) {}
    |                 ^^^^^^^ Don't use `boolean` as a type.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
function foo(x: never) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(x: never) {}
    |                 ^^^^^ Don't use `never` as a type.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
function foo(x: null) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(x: null) {}
    |                 ^^^^ Don't use `null` as a type.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
function foo(x: number) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(x: number) {}
    |                 ^^^^^^ Don't use `number` as a type.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
function foo(x: object) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(x: object) {}
    |                 ^^^^^^ Don't use `object` as a type.
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
function foo(x: string) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(x: string) {}
    |                 ^^^^^^ Don't use `string` as a type.
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
function foo(x: symbol) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(x: symbol) {}
    |                 ^^^^^^ Don't use `symbol` as a type.
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
function foo(x: undefined) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(x: undefined) {}
    |                 ^^^^^^^^^ Don't use `undefined` as a type.
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
function foo(x: unknown) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(x: unknown) {}
    |                 ^^^^^^^ Don't use `unknown` as a type.
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
function foo(x: void) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(x: void) {}
    |                 ^^^^ Don't use `void` as a type.
```
