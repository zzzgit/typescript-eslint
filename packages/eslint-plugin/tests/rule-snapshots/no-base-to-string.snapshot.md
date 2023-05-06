# no-base-to-string

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
`${{}})`;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | `${{}})`;
    |    ^^ '{}' will evaluate to '[object Object]' when stringified.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
({}).toString();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ({}).toString();
    |  ^^ '{}' will evaluate to '[object Object]' when stringified.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
'' + {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | '' + {};
    |      ^^ '{}' will evaluate to '[object Object]' when stringified.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
'' += {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | '' += {};
    |       ^^ '{}' will evaluate to '[object Object]' when stringified.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        let someObjectOrString = Math.random() ? { a: true } : 'text';
        someObjectOrString.toString();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         let someObjectOrString = Math.random() ? { a: true } : 'text';
> 3 |         someObjectOrString.toString();
    |         ^^^^^^^^^^^^^^^^^^ 'someObjectOrString' may evaluate to '[object Object]' when stringified.
  4 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        let someObjectOrString = Math.random() ? { a: true } : 'text';
        someObjectOrString + '';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         let someObjectOrString = Math.random() ? { a: true } : 'text';
> 3 |         someObjectOrString + '';
    |         ^^^^^^^^^^^^^^^^^^ 'someObjectOrString' may evaluate to '[object Object]' when stringified.
  4 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        let someObjectOrObject = Math.random() ? { a: true, b: true } : { a: true };
        someObjectOrObject.toString();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         let someObjectOrObject = Math.random() ? { a: true, b: true } : { a: true };
> 3 |         someObjectOrObject.toString();
    |         ^^^^^^^^^^^^^^^^^^ 'someObjectOrObject' will evaluate to '[object Object]' when stringified.
  4 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        let someObjectOrObject = Math.random() ? { a: true, b: true } : { a: true };
        someObjectOrObject + '';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         let someObjectOrObject = Math.random() ? { a: true, b: true } : { a: true };
> 3 |         someObjectOrObject + '';
    |         ^^^^^^^^^^^^^^^^^^ 'someObjectOrObject' will evaluate to '[object Object]' when stringified.
  4 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        interface A {}
        interface B {}
        function test(intersection: A & B): string {
          return `${intersection}`;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface A {}
  3 |         interface B {}
  4 |         function test(intersection: A & B): string {
> 5 |           return `${intersection}`;
    |                     ^^^^^^^^^^^^ 'intersection' will evaluate to '[object Object]' when stringified.
  6 |         }
  7 |       
```
