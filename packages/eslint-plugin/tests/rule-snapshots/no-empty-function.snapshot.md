# no-empty-function

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

class Person {
  constructor(name: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Person {
> 3 |   constructor(name: string) {}
    |                             ^^ Unexpected empty constructor.
  4 | }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

class Person {
  otherMethod(name: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Person {
> 3 |   otherMethod(name: string) {}
    |                             ^^ Unexpected empty method 'otherMethod'.
  4 | }
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  private constructor() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   private constructor() {}
    |                         ^^ Unexpected empty constructor.
  4 | }
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  protected constructor() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   protected constructor() {}
    |                           ^^ Unexpected empty constructor.
  4 | }
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function foo() {}
    |                ^^ Unexpected empty function 'foo'.
  3 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  @decorator()
  foo() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   @decorator()
> 4 |   foo() {}
    |         ^^ Unexpected empty method 'foo'.
  5 | }
  6 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

class Foo extends Base {
  override foo() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo extends Base {
> 3 |   override foo() {}
    |                  ^^ Unexpected empty method 'foo'.
  4 | }
  5 |       
```
