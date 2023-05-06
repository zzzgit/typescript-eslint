# allowInGenericTypeArguments: whitelist

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
type BannedVoid = Banned<void>;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type BannedVoid = Banned<void>;
    |                          ^^^^ Banned may not have void as a type argument.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
type BannedVoid = Ex.Mx.Tx<void>;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type BannedVoid = Ex.Mx.Tx<void>;
    |                            ^^^^ Ex.Mx.Tx may not have void as a type argument.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
function takeVoid(thing: void) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function takeVoid(thing: void) {}
    |                          ^^^^ void is only valid as a return type or generic type argument.
```
