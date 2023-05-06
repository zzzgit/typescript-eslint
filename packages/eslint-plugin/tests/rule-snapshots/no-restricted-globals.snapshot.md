# no-restricted-globals

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

function onClick() {
  console.log(event);
}

fdescribe('foo', function () {});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function onClick() {
> 3 |   console.log(event);
    |               ^^^^^ Unexpected use of 'event'.
  4 | }
  5 |
  6 | fdescribe('foo', function () {});
  7 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

confirm('TEST');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | confirm('TEST');
    | ^^^^^^^ Unexpected use of 'confirm'.
  3 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

var a = confirm('TEST')?.a;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | var a = confirm('TEST')?.a;
    |         ^^^^^^^ Unexpected use of 'confirm'.
  3 |       
```
