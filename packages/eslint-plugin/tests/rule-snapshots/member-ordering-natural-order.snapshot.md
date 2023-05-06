# member-ordering-natural-order

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

interface Example {
  1: number;
  10: number;
  5: number;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Example {
  3 |   1: number;
  4 |   10: number;
> 5 |   5: number;
    |   ^^^^^^^^^^ Member 5 should be declared before member 10.
  6 | }
  7 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

interface Example {
  new (): unknown;

  a1(): void;
  a10(): void;
  a5(): void;
  B5(): void;
  B10(): void;
  B1(): void;

  a5: number;
  a10: number;
  B1: number;
  a1: number;
  B5: number;
  B10: number;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Example {
   3 |   new (): unknown;
   4 |
   5 |   a1(): void;
   6 |   a10(): void;
>  7 |   a5(): void;
     |   ^^^^^^^^^^^ Member a5 should be declared before member a10.
   8 |   B5(): void;
   9 |   B10(): void;
  10 |   B1(): void;
  11 |
  12 |   a5: number;
  13 |   a10: number;
  14 |   B1: number;
  15 |   a1: number;
  16 |   B5: number;
  17 |   B10: number;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Example {
   3 |   new (): unknown;
   4 |
   5 |   a1(): void;
   6 |   a10(): void;
   7 |   a5(): void;
   8 |   B5(): void;
   9 |   B10(): void;
> 10 |   B1(): void;
     |   ^^^^^^^^^^^ Member B1 should be declared before member B10.
  11 |
  12 |   a5: number;
  13 |   a10: number;
  14 |   B1: number;
  15 |   a1: number;
  16 |   B5: number;
  17 |   B10: number;
  18 | }
  19 |       
```
