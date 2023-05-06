# no-non-null-assertion

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
x!;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x!;
    | ^^ Forbidden non-null assertion.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
x!.y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x!.y;
    | ^^ Forbidden non-null assertion.
```

#### Suggestions

##### Consider using the optional chain operator `?.` instead. This operator includes runtime checks, so it is safer than the compile-only non-null assertion operator.

<!-- prettier-ignore -->
```ts
x?.y;
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
x.y!;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.y!;
    | ^^^^ Forbidden non-null assertion.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
!x!.y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !x!.y;
    |  ^^ Forbidden non-null assertion.
```

#### Suggestions

##### Consider using the optional chain operator `?.` instead. This operator includes runtime checks, so it is safer than the compile-only non-null assertion operator.

<!-- prettier-ignore -->
```ts
!x?.y;
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
x!.y?.z;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x!.y?.z;
    | ^^ Forbidden non-null assertion.
```

#### Suggestions

##### Consider using the optional chain operator `?.` instead. This operator includes runtime checks, so it is safer than the compile-only non-null assertion operator.

<!-- prettier-ignore -->
```ts
x?.y?.z;
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
x![y];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x![y];
    | ^^ Forbidden non-null assertion.
```

#### Suggestions

##### Consider using the optional chain operator `?.` instead. This operator includes runtime checks, so it is safer than the compile-only non-null assertion operator.

<!-- prettier-ignore -->
```ts
x?.[y];
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
x![y]?.z;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x![y]?.z;
    | ^^ Forbidden non-null assertion.
```

#### Suggestions

##### Consider using the optional chain operator `?.` instead. This operator includes runtime checks, so it is safer than the compile-only non-null assertion operator.

<!-- prettier-ignore -->
```ts
x?.[y]?.z;
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
x.y.z!();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.y.z!();
    | ^^^^^^ Forbidden non-null assertion.
```

#### Suggestions

##### Consider using the optional chain operator `?.` instead. This operator includes runtime checks, so it is safer than the compile-only non-null assertion operator.

<!-- prettier-ignore -->
```ts
x.y.z?.();
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
x.y?.z!();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.y?.z!();
    | ^^^^^^^ Forbidden non-null assertion.
```

#### Suggestions

##### Consider using the optional chain operator `?.` instead. This operator includes runtime checks, so it is safer than the compile-only non-null assertion operator.

<!-- prettier-ignore -->
```ts
x.y?.z?.();
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
x!!!;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x!!!;
    | ^^^^ Forbidden non-null assertion.
```

<!-- prettier-ignore -->
```ts
> 1 | x!!!;
    | ^^^ Forbidden non-null assertion.
```

<!-- prettier-ignore -->
```ts
> 1 | x!!!;
    | ^^ Forbidden non-null assertion.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
x!!.y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x!!.y;
    | ^^^ Forbidden non-null assertion.
```

#### Suggestions

##### Consider using the optional chain operator `?.` instead. This operator includes runtime checks, so it is safer than the compile-only non-null assertion operator.

<!-- prettier-ignore -->
```ts
x!?.y;
```

<!-- prettier-ignore -->
```ts
> 1 | x!!.y;
    | ^^ Forbidden non-null assertion.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
x.y!!;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.y!!;
    | ^^^^^ Forbidden non-null assertion.
```

<!-- prettier-ignore -->
```ts
> 1 | x.y!!;
    | ^^^^ Forbidden non-null assertion.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
x.y.z!!();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.y.z!!();
    | ^^^^^^^ Forbidden non-null assertion.
```

#### Suggestions

##### Consider using the optional chain operator `?.` instead. This operator includes runtime checks, so it is safer than the compile-only non-null assertion operator.

<!-- prettier-ignore -->
```ts
x.y.z!?.();
```

<!-- prettier-ignore -->
```ts
> 1 | x.y.z!!();
    | ^^^^^^ Forbidden non-null assertion.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
x!?.[y].z;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x!?.[y].z;
    | ^^ Forbidden non-null assertion.
```

#### Suggestions

##### Consider using the optional chain operator `?.` instead. This operator includes runtime checks, so it is safer than the compile-only non-null assertion operator.

<!-- prettier-ignore -->
```ts
x?.[y].z;
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
x!?.y.z;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x!?.y.z;
    | ^^ Forbidden non-null assertion.
```

#### Suggestions

##### Consider using the optional chain operator `?.` instead. This operator includes runtime checks, so it is safer than the compile-only non-null assertion operator.

<!-- prettier-ignore -->
```ts
x?.y.z;
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
x.y.z!?.();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.y.z!?.();
    | ^^^^^^ Forbidden non-null assertion.
```

#### Suggestions

##### Consider using the optional chain operator `?.` instead. This operator includes runtime checks, so it is safer than the compile-only non-null assertion operator.

<!-- prettier-ignore -->
```ts
x.y.z?.();
```
