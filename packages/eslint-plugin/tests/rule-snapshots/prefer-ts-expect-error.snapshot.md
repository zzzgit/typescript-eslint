# prefer-ts-expect-error

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-ignore
```

### Fix Output

<!-- prettier-ignore -->
```ts
// @ts-expect-error
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-ignore
    | ^^^^^^^^^^^^^ Use "@ts-expect-error" to ensure an error is actually being suppressed.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-ignore: Suppress next line
```

### Fix Output

<!-- prettier-ignore -->
```ts
// @ts-expect-error: Suppress next line
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-ignore: Suppress next line
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use "@ts-expect-error" to ensure an error is actually being suppressed.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
///@ts-ignore: Suppress next line
```

### Fix Output

<!-- prettier-ignore -->
```ts
///@ts-expect-error: Suppress next line
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ///@ts-ignore: Suppress next line
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use "@ts-expect-error" to ensure an error is actually being suppressed.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

if (false) {
  // @ts-ignore: Unreachable code error
  console.log('hello');
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

if (false) {
  // @ts-expect-error: Unreachable code error
  console.log('hello');
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | if (false) {
> 3 |   // @ts-ignore: Unreachable code error
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use "@ts-expect-error" to ensure an error is actually being suppressed.
  4 |   console.log('hello');
  5 | }
  6 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
/* @ts-ignore */
```

### Fix Output

<!-- prettier-ignore -->
```ts
/* @ts-expect-error */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /* @ts-ignore */
    | ^^^^^^^^^^^^^^^^ Use "@ts-expect-error" to ensure an error is actually being suppressed.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

/**
 * Explaining comment
 *
 * @ts-ignore */
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

/**
 * Explaining comment
 *
 * @ts-expect-error */
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | /**
    | ^^^
> 3 |  * Explaining comment
    | ^^^^^^^^^^^^^^^^^^^^^
> 4 |  *
    | ^^^^^^^^^^^^^^^^^^^^^
> 5 |  * @ts-ignore */
    | ^^^^^^^^^^^^^^^^^ Use "@ts-expect-error" to ensure an error is actually being suppressed.
  6 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
/* @ts-ignore in a single block */
```

### Fix Output

<!-- prettier-ignore -->
```ts
/* @ts-expect-error in a single block */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /* @ts-ignore in a single block */
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use "@ts-expect-error" to ensure an error is actually being suppressed.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

/*
// @ts-ignore in a block with single line comments */
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

/*
// @ts-expect-error in a block with single line comments */
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | /*
    | ^^
> 3 | // @ts-ignore in a block with single line comments */
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use "@ts-expect-error" to ensure an error is actually being suppressed.
  4 |       
```
