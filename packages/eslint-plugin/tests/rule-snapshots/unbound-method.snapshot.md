# unbound-method

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

class Console {
  log(str) {
    process.stdout.write(str);
  }
}

const console = new Console();

Promise.resolve().then(console.log);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Console {
   3 |   log(str) {
   4 |     process.stdout.write(str);
   5 |   }
   6 | }
   7 |
   8 | const console = new Console();
   9 |
> 10 | Promise.resolve().then(console.log);
     |                        ^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  11 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

import { console } from './class';
const x = console.log;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { console } from './class';
> 3 | const x = console.log;
    |           ^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  4 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

class ContainsMethods {
  bound?: () => void;
  unbound?(): void;

  static boundStatic?: () => void;
  static unboundStatic?(): void;
}

let instance = new ContainsMethods();

const arith = {
  double(this: void, x: number): number {
    return x * 2;
  }
};


function foo(arg: ContainsMethods | null) {
  const unbound = arg?.unbound;
  arg.unbound += 1;
  arg?.unbound as any;
}
      
  
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class ContainsMethods {
   3 |   bound?: () => void;
   4 |   unbound?(): void;
   5 |
   6 |   static boundStatic?: () => void;
   7 |   static unboundStatic?(): void;
   8 | }
   9 |
  10 | let instance = new ContainsMethods();
  11 |
  12 | const arith = {
  13 |   double(this: void, x: number): number {
  14 |     return x * 2;
  15 |   }
  16 | };
  17 |
  18 |
  19 | function foo(arg: ContainsMethods | null) {
> 20 |   const unbound = arg?.unbound;
     |                   ^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  21 |   arg.unbound += 1;
  22 |   arg?.unbound as any;
  23 | }
  24 |       
  25 |   
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class ContainsMethods {
   3 |   bound?: () => void;
   4 |   unbound?(): void;
   5 |
   6 |   static boundStatic?: () => void;
   7 |   static unboundStatic?(): void;
   8 | }
   9 |
  10 | let instance = new ContainsMethods();
  11 |
  12 | const arith = {
  13 |   double(this: void, x: number): number {
  14 |     return x * 2;
  15 |   }
  16 | };
  17 |
  18 |
  19 | function foo(arg: ContainsMethods | null) {
  20 |   const unbound = arg?.unbound;
> 21 |   arg.unbound += 1;
     |   ^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  22 |   arg?.unbound as any;
  23 | }
  24 |       
  25 |   
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class ContainsMethods {
   3 |   bound?: () => void;
   4 |   unbound?(): void;
   5 |
   6 |   static boundStatic?: () => void;
   7 |   static unboundStatic?(): void;
   8 | }
   9 |
  10 | let instance = new ContainsMethods();
  11 |
  12 | const arith = {
  13 |   double(this: void, x: number): number {
  14 |     return x * 2;
  15 |   }
  16 | };
  17 |
  18 |
  19 | function foo(arg: ContainsMethods | null) {
  20 |   const unbound = arg?.unbound;
  21 |   arg.unbound += 1;
> 22 |   arg?.unbound as any;
     |   ^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  23 | }
  24 |       
  25 |   
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

class ContainsMethods {
  bound?: () => void;
  unbound?(): void;

  static boundStatic?: () => void;
  static unboundStatic?(): void;
}

let instance = new ContainsMethods();

const arith = {
  double(this: void, x: number): number {
    return x * 2;
  }
};

const unbound = instance.unbound;
  
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class ContainsMethods {
   3 |   bound?: () => void;
   4 |   unbound?(): void;
   5 |
   6 |   static boundStatic?: () => void;
   7 |   static unboundStatic?(): void;
   8 | }
   9 |
  10 | let instance = new ContainsMethods();
  11 |
  12 | const arith = {
  13 |   double(this: void, x: number): number {
  14 |     return x * 2;
  15 |   }
  16 | };
  17 |
> 18 | const unbound = instance.unbound;
     |                 ^^^^^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  19 |   
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

class ContainsMethods {
  bound?: () => void;
  unbound?(): void;

  static boundStatic?: () => void;
  static unboundStatic?(): void;
}

let instance = new ContainsMethods();

const arith = {
  double(this: void, x: number): number {
    return x * 2;
  }
};

