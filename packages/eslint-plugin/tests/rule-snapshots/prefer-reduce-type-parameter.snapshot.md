# prefer-reduce-type-parameter

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

declare const arr: string[];
arr.reduce<string>(acc => acc, arr.shift() as string);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare const arr: string[];
arr.reduce<string>(acc => acc, arr.shift());
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const arr: string[];
> 3 | arr.reduce<string>(acc => acc, arr.shift() as string);
    |                                ^^^^^^^^^^^^^^^^^^^^^ Unnecessary cast: Array#reduce accepts a type parameter for the default value.
  4 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
[1, 2, 3].reduce((a, s) => a.concat(s * 2), [] as number[]);
```

### Fix Output

<!-- prettier-ignore -->
```ts
[1, 2, 3].reduce<number[]>((a, s) => a.concat(s * 2), []);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | [1, 2, 3].reduce((a, s) => a.concat(s * 2), [] as number[]);
    |                                             ^^^^^^^^^^^^^^ Unnecessary cast: Array#reduce accepts a type parameter for the default value.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
[1, 2, 3].reduce((a, s) => a.concat(s * 2), <number[]>[]);
```

### Fix Output

<!-- prettier-ignore -->
```ts
[1, 2, 3].reduce<number[]>((a, s) => a.concat(s * 2), []);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | [1, 2, 3].reduce((a, s) => a.concat(s * 2), <number[]>[]);
    |                                             ^^^^^^^^^^^^ Unnecessary cast: Array#reduce accepts a type parameter for the default value.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
[1, 2, 3]?.reduce((a, s) => a.concat(s * 2), [] as number[]);
```

### Fix Output

<!-- prettier-ignore -->
```ts
[1, 2, 3]?.reduce<number[]>((a, s) => a.concat(s * 2), []);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | [1, 2, 3]?.reduce((a, s) => a.concat(s * 2), [] as number[]);
    |                                              ^^^^^^^^^^^^^^ Unnecessary cast: Array#reduce accepts a type parameter for the default value.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
[1, 2, 3]?.reduce((a, s) => a.concat(s * 2), <number[]>[]);
```

### Fix Output

<!-- prettier-ignore -->
```ts
[1, 2, 3]?.reduce<number[]>((a, s) => a.concat(s * 2), []);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | [1, 2, 3]?.reduce((a, s) => a.concat(s * 2), <number[]>[]);
    |                                              ^^^^^^^^^^^^ Unnecessary cast: Array#reduce accepts a type parameter for the default value.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

const names = ['a', 'b', 'c'];

names.reduce(
  (accum, name) => ({
    ...accum,
    [name]: true,
  }),
  {} as Record<string, boolean>,
);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const names = ['a', 'b', 'c'];

names.reduce<Record<string, boolean>>(
  (accum, name) => ({
    ...accum,
    [name]: true,
  }),
  {},
);
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const names = ['a', 'b', 'c'];
   3 |
   4 | names.reduce(
   5 |   (accum, name) => ({
   6 |     ...accum,
   7 |     [name]: true,
   8 |   }),
>  9 |   {} as Record<string, boolean>,
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary cast: Array#reduce accepts a type parameter for the default value.
  10 | );
  11 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

['a', 'b'].reduce(
  (accum, name) => ({
    ...accum,
    [name]: true,
  }),
  <Record<string, boolean>>{},
);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

['a', 'b'].reduce<Record<string, boolean>>(
  (accum, name) => ({
    ...accum,
    [name]: true,
  }),
  {},
);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | ['a', 'b'].reduce(
  3 |   (accum, name) => ({
  4 |     ...accum,
  5 |     [name]: true,
  6 |   }),
> 7 |   <Record<string, boolean>>{},
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary cast: Array#reduce accepts a type parameter for the default value.
  8 | );
  9 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

['a', 'b']['reduce'](
  (accum, name) => ({
    ...accum,
    [name]: true,
  }),
  {} as Record<string, boolean>,
);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

['a', 'b']['reduce']<Record<string, boolean>>(
  (accum, name) => ({
    ...accum,
    [name]: true,
  }),
  {},
);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | ['a', 'b']['reduce'](
  3 |   (accum, name) => ({
  4 |     ...accum,
  5 |     [name]: true,
  6 |   }),
> 7 |   {} as Record<string, boolean>,
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary cast: Array#reduce accepts a type parameter for the default value.
  8 | );
  9 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

function f<T, U extends T[]>(a: U) {
  return a.reduce(() => {}, {} as Record<string, boolean>);
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function f<T, U extends T[]>(a: U) {
  return a.reduce<Record<string, boolean>>(() => {}, {});
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function f<T, U extends T[]>(a: U) {
> 3 |   return a.reduce(() => {}, {} as Record<string, boolean>);
    |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unnecessary cast: Array#reduce accepts a type parameter for the default value.
  4 | }
  5 |       
```
