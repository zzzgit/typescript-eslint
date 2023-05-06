# member-ordering-alphabetically-order

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  b(): void;
  a: b;
  [a: string]: number;
  new (): Bar;
  (): Baz;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   b(): void;
> 4 |   a: b;
    |   ^^^^^ Member a should be declared before member b.
  5 |   [a: string]: number;
  6 |   new (): Bar;
  7 |   (): Baz;
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   b(): void;
  4 |   a: b;
  5 |   [a: string]: number;
  6 |   new (): Bar;
> 7 |   (): Baz;
    |   ^^^^^^^^ Member call should be declared before member new.
  8 | }
  9 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  'b.d': Foo;
  'b.c': Foo;
  a: Foo;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   'b.d': Foo;
> 4 |   'b.c': Foo;
    |   ^^^^^^^^^^^ Member b.c should be declared before member b.d.
  5 |   a: Foo;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   'b.d': Foo;
  4 |   'b.c': Foo;
> 5 |   a: Foo;
    |   ^^^^^^^ Member a should be declared before member b.c.
  6 | }
  7 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  c: string;
  b: string;
  a: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   c: string;
> 4 |   b: string;
    |   ^^^^^^^^^^ Member b should be declared before member c.
  5 |   a: string;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   c: string;
  4 |   b: string;
> 5 |   a: string;
    |   ^^^^^^^^^^ Member a should be declared before member b.
  6 | }
  7 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  b(): void;
  a: b;
  [a: string]: number;
  new (): Bar;
  (): Baz;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   b(): void;
> 4 |   a: b;
    |   ^^^^^ Member a should be declared before member b.
  5 |   [a: string]: number;
  6 |   new (): Bar;
  7 |   (): Baz;
  8 | };
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   b(): void;
  4 |   a: b;
  5 |   [a: string]: number;
  6 |   new (): Bar;
> 7 |   (): Baz;
    |   ^^^^^^^^ Member call should be declared before member new.
  8 | };
  9 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  'b.d': Foo;
  'b.c': Foo;
  a: Foo;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   'b.d': Foo;
> 4 |   'b.c': Foo;
    |   ^^^^^^^^^^^ Member b.c should be declared before member b.d.
  5 |   a: Foo;
  6 | };
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   'b.d': Foo;
  4 |   'b.c': Foo;
> 5 |   a: Foo;
    |   ^^^^^^^ Member a should be declared before member b.c.
  6 | };
  7 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  c: string;
  b: string;
  a: string;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   c: string;
> 4 |   b: string;
    |   ^^^^^^^^^^ Member b should be declared before member c.
  5 |   a: string;
  6 | };
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   c: string;
  4 |   b: string;
> 5 |   a: string;
    |   ^^^^^^^^^^ Member a should be declared before member b.
  6 | };
  7 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  protected static b: string = '';
  public static a: string;
  private static c: string = '';
  constructor() {}
  public d: string = '';
  protected e: string = '';
  private f: string = '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   protected static b: string = '';
>  4 |   public static a: string;
     |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member a should be declared before member b.
   5 |   private static c: string = '';
   6 |   constructor() {}
   7 |   public d: string = '';
   8 |   protected e: string = '';
   9 |   private f: string = '';
  10 | }
  11 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public static c: string;
  public static b: string;
  public static a: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   public static c: string;
> 4 |   public static b: string;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member b should be declared before member c.
  5 |   public static a: string;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   public static c: string;
  4 |   public static b: string;
