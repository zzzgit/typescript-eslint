# prefer-namespace-keyword

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
module foo {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
namespace foo {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | module foo {}
    | ^^^^^^^^^^^^^ Use 'namespace' instead of 'module' to declare custom TypeScript modules.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
declare module foo {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
declare namespace foo {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare module foo {}
    | ^^^^^^^^^^^^^^^^^^^^^ Use 'namespace' instead of 'module' to declare custom TypeScript modules.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

declare module foo {
  declare module bar {}
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare namespace foo {
  declare namespace bar {}
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | declare module foo {
    | ^^^^^^^^^^^^^^^^^^^^
> 3 |   declare module bar {}
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ Use 'namespace' instead of 'module' to declare custom TypeScript modules.
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare module foo {
> 3 |   declare module bar {}
    |   ^^^^^^^^^^^^^^^^^^^^^ Use 'namespace' instead of 'module' to declare custom TypeScript modules.
  4 | }
  5 |       
```
