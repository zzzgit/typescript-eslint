# no-unsafe-call

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: any) {
  x();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: any) {
> 3 |   x();
    |   ^ Unsafe call of an `any` typed value.
  4 | }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: any) {
  x?.();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: any) {
> 3 |   x?.();
    |   ^ Unsafe call of an `any` typed value.
  4 | }
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: any) {
  x.a.b.c.d.e.f.g();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: any) {
> 3 |   x.a.b.c.d.e.f.g();
    |   ^^^^^^^^^^^^^^^ Unsafe call of an `any` typed value.
  4 | }
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: any) {
  x.a.b.c.d.e.f.g?.();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: any) {
> 3 |   x.a.b.c.d.e.f.g?.();
    |   ^^^^^^^^^^^^^^^ Unsafe call of an `any` typed value.
  4 | }
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: { a: any }) {
  x.a();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: { a: any }) {
> 3 |   x.a();
    |   ^^^ Unsafe call of an `any` typed value.
  4 | }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: { a: any }) {
  x?.a();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: { a: any }) {
> 3 |   x?.a();
    |   ^^^^ Unsafe call of an `any` typed value.
  4 | }
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: { a: any }) {
  x.a?.();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: { a: any }) {
> 3 |   x.a?.();
    |   ^^^ Unsafe call of an `any` typed value.
  4 | }
  5 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: any) {
  new x();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: any) {
> 3 |   new x();
    |   ^^^^^^^ Unsafe construction of an any type value.
  4 | }
  5 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: { a: any }) {
  new x.a();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: { a: any }) {
> 3 |   new x.a();
    |   ^^^^^^^^^ Unsafe construction of an any type value.
  4 | }
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: any) {
  x`foo`;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: any) {
> 3 |   x`foo`;
    |   ^ Unsafe any typed template tag.
  4 | }
  5 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

function foo(x: { tag: any }) {
  x.tag`foo`;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(x: { tag: any }) {
> 3 |   x.tag`foo`;
    |   ^^^^^ Unsafe any typed template tag.
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
    return true
  },
  methodC() {
    return this()
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
     |            ^^^^^^^^^^^^ Unsafe call of an `any` typed value. `this` is typed as `any`.
You can try to fix this by turning on the `noImplicitThis` compiler option, or adding a `this` parameter to the function.
   5 |   },
   6 |   methodB() {
   7 |     return true
   8 |   },
   9 |   methodC() {
  10 |     return this()
  11 |   }
  12 | };
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const methods = {
   3 |   methodA() {
   4 |     return this.methodB()
   5 |   },
   6 |   methodB() {
   7 |     return true
   8 |   },
   9 |   methodC() {
> 10 |     return this()
     |            ^^^^ Unsafe call of an `any` typed value. `this` is typed as `any`.
You can try to fix this by turning on the `noImplicitThis` compiler option, or adding a `this` parameter to the function.
  11 |   }
  12 | };
  13 |       
```
