# return-await

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

        async function test() {
          return await 1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function test() {
          return 1;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         async function test() {
> 3 |           return await 1;
    |                  ^^^^^^^ Returning an awaited value that is not a promise is not allowed.
  4 |         }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

        async function test() {
          const foo = 1;
          return await { foo };
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function test() {
          const foo = 1;
          return { foo };
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         async function test() {
  3 |           const foo = 1;
> 4 |           return await { foo };
    |                  ^^^^^^^^^^^^^ Returning an awaited value that is not a promise is not allowed.
  5 |         }
  6 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

        async function test() {
          const foo = 1;
          return await foo;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function test() {
          const foo = 1;
          return foo;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         async function test() {
  3 |           const foo = 1;
> 4 |           return await foo;
    |                  ^^^^^^^^^ Returning an awaited value that is not a promise is not allowed.
  5 |         }
  6 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
const test = async () => await 1;
```

### Fix Output

<!-- prettier-ignore -->
```ts
const test = async () => 1;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const test = async () => await 1;
    |                          ^^^^^^^ Returning an awaited value that is not a promise is not allowed.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
const test = async () => await /* comment */ 1;
```

### Fix Output

<!-- prettier-ignore -->
```ts
const test = async () => /* comment */ 1;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const test = async () => await /* comment */ 1;
    |                          ^^^^^^^^^^^^^^^^^^^^^ Returning an awaited value that is not a promise is not allowed.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

const fn = (): any => null;
async function test() {
  return await fn();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const fn = (): any => null;
  3 | async function test() {
> 4 |   return await fn();
    |          ^^^^^^^^^^ Returning an awaited value that is not a promise is not allowed.
  5 | }
  6 |       
```

#### Suggestions

##### Returning an awaited value that is not a promise is not allowed.

<!-- prettier-ignore -->
```ts

const fn = (): any => null;
async function test() {
  return fn();
}
      
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

const fn = (): unknown => null;
async function test() {
  return await fn();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const fn = (): unknown => null;
  3 | async function test() {
> 4 |   return await fn();
    |          ^^^^^^^^^^ Returning an awaited value that is not a promise is not allowed.
  5 | }
  6 |       
```

#### Suggestions

##### Returning an awaited value that is not a promise is not allowed.

<!-- prettier-ignore -->
```ts

const fn = (): unknown => null;
async function test() {
  return fn();
}
      
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
const test = async () => await Promise.resolve(1);
```

### Fix Output

<!-- prettier-ignore -->
```ts
const test = async () => Promise.resolve(1);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const test = async () => await Promise.resolve(1);
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^ Returning an awaited promise is not allowed in this context.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        async function test() {
          try {
            return Promise.resolve(1);
          } catch (e) {
            return Promise.resolve(2);
          } finally {
            console.log('cleanup');
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function test() {
          try {
            return await Promise.resolve(1);
          } catch (e) {
            return await Promise.resolve(2);
          } finally {
            console.log('cleanup');
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         async function test() {
   3 |           try {
>  4 |             return Promise.resolve(1);
     |                    ^^^^^^^^^^^^^^^^^^ Returning an awaited promise is required in this context.
   5 |           } catch (e) {
   6 |             return Promise.resolve(2);
   7 |           } finally {
   8 |             console.log('cleanup');
   9 |           }
  10 |         }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         async function test() {
   3 |           try {
   4 |             return Promise.resolve(1);
   5 |           } catch (e) {
>  6 |             return Promise.resolve(2);
     |                    ^^^^^^^^^^^^^^^^^^ Returning an awaited promise is required in this context.
   7 |           } finally {
   8 |             console.log('cleanup');
   9 |           }
  10 |         }
  11 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

        async function test() {
          return await Promise.resolve(1);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function test() {
          return Promise.resolve(1);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         async function test() {
> 3 |           return await Promise.resolve(1);
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^ Returning an awaited promise is not allowed in this context.
  4 |         }
  5 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

        async function test() {
          return await 1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function test() {
          return 1;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         async function test() {
> 3 |           return await 1;
    |                  ^^^^^^^ Returning an awaited value that is not a promise is not allowed.
  4 |         }
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
const test = async () => await 1;
```

### Fix Output

<!-- prettier-ignore -->
```ts
const test = async () => 1;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const test = async () => await 1;
    |                          ^^^^^^^ Returning an awaited value that is not a promise is not allowed.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
const test = async () => await Promise.resolve(1);
```

### Fix Output

<!-- prettier-ignore -->
```ts
const test = async () => Promise.resolve(1);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const test = async () => await Promise.resolve(1);
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^ Returning an awaited promise is not allowed in this context.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

        async function test() {
          try {
            return Promise.resolve(1);
          } catch (e) {
            return Promise.resolve(2);
          } finally {
            console.log('cleanup');
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function test() {
          try {
            return await Promise.resolve(1);
          } catch (e) {
            return await Promise.resolve(2);
          } finally {
            console.log('cleanup');
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         async function test() {
   3 |           try {
>  4 |             return Promise.resolve(1);
     |                    ^^^^^^^^^^^^^^^^^^ Returning an awaited promise is required in this context.
   5 |           } catch (e) {
   6 |             return Promise.resolve(2);
   7 |           } finally {
   8 |             console.log('cleanup');
   9 |           }
  10 |         }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         async function test() {
   3 |           try {
   4 |             return Promise.resolve(1);
   5 |           } catch (e) {
>  6 |             return Promise.resolve(2);
     |                    ^^^^^^^^^^^^^^^^^^ Returning an awaited promise is required in this context.
   7 |           } finally {
   8 |             console.log('cleanup');
   9 |           }
  10 |         }
  11 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

        async function test() {
          return await Promise.resolve(1);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function test() {
          return Promise.resolve(1);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         async function test() {
> 3 |           return await Promise.resolve(1);
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^ Returning an awaited promise is not allowed in this context.
  4 |         }
  5 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

        async function test() {
          return await 1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function test() {
          return 1;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         async function test() {
> 3 |           return await 1;
    |                  ^^^^^^^ Returning an awaited value that is not a promise is not allowed.
  4 |         }
  5 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

        async function test() {
          try {
            return await Promise.resolve(1);
          } catch (e) {
            return await Promise.resolve(2);
          } finally {
            console.log('cleanup');
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function test() {
          try {
            return Promise.resolve(1);
          } catch (e) {
            return Promise.resolve(2);
          } finally {
            console.log('cleanup');
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         async function test() {
   3 |           try {
>  4 |             return await Promise.resolve(1);
     |                    ^^^^^^^^^^^^^^^^^^^^^^^^ Returning an awaited promise is not allowed in this context.
   5 |           } catch (e) {
   6 |             return await Promise.resolve(2);
   7 |           } finally {
   8 |             console.log('cleanup');
   9 |           }
  10 |         }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         async function test() {
   3 |           try {
   4 |             return await Promise.resolve(1);
   5 |           } catch (e) {
>  6 |             return await Promise.resolve(2);
     |                    ^^^^^^^^^^^^^^^^^^^^^^^^ Returning an awaited promise is not allowed in this context.
   7 |           } finally {
   8 |             console.log('cleanup');
   9 |           }
  10 |         }
  11 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

        async function test() {
          return await Promise.resolve(1);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function test() {
          return Promise.resolve(1);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         async function test() {
> 3 |           return await Promise.resolve(1);
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^ Returning an awaited promise is not allowed in this context.
  4 |         }
  5 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

        async function test() {
          return await 1;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function test() {
          return 1;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         async function test() {
> 3 |           return await 1;
    |                  ^^^^^^^ Returning an awaited value that is not a promise is not allowed.
  4 |         }
  5 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

        async function test() {
          try {
            return Promise.resolve(1);
          } catch (e) {
            return Promise.resolve(2);
          } finally {
            console.log('cleanup');
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function test() {
          try {
            return await Promise.resolve(1);
          } catch (e) {
            return await Promise.resolve(2);
          } finally {
            console.log('cleanup');
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         async function test() {
   3 |           try {
>  4 |             return Promise.resolve(1);
     |                    ^^^^^^^^^^^^^^^^^^ Returning an awaited promise is required in this context.
   5 |           } catch (e) {
   6 |             return Promise.resolve(2);
   7 |           } finally {
   8 |             console.log('cleanup');
   9 |           }
  10 |         }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         async function test() {
   3 |           try {
   4 |             return Promise.resolve(1);
   5 |           } catch (e) {
>  6 |             return Promise.resolve(2);
     |                    ^^^^^^^^^^^^^^^^^^ Returning an awaited promise is required in this context.
   7 |           } finally {
   8 |             console.log('cleanup');
   9 |           }
  10 |         }
  11 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

        async function test() {
          return Promise.resolve(1);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function test() {
          return await Promise.resolve(1);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         async function test() {
> 3 |           return Promise.resolve(1);
    |                  ^^^^^^^^^^^^^^^^^^ Returning an awaited promise is required in this context.
  4 |         }
  5 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
const test = async () => Promise.resolve(1);
```

### Fix Output

<!-- prettier-ignore -->
```ts
const test = async () => await Promise.resolve(1);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const test = async () => Promise.resolve(1);
    |                          ^^^^^^^^^^^^^^^^^^ Returning an awaited promise is required in this context.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

async function foo() {}
async function bar() {}
async function baz() {}
async function qux() {}
async function buzz() {
  return (await foo()) ? bar() : baz();
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

async function foo() {}
async function bar() {}
async function baz() {}
async function qux() {}
async function buzz() {
  return (await foo()) ? await bar() : await baz();
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {}
  3 | async function bar() {}
  4 | async function baz() {}
  5 | async function qux() {}
  6 | async function buzz() {
> 7 |   return (await foo()) ? bar() : baz();
    |                          ^^^^^ Returning an awaited promise is required in this context.
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {}
  3 | async function bar() {}
  4 | async function baz() {}
  5 | async function qux() {}
  6 | async function buzz() {
> 7 |   return (await foo()) ? bar() : baz();
    |                                  ^^^^^ Returning an awaited promise is required in this context.
  8 | }
  9 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

async function foo() {}
async function bar() {}
async function baz() {}
async function qux() {}
async function buzz() {
  return (await foo())
    ? (
      bar ? bar() : baz()
    ) : baz ? baz() : bar();
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

async function foo() {}
async function bar() {}
async function baz() {}
async function qux() {}
async function buzz() {
  return (await foo())
    ? (
      bar ? await bar() : await baz()
    ) : baz ? await baz() : await bar();
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function foo() {}
   3 | async function bar() {}
   4 | async function baz() {}
   5 | async function qux() {}
   6 | async function buzz() {
   7 |   return (await foo())
   8 |     ? (
>  9 |       bar ? bar() : baz()
     |             ^^^^^ Returning an awaited promise is required in this context.
  10 |     ) : baz ? baz() : bar();
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function foo() {}
   3 | async function bar() {}
   4 | async function baz() {}
   5 | async function qux() {}
   6 | async function buzz() {
   7 |   return (await foo())
   8 |     ? (
>  9 |       bar ? bar() : baz()
     |                     ^^^^^ Returning an awaited promise is required in this context.
  10 |     ) : baz ? baz() : bar();
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function foo() {}
   3 | async function bar() {}
   4 | async function baz() {}
   5 | async function qux() {}
   6 | async function buzz() {
   7 |   return (await foo())
   8 |     ? (
   9 |       bar ? bar() : baz()
> 10 |     ) : baz ? baz() : bar();
     |               ^^^^^ Returning an awaited promise is required in this context.
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function foo() {}
   3 | async function bar() {}
   4 | async function baz() {}
   5 | async function qux() {}
   6 | async function buzz() {
   7 |   return (await foo())
   8 |     ? (
   9 |       bar ? bar() : baz()
> 10 |     ) : baz ? baz() : bar();
     |                       ^^^^^ Returning an awaited promise is required in this context.
  11 | }
  12 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

async function foo() {}
async function bar() {}
async function buzz() {
  return (await foo()) ? await 1 : bar();
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

async function foo() {}
async function bar() {}
async function buzz() {
  return (await foo()) ? 1 : await bar();
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {}
  3 | async function bar() {}
  4 | async function buzz() {
> 5 |   return (await foo()) ? await 1 : bar();
    |                          ^^^^^^^ Returning an awaited value that is not a promise is not allowed.
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {}
  3 | async function bar() {}
  4 | async function buzz() {
> 5 |   return (await foo()) ? await 1 : bar();
    |                                    ^^^^^ Returning an awaited promise is required in this context.
  6 | }
  7 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

async function foo() {}
async function bar() {}
async function baz() {}
const buzz = async () => ((await foo()) ? bar() : baz());
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

async function foo() {}
async function bar() {}
async function baz() {}
const buzz = async () => ((await foo()) ? await bar() : await baz());
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {}
  3 | async function bar() {}
  4 | async function baz() {}
> 5 | const buzz = async () => ((await foo()) ? bar() : baz());
    |                                           ^^^^^ Returning an awaited promise is required in this context.
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {}
  3 | async function bar() {}
  4 | async function baz() {}
> 5 | const buzz = async () => ((await foo()) ? bar() : baz());
    |                                                   ^^^^^ Returning an awaited promise is required in this context.
  6 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

async function foo() {}
async function bar() {}
const buzz = async () => ((await foo()) ? await 1 : bar());
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

async function foo() {}
async function bar() {}
const buzz = async () => ((await foo()) ? 1 : await bar());
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {}
  3 | async function bar() {}
> 4 | const buzz = async () => ((await foo()) ? await 1 : bar());
    |                                           ^^^^^^^ Returning an awaited value that is not a promise is not allowed.
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {}
  3 | async function bar() {}
> 4 | const buzz = async () => ((await foo()) ? await 1 : bar());
    |                                                     ^^^^^ Returning an awaited promise is required in this context.
  5 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

async function test<T>(): Promise<T> {
  const res = await fetch('...');
  try {
    return res.json() as Promise<T>;
  } catch (err) {
    throw Error('Request Failed.');
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

async function test<T>(): Promise<T> {
  const res = await fetch('...');
  try {
    return await (res.json() as Promise<T>);
  } catch (err) {
    throw Error('Request Failed.');
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test<T>(): Promise<T> {
   3 |   const res = await fetch('...');
   4 |   try {
>  5 |     return res.json() as Promise<T>;
     |            ^^^^^^^^^^^^^^^^^^^^^^^^ Returning an awaited promise is required in this context.
   6 |   } catch (err) {
   7 |     throw Error('Request Failed.');
   8 |   }
   9 | }
  10 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

        async function test() {
          try {
            const callback1 = function () {};
            const callback2 = async function () {};
            function callback3() {}
            async function callback4() {}
            const callback5 = () => {};
            const callback6 = async () => {};
            return Promise.resolve('try');
          } finally {
            return Promise.resolve('finally');
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function test() {
          try {
            const callback1 = function () {};
            const callback2 = async function () {};
            function callback3() {}
            async function callback4() {}
            const callback5 = () => {};
            const callback6 = async () => {};
            return await Promise.resolve('try');
          } finally {
            return Promise.resolve('finally');
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         async function test() {
   3 |           try {
   4 |             const callback1 = function () {};
   5 |             const callback2 = async function () {};
   6 |             function callback3() {}
   7 |             async function callback4() {}
   8 |             const callback5 = () => {};
   9 |             const callback6 = async () => {};
> 10 |             return Promise.resolve('try');
     |                    ^^^^^^^^^^^^^^^^^^^^^^ Returning an awaited promise is required in this context.
  11 |           } finally {
  12 |             return Promise.resolve('finally');
  13 |           }
  14 |         }
  15 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

        async function bar() {}
        async function foo() {
          try {
            return undefined || bar();
          } catch {}
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function bar() {}
        async function foo() {
          try {
            return await (undefined || bar());
          } catch {}
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         async function bar() {}
  3 |         async function foo() {
  4 |           try {
> 5 |             return undefined || bar();
    |                    ^^^^^^^^^^^^^^^^^^ Returning an awaited promise is required in this context.
  6 |           } catch {}
  7 |         }
  8 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

        async function bar() {}
        async function foo() {
          try {
            return bar() || undefined || bar();
          } catch {}
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function bar() {}
        async function foo() {
          try {
            return await (bar() || undefined || bar());
          } catch {}
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         async function bar() {}
  3 |         async function foo() {
  4 |           try {
> 5 |             return bar() || undefined || bar();
    |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Returning an awaited promise is required in this context.
  6 |           } catch {}
  7 |         }
  8 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

        async function bar() {}
        async function func1() {
          try {
            return null ?? bar();
          } catch {}
        }
        async function func2() {
          try {
            return 1 && bar();
          } catch {}
        }
        const foo = {
          bar: async function () {},
        };
        async function func3() {
          try {
            return foo.bar();
          } catch {}
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        async function bar() {}
        async function func1() {
          try {
            return await (null ?? bar());
          } catch {}
        }
        async function func2() {
          try {
            return await (1 && bar());
          } catch {}
        }
        const foo = {
          bar: async function () {},
        };
        async function func3() {
          try {
            return await foo.bar();
          } catch {}
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         async function bar() {}
   3 |         async function func1() {
   4 |           try {
>  5 |             return null ?? bar();
     |                    ^^^^^^^^^^^^^ Returning an awaited promise is required in this context.
   6 |           } catch {}
   7 |         }
   8 |         async function func2() {
   9 |           try {
  10 |             return 1 && bar();
  11 |           } catch {}
  12 |         }
  13 |         const foo = {
  14 |           bar: async function () {},
  15 |         };
  16 |         async function func3() {
  17 |           try {
  18 |             return foo.bar();
  19 |           } catch {}
  20 |         }
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         async function bar() {}
   3 |         async function func1() {
   4 |           try {
   5 |             return null ?? bar();
   6 |           } catch {}
   7 |         }
   8 |         async function func2() {
   9 |           try {
> 10 |             return 1 && bar();
     |                    ^^^^^^^^^^ Returning an awaited promise is required in this context.
  11 |           } catch {}
  12 |         }
  13 |         const foo = {
  14 |           bar: async function () {},
  15 |         };
  16 |         async function func3() {
  17 |           try {
  18 |             return foo.bar();
  19 |           } catch {}
  20 |         }
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         async function bar() {}
   3 |         async function func1() {
   4 |           try {
   5 |             return null ?? bar();
   6 |           } catch {}
   7 |         }
   8 |         async function func2() {
   9 |           try {
  10 |             return 1 && bar();
  11 |           } catch {}
  12 |         }
  13 |         const foo = {
  14 |           bar: async function () {},
  15 |         };
  16 |         async function func3() {
  17 |           try {
> 18 |             return foo.bar();
     |                    ^^^^^^^^^ Returning an awaited promise is required in this context.
  19 |           } catch {}
  20 |         }
  21 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

        class X {
          async bar() {
            return;
          }
          async func2() {
            try {
              return this.bar();
            } catch {}
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class X {
          async bar() {
            return;
          }
          async func2() {
            try {
              return await this.bar();
            } catch {}
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class X {
   3 |           async bar() {
   4 |             return;
   5 |           }
   6 |           async func2() {
   7 |             try {
>  8 |               return this.bar();
     |                      ^^^^^^^^^^ Returning an awaited promise is required in this context.
   9 |             } catch {}
  10 |           }
  11 |         }
  12 |       
```