> 5 |   public static a: string;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member a should be declared before member b.
  6 | }
  7 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class Foo {
  protected static b: string = '';
  public static a: string;
  private static c: string = '';
  constructor() {}
  public d: string = '';
  protected e: string = '';
  private f: string = '';
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class Foo {
   3 |   protected static b: string = '';
>  4 |   public static a: string;
     |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member a should be declared before member b.
   5 |   private static c: string = '';
   6 |   constructor() {}
   7 |   public d: string = '';
   8 |   protected e: string = '';
   9 |   private f: string = '';
  10 | };
  11 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class Foo {
  public static c: string;
  public static b: string;
  public static a: string;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = class Foo {
  3 |   public static c: string;
> 4 |   public static b: string;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member b should be declared before member c.
  5 |   public static a: string;
  6 | };
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = class Foo {
  3 |   public static c: string;
  4 |   public static b: string;
> 5 |   public static a: string;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member a should be declared before member b.
  6 | };
  7 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  protected static b: string = '';
  public static a: string;
  private static c: string = '';
  constructor() {}
  public d: string = '';
  protected e: string = '';
  private f: string = '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   protected static b: string = '';
>  4 |   public static a: string;
     |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member a should be declared before member b.
   5 |   private static c: string = '';
   6 |   constructor() {}
   7 |   public d: string = '';
   8 |   protected e: string = '';
   9 |   private f: string = '';
  10 | }
  11 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public static c: string;
  public static b: string;
  public static a: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   public static c: string;
> 4 |   public static b: string;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member b should be declared before member c.
  5 |   public static a: string;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   public static c: string;
  4 |   public static b: string;
> 5 |   public static a: string;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member a should be declared before member b.
  6 | }
  7 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class Foo {
  protected static b: string = '';
  public static a: string;
  private static c: string = '';
  constructor() {}
  public d: string = '';
  protected e: string = '';
  private f: string = '';
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class Foo {
   3 |   protected static b: string = '';
>  4 |   public static a: string;
     |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member a should be declared before member b.
   5 |   private static c: string = '';
   6 |   constructor() {}
   7 |   public d: string = '';
   8 |   protected e: string = '';
   9 |   private f: string = '';
  10 | };
  11 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class Foo {
  public static c: string;
  public static b: string;
  public static a: string;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = class Foo {
  3 |   public static c: string;
> 4 |   public static b: string;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member b should be declared before member c.
  5 |   public static a: string;
  6 | };
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = class Foo {
  3 |   public static c: string;
  4 |   public static b: string;
> 5 |   public static a: string;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member a should be declared before member b.
  6 | };
  7 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  b(): void;
  a: b;
  [a: string]: number;
  new (): Bar;
  (): Baz;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   b(): void;
> 4 |   a: b;
    |   ^^^^^ Member a should be declared before member b.
  5 |   [a: string]: number;
  6 |   new (): Bar;
  7 |   (): Baz;
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   b(): void;
  4 |   a: b;
  5 |   [a: string]: number;
  6 |   new (): Bar;
> 7 |   (): Baz;
    |   ^^^^^^^^ Member call should be declared before member new.
  8 | }
  9 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  c: string;
  b: string;
  a: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   c: string;
> 4 |   b: string;
    |   ^^^^^^^^^^ Member b should be declared before member c.
  5 |   a: string;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   c: string;
  4 |   b: string;
> 5 |   a: string;
    |   ^^^^^^^^^^ Member a should be declared before member b.
  6 | }
  7 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  b(): void;
  a: b;
  [a: string]: number;
  new (): Bar;
  (): Baz;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   b(): void;
> 4 |   a: b;
    |   ^^^^^ Member a should be declared before member b.
  5 |   [a: string]: number;
  6 |   new (): Bar;
  7 |   (): Baz;
  8 | };
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   b(): void;
  4 |   a: b;
  5 |   [a: string]: number;
  6 |   new (): Bar;
> 7 |   (): Baz;
    |   ^^^^^^^^ Member call should be declared before member new.
  8 | };
  9 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  c: string;
  b: string;
  a: string;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   c: string;
> 4 |   b: string;
    |   ^^^^^^^^^^ Member b should be declared before member c.
  5 |   a: string;
  6 | };
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   c: string;
  4 |   b: string;
> 5 |   a: string;
    |   ^^^^^^^^^^ Member a should be declared before member b.
  6 | };
  7 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

class FooTestGetter {
  public static a: string;
  protected static b: string = '';
  private static c: string = '';

  public d: string = '';
  protected e: string = '';
  private f: string = '';

  get h() {}

  set g() {}

  constructor() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class FooTestGetter {
   3 |   public static a: string;
   4 |   protected static b: string = '';
   5 |   private static c: string = '';
   6 |
   7 |   public d: string = '';
   8 |   protected e: string = '';
   9 |   private f: string = '';
  10 |
  11 |   get h() {}
  12 |
  13 |   set g() {}
  14 |
> 15 |   constructor() {}
     |   ^^^^^^^^^^^^^^^^ Member constructor should be declared before all public instance get definitions.
  16 | }
  17 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  @Bar
  get a() {}

  get b() {}

  @Bar
  set c() {}

