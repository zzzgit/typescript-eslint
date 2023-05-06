# await-thenable

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  await 0;
  await 'value';

  await (Math.random() > 0.5 ? '' : 0);

  class NonPromise extends Array {}
  await new NonPromise();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
>  3 |   await 0;
     |   ^^^^^^^ Unexpected `await` of a non-Promise (non-"Thenable") value.
   4 |   await 'value';
   5 |
   6 |   await (Math.random() > 0.5 ? '' : 0);
   7 |
   8 |   class NonPromise extends Array {}
   9 |   await new NonPromise();
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   await 0;
>  4 |   await 'value';
     |   ^^^^^^^^^^^^^ Unexpected `await` of a non-Promise (non-"Thenable") value.
   5 |
   6 |   await (Math.random() > 0.5 ? '' : 0);
   7 |
   8 |   class NonPromise extends Array {}
   9 |   await new NonPromise();
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   await 0;
   4 |   await 'value';
   5 |
>  6 |   await (Math.random() > 0.5 ? '' : 0);
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unexpected `await` of a non-Promise (non-"Thenable") value.
   7 |
   8 |   class NonPromise extends Array {}
   9 |   await new NonPromise();
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   await 0;
   4 |   await 'value';
   5 |
   6 |   await (Math.random() > 0.5 ? '' : 0);
   7 |
   8 |   class NonPromise extends Array {}
>  9 |   await new NonPromise();
     |   ^^^^^^^^^^^^^^^^^^^^^^ Unexpected `await` of a non-Promise (non-"Thenable") value.
  10 | }
  11 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  class IncorrectThenable {
    then() {}
  }
  const thenable = new IncorrectThenable();

  await thenable;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   class IncorrectThenable {
   4 |     then() {}
   5 |   }
   6 |   const thenable = new IncorrectThenable();
   7 |
>  8 |   await thenable;
     |   ^^^^^^^^^^^^^^ Unexpected `await` of a non-Promise (non-"Thenable") value.
   9 | }
  10 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

