# non-nullable-type-assertion-style - noUncheckedIndexedAccess

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

function first<T extends string | number>(array: ArrayLike<T>): T | null {
  return array.length > 0 ? (array[0] as T) : null;
}
        
```

### Fix Output

<!-- prettier-ignore -->
```ts

function first<T extends string | number>(array: ArrayLike<T>): T | null {
  return array.length > 0 ? (array[0]!) : null;
}
        
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function first<T extends string | number>(array: ArrayLike<T>): T | null {
> 3 |   return array.length > 0 ? (array[0] as T) : null;
    |                              ^^^^^^^^^^^^^ Use a ! assertion to more succinctly remove null and undefined from the type.
  4 | }
  5 |         
```
