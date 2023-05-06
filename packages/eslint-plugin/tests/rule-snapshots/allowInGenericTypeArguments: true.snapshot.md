# allowInGenericTypeArguments: true

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
function takeVoid(thing: void) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function takeVoid(thing: void) {}
    |                          ^^^^ void is only valid as a return type or generic type argument.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
const arrowGeneric = <T extends void>(arg: T) => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const arrowGeneric = <T extends void>(arg: T) => {};
    |                                 ^^^^ void is only valid as a return type or generic type argument.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
const arrowGeneric2 = <T extends void = void>(arg: T) => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const arrowGeneric2 = <T extends void = void>(arg: T) => {};
    |                                  ^^^^ void is only valid as a return type or generic type argument.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
function functionGeneric<T extends void>(arg: T) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function functionGeneric<T extends void>(arg: T) {}
    |                                    ^^^^ void is only valid as a return type or generic type argument.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
function functionGeneric2<T extends void = void>(arg: T) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function functionGeneric2<T extends void = void>(arg: T) {}
    |                                     ^^^^ void is only valid as a return type or generic type argument.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
declare function functionDeclaration<T extends void>(arg: T): void;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare function functionDeclaration<T extends void>(arg: T): void;
    |                                                ^^^^ void is only valid as a return type or generic type argument.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
declare function functionDeclaration2<T extends void = void>(arg: T): void;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare function functionDeclaration2<T extends void = void>(arg: T): void;
    |                                                 ^^^^ void is only valid as a return type or generic type argument.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
functionGeneric<void>(undefined);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | functionGeneric<void>(undefined);
    |                 ^^^^ void is only valid as a return type or generic type argument.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
declare function voidArray(args: void[]): void[];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare function voidArray(args: void[]): void[];
    |                                  ^^^^ void is only valid as a return type or generic type argument.
```

<!-- prettier-ignore -->
```ts
> 1 | declare function voidArray(args: void[]): void[];
    |                                           ^^^^ void is only valid as a return type or generic type argument.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
let value = undefined as void;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let value = undefined as void;
    |                          ^^^^ void is only valid as a return type or generic type argument.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
let value = <void>undefined;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let value = <void>undefined;
    |              ^^^^ void is only valid as a return type or generic type argument.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
function takesThings(...things: void[]): void {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function takesThings(...things: void[]): void {}
    |                                 ^^^^ void is only valid as a return type or generic type argument.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
type KeyofVoid = keyof void;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type KeyofVoid = keyof void;
    |                        ^^^^ void is only valid as a return type or generic type argument.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

        interface Interface {
          lambda: () => void;
          voidProp: void;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Interface {
  3 |           lambda: () => void;
> 4 |           voidProp: void;
    |                     ^^^^ void is only valid as a return type or generic type argument.
  5 |         }
  6 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

        class ClassName {
          private readonly propName: void;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class ClassName {
> 3 |           private readonly propName: void;
    |                                      ^^^^ void is only valid as a return type or generic type argument.
  4 |         }
  5 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
let letVoid: void;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let letVoid: void;
    |              ^^^^ void is only valid as a return type or generic type argument.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

        type VoidType = void;
        class OtherClassName {
          private propName: VoidType;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type VoidType = void;
    |                         ^^^^ void is only valid as a return type or generic type argument.
  3 |         class OtherClassName {
  4 |           private propName: VoidType;
  5 |         }
  6 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
type UnionType2 = string | number | void;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type UnionType2 = string | number | void;
    |                                     ^^^^ void is not valid as a constituent in a union type
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
type UnionType3 = string | ((number & any) | (string | void));
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type UnionType3 = string | ((number & any) | (string | void));
    |                                                        ^^^^ void is not valid as a constituent in a union type
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
declare function test(): number | void;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare function test(): number | void;
    |                                   ^^^^ void is not valid as a constituent in a union type
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
declare function test<T extends number | void>(): T;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare function test<T extends number | void>(): T;
    |                                          ^^^^ void is not valid as a constituent in a union type
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
type IntersectionType = string & number & void;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type IntersectionType = string & number & void;
    |                                           ^^^^ void is only valid as a return type or generic type argument.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

        type MappedType<T> = {
          [K in keyof T]: void;
        };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type MappedType<T> = {
> 3 |           [K in keyof T]: void;
    |                           ^^^^ void is only valid as a return type or generic type argument.
  4 |         };
  5 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

        type ConditionalType<T> = {
          [K in keyof T]: T[K] extends string ? void : string;
        };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type ConditionalType<T> = {
> 3 |           [K in keyof T]: T[K] extends string ? void : string;
    |                                                 ^^^^ void is only valid as a return type or generic type argument.
  4 |         };
  5 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
type ManyVoid = readonly void[];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type ManyVoid = readonly void[];
    |                          ^^^^ void is only valid as a return type or generic type argument.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arr: readonly void[]) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(arr: readonly void[]) {}
    |                            ^^^^ void is only valid as a return type or generic type argument.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
type invalidVoidUnion = void | Map<string, number>;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type invalidVoidUnion = void | Map<string, number>;
    |                         ^^^^ void is not valid as a constituent in a union type
```
