# no-this-alias

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
const self = this;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const self = this;
    |       ^^^^ Unexpected aliasing of 'this' to local variable.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
const self = this;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const self = this;
    |       ^^^^ Unexpected aliasing of 'this' to local variable.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

let that;
that = this;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let that;
> 3 | that = this;
    | ^^^^ Unexpected aliasing of 'this' to local variable.
  4 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
const { props, state } = this;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const { props, state } = this;
    |       ^^^^^^^^^^^^^^^^ Unexpected aliasing of members of 'this' to local variables.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

var unscoped = this;

function testFunction() {
  let inFunction = this;
}
const testLambda = () => {
  const inLambda = this;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 | var unscoped = this;
     |     ^^^^^^^^ Unexpected aliasing of 'this' to local variable.
   3 |
   4 | function testFunction() {
   5 |   let inFunction = this;
   6 | }
   7 | const testLambda = () => {
   8 |   const inLambda = this;
   9 | };
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | var unscoped = this;
   3 |
   4 | function testFunction() {
>  5 |   let inFunction = this;
     |       ^^^^^^^^^^ Unexpected aliasing of 'this' to local variable.
   6 | }
   7 | const testLambda = () => {
   8 |   const inLambda = this;
   9 | };
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | var unscoped = this;
   3 |
   4 | function testFunction() {
   5 |   let inFunction = this;
   6 | }
   7 | const testLambda = () => {
>  8 |   const inLambda = this;
     |         ^^^^^^^^ Unexpected aliasing of 'this' to local variable.
   9 | };
  10 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

class TestClass {
  constructor() {
    const inConstructor = this;
    const asThis: this = this;

    const asString = 'this';
    const asArray = [this];
    const asArrayString = ['this'];
  }

  public act(scope: this = this) {
    const inMemberFunction = this;
    const { act } = this;
    const { act, constructor } = this;
    const [foo] = this;
    const [foo, bar] = this;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class TestClass {
   3 |   constructor() {
>  4 |     const inConstructor = this;
     |           ^^^^^^^^^^^^^ Unexpected aliasing of 'this' to local variable.
   5 |     const asThis: this = this;
   6 |
   7 |     const asString = 'this';
   8 |     const asArray = [this];
   9 |     const asArrayString = ['this'];
  10 |   }
  11 |
  12 |   public act(scope: this = this) {
  13 |     const inMemberFunction = this;
  14 |     const { act } = this;
  15 |     const { act, constructor } = this;
  16 |     const [foo] = this;
  17 |     const [foo, bar] = this;
  18 |   }
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class TestClass {
   3 |   constructor() {
   4 |     const inConstructor = this;
>  5 |     const asThis: this = this;
     |           ^^^^^^^^^^^^ Unexpected aliasing of 'this' to local variable.
   6 |
   7 |     const asString = 'this';
   8 |     const asArray = [this];
   9 |     const asArrayString = ['this'];
  10 |   }
  11 |
  12 |   public act(scope: this = this) {
  13 |     const inMemberFunction = this;
  14 |     const { act } = this;
  15 |     const { act, constructor } = this;
  16 |     const [foo] = this;
  17 |     const [foo, bar] = this;
  18 |   }
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class TestClass {
   3 |   constructor() {
   4 |     const inConstructor = this;
   5 |     const asThis: this = this;
   6 |
   7 |     const asString = 'this';
   8 |     const asArray = [this];
   9 |     const asArrayString = ['this'];
  10 |   }
  11 |
  12 |   public act(scope: this = this) {
> 13 |     const inMemberFunction = this;
     |           ^^^^^^^^^^^^^^^^ Unexpected aliasing of 'this' to local variable.
  14 |     const { act } = this;
  15 |     const { act, constructor } = this;
  16 |     const [foo] = this;
  17 |     const [foo, bar] = this;
  18 |   }
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class TestClass {
   3 |   constructor() {
   4 |     const inConstructor = this;
   5 |     const asThis: this = this;
   6 |
   7 |     const asString = 'this';
   8 |     const asArray = [this];
   9 |     const asArrayString = ['this'];
  10 |   }
  11 |
  12 |   public act(scope: this = this) {
  13 |     const inMemberFunction = this;
> 14 |     const { act } = this;
     |           ^^^^^^^ Unexpected aliasing of members of 'this' to local variables.
  15 |     const { act, constructor } = this;
  16 |     const [foo] = this;
  17 |     const [foo, bar] = this;
  18 |   }
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class TestClass {
   3 |   constructor() {
   4 |     const inConstructor = this;
   5 |     const asThis: this = this;
   6 |
   7 |     const asString = 'this';
   8 |     const asArray = [this];
   9 |     const asArrayString = ['this'];
  10 |   }
  11 |
  12 |   public act(scope: this = this) {
  13 |     const inMemberFunction = this;
  14 |     const { act } = this;
> 15 |     const { act, constructor } = this;
     |           ^^^^^^^^^^^^^^^^^^^^ Unexpected aliasing of members of 'this' to local variables.
  16 |     const [foo] = this;
  17 |     const [foo, bar] = this;
  18 |   }
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class TestClass {
   3 |   constructor() {
   4 |     const inConstructor = this;
   5 |     const asThis: this = this;
   6 |
   7 |     const asString = 'this';
   8 |     const asArray = [this];
   9 |     const asArrayString = ['this'];
  10 |   }
  11 |
  12 |   public act(scope: this = this) {
  13 |     const inMemberFunction = this;
  14 |     const { act } = this;
  15 |     const { act, constructor } = this;
> 16 |     const [foo] = this;
     |           ^^^^^ Unexpected aliasing of members of 'this' to local variables.
  17 |     const [foo, bar] = this;
  18 |   }
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class TestClass {
   3 |   constructor() {
   4 |     const inConstructor = this;
   5 |     const asThis: this = this;
   6 |
   7 |     const asString = 'this';
   8 |     const asArray = [this];
   9 |     const asArrayString = ['this'];
  10 |   }
  11 |
  12 |   public act(scope: this = this) {
  13 |     const inMemberFunction = this;
  14 |     const { act } = this;
  15 |     const { act, constructor } = this;
  16 |     const [foo] = this;
> 17 |     const [foo, bar] = this;
     |           ^^^^^^^^^^ Unexpected aliasing of members of 'this' to local variables.
  18 |   }
  19 | }
  20 |       
```
