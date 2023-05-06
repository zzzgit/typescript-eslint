# no-confusing-non-null-assertion

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
a! == b;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a! == b;
    | ^^^^^^^ Confusing combinations of non-null assertion and equal test like "a! == b", which looks very similar to not equal "a !== b".
```

#### Suggestions

##### Unnecessary non-null assertion (!) in equal test.

<!-- prettier-ignore -->
```ts
a == b;
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
a! === b;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a! === b;
    | ^^^^^^^^ Confusing combinations of non-null assertion and equal test like "a! == b", which looks very similar to not equal "a !== b".
```

#### Suggestions

##### Unnecessary non-null assertion (!) in equal test.

<!-- prettier-ignore -->
```ts
a === b;
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
a + b! == c;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a + b! == c;
    | ^^^^^^^^^^^ Confusing combinations of non-null assertion and equal test like "a! == b", which looks very similar to not equal "a !== b".
```

#### Suggestions

##### Wrap up left hand to avoid putting non-null assertion "!" and "=" together.

<!-- prettier-ignore -->
```ts
(a + b!) == c;
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
(obj = new new OuterObj().InnerObj).Name! == c;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (obj = new new OuterObj().InnerObj).Name! == c;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Confusing combinations of non-null assertion and equal test like "a! == b", which looks very similar to not equal "a !== b".
```

#### Suggestions

##### Unnecessary non-null assertion (!) in equal test.

<!-- prettier-ignore -->
```ts
(obj = new new OuterObj().InnerObj).Name == c;
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
(a==b)! ==c;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (a==b)! ==c;
    | ^^^^^^^^^^^ Confusing combinations of non-null assertion and equal test like "a! == b", which looks very similar to not equal "a !== b".
```

#### Suggestions

##### Unnecessary non-null assertion (!) in equal test.

<!-- prettier-ignore -->
```ts
(a==b) ==c;
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
a! = b;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a! = b;
    | ^^^^^^ Confusing combinations of non-null assertion and equal test like "a! = b", which looks very similar to not equal "a != b".
```

#### Suggestions

##### Unnecessary non-null assertion (!) in assignment left hand.

<!-- prettier-ignore -->
```ts
a = b;
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
(obj = new new OuterObj().InnerObj).Name! = c;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (obj = new new OuterObj().InnerObj).Name! = c;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Confusing combinations of non-null assertion and equal test like "a! = b", which looks very similar to not equal "a != b".
```

#### Suggestions

##### Unnecessary non-null assertion (!) in assignment left hand.

<!-- prettier-ignore -->
```ts
(obj = new new OuterObj().InnerObj).Name = c;
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
(a=b)! =c;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (a=b)! =c;
    | ^^^^^^^^^ Confusing combinations of non-null assertion and equal test like "a! = b", which looks very similar to not equal "a != b".
```

#### Suggestions

##### Unnecessary non-null assertion (!) in assignment left hand.

<!-- prettier-ignore -->
```ts
(a=b) =c;
```
