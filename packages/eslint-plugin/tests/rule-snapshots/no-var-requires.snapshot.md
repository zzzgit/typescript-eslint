# no-var-requires

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
var foo = require('foo');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = require('foo');
    |           ^^^^^^^^^^^^^^ Require statement not part of import statement.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
const foo = require('foo');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = require('foo');
    |             ^^^^^^^^^^^^^^ Require statement not part of import statement.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
let foo = require('foo');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let foo = require('foo');
    |           ^^^^^^^^^^^^^^ Require statement not part of import statement.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
let foo = trick(require('foo'));
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let foo = trick(require('foo'));
    |                 ^^^^^^^^^^^^^^ Require statement not part of import statement.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
var foo = require?.('foo');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = require?.('foo');
    |           ^^^^^^^^^^^^^^^^ Require statement not part of import statement.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
const foo = require?.('foo');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = require?.('foo');
    |             ^^^^^^^^^^^^^^^^ Require statement not part of import statement.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
let foo = require?.('foo');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let foo = require?.('foo');
    |           ^^^^^^^^^^^^^^^^ Require statement not part of import statement.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
let foo = trick(require?.('foo'));
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let foo = trick(require?.('foo'));
    |                 ^^^^^^^^^^^^^^^^ Require statement not part of import statement.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
let foo = trick?.(require('foo'));
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let foo = trick?.(require('foo'));
    |                   ^^^^^^^^^^^^^^ Require statement not part of import statement.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
const foo = require('./foo.json') as Foo;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = require('./foo.json') as Foo;
    |             ^^^^^^^^^^^^^^^^^^^^^ Require statement not part of import statement.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
const foo = <Foo>require('./foo.json');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = <Foo>require('./foo.json');
    |                  ^^^^^^^^^^^^^^^^^^^^^ Require statement not part of import statement.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
const foo: Foo = require('./foo.json').default;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo: Foo = require('./foo.json').default;
    |                  ^^^^^^^^^^^^^^^^^^^^^ Require statement not part of import statement.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

const configValidator = new Validator(require('./a.json'));
configValidator.addSchema(require('./a.json'));
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const configValidator = new Validator(require('./a.json'));
    |                                       ^^^^^^^^^^^^^^^^^^^ Require statement not part of import statement.
  3 | configValidator.addSchema(require('./a.json'));
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const configValidator = new Validator(require('./a.json'));
> 3 | configValidator.addSchema(require('./a.json'));
    |                           ^^^^^^^^^^^^^^^^^^^ Require statement not part of import statement.
  4 |       
```
