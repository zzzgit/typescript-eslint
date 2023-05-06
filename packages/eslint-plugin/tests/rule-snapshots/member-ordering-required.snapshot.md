# member-ordering-required

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  m: string;
  d?: string;
  b?: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
  3 |   m: string;
  4 |   d?: string;
> 5 |   b?: string;
    |   ^^^^^^^^^^^ Member b should be declared before member d.
  6 | }
  7 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  a: string;
  b?: string;
  c: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
  3 |   a: string;
> 4 |   b?: string;
    |   ^^^^^^^^^^^ Member b should be declared after all required members.
  5 |   c: string;
  6 | }
  7 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

class X {
  a?: string;
  static {}
  b?: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class X {
> 3 |   a?: string;
    |   ^^^^^^^^^^^ Member a should be declared after all required members.
  4 |   static {}
  5 |   b?: string;
  6 | }
  7 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

class X {
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
  2 | class X {
  3 |   b: string;
> 4 |   a: string;
    |   ^^^^^^^^^^ Member a should be declared before member b.
  5 | }
  6 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  d?: string;
  b?: string;
  m: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
  3 |   d?: string;
> 4 |   b?: string;
    |   ^^^^^^^^^^^ Member b should be declared before member d.
  5 |   m: string;
  6 | }
  7 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  a?: string;
  b: string;
  c?: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
  3 |   a?: string;
> 4 |   b: string;
    |   ^^^^^^^^^^ Member b should be declared after all optional members.
  5 |   c?: string;
  6 | }
  7 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  a?: string;
  b?: string;
  f: string;
  c?: string;
  d?: string;
  g: string;
  h: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Test {
   3 |   a?: string;
   4 |   b?: string;
>  5 |   f: string;
     |   ^^^^^^^^^^ Member f should be declared after all optional members.
   6 |   c?: string;
   7 |   d?: string;
   8 |   g: string;
   9 |   h: string;
  10 | }
  11 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  a: string;
  b: string;
  f?: string;
  c?: string;
  d?: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
> 3 |   a: string;
    |   ^^^^^^^^^^ Member a should be declared after all optional members.
  4 |   b: string;
  5 |   f?: string;
  6 |   c?: string;
  7 |   d?: string;
  8 | }
  9 |       
```
