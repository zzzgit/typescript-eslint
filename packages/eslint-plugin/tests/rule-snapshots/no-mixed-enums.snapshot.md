# no-mixed-enums

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

        enum Fruit {
          Apple,
          Banana = 'banana',
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Fruit {
  3 |           Apple,
> 4 |           Banana = 'banana',
    |                    ^^^^^^^^ Mixing number and string enums can be confusing.
  5 |         }
  6 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

        enum Fruit {
          Apple,
          Banana = 'banana',
          Cherry = 'cherry',
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Fruit {
  3 |           Apple,
> 4 |           Banana = 'banana',
    |                    ^^^^^^^^ Mixing number and string enums can be confusing.
  5 |           Cherry = 'cherry',
  6 |         }
  7 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

        enum Fruit {
          Apple,
          Banana,
          Cherry = 'cherry',
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Fruit {
  3 |           Apple,
  4 |           Banana,
> 5 |           Cherry = 'cherry',
    |                    ^^^^^^^^ Mixing number and string enums can be confusing.
  6 |         }
  7 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

        enum Fruit {
          Apple = 0,
          Banana = 'banana',
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Fruit {
  3 |           Apple = 0,
> 4 |           Banana = 'banana',
    |                    ^^^^^^^^ Mixing number and string enums can be confusing.
  5 |         }
  6 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        const getValue = () => 0;
        enum Fruit {
          Apple = getValue(),
          Banana = 'banana',
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const getValue = () => 0;
  3 |         enum Fruit {
  4 |           Apple = getValue(),
> 5 |           Banana = 'banana',
    |                    ^^^^^^^^ Mixing number and string enums can be confusing.
  6 |         }
  7 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        const getValue = () => '';
        enum Fruit {
          Apple,
          Banana = getValue(),
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const getValue = () => '';
  3 |         enum Fruit {
  4 |           Apple,
> 5 |           Banana = getValue(),
    |                    ^^^^^^^^^^ Mixing number and string enums can be confusing.
  6 |         }
  7 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        const getValue = () => '';
        enum Fruit {
          Apple = getValue(),
          Banana = 0,
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const getValue = () => '';
  3 |         enum Fruit {
  4 |           Apple = getValue(),
> 5 |           Banana = 0,
    |                    ^ Mixing number and string enums can be confusing.
  6 |         }
  7 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        enum First {
          A = 1,
        }

        enum Second {
          A = First.A,
          B = 'b',
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         enum First {
   3 |           A = 1,
   4 |         }
   5 |
   6 |         enum Second {
   7 |           A = First.A,
>  8 |           B = 'b',
     |               ^^^ Mixing number and string enums can be confusing.
   9 |         }
  10 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        enum First {
          A = 'a',
        }

        enum Second {
          A = First.A,
          B = 1,
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         enum First {
   3 |           A = 'a',
   4 |         }
   5 |
   6 |         enum Second {
   7 |           A = First.A,
>  8 |           B = 1,
     |               ^ Mixing number and string enums can be confusing.
   9 |         }
  10 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

        enum Foo {
          A,
        }
        enum Foo {
          B = 'b',
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Foo {
  3 |           A,
  4 |         }
  5 |         enum Foo {
> 6 |           B = 'b',
    |               ^^^ Mixing number and string enums can be confusing.
  7 |         }
  8 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

        enum Foo {
          A = 1,
        }
        enum Foo {
          B = 'b',
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Foo {
  3 |           A = 1,
  4 |         }
  5 |         enum Foo {
> 6 |           B = 'b',
    |               ^^^ Mixing number and string enums can be confusing.
  7 |         }
  8 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

        enum Foo {
          A = 'a',
        }
        enum Foo {
          B,
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Foo {
  3 |           A = 'a',
  4 |         }
  5 |         enum Foo {
> 6 |           B,
    |           ^ Mixing number and string enums can be confusing.
  7 |         }
  8 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

        enum Foo {
          A = 'a',
        }
        enum Foo {
          B = 0,
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Foo {
  3 |           A = 'a',
  4 |         }
  5 |         enum Foo {
> 6 |           B = 0,
    |               ^ Mixing number and string enums can be confusing.
  7 |         }
  8 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

        enum Foo {
          A,
        }
        enum Foo {
          B = 'b',
        }
        enum Foo {
          C = 'c',
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         enum Foo {
   3 |           A,
   4 |         }
   5 |         enum Foo {
>  6 |           B = 'b',
     |               ^^^ Mixing number and string enums can be confusing.
   7 |         }
   8 |         enum Foo {
   9 |           C = 'c',
  10 |         }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         enum Foo {
   3 |           A,
   4 |         }
   5 |         enum Foo {
   6 |           B = 'b',
   7 |         }
   8 |         enum Foo {
>  9 |           C = 'c',
     |               ^^^ Mixing number and string enums can be confusing.
  10 |         }
  11 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

        enum Foo {
          A,
        }
        enum Foo {
          B = 'b',
        }
        enum Foo {
          C,
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         enum Foo {
   3 |           A,
   4 |         }
   5 |         enum Foo {
>  6 |           B = 'b',
     |               ^^^ Mixing number and string enums can be confusing.
   7 |         }
   8 |         enum Foo {
   9 |           C,
  10 |         }
  11 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

        enum Foo {
          A,
        }
        enum Foo {
          B,
        }
        enum Foo {
          C = 'c',
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         enum Foo {
   3 |           A,
   4 |         }
   5 |         enum Foo {
   6 |           B,
   7 |         }
   8 |         enum Foo {
>  9 |           C = 'c',
     |               ^^^ Mixing number and string enums can be confusing.
  10 |         }
  11 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

import { Enum } from './mixed-enums-decl';

declare module './mixed-enums-decl' {
  enum Enum {
    Numeric = 0,
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { Enum } from './mixed-enums-decl';
  3 |
  4 | declare module './mixed-enums-decl' {
  5 |   enum Enum {
> 6 |     Numeric = 0,
    |               ^ Mixing number and string enums can be confusing.
  7 |   }
  8 | }
  9 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

enum Foo {
  A = 1,
}
enum Foo {
  B = 'B',
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum Foo {
  3 |   A = 1,
  4 | }
  5 | enum Foo {
> 6 |   B = 'B',
    |       ^^^ Mixing number and string enums can be confusing.
  7 | }
  8 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

namespace Test {
  export enum Bar {
    A = 1,
  }
}
namespace Test {
  export enum Bar {
    B = 'B',
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | namespace Test {
   3 |   export enum Bar {
   4 |     A = 1,
   5 |   }
   6 | }
   7 | namespace Test {
   8 |   export enum Bar {
>  9 |     B = 'B',
     |         ^^^ Mixing number and string enums can be confusing.
  10 |   }
  11 | }
  12 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

namespace Test {
  export enum Bar {
    A,
  }
}
namespace Test {
  export enum Bar {
    B = 'B',
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | namespace Test {
   3 |   export enum Bar {
   4 |     A,
   5 |   }
   6 | }
   7 | namespace Test {
   8 |   export enum Bar {
>  9 |     B = 'B',
     |         ^^^ Mixing number and string enums can be confusing.
  10 |   }
  11 | }
  12 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

namespace Outer {
  export namespace Test {
    export enum Bar {
      A = 1,
    }
  }
}
namespace Outer {
  export namespace Test {
    export enum Bar {
      B = 'B',
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
   2 | namespace Outer {
   3 |   export namespace Test {
   4 |     export enum Bar {
   5 |       A = 1,
   6 |     }
   7 |   }
   8 | }
   9 | namespace Outer {
  10 |   export namespace Test {
  11 |     export enum Bar {
> 12 |       B = 'B',
     |           ^^^ Mixing number and string enums can be confusing.
  13 |     }
  14 |   }
  15 | }
  16 |       
```