  set d() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   @Bar
   4 |   get a() {}
   5 |
>  6 |   get b() {}
     |   ^^^^^^^^^^ Member b should be declared before all decorated get definitions.
   7 |
   8 |   @Bar
   9 |   set c() {}
  10 |
  11 |   set d() {}
  12 | }
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   @Bar
   4 |   get a() {}
   5 |
   6 |   get b() {}
   7 |
   8 |   @Bar
   9 |   set c() {}
  10 |
> 11 |   set d() {}
     |   ^^^^^^^^^^ Member d should be declared before all decorated set definitions.
  12 | }
  13 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

class FooTestGetter {
  public static a: string;
  protected static b: string = '';
  private static c: string = '';

  public d: string = '';
  protected e: string = '';
  private f: string = '';

  set g() {}

  constructor() {}

  get h() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class FooTestGetter {
   3 |   public static a: string;
   4 |   protected static b: string = '';
   5 |   private static c: string = '';
   6 |
   7 |   public d: string = '';
   8 |   protected e: string = '';
   9 |   private f: string = '';
  10 |
  11 |   set g() {}
  12 |
> 13 |   constructor() {}
     |   ^^^^^^^^^^^^^^^^ Member constructor should be declared before all public instance set definitions.
  14 |
  15 |   get h() {}
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class FooTestGetter {
   3 |   public static a: string;
   4 |   protected static b: string = '';
   5 |   private static c: string = '';
   6 |
   7 |   public d: string = '';
   8 |   protected e: string = '';
   9 |   private f: string = '';
  10 |
  11 |   set g() {}
  12 |
  13 |   constructor() {}
  14 |
> 15 |   get h() {}
     |   ^^^^^^^^^^ Member h should be declared before all public instance set definitions.
  16 | }
  17 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  [a: string]: number;

  a: x;
  b: x;
  c: x;

  c(): void;
  b(): void;
  a(): void;

  (): Baz;

  new (): Bar;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 |   [a: string]: number;
   4 |
   5 |   a: x;
   6 |   b: x;
   7 |   c: x;
   8 |
   9 |   c(): void;
  10 |   b(): void;
  11 |   a(): void;
  12 |
> 13 |   (): Baz;
     |   ^^^^^^^^ Member call should be declared before all field definitions.
  14 |
  15 |   new (): Bar;
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 |   [a: string]: number;
   4 |
   5 |   a: x;
   6 |   b: x;
   7 |   c: x;
   8 |
   9 |   c(): void;
  10 |   b(): void;
  11 |   a(): void;
  12 |
  13 |   (): Baz;
  14 |
> 15 |   new (): Bar;
     |   ^^^^^^^^^^^^ Member new should be declared before all method definitions.
  16 | }
  17 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  [a: string]: number;

  a: x;
  b: x;
  c: x;

  c(): void;
  b(): void;
  a(): void;

  (): Baz;

  new (): Bar;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Foo = {
   3 |   [a: string]: number;
   4 |
   5 |   a: x;
   6 |   b: x;
   7 |   c: x;
   8 |
   9 |   c(): void;
  10 |   b(): void;
  11 |   a(): void;
  12 |
> 13 |   (): Baz;
     |   ^^^^^^^^ Member call should be declared before all field definitions.
  14 |
  15 |   new (): Bar;
  16 | };
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Foo = {
   3 |   [a: string]: number;
   4 |
   5 |   a: x;
   6 |   b: x;
   7 |   c: x;
   8 |
   9 |   c(): void;
  10 |   b(): void;
  11 |   a(): void;
  12 |
  13 |   (): Baz;
  14 |
> 15 |   new (): Bar;
     |   ^^^^^^^^^^^^ Member new should be declared before all method definitions.
  16 | };
  17 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public static c: string = '';
  public static b: string = '';
  public static a: string;

  constructor() {}

