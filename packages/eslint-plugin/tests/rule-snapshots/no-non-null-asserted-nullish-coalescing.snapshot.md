# no-non-null-asserted-nullish-coalescing

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
foo! ?? bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo! ?? bar;
    | ^^^^ The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.
```

#### Suggestions

##### Remove the non-null assertion.

<!-- prettier-ignore -->
```ts
foo ?? bar;
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
foo! ?? bar!;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo! ?? bar!;
    | ^^^^ The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.
```

#### Suggestions

##### Remove the non-null assertion.

<!-- prettier-ignore -->
```ts
foo ?? bar!;
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
foo.bazz! ?? bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bazz! ?? bar;
    | ^^^^^^^^^ The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.
```

#### Suggestions

##### Remove the non-null assertion.

<!-- prettier-ignore -->
```ts
foo.bazz ?? bar;
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
foo.bazz! ?? bar!;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bazz! ?? bar!;
    | ^^^^^^^^^ The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.
```

#### Suggestions

##### Remove the non-null assertion.

<!-- prettier-ignore -->
```ts
foo.bazz ?? bar!;
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
foo!.bazz! ?? bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo!.bazz! ?? bar;
    | ^^^^^^^^^^ The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.
```

#### Suggestions

##### Remove the non-null assertion.

<!-- prettier-ignore -->
```ts
foo!.bazz ?? bar;
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
foo!.bazz! ?? bar!;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo!.bazz! ?? bar!;
    | ^^^^^^^^^^ The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.
```

#### Suggestions

##### Remove the non-null assertion.

<!-- prettier-ignore -->
```ts
foo!.bazz ?? bar!;
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
foo()! ?? bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo()! ?? bar;
    | ^^^^^^ The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.
```

#### Suggestions

##### Remove the non-null assertion.

<!-- prettier-ignore -->
```ts
foo() ?? bar;
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
foo()! ?? bar!;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo()! ?? bar!;
    | ^^^^^^ The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.
```

#### Suggestions

##### Remove the non-null assertion.

<!-- prettier-ignore -->
```ts
foo() ?? bar!;
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

let x!: string;
x! ?? '';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let x!: string;
> 3 | x! ?? '';
    | ^^ The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.
  4 |       
```

#### Suggestions

##### Remove the non-null assertion.

<!-- prettier-ignore -->
```ts

let x!: string;
x ?? '';
      
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

let x: string;
x = foo();
x! ?? '';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let x: string;
  3 | x = foo();
> 4 | x! ?? '';
    | ^^ The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.
  5 |       
```

#### Suggestions

##### Remove the non-null assertion.

<!-- prettier-ignore -->
```ts

let x: string;
x = foo();
x ?? '';
      
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

let x: string;
x = foo();
x! ?? '';
x = foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let x: string;
  3 | x = foo();
> 4 | x! ?? '';
    | ^^ The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.
  5 | x = foo();
  6 |       
```

#### Suggestions

##### Remove the non-null assertion.

<!-- prettier-ignore -->
```ts

let x: string;
x = foo();
x ?? '';
x = foo();
      
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

let x = foo();
x! ?? '';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let x = foo();
> 3 | x! ?? '';
    | ^^ The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.
  4 |       
```

#### Suggestions

##### Remove the non-null assertion.

<!-- prettier-ignore -->
```ts

let x = foo();
x ?? '';
      
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  let x!: string;
  return x! ?? '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
  3 |   let x!: string;
> 4 |   return x! ?? '';
    |          ^^ The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.
  5 | }
  6 |       
```

#### Suggestions

##### Remove the non-null assertion.

<!-- prettier-ignore -->
```ts

function foo() {
  let x!: string;
  return x ?? '';
}
      
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

let x!: string;
function foo() {
  return x! ?? '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let x!: string;
  3 | function foo() {
> 4 |   return x! ?? '';
    |          ^^ The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.
  5 | }
  6 |       
```

#### Suggestions

##### Remove the non-null assertion.

<!-- prettier-ignore -->
```ts

let x!: string;
function foo() {
  return x ?? '';
}
      
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

let x = foo();
x  ! ?? '';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let x = foo();
> 3 | x  ! ?? '';
    | ^^^^ The nullish coalescing operator is designed to handle undefined and null - using a non-null assertion is not needed.
  4 |       
```

#### Suggestions

##### Remove the non-null assertion.

<!-- prettier-ignore -->
```ts

let x = foo();
x   ?? '';
      
```
