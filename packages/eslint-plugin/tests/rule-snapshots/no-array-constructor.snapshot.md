# no-array-constructor

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
new Array();
```

### Fix Output

<!-- prettier-ignore -->
```ts
[];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | new Array();
    | ^^^^^^^^^^^ The array literal notation [] is preferable.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
Array();
```

### Fix Output

<!-- prettier-ignore -->
```ts
[];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | Array();
    | ^^^^^^^ The array literal notation [] is preferable.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
new Array(x, y);
```

### Fix Output

<!-- prettier-ignore -->
```ts
[x, y];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | new Array(x, y);
    | ^^^^^^^^^^^^^^^ The array literal notation [] is preferable.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
Array(x, y);
```

### Fix Output

<!-- prettier-ignore -->
```ts
[x, y];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | Array(x, y);
    | ^^^^^^^^^^^ The array literal notation [] is preferable.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
new Array(0, 1, 2);
```

### Fix Output

<!-- prettier-ignore -->
```ts
[0, 1, 2];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | new Array(0, 1, 2);
    | ^^^^^^^^^^^^^^^^^^ The array literal notation [] is preferable.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
Array(0, 1, 2);
```

### Fix Output

<!-- prettier-ignore -->
```ts
[0, 1, 2];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | Array(0, 1, 2);
    | ^^^^^^^^^^^^^^ The array literal notation [] is preferable.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

new Array(0, 1, 2);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

[0, 1, 2];
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | new Array(0, 1, 2);
    | ^^^^^^^^^^^^^^^^^^ The array literal notation [] is preferable.
  3 |       
```
