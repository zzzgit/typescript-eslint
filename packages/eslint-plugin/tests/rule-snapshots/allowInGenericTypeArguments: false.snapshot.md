# allowInGenericTypeArguments: false

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
type GenericVoid = Generic<void>;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type GenericVoid = Generic<void>;
    |                            ^^^^ void is only valid as a return type.
```

## Test #2

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
    |                          ^^^^ void is only valid as a return type.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
let voidPromise: Promise<void> = new Promise<void>(() => {});
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let voidPromise: Promise<void> = new Promise<void>(() => {});
    |                          ^^^^ void is only valid as a return type.
```

<!-- prettier-ignore -->
```ts
> 1 | let voidPromise: Promise<void> = new Promise<void>(() => {});
    |                                              ^^^^ void is only valid as a return type.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
let voidMap: Map<string, void> = new Map<string, void>();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let voidMap: Map<string, void> = new Map<string, void>();
    |                          ^^^^ void is only valid as a return type.
```

<!-- prettier-ignore -->
```ts
> 1 | let voidMap: Map<string, void> = new Map<string, void>();
    |                                                  ^^^^ void is only valid as a return type.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
type invalidVoidUnion = void | number;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type invalidVoidUnion = void | number;
    |                         ^^^^ void is only valid as a return type.
```
