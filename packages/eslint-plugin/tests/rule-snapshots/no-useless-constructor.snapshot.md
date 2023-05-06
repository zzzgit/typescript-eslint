# no-useless-constructor

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  constructor() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
> 3 |   constructor() {}
    |   ^^^^^^^^^^^^^^^^ Useless constructor.
  4 | }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

class A extends B {
  constructor() {
    super();
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A extends B {
> 3 |   constructor() {
    |   ^^^^^^^^^^^^^^^
> 4 |     super();
    | ^^^^^^^^^^^^
> 5 |   }
    | ^^^^ Useless constructor.
  6 | }
  7 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

class A extends B {
  constructor(foo) {
    super(foo);
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A extends B {
> 3 |   constructor(foo) {
    |   ^^^^^^^^^^^^^^^^^^
> 4 |     super(foo);
    | ^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^ Useless constructor.
  6 | }
  7 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

class A extends B {
  constructor(foo, bar) {
    super(foo, bar);
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A extends B {
> 3 |   constructor(foo, bar) {
    |   ^^^^^^^^^^^^^^^^^^^^^^^
> 4 |     super(foo, bar);
    | ^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^ Useless constructor.
  6 | }
  7 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

class A extends B {
  constructor(...args) {
    super(...args);
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A extends B {
> 3 |   constructor(...args) {
    |   ^^^^^^^^^^^^^^^^^^^^^^
> 4 |     super(...args);
    | ^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^ Useless constructor.
  6 | }
  7 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

class A extends B.C {
  constructor() {
    super(...arguments);
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A extends B.C {
> 3 |   constructor() {
    |   ^^^^^^^^^^^^^^^
> 4 |     super(...arguments);
    | ^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^ Useless constructor.
  6 | }
  7 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

class A extends B {
  constructor(a, b, ...c) {
    super(...arguments);
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A extends B {
> 3 |   constructor(a, b, ...c) {
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |     super(...arguments);
    | ^^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^ Useless constructor.
  6 | }
  7 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

class A extends B {
  constructor(a, b, ...c) {
    super(a, b, ...c);
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A extends B {
> 3 |   constructor(a, b, ...c) {
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |     super(a, b, ...c);
    | ^^^^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^ Useless constructor.
  6 | }
  7 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  public constructor() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
> 3 |   public constructor() {}
    |   ^^^^^^^^^^^^^^^^^^^^^^^ Useless constructor.
  4 | }
  5 |       
```