  public d: string = '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static c: string = '';
   4 |   public static b: string = '';
   5 |   public static a: string;
   6 |
   7 |   constructor() {}
   8 |
>  9 |   public d: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^ Member d should be declared before all public constructor definitions.
  10 | }
  11 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class Foo {
  public static c: string = '';
  public static b: string = '';
  public static a: string;

  constructor() {}

  public d: string = '';
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class Foo {
   3 |   public static c: string = '';
   4 |   public static b: string = '';
   5 |   public static a: string;
   6 |
   7 |   constructor() {}
   8 |
>  9 |   public d: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^ Member d should be declared before all public constructor definitions.
  10 | };
  11 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  @Dec() a1: string;
  @Dec()
  a3: string;
  @Dec()
  a2: string;

  constructor() {}

  b1: string;
  b2: string;

  public c(): void;
  @Dec() d(): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   @Dec() a1: string;
   4 |   @Dec()
   5 |   a3: string;
   6 |   @Dec()
   7 |   a2: string;
   8 |
   9 |   constructor() {}
  10 |
> 11 |   b1: string;
     |   ^^^^^^^^^^^ Member b1 should be declared before all constructor definitions.
  12 |   b2: string;
  13 |
  14 |   public c(): void;
  15 |   @Dec() d(): void;
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   @Dec() a1: string;
   4 |   @Dec()
   5 |   a3: string;
   6 |   @Dec()
   7 |   a2: string;
   8 |
   9 |   constructor() {}
  10 |
  11 |   b1: string;
> 12 |   b2: string;
     |   ^^^^^^^^^^^ Member b2 should be declared before all constructor definitions.
  13 |
  14 |   public c(): void;
  15 |   @Dec() d(): void;
  16 | }
  17 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public static c: string = '';
  public static b: string = '';
  public static a: string;

  constructor() {}

  public d: string = '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static c: string = '';
   4 |   public static b: string = '';
   5 |   public static a: string;
   6 |
   7 |   constructor() {}
   8 |
>  9 |   public d: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^ Member d should be declared before all public constructor definitions.
  10 | }
  11 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class Foo {
  public static c: string = '';
  public static b: string = '';
  public static a: string;

  constructor() {}

  public d: string = '';
};
        
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class Foo {
   3 |   public static c: string = '';
   4 |   public static b: string = '';
   5 |   public static a: string;
   6 |
   7 |   constructor() {}
   8 |
>  9 |   public d: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^ Member d should be declared before all public constructor definitions.
  10 | };
  11 |         
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  [a: string]: number;

  a: x;
  b: x;
  c: x;

  c(): void;
  b(): void;
  a(): void;

  (): Baz;

  new (): Bar;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 |   [a: string]: number;
   4 |
   5 |   a: x;
   6 |   b: x;
   7 |   c: x;
   8 |
   9 |   c(): void;
  10 |   b(): void;
  11 |   a(): void;
  12 |
> 13 |   (): Baz;
     |   ^^^^^^^^ Member call should be declared before all field definitions.
  14 |
  15 |   new (): Bar;
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 |   [a: string]: number;
   4 |
   5 |   a: x;
   6 |   b: x;
   7 |   c: x;
   8 |
   9 |   c(): void;
  10 |   b(): void;
  11 |   a(): void;
  12 |
  13 |   (): Baz;
  14 |
> 15 |   new (): Bar;
     |   ^^^^^^^^^^^^ Member new should be declared before all method definitions.
  16 | }
  17 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  [a: string]: number;

  a: x;
  b: x;
  c: x;

  c(): void;
  b(): void;
  a(): void;

  (): Baz;

  new (): Bar;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Foo = {
   3 |   [a: string]: number;
   4 |
   5 |   a: x;
   6 |   b: x;
   7 |   c: x;
   8 |
   9 |   c(): void;
  10 |   b(): void;
  11 |   a(): void;
  12 |
> 13 |   (): Baz;
     |   ^^^^^^^^ Member call should be declared before all field definitions.
  14 |
  15 |   new (): Bar;
  16 | };
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Foo = {
   3 |   [a: string]: number;
   4 |
   5 |   a: x;
   6 |   b: x;
   7 |   c: x;
   8 |
   9 |   c(): void;
  10 |   b(): void;
  11 |   a(): void;
  12 |
  13 |   (): Baz;
  14 |
> 15 |   new (): Bar;
     |   ^^^^^^^^^^^^ Member new should be declared before all method definitions.
  16 | };
  17 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  #c = 3;
  #b = 2;
  #a = 1;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   #c = 3;
> 4 |   #b = 2;
    |   ^^^^^^^ Member b should be declared before member c.
  5 |   #a = 1;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   #c = 3;
  4 |   #b = 2;
> 5 |   #a = 1;
    |   ^^^^^^^ Member a should be declared before member b.
  6 | }
  7 |       
```
