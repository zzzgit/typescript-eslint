# no-duplicate-enum-values

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

enum E {
  A = 1,
  B = 1,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum E {
  3 |   A = 1,
> 4 |   B = 1,
    |   ^^^^^ Duplicate enum member value 1.
  5 | }
  6 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

enum E {
  A = 'A',
  B = 'A',
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum E {
  3 |   A = 'A',
> 4 |   B = 'A',
    |   ^^^^^^^ Duplicate enum member value A.
  5 | }
  6 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

enum E {
  A = 'A',
  B = 'A',
  C = 1,
  D = 1,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum E {
  3 |   A = 'A',
> 4 |   B = 'A',
    |   ^^^^^^^ Duplicate enum member value A.
  5 |   C = 1,
  6 |   D = 1,
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum E {
  3 |   A = 'A',
  4 |   B = 'A',
  5 |   C = 1,
> 6 |   D = 1,
    |   ^^^^^ Duplicate enum member value 1.
  7 | }
  8 |       
```
