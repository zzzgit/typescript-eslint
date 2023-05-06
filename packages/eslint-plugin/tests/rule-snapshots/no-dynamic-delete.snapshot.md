# no-dynamic-delete

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

const container: { [i: string]: 0 } = {};
delete container['aaa'];
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const container: { [i: string]: 0 } = {};
delete container.aaa;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const container: { [i: string]: 0 } = {};
> 3 | delete container['aaa'];
    |                  ^^^^^ Do not delete dynamically computed property keys.
  4 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

const container: { [i: string]: 0 } = {};
delete container['aa' + 'b'];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const container: { [i: string]: 0 } = {};
> 3 | delete container['aa' + 'b'];
    |                  ^^^^^^^^^^ Do not delete dynamically computed property keys.
  4 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

const container: { [i: string]: 0 } = {};
delete container['delete'];
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const container: { [i: string]: 0 } = {};
delete container.delete;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const container: { [i: string]: 0 } = {};
> 3 | delete container['delete'];
    |                  ^^^^^^^^ Do not delete dynamically computed property keys.
  4 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

const container: { [i: string]: 0 } = {};
delete container[-Infinity];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const container: { [i: string]: 0 } = {};
> 3 | delete container[-Infinity];
    |                  ^^^^^^^^^ Do not delete dynamically computed property keys.
  4 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

const container: { [i: string]: 0 } = {};
delete container[+Infinity];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const container: { [i: string]: 0 } = {};
> 3 | delete container[+Infinity];
    |                  ^^^^^^^^^ Do not delete dynamically computed property keys.
  4 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

const container: { [i: string]: 0 } = {};
delete container[NaN];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const container: { [i: string]: 0 } = {};
> 3 | delete container[NaN];
    |                  ^^^ Do not delete dynamically computed property keys.
  4 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

const container: { [i: string]: 0 } = {};
delete container['NaN'];
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const container: { [i: string]: 0 } = {};
delete container.NaN;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const container: { [i: string]: 0 } = {};
> 3 | delete container['NaN'];
    |                  ^^^^^ Do not delete dynamically computed property keys.
  4 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

const container: { [i: string]: 0 } = {};
const name = 'name';
delete container[name];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const container: { [i: string]: 0 } = {};
  3 | const name = 'name';
> 4 | delete container[name];
    |                  ^^^^ Do not delete dynamically computed property keys.
  5 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

const container: { [i: string]: 0 } = {};
const getName = () => 'aaa';
delete container[getName()];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const container: { [i: string]: 0 } = {};
  3 | const getName = () => 'aaa';
> 4 | delete container[getName()];
    |                  ^^^^^^^^^ Do not delete dynamically computed property keys.
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

const container: { [i: string]: 0 } = {};
const name = { foo: { bar: 'bar' } };
delete container[name.foo.bar];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const container: { [i: string]: 0 } = {};
  3 | const name = { foo: { bar: 'bar' } };
> 4 | delete container[name.foo.bar];
    |                  ^^^^^^^^^^^^ Do not delete dynamically computed property keys.
  5 |       
```
