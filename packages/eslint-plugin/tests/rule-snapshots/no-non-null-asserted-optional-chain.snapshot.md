# no-non-null-asserted-optional-chain

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
foo?.bar!;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo?.bar!;
    | ^^^^^^^^^ Optional chain expressions can return undefined by design - using a non-null assertion is unsafe and wrong.
```

#### Suggestions

##### You should remove the non-null assertion.

<!-- prettier-ignore -->
```ts
foo?.bar;
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
foo?.['bar']!;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo?.['bar']!;
    | ^^^^^^^^^^^^^ Optional chain expressions can return undefined by design - using a non-null assertion is unsafe and wrong.
```

#### Suggestions

##### You should remove the non-null assertion.

<!-- prettier-ignore -->
```ts
foo?.['bar'];
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
foo?.bar()!;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo?.bar()!;
    | ^^^^^^^^^^^ Optional chain expressions can return undefined by design - using a non-null assertion is unsafe and wrong.
```

#### Suggestions

##### You should remove the non-null assertion.

<!-- prettier-ignore -->
```ts
foo?.bar();
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar?.()!;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar?.()!;
    | ^^^^^^^^^^^^ Optional chain expressions can return undefined by design - using a non-null assertion is unsafe and wrong.
```

#### Suggestions

##### You should remove the non-null assertion.

<!-- prettier-ignore -->
```ts
foo.bar?.();
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
(foo?.bar)!.baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo?.bar)!.baz
    |  ^^^^^^^^ Optional chain expressions can return undefined by design - using a non-null assertion is unsafe and wrong.
```

#### Suggestions

##### You should remove the non-null assertion.

<!-- prettier-ignore -->
```ts
(foo?.bar).baz
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
(foo?.bar)!().baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo?.bar)!().baz
    |  ^^^^^^^^ Optional chain expressions can return undefined by design - using a non-null assertion is unsafe and wrong.
```

#### Suggestions

##### You should remove the non-null assertion.

<!-- prettier-ignore -->
```ts
(foo?.bar)().baz
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
(foo?.bar)!
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo?.bar)!
    |  ^^^^^^^^ Optional chain expressions can return undefined by design - using a non-null assertion is unsafe and wrong.
```

#### Suggestions

##### You should remove the non-null assertion.

<!-- prettier-ignore -->
```ts
(foo?.bar)
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
(foo?.bar)!()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo?.bar)!()
    |  ^^^^^^^^ Optional chain expressions can return undefined by design - using a non-null assertion is unsafe and wrong.
```

#### Suggestions

##### You should remove the non-null assertion.

<!-- prettier-ignore -->
```ts
(foo?.bar)()
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
(foo?.bar!)
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo?.bar!)
    |  ^^^^^^^^^ Optional chain expressions can return undefined by design - using a non-null assertion is unsafe and wrong.
```

#### Suggestions

##### You should remove the non-null assertion.

<!-- prettier-ignore -->
```ts
(foo?.bar)
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
(foo?.bar!)()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo?.bar!)()
    |  ^^^^^^^^^ Optional chain expressions can return undefined by design - using a non-null assertion is unsafe and wrong.
```

#### Suggestions

##### You should remove the non-null assertion.

<!-- prettier-ignore -->
```ts
(foo?.bar)()
```
