# no-namespace

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
module foo {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | module foo {}
    | ^^^^^^^^^^^^^ ES2015 module syntax is preferred over namespaces.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
namespace foo {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | namespace foo {}
    | ^^^^^^^^^^^^^^^^ ES2015 module syntax is preferred over namespaces.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
module foo {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | module foo {}
    | ^^^^^^^^^^^^^ ES2015 module syntax is preferred over namespaces.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
namespace foo {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | namespace foo {}
    | ^^^^^^^^^^^^^^^^ ES2015 module syntax is preferred over namespaces.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
module foo {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | module foo {}
    | ^^^^^^^^^^^^^ ES2015 module syntax is preferred over namespaces.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
namespace foo {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | namespace foo {}
    | ^^^^^^^^^^^^^^^^ ES2015 module syntax is preferred over namespaces.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
declare module foo {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare module foo {}
    | ^^^^^^^^^^^^^^^^^^^^^ ES2015 module syntax is preferred over namespaces.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
declare namespace foo {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare namespace foo {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^ ES2015 module syntax is preferred over namespaces.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
declare module foo {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare module foo {}
    | ^^^^^^^^^^^^^^^^^^^^^ ES2015 module syntax is preferred over namespaces.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
declare namespace foo {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare namespace foo {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^ ES2015 module syntax is preferred over namespaces.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
namespace foo {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | namespace foo {}
    | ^^^^^^^^^^^^^^^^ ES2015 module syntax is preferred over namespaces.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
module foo {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | module foo {}
    | ^^^^^^^^^^^^^ ES2015 module syntax is preferred over namespaces.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
declare module foo {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare module foo {}
    | ^^^^^^^^^^^^^^^^^^^^^ ES2015 module syntax is preferred over namespaces.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
declare namespace foo {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare namespace foo {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^ ES2015 module syntax is preferred over namespaces.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
namespace Foo.Bar {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | namespace Foo.Bar {}
    | ^^^^^^^^^^^^^^^^^^^^ ES2015 module syntax is preferred over namespaces.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

namespace Foo.Bar {
  namespace Baz.Bas {
    interface X {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | namespace Foo.Bar {
    | ^^^^^^^^^^^^^^^^^^^
> 3 |   namespace Baz.Bas {
    | ^^^^^^^^^^^^^^^^^^^^^
> 4 |     interface X {}
    | ^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace Foo.Bar {
> 3 |   namespace Baz.Bas {
    |   ^^^^^^^^^^^^^^^^^^^
> 4 |     interface X {}
    | ^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^ ES2015 module syntax is preferred over namespaces.
  6 | }
  7 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

namespace A {
  namespace B {
    declare namespace C {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | namespace A {
    | ^^^^^^^^^^^^^
> 3 |   namespace B {
    | ^^^^^^^^^^^^^^^
> 4 |     declare namespace C {}
    | ^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace A {
> 3 |   namespace B {
    |   ^^^^^^^^^^^^^
> 4 |     declare namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^ ES2015 module syntax is preferred over namespaces.
  6 | }
  7 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

namespace A {
  namespace B {
    export declare namespace C {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | namespace A {
    | ^^^^^^^^^^^^^
> 3 |   namespace B {
    | ^^^^^^^^^^^^^^^
> 4 |     export declare namespace C {}
    | ^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace A {
> 3 |   namespace B {
    |   ^^^^^^^^^^^^^
> 4 |     export declare namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^ ES2015 module syntax is preferred over namespaces.
  6 | }
  7 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

namespace A {
  declare namespace B {
    namespace C {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | namespace A {
    | ^^^^^^^^^^^^^
> 3 |   declare namespace B {
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 4 |     namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

namespace A {
  export declare namespace B {
    namespace C {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | namespace A {
    | ^^^^^^^^^^^^^
> 3 |   export declare namespace B {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |     namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

namespace A {
  export declare namespace B {
    declare namespace C {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | namespace A {
    | ^^^^^^^^^^^^^
> 3 |   export declare namespace B {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |     declare namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

namespace A {
  export declare namespace B {
    export declare namespace C {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | namespace A {
    | ^^^^^^^^^^^^^
> 3 |   export declare namespace B {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |     export declare namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

namespace A {
  declare namespace B {
    export declare namespace C {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | namespace A {
    | ^^^^^^^^^^^^^
> 3 |   declare namespace B {
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 4 |     export declare namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

namespace A {
  export namespace B {
    export declare namespace C {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | namespace A {
    | ^^^^^^^^^^^^^
> 3 |   export namespace B {
    | ^^^^^^^^^^^^^^^^^^^^^^
> 4 |     export declare namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace A {
> 3 |   export namespace B {
    |          ^^^^^^^^^^^^^
> 4 |     export declare namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^ ES2015 module syntax is preferred over namespaces.
  6 | }
  7 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

export namespace A {
  namespace B {
    declare namespace C {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export namespace A {
    |        ^^^^^^^^^^^^^
> 3 |   namespace B {
    | ^^^^^^^^^^^^^^^
> 4 |     declare namespace C {}
    | ^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | export namespace A {
> 3 |   namespace B {
    |   ^^^^^^^^^^^^^
> 4 |     declare namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^ ES2015 module syntax is preferred over namespaces.
  6 | }
  7 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

export namespace A {
  namespace B {
    export declare namespace C {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export namespace A {
    |        ^^^^^^^^^^^^^
> 3 |   namespace B {
    | ^^^^^^^^^^^^^^^
> 4 |     export declare namespace C {}
    | ^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | export namespace A {
> 3 |   namespace B {
    |   ^^^^^^^^^^^^^
> 4 |     export declare namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^ ES2015 module syntax is preferred over namespaces.
  6 | }
  7 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

export namespace A {
  declare namespace B {
    namespace C {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export namespace A {
    |        ^^^^^^^^^^^^^
> 3 |   declare namespace B {
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 4 |     namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

export namespace A {
  export declare namespace B {
    namespace C {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export namespace A {
    |        ^^^^^^^^^^^^^
> 3 |   export declare namespace B {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |     namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

export namespace A {
  export declare namespace B {
    declare namespace C {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export namespace A {
    |        ^^^^^^^^^^^^^
> 3 |   export declare namespace B {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |     declare namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

export namespace A {
  export declare namespace B {
    export declare namespace C {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export namespace A {
    |        ^^^^^^^^^^^^^
> 3 |   export declare namespace B {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |     export declare namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

export namespace A {
  declare namespace B {
    export declare namespace C {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export namespace A {
    |        ^^^^^^^^^^^^^
> 3 |   declare namespace B {
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 4 |     export declare namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

export namespace A {
  export namespace B {
    export declare namespace C {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export namespace A {
    |        ^^^^^^^^^^^^^
> 3 |   export namespace B {
    | ^^^^^^^^^^^^^^^^^^^^^^
> 4 |     export declare namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^^^^^^^^^^^^^^^^^^^
> 6 | }
    | ^^ ES2015 module syntax is preferred over namespaces.
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | export namespace A {
> 3 |   export namespace B {
    |          ^^^^^^^^^^^^^
> 4 |     export declare namespace C {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^ ES2015 module syntax is preferred over namespaces.
  6 | }
  7 |       
```
