# no-explicit-any

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
const number: any = 1
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const number: any = 1
    |               ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
const number: unknown = 1
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
const number: never = 1
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
const number: any = 1
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
const number: unknown = 1
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | const number: any = 1
    |               ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
const number: unknown = 1
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
const number: never = 1
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
function generic(): any {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function generic(): any {}
    |                     ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
function generic(): unknown {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
function generic(): never {}
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): any {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): unknown {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | function generic(): any {}
    |                     ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): unknown {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): never {}
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
function generic(): Array<any> {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function generic(): Array<any> {}
    |                           ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
function generic(): Array<unknown> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
function generic(): Array<never> {}
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): Array<any> {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): Array<unknown> {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | function generic(): Array<any> {}
    |                           ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): Array<unknown> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): Array<never> {}
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
function generic(): any[] {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function generic(): any[] {}
    |                     ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
function generic(): unknown[] {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
function generic(): never[] {}
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): any[] {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): unknown[] {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | function generic(): any[] {}
    |                     ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): unknown[] {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): never[] {}
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
function generic(param: Array<any>): number {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function generic(param: Array<any>): number {}
    |                               ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
function generic(param: Array<unknown>): number {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
function generic(param: Array<never>): number {}
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(param: Array<any>): number {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(param: Array<unknown>): number {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | function generic(param: Array<any>): number {}
    |                               ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(param: Array<unknown>): number {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(param: Array<never>): number {}
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
function generic(param: any[]): number {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function generic(param: any[]): number {}
    |                         ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
function generic(param: unknown[]): number {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
function generic(param: never[]): number {}
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(param: any[]): number {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(param: unknown[]): number {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | function generic(param: any[]): number {}
    |                         ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(param: unknown[]): number {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(param: never[]): number {}
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
function generic(param: Array<any>): Array<any> {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function generic(param: Array<any>): Array<any> {}
    |                               ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
function generic(param: Array<unknown>): Array<any> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
function generic(param: Array<never>): Array<any> {}
```

<!-- prettier-ignore -->
```ts
> 1 | function generic(param: Array<any>): Array<any> {}
    |                                            ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
function generic(param: Array<any>): Array<unknown> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
function generic(param: Array<any>): Array<never> {}
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(param: Array<any>): Array<any> {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(param: Array<unknown>): Array<unknown> {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | function generic(param: Array<any>): Array<any> {}
    |                               ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(param: Array<unknown>): Array<any> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(param: Array<never>): Array<any> {}
```

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | function generic(param: Array<any>): Array<any> {}
    |                                            ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(param: Array<any>): Array<unknown> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(param: Array<any>): Array<never> {}
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
function generic(): Array<Array<any>> {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function generic(): Array<Array<any>> {}
    |                                 ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
function generic(): Array<Array<unknown>> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
function generic(): Array<Array<never>> {}
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): Array<Array<any>> {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): Array<Array<unknown>> {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | function generic(): Array<Array<any>> {}
    |                                 ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): Array<Array<unknown>> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): Array<Array<never>> {}
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
function generic(): Array<any[]> {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function generic(): Array<any[]> {}
    |                           ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
function generic(): Array<unknown[]> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
function generic(): Array<never[]> {}
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): Array<any[]> {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): Array<unknown[]> {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | function generic(): Array<any[]> {}
    |                           ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): Array<unknown[]> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function generic(): Array<never[]> {}
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

class Greeter {
    constructor(param: Array<any>) {}
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Greeter {
> 3 |     constructor(param: Array<any>) {}
    |                              ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

class Greeter {
    constructor(param: Array<unknown>) {}
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

class Greeter {
    constructor(param: Array<never>) {}
}
            
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    constructor(param: Array<any>) {}
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    constructor(param: Array<unknown>) {}
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | class Greeter {
> 4 |     constructor(param: Array<any>) {}
    |                              ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    constructor(param: Array<unknown>) {}
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    constructor(param: Array<never>) {}
}
            
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

class Greeter {
    message: any;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Greeter {
> 3 |     message: any;
    |              ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

class Greeter {
    message: unknown;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

class Greeter {
    message: never;
}
            
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: any;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: unknown;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | class Greeter {
> 4 |     message: any;
    |              ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: unknown;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: never;
}
            
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

class Greeter {
    message: Array<any>;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Greeter {
> 3 |     message: Array<any>;
    |                    ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

class Greeter {
    message: Array<unknown>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

class Greeter {
    message: Array<never>;
}
            
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: Array<any>;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: Array<unknown>;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | class Greeter {
> 4 |     message: Array<any>;
    |                    ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: Array<unknown>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: Array<never>;
}
            
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

class Greeter {
    message: any[];
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Greeter {
> 3 |     message: any[];
    |              ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

class Greeter {
    message: unknown[];
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

class Greeter {
    message: never[];
}
            
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: any[];
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: unknown[];
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | class Greeter {
> 4 |     message: any[];
    |              ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: unknown[];
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: never[];
}
            
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

class Greeter {
    message: Array<Array<any>>;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Greeter {
> 3 |     message: Array<Array<any>>;
    |                          ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

class Greeter {
    message: Array<Array<unknown>>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

class Greeter {
    message: Array<Array<never>>;
}
            
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: Array<Array<any>>;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: Array<Array<unknown>>;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | class Greeter {
> 4 |     message: Array<Array<any>>;
    |                          ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: Array<Array<unknown>>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: Array<Array<never>>;
}
            
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

class Greeter {
    message: Array<any[]>;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Greeter {
> 3 |     message: Array<any[]>;
    |                    ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

class Greeter {
    message: Array<unknown[]>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

class Greeter {
    message: Array<never[]>;
}
            
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: Array<any[]>;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: Array<unknown[]>;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | class Greeter {
> 4 |     message: Array<any[]>;
    |                    ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: Array<unknown[]>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

class Greeter {
    message: Array<never[]>;
}
            
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

interface Greeter {
    message: any;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Greeter {
> 3 |     message: any;
    |              ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

interface Greeter {
    message: unknown;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

interface Greeter {
    message: never;
}
            
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: any;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: unknown;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | interface Greeter {
> 4 |     message: any;
    |              ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: unknown;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: never;
}
            
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

interface Greeter {
    message: Array<any>;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Greeter {
> 3 |     message: Array<any>;
    |                    ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

interface Greeter {
    message: Array<unknown>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

interface Greeter {
    message: Array<never>;
}
            
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: Array<any>;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: Array<unknown>;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | interface Greeter {
> 4 |     message: Array<any>;
    |                    ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: Array<unknown>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: Array<never>;
}
            
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

interface Greeter {
    message: any[];
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Greeter {
> 3 |     message: any[];
    |              ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

interface Greeter {
    message: unknown[];
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

interface Greeter {
    message: never[];
}
            
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: any[];
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: unknown[];
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | interface Greeter {
> 4 |     message: any[];
    |              ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: unknown[];
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: never[];
}
            
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

interface Greeter {
    message: Array<Array<any>>;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Greeter {
> 3 |     message: Array<Array<any>>;
    |                          ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

interface Greeter {
    message: Array<Array<unknown>>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

interface Greeter {
    message: Array<Array<never>>;
}
            
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: Array<Array<any>>;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: Array<Array<unknown>>;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | interface Greeter {
> 4 |     message: Array<Array<any>>;
    |                          ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: Array<Array<unknown>>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: Array<Array<never>>;
}
            
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

interface Greeter {
    message: Array<any[]>;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Greeter {
> 3 |     message: Array<any[]>;
    |                    ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

interface Greeter {
    message: Array<unknown[]>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

interface Greeter {
    message: Array<never[]>;
}
            
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: Array<any[]>;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: Array<unknown[]>;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | interface Greeter {
> 4 |     message: Array<any[]>;
    |                    ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: Array<unknown[]>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

interface Greeter {
    message: Array<never[]>;
}
            
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

type obj = {
    message: any;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type obj = {
> 3 |     message: any;
    |              ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

type obj = {
    message: unknown;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

type obj = {
    message: never;
}
            
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: any;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: unknown;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | type obj = {
> 4 |     message: any;
    |              ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: unknown;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: never;
}
            
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

type obj = {
    message: Array<any>;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type obj = {
> 3 |     message: Array<any>;
    |                    ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

type obj = {
    message: Array<unknown>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

type obj = {
    message: Array<never>;
}
            
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: Array<any>;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: Array<unknown>;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | type obj = {
> 4 |     message: Array<any>;
    |                    ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: Array<unknown>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: Array<never>;
}
            
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts

type obj = {
    message: any[];
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type obj = {
> 3 |     message: any[];
    |              ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

type obj = {
    message: unknown[];
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

type obj = {
    message: never[];
}
            
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: any[];
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: unknown[];
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | type obj = {
> 4 |     message: any[];
    |              ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: unknown[];
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: never[];
}
            
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts

type obj = {
    message: Array<Array<any>>;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type obj = {
> 3 |     message: Array<Array<any>>;
    |                          ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

type obj = {
    message: Array<Array<unknown>>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

type obj = {
    message: Array<Array<never>>;
}
            
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: Array<Array<any>>;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: Array<Array<unknown>>;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | type obj = {
> 4 |     message: Array<Array<any>>;
    |                          ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: Array<Array<unknown>>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: Array<Array<never>>;
}
            
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts

type obj = {
    message: Array<any[]>;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type obj = {
> 3 |     message: Array<any[]>;
    |                    ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

type obj = {
    message: Array<unknown[]>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

type obj = {
    message: Array<never[]>;
}
            
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: Array<any[]>;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: Array<unknown[]>;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | type obj = {
> 4 |     message: Array<any[]>;
    |                    ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: Array<unknown[]>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: Array<never[]>;
}
            
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts

type obj = {
    message: string | any;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type obj = {
> 3 |     message: string | any;
    |                       ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string | unknown;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string | never;
}
            
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | any;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | unknown;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | type obj = {
> 4 |     message: string | any;
    |                       ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | unknown;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | never;
}
            
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts

type obj = {
    message: string | Array<any>;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type obj = {
> 3 |     message: string | Array<any>;
    |                             ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string | Array<unknown>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string | Array<never>;
}
            
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | Array<any>;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | Array<unknown>;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | type obj = {
> 4 |     message: string | Array<any>;
    |                             ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | Array<unknown>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | Array<never>;
}
            
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts

type obj = {
    message: string | any[];
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type obj = {
> 3 |     message: string | any[];
    |                       ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string | unknown[];
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string | never[];
}
            
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | any[];
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | unknown[];
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | type obj = {
> 4 |     message: string | any[];
    |                       ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | unknown[];
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | never[];
}
            
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts

type obj = {
    message: string | Array<Array<any>>;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type obj = {
> 3 |     message: string | Array<Array<any>>;
    |                                   ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string | Array<Array<unknown>>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string | Array<Array<never>>;
}
            
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | Array<Array<any>>;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | Array<Array<unknown>>;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | type obj = {
> 4 |     message: string | Array<Array<any>>;
    |                                   ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | Array<Array<unknown>>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | Array<Array<never>>;
}
            
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts

type obj = {
    message: string | Array<any[]>;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type obj = {
> 3 |     message: string | Array<any[]>;
    |                             ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string | Array<unknown[]>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string | Array<never[]>;
}
            
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | Array<any[]>;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | Array<unknown[]>;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | type obj = {
> 4 |     message: string | Array<any[]>;
    |                             ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | Array<unknown[]>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string | Array<never[]>;
}
            
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts

type obj = {
    message: string & any;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type obj = {
> 3 |     message: string & any;
    |                       ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string & unknown;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string & never;
}
            
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & any;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & unknown;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | type obj = {
> 4 |     message: string & any;
    |                       ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & unknown;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & never;
}
            
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts

type obj = {
    message: string & Array<any>;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type obj = {
> 3 |     message: string & Array<any>;
    |                             ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string & Array<unknown>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string & Array<never>;
}
            
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & Array<any>;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & Array<unknown>;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | type obj = {
> 4 |     message: string & Array<any>;
    |                             ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & Array<unknown>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & Array<never>;
}
            
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts

type obj = {
    message: string & any[];
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type obj = {
> 3 |     message: string & any[];
    |                       ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string & unknown[];
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string & never[];
}
            
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & any[];
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & unknown[];
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | type obj = {
> 4 |     message: string & any[];
    |                       ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & unknown[];
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & never[];
}
            
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts

type obj = {
    message: string & Array<Array<any>>;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type obj = {
> 3 |     message: string & Array<Array<any>>;
    |                                   ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string & Array<Array<unknown>>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string & Array<Array<never>>;
}
            
```

## Test #68

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & Array<Array<any>>;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & Array<Array<unknown>>;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | type obj = {
> 4 |     message: string & Array<Array<any>>;
    |                                   ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & Array<Array<unknown>>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & Array<Array<never>>;
}
            
```

## Test #69

### Test Code

<!-- prettier-ignore -->
```ts

type obj = {
    message: string & Array<any[]>;
}
            
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type obj = {
> 3 |     message: string & Array<any[]>;
    |                             ^^^ Unexpected any. Specify a different type.
  4 | }
  5 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string & Array<unknown[]>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

type obj = {
    message: string & Array<never[]>;
}
            
```

## Test #70

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & Array<any[]>;
}
            
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & Array<unknown[]>;
}
            
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | type obj = {
> 4 |     message: string & Array<any[]>;
    |                             ^^^ Unexpected any. Specify a different type.
  5 | }
  6 |             
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & Array<unknown[]>;
}
            
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

type obj = {
    message: string & Array<never[]>;
}
            
```

## Test #71

### Test Code

<!-- prettier-ignore -->
```ts
class Foo<t = any> extends Bar<any> {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | class Foo<t = any> extends Bar<any> {}
    |               ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
class Foo<t = unknown> extends Bar<any> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
class Foo<t = never> extends Bar<any> {}
```

<!-- prettier-ignore -->
```ts
> 1 | class Foo<t = any> extends Bar<any> {}
    |                                ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
class Foo<t = any> extends Bar<unknown> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
class Foo<t = any> extends Bar<never> {}
```

## Test #72

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
class Foo<t = any> extends Bar<any> {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
class Foo<t = unknown> extends Bar<unknown> {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | class Foo<t = any> extends Bar<any> {}
    |               ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
class Foo<t = unknown> extends Bar<any> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
class Foo<t = never> extends Bar<any> {}
```

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | class Foo<t = any> extends Bar<any> {}
    |                                ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
class Foo<t = any> extends Bar<unknown> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
class Foo<t = any> extends Bar<never> {}
```

## Test #73

### Test Code

<!-- prettier-ignore -->
```ts
abstract class Foo<t = any> extends Bar<any> {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | abstract class Foo<t = any> extends Bar<any> {}
    |                        ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
abstract class Foo<t = unknown> extends Bar<any> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
abstract class Foo<t = never> extends Bar<any> {}
```

<!-- prettier-ignore -->
```ts
> 1 | abstract class Foo<t = any> extends Bar<any> {}
    |                                         ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
abstract class Foo<t = any> extends Bar<unknown> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
abstract class Foo<t = any> extends Bar<never> {}
```

## Test #74

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
abstract class Foo<t = any> extends Bar<any> {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
abstract class Foo<t = unknown> extends Bar<unknown> {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | abstract class Foo<t = any> extends Bar<any> {}
    |                        ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
abstract class Foo<t = unknown> extends Bar<any> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
abstract class Foo<t = never> extends Bar<any> {}
```

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | abstract class Foo<t = any> extends Bar<any> {}
    |                                         ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
abstract class Foo<t = any> extends Bar<unknown> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
abstract class Foo<t = any> extends Bar<never> {}
```

## Test #75

### Test Code

<!-- prettier-ignore -->
```ts
abstract class Foo<t = any> implements Bar<any>, Baz<any> {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | abstract class Foo<t = any> implements Bar<any>, Baz<any> {}
    |                        ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
abstract class Foo<t = unknown> implements Bar<any>, Baz<any> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
abstract class Foo<t = never> implements Bar<any>, Baz<any> {}
```

<!-- prettier-ignore -->
```ts
> 1 | abstract class Foo<t = any> implements Bar<any>, Baz<any> {}
    |                                            ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
abstract class Foo<t = any> implements Bar<unknown>, Baz<any> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
abstract class Foo<t = any> implements Bar<never>, Baz<any> {}
```

<!-- prettier-ignore -->
```ts
> 1 | abstract class Foo<t = any> implements Bar<any>, Baz<any> {}
    |                                                      ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
abstract class Foo<t = any> implements Bar<any>, Baz<unknown> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
abstract class Foo<t = any> implements Bar<any>, Baz<never> {}
```

## Test #76

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
abstract class Foo<t = any> implements Bar<any>, Baz<any> {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
abstract class Foo<t = unknown> implements Bar<unknown>, Baz<unknown> {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | abstract class Foo<t = any> implements Bar<any>, Baz<any> {}
    |                        ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
abstract class Foo<t = unknown> implements Bar<any>, Baz<any> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
abstract class Foo<t = never> implements Bar<any>, Baz<any> {}
```

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | abstract class Foo<t = any> implements Bar<any>, Baz<any> {}
    |                                            ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
abstract class Foo<t = any> implements Bar<unknown>, Baz<any> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
abstract class Foo<t = any> implements Bar<never>, Baz<any> {}
```

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | abstract class Foo<t = any> implements Bar<any>, Baz<any> {}
    |                                                      ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
abstract class Foo<t = any> implements Bar<any>, Baz<unknown> {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
abstract class Foo<t = any> implements Bar<any>, Baz<never> {}
```

## Test #77

### Test Code

<!-- prettier-ignore -->
```ts
new Foo<any>()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | new Foo<any>()
    |         ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
new Foo<unknown>()
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
new Foo<never>()
```

## Test #78

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
new Foo<any>()
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
new Foo<unknown>()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | new Foo<any>()
    |         ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
new Foo<unknown>()
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
new Foo<never>()
```

## Test #79

### Test Code

<!-- prettier-ignore -->
```ts
Foo<any>()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | Foo<any>()
    |     ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
Foo<unknown>()
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
Foo<never>()
```

## Test #80

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
Foo<any>()
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
Foo<unknown>()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | Foo<any>()
    |     ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
Foo<unknown>()
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
Foo<never>()
```

## Test #81

### Test Code

<!-- prettier-ignore -->
```ts

function test<T extends Partial<any>>() {}
const test = <T extends Partial<any>>() => {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function test<T extends Partial<any>>() {}
    |                                 ^^^ Unexpected any. Specify a different type.
  3 | const test = <T extends Partial<any>>() => {};
  4 |       
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

function test<T extends Partial<unknown>>() {}
const test = <T extends Partial<any>>() => {};
      
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

function test<T extends Partial<never>>() {}
const test = <T extends Partial<any>>() => {};
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test<T extends Partial<any>>() {}
> 3 | const test = <T extends Partial<any>>() => {};
    |                                 ^^^ Unexpected any. Specify a different type.
  4 |       
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

function test<T extends Partial<any>>() {}
const test = <T extends Partial<unknown>>() => {};
      
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

function test<T extends Partial<any>>() {}
const test = <T extends Partial<never>>() => {};
      
```

## Test #82

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

function test<T extends Partial<any>>() {}
const test = <T extends Partial<any>>() => {};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

function test<T extends Partial<unknown>>() {}
const test = <T extends Partial<unknown>>() => {};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
> 3 | function test<T extends Partial<any>>() {}
    |                                 ^^^ Unexpected any. Specify a different type.
  4 | const test = <T extends Partial<any>>() => {};
  5 |       
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

function test<T extends Partial<unknown>>() {}
const test = <T extends Partial<any>>() => {};
      
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

function test<T extends Partial<never>>() {}
const test = <T extends Partial<any>>() => {};
      
```

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
  3 | function test<T extends Partial<any>>() {}
> 4 | const test = <T extends Partial<any>>() => {};
    |                                 ^^^ Unexpected any. Specify a different type.
  5 |       
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

function test<T extends Partial<any>>() {}
const test = <T extends Partial<unknown>>() => {};
      
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

function test<T extends Partial<any>>() {}
const test = <T extends Partial<never>>() => {};
      
```

## Test #83

### Test Code

<!-- prettier-ignore -->
```ts

        function foo(a: number, ...rest: any[]): void {
          return;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo(a: number, ...rest: any[]): void {
    |                                          ^^^ Unexpected any. Specify a different type.
  3 |           return;
  4 |         }
  5 |       
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts

        function foo(a: number, ...rest: unknown[]): void {
          return;
        }
      
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts

        function foo(a: number, ...rest: never[]): void {
          return;
        }
      
```

## Test #84

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

        function foo(a: number, ...rest: any[]): void {
          return;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

        function foo(a: number, ...rest: unknown[]): void {
          return;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
  2 |
> 3 |         function foo(a: number, ...rest: any[]): void {
    |                                          ^^^ Unexpected any. Specify a different type.
  4 |           return;
  5 |         }
  6 |       
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

        function foo(a: number, ...rest: unknown[]): void {
          return;
        }
      
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true

        function foo(a: number, ...rest: never[]): void {
          return;
        }
      
```

## Test #85

### Test Code

<!-- prettier-ignore -->
```ts
type Any = any;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Any = any;
    |            ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
type Any = unknown;
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
type Any = never;
```

## Test #86

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
type Any = any;
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
type Any = unknown;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | type Any = any;
    |            ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
type Any = unknown;
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
type Any = never;
```

## Test #87

### Test Code

<!-- prettier-ignore -->
```ts
function foo5(...args: any) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo5(...args: any) {}
    |                        ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
function foo5(...args: unknown) {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
function foo5(...args: never) {}
```

## Test #88

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function foo5(...args: any) {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function foo5(...args: unknown) {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | function foo5(...args: any) {}
    |                        ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function foo5(...args: unknown) {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function foo5(...args: never) {}
```

## Test #89

### Test Code

<!-- prettier-ignore -->
```ts
const bar5 = function (...args: any) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const bar5 = function (...args: any) {}
    |                                 ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
const bar5 = function (...args: unknown) {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
const bar5 = function (...args: never) {}
```

## Test #90

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
const bar5 = function (...args: any) {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
const bar5 = function (...args: unknown) {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | const bar5 = function (...args: any) {}
    |                                 ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
const bar5 = function (...args: unknown) {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
const bar5 = function (...args: never) {}
```

## Test #91

### Test Code

<!-- prettier-ignore -->
```ts
const baz5 = (...args: any) => {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const baz5 = (...args: any) => {}
    |                        ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
const baz5 = (...args: unknown) => {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
const baz5 = (...args: never) => {}
```

## Test #92

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
const baz5 = (...args: any) => {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
const baz5 = (...args: unknown) => {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | const baz5 = (...args: any) => {}
    |                        ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
const baz5 = (...args: unknown) => {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
const baz5 = (...args: never) => {}
```

## Test #93

### Test Code

<!-- prettier-ignore -->
```ts
interface Qux5 { (...args: any): void; }
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Qux5 { (...args: any): void; }
    |                            ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
interface Qux5 { (...args: unknown): void; }
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
interface Qux5 { (...args: never): void; }
```

## Test #94

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
interface Qux5 { (...args: any): void; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
interface Qux5 { (...args: unknown): void; }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | interface Qux5 { (...args: any): void; }
    |                            ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
interface Qux5 { (...args: unknown): void; }
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
interface Qux5 { (...args: never): void; }
```

## Test #95

### Test Code

<!-- prettier-ignore -->
```ts
function quux5(fn: (...args: any) => void): void {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function quux5(fn: (...args: any) => void): void {}
    |                              ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
function quux5(fn: (...args: unknown) => void): void {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
function quux5(fn: (...args: never) => void): void {}
```

## Test #96

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function quux5(fn: (...args: any) => void): void {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function quux5(fn: (...args: unknown) => void): void {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | function quux5(fn: (...args: any) => void): void {}
    |                              ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function quux5(fn: (...args: unknown) => void): void {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function quux5(fn: (...args: never) => void): void {}
```

## Test #97

### Test Code

<!-- prettier-ignore -->
```ts
function quuz5(): ((...args: any) => void) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function quuz5(): ((...args: any) => void) {}
    |                              ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
function quuz5(): ((...args: unknown) => void) {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
function quuz5(): ((...args: never) => void) {}
```

## Test #98

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function quuz5(): ((...args: any) => void) {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function quuz5(): ((...args: unknown) => void) {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | function quuz5(): ((...args: any) => void) {}
    |                              ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function quuz5(): ((...args: unknown) => void) {}
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
function quuz5(): ((...args: never) => void) {}
```

## Test #99

### Test Code

<!-- prettier-ignore -->
```ts
type Fred5 = (...args: any) => void;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Fred5 = (...args: any) => void;
    |                        ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
type Fred5 = (...args: unknown) => void;
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
type Fred5 = (...args: never) => void;
```

## Test #100

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
type Fred5 = (...args: any) => void;
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
type Fred5 = (...args: unknown) => void;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | type Fred5 = (...args: any) => void;
    |                        ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
type Fred5 = (...args: unknown) => void;
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
type Fred5 = (...args: never) => void;
```

## Test #101

### Test Code

<!-- prettier-ignore -->
```ts
type Corge5 = new (...args: any) => void;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Corge5 = new (...args: any) => void;
    |                             ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
type Corge5 = new (...args: unknown) => void;
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
type Corge5 = new (...args: never) => void;
```

## Test #102

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
type Corge5 = new (...args: any) => void;
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
type Corge5 = new (...args: unknown) => void;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | type Corge5 = new (...args: any) => void;
    |                             ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
type Corge5 = new (...args: unknown) => void;
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
type Corge5 = new (...args: never) => void;
```

## Test #103

### Test Code

<!-- prettier-ignore -->
```ts
interface Grault5 { new (...args: any): void; }
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Grault5 { new (...args: any): void; }
    |                                   ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
interface Grault5 { new (...args: unknown): void; }
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
interface Grault5 { new (...args: never): void; }
```

## Test #104

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
interface Grault5 { new (...args: any): void; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
interface Grault5 { new (...args: unknown): void; }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | interface Grault5 { new (...args: any): void; }
    |                                   ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
interface Grault5 { new (...args: unknown): void; }
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
interface Grault5 { new (...args: never): void; }
```

## Test #105

### Test Code

<!-- prettier-ignore -->
```ts
interface Garply5 { f(...args: any): void; }
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Garply5 { f(...args: any): void; }
    |                                ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
interface Garply5 { f(...args: unknown): void; }
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
interface Garply5 { f(...args: never): void; }
```

## Test #106

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
interface Garply5 { f(...args: any): void; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
interface Garply5 { f(...args: unknown): void; }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | interface Garply5 { f(...args: any): void; }
    |                                ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
interface Garply5 { f(...args: unknown): void; }
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
interface Garply5 { f(...args: never): void; }
```

## Test #107

### Test Code

<!-- prettier-ignore -->
```ts
declare function waldo5(...args: any): void;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare function waldo5(...args: any): void;
    |                                  ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
declare function waldo5(...args: unknown): void;
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
declare function waldo5(...args: never): void;
```

## Test #108

### Test Code

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
declare function waldo5(...args: any): void;
```

### Fix Output

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
declare function waldo5(...args: unknown): void;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | // fixToUnknown: true
> 2 | declare function waldo5(...args: any): void;
    |                                  ^^^ Unexpected any. Specify a different type.
```

#### Suggestions

##### Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
declare function waldo5(...args: unknown): void;
```

##### Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.

<!-- prettier-ignore -->
```ts
// fixToUnknown: true
declare function waldo5(...args: never): void;
```
