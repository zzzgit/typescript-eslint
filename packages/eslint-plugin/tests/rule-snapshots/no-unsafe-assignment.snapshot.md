# no-unsafe-assignment

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
const x = 1 as any;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = 1 as any;
    |       ^^^^^^^^^^^^ Unsafe assignment of an `any` value.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

const x = 1 as any,
  y = 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const x = 1 as any,
    |       ^^^^^^^^^^^^ Unsafe assignment of an `any` value.
  3 |   y = 1;
  4 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
function foo(a = 1 as any) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(a = 1 as any) {}
    |              ^^^^^^^^^^^^ Unsafe assignment of an `any` value.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(private a = 1 as any) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(private a = 1 as any) {}
    |                       ^^^^^^^^^^^^ Unsafe assignment of an `any` value.
  4 | }
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  private a = 1 as any;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   private a = 1 as any;
    |   ^^^^^^^^^^^^^^^^^^^^^ Unsafe assignment of an `any` value.
  4 | }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

const [x] = 1 as any;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const [x] = 1 as any;
    |       ^^^^^^^^^^^^^^ Unsafe assignment of an `any` value.
  3 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

const [x] = [] as any[];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const [x] = [] as any[];
    |       ^^^ Unsafe array destructuring of an `any` array value.
  3 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
const x: Set<string> = new Set<any>();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x: Set<string> = new Set<any>();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unsafe assignment of type Set<any> to a variable of type Set<string>.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
const x: Map<string, string> = new Map<string, any>();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x: Map<string, string> = new Map<string, any>();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unsafe assignment of type Map<string, any> to a variable of type Map<string, string>.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
const x: Set<string[]> = new Set<any[]>();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x: Set<string[]> = new Set<any[]>();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unsafe assignment of type Set<any[]> to a variable of type Set<string[]>.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
const x: Set<Set<Set<string>>> = new Set<Set<Set<any>>>();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x: Set<Set<Set<string>>> = new Set<Set<Set<any>>>();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unsafe assignment of type Set<Set<Set<any>>> to a variable of type Set<Set<Set<string>>>.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
const [x] = [1] as [any]
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const [x] = [1] as [any]
    |        ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
function foo([x] = [1] as [any]) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo([x] = [1] as [any]) {}
    |               ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
([x] = [1] as [any])
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ([x] = [1] as [any])
    |   ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
const [[[[x]]]] = [[[[1 as any]]]]
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const [[[[x]]]] = [[[[1 as any]]]]
    |           ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
function foo([[[[x]]]] = [[[[1 as any]]]]) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo([[[[x]]]] = [[[[1 as any]]]]) {}
    |                  ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
([[[[x]]]] = [[[[1 as any]]]])
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ([[[[x]]]] = [[[[1 as any]]]])
    |      ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
const [[[[x]]]] = [1 as any]
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const [[[[x]]]] = [1 as any]
    |        ^^^^^^^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
function foo([[[[x]]]] = [1 as any]) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo([[[[x]]]] = [1 as any]) {}
    |               ^^^^^^^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
const [{x}] = [{x: 1}] as [{x: any}]
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const [{x}] = [{x: 1}] as [{x: any}]
    |         ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
function foo([{x}] = [{x: 1}] as [{x: any}]) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo([{x}] = [{x: 1}] as [{x: any}]) {}
    |                ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
([{x}] = [{x: 1}] as [{x: any}])
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ([{x}] = [{x: 1}] as [{x: any}])
    |    ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
const [{["x"]: x}] = [{["x"]: 1}] as [{["x"]: any}]
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const [{["x"]: x}] = [{["x"]: 1}] as [{["x"]: any}]
    |                ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
function foo([{["x"]: x}] = [{["x"]: 1}] as [{["x"]: any}]) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo([{["x"]: x}] = [{["x"]: 1}] as [{["x"]: any}]) {}
    |                       ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
([{["x"]: x}] = [{["x"]: 1}] as [{["x"]: any}])
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ([{["x"]: x}] = [{["x"]: 1}] as [{["x"]: any}])
    |           ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
const [{[`x`]: x}] = [{[`x`]: 1}] as [{[`x`]: any}]
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const [{[`x`]: x}] = [{[`x`]: 1}] as [{[`x`]: any}]
    |                ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
