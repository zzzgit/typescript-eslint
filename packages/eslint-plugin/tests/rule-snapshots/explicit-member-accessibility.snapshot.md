# explicit-member-accessibility

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

export class XXXX {
  public constructor(readonly value: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export class XXXX {
> 3 |   public constructor(readonly value: string) {}
    |                      ^^^^^^^^^^^^^^^^^^^^^^ Missing accessibility modifier on parameter property value.
  4 | }
  5 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

export class XXXX {
  public constructor(public readonly value: string) {}
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

export class XXXX {
  public constructor(private readonly value: string) {}
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

export class XXXX {
  public constructor(protected readonly value: string) {}
}
      
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

export class WithParameterProperty {
  public constructor(readonly value: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export class WithParameterProperty {
> 3 |   public constructor(readonly value: string) {}
    |                      ^^^^^^^^^^^^^^^^^^^^^^ Missing accessibility modifier on parameter property value.
  4 | }
  5 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

export class WithParameterProperty {
  public constructor(public readonly value: string) {}
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

export class WithParameterProperty {
  public constructor(private readonly value: string) {}
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

export class WithParameterProperty {
  public constructor(protected readonly value: string) {}
}
      
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

export class XXXX {
  public constructor(readonly samosa: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export class XXXX {
> 3 |   public constructor(readonly samosa: string) {}
    |                      ^^^^^^^^^^^^^^^^^^^^^^^ Missing accessibility modifier on parameter property samosa.
  4 | }
  5 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

export class XXXX {
  public constructor(public readonly samosa: string) {}
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

export class XXXX {
  public constructor(private readonly samosa: string) {}
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

export class XXXX {
  public constructor(protected readonly samosa: string) {}
}
      
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  public constructor(readonly foo: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   public constructor(readonly foo: string) {}
    |                      ^^^^^^^^^^^^^^^^^^^^ Missing accessibility modifier on parameter property foo.
  4 | }
  5 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  public constructor(public readonly foo: string) {}
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  public constructor(private readonly foo: string) {}
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  public constructor(protected readonly foo: string) {}
}
      
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  x: number;
  public getX() {
    return this.x;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   x: number;
    |   ^^^^^^^^^^ Missing accessibility modifier on class property x.
  4 |   public getX() {
  5 |     return this.x;
  6 |   }
  7 | }
  8 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  public x: number;
  public getX() {
    return this.x;
  }
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  public getX() {
    return this.x;
  }
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  protected x: number;
  public getX() {
    return this.x;
  }
}
      
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  getX() {
    return this.x;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
  3 |   private x: number;
> 4 |   getX() {
    |   ^^^^^^^^
> 5 |     return this.x;
    | ^^^^^^^^^^^^^^^^^^
> 6 |   }
    | ^^^^ Missing accessibility modifier on method definition getX.
  7 | }
  8 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  public getX() {
    return this.x;
  }
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  private getX() {
    return this.x;
  }
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  protected getX() {
    return this.x;
  }
}
      
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  x?: number;
  getX?() {
    return this.x;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   x?: number;
    |   ^^^^^^^^^^^ Missing accessibility modifier on class property x.
  4 |   getX?() {
  5 |     return this.x;
  6 |   }
  7 | }
  8 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  public x?: number;
  getX?() {
    return this.x;
  }
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x?: number;
  getX?() {
    return this.x;
  }
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  protected x?: number;
  getX?() {
    return this.x;
  }
}
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
  3 |   x?: number;
> 4 |   getX?() {
    |   ^^^^^^^^^
> 5 |     return this.x;
    | ^^^^^^^^^^^^^^^^^^
> 6 |   }
    | ^^^^ Missing accessibility modifier on method definition getX.
  7 | }
  8 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  x?: number;
  public getX?() {
    return this.x;
  }
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  x?: number;
  private getX?() {
    return this.x;
  }
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  x?: number;
  protected getX?() {
    return this.x;
  }
}
      
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  protected name: string;
  protected foo?: string;
  public getX() {
    return this.x;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Test {
  protected name: string;
  protected foo?: string;
  getX() {
    return this.x;
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
  3 |   protected name: string;
  4 |   protected foo?: string;
> 5 |   public getX() {
    |   ^^^^^^^^^^^^^^^
> 6 |     return this.x;
    | ^^^^^^^^^^^^^^^^^^
> 7 |   }
    | ^^^^ Public accessibility modifier on method definition getX.
  8 | }
  9 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  protected name: string;
  public foo?: string;
  getX() {
    return this.x;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Test {
  protected name: string;
  foo?: string;
  getX() {
    return this.x;
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
  3 |   protected name: string;
> 4 |   public foo?: string;
    |   ^^^^^^^^^^^^^^^^^^^^ Public accessibility modifier on class property foo.
  5 |   getX() {
  6 |     return this.x;
  7 |   }
  8 | }
  9 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  public x: number;
  public getX() {
    return this.x;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Test {
  x: number;
  getX() {
    return this.x;
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   public x: number;
    |   ^^^^^^^^^^^^^^^^^ Public accessibility modifier on class property x.
  4 |   public getX() {
  5 |     return this.x;
  6 |   }
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
  3 |   public x: number;
> 4 |   public getX() {
    |   ^^^^^^^^^^^^^^^
> 5 |     return this.x;
    | ^^^^^^^^^^^^^^^^^^
> 6 |   }
    | ^^^^ Public accessibility modifier on method definition getX.
  7 | }
  8 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  constructor(x: number) {
    this.x = x;
  }
  get internalValue() {
    return this.x;
  }
  set internalValue(value: number) {
    this.x = value;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Test {
   3 |   private x: number;
   4 |   constructor(x: number) {
   5 |     this.x = x;
   6 |   }
>  7 |   get internalValue() {
     |   ^^^^^^^^^^^^^^^^^^^^^
>  8 |     return this.x;
     | ^^^^^^^^^^^^^^^^^^
>  9 |   }
     | ^^^^ Missing accessibility modifier on get property accessor internalValue.
  10 |   set internalValue(value: number) {
  11 |     this.x = value;
  12 |   }
  13 | }
  14 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  constructor(x: number) {
    this.x = x;
  }
  public get internalValue() {
    return this.x;
  }
  set internalValue(value: number) {
    this.x = value;
  }
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  constructor(x: number) {
    this.x = x;
  }
  private get internalValue() {
    return this.x;
  }
  set internalValue(value: number) {
    this.x = value;
  }
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  constructor(x: number) {
    this.x = x;
  }
  protected get internalValue() {
    return this.x;
  }
  set internalValue(value: number) {
    this.x = value;
  }
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Test {
   3 |   private x: number;
   4 |   constructor(x: number) {
   5 |     this.x = x;
   6 |   }
   7 |   get internalValue() {
   8 |     return this.x;
   9 |   }
> 10 |   set internalValue(value: number) {
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 11 |     this.x = value;
     | ^^^^^^^^^^^^^^^^^^^
> 12 |   }
     | ^^^^ Missing accessibility modifier on set property accessor internalValue.
  13 | }
  14 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  constructor(x: number) {
    this.x = x;
  }
  get internalValue() {
    return this.x;
  }
  public set internalValue(value: number) {
    this.x = value;
  }
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  constructor(x: number) {
    this.x = x;
  }
  get internalValue() {
    return this.x;
  }
  private set internalValue(value: number) {
    this.x = value;
  }
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  constructor(x: number) {
    this.x = x;
  }
  get internalValue() {
    return this.x;
  }
  protected set internalValue(value: number) {
    this.x = value;
  }
}
      
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  constructor(x: number) {
    this.x = x;
  }
  get internalValue() {
    return this.x;
  }
  set internalValue(value: number) {
    this.x = value;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Test {
   3 |   private x: number;
>  4 |   constructor(x: number) {
     |   ^^^^^^^^^^^^^^^^^^^^^^^^
>  5 |     this.x = x;
     | ^^^^^^^^^^^^^^^
>  6 |   }
     | ^^^^ Missing accessibility modifier on method definition constructor.
   7 |   get internalValue() {
   8 |     return this.x;
   9 |   }
  10 |   set internalValue(value: number) {
  11 |     this.x = value;
  12 |   }
  13 | }
  14 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  public constructor(x: number) {
    this.x = x;
  }
  get internalValue() {
    return this.x;
  }
  set internalValue(value: number) {
    this.x = value;
  }
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  private constructor(x: number) {
    this.x = x;
  }
  get internalValue() {
    return this.x;
  }
  set internalValue(value: number) {
    this.x = value;
  }
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  protected constructor(x: number) {
    this.x = x;
  }
  get internalValue() {
    return this.x;
  }
  set internalValue(value: number) {
    this.x = value;
  }
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Test {
   3 |   private x: number;
   4 |   constructor(x: number) {
   5 |     this.x = x;
   6 |   }
>  7 |   get internalValue() {
     |   ^^^^^^^^^^^^^^^^^^^^^
>  8 |     return this.x;
     | ^^^^^^^^^^^^^^^^^^
>  9 |   }
     | ^^^^ Missing accessibility modifier on get property accessor internalValue.
  10 |   set internalValue(value: number) {
  11 |     this.x = value;
  12 |   }
  13 | }
  14 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  constructor(x: number) {
    this.x = x;
  }
  public get internalValue() {
    return this.x;
  }
  set internalValue(value: number) {
    this.x = value;
  }
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  constructor(x: number) {
    this.x = x;
  }
  private get internalValue() {
    return this.x;
  }
  set internalValue(value: number) {
    this.x = value;
  }
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  constructor(x: number) {
    this.x = x;
  }
  protected get internalValue() {
    return this.x;
  }
  set internalValue(value: number) {
    this.x = value;
  }
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Test {
   3 |   private x: number;
   4 |   constructor(x: number) {
   5 |     this.x = x;
   6 |   }
   7 |   get internalValue() {
   8 |     return this.x;
   9 |   }
> 10 |   set internalValue(value: number) {
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 11 |     this.x = value;
     | ^^^^^^^^^^^^^^^^^^^
> 12 |   }
     | ^^^^ Missing accessibility modifier on set property accessor internalValue.
  13 | }
  14 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  constructor(x: number) {
    this.x = x;
  }
  get internalValue() {
    return this.x;
  }
  public set internalValue(value: number) {
    this.x = value;
  }
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  constructor(x: number) {
    this.x = x;
  }
  get internalValue() {
    return this.x;
  }
  private set internalValue(value: number) {
    this.x = value;
  }
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x: number;
  constructor(x: number) {
    this.x = x;
  }
  get internalValue() {
    return this.x;
  }
  protected set internalValue(value: number) {
    this.x = value;
  }
}
      
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  constructor(public x: number) {}
  public foo(): string {
    return 'foo';
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   constructor(public x: number) {}
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Missing accessibility modifier on method definition constructor.
  4 |   public foo(): string {
  5 |     return 'foo';
  6 |   }
  7 | }
  8 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  public constructor(public x: number) {}
  public foo(): string {
    return 'foo';
  }
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private constructor(public x: number) {}
  public foo(): string {
    return 'foo';
  }
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  protected constructor(public x: number) {}
  public foo(): string {
    return 'foo';
  }
}
      
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  constructor(public x: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   constructor(public x: number) {}
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Missing accessibility modifier on method definition constructor.
  4 | }
  5 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  public constructor(public x: number) {}
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private constructor(public x: number) {}
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  protected constructor(public x: number) {}
}
      
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  constructor(public readonly x: number) {}
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Test {
  constructor(readonly x: number) {}
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   constructor(public readonly x: number) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^ Public accessibility modifier on parameter property x.
  4 | }
  5 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  x = 2;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   x = 2;
    |   ^^^^^^ Missing accessibility modifier on class property x.
  4 | }
  5 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  public x = 2;
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private x = 2;
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  protected x = 2;
}
      
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  public x = 2;
  private x = 2;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Test {
  x = 2;
  private x = 2;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   public x = 2;
    |   ^^^^^^^^^^^^^ Public accessibility modifier on class property x.
  4 |   private x = 2;
  5 | }
  6 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  constructor(public ...x: any[]) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   constructor(public ...x: any[]) {}
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Missing accessibility modifier on method definition constructor.
  4 | }
  5 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  public constructor(public ...x: any[]) {}
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  private constructor(public ...x: any[]) {}
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class Test {
  protected constructor(public ...x: any[]) {}
}
      
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  public /*public*/constructor(private foo: string) {}
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Test {
  /*public*/constructor(private foo: string) {}
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   public /*public*/constructor(private foo: string) {}
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Public accessibility modifier on method definition constructor.
  4 | }
  5 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  @public
  public foo() {}
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Test {
  @public
  foo() {}
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   @public
    |   ^^^^^^^
> 4 |   public foo() {}
    | ^^^^^^^^^^^^^^^^^^ Public accessibility modifier on method definition foo.
  5 | }
  6 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  @public
  public foo;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Test {
  @public
  foo;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   @public
    |   ^^^^^^^
> 4 |   public foo;
    | ^^^^^^^^^^^^^^ Public accessibility modifier on class property foo.
  5 | }
  6 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  public foo = '';
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Test {
  foo = '';
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   public foo = '';
    |   ^^^^^^^^^^^^^^^^ Public accessibility modifier on class property foo.
  4 | }
  5 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  constructor(public/* Hi there */ readonly foo) {}
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Test {
  constructor(/* Hi there */ readonly foo) {}
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   constructor(public/* Hi there */ readonly foo) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Public accessibility modifier on parameter property foo.
  4 | }
  5 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  constructor(public readonly foo: string) {}
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Test {
  constructor(readonly foo: string) {}
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   constructor(public readonly foo: string) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Public accessibility modifier on parameter property foo.
  4 | }
  5 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

class EnsureWhiteSPaceSpan {
  public constructor() {}
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class EnsureWhiteSPaceSpan {
  constructor() {}
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class EnsureWhiteSPaceSpan {
> 3 |   public constructor() {}
    |   ^^^^^^^^^^^^^^^^^^^^^^^ Public accessibility modifier on method definition constructor.
  4 | }
  5 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

class EnsureWhiteSPaceSpan {
  public /* */ constructor() {}
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class EnsureWhiteSPaceSpan {
  /* */ constructor() {}
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class EnsureWhiteSPaceSpan {
> 3 |   public /* */ constructor() {}
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Public accessibility modifier on method definition constructor.
  4 | }
  5 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  public 'foo' = 1;
  public 'foo foo' = 2;
  public 'bar'() {}
  public 'bar bar'() {}
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Test {
  'foo' = 1;
  'foo foo' = 2;
  'bar'() {}
  'bar bar'() {}
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   public 'foo' = 1;
    |   ^^^^^^^^^^^^^^^^^ Public accessibility modifier on class property foo.
  4 |   public 'foo foo' = 2;
  5 |   public 'bar'() {}
  6 |   public 'bar bar'() {}
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
  3 |   public 'foo' = 1;
> 4 |   public 'foo foo' = 2;
    |   ^^^^^^^^^^^^^^^^^^^^^ Public accessibility modifier on class property "foo foo".
  5 |   public 'bar'() {}
  6 |   public 'bar bar'() {}
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
  3 |   public 'foo' = 1;
  4 |   public 'foo foo' = 2;
> 5 |   public 'bar'() {}
    |   ^^^^^^^^^^^^^^^^^ Public accessibility modifier on method definition bar.
  6 |   public 'bar bar'() {}
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
  3 |   public 'foo' = 1;
  4 |   public 'foo foo' = 2;
  5 |   public 'bar'() {}
> 6 |   public 'bar bar'() {}
    |   ^^^^^^^^^^^^^^^^^^^^^ Public accessibility modifier on method definition "bar bar".
  7 | }
  8 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

abstract class SomeClass {
  abstract method(): string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class SomeClass {
> 3 |   abstract method(): string;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^ Missing accessibility modifier on method definition method.
  4 | }
  5 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

abstract class SomeClass {
  public abstract method(): string;
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

abstract class SomeClass {
  private abstract method(): string;
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

abstract class SomeClass {
  protected abstract method(): string;
}
      
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

abstract class SomeClass {
  public abstract method(): string;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

abstract class SomeClass {
  abstract method(): string;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class SomeClass {
> 3 |   public abstract method(): string;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Public accessibility modifier on method definition method.
  4 | }
  5 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

abstract class SomeClass {
  abstract x: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class SomeClass {
> 3 |   abstract x: string;
    |   ^^^^^^^^^^^^^^^^^^^ Missing accessibility modifier on class property x.
  4 | }
  5 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

abstract class SomeClass {
  public abstract x: string;
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

abstract class SomeClass {
  private abstract x: string;
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

abstract class SomeClass {
  protected abstract x: string;
}
      
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

abstract class SomeClass {
  public abstract x: string;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

abstract class SomeClass {
  abstract x: string;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class SomeClass {
> 3 |   public abstract x: string;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^ Public accessibility modifier on class property x.
  4 | }
  5 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  constructor(@foo @bar() readonly arg: string) {}
  @foo @bar() x: string;
  @foo @bar() getX() {
    return this.x;
  }
  @foo
  @bar()
  get y() {
    return this.x;
  }
  @foo @bar() set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class DecoratedClass {
>  3 |   constructor(@foo @bar() readonly arg: string) {}
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Missing accessibility modifier on method definition constructor.
   4 |   @foo @bar() x: string;
   5 |   @foo @bar() getX() {
   6 |     return this.x;
   7 |   }
   8 |   @foo
   9 |   @bar()
  10 |   get y() {
  11 |     return this.x;
  12 |   }
  13 |   @foo @bar() set y(@foo @bar() value: x) {
  14 |     this.x = x;
  15 |   }
  16 | }
  17 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  public constructor(@foo @bar() readonly arg: string) {}
  @foo @bar() x: string;
  @foo @bar() getX() {
    return this.x;
  }
  @foo
  @bar()
  get y() {
    return this.x;
  }
  @foo @bar() set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  private constructor(@foo @bar() readonly arg: string) {}
  @foo @bar() x: string;
  @foo @bar() getX() {
    return this.x;
  }
  @foo
  @bar()
  get y() {
    return this.x;
  }
  @foo @bar() set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  protected constructor(@foo @bar() readonly arg: string) {}
  @foo @bar() x: string;
  @foo @bar() getX() {
    return this.x;
  }
  @foo
  @bar()
  get y() {
    return this.x;
  }
  @foo @bar() set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class DecoratedClass {
>  3 |   constructor(@foo @bar() readonly arg: string) {}
     |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Missing accessibility modifier on parameter property arg.
   4 |   @foo @bar() x: string;
   5 |   @foo @bar() getX() {
   6 |     return this.x;
   7 |   }
   8 |   @foo
   9 |   @bar()
  10 |   get y() {
  11 |     return this.x;
  12 |   }
  13 |   @foo @bar() set y(@foo @bar() value: x) {
  14 |     this.x = x;
  15 |   }
  16 | }
  17 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  constructor(@foo @bar() public readonly arg: string) {}
  @foo @bar() x: string;
  @foo @bar() getX() {
    return this.x;
  }
  @foo
  @bar()
  get y() {
    return this.x;
  }
  @foo @bar() set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  constructor(@foo @bar() private readonly arg: string) {}
  @foo @bar() x: string;
  @foo @bar() getX() {
    return this.x;
  }
  @foo
  @bar()
  get y() {
    return this.x;
  }
  @foo @bar() set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  constructor(@foo @bar() protected readonly arg: string) {}
  @foo @bar() x: string;
  @foo @bar() getX() {
    return this.x;
  }
  @foo
  @bar()
  get y() {
    return this.x;
  }
  @foo @bar() set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class DecoratedClass {
   3 |   constructor(@foo @bar() readonly arg: string) {}
>  4 |   @foo @bar() x: string;
     |   ^^^^^^^^^^^^^^^^^^^^^^ Missing accessibility modifier on class property x.
   5 |   @foo @bar() getX() {
   6 |     return this.x;
   7 |   }
   8 |   @foo
   9 |   @bar()
  10 |   get y() {
  11 |     return this.x;
  12 |   }
  13 |   @foo @bar() set y(@foo @bar() value: x) {
  14 |     this.x = x;
  15 |   }
  16 | }
  17 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  constructor(@foo @bar() readonly arg: string) {}
  @foo @bar() public x: string;
  @foo @bar() getX() {
    return this.x;
  }
  @foo
  @bar()
  get y() {
    return this.x;
  }
  @foo @bar() set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  constructor(@foo @bar() readonly arg: string) {}
  @foo @bar() private x: string;
  @foo @bar() getX() {
    return this.x;
  }
  @foo
  @bar()
  get y() {
    return this.x;
  }
  @foo @bar() set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  constructor(@foo @bar() readonly arg: string) {}
  @foo @bar() protected x: string;
  @foo @bar() getX() {
    return this.x;
  }
  @foo
  @bar()
  get y() {
    return this.x;
  }
  @foo @bar() set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class DecoratedClass {
   3 |   constructor(@foo @bar() readonly arg: string) {}
   4 |   @foo @bar() x: string;
>  5 |   @foo @bar() getX() {
     |   ^^^^^^^^^^^^^^^^^^^^
>  6 |     return this.x;
     | ^^^^^^^^^^^^^^^^^^
>  7 |   }
     | ^^^^ Missing accessibility modifier on method definition getX.
   8 |   @foo
   9 |   @bar()
  10 |   get y() {
  11 |     return this.x;
  12 |   }
  13 |   @foo @bar() set y(@foo @bar() value: x) {
  14 |     this.x = x;
  15 |   }
  16 | }
  17 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  constructor(@foo @bar() readonly arg: string) {}
  @foo @bar() x: string;
  @foo @bar() public getX() {
    return this.x;
  }
  @foo
  @bar()
  get y() {
    return this.x;
  }
  @foo @bar() set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  constructor(@foo @bar() readonly arg: string) {}
  @foo @bar() x: string;
  @foo @bar() private getX() {
    return this.x;
  }
  @foo
  @bar()
  get y() {
    return this.x;
  }
  @foo @bar() set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  constructor(@foo @bar() readonly arg: string) {}
  @foo @bar() x: string;
  @foo @bar() protected getX() {
    return this.x;
  }
  @foo
  @bar()
  get y() {
    return this.x;
  }
  @foo @bar() set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class DecoratedClass {
   3 |   constructor(@foo @bar() readonly arg: string) {}
   4 |   @foo @bar() x: string;
   5 |   @foo @bar() getX() {
   6 |     return this.x;
   7 |   }
>  8 |   @foo
     |   ^^^^
>  9 |   @bar()
     | ^^^^^^^^
> 10 |   get y() {
     | ^^^^^^^^
> 11 |     return this.x;
     | ^^^^^^^^
> 12 |   }
     | ^^^^ Missing accessibility modifier on get property accessor y.
  13 |   @foo @bar() set y(@foo @bar() value: x) {
  14 |     this.x = x;
  15 |   }
  16 | }
  17 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  constructor(@foo @bar() readonly arg: string) {}
  @foo @bar() x: string;
  @foo @bar() getX() {
    return this.x;
  }
  @foo
  @bar()
  public get y() {
    return this.x;
  }
  @foo @bar() set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  constructor(@foo @bar() readonly arg: string) {}
  @foo @bar() x: string;
  @foo @bar() getX() {
    return this.x;
  }
  @foo
  @bar()
  private get y() {
    return this.x;
  }
  @foo @bar() set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  constructor(@foo @bar() readonly arg: string) {}
  @foo @bar() x: string;
  @foo @bar() getX() {
    return this.x;
  }
  @foo
  @bar()
  protected get y() {
    return this.x;
  }
  @foo @bar() set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class DecoratedClass {
   3 |   constructor(@foo @bar() readonly arg: string) {}
   4 |   @foo @bar() x: string;
   5 |   @foo @bar() getX() {
   6 |     return this.x;
   7 |   }
   8 |   @foo
   9 |   @bar()
  10 |   get y() {
  11 |     return this.x;
  12 |   }
> 13 |   @foo @bar() set y(@foo @bar() value: x) {
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 14 |     this.x = x;
     | ^^^^^^^^^^^^^^^
> 15 |   }
     | ^^^^ Missing accessibility modifier on set property accessor y.
  16 | }
  17 |       
```

#### Suggestions

##### Add 'public' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  constructor(@foo @bar() readonly arg: string) {}
  @foo @bar() x: string;
  @foo @bar() getX() {
    return this.x;
  }
  @foo
  @bar()
  get y() {
    return this.x;
  }
  @foo @bar() public set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

##### Add 'private' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  constructor(@foo @bar() readonly arg: string) {}
  @foo @bar() x: string;
  @foo @bar() getX() {
    return this.x;
  }
  @foo
  @bar()
  get y() {
    return this.x;
  }
  @foo @bar() private set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```

##### Add 'protected' accessibility modifier

<!-- prettier-ignore -->
```ts

class DecoratedClass {
  constructor(@foo @bar() readonly arg: string) {}
  @foo @bar() x: string;
  @foo @bar() getX() {
    return this.x;
  }
  @foo
  @bar()
  get y() {
    return this.x;
  }
  @foo @bar() protected set y(@foo @bar() value: x) {
    this.x = x;
  }
}
      
```
