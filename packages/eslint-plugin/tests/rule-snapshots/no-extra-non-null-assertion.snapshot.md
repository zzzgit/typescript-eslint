# no-extra-non-null-assertion

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

const foo: { bar: number } | null = null;
const bar = foo!!.bar;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const foo: { bar: number } | null = null;
const bar = foo!.bar;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo: { bar: number } | null = null;
> 3 | const bar = foo!!.bar;
    |             ^^^^ Forbidden extra non-null assertion.
  4 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

function foo(bar: number | undefined) {
  const bar: number = bar!!;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo(bar: number | undefined) {
  const bar: number = bar!;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(bar: number | undefined) {
> 3 |   const bar: number = bar!!;
    |                       ^^^^ Forbidden extra non-null assertion.
  4 | }
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

function foo(bar?: { n: number }) {
  return bar!?.n;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo(bar?: { n: number }) {
  return bar?.n;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(bar?: { n: number }) {
> 3 |   return bar!?.n;
    |          ^^^^ Forbidden extra non-null assertion.
  4 | }
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

function foo(bar?: { n: number }) {
  return bar!?.();
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo(bar?: { n: number }) {
  return bar?.();
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(bar?: { n: number }) {
> 3 |   return bar!?.();
    |          ^^^^ Forbidden extra non-null assertion.
  4 | }
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

const foo: { bar: number } | null = null;
const bar = (foo!)!.bar;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const foo: { bar: number } | null = null;
const bar = (foo)!.bar;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo: { bar: number } | null = null;
> 3 | const bar = (foo!)!.bar;
    |              ^^^^ Forbidden extra non-null assertion.
  4 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

function foo(bar?: { n: number }) {
  return (bar!)?.n;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo(bar?: { n: number }) {
  return (bar)?.n;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(bar?: { n: number }) {
> 3 |   return (bar!)?.n;
    |           ^^^^ Forbidden extra non-null assertion.
  4 | }
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

function foo(bar?: { n: number }) {
  return (bar)!?.n;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo(bar?: { n: number }) {
  return (bar)?.n;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(bar?: { n: number }) {
> 3 |   return (bar)!?.n;
    |          ^^^^^^ Forbidden extra non-null assertion.
  4 | }
  5 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

function foo(bar?: { n: number }) {
  return (bar!)?.();
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo(bar?: { n: number }) {
  return (bar)?.();
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(bar?: { n: number }) {
> 3 |   return (bar!)?.();
    |           ^^^^ Forbidden extra non-null assertion.
  4 | }
  5 |       
```