function foo([{[`x`]: x}] = [{[`x`]: 1}] as [{[`x`]: any}]) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo([{[`x`]: x}] = [{[`x`]: 1}] as [{[`x`]: any}]) {}
    |                       ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
([{[`x`]: x}] = [{[`x`]: 1}] as [{[`x`]: any}])
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ([{[`x`]: x}] = [{[`x`]: 1}] as [{[`x`]: any}])
    |           ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
[[[[x]]]] = [1 as any];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | [[[[x]]]] = [1 as any];
    | ^^^^^^^^^^^^^^^^^^^^^^ Unsafe assignment of type [any] to a variable of type [[[[any]]]].
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

const x = [...(1 as any)];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const x = [...(1 as any)];
    |            ^^^^^^^^^^^^^ Unsafe spread of an `any` value in an array.
  3 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

const x = [...([] as any[])];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const x = [...([] as any[])];
    |            ^^^^^^^^^^^^^^^^ Unsafe spread of an `any` value in an array.
  3 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
const {x} = {x: 1} as {x: any}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const {x} = {x: 1} as {x: any}
    |        ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
function foo({x} = {x: 1} as {x: any}) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo({x} = {x: 1} as {x: any}) {}
    |               ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
({x} = {x: 1} as {x: any})
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ({x} = {x: 1} as {x: any})
    |   ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts
const {x: y} = {x: 1} as {x: any}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const {x: y} = {x: 1} as {x: any}
    |           ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts
function foo({x: y} = {x: 1} as {x: any}) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo({x: y} = {x: 1} as {x: any}) {}
    |                  ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts
({x: y} = {x: 1} as {x: any})
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ({x: y} = {x: 1} as {x: any})
    |      ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts
const {x: {y}} = {x: {y: 1}} as {x: {y: any}}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const {x: {y}} = {x: {y: 1}} as {x: {y: any}}
    |            ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts
function foo({x: {y}} = {x: {y: 1}} as {x: {y: any}}) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo({x: {y}} = {x: {y: 1}} as {x: {y: any}}) {}
    |                   ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts
({x: {y}} = {x: {y: 1}} as {x: {y: any}})
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ({x: {y}} = {x: {y: 1}} as {x: {y: any}})
    |       ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts
const {x: [y]} = {x: {y: 1}} as {x: [any]}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const {x: [y]} = {x: {y: 1}} as {x: [any]}
    |            ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts
function foo({x: [y]} = {x: {y: 1}} as {x: [any]}) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo({x: [y]} = {x: {y: 1}} as {x: [any]}) {}
    |                   ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts
({x: [y]} = {x: {y: 1}} as {x: [any]})
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ({x: [y]} = {x: {y: 1}} as {x: [any]})
    |       ^ Unsafe array destructuring of a tuple element with an `any` value.
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts
const x = { y: 1 as any };
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = { y: 1 as any };
    |             ^^^^^^^^^^^ Unsafe assignment of an `any` value.
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts
const x = { y: { z: 1 as any } };
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = { y: { z: 1 as any } };
    |                  ^^^^^^^^^^^ Unsafe assignment of an `any` value.
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts
const x: { y: Set<Set<Set<string>>> } = { y: new Set<Set<Set<any>>>() };
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x: { y: Set<Set<Set<string>>> } = { y: new Set<Set<Set<any>>>() };
    |                                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unsafe assignment of type Set<Set<Set<any>>> to a variable of type Set<Set<Set<string>>>.
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts
const x = { ...(1 as any) };
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = { ...(1 as any) };
    |       ^^^^^^^^^^^^^^^^^^^^^ Unsafe assignment of an `any` value.
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```tsx

type Props = { a: string };
declare function Foo(props: Props): never;
<Foo a={1 as any} />;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
  1 |
  2 | type Props = { a: string };
  3 | declare function Foo(props: Props): never;
> 4 | <Foo a={1 as any} />;
    |         ^^^^^^^^ Unsafe assignment of an `any` value.
  5 |       
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  const bar = this;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   const bar = this;
    |         ^^^^^^^^^^ Unsafe assignment of an `any` value. `this` is typed as `any`.
You can try to fix this by turning on the `noImplicitThis` compiler option, or adding a `this` parameter to the function.
  4 | }
  5 |       
```
