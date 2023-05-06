# restrict-template-expressions

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

        const msg = `arg = ${123}`;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const msg = `arg = ${123}`;
    |                              ^^^ Invalid type "123" of template literal expression.
  3 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

        const msg = `arg = ${false}`;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const msg = `arg = ${false}`;
    |                              ^^^^^ Invalid type "false" of template literal expression.
  3 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

        const msg = `arg = ${null}`;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const msg = `arg = ${null}`;
    |                              ^^^^ Invalid type "null" of template literal expression.
  3 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

        declare const arg: number;
        const msg = `arg = ${arg}`;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const arg: number;
> 3 |         const msg = `arg = ${arg}`;
    |                              ^^^ Invalid type "number" of template literal expression.
  4 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        declare const arg: boolean;
        const msg = `arg = ${arg}`;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const arg: boolean;
> 3 |         const msg = `arg = ${arg}`;
    |                              ^^^ Invalid type "boolean" of template literal expression.
  4 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        const arg = {};
        const msg = `arg = ${arg}`;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const arg = {};
> 3 |         const msg = `arg = ${arg}`;
    |                              ^^^ Invalid type "{}" of template literal expression.
  4 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        declare const arg: { a: string } & { b: string };
        const msg = `arg = ${arg}`;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const arg: { a: string } & { b: string };
> 3 |         const msg = `arg = ${arg}`;
    |                              ^^^ Invalid type "{ a: string; } & { b: string; }" of template literal expression.
  4 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        function test<T extends {}>(arg: T) {
          return `arg = ${arg}`;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function test<T extends {}>(arg: T) {
> 3 |           return `arg = ${arg}`;
    |                           ^^^ Invalid type "{}" of template literal expression.
  4 |         }
  5 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        function test<TWithNoConstraint>(arg: T) {
          return `arg = ${arg}`;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function test<TWithNoConstraint>(arg: T) {
> 3 |           return `arg = ${arg}`;
    |                           ^^^ Invalid type "T" of template literal expression.
  4 |         }
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

        function test(arg: any) {
          return `arg = ${arg}`;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function test(arg: any) {
> 3 |           return `arg = ${arg}`;
    |                           ^^^ Invalid type "any" of template literal expression.
  4 |         }
  5 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

        const arg = new RegExp('foo');
        const msg = `arg = ${arg}`;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const arg = new RegExp('foo');
> 3 |         const msg = `arg = ${arg}`;
    |                              ^^^ Invalid type "RegExp" of template literal expression.
  4 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

        const arg = /foo/;
        const msg = `arg = ${arg}`;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const arg = /foo/;
> 3 |         const msg = `arg = ${arg}`;
    |                              ^^^ Invalid type "RegExp" of template literal expression.
  4 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

        declare const value: never;
        const stringy = `${value}`;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const value: never;
> 3 |         const stringy = `${value}`;
    |                            ^^^^^ Invalid type "never" of template literal expression.
  4 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

        function test<T extends any>(arg: T) {
          return `arg = ${arg}`;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function test<T extends any>(arg: T) {
> 3 |           return `arg = ${arg}`;
    |                           ^^^ Invalid type "unknown" of template literal expression.
  4 |         }
  5 |       
```
