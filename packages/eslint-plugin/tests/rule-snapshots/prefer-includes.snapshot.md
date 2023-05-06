# prefer-includes

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          a.indexOf(b) !== -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: string): void {
> 3 |           a.indexOf(b) !== -1;
    |           ^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          a.indexOf(b) != -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: string): void {
> 3 |           a.indexOf(b) != -1;
    |           ^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          a.indexOf(b) > -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: string): void {
> 3 |           a.indexOf(b) > -1;
    |           ^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          a.indexOf(b) >= 0;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: string): void {
> 3 |           a.indexOf(b) >= 0;
    |           ^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          a.indexOf(b) === -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          !a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: string): void {
> 3 |           a.indexOf(b) === -1;
    |           ^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          a.indexOf(b) == -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          !a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: string): void {
> 3 |           a.indexOf(b) == -1;
    |           ^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          a.indexOf(b) <= -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          !a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: string): void {
> 3 |           a.indexOf(b) <= -1;
    |           ^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          a.indexOf(b) < 0;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          !a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: string): void {
> 3 |           a.indexOf(b) < 0;
    |           ^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a?: string): void {
          a?.indexOf(b) === -1;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a?: string): void {
> 3 |           a?.indexOf(b) === -1;
    |           ^^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a?: string): void {
          a?.indexOf(b) !== -1;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a?: string): void {
> 3 |           a?.indexOf(b) !== -1;
    |           ^^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          /bar/.test(a);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: string): void {
          a.includes('bar');
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: string): void {
> 3 |           /bar/.test(a);
    |           ^^^^^^^^^^^^^ Use `String#includes()` method with a string instead.
  4 |         }
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

        const pattern = new RegExp('bar');
        function f(a: string): void {
          pattern.test(a);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const pattern = new RegExp('bar');
        function f(a: string): void {
          a.includes('bar');
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const pattern = new RegExp('bar');
  3 |         function f(a: string): void {
> 4 |           pattern.test(a);
    |           ^^^^^^^^^^^^^^^ Use `String#includes()` method with a string instead.
  5 |         }
  6 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

        const pattern = /bar/;
        function f(a: string, b: string): void {
          pattern.test(a + b);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const pattern = /bar/;
        function f(a: string, b: string): void {
          (a + b).includes('bar');
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const pattern = /bar/;
  3 |         function f(a: string, b: string): void {
> 4 |           pattern.test(a + b);
    |           ^^^^^^^^^^^^^^^^^^^ Use `String#includes()` method with a string instead.
  5 |         }
  6 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: any[]): void {
          a.indexOf(b) !== -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: any[]): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: any[]): void {
> 3 |           a.indexOf(b) !== -1;
    |           ^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: ReadonlyArray<any>): void {
          a.indexOf(b) !== -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: ReadonlyArray<any>): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: ReadonlyArray<any>): void {
> 3 |           a.indexOf(b) !== -1;
    |           ^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: Int8Array): void {
          a.indexOf(b) !== -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: Int8Array): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: Int8Array): void {
> 3 |           a.indexOf(b) !== -1;
    |           ^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: Int16Array): void {
          a.indexOf(b) !== -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: Int16Array): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: Int16Array): void {
> 3 |           a.indexOf(b) !== -1;
    |           ^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: Int32Array): void {
          a.indexOf(b) !== -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: Int32Array): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: Int32Array): void {
> 3 |           a.indexOf(b) !== -1;
    |           ^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: Uint8Array): void {
          a.indexOf(b) !== -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: Uint8Array): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: Uint8Array): void {
> 3 |           a.indexOf(b) !== -1;
    |           ^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: Uint16Array): void {
          a.indexOf(b) !== -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: Uint16Array): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: Uint16Array): void {
> 3 |           a.indexOf(b) !== -1;
    |           ^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: Uint32Array): void {
          a.indexOf(b) !== -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: Uint32Array): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: Uint32Array): void {
> 3 |           a.indexOf(b) !== -1;
    |           ^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: Float32Array): void {
          a.indexOf(b) !== -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: Float32Array): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: Float32Array): void {
> 3 |           a.indexOf(b) !== -1;
    |           ^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: Float64Array): void {
          a.indexOf(b) !== -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: Float64Array): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: Float64Array): void {
> 3 |           a.indexOf(b) !== -1;
    |           ^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

        function f<T>(a: T[] | ReadonlyArray<T>): void {
          a.indexOf(b) !== -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f<T>(a: T[] | ReadonlyArray<T>): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f<T>(a: T[] | ReadonlyArray<T>): void {
> 3 |           a.indexOf(b) !== -1;
    |           ^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

        function f<
          T,
          U extends
            | T[]
            | ReadonlyArray<T>
            | Int8Array
            | Uint8Array
            | Int16Array
            | Uint16Array
            | Int32Array
            | Uint32Array
            | Float32Array
            | Float64Array,
        >(a: U): void {
          a.indexOf(b) !== -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f<
          T,
          U extends
            | T[]
            | ReadonlyArray<T>
            | Int8Array
            | Uint8Array
            | Int16Array
            | Uint16Array
            | Int32Array
            | Uint32Array
            | Float32Array
            | Float64Array,
        >(a: U): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         function f<
   3 |           T,
   4 |           U extends
   5 |             | T[]
   6 |             | ReadonlyArray<T>
   7 |             | Int8Array
   8 |             | Uint8Array
   9 |             | Int16Array
  10 |             | Uint16Array
  11 |             | Int32Array
  12 |             | Uint32Array
  13 |             | Float32Array
  14 |             | Float64Array,
  15 |         >(a: U): void {
> 16 |           a.indexOf(b) !== -1;
     |           ^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  17 |         }
  18 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

        type UserDefined = {
          indexOf(x: any): number;
          includes(x: any): boolean;
        };
        function f(a: UserDefined): void {
          a.indexOf(b) !== -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type UserDefined = {
          indexOf(x: any): number;
          includes(x: any): boolean;
        };
        function f(a: UserDefined): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type UserDefined = {
  3 |           indexOf(x: any): number;
  4 |           includes(x: any): boolean;
  5 |         };
  6 |         function f(a: UserDefined): void {
> 7 |           a.indexOf(b) !== -1;
    |           ^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  8 |         }
  9 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

        function f(a: Readonly<any[]>): void {
          a.indexOf(b) !== -1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(a: Readonly<any[]>): void {
          a.includes(b);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(a: Readonly<any[]>): void {
> 3 |           a.indexOf(b) !== -1;
    |           ^^^^^^^^^^^^^^^^^^^ Use 'includes()' method instead.
  4 |         }
  5 |       
```
