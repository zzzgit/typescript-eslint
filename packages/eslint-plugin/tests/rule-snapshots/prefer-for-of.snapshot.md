# prefer-for-of

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

for (var a = 0; a < obj.arr.length; a++) {
  console.log(obj.arr[a]);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (var a = 0; a < obj.arr.length; a++) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   console.log(obj.arr[a]);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

for (var b = 0; b < arr.length; b++) console.log(arr[b]);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (var b = 0; b < arr.length; b++) console.log(arr[b]);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  3 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

for (let a = 0; a < arr.length; a++) {
  console.log(arr[a]);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (let a = 0; a < arr.length; a++) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   console.log(arr[a]);
    | ^^^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

for (var b = 0; b < arr.length; b++) console?.log(arr[b]);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (var b = 0; b < arr.length; b++) console?.log(arr[b]);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  3 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

for (let a = 0; a < arr.length; a++) {
  console?.log(arr[a]);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (let a = 0; a < arr.length; a++) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   console?.log(arr[a]);
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

for (let a = 0; a < arr.length; ++a) {
  arr[a].whatever();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (let a = 0; a < arr.length; ++a) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   arr[a].whatever();
    | ^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

for (let x = 0; x < arr.length; x++) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (let x = 0; x < arr.length; x++) {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  3 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

for (let x = 0; x < arr.length; x += 1) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (let x = 0; x < arr.length; x += 1) {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  3 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

for (let x = 0; x < arr.length; x = x + 1) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (let x = 0; x < arr.length; x = x + 1) {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  3 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

for (let x = 0; x < arr.length; x = 1 + x) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (let x = 0; x < arr.length; x = 1 + x) {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  3 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

for (let shadow = 0; shadow < arr.length; shadow++) {
  for (let shadow = 0; shadow < arr.length; shadow++) {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (let shadow = 0; shadow < arr.length; shadow++) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   for (let shadow = 0; shadow < arr.length; shadow++) {}
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | for (let shadow = 0; shadow < arr.length; shadow++) {
> 3 |   for (let shadow = 0; shadow < arr.length; shadow++) {}
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  4 | }
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = 1;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (let i = 0; i < arr.length; i++) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   obj[arr[i]] = 1;
    | ^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  5 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

for (let i = 0; i < arr.length; i++) {
  delete obj[arr[i]];
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (let i = 0; i < arr.length; i++) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   delete obj[arr[i]];
    | ^^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  5 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

for (let i = 0; i < arr.length; i++) {
  [obj[arr[i]]] = [1];
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (let i = 0; i < arr.length; i++) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   [obj[arr[i]]] = [1];
    | ^^^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  5 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

for (let i = 0; i < arr.length; i++) {
  [...obj[arr[i]]] = [1];
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (let i = 0; i < arr.length; i++) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   [...obj[arr[i]]] = [1];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  5 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

for (let i = 0; i < arr.length; i++) {
  ({ foo: obj[arr[i]] } = { foo: 1 });
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (let i = 0; i < arr.length; i++) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   ({ foo: obj[arr[i]] } = { foo: 1 });
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  5 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

for (let i = 0; i < this.item.length; ++i) {
  this.item[i];
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (let i = 0; i < this.item.length; ++i) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   this.item[i];
    | ^^^^^^^^^^^^^^^
> 4 | }
    | ^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  5 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

for (let i = 0; i < this.array.length; ++i) {
  yield this.array[i];
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | for (let i = 0; i < this.array.length; ++i) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   yield this.array[i];
    | ^^^^^^^^^^^^^^^^^^^^^^
> 4 | }
    | ^^ Expected a `for-of` loop instead of a `for` loop with this simple iteration.
  5 |       
```
