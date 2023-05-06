# no-dupe-class-members

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  foo() {}
  foo() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
  3 |   foo() {}
> 4 |   foo() {}
    |   ^^^^^^^^ Duplicate name 'foo'.
  5 | }
  6 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

!class A {
  foo() {}
  foo() {}
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | !class A {
  3 |   foo() {}
> 4 |   foo() {}
    |   ^^^^^^^^ Duplicate name 'foo'.
  5 | };
  6 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  'foo'() {}
  'foo'() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
  3 |   'foo'() {}
> 4 |   'foo'() {}
    |   ^^^^^^^^^^ Duplicate name 'foo'.
  5 | }
  6 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  10() {}
  1e1() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
  3 |   10() {}
> 4 |   1e1() {}
    |   ^^^^^^^^ Duplicate name '10'.
  5 | }
  6 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  foo() {}
  foo() {}
  foo() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
  3 |   foo() {}
> 4 |   foo() {}
    |   ^^^^^^^^ Duplicate name 'foo'.
  5 |   foo() {}
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
  3 |   foo() {}
  4 |   foo() {}
> 5 |   foo() {}
    |   ^^^^^^^^ Duplicate name 'foo'.
  6 | }
  7 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  static foo() {}
  static foo() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
  3 |   static foo() {}
> 4 |   static foo() {}
    |   ^^^^^^^^^^^^^^^ Duplicate name 'foo'.
  5 | }
  6 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  foo() {}
  get foo() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
  3 |   foo() {}
> 4 |   get foo() {}
    |   ^^^^^^^^^^^^ Duplicate name 'foo'.
  5 | }
  6 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  set foo(value) {}
  foo() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
  3 |   set foo(value) {}
> 4 |   foo() {}
    |   ^^^^^^^^ Duplicate name 'foo'.
  5 | }
  6 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  foo;
  foo = 42;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
  3 |   foo;
> 4 |   foo = 42;
    |   ^^^^^^^^^ Duplicate name 'foo'.
  5 | }
  6 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  foo;
  foo() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
  3 |   foo;
> 4 |   foo() {}
    |   ^^^^^^^^ Duplicate name 'foo'.
  5 | }
  6 |       
```
