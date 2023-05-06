# consistent-type-imports

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

        import Foo from 'foo';
        let foo: Foo;
        type Bar = Foo;
        interface Baz {
          foo: Foo;
        }
        function fn(a: Foo): Foo {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type Foo from 'foo';
        let foo: Foo;
        type Bar = Foo;
        interface Baz {
          foo: Foo;
        }
        function fn(a: Foo): Foo {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import Foo from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |         let foo: Foo;
  4 |         type Bar = Foo;
  5 |         interface Baz {
  6 |           foo: Foo;
  7 |         }
  8 |         function fn(a: Foo): Foo {}
  9 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

        import Foo from 'foo';
        let foo: Foo;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type Foo from 'foo';
        let foo: Foo;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import Foo from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |         let foo: Foo;
  4 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

        import Foo from 'foo';
        let foo: Foo;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type Foo from 'foo';
        let foo: Foo;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import Foo from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |         let foo: Foo;
  4 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

        import { A, B } from 'foo';
        let foo: A;
        let bar: B;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type { A, B } from 'foo';
        let foo: A;
        let bar: B;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import { A, B } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |         let foo: A;
  4 |         let bar: B;
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        import { A as a, B as b } from 'foo';
        let foo: a;
        let bar: b;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type { A as a, B as b } from 'foo';
        let foo: a;
        let bar: b;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import { A as a, B as b } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |         let foo: a;
  4 |         let bar: b;
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        import Foo from 'foo';
        type Bar = typeof Foo; // TSTypeQuery
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type Foo from 'foo';
        type Bar = typeof Foo; // TSTypeQuery
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import Foo from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |         type Bar = typeof Foo; // TSTypeQuery
  4 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        import foo from 'foo';
        type Bar = foo.Bar; // TSQualifiedName
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type foo from 'foo';
        type Bar = foo.Bar; // TSQualifiedName
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import foo from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |         type Bar = foo.Bar; // TSQualifiedName
  4 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        import foo from 'foo';
        type Baz = (typeof foo.bar)['Baz']; // TSQualifiedName & TSTypeQuery
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type foo from 'foo';
        type Baz = (typeof foo.bar)['Baz']; // TSQualifiedName & TSTypeQuery
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import foo from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |         type Baz = (typeof foo.bar)['Baz']; // TSQualifiedName & TSTypeQuery
  4 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        import * as A from 'foo';
        let foo: A.Foo;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type * as A from 'foo';
        let foo: A.Foo;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import * as A from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |         let foo: A.Foo;
  4 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

import A, { B } from 'foo';
let foo: A;
let bar: B;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type { B } from 'foo';
import type A from 'foo';
let foo: A;
let bar: B;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import A, { B } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 | let foo: A;
  4 | let bar: B;
  5 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

        import A, {} from 'foo';
        let foo: A;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type A from 'foo';
        let foo: A;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import A, {} from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |         let foo: A;
  4 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

import { A, B } from 'foo';
const foo: A = B();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type { A} from 'foo';
import { B } from 'foo';
const foo: A = B();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import { A, B } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "A" is only used as types.
  3 | const foo: A = B();
  4 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

import { A, B, C } from 'foo';
const foo: A = B();
let bar: C;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type { A, C } from 'foo';
import { B } from 'foo';
const foo: A = B();
let bar: C;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import { A, B, C } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Imports "A" and "C" are only used as types.
  3 | const foo: A = B();
  4 | let bar: C;
  5 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

import { A, B, C, D } from 'foo';
const foo: A = B();
type T = { bar: C; baz: D };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type { A, C, D } from 'foo';
import { B } from 'foo';
const foo: A = B();
type T = { bar: C; baz: D };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import { A, B, C, D } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Imports "A", "C" and "D" are only used as types.
  3 | const foo: A = B();
  4 | type T = { bar: C; baz: D };
  5 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

import A, { B, C, D } from 'foo';
B();
type T = { foo: A; bar: C; baz: D };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type { C, D } from 'foo';
import type A from 'foo';
import { B } from 'foo';
B();
type T = { foo: A; bar: C; baz: D };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import A, { B, C, D } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Imports "A", "C" and "D" are only used as types.
  3 | B();
  4 | type T = { foo: A; bar: C; baz: D };
  5 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

import A, { B } from 'foo';
B();
type T = A;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type A from 'foo';
import { B } from 'foo';
B();
type T = A;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import A, { B } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "A" is only used as types.
  3 | B();
  4 | type T = A;
  5 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

        import type Already1Def from 'foo';
        import type { Already1 } from 'foo';
        import A, { B } from 'foo';
        import { C, D, E } from 'bar';
        import type { Already2 } from 'bar';
        type T = { b: B; c: C; d: D };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type Already1Def from 'foo';
        import type { Already1 , B } from 'foo';
        import A from 'foo';
        import { E } from 'bar';
        import type { Already2 , C, D} from 'bar';
        type T = { b: B; c: C; d: D };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         import type Already1Def from 'foo';
  3 |         import type { Already1 } from 'foo';
> 4 |         import A, { B } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "B" is only used as types.
  5 |         import { C, D, E } from 'bar';
  6 |         import type { Already2 } from 'bar';
  7 |         type T = { b: B; c: C; d: D };
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         import type Already1Def from 'foo';
  3 |         import type { Already1 } from 'foo';
  4 |         import A, { B } from 'foo';
> 5 |         import { C, D, E } from 'bar';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Imports "C" and "D" are only used as types.
  6 |         import type { Already2 } from 'bar';
  7 |         type T = { b: B; c: C; d: D };
  8 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

import A, { /* comment */ B } from 'foo';
type T = B;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type { /* comment */ B } from 'foo';
import A from 'foo';
type T = B;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import A, { /* comment */ B } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "B" is only used as types.
  3 | type T = B;
  4 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

import { A, B, C } from 'foo';
import { D, E, F, } from 'bar';
type T = A | D;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type { A} from 'foo';
import { B, C } from 'foo';
import type { D} from 'bar';
import { E, F, } from 'bar';
type T = A | D;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import { A, B, C } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "A" is only used as types.
  3 | import { D, E, F, } from 'bar';
  4 | type T = A | D;
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { A, B, C } from 'foo';
> 3 | import { D, E, F, } from 'bar';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "D" is only used as types.
  4 | type T = A | D;
  5 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

import { A, B, C } from 'foo';
import { D, E, F, } from 'bar';
type T = B | E;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type { B} from 'foo';
import { A, C } from 'foo';
import type { E} from 'bar';
import { D, F, } from 'bar';
type T = B | E;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import { A, B, C } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "B" is only used as types.
  3 | import { D, E, F, } from 'bar';
  4 | type T = B | E;
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { A, B, C } from 'foo';
> 3 | import { D, E, F, } from 'bar';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "E" is only used as types.
  4 | type T = B | E;
  5 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

import { A, B, C } from 'foo';
import { D, E, F, } from 'bar';
type T = C | F;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type { C } from 'foo';
import { A, B } from 'foo';
import type { F} from 'bar';
import { D, E } from 'bar';
type T = C | F;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import { A, B, C } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "C" is only used as types.
  3 | import { D, E, F, } from 'bar';
  4 | type T = C | F;
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { A, B, C } from 'foo';
> 3 | import { D, E, F, } from 'bar';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "F" is only used as types.
  4 | type T = C | F;
  5 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

import { Type1, Type2 } from 'named_types';
import Type from 'default_type';
import * as Types from 'namespace_type';
import Default, { Named } from 'default_and_named_type';
type T = Type1 | Type2 | Type | Types.A | Default | Named;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type { Type1, Type2 } from 'named_types';
import type Type from 'default_type';
import type * as Types from 'namespace_type';
import type { Named } from 'default_and_named_type';
import type Default from 'default_and_named_type';
type T = Type1 | Type2 | Type | Types.A | Default | Named;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import { Type1, Type2 } from 'named_types';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 | import Type from 'default_type';
  4 | import * as Types from 'namespace_type';
  5 | import Default, { Named } from 'default_and_named_type';
  6 | type T = Type1 | Type2 | Type | Types.A | Default | Named;
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { Type1, Type2 } from 'named_types';
> 3 | import Type from 'default_type';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  4 | import * as Types from 'namespace_type';
  5 | import Default, { Named } from 'default_and_named_type';
  6 | type T = Type1 | Type2 | Type | Types.A | Default | Named;
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { Type1, Type2 } from 'named_types';
  3 | import Type from 'default_type';
> 4 | import * as Types from 'namespace_type';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  5 | import Default, { Named } from 'default_and_named_type';
  6 | type T = Type1 | Type2 | Type | Types.A | Default | Named;
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { Type1, Type2 } from 'named_types';
  3 | import Type from 'default_type';
  4 | import * as Types from 'namespace_type';
> 5 | import Default, { Named } from 'default_and_named_type';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  6 | type T = Type1 | Type2 | Type | Types.A | Default | Named;
  7 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

import { Value1, Type1 } from 'named_import';
import Type2, { Value2 } from 'default_import';
import Value3, { Type3 } from 'default_import2';
import Type4, { Type5, Value4 } from 'default_and_named_import';
type T = Type1 | Type2 | Type3 | Type4 | Type5;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type { Type1 } from 'named_import';
import { Value1 } from 'named_import';
import type Type2 from 'default_import';
import { Value2 } from 'default_import';
import type { Type3 } from 'default_import2';
import Value3 from 'default_import2';
import type { Type5} from 'default_and_named_import';
import type Type4 from 'default_and_named_import';
import { Value4 } from 'default_and_named_import';
type T = Type1 | Type2 | Type3 | Type4 | Type5;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import { Value1, Type1 } from 'named_import';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "Type1" is only used as types.
  3 | import Type2, { Value2 } from 'default_import';
  4 | import Value3, { Type3 } from 'default_import2';
  5 | import Type4, { Type5, Value4 } from 'default_and_named_import';
  6 | type T = Type1 | Type2 | Type3 | Type4 | Type5;
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { Value1, Type1 } from 'named_import';
> 3 | import Type2, { Value2 } from 'default_import';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "Type2" is only used as types.
  4 | import Value3, { Type3 } from 'default_import2';
  5 | import Type4, { Type5, Value4 } from 'default_and_named_import';
  6 | type T = Type1 | Type2 | Type3 | Type4 | Type5;
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { Value1, Type1 } from 'named_import';
  3 | import Type2, { Value2 } from 'default_import';
> 4 | import Value3, { Type3 } from 'default_import2';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "Type3" is only used as types.
  5 | import Type4, { Type5, Value4 } from 'default_and_named_import';
  6 | type T = Type1 | Type2 | Type3 | Type4 | Type5;
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { Value1, Type1 } from 'named_import';
  3 | import Type2, { Value2 } from 'default_import';
  4 | import Value3, { Type3 } from 'default_import2';
> 5 | import Type4, { Type5, Value4 } from 'default_and_named_import';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Imports "Type4" and "Type5" are only used as types.
  6 | type T = Type1 | Type2 | Type3 | Type4 | Type5;
  7 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

        let foo: import('foo');
        let bar: import('foo').Bar;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         let foo: import('foo');
    |                  ^^^^^^^^^^^^^ `import()` type annotations are forbidden.
  3 |         let bar: import('foo').Bar;
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         let foo: import('foo');
> 3 |         let bar: import('foo').Bar;
    |                  ^^^^^^^^^^^^^^^^^ `import()` type annotations are forbidden.
  4 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

        let foo: import('foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         let foo: import('foo');
    |                  ^^^^^^^^^^^^^ `import()` type annotations are forbidden.
  3 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

        import type Foo from 'foo';
        let foo: Foo;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import Foo from 'foo';
        let foo: Foo;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import type Foo from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use an `import` instead of an `import type`.
  3 |         let foo: Foo;
  4 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

        import type { Foo } from 'foo';
        let foo: Foo;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import { Foo } from 'foo';
        let foo: Foo;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import type { Foo } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use an `import` instead of an `import type`.
  3 |         let foo: Foo;
  4 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

        import Type from 'foo';

        type T = typeof Type;
        type T = typeof Type.foo;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type Type from 'foo';

        type T = typeof Type;
        type T = typeof Type.foo;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import Type from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |
  4 |         type T = typeof Type;
  5 |         type T = typeof Type.foo;
  6 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

        import { Type } from 'foo';

        type T = typeof Type;
        type T = typeof Type.foo;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type { Type } from 'foo';

        type T = typeof Type;
        type T = typeof Type.foo;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import { Type } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |
  4 |         type T = typeof Type;
  5 |         type T = typeof Type.foo;
  6 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

        import * as Type from 'foo';

        type T = typeof Type;
        type T = typeof Type.foo;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type * as Type from 'foo';

        type T = typeof Type;
        type T = typeof Type.foo;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import * as Type from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |
  4 |         type T = typeof Type;
  5 |         type T = typeof Type.foo;
  6 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

        import type Type from 'foo';

        type T = typeof Type;
        type T = typeof Type.foo;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import Type from 'foo';

        type T = typeof Type;
        type T = typeof Type.foo;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import type Type from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use an `import` instead of an `import type`.
  3 |
  4 |         type T = typeof Type;
  5 |         type T = typeof Type.foo;
  6 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

        import type { Type } from 'foo';

        type T = typeof Type;
        type T = typeof Type.foo;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import { Type } from 'foo';

        type T = typeof Type;
        type T = typeof Type.foo;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import type { Type } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use an `import` instead of an `import type`.
  3 |
  4 |         type T = typeof Type;
  5 |         type T = typeof Type.foo;
  6 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

        import type * as Type from 'foo';

        type T = typeof Type;
        type T = typeof Type.foo;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import * as Type from 'foo';

        type T = typeof Type;
        type T = typeof Type.foo;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import type * as Type from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use an `import` instead of an `import type`.
  3 |
  4 |         type T = typeof Type;
  5 |         type T = typeof Type.foo;
  6 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

        import Type from 'foo';

        export type { Type }; // is a type-only export
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type Type from 'foo';

        export type { Type }; // is a type-only export
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import Type from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |
  4 |         export type { Type }; // is a type-only export
  5 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

        import { Type } from 'foo';

        export type { Type }; // is a type-only export
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type { Type } from 'foo';

        export type { Type }; // is a type-only export
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import { Type } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |
  4 |         export type { Type }; // is a type-only export
  5 |       
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

        import * as Type from 'foo';

        export type { Type }; // is a type-only export
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type * as Type from 'foo';

        export type { Type }; // is a type-only export
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import * as Type from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |
  4 |         export type { Type }; // is a type-only export
  5 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

        import type Type from 'foo';

        export { Type }; // is a type-only export
        export default Type; // is a type-only export
        export type { Type }; // is a type-only export
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import Type from 'foo';

        export { Type }; // is a type-only export
        export default Type; // is a type-only export
        export type { Type }; // is a type-only export
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import type Type from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use an `import` instead of an `import type`.
  3 |
  4 |         export { Type }; // is a type-only export
  5 |         export default Type; // is a type-only export
  6 |         export type { Type }; // is a type-only export
  7 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

        import type { Type } from 'foo';

        export { Type }; // is a type-only export
        export default Type; // is a type-only export
        export type { Type }; // is a type-only export
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import { Type } from 'foo';

        export { Type }; // is a type-only export
        export default Type; // is a type-only export
        export type { Type }; // is a type-only export
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import type { Type } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use an `import` instead of an `import type`.
  3 |
  4 |         export { Type }; // is a type-only export
  5 |         export default Type; // is a type-only export
  6 |         export type { Type }; // is a type-only export
  7 |       
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

        import type * as Type from 'foo';

        export { Type }; // is a type-only export
        export default Type; // is a type-only export
        export type { Type }; // is a type-only export
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import * as Type from 'foo';

        export { Type }; // is a type-only export
        export default Type; // is a type-only export
        export type { Type }; // is a type-only export
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import type * as Type from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use an `import` instead of an `import type`.
  3 |
  4 |         export { Type }; // is a type-only export
  5 |         export default Type; // is a type-only export
  6 |         export type { Type }; // is a type-only export
  7 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

import type /*comment*/ * as AllType from 'foo';
import type // comment
DefType from 'foo';
import type /*comment*/ { Type } from 'foo';

type T = { a: AllType; b: DefType; c: Type };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import /*comment*/ * as AllType from 'foo';
import // comment
DefType from 'foo';
import /*comment*/ { Type } from 'foo';

type T = { a: AllType; b: DefType; c: Type };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import type /*comment*/ * as AllType from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use an `import` instead of an `import type`.
  3 | import type // comment
  4 | DefType from 'foo';
  5 | import type /*comment*/ { Type } from 'foo';
  6 |
  7 | type T = { a: AllType; b: DefType; c: Type };
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | import type /*comment*/ * as AllType from 'foo';
> 3 | import type // comment
    | ^^^^^^^^^^^^^^^^^^^^^^
> 4 | DefType from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^ Use an `import` instead of an `import type`.
  5 | import type /*comment*/ { Type } from 'foo';
  6 |
  7 | type T = { a: AllType; b: DefType; c: Type };
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | import type /*comment*/ * as AllType from 'foo';
  3 | import type // comment
  4 | DefType from 'foo';
> 5 | import type /*comment*/ { Type } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use an `import` instead of an `import type`.
  6 |
  7 | type T = { a: AllType; b: DefType; c: Type };
  8 |       
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

import Default, * as Rest from 'module';
const a: Rest.A = '';
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type * as Rest from 'module';
import Default from 'module';
const a: Rest.A = '';
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import Default, * as Rest from 'module';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "Rest" is only used as types.
  3 | const a: Rest.A = '';
  4 |       
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

import Default, * as Rest from 'module';
const a: Default = '';
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type Default from 'module';
import * as Rest from 'module';
const a: Default = '';
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import Default, * as Rest from 'module';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "Default" is only used as types.
  3 | const a: Default = '';
  4 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

import Default, * as Rest from 'module';
const a: Default = '';
const b: Rest.A = '';
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type * as Rest from 'module';
import type Default from 'module';
const a: Default = '';
const b: Rest.A = '';
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import Default, * as Rest from 'module';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 | const a: Default = '';
  4 | const b: Rest.A = '';
  5 |       
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts

import Default, /*comment*/ * as Rest from 'module';
const a: Default = '';
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type Default from 'module';
import /*comment*/ * as Rest from 'module';
const a: Default = '';
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import Default, /*comment*/ * as Rest from 'module';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "Default" is only used as types.
  3 | const a: Default = '';
  4 |       
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts

import Default /*comment1*/, /*comment2*/ { Data } from 'module';
const a: Default = '';
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type Default /*comment1*/ from 'module';
import /*comment2*/ { Data } from 'module';
const a: Default = '';
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import Default /*comment1*/, /*comment2*/ { Data } from 'module';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "Default" is only used as types.
  3 | const a: Default = '';
  4 |       
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts

        import Foo from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type Foo from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import Foo from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |         @deco
  4 |         class A {
  5 |           constructor(foo: Foo) {}
  6 |         }
  7 |       
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts

        import type Foo from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import Foo from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import type Foo from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type import "Foo" is used by decorator metadata.
  3 |         @deco
  4 |         class A {
  5 |           constructor(foo: Foo) {}
  6 |         }
  7 |       
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts

        import type { Foo } from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import { Foo } from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import type { Foo } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type import "Foo" is used by decorator metadata.
  3 |         @deco
  4 |         class A {
  5 |           constructor(foo: Foo) {}
  6 |         }
  7 |       
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts

        import type { Type } from 'foo';
        import { Foo, Bar } from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
        type T = Bar;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type { Type , Bar } from 'foo';
        import { Foo } from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
        type T = Bar;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         import type { Type } from 'foo';
> 3 |         import { Foo, Bar } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "Bar" is only used as types.
  4 |         @deco
  5 |         class A {
  6 |           constructor(foo: Foo) {}
  7 |         }
  8 |         type T = Bar;
  9 |       
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts

        import { V } from 'foo';
        import type { Foo, Bar, T } from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
          foo(@deco bar: Bar) {}
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import { V , Foo, Bar} from 'foo';
        import type { T } from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
          foo(@deco bar: Bar) {}
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         import { V } from 'foo';
> 3 |         import type { Foo, Bar, T } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type imports "Foo" and "Bar" are used by decorator metadata.
  4 |         @deco
  5 |         class A {
  6 |           constructor(foo: Foo) {}
  7 |           foo(@deco bar: Bar) {}
  8 |         }
  9 |       
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts

        import type { Foo, T } from 'foo';
        import { V } from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type { T } from 'foo';
        import { V , Foo} from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import type { Foo, T } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type import "Foo" is used by decorator metadata.
  3 |         import { V } from 'foo';
  4 |         @deco
  5 |         class A {
  6 |           constructor(foo: Foo) {}
  7 |         }
  8 |       
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts

        import type * as Type from 'foo';
        @deco
        class A {
          constructor(foo: Type.Foo) {}
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import * as Type from 'foo';
        @deco
        class A {
          constructor(foo: Type.Foo) {}
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import type * as Type from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type import "Type" is used by decorator metadata.
  3 |         @deco
  4 |         class A {
  5 |           constructor(foo: Type.Foo) {}
  6 |         }
  7 |       
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts

        import type Foo from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import Foo from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import type Foo from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type import "Foo" is used by decorator metadata.
  3 |         @deco
  4 |         class A {
  5 |           constructor(foo: Foo) {}
  6 |         }
  7 |       
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts

        import type { Foo } from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import { Foo } from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import type { Foo } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type import "Foo" is used by decorator metadata.
  3 |         @deco
  4 |         class A {
  5 |           constructor(foo: Foo) {}
  6 |         }
  7 |       
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts

        import type { Type } from 'foo';
        import { Foo, Bar } from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
        type T = Bar;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type { Type , Bar } from 'foo';
        import { Foo } from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
        type T = Bar;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         import type { Type } from 'foo';
> 3 |         import { Foo, Bar } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "Bar" is only used as types.
  4 |         @deco
  5 |         class A {
  6 |           constructor(foo: Foo) {}
  7 |         }
  8 |         type T = Bar;
  9 |       
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts

        import { V } from 'foo';
        import type { Foo, Bar, T } from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
          foo(@deco bar: Bar) {}
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import { V , Foo, Bar} from 'foo';
        import type { T } from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
          foo(@deco bar: Bar) {}
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         import { V } from 'foo';
> 3 |         import type { Foo, Bar, T } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type imports "Foo" and "Bar" are used by decorator metadata.
  4 |         @deco
  5 |         class A {
  6 |           constructor(foo: Foo) {}
  7 |           foo(@deco bar: Bar) {}
  8 |         }
  9 |       
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts

        import type { Foo, T } from 'foo';
        import { V } from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import type { T } from 'foo';
        import { V , Foo} from 'foo';
        @deco
        class A {
          constructor(foo: Foo) {}
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import type { Foo, T } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type import "Foo" is used by decorator metadata.
  3 |         import { V } from 'foo';
  4 |         @deco
  5 |         class A {
  6 |           constructor(foo: Foo) {}
  7 |         }
  8 |       
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts

        import type * as Type from 'foo';
        @deco
        class A {
          constructor(foo: Type.Foo) {}
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import * as Type from 'foo';
        @deco
        class A {
          constructor(foo: Type.Foo) {}
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import type * as Type from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type import "Type" is used by decorator metadata.
  3 |         @deco
  4 |         class A {
  5 |           constructor(foo: Type.Foo) {}
  6 |         }
  7 |       
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts

import { type A, B } from 'foo';
type T = A;
const b = B;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import { A, B } from 'foo';
type T = A;
const b = B;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import { type A, B } from 'foo';
    |          ^^^^^^ Use an `import` instead of an `import type`.
  3 | type T = A;
  4 | const b = B;
  5 |       
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts

import { A, B, type C } from 'foo';
type T = A | C;
const b = B;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import type { A} from 'foo';
import { B, type C } from 'foo';
type T = A | C;
const b = B;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import { A, B, type C } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "A" is only used as types.
  3 | type T = A | C;
  4 | const b = B;
  5 |       
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts

        import { A, B } from 'foo';
        let foo: A;
        let bar: B;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import { type A, type B } from 'foo';
        let foo: A;
        let bar: B;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import { A, B } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |         let foo: A;
  4 |         let bar: B;
  5 |       
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts

        import { A, B } from 'foo';

        let foo: A;
        B();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import { type A, B } from 'foo';

        let foo: A;
        B();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import { A, B } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "A" is only used as types.
  3 |
  4 |         let foo: A;
  5 |         B();
  6 |       
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts

        import { A, B } from 'foo';
        type T = A;
        B();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import { type A, B } from 'foo';
        type T = A;
        B();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import { A, B } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "A" is only used as types.
  3 |         type T = A;
  4 |         B();
  5 |       
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts

        import { A } from 'foo';
        import { B } from 'foo';
        type T = A;
        type U = B;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import { type A } from 'foo';
        import { type B } from 'foo';
        type T = A;
        type U = B;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import { A } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |         import { B } from 'foo';
  4 |         type T = A;
  5 |         type U = B;
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         import { A } from 'foo';
> 3 |         import { B } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  4 |         type T = A;
  5 |         type U = B;
  6 |       
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts

        import { A } from 'foo';
        import B from 'foo';
        type T = A;
        type U = B;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import { type A } from 'foo';
        import type B from 'foo';
        type T = A;
        type U = B;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import { A } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 |         import B from 'foo';
  4 |         type T = A;
  5 |         type U = B;
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         import { A } from 'foo';
> 3 |         import B from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  4 |         type T = A;
  5 |         type U = B;
  6 |       
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts

import A, { B, C } from 'foo';
type T = B;
type U = C;
A();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import A, { type B, type C } from 'foo';
type T = B;
type U = C;
A();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import A, { B, C } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Imports "B" and "C" are only used as types.
  3 | type T = B;
  4 | type U = C;
  5 | A();
  6 |       
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts

import A, { B, C } from 'foo';
type T = B;
type U = C;
type V = A;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import {type B, type C} from 'foo';
import type A from 'foo';
type T = B;
type U = C;
type V = A;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import A, { B, C } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 | type T = B;
  4 | type U = C;
  5 | type V = A;
  6 |       
```

## Test #68

### Test Code

<!-- prettier-ignore -->
```ts

import A, { B, C as D } from 'foo';
type T = B;
type U = D;
type V = A;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import {type B, type C as D} from 'foo';
import type A from 'foo';
type T = B;
type U = D;
type V = A;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import A, { B, C as D } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All imports in the declaration are only used as types. Use `import type`.
  3 | type T = B;
  4 | type U = D;
  5 | type V = A;
  6 |       
```

## Test #69

### Test Code

<!-- prettier-ignore -->
```ts

        import { /* comment */ A, B } from 'foo';
        type T = A;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import { /* comment */ type A, B } from 'foo';
        type T = A;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import { /* comment */ A, B } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "A" is only used as types.
  3 |         type T = A;
  4 |       
```

## Test #70

### Test Code

<!-- prettier-ignore -->
```ts

        import { B, /* comment */ A } from 'foo';
        type T = A;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import { B, /* comment */ type A } from 'foo';
        type T = A;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import { B, /* comment */ A } from 'foo';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "A" is only used as types.
  3 |         type T = A;
  4 |       
```

## Test #71

### Test Code

<!-- prettier-ignore -->
```ts

import { A, B, C } from 'foo';
import type { D } from 'deez';

const foo: A = B();
let bar: C;
let baz: D;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import { type A, B, type C } from 'foo';
import type { D } from 'deez';

const foo: A = B();
let bar: C;
let baz: D;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import { A, B, C } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Imports "A" and "C" are only used as types.
  3 | import type { D } from 'deez';
  4 |
  5 | const foo: A = B();
  6 | let bar: C;
  7 | let baz: D;
  8 |       
```

## Test #72

### Test Code

<!-- prettier-ignore -->
```ts

import { A, B, type C } from 'foo';
import type { D } from 'deez';
const foo: A = B();
let bar: C;
let baz: D;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import { type A, B, type C } from 'foo';
import type { D } from 'deez';
const foo: A = B();
let bar: C;
let baz: D;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | import { A, B, type C } from 'foo';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Import "A" is only used as types.
  3 | import type { D } from 'deez';
  4 | const foo: A = B();
  5 | let bar: C;
  6 | let baz: D;
  7 |       
```
