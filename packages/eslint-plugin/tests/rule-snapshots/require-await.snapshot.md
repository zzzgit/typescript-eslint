# require-await

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

        async function foo() {
          doSomething();
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         async function foo() {
    |         ^^^^^^^^^^^^^^^^^^ Async function 'foo' has no 'await' expression.
  3 |           doSomething();
  4 |         }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

        (async function () {
          doSomething();
        });
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         (async function () {
    |          ^^^^^^^^^^^^^^^ Async function has no 'await' expression.
  3 |           doSomething();
  4 |         });
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

        async () => {
          doSomething();
        };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         async () => {
    |                  ^^ Async arrow function has no 'await' expression.
  3 |           doSomething();
  4 |         };
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
async () => doSomething();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | async () => doSomething();
    |          ^^ Async arrow function has no 'await' expression.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        ({
          async foo() {
            doSomething();
          },
        });
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         ({
> 3 |           async foo() {
    |           ^^^^^^^^^ Async method 'foo' has no 'await' expression.
  4 |             doSomething();
  5 |           },
  6 |         });
  7 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        class A {
          async foo() {
            doSomething();
          }
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class A {
> 3 |           async foo() {
    |           ^^^^^^^^^ Async method 'foo' has no 'await' expression.
  4 |             doSomething();
  5 |           }
  6 |         }
  7 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        (class {
          async foo() {
            doSomething();
          }
        });
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         (class {
> 3 |           async foo() {
    |           ^^^^^^^^^ Async method 'foo' has no 'await' expression.
  4 |             doSomething();
  5 |           }
  6 |         });
  7 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        (class {
          async ''() {
            doSomething();
          }
        });
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         (class {
> 3 |           async ''() {
    |           ^^^^^^^^ Async method has no 'await' expression.
  4 |             doSomething();
  5 |           }
  6 |         });
  7 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        async function foo() {
          async () => {
            await doSomething();
          };
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         async function foo() {
    |         ^^^^^^^^^^^^^^^^^^ Async function 'foo' has no 'await' expression.
  3 |           async () => {
  4 |             await doSomething();
  5 |           };
  6 |         }
  7 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

        async function foo() {
          await (async () => {
            doSomething();
          });
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         async function foo() {
> 3 |           await (async () => {
    |                           ^^ Async arrow function has no 'await' expression.
  4 |             doSomething();
  5 |           });
  6 |         }
  7 |       
```
