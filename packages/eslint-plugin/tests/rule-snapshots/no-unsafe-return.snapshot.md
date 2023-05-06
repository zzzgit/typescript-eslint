# no-unsafe-return

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  return 1 as any;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   return 1 as any;
    |   ^^^^^^^^^^^^^^^^ Unsafe return of an `any` typed value.
  4 | }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  return Object.create(null);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   return Object.create(null);
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unsafe return of an `any` typed value.
  4 | }
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

const foo = () => {
  return 1 as any;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = () => {
> 3 |   return 1 as any;
    |   ^^^^^^^^^^^^^^^^ Unsafe return of an `any` typed value.
  4 | };
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
const foo = () => Object.create(null);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = () => Object.create(null);
    |                   ^^^^^^^^^^^^^^^^^^^ Unsafe return of an `any` typed value.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  return [] as any[];
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   return [] as any[];
    |   ^^^^^^^^^^^^^^^^^^^ Unsafe return of an `any[]` typed value.
  4 | }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  return [] as Array<any>;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   return [] as Array<any>;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^ Unsafe return of an `any[]` typed value.
  4 | }
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  return [] as readonly any[];
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   return [] as readonly any[];
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unsafe return of an `any[]` typed value.
  4 | }
  5 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  return [] as Readonly<any[]>;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   return [] as Readonly<any[]>;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unsafe return of an `any[]` typed value.
  4 | }
  5 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

const foo = () => {
  return [] as any[];
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = () => {
> 3 |   return [] as any[];
    |   ^^^^^^^^^^^^^^^^^^^ Unsafe return of an `any[]` typed value.
  4 | };
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
const foo = () => [] as any[];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = () => [] as any[];
    |                   ^^^^^^^^^^^ Unsafe return of an `any[]` typed value.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

function foo(): Set<string> {
  return new Set<any>();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(): Set<string> {
> 3 |   return new Set<any>();
    |   ^^^^^^^^^^^^^^^^^^^^^^ Unsafe return of type `Set<any>` from function with return type `Set<string>`.
  4 | }
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

function foo(): Map<string, string> {
  return new Map<string, any>();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(): Map<string, string> {
> 3 |   return new Map<string, any>();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unsafe return of type `Map<string, any>` from function with return type `Map<string, string>`.
  4 | }
  5 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

function foo(): Set<string[]> {
  return new Set<any[]>();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(): Set<string[]> {
> 3 |   return new Set<any[]>();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^ Unsafe return of type `Set<any[]>` from function with return type `Set<string[]>`.
  4 | }
  5 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

function foo(): Set<Set<Set<string>>> {
  return new Set<Set<Set<any>>>();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(): Set<Set<Set<string>>> {
> 3 |   return new Set<Set<Set<any>>>();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unsafe return of type `Set<Set<Set<any>>>` from function with return type `Set<Set<Set<string>>>`.
  4 | }
  5 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

type Fn = () => Set<string>;
const foo1: Fn = () => new Set<any>();
const foo2: Fn = function test() {
  return new Set<any>();
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Fn = () => Set<string>;
> 3 | const foo1: Fn = () => new Set<any>();
    |                        ^^^^^^^^^^^^^^ Unsafe return of type `Set<any>` from function with return type `Set<string>`.
  4 | const foo2: Fn = function test() {
  5 |   return new Set<any>();
  6 | };
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Fn = () => Set<string>;
  3 | const foo1: Fn = () => new Set<any>();
  4 | const foo2: Fn = function test() {
> 5 |   return new Set<any>();
    |   ^^^^^^^^^^^^^^^^^^^^^^ Unsafe return of type `Set<any>` from function with return type `Set<string>`.
  6 | };
  7 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

type Fn = () => Set<string>;
function receiver(arg: Fn) {}
receiver(() => new Set<any>());
receiver(function test() {
  return new Set<any>();
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Fn = () => Set<string>;
  3 | function receiver(arg: Fn) {}
> 4 | receiver(() => new Set<any>());
    |                ^^^^^^^^^^^^^^ Unsafe return of type `Set<any>` from function with return type `Set<string>`.
  5 | receiver(function test() {
  6 |   return new Set<any>();
  7 | });
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Fn = () => Set<string>;
  3 | function receiver(arg: Fn) {}
  4 | receiver(() => new Set<any>());
  5 | receiver(function test() {
> 6 |   return new Set<any>();
    |   ^^^^^^^^^^^^^^^^^^^^^^ Unsafe return of type `Set<any>` from function with return type `Set<string>`.
  7 | });
  8 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  return this;
}

function bar() {
  return () => this;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   return this;
    |   ^^^^^^^^^^^^ Unsafe return of an `any` typed value. `this` is typed as `any`.
You can try to fix this by turning on the `noImplicitThis` compiler option, or adding a `this` parameter to the function.
  4 | }
  5 |
  6 | function bar() {
  7 |   return () => this;
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
  3 |   return this;
  4 | }
  5 |
  6 | function bar() {
> 7 |   return () => this;
    |                ^^^^ Unsafe return of an `any` typed value. `this` is typed as `any`.
You can try to fix this by turning on the `noImplicitThis` compiler option, or adding a `this` parameter to the function.
  8 | }
  9 |       
```
