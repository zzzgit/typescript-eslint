# promise-function-async

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

function returnsAny(): any {
  return 0;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function returnsAny(): any {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  3 |   return 0;
  4 | }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

function returnsUnknown(): unknown {
  return 0;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function returnsUnknown(): unknown {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  3 |   return 0;
  4 | }
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

const nonAsyncPromiseFunctionExpressionA = function (p: Promise<void>) {
  return p;
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const nonAsyncPromiseFunctionExpressionA = async function (p: Promise<void>) {
  return p;
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const nonAsyncPromiseFunctionExpressionA = function (p: Promise<void>) {
    |                                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  3 |   return p;
  4 | };
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

const nonAsyncPromiseFunctionExpressionB = function () {
  return new Promise<void>();
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const nonAsyncPromiseFunctionExpressionB = async function () {
  return new Promise<void>();
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const nonAsyncPromiseFunctionExpressionB = function () {
    |                                            ^^^^^^^^^^^ Functions that return promises must be async.
  3 |   return new Promise<void>();
  4 | };
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

function nonAsyncPromiseFunctionDeclarationA(p: Promise<void>) {
  return p;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

async function nonAsyncPromiseFunctionDeclarationA(p: Promise<void>) {
  return p;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function nonAsyncPromiseFunctionDeclarationA(p: Promise<void>) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  3 |   return p;
  4 | }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

function nonAsyncPromiseFunctionDeclarationB() {
  return new Promise<void>();
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

async function nonAsyncPromiseFunctionDeclarationB() {
  return new Promise<void>();
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function nonAsyncPromiseFunctionDeclarationB() {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  3 |   return new Promise<void>();
  4 | }
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

const nonAsyncPromiseArrowFunctionA = (p: Promise<void>) => p;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const nonAsyncPromiseArrowFunctionA = async (p: Promise<void>) => p;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const nonAsyncPromiseArrowFunctionA = (p: Promise<void>) => p;
    |                                       ^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  3 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

const nonAsyncPromiseArrowFunctionB = () => new Promise<void>();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const nonAsyncPromiseArrowFunctionB = async () => new Promise<void>();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const nonAsyncPromiseArrowFunctionB = () => new Promise<void>();
    |                                       ^^^^^ Functions that return promises must be async.
  3 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

const functions = {
  nonAsyncPromiseMethod() {
    return Promise.resolve(1);
  },
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const functions = {
  async nonAsyncPromiseMethod() {
    return Promise.resolve(1);
  },
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const functions = {
> 3 |   nonAsyncPromiseMethod() {
    |   ^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  4 |     return Promise.resolve(1);
  5 |   },
  6 | };
  7 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  public nonAsyncPromiseMethodA(p: Promise<void>) {
    return p;
  }

  public static nonAsyncPromiseMethodB() {
    return new Promise<void>();
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Test {
  public async nonAsyncPromiseMethodA(p: Promise<void>) {
    return p;
  }

  public static async nonAsyncPromiseMethodB() {
    return new Promise<void>();
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Test {
>  3 |   public nonAsyncPromiseMethodA(p: Promise<void>) {
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
   4 |     return p;
   5 |   }
   6 |
   7 |   public static nonAsyncPromiseMethodB() {
   8 |     return new Promise<void>();
   9 |   }
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Test {
   3 |   public nonAsyncPromiseMethodA(p: Promise<void>) {
   4 |     return p;
   5 |   }
   6 |
>  7 |   public static nonAsyncPromiseMethodB() {
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
   8 |     return new Promise<void>();
   9 |   }
  10 | }
  11 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
  return p;
};

function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
  return p;
}

const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;

class Test {
  public nonAsyncPromiseMethod(p: Promise<void>) {
    return p;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const nonAsyncPromiseFunctionExpression = async function (p: Promise<void>) {
  return p;
};

async function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
  return p;
}

const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;

class Test {
  public async nonAsyncPromiseMethod(p: Promise<void>) {
    return p;
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 | const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
     |                                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
   3 |   return p;
   4 | };
   5 |
   6 | function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
   7 |   return p;
   8 | }
   9 |
  10 | const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;
  11 |
  12 | class Test {
  13 |   public nonAsyncPromiseMethod(p: Promise<void>) {
  14 |     return p;
  15 |   }
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
   3 |   return p;
   4 | };
   5 |
>  6 | function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
   7 |   return p;
   8 | }
   9 |
  10 | const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;
  11 |
  12 | class Test {
  13 |   public nonAsyncPromiseMethod(p: Promise<void>) {
  14 |     return p;
  15 |   }
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
   3 |   return p;
   4 | };
   5 |
   6 | function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
   7 |   return p;
   8 | }
   9 |
  10 | const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;
  11 |
  12 | class Test {
> 13 |   public nonAsyncPromiseMethod(p: Promise<void>) {
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  14 |     return p;
  15 |   }
  16 | }
  17 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
  return p;
};

function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
  return p;
}

const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;

class Test {
  public nonAsyncPromiseMethod(p: Promise<void>) {
    return p;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const nonAsyncPromiseFunctionExpression = async function (p: Promise<void>) {
  return p;
};

function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
  return p;
}

const nonAsyncPromiseArrowFunction = async (p: Promise<void>) => p;

class Test {
  public async nonAsyncPromiseMethod(p: Promise<void>) {
    return p;
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 | const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
     |                                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
   3 |   return p;
   4 | };
   5 |
   6 | function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
   7 |   return p;
   8 | }
   9 |
  10 | const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;
  11 |
  12 | class Test {
  13 |   public nonAsyncPromiseMethod(p: Promise<void>) {
  14 |     return p;
  15 |   }
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
   3 |   return p;
   4 | };
   5 |
   6 | function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
   7 |   return p;
   8 | }
   9 |
> 10 | const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;
     |                                      ^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  11 |
  12 | class Test {
  13 |   public nonAsyncPromiseMethod(p: Promise<void>) {
  14 |     return p;
  15 |   }
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
   3 |   return p;
   4 | };
   5 |
   6 | function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
   7 |   return p;
   8 | }
   9 |
  10 | const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;
  11 |
  12 | class Test {
> 13 |   public nonAsyncPromiseMethod(p: Promise<void>) {
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  14 |     return p;
  15 |   }
  16 | }
  17 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
  return p;
};

function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
  return p;
}

const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;

class Test {
  public nonAsyncPromiseMethod(p: Promise<void>) {
    return p;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
  return p;
};

async function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
  return p;
}

const nonAsyncPromiseArrowFunction = async (p: Promise<void>) => p;

class Test {
  public async nonAsyncPromiseMethod(p: Promise<void>) {
    return p;
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
   3 |   return p;
   4 | };
   5 |
>  6 | function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
   7 |   return p;
   8 | }
   9 |
  10 | const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;
  11 |
  12 | class Test {
  13 |   public nonAsyncPromiseMethod(p: Promise<void>) {
  14 |     return p;
  15 |   }
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
   3 |   return p;
   4 | };
   5 |
   6 | function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
   7 |   return p;
   8 | }
   9 |
> 10 | const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;
     |                                      ^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  11 |
  12 | class Test {
  13 |   public nonAsyncPromiseMethod(p: Promise<void>) {
  14 |     return p;
  15 |   }
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
   3 |   return p;
   4 | };
   5 |
   6 | function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
   7 |   return p;
   8 | }
   9 |
  10 | const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;
  11 |
  12 | class Test {
> 13 |   public nonAsyncPromiseMethod(p: Promise<void>) {
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  14 |     return p;
  15 |   }
  16 | }
  17 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
  return p;
};

function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
  return p;
}

const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;

class Test {
  public nonAsyncPromiseMethod(p: Promise<void>) {
    return p;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const nonAsyncPromiseFunctionExpression = async function (p: Promise<void>) {
  return p;
};

async function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
  return p;
}

const nonAsyncPromiseArrowFunction = async (p: Promise<void>) => p;

class Test {
  public nonAsyncPromiseMethod(p: Promise<void>) {
    return p;
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 | const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
     |                                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
   3 |   return p;
   4 | };
   5 |
   6 | function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
   7 |   return p;
   8 | }
   9 |
  10 | const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;
  11 |
  12 | class Test {
  13 |   public nonAsyncPromiseMethod(p: Promise<void>) {
  14 |     return p;
  15 |   }
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
   3 |   return p;
   4 | };
   5 |
>  6 | function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
   7 |   return p;
   8 | }
   9 |
  10 | const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;
  11 |
  12 | class Test {
  13 |   public nonAsyncPromiseMethod(p: Promise<void>) {
  14 |     return p;
  15 |   }
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const nonAsyncPromiseFunctionExpression = function (p: Promise<void>) {
   3 |   return p;
   4 | };
   5 |
   6 | function nonAsyncPromiseFunctionDeclaration(p: Promise<void>) {
   7 |   return p;
   8 | }
   9 |
> 10 | const nonAsyncPromiseArrowFunction = (p: Promise<void>) => p;
     |                                      ^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  11 |
  12 | class Test {
  13 |   public nonAsyncPromiseMethod(p: Promise<void>) {
  14 |     return p;
  15 |   }
  16 | }
  17 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

class PromiseType {}

const returnAllowedType = () => new PromiseType();
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class PromiseType {}

const returnAllowedType = async () => new PromiseType();
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class PromiseType {}
  3 |
> 4 | const returnAllowedType = () => new PromiseType();
    |                           ^^^^^ Functions that return promises must be async.
  5 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

interface SPromise<T> extends Promise<T> {}
function foo(): Promise<string> | SPromise<boolean> {
  return Math.random() > 0.5
    ? Promise.resolve('value')
    : Promise.resolve(false);
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface SPromise<T> extends Promise<T> {}
async function foo(): Promise<string> | SPromise<boolean> {
  return Math.random() > 0.5
    ? Promise.resolve('value')
    : Promise.resolve(false);
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface SPromise<T> extends Promise<T> {}
> 3 | function foo(): Promise<string> | SPromise<boolean> {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  4 |   return Math.random() > 0.5
  5 |     ? Promise.resolve('value')
  6 |     : Promise.resolve(false);
  7 | }
  8 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  @decorator
  public test() {
    return Promise.resolve(123);
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Test {
  @decorator
  public async test() {
    return Promise.resolve(123);
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Test {
  3 |   @decorator
> 4 |   public test() {
    |   ^^^^^^^^^^^^^ Functions that return promises must be async.
  5 |     return Promise.resolve(123);
  6 |   }
  7 | }
  8 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

class Test {
  @decorator(async () => {})
  static protected[(1)]() {
    return Promise.resolve(1);
  }
  public'bar'() {
    return Promise.resolve(2);
  }
  private['baz']() {
    return Promise.resolve(3);
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Test {
  @decorator(async () => {})
  static protected async [(1)]() {
    return Promise.resolve(1);
  }
  public async 'bar'() {
    return Promise.resolve(2);
  }
  private async ['baz']() {
    return Promise.resolve(3);
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Test {
   3 |   @decorator(async () => {})
>  4 |   static protected[(1)]() {
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
   5 |     return Promise.resolve(1);
   6 |   }
   7 |   public'bar'() {
   8 |     return Promise.resolve(2);
   9 |   }
  10 |   private['baz']() {
  11 |     return Promise.resolve(3);
  12 |   }
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Test {
   3 |   @decorator(async () => {})
   4 |   static protected[(1)]() {
   5 |     return Promise.resolve(1);
   6 |   }
>  7 |   public'bar'() {
     |   ^^^^^^^^^^^^^ Functions that return promises must be async.
   8 |     return Promise.resolve(2);
   9 |   }
  10 |   private['baz']() {
  11 |     return Promise.resolve(3);
  12 |   }
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Test {
   3 |   @decorator(async () => {})
   4 |   static protected[(1)]() {
   5 |     return Promise.resolve(1);
   6 |   }
   7 |   public'bar'() {
   8 |     return Promise.resolve(2);
   9 |   }
> 10 |   private['baz']() {
     |   ^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  11 |     return Promise.resolve(3);
  12 |   }
  13 | }
  14 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  catch() {
    return Promise.resolve(1);
  }

  public default() {
    return Promise.resolve(2);
  }

  @decorator
  private case<T>() {
    return Promise.resolve(3);
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  async catch() {
    return Promise.resolve(1);
  }

  public async default() {
    return Promise.resolve(2);
  }

  @decorator
  private async case<T>() {
    return Promise.resolve(3);
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
>  3 |   catch() {
     |   ^^^^^^^ Functions that return promises must be async.
   4 |     return Promise.resolve(1);
   5 |   }
   6 |
   7 |   public default() {
   8 |     return Promise.resolve(2);
   9 |   }
  10 |
  11 |   @decorator
  12 |   private case<T>() {
  13 |     return Promise.resolve(3);
  14 |   }
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   catch() {
   4 |     return Promise.resolve(1);
   5 |   }
   6 |
>  7 |   public default() {
     |   ^^^^^^^^^^^^^^^^ Functions that return promises must be async.
   8 |     return Promise.resolve(2);
   9 |   }
  10 |
  11 |   @decorator
  12 |   private case<T>() {
  13 |     return Promise.resolve(3);
  14 |   }
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   catch() {
   4 |     return Promise.resolve(1);
   5 |   }
   6 |
   7 |   public default() {
   8 |     return Promise.resolve(2);
   9 |   }
  10 |
  11 |   @decorator
> 12 |   private case<T>() {
     |   ^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  13 |     return Promise.resolve(3);
  14 |   }
  15 | }
  16 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

const foo = {
  catch() {
    return Promise.resolve(1);
  },
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const foo = {
  async catch() {
    return Promise.resolve(1);
  },
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = {
> 3 |   catch() {
    |   ^^^^^^^ Functions that return promises must be async.
  4 |     return Promise.resolve(1);
  5 |   },
  6 | };
  7 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

function promiseInUnionWithoutExplicitReturnType(p: boolean) {
  return p ? Promise.resolve(5) : 5;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

async function promiseInUnionWithoutExplicitReturnType(p: boolean) {
  return p ? Promise.resolve(5) : 5;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function promiseInUnionWithoutExplicitReturnType(p: boolean) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Functions that return promises must be async.
  3 |   return p ? Promise.resolve(5) : 5;
  4 | }
  5 |       
```