const doSomething = async (
  obj1: { a?: { b?: { c?: () => void } } },
  obj2: { a?: { b?: { c: () => void } } },
  obj3: { a?: { b: { c?: () => void } } },
  obj4: { a: { b: { c?: () => void } } },
  obj5: { a?: () => { b?: { c?: () => void } } },
  obj6?: { a: { b: { c?: () => void } } },
  callback?: () => void,
): Promise<void> => {
  await obj1.a?.b?.c?.();
  await obj2.a?.b?.c();
  await obj3.a?.b.c?.();
  await obj4.a.b.c?.();
  await obj5.a?.().b?.c?.();
  await obj6?.a.b.c?.();

  await callback?.();
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const doSomething = async (
   3 |   obj1: { a?: { b?: { c?: () => void } } },
   4 |   obj2: { a?: { b?: { c: () => void } } },
   5 |   obj3: { a?: { b: { c?: () => void } } },
   6 |   obj4: { a: { b: { c?: () => void } } },
   7 |   obj5: { a?: () => { b?: { c?: () => void } } },
   8 |   obj6?: { a: { b: { c?: () => void } } },
   9 |   callback?: () => void,
  10 | ): Promise<void> => {
> 11 |   await obj1.a?.b?.c?.();
     |   ^^^^^^^^^^^^^^^^^^^^^^ Unexpected `await` of a non-Promise (non-"Thenable") value.
  12 |   await obj2.a?.b?.c();
  13 |   await obj3.a?.b.c?.();
  14 |   await obj4.a.b.c?.();
  15 |   await obj5.a?.().b?.c?.();
  16 |   await obj6?.a.b.c?.();
  17 |
  18 |   await callback?.();
  19 | };
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const doSomething = async (
   3 |   obj1: { a?: { b?: { c?: () => void } } },
   4 |   obj2: { a?: { b?: { c: () => void } } },
   5 |   obj3: { a?: { b: { c?: () => void } } },
   6 |   obj4: { a: { b: { c?: () => void } } },
   7 |   obj5: { a?: () => { b?: { c?: () => void } } },
   8 |   obj6?: { a: { b: { c?: () => void } } },
   9 |   callback?: () => void,
  10 | ): Promise<void> => {
  11 |   await obj1.a?.b?.c?.();
> 12 |   await obj2.a?.b?.c();
     |   ^^^^^^^^^^^^^^^^^^^^ Unexpected `await` of a non-Promise (non-"Thenable") value.
  13 |   await obj3.a?.b.c?.();
  14 |   await obj4.a.b.c?.();
  15 |   await obj5.a?.().b?.c?.();
  16 |   await obj6?.a.b.c?.();
  17 |
  18 |   await callback?.();
  19 | };
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const doSomething = async (
   3 |   obj1: { a?: { b?: { c?: () => void } } },
   4 |   obj2: { a?: { b?: { c: () => void } } },
   5 |   obj3: { a?: { b: { c?: () => void } } },
   6 |   obj4: { a: { b: { c?: () => void } } },
   7 |   obj5: { a?: () => { b?: { c?: () => void } } },
   8 |   obj6?: { a: { b: { c?: () => void } } },
   9 |   callback?: () => void,
  10 | ): Promise<void> => {
  11 |   await obj1.a?.b?.c?.();
  12 |   await obj2.a?.b?.c();
> 13 |   await obj3.a?.b.c?.();
     |   ^^^^^^^^^^^^^^^^^^^^^ Unexpected `await` of a non-Promise (non-"Thenable") value.
  14 |   await obj4.a.b.c?.();
  15 |   await obj5.a?.().b?.c?.();
  16 |   await obj6?.a.b.c?.();
  17 |
  18 |   await callback?.();
  19 | };
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const doSomething = async (
   3 |   obj1: { a?: { b?: { c?: () => void } } },
   4 |   obj2: { a?: { b?: { c: () => void } } },
   5 |   obj3: { a?: { b: { c?: () => void } } },
   6 |   obj4: { a: { b: { c?: () => void } } },
   7 |   obj5: { a?: () => { b?: { c?: () => void } } },
   8 |   obj6?: { a: { b: { c?: () => void } } },
   9 |   callback?: () => void,
  10 | ): Promise<void> => {
  11 |   await obj1.a?.b?.c?.();
  12 |   await obj2.a?.b?.c();
  13 |   await obj3.a?.b.c?.();
> 14 |   await obj4.a.b.c?.();
     |   ^^^^^^^^^^^^^^^^^^^^ Unexpected `await` of a non-Promise (non-"Thenable") value.
  15 |   await obj5.a?.().b?.c?.();
  16 |   await obj6?.a.b.c?.();
  17 |
  18 |   await callback?.();
  19 | };
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const doSomething = async (
   3 |   obj1: { a?: { b?: { c?: () => void } } },
   4 |   obj2: { a?: { b?: { c: () => void } } },
   5 |   obj3: { a?: { b: { c?: () => void } } },
   6 |   obj4: { a: { b: { c?: () => void } } },
   7 |   obj5: { a?: () => { b?: { c?: () => void } } },
   8 |   obj6?: { a: { b: { c?: () => void } } },
   9 |   callback?: () => void,
  10 | ): Promise<void> => {
  11 |   await obj1.a?.b?.c?.();
  12 |   await obj2.a?.b?.c();
  13 |   await obj3.a?.b.c?.();
  14 |   await obj4.a.b.c?.();
> 15 |   await obj5.a?.().b?.c?.();
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^ Unexpected `await` of a non-Promise (non-"Thenable") value.
  16 |   await obj6?.a.b.c?.();
  17 |
  18 |   await callback?.();
  19 | };
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const doSomething = async (
   3 |   obj1: { a?: { b?: { c?: () => void } } },
   4 |   obj2: { a?: { b?: { c: () => void } } },
   5 |   obj3: { a?: { b: { c?: () => void } } },
   6 |   obj4: { a: { b: { c?: () => void } } },
   7 |   obj5: { a?: () => { b?: { c?: () => void } } },
   8 |   obj6?: { a: { b: { c?: () => void } } },
   9 |   callback?: () => void,
  10 | ): Promise<void> => {
  11 |   await obj1.a?.b?.c?.();
  12 |   await obj2.a?.b?.c();
  13 |   await obj3.a?.b.c?.();
  14 |   await obj4.a.b.c?.();
  15 |   await obj5.a?.().b?.c?.();
> 16 |   await obj6?.a.b.c?.();
     |   ^^^^^^^^^^^^^^^^^^^^^ Unexpected `await` of a non-Promise (non-"Thenable") value.
  17 |
  18 |   await callback?.();
  19 | };
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const doSomething = async (
   3 |   obj1: { a?: { b?: { c?: () => void } } },
   4 |   obj2: { a?: { b?: { c: () => void } } },
   5 |   obj3: { a?: { b: { c?: () => void } } },
   6 |   obj4: { a: { b: { c?: () => void } } },
   7 |   obj5: { a?: () => { b?: { c?: () => void } } },
   8 |   obj6?: { a: { b: { c?: () => void } } },
   9 |   callback?: () => void,
  10 | ): Promise<void> => {
  11 |   await obj1.a?.b?.c?.();
  12 |   await obj2.a?.b?.c();
  13 |   await obj3.a?.b.c?.();
  14 |   await obj4.a.b.c?.();
  15 |   await obj5.a?.().b?.c?.();
  16 |   await obj6?.a.b.c?.();
  17 |
> 18 |   await callback?.();
     |   ^^^^^^^^^^^^^^^^^^ Unexpected `await` of a non-Promise (non-"Thenable") value.
  19 | };
  20 |       
```
