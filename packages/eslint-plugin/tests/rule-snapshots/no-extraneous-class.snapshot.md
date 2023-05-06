# no-extraneous-class

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
class Foo {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | class Foo {}
    |       ^^^ Unexpected empty class.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public prop = 1;
  constructor() {
    class Bar {
      static PROP = 2;
    }
  }
}
export class Bar {
  public static helper(): void {}
  private static privateHelper(): boolean {
    return true;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public prop = 1;
   4 |   constructor() {
>  5 |     class Bar {
     |           ^^^ Unexpected class with only static properties.
   6 |       static PROP = 2;
   7 |     }
   8 |   }
   9 | }
  10 | export class Bar {
  11 |   public static helper(): void {}
  12 |   private static privateHelper(): boolean {
  13 |     return true;
  14 |   }
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public prop = 1;
   4 |   constructor() {
   5 |     class Bar {
   6 |       static PROP = 2;
   7 |     }
   8 |   }
   9 | }
> 10 | export class Bar {
     |              ^^^ Unexpected class with only static properties.
  11 |   public static helper(): void {}
  12 |   private static privateHelper(): boolean {
  13 |     return true;
  14 |   }
  15 | }
  16 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | class Foo {
    |       ^^^ Unexpected class with only a constructor.
  3 |   constructor() {}
  4 | }
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

export class AClass {
  public static helper(): void {}
  private static privateHelper(): boolean {
    return true;
  }
  constructor() {
    class nestedClass {}
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 | export class AClass {
     |              ^^^^^^ Unexpected class with only static properties.
   3 |   public static helper(): void {}
   4 |   private static privateHelper(): boolean {
   5 |     return true;
   6 |   }
   7 |   constructor() {
   8 |     class nestedClass {}
   9 |   }
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | export class AClass {
   3 |   public static helper(): void {}
   4 |   private static privateHelper(): boolean {
   5 |     return true;
   6 |   }
   7 |   constructor() {
>  8 |     class nestedClass {}
     |           ^^^^^^^^^^^ Unexpected empty class.
   9 |   }
  10 | }
  11 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

export default class {
  static hello() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export default class {
    |                ^^^^^^^
> 3 |   static hello() {}
    | ^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ Unexpected class with only static properties.
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

@FooDecorator
class Foo {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | @FooDecorator
> 3 | class Foo {}
    |       ^^^ Unexpected empty class.
  4 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

@FooDecorator
class Foo {
  constructor(foo: Foo) {
    foo.subscribe(a => {
      console.log(a);
    });
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | @FooDecorator
>  3 | class Foo {
     |       ^^^ Unexpected class with only a constructor.
   4 |   constructor(foo: Foo) {
   5 |     foo.subscribe(a => {
   6 |       console.log(a);
   7 |     });
   8 |   }
   9 | }
  10 |       
```