const unboundStatic = ContainsMethods.unboundStatic;
  
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class ContainsMethods {
   3 |   bound?: () => void;
   4 |   unbound?(): void;
   5 |
   6 |   static boundStatic?: () => void;
   7 |   static unboundStatic?(): void;
   8 | }
   9 |
  10 | let instance = new ContainsMethods();
  11 |
  12 | const arith = {
  13 |   double(this: void, x: number): number {
  14 |     return x * 2;
  15 |   }
  16 | };
  17 |
> 18 | const unboundStatic = ContainsMethods.unboundStatic;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  19 |   
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

class ContainsMethods {
  bound?: () => void;
  unbound?(): void;

  static boundStatic?: () => void;
  static unboundStatic?(): void;
}

let instance = new ContainsMethods();

const arith = {
  double(this: void, x: number): number {
    return x * 2;
  }
};

const { unbound } = instance;
  
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class ContainsMethods {
   3 |   bound?: () => void;
   4 |   unbound?(): void;
   5 |
   6 |   static boundStatic?: () => void;
   7 |   static unboundStatic?(): void;
   8 | }
   9 |
  10 | let instance = new ContainsMethods();
  11 |
  12 | const arith = {
  13 |   double(this: void, x: number): number {
  14 |     return x * 2;
  15 |   }
  16 | };
  17 |
> 18 | const { unbound } = instance;
     |         ^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  19 |   
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

class ContainsMethods {
  bound?: () => void;
  unbound?(): void;

  static boundStatic?: () => void;
  static unboundStatic?(): void;
}

let instance = new ContainsMethods();

const arith = {
  double(this: void, x: number): number {
    return x * 2;
  }
};

const { unboundStatic } = ContainsMethods;
  
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class ContainsMethods {
   3 |   bound?: () => void;
   4 |   unbound?(): void;
   5 |
   6 |   static boundStatic?: () => void;
   7 |   static unboundStatic?(): void;
   8 | }
   9 |
  10 | let instance = new ContainsMethods();
  11 |
  12 | const arith = {
  13 |   double(this: void, x: number): number {
  14 |     return x * 2;
  15 |   }
  16 | };
  17 |
> 18 | const { unboundStatic } = ContainsMethods;
     |         ^^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  19 |   
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

class ContainsMethods {
  bound?: () => void;
  unbound?(): void;

  static boundStatic?: () => void;
  static unboundStatic?(): void;
}

let instance = new ContainsMethods();

const arith = {
  double(this: void, x: number): number {
    return x * 2;
  }
};

<any>instance.unbound;
  
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class ContainsMethods {
   3 |   bound?: () => void;
   4 |   unbound?(): void;
   5 |
   6 |   static boundStatic?: () => void;
   7 |   static unboundStatic?(): void;
   8 | }
   9 |
  10 | let instance = new ContainsMethods();
  11 |
  12 | const arith = {
  13 |   double(this: void, x: number): number {
  14 |     return x * 2;
  15 |   }
  16 | };
  17 |
> 18 | <any>instance.unbound;
     |      ^^^^^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  19 |   
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

class ContainsMethods {
  bound?: () => void;
  unbound?(): void;

  static boundStatic?: () => void;
  static unboundStatic?(): void;
}

let instance = new ContainsMethods();

const arith = {
  double(this: void, x: number): number {
    return x * 2;
  }
};

instance.unbound as any;
  
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class ContainsMethods {
   3 |   bound?: () => void;
   4 |   unbound?(): void;
   5 |
   6 |   static boundStatic?: () => void;
   7 |   static unboundStatic?(): void;
   8 | }
   9 |
  10 | let instance = new ContainsMethods();
  11 |
  12 | const arith = {
  13 |   double(this: void, x: number): number {
  14 |     return x * 2;
  15 |   }
  16 | };
  17 |
> 18 | instance.unbound as any;
     | ^^^^^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  19 |   
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

class ContainsMethods {
  bound?: () => void;
  unbound?(): void;

  static boundStatic?: () => void;
  static unboundStatic?(): void;
}

let instance = new ContainsMethods();

const arith = {
  double(this: void, x: number): number {
    return x * 2;
  }
};

