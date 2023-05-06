# no-misused-new

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

interface I {
  new (): I;
  constructor(): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface I {
> 3 |   new (): I;
    |   ^^^^^^^^^^ Interfaces cannot be constructed, only classes.
  4 |   constructor(): void;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface I {
  3 |   new (): I;
> 4 |   constructor(): void;
    |   ^^^^^^^^^^^^^^^^^^^^ Interfaces cannot be constructed, only classes.
  5 | }
  6 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

interface G {
  new <T>(): G<T>;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface G {
> 3 |   new <T>(): G<T>;
    |   ^^^^^^^^^^^^^^^^ Interfaces cannot be constructed, only classes.
  4 | }
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

type T = {
  constructor(): void;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = {
> 3 |   constructor(): void;
    |   ^^^^^^^^^^^^^^^^^^^^ Interfaces cannot be constructed, only classes.
  4 | };
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

class C {
  new(): C;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class C {
> 3 |   new(): C;
    |   ^^^^^^^^^ Class cannot have method named `new`.
  4 | }
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

declare abstract class C {
  new(): C;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare abstract class C {
> 3 |   new(): C;
    |   ^^^^^^^^^ Class cannot have method named `new`.
  4 | }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

interface I {
  constructor(): '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface I {
> 3 |   constructor(): '';
    |   ^^^^^^^^^^^^^^^^^^ Interfaces cannot be constructed, only classes.
  4 | }
  5 |       
```
