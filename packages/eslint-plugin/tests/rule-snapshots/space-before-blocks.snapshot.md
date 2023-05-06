# space-before-blocks

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

        enum Test{
          A = 2,
          B = 1,
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum Test {
          A = 2,
          B = 1,
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         enum Test{
    |                  ^ Missing space before opening brace.
  3 |           A = 2,
  4 |           B = 1,
  5 |         }
  6 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test{
          prop1: number;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop1: number;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         interface Test{
    |                       ^
> 3 |           prop1: number;
    | ^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |         }
    | ^^^^^^^^^^ Missing space before opening brace.
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

        enum Test{
          A = 2,
          B = 1,
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum Test {
          A = 2,
          B = 1,
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         enum Test{
    |                  ^ Missing space before opening brace.
  3 |           A = 2,
  4 |           B = 1,
  5 |         }
  6 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test{
          prop1: number;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop1: number;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         interface Test{
    |                       ^
> 3 |           prop1: number;
    | ^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |         }
    | ^^^^^^^^^^ Missing space before opening brace.
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        enum Test {
          A = 2,
          B = 1,
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum Test{
          A = 2,
          B = 1,
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         enum Test {
    |                   ^ Unexpected space before opening brace.
  3 |           A = 2,
  4 |           B = 1,
  5 |         }
  6 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop1: number;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test{
          prop1: number;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         interface Test {
    |                        ^
> 3 |           prop1: number;
    | ^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |         }
    | ^^^^^^^^^^ Unexpected space before opening brace.
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        enum Test {
          A = 2,
          B = 1,
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum Test{
          A = 2,
          B = 1,
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         enum Test {
    |                   ^ Unexpected space before opening brace.
  3 |           A = 2,
  4 |           B = 1,
  5 |         }
  6 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop1: number;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test{
          prop1: number;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         interface Test {
    |                        ^
> 3 |           prop1: number;
    | ^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |         }
    | ^^^^^^^^^^ Unexpected space before opening brace.
  5 |       
```