<any>ContainsMethods.unboundStatic;
  
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class ContainsMethods {
   3 |   bound?: () => void;
   4 |   unbound?(): void;
   5 |
   6 |   static boundStatic?: () => void;
   7 |   static unboundStatic?(): void;
   8 | }
   9 |
  10 | let instance = new ContainsMethods();
  11 |
  12 | const arith = {
  13 |   double(this: void, x: number): number {
  14 |     return x * 2;
  15 |   }
  16 | };
  17 |
> 18 | <any>ContainsMethods.unboundStatic;
     |      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  19 |   
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

class ContainsMethods {
  bound?: () => void;
  unbound?(): void;

  static boundStatic?: () => void;
  static unboundStatic?(): void;
}

let instance = new ContainsMethods();

const arith = {
  double(this: void, x: number): number {
    return x * 2;
  }
};

ContainsMethods.unboundStatic as any;
  
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class ContainsMethods {
   3 |   bound?: () => void;
   4 |   unbound?(): void;
   5 |
   6 |   static boundStatic?: () => void;
   7 |   static unboundStatic?(): void;
   8 | }
   9 |
  10 | let instance = new ContainsMethods();
  11 |
  12 | const arith = {
  13 |   double(this: void, x: number): number {
  14 |     return x * 2;
  15 |   }
  16 | };
  17 |
> 18 | ContainsMethods.unboundStatic as any;
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  19 |   
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

class ContainsMethods {
  bound?: () => void;
  unbound?(): void;

  static boundStatic?: () => void;
  static unboundStatic?(): void;
}

let instance = new ContainsMethods();

const arith = {
  double(this: void, x: number): number {
    return x * 2;
  }
};

instance.unbound || 0;
  
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class ContainsMethods {
   3 |   bound?: () => void;
   4 |   unbound?(): void;
   5 |
   6 |   static boundStatic?: () => void;
   7 |   static unboundStatic?(): void;
   8 | }
   9 |
  10 | let instance = new ContainsMethods();
  11 |
  12 | const arith = {
  13 |   double(this: void, x: number): number {
  14 |     return x * 2;
  15 |   }
  16 | };
  17 |
> 18 | instance.unbound || 0;
     | ^^^^^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  19 |   
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

class ContainsMethods {
  bound?: () => void;
  unbound?(): void;

  static boundStatic?: () => void;
  static unboundStatic?(): void;
}

let instance = new ContainsMethods();

const arith = {
  double(this: void, x: number): number {
    return x * 2;
  }
};

ContainsMethods.unboundStatic || 0;
  
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class ContainsMethods {
   3 |   bound?: () => void;
   4 |   unbound?(): void;
   5 |
   6 |   static boundStatic?: () => void;
   7 |   static unboundStatic?(): void;
   8 | }
   9 |
  10 | let instance = new ContainsMethods();
  11 |
  12 | const arith = {
  13 |   double(this: void, x: number): number {
  14 |     return x * 2;
  15 |   }
  16 | };
  17 |
> 18 | ContainsMethods.unboundStatic || 0;
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  19 |   
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

class ContainsMethods {
  bound?: () => void;
  unbound?(): void;

  static boundStatic?: () => void;
  static unboundStatic?(): void;
}

let instance = new ContainsMethods();

const arith = {
  double(this: void, x: number): number {
    return x * 2;
  }
};

instance.unbound ? instance.unbound : null
  
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class ContainsMethods {
   3 |   bound?: () => void;
   4 |   unbound?(): void;
   5 |
   6 |   static boundStatic?: () => void;
   7 |   static unboundStatic?(): void;
   8 | }
   9 |
  10 | let instance = new ContainsMethods();
  11 |
  12 | const arith = {
  13 |   double(this: void, x: number): number {
  14 |     return x * 2;
  15 |   }
  16 | };
  17 |
> 18 | instance.unbound ? instance.unbound : null
     |                    ^^^^^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  19 |   
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

class ContainsMethods {
  unbound?(): void;

  static unboundStatic?(): void;
}

new ContainsMethods().unbound;

ContainsMethods.unboundStatic;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class ContainsMethods {
   3 |   unbound?(): void;
   4 |
   5 |   static unboundStatic?(): void;
   6 | }
   7 |
>  8 | new ContainsMethods().unbound;
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
   9 |
  10 | ContainsMethods.unboundStatic;
  11 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

