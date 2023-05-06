# no-unnecessary-boolean-literal-compare

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
true === true;
```

### Fix Output

<!-- prettier-ignore -->
```ts
true;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | true === true;
    | ^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of using it directly.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
false !== true;
```

### Fix Output

<!-- prettier-ignore -->
```ts
!false;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | false !== true;
    | ^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of negating it.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (varBoolean !== false) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (varBoolean) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const varBoolean: boolean;
> 3 |         if (varBoolean !== false) {
    |             ^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of negating it.
  4 |         }
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

        declare const varTrue: true;
        if (varTrue !== true) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const varTrue: true;
        if (!varTrue) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const varTrue: true;
> 3 |         if (varTrue !== true) {
    |             ^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of negating it.
  4 |         }
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        declare const varTrueOrUndefined: true | undefined;
        if (varTrueOrUndefined === true) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const varTrueOrUndefined: true | undefined;
        if (varTrueOrUndefined) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const varTrueOrUndefined: true | undefined;
> 3 |         if (varTrueOrUndefined === true) {
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a nullable boolean value to true instead of using it directly.
  4 |         }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        declare const varFalseOrNull: false | null;
        if (varFalseOrNull !== true) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const varFalseOrNull: false | null;
        if (!varFalseOrNull) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const varFalseOrNull: false | null;
> 3 |         if (varFalseOrNull !== true) {
    |             ^^^^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a nullable boolean value to true instead of negating it.
  4 |         }
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        declare const varBooleanOrNull: boolean | null;
        declare const otherBoolean: boolean;
        if (varBooleanOrNull === false && otherBoolean) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const varBooleanOrNull: boolean | null;
        declare const otherBoolean: boolean;
        if (!(varBooleanOrNull ?? true) && otherBoolean) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const varBooleanOrNull: boolean | null;
  3 |         declare const otherBoolean: boolean;
> 4 |         if (varBooleanOrNull === false && otherBoolean) {
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a nullable boolean value to false instead of using the ?? operator to provide a default.
  5 |         }
  6 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        declare const varBooleanOrNull: boolean | null;
        declare const otherBoolean: boolean;
        if (!(varBooleanOrNull === false) || otherBoolean) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const varBooleanOrNull: boolean | null;
        declare const otherBoolean: boolean;
        if ((varBooleanOrNull ?? true) || otherBoolean) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const varBooleanOrNull: boolean | null;
  3 |         declare const otherBoolean: boolean;
> 4 |         if (!(varBooleanOrNull === false) || otherBoolean) {
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a nullable boolean value to false instead of using the ?? operator to provide a default.
  5 |         }
  6 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        declare const varTrueOrFalseOrUndefined: true | false | undefined;
        declare const otherBoolean: boolean;
        if (varTrueOrFalseOrUndefined !== false && !otherBoolean) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const varTrueOrFalseOrUndefined: true | false | undefined;
        declare const otherBoolean: boolean;
        if ((varTrueOrFalseOrUndefined ?? true) && !otherBoolean) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const varTrueOrFalseOrUndefined: true | false | undefined;
  3 |         declare const otherBoolean: boolean;
> 4 |         if (varTrueOrFalseOrUndefined !== false && !otherBoolean) {
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a nullable boolean value to false instead of using the ?? operator to provide a default.
  5 |         }
  6 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (false !== varBoolean) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (varBoolean) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const varBoolean: boolean;
> 3 |         if (false !== varBoolean) {
    |             ^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of negating it.
  4 |         }
  5 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (true !== varBoolean) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (!varBoolean) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const varBoolean: boolean;
> 3 |         if (true !== varBoolean) {
    |             ^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of negating it.
  4 |         }
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

        declare const x;
        if ((x instanceof Error) === false) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const x;
        if (!(x instanceof Error)) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const x;
> 3 |         if ((x instanceof Error) === false) {
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of using it directly.
  4 |         }
  5 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

        declare const x;
        if (false === (x instanceof Error)) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const x;
        if (!(x instanceof Error)) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const x;
> 3 |         if (false === (x instanceof Error)) {
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of using it directly.
  4 |         }
  5 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

        declare const x;
        if (x instanceof Error === false) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const x;
        if (!(x instanceof Error)) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const x;
> 3 |         if (x instanceof Error === false) {
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of using it directly.
  4 |         }
  5 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

        declare const x;
        if (typeof x === 'string' === false) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const x;
        if (!(typeof x === 'string')) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const x;
> 3 |         if (typeof x === 'string' === false) {
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of using it directly.
  4 |         }
  5 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

        declare const x;
        if (x instanceof Error === (false)) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const x;
        if (!(x instanceof Error)) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const x;
> 3 |         if (x instanceof Error === (false)) {
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of using it directly.
  4 |         }
  5 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

        declare const x;
        if ((false) === x instanceof Error) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const x;
        if (!(x instanceof Error)) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const x;
> 3 |         if ((false) === x instanceof Error) {
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of using it directly.
  4 |         }
  5 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (!(varBoolean !== false)) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (!varBoolean) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const varBoolean: boolean;
> 3 |         if (!(varBoolean !== false)) {
    |               ^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of negating it.
  4 |         }
  5 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (!(varBoolean === false)) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (varBoolean) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const varBoolean: boolean;
> 3 |         if (!(varBoolean === false)) {
    |               ^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of using it directly.
  4 |         }
  5 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (!(varBoolean instanceof Event == false)) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (varBoolean instanceof Event) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const varBoolean: boolean;
> 3 |         if (!(varBoolean instanceof Event == false)) {
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of using it directly.
  4 |         }
  5 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (varBoolean instanceof Event == false) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (!(varBoolean instanceof Event)) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const varBoolean: boolean;
> 3 |         if (varBoolean instanceof Event == false) {
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of using it directly.
  4 |         }
  5 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (!((varBoolean ?? false) !== false)) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (!(varBoolean ?? false)) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const varBoolean: boolean;
> 3 |         if (!((varBoolean ?? false) !== false)) {
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of negating it.
  4 |         }
  5 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (!((varBoolean ?? false) === false)) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (varBoolean ?? false) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const varBoolean: boolean;
> 3 |         if (!((varBoolean ?? false) === false)) {
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of using it directly.
  4 |         }
  5 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (!((varBoolean ?? true) !== false)) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const varBoolean: boolean;
        if (!(varBoolean ?? true)) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const varBoolean: boolean;
> 3 |         if (!((varBoolean ?? true) !== false)) {
    |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ This expression unnecessarily compares a boolean value to a boolean instead of negating it.
  4 |         }
  5 |       
```
