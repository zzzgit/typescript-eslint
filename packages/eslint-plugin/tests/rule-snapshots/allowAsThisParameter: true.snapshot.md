# allowAsThisParameter: true

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
type alias = void;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type alias = void;
    |              ^^^^ void is only valid as a return type or generic type argument or the type of a `this` parameter.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
type alias = void;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type alias = void;
    |              ^^^^ void is only valid as return type or type of `this` parameter.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
type alias = Array<void>;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type alias = Array<void>;
    |                    ^^^^ void is only valid as return type or type of `this` parameter.
```
