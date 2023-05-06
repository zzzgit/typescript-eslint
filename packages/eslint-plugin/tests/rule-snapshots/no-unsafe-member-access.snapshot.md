# no-unsafe-member-access

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: any) {
  x.a;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: any) {
> 3 |   x.a;
    |   ^^^ Unsafe member access .a on an `any` value.
  4 | }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: any) {
  x.a.b.c.d.e.f.g;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: any) {
> 3 |   x.a.b.c.d.e.f.g;
    |   ^^^ Unsafe member access .a on an `any` value.
  4 | }
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: { a: any }) {
  x.a.b.c.d.e.f.g;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: { a: any }) {
> 3 |   x.a.b.c.d.e.f.g;
    |   ^^^^^ Unsafe member access .b on an `any` value.
  4 | }
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: any) {
  x['a'];
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: any) {
> 3 |   x['a'];
    |   ^^^^^^ Unsafe member access ['a'] on an `any` value.
  4 | }
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: any) {
  x['a']['b']['c'];
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: any) {
> 3 |   x['a']['b']['c'];
    |   ^^^^^^ Unsafe member access ['a'] on an `any` value.
  4 | }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: { a: number }, y: any) {
  x[y];
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: { a: number }, y: any) {
> 3 |   x[y];
    |     ^ Computed name [y] resolves to an any value.
  4 | }
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x?: { a: number }, y: any) {
  x?.[y];
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x?: { a: number }, y: any) {
> 3 |   x?.[y];
    |       ^ Computed name [y] resolves to an any value.
  4 | }
  5 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: { a: number }, y: any) {
  x[(y += 1)];
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: { a: number }, y: any) {
> 3 |   x[(y += 1)];
    |      ^^^^^^ Computed name [y += 1] resolves to an any value.
  4 | }
  5 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: { a: number }, y: any) {
  x[1 as any];
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: { a: number }, y: any) {
> 3 |   x[1 as any];
    |     ^^^^^^^^ Computed name [1 as any] resolves to an any value.
  4 | }
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: { a: number }, y: any) {
  x[y()];
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: { a: number }, y: any) {
> 3 |   x[y()];
    |     ^^^ Computed name [y()] resolves to an any value.
  4 | }
  5 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: string[], y: any) {
  x[y];
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: string[], y: any) {
> 3 |   x[y];
    |     ^ Computed name [y] resolves to an any value.
  4 | }
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

const methods = {
  methodA() {
    return this.methodB()
  },
  methodB() {
    const getProperty = () => Math.random() > 0.5 ? 'methodB' : 'methodC'
    return this[getProperty()]()
  },
  methodC() {
    return true
  },
  methodD() {
    return (this?.methodA)?.()
  }
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const methods = {
   3 |   methodA() {
>  4 |     return this.methodB()
     |            ^^^^^^^^^^^^ Unsafe member access .methodB on an `any` value. `this` is typed as `any`.
You can try to fix this by turning on the `noImplicitThis` compiler option, or adding a `this` parameter to the function.
   5 |   },
   6 |   methodB() {
   7 |     const getProperty = () => Math.random() > 0.5 ? 'methodB' : 'methodC'
   8 |     return this[getProperty()]()
   9 |   },
  10 |   methodC() {
  11 |     return true
  12 |   },
  13 |   methodD() {
  14 |     return (this?.methodA)?.()
  15 |   }
  16 | };
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const methods = {
   3 |   methodA() {
   4 |     return this.methodB()
   5 |   },
   6 |   methodB() {
   7 |     const getProperty = () => Math.random() > 0.5 ? 'methodB' : 'methodC'
>  8 |     return this[getProperty()]()
     |            ^^^^^^^^^^^^^^^^^^^ Unsafe member access [getProperty()] on an `any` value. `this` is typed as `any`.
You can try to fix this by turning on the `noImplicitThis` compiler option, or adding a `this` parameter to the function.
   9 |   },
  10 |   methodC() {
  11 |     return true
  12 |   },
  13 |   methodD() {
  14 |     return (this?.methodA)?.()
  15 |   }
  16 | };
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const methods = {
   3 |   methodA() {
   4 |     return this.methodB()
   5 |   },
   6 |   methodB() {
   7 |     const getProperty = () => Math.random() > 0.5 ? 'methodB' : 'methodC'
   8 |     return this[getProperty()]()
   9 |   },
  10 |   methodC() {
  11 |     return true
  12 |   },
  13 |   methodD() {
> 14 |     return (this?.methodA)?.()
     |             ^^^^^^^^^^^^^ Unsafe member access .methodA on an `any` value. `this` is typed as `any`.
You can try to fix this by turning on the `noImplicitThis` compiler option, or adding a `this` parameter to the function.
  15 |   }
  16 | };
  17 |       
```