class CommunicationError {
  foo() {}
}
const x = CommunicationError.prototype.foo;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class CommunicationError {
  3 |   foo() {}
  4 | }
> 5 | const x = CommunicationError.prototype.foo;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  6 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
const x = Promise.all;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = Promise.all;
    |           ^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  unbound() {}
}
const instance = new Foo();

let x;

x = instance.unbound; // THIS SHOULD ERROR
instance.unbound = x; // THIS SHOULD NOT
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   unbound() {}
   4 | }
   5 | const instance = new Foo();
   6 |
   7 | let x;
   8 |
>  9 | x = instance.unbound; // THIS SHOULD ERROR
     |     ^^^^^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  10 | instance.unbound = x; // THIS SHOULD NOT
  11 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  unbound = function () {};
}
const unbound = new Foo().unbound;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   unbound = function () {};
  4 | }
> 5 | const unbound = new Foo().unbound;
    |                 ^^^^^^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
  6 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  unbound() {}
}
const { unbound } = new Foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   unbound() {}
  4 | }
> 5 | const { unbound } = new Foo();
    |         ^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  6 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  unbound = function () {};
}
const { unbound } = new Foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   unbound = function () {};
  4 | }
> 5 | const { unbound } = new Foo();
    |         ^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
  6 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  unbound() {}
}
let unbound;
({ unbound } = new Foo());
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   unbound() {}
  4 | }
  5 | let unbound;
> 6 | ({ unbound } = new Foo());
    |    ^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  7 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  unbound = function () {};
}
let unbound;
({ unbound } = new Foo());
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   unbound = function () {};
  4 | }
  5 | let unbound;
> 6 | ({ unbound } = new Foo());
    |    ^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
  7 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

class CommunicationError {
  foo() {}
}
const { foo } = CommunicationError.prototype;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class CommunicationError {
  3 |   foo() {}
  4 | }
> 5 | const { foo } = CommunicationError.prototype;
    |         ^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  6 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

class CommunicationError {
  foo() {}
}
let foo;
({ foo } = CommunicationError.prototype);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class CommunicationError {
  3 |   foo() {}
  4 | }
  5 | let foo;
> 6 | ({ foo } = CommunicationError.prototype);
    |    ^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  7 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

import { console } from './class';
const { log } = console;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { console } from './class';
> 3 | const { log } = console;
    |         ^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  4 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
const { all } = Promise;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const { all } = Promise;
    |         ^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

class BaseClass {
  logThis() {}
}
class OtherClass extends BaseClass {
  constructor() {
    super();
    const x = super.logThis;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class BaseClass {
   3 |   logThis() {}
   4 | }
   5 | class OtherClass extends BaseClass {
   6 |   constructor() {
   7 |     super();
>  8 |     const x = super.logThis;
     |               ^^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
   9 |   }
  10 | }
  11 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

class BaseClass {
  logThis() {}
}
class OtherClass extends BaseClass {
  constructor() {
    super();
    let x;
    x = super.logThis;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class BaseClass {
   3 |   logThis() {}
   4 | }
   5 | class OtherClass extends BaseClass {
   6 |   constructor() {
   7 |     super();
   8 |     let x;
>  9 |     x = super.logThis;
     |         ^^^^^^^^^^^^^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  10 |   }
  11 | }
  12 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

const values = {
  a() {},
  b: () => {},
};

const { a, b } = values;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const values = {
  3 |   a() {},
  4 |   b: () => {},
  5 | };
  6 |
> 7 | const { a, b } = values;
    |         ^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  8 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

const values = {
  a() {},
  b: () => {},
};

const { a: c } = values;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const values = {
  3 |   a() {},
  4 |   b: () => {},
  5 | };
  6 |
> 7 | const { a: c } = values;
    |         ^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  8 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

const values = {
  a() {},
  b: () => {},
};

const { b, a } = values;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const values = {
  3 |   a() {},
  4 |   b: () => {},
  5 | };
  6 |
> 7 | const { b, a } = values;
    |            ^ Avoid referencing unbound methods which may cause unintentional scoping of `this`.
If your function does not access `this`, you can annotate it with `this: void`, or consider using an arrow function instead.
  8 |       
```
