# ban-tslint-comment

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
/* tslint:disable */
```

### Fix Output

<!-- prettier-ignore -->
```ts

```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /* tslint:disable */
    | ^^^^^^^^^^^^^^^^^^^^ tslint comment detected: "/* tslint:disable */"
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
/* tslint:enable */
```

### Fix Output

<!-- prettier-ignore -->
```ts

```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /* tslint:enable */
    | ^^^^^^^^^^^^^^^^^^^ tslint comment detected: "/* tslint:enable */"
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
/* tslint:disable:rule1 rule2 rule3... */
```

### Fix Output

<!-- prettier-ignore -->
```ts

```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /* tslint:disable:rule1 rule2 rule3... */
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ tslint comment detected: "/* tslint:disable:rule1 rule2 rule3... */"
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
/* tslint:enable:rule1 rule2 rule3... */
```

### Fix Output

<!-- prettier-ignore -->
```ts

```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | /* tslint:enable:rule1 rule2 rule3... */
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ tslint comment detected: "/* tslint:enable:rule1 rule2 rule3... */"
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
// tslint:disable-next-line
```

### Fix Output

<!-- prettier-ignore -->
```ts

```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // tslint:disable-next-line
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ tslint comment detected: "// tslint:disable-next-line"
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
someCode(); // tslint:disable-line
```

### Fix Output

<!-- prettier-ignore -->
```ts
someCode();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | someCode(); // tslint:disable-line
    |             ^^^^^^^^^^^^^^^^^^^^^^ tslint comment detected: "// tslint:disable-line"
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
// tslint:disable-next-line:rule1 rule2 rule3...
```

### Fix Output

<!-- prettier-ignore -->
```ts

```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | // tslint:disable-next-line:rule1 rule2 rule3...
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ tslint comment detected: "// tslint:disable-next-line:rule1 rule2 rule3..."
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
const woah = doSomeStuff();
// tslint:disable-line
console.log(woah);

```

### Fix Output

<!-- prettier-ignore -->
```ts
const woah = doSomeStuff();
console.log(woah);

```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const woah = doSomeStuff();
> 2 | // tslint:disable-line
    | ^^^^^^^^^^^^^^^^^^^^^^ tslint comment detected: "// tslint:disable-line"
  3 | console.log(woah);
  4 |
```
