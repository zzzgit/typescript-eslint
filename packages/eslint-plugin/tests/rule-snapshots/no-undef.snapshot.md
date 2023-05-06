# no-undef

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
a = 5;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a = 5;
    | ^ 'a' is not defined.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
a?.b = 5;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a?.b = 5;
    | ^ 'a' is not defined.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
a()?.b = 5;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a()?.b = 5;
    | ^ 'a' is not defined.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```tsx
<Foo />;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | <Foo />;
    |  ^^^ 'Foo' is not defined.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```tsx

function Foo() {}
<Foo attr={x} />;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
  1 |
  2 | function Foo() {}
> 3 | <Foo attr={x} />;
    |            ^ 'x' is not defined.
  4 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```tsx

function Foo() {}
<Foo {...x} />;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
  1 |
  2 | function Foo() {}
> 3 | <Foo {...x} />;
    |          ^ 'x' is not defined.
  4 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```tsx

function Foo() {}
<Foo<T> />;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
  1 |
  2 | function Foo() {}
> 3 | <Foo<T> />;
    |      ^ 'T' is not defined.
  4 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```tsx

function Foo() {}
<Foo>{x}</Foo>;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
  1 |
  2 | function Foo() {}
> 3 | <Foo>{x}</Foo>;
    |       ^ 'x' is not defined.
  4 |       
```
