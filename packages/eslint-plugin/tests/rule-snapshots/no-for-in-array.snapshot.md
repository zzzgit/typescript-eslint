# no-for-in-array

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

for (const x in [3, 4, 5]) {
  console.log(x);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (const x in [3, 4, 5]) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   console.log(x);
    | ^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ For-in loops over arrays are forbidden. Use for-of or array.forEach instead.
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

const z = [3, 4, 5];
for (const x in z) {
  console.log(x);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const z = [3, 4, 5];
> 3 | for (const x in z) {
    | ^^^^^^^^^^^^^^^^^^^^
> 4 |   console.log(x);
    | ^^^^^^^^^^^^^^^^^
> 5 | }
    | ^^ For-in loops over arrays are forbidden. Use for-of or array.forEach instead.
  6 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

const fn = (arr: number[]) => {
  for (const x in arr) {
    console.log(x);
  }
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const fn = (arr: number[]) => {
> 3 |   for (const x in arr) {
    |   ^^^^^^^^^^^^^^^^^^^^^^
> 4 |     console.log(x);
    | ^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^ For-in loops over arrays are forbidden. Use for-of or array.forEach instead.
  6 | };
  7 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

const fn = (arr: number[] | string[]) => {
  for (const x in arr) {
    console.log(x);
  }
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const fn = (arr: number[] | string[]) => {
> 3 |   for (const x in arr) {
    |   ^^^^^^^^^^^^^^^^^^^^^^
> 4 |     console.log(x);
    | ^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^ For-in loops over arrays are forbidden. Use for-of or array.forEach instead.
  6 | };
  7 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

const fn = <T extends any[]>(arr: T) => {
  for (const x in arr) {
    console.log(x);
  }
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const fn = <T extends any[]>(arr: T) => {
> 3 |   for (const x in arr) {
    |   ^^^^^^^^^^^^^^^^^^^^^^
> 4 |     console.log(x);
    | ^^^^^^^^^^^^^^^^^^^
> 5 |   }
    | ^^^^ For-in loops over arrays are forbidden. Use for-of or array.forEach instead.
  6 | };
  7 |       
```
