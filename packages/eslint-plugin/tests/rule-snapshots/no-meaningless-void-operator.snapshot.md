# no-meaningless-void-operator

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
void (() => {})();
```

### Fix Output

<!-- prettier-ignore -->
```ts
(() => {})();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | void (() => {})();
    | ^^^^^^^^^^^^^^^^^ void operator shouldn't be used on void; it should convey that a return value is being ignored
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {}
void foo();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function foo() {}
foo();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {}
> 3 | void foo();
    | ^^^^^^^^^^ void operator shouldn't be used on void; it should convey that a return value is being ignored
  4 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

function bar(x: never) {
  void x;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function bar(x: never) {
> 3 |   void x;
    |   ^^^^^^ void operator shouldn't be used on never; it should convey that a return value is being ignored
  4 | }
  5 |       
```

#### Suggestions

##### Remove 'void'

<!-- prettier-ignore -->
```ts

function bar(x: never) {
  x;
}
      
```
