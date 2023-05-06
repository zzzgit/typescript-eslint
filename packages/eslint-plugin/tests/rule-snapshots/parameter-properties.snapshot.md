# parameter-properties

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(readonly name: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(readonly name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(private name: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(private name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(protected name: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(protected name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(public name: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(public name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(private readonly name: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(private readonly name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(protected readonly name: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(protected readonly name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(public readonly name: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(public readonly name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(public name: string, age: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(public name: string, age: number) {}
    |               ^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(private name: string, private age: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(private name: string, private age: number) {}
    |               ^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(private name: string, private age: number) {}
    |                                     ^^^^^^^^^^^^^^^^^^^ Property age should be declared as a class property.
  4 | }
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(protected name: string, protected age: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(protected name: string, protected age: number) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(protected name: string, protected age: number) {}
    |                                       ^^^^^^^^^^^^^^^^^^^^^ Property age should be declared as a class property.
  4 | }
  5 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(public name: string, public age: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(public name: string, public age: number) {}
    |               ^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(public name: string, public age: number) {}
    |                                    ^^^^^^^^^^^^^^^^^^ Property age should be declared as a class property.
  4 | }
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(name: string) {}
  constructor(private name: string, age?: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   constructor(name: string) {}
> 4 |   constructor(private name: string, age?: number) {}
    |               ^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  5 | }
  6 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(private name: string) {}
  constructor(private name: string, age?: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(private name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 |   constructor(private name: string, age?: number) {}
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   constructor(private name: string) {}
> 4 |   constructor(private name: string, age?: number) {}
    |               ^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  5 | }
  6 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(private name: string) {}
  constructor(private name: string, private age?: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(private name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 |   constructor(private name: string, private age?: number) {}
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   constructor(private name: string) {}
> 4 |   constructor(private name: string, private age?: number) {}
    |               ^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   constructor(private name: string) {}
> 4 |   constructor(private name: string, private age?: number) {}
    |                                     ^^^^^^^^^^^^^^^^^^^^ Property age should be declared as a class property.
  5 | }
  6 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(name: string) {}
  constructor(protected name: string, age?: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   constructor(name: string) {}
> 4 |   constructor(protected name: string, age?: number) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  5 | }
  6 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(protected name: string) {}
  constructor(protected name: string, age?: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(protected name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 |   constructor(protected name: string, age?: number) {}
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   constructor(protected name: string) {}
> 4 |   constructor(protected name: string, age?: number) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  5 | }
  6 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(protected name: string) {}
  constructor(protected name: string, protected age?: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(protected name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 |   constructor(protected name: string, protected age?: number) {}
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   constructor(protected name: string) {}
> 4 |   constructor(protected name: string, protected age?: number) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   constructor(protected name: string) {}
> 4 |   constructor(protected name: string, protected age?: number) {}
    |                                       ^^^^^^^^^^^^^^^^^^^^^^ Property age should be declared as a class property.
  5 | }
  6 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(name: string) {}
  constructor(public name: string, age?: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   constructor(name: string) {}
> 4 |   constructor(public name: string, age?: number) {}
    |               ^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  5 | }
  6 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(public name: string) {}
  constructor(public name: string, age?: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(public name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 |   constructor(public name: string, age?: number) {}
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   constructor(public name: string) {}
> 4 |   constructor(public name: string, age?: number) {}
    |               ^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  5 | }
  6 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(public name: string) {}
  constructor(public name: string, public age?: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(public name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 |   constructor(public name: string, public age?: number) {}
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   constructor(public name: string) {}
> 4 |   constructor(public name: string, public age?: number) {}
    |               ^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   constructor(public name: string) {}
> 4 |   constructor(public name: string, public age?: number) {}
    |                                    ^^^^^^^^^^^^^^^^^^^ Property age should be declared as a class property.
  5 | }
  6 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(readonly name: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(readonly name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(private name: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(private name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(protected name: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(protected name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(public name: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(public name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(private readonly name: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(private readonly name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(protected readonly name: string) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   constructor(protected readonly name: string) {}
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Property name should be declared as a class property.
  4 | }
  5 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(private name: string) {}
  constructor(private name: string, protected age?: number) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   constructor(private name: string) {}
> 4 |   constructor(private name: string, protected age?: number) {}
    |                                     ^^^^^^^^^^^^^^^^^^^^^^ Property age should be declared as a class property.
  5 | }
  6 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  member: string;

  constructor(member: string) {
    this.member = member;
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
> 3 |   member: string;
    |   ^^^^^^^^^^^^^^^ Property member should be declared as a parameter property.
  4 |
  5 |   constructor(member: string) {
  6 |     this.member = member;
  7 |   }
  8 | }
  9 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor(member: string) {
    this.member = member;
  }

  member: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   constructor(member: string) {
  4 |     this.member = member;
  5 |   }
  6 |
> 7 |   member: string;
    |   ^^^^^^^^^^^^^^^ Property member should be declared as a parameter property.
  8 | }
  9 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  member;
  constructor(member) {
    this.member = member;
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
> 3 |   member;
    |   ^^^^^^^ Property member should be declared as a parameter property.
  4 |   constructor(member) {
  5 |     this.member = member;
  6 |   }
  7 | }
  8 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public member: string;
  constructor(member: string) {
    this.member = member;
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
> 3 |   public member: string;
    |   ^^^^^^^^^^^^^^^^^^^^^^ Property member should be declared as a parameter property.
  4 |   constructor(member: string) {
  5 |     this.member = member;
  6 |   }
  7 | }
  8 |       
```
