# isNodeEqual

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
undefined || undefined
```

### Fix Output

<!-- prettier-ignore -->
```ts
undefined
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | undefined || undefined
    | ^^^^^^^^^^^^^^^^^^^^^^ Remove useless expression
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
true && true
```

### Fix Output

<!-- prettier-ignore -->
```ts
true
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | true && true
    | ^^^^^^^^^^^^ Remove useless expression
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
a || a
```

### Fix Output

<!-- prettier-ignore -->
```ts
a
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a || a
    | ^^^^^^ Remove useless expression
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
a && a
```

### Fix Output

<!-- prettier-ignore -->
```ts
a
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a && a
    | ^^^^^^ Remove useless expression
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
a ?? a
```

### Fix Output

<!-- prettier-ignore -->
```ts
a
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a ?? a
    | ^^^^^^ Remove useless expression
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar || foo.bar
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo.bar
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar || foo.bar
    | ^^^^^^^^^^^^^^^^^^ Remove useless expression
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
this.foo.bar || this.foo.bar
```

### Fix Output

<!-- prettier-ignore -->
```ts
this.foo.bar
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | this.foo.bar || this.foo.bar
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Remove useless expression
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] || x.z[1][this[this.o]]["3"][a.b.c]
```

### Fix Output

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c]
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] || x.z[1][this[this.o]]["3"][a.b.c]
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Remove useless expression
```
