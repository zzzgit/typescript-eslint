# ts-nocheck

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-nocheck
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-nocheck
    | ^^^^^^^^^^^^^^ Do not use "@ts-nocheck" because it alters compilation errors.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-nocheck
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-nocheck
    | ^^^^^^^^^^^^^^ Do not use "@ts-nocheck" because it alters compilation errors.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
/* @ts-nocheck */
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /* @ts-nocheck */
    | ^^^^^^^^^^^^^^^^^ Do not use "@ts-nocheck" because it alters compilation errors.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

/*
 @ts-nocheck
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
> 3 |  @ts-nocheck
    | ^^^^^^^^^^^^
> 4 | */
    | ^^^ Do not use "@ts-nocheck" because it alters compilation errors.
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
/** @ts-nocheck */
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /** @ts-nocheck */
    | ^^^^^^^^^^^^^^^^^^ Do not use "@ts-nocheck" because it alters compilation errors.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-nocheck: Suppress next line
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-nocheck: Suppress next line
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use "@ts-nocheck" because it alters compilation errors.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
/////@ts-nocheck: Suppress next line
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /////@ts-nocheck: Suppress next line
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use "@ts-nocheck" because it alters compilation errors.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

if (false) {
  // @ts-nocheck: Unreachable code error
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
> 3 |   // @ts-nocheck: Unreachable code error
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use "@ts-nocheck" because it alters compilation errors.
  4 |   console.log('hello');
  5 | }
  6 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-nocheck
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-nocheck
    | ^^^^^^^^^^^^^^ Include a description after the "@ts-nocheck" directive to explain why the @ts-nocheck is necessary. The description must be 3 characters or longer.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-nocheck: TS1234 because xyz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-nocheck: TS1234 because xyz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Include a description after the "@ts-nocheck" directive to explain why the @ts-nocheck is necessary. The description must be 25 characters or longer.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-nocheck: TS1234
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-nocheck: TS1234
    | ^^^^^^^^^^^^^^^^^^^^^^ The description for the "@ts-nocheck" directive must match the ^: TS\d+ because .+$ format.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-nocheck    : TS1234 because xyz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-nocheck    : TS1234 because xyz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The description for the "@ts-nocheck" directive must match the ^: TS\d+ because .+$ format.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-nocheck 👨‍👩‍👧‍👦
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-nocheck 👨‍👩‍👧‍👦
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Include a description after the "@ts-nocheck" directive to explain why the @ts-nocheck is necessary. The description must be 3 characters or longer.
```
