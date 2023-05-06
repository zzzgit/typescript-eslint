# no-throw-literal

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
throw undefined;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw undefined;
    |       ^^^^^^^^^ Do not throw undefined.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
throw new String('');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw new String('');
    |       ^^^^^^^^^^^^^^ Expected an error object to be thrown.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
throw 'error';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw 'error';
    |       ^^^^^^^ Expected an error object to be thrown.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
throw 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw 0;
    |       ^ Expected an error object to be thrown.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
throw false;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw false;
    |       ^^^^^ Expected an error object to be thrown.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
throw null;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw null;
    |       ^^^^ Expected an error object to be thrown.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
throw {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw {};
    |       ^^ Expected an error object to be thrown.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
throw 'a' + 'b';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw 'a' + 'b';
    |       ^^^^^^^^^ Expected an error object to be thrown.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

const a = '';
throw a + 'b';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const a = '';
> 3 | throw a + 'b';
    |       ^^^^^^^ Expected an error object to be thrown.
  4 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
throw (foo = 'error');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw (foo = 'error');
    |        ^^^^^^^^^^^^^ Expected an error object to be thrown.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
throw (new Error(), 1, 2, 3);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw (new Error(), 1, 2, 3);
    |        ^^^^^^^^^^^^^^^^^^^^ Expected an error object to be thrown.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
throw 'literal' && 'not an Error';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw 'literal' && 'not an Error';
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected an error object to be thrown.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
throw 'literal' || new Error();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw 'literal' || new Error();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^ Expected an error object to be thrown.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
throw new Error() && 'literal';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw new Error() && 'literal';
    |       ^^^^^^^^^^^^^^^^^^^^^^^^ Expected an error object to be thrown.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
throw 'literal' ?? new Error();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw 'literal' ?? new Error();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^ Expected an error object to be thrown.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
throw foo ? 'not an Error' : 'literal';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw foo ? 'not an Error' : 'literal';
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected an error object to be thrown.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
throw foo ? new Error() : 'literal';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw foo ? new Error() : 'literal';
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected an error object to be thrown.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
throw foo ? 'literal' : new Error();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw foo ? 'literal' : new Error();
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected an error object to be thrown.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
throw `${err}`;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw `${err}`;
    |       ^^^^^^^^ Expected an error object to be thrown.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

const err = 'error';
throw err;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const err = 'error';
> 3 | throw err;
    |       ^^^ Expected an error object to be thrown.
  4 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

function foo(msg) {}
throw foo('error');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(msg) {}
> 3 | throw foo('error');
    |       ^^^^^^^^^^^^ Expected an error object to be thrown.
  4 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

const foo = {
  msg: 'error',
};
throw foo.msg;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = {
  3 |   msg: 'error',
  4 | };
> 5 | throw foo.msg;
    |       ^^^^^^^ Expected an error object to be thrown.
  6 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

const foo = {
  msg: undefined,
};
throw foo.msg;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = {
  3 |   msg: undefined,
  4 | };
> 5 | throw foo.msg;
    |       ^^^^^^^ Do not throw undefined.
  6 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

class CustomError {}
throw new CustomError();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class CustomError {}
> 3 | throw new CustomError();
    |       ^^^^^^^^^^^^^^^^^ Expected an error object to be thrown.
  4 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {}
class CustomError extends Foo {}
throw new CustomError();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {}
  3 | class CustomError extends Foo {}
> 4 | throw new CustomError();
    |       ^^^^^^^^^^^^^^^^^ Expected an error object to be thrown.
  5 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

const Error = null;
throw Error;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const Error = null;
> 3 | throw Error;
    |       ^^^^^ Expected an error object to be thrown.
  4 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

import { Error } from './class';
throw new Error();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import { Error } from './class';
> 3 | throw new Error();
    |       ^^^^^^^^^^^ Expected an error object to be thrown.
  4 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

class CustomError<T extends object> extends Foo {}
throw new CustomError();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class CustomError<T extends object> extends Foo {}
> 3 | throw new CustomError();
    |       ^^^^^^^^^^^^^^^^^ Expected an error object to be thrown.
  4 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

function foo<T>() {
  const res: T;
  throw res;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo<T>() {
  3 |   const res: T;
> 4 |   throw res;
    |         ^^^ Expected an error object to be thrown.
  5 | }
  6 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

function foo<T>(fn: () => Promise<T>) {
  const promise = fn();
  const res = promise.then(() => {}).catch(() => {});
  throw res;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo<T>(fn: () => Promise<T>) {
  3 |   const promise = fn();
  4 |   const res = promise.then(() => {}).catch(() => {});
> 5 |   throw res;
    |         ^^^ Expected an error object to be thrown.
  6 | }
  7 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  throw Object.assign({ foo: 'foo' }, { bar: 'bar' });
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   throw Object.assign({ foo: 'foo' }, { bar: 'bar' });
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected an error object to be thrown.
  4 | }
  5 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

const foo: Error | { bar: string } = bar();
function bar() {
  throw foo;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo: Error | { bar: string } = bar();
  3 | function bar() {
> 4 |   throw foo;
    |         ^^^ Expected an error object to be thrown.
  5 | }
  6 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

declare const foo: Error | string;
throw foo as string;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const foo: Error | string;
> 3 | throw foo as string;
    |       ^^^^^^^^^^^^^ Expected an error object to be thrown.
  4 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

function fun(value: any) {
  throw value;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function fun(value: any) {
> 3 |   throw value;
    |         ^^^^^ Expected an error object to be thrown.
  4 | }
  5 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

function fun(value: unknown) {
  throw value;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function fun(value: unknown) {
> 3 |   throw value;
    |         ^^^^^ Expected an error object to be thrown.
  4 | }
  5 |       
```
