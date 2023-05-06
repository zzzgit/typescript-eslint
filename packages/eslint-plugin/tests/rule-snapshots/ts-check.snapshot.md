# ts-check

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-check
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-check
    | ^^^^^^^^^^^^ Do not use "@ts-check" because it alters compilation errors.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
/* @ts-check */
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /* @ts-check */
    | ^^^^^^^^^^^^^^^ Do not use "@ts-check" because it alters compilation errors.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

/*
 @ts-check
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
> 3 |  @ts-check
    | ^^^^^^^^^^
> 4 | */
    | ^^^ Do not use "@ts-check" because it alters compilation errors.
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
/** @ts-check */
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /** @ts-check */
    | ^^^^^^^^^^^^^^^^ Do not use "@ts-check" because it alters compilation errors.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-check: Suppress next line
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-check: Suppress next line
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use "@ts-check" because it alters compilation errors.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
/////@ts-check: Suppress next line
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /////@ts-check: Suppress next line
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use "@ts-check" because it alters compilation errors.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

if (false) {
  // @ts-check: Unreachable code error
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
> 3 |   // @ts-check: Unreachable code error
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use "@ts-check" because it alters compilation errors.
  4 |   console.log('hello');
  5 | }
  6 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-check
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-check
    | ^^^^^^^^^^^^ Include a description after the "@ts-check" directive to explain why the @ts-check is necessary. The description must be 3 characters or longer.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-check: TS1234 because xyz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-check: TS1234 because xyz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Include a description after the "@ts-check" directive to explain why the @ts-check is necessary. The description must be 25 characters or longer.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-check: TS1234
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-check: TS1234
    | ^^^^^^^^^^^^^^^^^^^^ The description for the "@ts-check" directive must match the ^: TS\d+ because .+$ format.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-check    : TS1234 because xyz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-check    : TS1234 because xyz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The description for the "@ts-check" directive must match the ^: TS\d+ because .+$ format.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-check 👨‍👩‍👧‍👦
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-check 👨‍👩‍👧‍👦
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Include a description after the "@ts-check" directive to explain why the @ts-check is necessary. The description must be 3 characters or longer.
```
