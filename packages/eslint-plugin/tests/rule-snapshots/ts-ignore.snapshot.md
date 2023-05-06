# ts-ignore

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-ignore
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-ignore
    | ^^^^^^^^^^^^^ Do not use "@ts-ignore" because it alters compilation errors.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-ignore
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-ignore
    | ^^^^^^^^^^^^^ Do not use "@ts-ignore" because it alters compilation errors.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
/* @ts-ignore */
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /* @ts-ignore */
    | ^^^^^^^^^^^^^^^^ Do not use "@ts-ignore" because it alters compilation errors.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

/*
 @ts-ignore
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
> 3 |  @ts-ignore
    | ^^^^^^^^^^^
> 4 | */
    | ^^^ Do not use "@ts-ignore" because it alters compilation errors.
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
/** @ts-ignore */
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /** @ts-ignore */
    | ^^^^^^^^^^^^^^^^^ Do not use "@ts-ignore" because it alters compilation errors.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-ignore: Suppress next line
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-ignore: Suppress next line
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use "@ts-ignore" because it alters compilation errors.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
/////@ts-ignore: Suppress next line
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /////@ts-ignore: Suppress next line
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use "@ts-ignore" because it alters compilation errors.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

if (false) {
  // @ts-ignore: Unreachable code error
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
> 3 |   // @ts-ignore: Unreachable code error
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use "@ts-ignore" because it alters compilation errors.
  4 |   console.log('hello');
  5 | }
  6 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-ignore
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-ignore
    | ^^^^^^^^^^^^^ Include a description after the "@ts-ignore" directive to explain why the @ts-ignore is necessary. The description must be 3 characters or longer.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-ignore         
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-ignore         
    | ^^^^^^^^^^^^^^^^^^^^^^ Include a description after the "@ts-ignore" directive to explain why the @ts-ignore is necessary. The description must be 3 characters or longer.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-ignore    .
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-ignore    .
    | ^^^^^^^^^^^^^^^^^^ Include a description after the "@ts-ignore" directive to explain why the @ts-ignore is necessary. The description must be 3 characters or longer.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-ignore: TS1234 because xyz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-ignore: TS1234 because xyz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Include a description after the "@ts-ignore" directive to explain why the @ts-ignore is necessary. The description must be 25 characters or longer.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-ignore: TS1234
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-ignore: TS1234
    | ^^^^^^^^^^^^^^^^^^^^^ The description for the "@ts-ignore" directive must match the ^: TS\d+ because .+$ format.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-ignore    : TS1234 because xyz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-ignore    : TS1234 because xyz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The description for the "@ts-ignore" directive must match the ^: TS\d+ because .+$ format.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
// @ts-ignore 👨‍👩‍👧‍👦
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // @ts-ignore 👨‍👩‍👧‍👦
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Include a description after the "@ts-ignore" directive to explain why the @ts-ignore is necessary. The description must be 3 characters or longer.
```
