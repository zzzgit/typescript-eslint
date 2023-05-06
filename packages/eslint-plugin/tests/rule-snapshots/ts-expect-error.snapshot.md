# ts-expect-error

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-expect-error
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-expect-error
    | ^^^^^^^^^^^^^^^^^^^ Do not use "@ts-expect-error" because it alters compilation errors.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
/* @ts-expect-error */
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /* @ts-expect-error */
    | ^^^^^^^^^^^^^^^^^^^^^^ Do not use "@ts-expect-error" because it alters compilation errors.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

/*
@ts-expect-error
*/
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | /*
    | ^^
> 3 | @ts-expect-error
    | ^^^^^^^^^^^^^^^^
> 4 | */
    | ^^^ Do not use "@ts-expect-error" because it alters compilation errors.
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
/** @ts-expect-error */
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /** @ts-expect-error */
    | ^^^^^^^^^^^^^^^^^^^^^^^ Do not use "@ts-expect-error" because it alters compilation errors.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-expect-error: Suppress next line
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-expect-error: Suppress next line
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use "@ts-expect-error" because it alters compilation errors.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
/////@ts-expect-error: Suppress next line
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /////@ts-expect-error: Suppress next line
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use "@ts-expect-error" because it alters compilation errors.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

if (false) {
  // @ts-expect-error: Unreachable code error
  console.log('hello');
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | if (false) {
> 3 |   // @ts-expect-error: Unreachable code error
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use "@ts-expect-error" because it alters compilation errors.
  4 |   console.log('hello');
  5 | }
  6 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-expect-error
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-expect-error
    | ^^^^^^^^^^^^^^^^^^^ Include a description after the "@ts-expect-error" directive to explain why the @ts-expect-error is necessary. The description must be 3 characters or longer.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-expect-error: TODO
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-expect-error: TODO
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Include a description after the "@ts-expect-error" directive to explain why the @ts-expect-error is necessary. The description must be 10 characters or longer.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-expect-error: TS1234 because xyz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-expect-error: TS1234 because xyz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Include a description after the "@ts-expect-error" directive to explain why the @ts-expect-error is necessary. The description must be 25 characters or longer.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-expect-error: TS1234
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-expect-error: TS1234
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ The description for the "@ts-expect-error" directive must match the ^: TS\d+ because .+$ format.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-expect-error    : TS1234 because xyz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-expect-error    : TS1234 because xyz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The description for the "@ts-expect-error" directive must match the ^: TS\d+ because .+$ format.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-expect-error 👨‍👩‍👧‍👦
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-expect-error 👨‍👩‍👧‍👦
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Include a description after the "@ts-expect-error" directive to explain why the @ts-expect-error is necessary. The description must be 3 characters or longer.
```
