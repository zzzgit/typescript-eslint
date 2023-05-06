# no-unnecessary-qualifier

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

namespace A {
  export type B = number;
  const x: A.B = 3;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

namespace A {
  export type B = number;
  const x: B = 3;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace A {
  3 |   export type B = number;
> 4 |   const x: A.B = 3;
    |            ^ Qualifier is unnecessary since 'B' is in scope.
  5 | }
  6 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

namespace A {
  export const x = 3;
  export const y = A.x;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

namespace A {
  export const x = 3;
  export const y = x;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace A {
  3 |   export const x = 3;
> 4 |   export const y = A.x;
    |                    ^ Qualifier is unnecessary since 'x' is in scope.
  5 | }
  6 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

namespace A {
  export type T = number;
  export namespace B {
    const x: A.T = 3;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

namespace A {
  export type T = number;
  export namespace B {
    const x: T = 3;
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace A {
  3 |   export type T = number;
  4 |   export namespace B {
> 5 |     const x: A.T = 3;
    |              ^ Qualifier is unnecessary since 'T' is in scope.
  6 |   }
  7 | }
  8 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

namespace A {
  export namespace B {
    export type T = number;
    const x: A.B.T = 3;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

namespace A {
  export namespace B {
    export type T = number;
    const x: T = 3;
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace A {
  3 |   export namespace B {
  4 |     export type T = number;
> 5 |     const x: A.B.T = 3;
    |              ^^^ Qualifier is unnecessary since 'T' is in scope.
  6 |   }
  7 | }
  8 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

namespace A {
  export namespace B {
    export const x = 3;
    const y = A.B.x;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

namespace A {
  export namespace B {
    export const x = 3;
    const y = x;
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace A {
  3 |   export namespace B {
  4 |     export const x = 3;
> 5 |     const y = A.B.x;
    |               ^^^ Qualifier is unnecessary since 'x' is in scope.
  6 |   }
  7 | }
  8 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

enum A {
  B,
  C = A.B,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

enum A {
  B,
  C = B,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum A {
  3 |   B,
> 4 |   C = A.B,
    |       ^ Qualifier is unnecessary since 'B' is in scope.
  5 | }
  6 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

namespace Foo {
  export enum A {
    B,
    C = Foo.A.B,
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

namespace Foo {
  export enum A {
    B,
    C = B,
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace Foo {
  3 |   export enum A {
  4 |     B,
> 5 |     C = Foo.A.B,
    |         ^^^^^ Qualifier is unnecessary since 'B' is in scope.
  6 |   }
  7 | }
  8 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

import * as Foo from './foo';
declare module './foo' {
  const x: Foo.T = 3;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import * as Foo from './foo';
declare module './foo' {
  const x: T = 3;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import * as Foo from './foo';
  3 | declare module './foo' {
> 4 |   const x: Foo.T = 3;
    |            ^^^ Qualifier is unnecessary since 'T' is in scope.
  5 | }
  6 |       
```
