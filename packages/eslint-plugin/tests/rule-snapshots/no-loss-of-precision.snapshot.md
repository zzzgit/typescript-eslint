# no-loss-of-precision

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
const x = 9007199254740993;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = 9007199254740993;
    |           ^^^^^^^^^^^^^^^^ This number literal will lose precision at runtime.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
const x = 9_007_199_254_740_993;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = 9_007_199_254_740_993;
    |           ^^^^^^^^^^^^^^^^^^^^^ This number literal will lose precision at runtime.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
const x = 9_007_199_254_740.993e3;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = 9_007_199_254_740.993e3;
    |           ^^^^^^^^^^^^^^^^^^^^^^^ This number literal will lose precision at runtime.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
const x = 0b100_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_001;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = 0b100_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000_001;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ This number literal will lose precision at runtime.
```
