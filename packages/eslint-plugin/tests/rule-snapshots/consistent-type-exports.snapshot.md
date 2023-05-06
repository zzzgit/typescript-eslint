# consistent-type-exports

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
export { Type1 } from './consistent-type-exports';
```

### Fix Output

<!-- prettier-ignore -->
```ts
export type { Type1 } from './consistent-type-exports';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export { Type1 } from './consistent-type-exports';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All exports in the declaration are only used as types. Use `export type`.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
export { Type1, value1 } from './consistent-type-exports';
```

### Fix Output

<!-- prettier-ignore -->
```ts
export type { Type1 } from './consistent-type-exports';
export { value1 } from './consistent-type-exports';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export { Type1, value1 } from './consistent-type-exports';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type export Type1 is not a value and should be exported using `export type`.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

export { Type1, value1, value2 } from './consistent-type-exports';
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

export type { Type1 } from './consistent-type-exports';
export { value1, value2 } from './consistent-type-exports';
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export { Type1, value1, value2 } from './consistent-type-exports';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type export Type1 is not a value and should be exported using `export type`.
  3 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

export { Type1, value1, Type2, value2 } from './consistent-type-exports';
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

export type { Type1, Type2 } from './consistent-type-exports';
export { value1, value2 } from './consistent-type-exports';
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export { Type1, value1, Type2, value2 } from './consistent-type-exports';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type exports Type1 and Type2 are not values and should be exported using `export type`.
  3 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
export { Type2 as Foo } from './consistent-type-exports';
```

### Fix Output

<!-- prettier-ignore -->
```ts
export type { Type2 as Foo } from './consistent-type-exports';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export { Type2 as Foo } from './consistent-type-exports';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All exports in the declaration are only used as types. Use `export type`.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

export { Type2 as Foo, value1 } from './consistent-type-exports';
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

export type { Type2 as Foo } from './consistent-type-exports';
export { value1 } from './consistent-type-exports';
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export { Type2 as Foo, value1 } from './consistent-type-exports';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type export Type2 is not a value and should be exported using `export type`.
  3 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

export {
  Type2 as Foo,
  value1 as BScope,
  value2 as CScope,
} from './consistent-type-exports';
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

export type { Type2 as Foo } from './consistent-type-exports';
export { value1 as BScope, value2 as CScope } from './consistent-type-exports';
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export {
    | ^^^^^^^^
> 3 |   Type2 as Foo,
    | ^^^^^^^^^^^^^^^
> 4 |   value1 as BScope,
    | ^^^^^^^^^^^^^^^
> 5 |   value2 as CScope,
    | ^^^^^^^^^^^^^^^
> 6 | } from './consistent-type-exports';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type export Type2 is not a value and should be exported using `export type`.
  7 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

import { Type2 } from './consistent-type-exports';
export { Type2 };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import { Type2 } from './consistent-type-exports';
export type { Type2 };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { Type2 } from './consistent-type-exports';
> 3 | export { Type2 };
    | ^^^^^^^^^^^^^^^^^ All exports in the declaration are only used as types. Use `export type`.
  4 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

import { value2, Type2 } from './consistent-type-exports';
export { value2, Type2 };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import { value2, Type2 } from './consistent-type-exports';
export type { Type2 };
export { value2 };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { value2, Type2 } from './consistent-type-exports';
> 3 | export { value2, Type2 };
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Type export Type2 is not a value and should be exported using `export type`.
  4 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

type Alias = 1;
interface IFace {}
namespace TypeNS {
  export type x = 1;
  export const f = 1;
}

export { Alias, IFace, TypeNS };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Alias = 1;
interface IFace {}
namespace TypeNS {
  export type x = 1;
  export const f = 1;
}

export type { Alias, IFace };
export { TypeNS };
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Alias = 1;
   3 | interface IFace {}
   4 | namespace TypeNS {
   5 |   export type x = 1;
   6 |   export const f = 1;
   7 | }
   8 |
>  9 | export { Alias, IFace, TypeNS };
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type exports Alias and IFace are not values and should be exported using `export type`.
  10 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

namespace TypeNS {
  export interface Foo {}
}

export { TypeNS };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

namespace TypeNS {
  export interface Foo {}
}

export type { TypeNS };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace TypeNS {
  3 |   export interface Foo {}
  4 | }
  5 |
> 6 | export { TypeNS };
    | ^^^^^^^^^^^^^^^^^^ All exports in the declaration are only used as types. Use `export type`.
  7 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

type T = 1;
export { type T, T };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type T = 1;
export type { T, T };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = 1;
> 3 | export { type T, T };
    | ^^^^^^^^^^^^^^^^^^^^^ All exports in the declaration are only used as types. Use `export type`.
  4 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

type T = 1;
export { type/* */T, type     /* */T, T };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type T = 1;
export type { /* */T, /* */T, T };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = 1;
> 3 | export { type/* */T, type     /* */T, T };
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ All exports in the declaration are only used as types. Use `export type`.
  4 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

type T = 1;
const x = 1;
export { type T, T, x };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type T = 1;
const x = 1;
export type { T, T };
export { x };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = 1;
  3 | const x = 1;
> 4 | export { type T, T, x };
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Type export T is not a value and should be exported using `export type`.
  5 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

type T = 1;
const x = 1;
export { T, x };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type T = 1;
const x = 1;
export { type T, x };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = 1;
  3 | const x = 1;
> 4 | export { T, x };
    | ^^^^^^^^^^^^^^^^ Type export T is not a value and should be exported using `export type`.
  5 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

type T = 1;
export { type T, T };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type T = 1;
export type { T, T };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = 1;
> 3 | export { type T, T };
    | ^^^^^^^^^^^^^^^^^^^^^ All exports in the declaration are only used as types. Use `export type`.
  4 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

export {
  Type1,
  Type2 as Foo,
  type value1 as BScope,
  value2 as CScope,
} from './consistent-type-exports';
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

export type { Type1, Type2 as Foo, value1 as BScope } from './consistent-type-exports';
export { value2 as CScope } from './consistent-type-exports';
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export {
    | ^^^^^^^^
> 3 |   Type1,
    | ^^^^^^^^
> 4 |   Type2 as Foo,
    | ^^^^^^^^
> 5 |   type value1 as BScope,
    | ^^^^^^^^
> 6 |   value2 as CScope,
    | ^^^^^^^^
> 7 | } from './consistent-type-exports';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type exports Type1 and Type2 are not values and should be exported using `export type`.
  8 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

export {
  Type1,
  Type2 as Foo,
  type value1 as BScope,
  value2 as CScope,
} from './consistent-type-exports';
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

export {
  type Type1,
  type Type2 as Foo,
  type value1 as BScope,
  value2 as CScope,
} from './consistent-type-exports';
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export {
    | ^^^^^^^^
> 3 |   Type1,
    | ^^^^^^^^
> 4 |   Type2 as Foo,
    | ^^^^^^^^
> 5 |   type value1 as BScope,
    | ^^^^^^^^
> 6 |   value2 as CScope,
    | ^^^^^^^^
> 7 | } from './consistent-type-exports';
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Type exports Type1 and Type2 are not values and should be exported using `export type`.
  8 |       
```
