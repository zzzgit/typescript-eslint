# prefer-as-const

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
let foo = { bar: 'baz' as 'baz' };
```

### Fix Output

<!-- prettier-ignore -->
```ts
let foo = { bar: 'baz' as const };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let foo = { bar: 'baz' as 'baz' };
    |                           ^^^^^ Expected a `const` instead of a literal type assertion.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
let foo = { bar: 1 as 1 };
```

### Fix Output

<!-- prettier-ignore -->
```ts
let foo = { bar: 1 as const };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let foo = { bar: 1 as 1 };
    |                       ^ Expected a `const` instead of a literal type assertion.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
let []: 'bar' = 'bar';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let []: 'bar' = 'bar';
    |         ^^^^^ Expected a `const` assertion instead of a literal type annotation.
```

#### Suggestions

##### You should use `as const` instead of type annotation.

<!-- prettier-ignore -->
```ts
let [] = 'bar' as const;
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
let foo: 'bar' = 'bar';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let foo: 'bar' = 'bar';
    |          ^^^^^ Expected a `const` assertion instead of a literal type annotation.
```

#### Suggestions

##### You should use `as const` instead of type annotation.

<!-- prettier-ignore -->
```ts
let foo = 'bar' as const;
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
let foo: 2 = 2;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let foo: 2 = 2;
    |          ^ Expected a `const` assertion instead of a literal type annotation.
```

#### Suggestions

##### You should use `as const` instead of type annotation.

<!-- prettier-ignore -->
```ts
let foo = 2 as const;
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
let foo: 'bar' = 'bar' as 'bar';
```

### Fix Output

<!-- prettier-ignore -->
```ts
let foo: 'bar' = 'bar' as const;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let foo: 'bar' = 'bar' as 'bar';
    |                           ^^^^^ Expected a `const` instead of a literal type assertion.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
let foo = <'bar'>'bar';
```

### Fix Output

<!-- prettier-ignore -->
```ts
let foo = <const>'bar';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let foo = <'bar'>'bar';
    |            ^^^^^ Expected a `const` instead of a literal type assertion.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
let foo = <4>4;
```

### Fix Output

<!-- prettier-ignore -->
```ts
let foo = <const>4;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let foo = <4>4;
    |            ^ Expected a `const` instead of a literal type assertion.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
let foo = 'bar' as 'bar';
```

### Fix Output

<!-- prettier-ignore -->
```ts
let foo = 'bar' as const;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let foo = 'bar' as 'bar';
    |                    ^^^^^ Expected a `const` instead of a literal type assertion.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
let foo = 5 as 5;
```

### Fix Output

<!-- prettier-ignore -->
```ts
let foo = 5 as const;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let foo = 5 as 5;
    |                ^ Expected a `const` instead of a literal type assertion.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

class foo {
  bar: 'baz' = 'baz';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class foo {
> 3 |   bar: 'baz' = 'baz';
    |        ^^^^^ Expected a `const` assertion instead of a literal type annotation.
  4 | }
  5 |       
```

#### Suggestions

##### You should use `as const` instead of type annotation.

<!-- prettier-ignore -->
```ts

class foo {
  bar = 'baz' as const;
}
      
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

class foo {
  bar: 2 = 2;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class foo {
> 3 |   bar: 2 = 2;
    |        ^ Expected a `const` assertion instead of a literal type annotation.
  4 | }
  5 |       
```

#### Suggestions

##### You should use `as const` instead of type annotation.

<!-- prettier-ignore -->
```ts

class foo {
  bar = 2 as const;
}
      
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

class foo {
  foo = <'bar'>'bar';
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class foo {
  foo = <const>'bar';
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class foo {
> 3 |   foo = <'bar'>'bar';
    |          ^^^^^ Expected a `const` instead of a literal type assertion.
  4 | }
  5 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

class foo {
  foo = 'bar' as 'bar';
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class foo {
  foo = 'bar' as const;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class foo {
> 3 |   foo = 'bar' as 'bar';
    |                  ^^^^^ Expected a `const` instead of a literal type assertion.
  4 | }
  5 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

class foo {
  foo = 5 as 5;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class foo {
  foo = 5 as const;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class foo {
> 3 |   foo = 5 as 5;
    |              ^ Expected a `const` instead of a literal type assertion.
  4 | }
  5 |       
```
