# no-floating-promises

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  Promise.resolve('value');
  Promise.resolve('value').then(() => {});
  Promise.resolve('value').catch();
  Promise.resolve('value').finally();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
> 3 |   Promise.resolve('value');
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  4 |   Promise.resolve('value').then(() => {});
  5 |   Promise.resolve('value').catch();
  6 |   Promise.resolve('value').finally();
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  void Promise.resolve('value');
  Promise.resolve('value').then(() => {});
  Promise.resolve('value').catch();
  Promise.resolve('value').finally();
}
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
  3 |   Promise.resolve('value');
> 4 |   Promise.resolve('value').then(() => {});
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  5 |   Promise.resolve('value').catch();
  6 |   Promise.resolve('value').finally();
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  Promise.resolve('value');
  void Promise.resolve('value').then(() => {});
  Promise.resolve('value').catch();
  Promise.resolve('value').finally();
}
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
  3 |   Promise.resolve('value');
  4 |   Promise.resolve('value').then(() => {});
> 5 |   Promise.resolve('value').catch();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  6 |   Promise.resolve('value').finally();
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  Promise.resolve('value');
  Promise.resolve('value').then(() => {});
  void Promise.resolve('value').catch();
  Promise.resolve('value').finally();
}
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
  3 |   Promise.resolve('value');
  4 |   Promise.resolve('value').then(() => {});
  5 |   Promise.resolve('value').catch();
> 6 |   Promise.resolve('value').finally();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  Promise.resolve('value');
  Promise.resolve('value').then(() => {});
  Promise.resolve('value').catch();
  void Promise.resolve('value').finally();
}
      
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

const doSomething = async (
  obj1: { a?: { b?: { c?: () => Promise<void> } } },
  obj2: { a?: { b?: { c: () => Promise<void> } } },
  obj3: { a?: { b: { c?: () => Promise<void> } } },
  obj4: { a: { b: { c?: () => Promise<void> } } },
  obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
  obj6?: { a: { b: { c?: () => Promise<void> } } },
  callback?: () => Promise<void>,
): Promise<void> => {
  obj1.a?.b?.c?.();
  obj2.a?.b?.c();
  obj3.a?.b.c?.();
  obj4.a.b.c?.();
  obj5.a?.().b?.c?.();
  obj6?.a.b.c?.();

  callback?.();
};

doSomething();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const doSomething = async (
   3 |   obj1: { a?: { b?: { c?: () => Promise<void> } } },
   4 |   obj2: { a?: { b?: { c: () => Promise<void> } } },
   5 |   obj3: { a?: { b: { c?: () => Promise<void> } } },
   6 |   obj4: { a: { b: { c?: () => Promise<void> } } },
   7 |   obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
   8 |   obj6?: { a: { b: { c?: () => Promise<void> } } },
   9 |   callback?: () => Promise<void>,
  10 | ): Promise<void> => {
> 11 |   obj1.a?.b?.c?.();
     |   ^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  12 |   obj2.a?.b?.c();
  13 |   obj3.a?.b.c?.();
  14 |   obj4.a.b.c?.();
  15 |   obj5.a?.().b?.c?.();
  16 |   obj6?.a.b.c?.();
  17 |
  18 |   callback?.();
  19 | };
  20 |
  21 | doSomething();
  22 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

const doSomething = async (
  obj1: { a?: { b?: { c?: () => Promise<void> } } },
  obj2: { a?: { b?: { c: () => Promise<void> } } },
  obj3: { a?: { b: { c?: () => Promise<void> } } },
  obj4: { a: { b: { c?: () => Promise<void> } } },
  obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
  obj6?: { a: { b: { c?: () => Promise<void> } } },
  callback?: () => Promise<void>,
): Promise<void> => {
  void obj1.a?.b?.c?.();
  obj2.a?.b?.c();
  obj3.a?.b.c?.();
  obj4.a.b.c?.();
  obj5.a?.().b?.c?.();
  obj6?.a.b.c?.();

  callback?.();
};

doSomething();
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const doSomething = async (
   3 |   obj1: { a?: { b?: { c?: () => Promise<void> } } },
   4 |   obj2: { a?: { b?: { c: () => Promise<void> } } },
   5 |   obj3: { a?: { b: { c?: () => Promise<void> } } },
   6 |   obj4: { a: { b: { c?: () => Promise<void> } } },
   7 |   obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
   8 |   obj6?: { a: { b: { c?: () => Promise<void> } } },
   9 |   callback?: () => Promise<void>,
  10 | ): Promise<void> => {
  11 |   obj1.a?.b?.c?.();
> 12 |   obj2.a?.b?.c();
     |   ^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  13 |   obj3.a?.b.c?.();
  14 |   obj4.a.b.c?.();
  15 |   obj5.a?.().b?.c?.();
  16 |   obj6?.a.b.c?.();
  17 |
  18 |   callback?.();
  19 | };
  20 |
  21 | doSomething();
  22 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

const doSomething = async (
  obj1: { a?: { b?: { c?: () => Promise<void> } } },
  obj2: { a?: { b?: { c: () => Promise<void> } } },
  obj3: { a?: { b: { c?: () => Promise<void> } } },
  obj4: { a: { b: { c?: () => Promise<void> } } },
  obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
  obj6?: { a: { b: { c?: () => Promise<void> } } },
  callback?: () => Promise<void>,
): Promise<void> => {
  obj1.a?.b?.c?.();
  void obj2.a?.b?.c();
  obj3.a?.b.c?.();
  obj4.a.b.c?.();
  obj5.a?.().b?.c?.();
  obj6?.a.b.c?.();

  callback?.();
};

doSomething();
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const doSomething = async (
   3 |   obj1: { a?: { b?: { c?: () => Promise<void> } } },
   4 |   obj2: { a?: { b?: { c: () => Promise<void> } } },
   5 |   obj3: { a?: { b: { c?: () => Promise<void> } } },
   6 |   obj4: { a: { b: { c?: () => Promise<void> } } },
   7 |   obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
   8 |   obj6?: { a: { b: { c?: () => Promise<void> } } },
   9 |   callback?: () => Promise<void>,
  10 | ): Promise<void> => {
  11 |   obj1.a?.b?.c?.();
  12 |   obj2.a?.b?.c();
> 13 |   obj3.a?.b.c?.();
     |   ^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  14 |   obj4.a.b.c?.();
  15 |   obj5.a?.().b?.c?.();
  16 |   obj6?.a.b.c?.();
  17 |
  18 |   callback?.();
  19 | };
  20 |
  21 | doSomething();
  22 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

const doSomething = async (
  obj1: { a?: { b?: { c?: () => Promise<void> } } },
  obj2: { a?: { b?: { c: () => Promise<void> } } },
  obj3: { a?: { b: { c?: () => Promise<void> } } },
  obj4: { a: { b: { c?: () => Promise<void> } } },
  obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
  obj6?: { a: { b: { c?: () => Promise<void> } } },
  callback?: () => Promise<void>,
): Promise<void> => {
  obj1.a?.b?.c?.();
  obj2.a?.b?.c();
  void obj3.a?.b.c?.();
  obj4.a.b.c?.();
  obj5.a?.().b?.c?.();
  obj6?.a.b.c?.();

  callback?.();
};

doSomething();
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const doSomething = async (
   3 |   obj1: { a?: { b?: { c?: () => Promise<void> } } },
   4 |   obj2: { a?: { b?: { c: () => Promise<void> } } },
   5 |   obj3: { a?: { b: { c?: () => Promise<void> } } },
   6 |   obj4: { a: { b: { c?: () => Promise<void> } } },
   7 |   obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
   8 |   obj6?: { a: { b: { c?: () => Promise<void> } } },
   9 |   callback?: () => Promise<void>,
  10 | ): Promise<void> => {
  11 |   obj1.a?.b?.c?.();
  12 |   obj2.a?.b?.c();
  13 |   obj3.a?.b.c?.();
> 14 |   obj4.a.b.c?.();
     |   ^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  15 |   obj5.a?.().b?.c?.();
  16 |   obj6?.a.b.c?.();
  17 |
  18 |   callback?.();
  19 | };
  20 |
  21 | doSomething();
  22 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

const doSomething = async (
  obj1: { a?: { b?: { c?: () => Promise<void> } } },
  obj2: { a?: { b?: { c: () => Promise<void> } } },
  obj3: { a?: { b: { c?: () => Promise<void> } } },
  obj4: { a: { b: { c?: () => Promise<void> } } },
  obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
  obj6?: { a: { b: { c?: () => Promise<void> } } },
  callback?: () => Promise<void>,
): Promise<void> => {
  obj1.a?.b?.c?.();
  obj2.a?.b?.c();
  obj3.a?.b.c?.();
  void obj4.a.b.c?.();
  obj5.a?.().b?.c?.();
  obj6?.a.b.c?.();

  callback?.();
};

doSomething();
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const doSomething = async (
   3 |   obj1: { a?: { b?: { c?: () => Promise<void> } } },
   4 |   obj2: { a?: { b?: { c: () => Promise<void> } } },
   5 |   obj3: { a?: { b: { c?: () => Promise<void> } } },
   6 |   obj4: { a: { b: { c?: () => Promise<void> } } },
   7 |   obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
   8 |   obj6?: { a: { b: { c?: () => Promise<void> } } },
   9 |   callback?: () => Promise<void>,
  10 | ): Promise<void> => {
  11 |   obj1.a?.b?.c?.();
  12 |   obj2.a?.b?.c();
  13 |   obj3.a?.b.c?.();
  14 |   obj4.a.b.c?.();
> 15 |   obj5.a?.().b?.c?.();
     |   ^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  16 |   obj6?.a.b.c?.();
  17 |
  18 |   callback?.();
  19 | };
  20 |
  21 | doSomething();
  22 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

const doSomething = async (
  obj1: { a?: { b?: { c?: () => Promise<void> } } },
  obj2: { a?: { b?: { c: () => Promise<void> } } },
  obj3: { a?: { b: { c?: () => Promise<void> } } },
  obj4: { a: { b: { c?: () => Promise<void> } } },
  obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
  obj6?: { a: { b: { c?: () => Promise<void> } } },
  callback?: () => Promise<void>,
): Promise<void> => {
  obj1.a?.b?.c?.();
  obj2.a?.b?.c();
  obj3.a?.b.c?.();
  obj4.a.b.c?.();
  void obj5.a?.().b?.c?.();
  obj6?.a.b.c?.();

  callback?.();
};

doSomething();
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const doSomething = async (
   3 |   obj1: { a?: { b?: { c?: () => Promise<void> } } },
   4 |   obj2: { a?: { b?: { c: () => Promise<void> } } },
   5 |   obj3: { a?: { b: { c?: () => Promise<void> } } },
   6 |   obj4: { a: { b: { c?: () => Promise<void> } } },
   7 |   obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
   8 |   obj6?: { a: { b: { c?: () => Promise<void> } } },
   9 |   callback?: () => Promise<void>,
  10 | ): Promise<void> => {
  11 |   obj1.a?.b?.c?.();
  12 |   obj2.a?.b?.c();
  13 |   obj3.a?.b.c?.();
  14 |   obj4.a.b.c?.();
  15 |   obj5.a?.().b?.c?.();
> 16 |   obj6?.a.b.c?.();
     |   ^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  17 |
  18 |   callback?.();
  19 | };
  20 |
  21 | doSomething();
  22 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

const doSomething = async (
  obj1: { a?: { b?: { c?: () => Promise<void> } } },
  obj2: { a?: { b?: { c: () => Promise<void> } } },
  obj3: { a?: { b: { c?: () => Promise<void> } } },
  obj4: { a: { b: { c?: () => Promise<void> } } },
  obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
  obj6?: { a: { b: { c?: () => Promise<void> } } },
  callback?: () => Promise<void>,
): Promise<void> => {
  obj1.a?.b?.c?.();
  obj2.a?.b?.c();
  obj3.a?.b.c?.();
  obj4.a.b.c?.();
  obj5.a?.().b?.c?.();
  void obj6?.a.b.c?.();

  callback?.();
};

doSomething();
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const doSomething = async (
   3 |   obj1: { a?: { b?: { c?: () => Promise<void> } } },
   4 |   obj2: { a?: { b?: { c: () => Promise<void> } } },
   5 |   obj3: { a?: { b: { c?: () => Promise<void> } } },
   6 |   obj4: { a: { b: { c?: () => Promise<void> } } },
   7 |   obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
   8 |   obj6?: { a: { b: { c?: () => Promise<void> } } },
   9 |   callback?: () => Promise<void>,
  10 | ): Promise<void> => {
  11 |   obj1.a?.b?.c?.();
  12 |   obj2.a?.b?.c();
  13 |   obj3.a?.b.c?.();
  14 |   obj4.a.b.c?.();
  15 |   obj5.a?.().b?.c?.();
  16 |   obj6?.a.b.c?.();
  17 |
> 18 |   callback?.();
     |   ^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  19 | };
  20 |
  21 | doSomething();
  22 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

const doSomething = async (
  obj1: { a?: { b?: { c?: () => Promise<void> } } },
  obj2: { a?: { b?: { c: () => Promise<void> } } },
  obj3: { a?: { b: { c?: () => Promise<void> } } },
  obj4: { a: { b: { c?: () => Promise<void> } } },
  obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
  obj6?: { a: { b: { c?: () => Promise<void> } } },
  callback?: () => Promise<void>,
): Promise<void> => {
  obj1.a?.b?.c?.();
  obj2.a?.b?.c();
  obj3.a?.b.c?.();
  obj4.a.b.c?.();
  obj5.a?.().b?.c?.();
  obj6?.a.b.c?.();

  void callback?.();
};

doSomething();
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const doSomething = async (
   3 |   obj1: { a?: { b?: { c?: () => Promise<void> } } },
   4 |   obj2: { a?: { b?: { c: () => Promise<void> } } },
   5 |   obj3: { a?: { b: { c?: () => Promise<void> } } },
   6 |   obj4: { a: { b: { c?: () => Promise<void> } } },
   7 |   obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
   8 |   obj6?: { a: { b: { c?: () => Promise<void> } } },
   9 |   callback?: () => Promise<void>,
  10 | ): Promise<void> => {
  11 |   obj1.a?.b?.c?.();
  12 |   obj2.a?.b?.c();
  13 |   obj3.a?.b.c?.();
  14 |   obj4.a.b.c?.();
  15 |   obj5.a?.().b?.c?.();
  16 |   obj6?.a.b.c?.();
  17 |
  18 |   callback?.();
  19 | };
  20 |
> 21 | doSomething();
     | ^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  22 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

const doSomething = async (
  obj1: { a?: { b?: { c?: () => Promise<void> } } },
  obj2: { a?: { b?: { c: () => Promise<void> } } },
  obj3: { a?: { b: { c?: () => Promise<void> } } },
  obj4: { a: { b: { c?: () => Promise<void> } } },
  obj5: { a?: () => { b?: { c?: () => Promise<void> } } },
  obj6?: { a: { b: { c?: () => Promise<void> } } },
  callback?: () => Promise<void>,
): Promise<void> => {
  obj1.a?.b?.c?.();
  obj2.a?.b?.c();
  obj3.a?.b.c?.();
  obj4.a.b.c?.();
  obj5.a?.().b?.c?.();
  obj6?.a.b.c?.();

  callback?.();
};

void doSomething();
      
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  Promise.resolve('value');
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
> 3 |   Promise.resolve('value');
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  4 | }
  5 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  void Promise.resolve('value');
}
      
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  Promise.reject(new Error('message'));
  Promise.reject(new Error('message')).then(() => {});
  Promise.reject(new Error('message')).catch();
  Promise.reject(new Error('message')).finally();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
> 3 |   Promise.reject(new Error('message'));
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  4 |   Promise.reject(new Error('message')).then(() => {});
  5 |   Promise.reject(new Error('message')).catch();
  6 |   Promise.reject(new Error('message')).finally();
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  void Promise.reject(new Error('message'));
  Promise.reject(new Error('message')).then(() => {});
  Promise.reject(new Error('message')).catch();
  Promise.reject(new Error('message')).finally();
}
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
  3 |   Promise.reject(new Error('message'));
> 4 |   Promise.reject(new Error('message')).then(() => {});
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  5 |   Promise.reject(new Error('message')).catch();
  6 |   Promise.reject(new Error('message')).finally();
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  Promise.reject(new Error('message'));
  void Promise.reject(new Error('message')).then(() => {});
  Promise.reject(new Error('message')).catch();
  Promise.reject(new Error('message')).finally();
}
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
  3 |   Promise.reject(new Error('message'));
  4 |   Promise.reject(new Error('message')).then(() => {});
> 5 |   Promise.reject(new Error('message')).catch();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  6 |   Promise.reject(new Error('message')).finally();
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  Promise.reject(new Error('message'));
  Promise.reject(new Error('message')).then(() => {});
  void Promise.reject(new Error('message')).catch();
  Promise.reject(new Error('message')).finally();
}
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
  3 |   Promise.reject(new Error('message'));
  4 |   Promise.reject(new Error('message')).then(() => {});
  5 |   Promise.reject(new Error('message')).catch();
> 6 |   Promise.reject(new Error('message')).finally();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  Promise.reject(new Error('message'));
  Promise.reject(new Error('message')).then(() => {});
  Promise.reject(new Error('message')).catch();
  void Promise.reject(new Error('message')).finally();
}
      
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  (async () => true)();
  (async () => true)().then(() => {});
  (async () => true)().catch();
  (async () => true)().finally();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
> 3 |   (async () => true)();
    |   ^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  4 |   (async () => true)().then(() => {});
  5 |   (async () => true)().catch();
  6 |   (async () => true)().finally();
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  void (async () => true)();
  (async () => true)().then(() => {});
  (async () => true)().catch();
  (async () => true)().finally();
}
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
  3 |   (async () => true)();
> 4 |   (async () => true)().then(() => {});
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  5 |   (async () => true)().catch();
  6 |   (async () => true)().finally();
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  (async () => true)();
  void (async () => true)().then(() => {});
  (async () => true)().catch();
  (async () => true)().finally();
}
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
  3 |   (async () => true)();
  4 |   (async () => true)().then(() => {});
> 5 |   (async () => true)().catch();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  6 |   (async () => true)().finally();
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  (async () => true)();
  (async () => true)().then(() => {});
  void (async () => true)().catch();
  (async () => true)().finally();
}
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
  3 |   (async () => true)();
  4 |   (async () => true)().then(() => {});
  5 |   (async () => true)().catch();
> 6 |   (async () => true)().finally();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  (async () => true)();
  (async () => true)().then(() => {});
  (async () => true)().catch();
  void (async () => true)().finally();
}
      
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  async function returnsPromise() {}

  returnsPromise();
  returnsPromise().then(() => {});
  returnsPromise().catch();
  returnsPromise().finally();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   async function returnsPromise() {}
   4 |
>  5 |   returnsPromise();
     |   ^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
   6 |   returnsPromise().then(() => {});
   7 |   returnsPromise().catch();
   8 |   returnsPromise().finally();
   9 | }
  10 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  async function returnsPromise() {}

  void returnsPromise();
  returnsPromise().then(() => {});
  returnsPromise().catch();
  returnsPromise().finally();
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   async function returnsPromise() {}
   4 |
   5 |   returnsPromise();
>  6 |   returnsPromise().then(() => {});
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
   7 |   returnsPromise().catch();
   8 |   returnsPromise().finally();
   9 | }
  10 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  async function returnsPromise() {}

  returnsPromise();
  void returnsPromise().then(() => {});
  returnsPromise().catch();
  returnsPromise().finally();
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   async function returnsPromise() {}
   4 |
   5 |   returnsPromise();
   6 |   returnsPromise().then(() => {});
>  7 |   returnsPromise().catch();
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
   8 |   returnsPromise().finally();
   9 | }
  10 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  async function returnsPromise() {}

  returnsPromise();
  returnsPromise().then(() => {});
  void returnsPromise().catch();
  returnsPromise().finally();
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   async function returnsPromise() {}
   4 |
   5 |   returnsPromise();
   6 |   returnsPromise().then(() => {});
   7 |   returnsPromise().catch();
>  8 |   returnsPromise().finally();
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
   9 | }
  10 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  async function returnsPromise() {}

  returnsPromise();
  returnsPromise().then(() => {});
  returnsPromise().catch();
  void returnsPromise().finally();
}
      
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  Math.random() > 0.5 ? Promise.resolve() : null;
  Math.random() > 0.5 ? null : Promise.resolve();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
> 3 |   Math.random() > 0.5 ? Promise.resolve() : null;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  4 |   Math.random() > 0.5 ? null : Promise.resolve();
  5 | }
  6 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  void (Math.random() > 0.5 ? Promise.resolve() : null);
  Math.random() > 0.5 ? null : Promise.resolve();
}
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
  3 |   Math.random() > 0.5 ? Promise.resolve() : null;
> 4 |   Math.random() > 0.5 ? null : Promise.resolve();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  5 | }
  6 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  Math.random() > 0.5 ? Promise.resolve() : null;
  void (Math.random() > 0.5 ? null : Promise.resolve());
}
      
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  Promise.resolve(), 123;
  123, Promise.resolve();
  123, Promise.resolve(), 123;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
> 3 |   Promise.resolve(), 123;
    |   ^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  4 |   123, Promise.resolve();
  5 |   123, Promise.resolve(), 123;
  6 | }
  7 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  void (Promise.resolve(), 123);
  123, Promise.resolve();
  123, Promise.resolve(), 123;
}
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
  3 |   Promise.resolve(), 123;
> 4 |   123, Promise.resolve();
    |   ^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  5 |   123, Promise.resolve(), 123;
  6 | }
  7 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  Promise.resolve(), 123;
  void (123, Promise.resolve());
  123, Promise.resolve(), 123;
}
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
  3 |   Promise.resolve(), 123;
  4 |   123, Promise.resolve();
> 5 |   123, Promise.resolve(), 123;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  6 | }
  7 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  Promise.resolve(), 123;
  123, Promise.resolve();
  void (123, Promise.resolve(), 123);
}
      
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  void Promise.resolve();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
> 3 |   void Promise.resolve();
    |   ^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, or end with a call to .then with a rejection handler.
  4 | }
  5 |       
```

#### Suggestions

##### Add await operator.

<!-- prettier-ignore -->
```ts

async function test() {
  await Promise.resolve();
}
      
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  const promise = new Promise((resolve, reject) => resolve('value'));
  promise;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
  3 |   const promise = new Promise((resolve, reject) => resolve('value'));
> 4 |   promise;
    |   ^^^^^^^^ Promises must be awaited, end with a call to .catch, or end with a call to .then with a rejection handler.
  5 | }
  6 |       
```

#### Suggestions

##### Add await operator.

<!-- prettier-ignore -->
```ts

async function test() {
  const promise = new Promise((resolve, reject) => resolve('value'));
  await promise;
}
      
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

async function returnsPromise() {
  return 'value';
}
void returnsPromise();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function returnsPromise() {
  3 |   return 'value';
  4 | }
> 5 | void returnsPromise();
    | ^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, or end with a call to .then with a rejection handler.
  6 |       
```

#### Suggestions

##### Add await operator.

<!-- prettier-ignore -->
```ts

async function returnsPromise() {
  return 'value';
}
await returnsPromise();
      
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

async function returnsPromise() {
  return 'value';
}
void /* ... */ returnsPromise();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function returnsPromise() {
  3 |   return 'value';
  4 | }
> 5 | void /* ... */ returnsPromise();
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, or end with a call to .then with a rejection handler.
  6 |       
```

#### Suggestions

##### Add await operator.

<!-- prettier-ignore -->
```ts

async function returnsPromise() {
  return 'value';
}
await /* ... */ returnsPromise();
      
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

async function returnsPromise() {
  return 'value';
}
1, returnsPromise();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function returnsPromise() {
  3 |   return 'value';
  4 | }
> 5 | 1, returnsPromise();
    | ^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, or end with a call to .then with a rejection handler.
  6 |       
```

#### Suggestions

##### Add await operator.

<!-- prettier-ignore -->
```ts

async function returnsPromise() {
  return 'value';
}
await (1, returnsPromise());
      
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

async function returnsPromise() {
  return 'value';
}
bool ? returnsPromise() : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function returnsPromise() {
  3 |   return 'value';
  4 | }
> 5 | bool ? returnsPromise() : null;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, or end with a call to .then with a rejection handler.
  6 |       
```

#### Suggestions

##### Add await operator.

<!-- prettier-ignore -->
```ts

async function returnsPromise() {
  return 'value';
}
await (bool ? returnsPromise() : null);
      
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  const obj = { foo: Promise.resolve() };
  obj.foo;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
  3 |   const obj = { foo: Promise.resolve() };
> 4 |   obj.foo;
    |   ^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  5 | }
  6 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  const obj = { foo: Promise.resolve() };
  void obj.foo;
}
      
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  new Promise(resolve => resolve());
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
> 3 |   new Promise(resolve => resolve());
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  4 | }
  5 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  void new Promise(resolve => resolve());
}
      
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  const promiseValue: Promise<number>;

  promiseValue;
  promiseValue.then(() => {});
  promiseValue.catch();
  promiseValue.finally();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   const promiseValue: Promise<number>;
   4 |
>  5 |   promiseValue;
     |   ^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
   6 |   promiseValue.then(() => {});
   7 |   promiseValue.catch();
   8 |   promiseValue.finally();
   9 | }
  10 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  const promiseValue: Promise<number>;

  void promiseValue;
  promiseValue.then(() => {});
  promiseValue.catch();
  promiseValue.finally();
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   const promiseValue: Promise<number>;
   4 |
   5 |   promiseValue;
>  6 |   promiseValue.then(() => {});
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
   7 |   promiseValue.catch();
   8 |   promiseValue.finally();
   9 | }
  10 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  const promiseValue: Promise<number>;

  promiseValue;
  void promiseValue.then(() => {});
  promiseValue.catch();
  promiseValue.finally();
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   const promiseValue: Promise<number>;
   4 |
   5 |   promiseValue;
   6 |   promiseValue.then(() => {});
>  7 |   promiseValue.catch();
     |   ^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
   8 |   promiseValue.finally();
   9 | }
  10 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  const promiseValue: Promise<number>;

  promiseValue;
  promiseValue.then(() => {});
  void promiseValue.catch();
  promiseValue.finally();
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   const promiseValue: Promise<number>;
   4 |
   5 |   promiseValue;
   6 |   promiseValue.then(() => {});
   7 |   promiseValue.catch();
>  8 |   promiseValue.finally();
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
   9 | }
  10 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  const promiseValue: Promise<number>;

  promiseValue;
  promiseValue.then(() => {});
  promiseValue.catch();
  void promiseValue.finally();
}
      
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  const promiseUnion: Promise<number> | number;

  promiseUnion;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function test() {
  3 |   const promiseUnion: Promise<number> | number;
  4 |
> 5 |   promiseUnion;
    |   ^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  6 | }
  7 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  const promiseUnion: Promise<number> | number;

  void promiseUnion;
}
      
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  const promiseIntersection: Promise<number> & number;

  promiseIntersection;
  promiseIntersection.then(() => {});
  promiseIntersection.catch();
  promiseIntersection.finally();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   const promiseIntersection: Promise<number> & number;
   4 |
>  5 |   promiseIntersection;
     |   ^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
   6 |   promiseIntersection.then(() => {});
   7 |   promiseIntersection.catch();
   8 |   promiseIntersection.finally();
   9 | }
  10 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  const promiseIntersection: Promise<number> & number;

  void promiseIntersection;
  promiseIntersection.then(() => {});
  promiseIntersection.catch();
  promiseIntersection.finally();
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   const promiseIntersection: Promise<number> & number;
   4 |
   5 |   promiseIntersection;
>  6 |   promiseIntersection.then(() => {});
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
   7 |   promiseIntersection.catch();
   8 |   promiseIntersection.finally();
   9 | }
  10 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  const promiseIntersection: Promise<number> & number;

  promiseIntersection;
  void promiseIntersection.then(() => {});
  promiseIntersection.catch();
  promiseIntersection.finally();
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   const promiseIntersection: Promise<number> & number;
   4 |
   5 |   promiseIntersection;
   6 |   promiseIntersection.then(() => {});
>  7 |   promiseIntersection.catch();
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
   8 |   promiseIntersection.finally();
   9 | }
  10 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  const promiseIntersection: Promise<number> & number;

  promiseIntersection;
  promiseIntersection.then(() => {});
  void promiseIntersection.catch();
  promiseIntersection.finally();
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   const promiseIntersection: Promise<number> & number;
   4 |
   5 |   promiseIntersection;
   6 |   promiseIntersection.then(() => {});
   7 |   promiseIntersection.catch();
>  8 |   promiseIntersection.finally();
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
   9 | }
  10 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  const promiseIntersection: Promise<number> & number;

  promiseIntersection;
  promiseIntersection.then(() => {});
  promiseIntersection.catch();
  void promiseIntersection.finally();
}
      
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  class CanThen extends Promise<number> {}
  const canThen: CanThen = Foo.resolve(2);

  canThen;
  canThen.then(() => {});
  canThen.catch();
  canThen.finally();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   class CanThen extends Promise<number> {}
   4 |   const canThen: CanThen = Foo.resolve(2);
   5 |
>  6 |   canThen;
     |   ^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
   7 |   canThen.then(() => {});
   8 |   canThen.catch();
   9 |   canThen.finally();
  10 | }
  11 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  class CanThen extends Promise<number> {}
  const canThen: CanThen = Foo.resolve(2);

  void canThen;
  canThen.then(() => {});
  canThen.catch();
  canThen.finally();
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   class CanThen extends Promise<number> {}
   4 |   const canThen: CanThen = Foo.resolve(2);
   5 |
   6 |   canThen;
>  7 |   canThen.then(() => {});
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
   8 |   canThen.catch();
   9 |   canThen.finally();
  10 | }
  11 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  class CanThen extends Promise<number> {}
  const canThen: CanThen = Foo.resolve(2);

  canThen;
  void canThen.then(() => {});
  canThen.catch();
  canThen.finally();
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   class CanThen extends Promise<number> {}
   4 |   const canThen: CanThen = Foo.resolve(2);
   5 |
   6 |   canThen;
   7 |   canThen.then(() => {});
>  8 |   canThen.catch();
     |   ^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
   9 |   canThen.finally();
  10 | }
  11 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  class CanThen extends Promise<number> {}
  const canThen: CanThen = Foo.resolve(2);

  canThen;
  canThen.then(() => {});
  void canThen.catch();
  canThen.finally();
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   class CanThen extends Promise<number> {}
   4 |   const canThen: CanThen = Foo.resolve(2);
   5 |
   6 |   canThen;
   7 |   canThen.then(() => {});
   8 |   canThen.catch();
>  9 |   canThen.finally();
     |   ^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  10 | }
  11 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  class CanThen extends Promise<number> {}
  const canThen: CanThen = Foo.resolve(2);

  canThen;
  canThen.then(() => {});
  canThen.catch();
  void canThen.finally();
}
      
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

async function test() {
  class CatchableThenable {
    then(callback: () => {}, callback: () => {}): CatchableThenable {
      return new CatchableThenable();
    }
  }
  const thenable = new CatchableThenable();

  thenable;
  thenable.then(() => {});
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   class CatchableThenable {
   4 |     then(callback: () => {}, callback: () => {}): CatchableThenable {
   5 |       return new CatchableThenable();
   6 |     }
   7 |   }
   8 |   const thenable = new CatchableThenable();
   9 |
> 10 |   thenable;
     |   ^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  11 |   thenable.then(() => {});
  12 | }
  13 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  class CatchableThenable {
    then(callback: () => {}, callback: () => {}): CatchableThenable {
      return new CatchableThenable();
    }
  }
  const thenable = new CatchableThenable();

  void thenable;
  thenable.then(() => {});
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | async function test() {
   3 |   class CatchableThenable {
   4 |     then(callback: () => {}, callback: () => {}): CatchableThenable {
   5 |       return new CatchableThenable();
   6 |     }
   7 |   }
   8 |   const thenable = new CatchableThenable();
   9 |
  10 |   thenable;
> 11 |   thenable.then(() => {});
     |   ^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  12 | }
  13 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function test() {
  class CatchableThenable {
    then(callback: () => {}, callback: () => {}): CatchableThenable {
      return new CatchableThenable();
    }
  }
  const thenable = new CatchableThenable();

  thenable;
  void thenable.then(() => {});
}
      
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/promise-polyfill/index.d.ts
// Type definitions for promise-polyfill 6.0
// Project: https://github.com/taylorhakes/promise-polyfill
// Definitions by: Steve Jenkins <https://github.com/skysteve>
//                 Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PromisePolyfillConstructor extends PromiseConstructor {
  _immediateFn?: (handler: (() => void) | string) => void;
}

declare const PromisePolyfill: PromisePolyfillConstructor;

async function test() {
  const promise = new PromisePolyfill(() => {});

  promise;
  promise.then(() => {});
  promise.catch();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/promise-polyfill/index.d.ts
   3 | // Type definitions for promise-polyfill 6.0
   4 | // Project: https://github.com/taylorhakes/promise-polyfill
   5 | // Definitions by: Steve Jenkins <https://github.com/skysteve>
   6 | //                 Daniel Cassidy <https://github.com/djcsdy>
   7 | // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
   8 |
   9 | interface PromisePolyfillConstructor extends PromiseConstructor {
  10 |   _immediateFn?: (handler: (() => void) | string) => void;
  11 | }
  12 |
  13 | declare const PromisePolyfill: PromisePolyfillConstructor;
  14 |
  15 | async function test() {
  16 |   const promise = new PromisePolyfill(() => {});
  17 |
> 18 |   promise;
     |   ^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  19 |   promise.then(() => {});
  20 |   promise.catch();
  21 | }
  22 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/promise-polyfill/index.d.ts
// Type definitions for promise-polyfill 6.0
// Project: https://github.com/taylorhakes/promise-polyfill
// Definitions by: Steve Jenkins <https://github.com/skysteve>
//                 Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PromisePolyfillConstructor extends PromiseConstructor {
  _immediateFn?: (handler: (() => void) | string) => void;
}

declare const PromisePolyfill: PromisePolyfillConstructor;

async function test() {
  const promise = new PromisePolyfill(() => {});

  void promise;
  promise.then(() => {});
  promise.catch();
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/promise-polyfill/index.d.ts
   3 | // Type definitions for promise-polyfill 6.0
   4 | // Project: https://github.com/taylorhakes/promise-polyfill
   5 | // Definitions by: Steve Jenkins <https://github.com/skysteve>
   6 | //                 Daniel Cassidy <https://github.com/djcsdy>
   7 | // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
   8 |
   9 | interface PromisePolyfillConstructor extends PromiseConstructor {
  10 |   _immediateFn?: (handler: (() => void) | string) => void;
  11 | }
  12 |
  13 | declare const PromisePolyfill: PromisePolyfillConstructor;
  14 |
  15 | async function test() {
  16 |   const promise = new PromisePolyfill(() => {});
  17 |
  18 |   promise;
> 19 |   promise.then(() => {});
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  20 |   promise.catch();
  21 | }
  22 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/promise-polyfill/index.d.ts
// Type definitions for promise-polyfill 6.0
// Project: https://github.com/taylorhakes/promise-polyfill
// Definitions by: Steve Jenkins <https://github.com/skysteve>
//                 Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PromisePolyfillConstructor extends PromiseConstructor {
  _immediateFn?: (handler: (() => void) | string) => void;
}

declare const PromisePolyfill: PromisePolyfillConstructor;

async function test() {
  const promise = new PromisePolyfill(() => {});

  promise;
  void promise.then(() => {});
  promise.catch();
}
      
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/promise-polyfill/index.d.ts
   3 | // Type definitions for promise-polyfill 6.0
   4 | // Project: https://github.com/taylorhakes/promise-polyfill
   5 | // Definitions by: Steve Jenkins <https://github.com/skysteve>
   6 | //                 Daniel Cassidy <https://github.com/djcsdy>
   7 | // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
   8 |
   9 | interface PromisePolyfillConstructor extends PromiseConstructor {
  10 |   _immediateFn?: (handler: (() => void) | string) => void;
  11 | }
  12 |
  13 | declare const PromisePolyfill: PromisePolyfillConstructor;
  14 |
  15 | async function test() {
  16 |   const promise = new PromisePolyfill(() => {});
  17 |
  18 |   promise;
  19 |   promise.then(() => {});
> 20 |   promise.catch();
     |   ^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  21 | }
  22 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/promise-polyfill/index.d.ts
// Type definitions for promise-polyfill 6.0
// Project: https://github.com/taylorhakes/promise-polyfill
// Definitions by: Steve Jenkins <https://github.com/skysteve>
//                 Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PromisePolyfillConstructor extends PromiseConstructor {
  _immediateFn?: (handler: (() => void) | string) => void;
}

declare const PromisePolyfill: PromisePolyfillConstructor;

async function test() {
  const promise = new PromisePolyfill(() => {});

  promise;
  promise.then(() => {});
  void promise.catch();
}
      
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

        (async () => {
          await something();
        })();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         (async () => {
    |         ^^^^^^^^^^^^^^
> 3 |           await something();
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |         })();
    | ^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  5 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

        void (async () => {
          await something();
        })();
      
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

        (async () => {
          something();
        })();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         (async () => {
    |         ^^^^^^^^^^^^^^
> 3 |           something();
    | ^^^^^^^^^^^^^^^^^^^^^^
> 4 |         })();
    | ^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  5 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

        void (async () => {
          something();
        })();
      
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
(async function foo() {})();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (async function foo() {})();
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts
void (async function foo() {})();
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

        function foo() {
          (async function bar() {})();
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function foo() {
> 3 |           (async function bar() {})();
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  4 |         }
  5 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

        function foo() {
          void (async function bar() {})();
        }
      
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

        const foo = () =>
          new Promise(res => {
            (async function () {
              await res(1);
            })();
          });
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const foo = () =>
  3 |           new Promise(res => {
> 4 |             (async function () {
    |             ^^^^^^^^^^^^^^^^^^^^
> 5 |               await res(1);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 6 |             })();
    | ^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  7 |           });
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

        const foo = () =>
          new Promise(res => {
            void (async function () {
              await res(1);
            })();
          });
      
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

        (async function () {
          await res(1);
        })();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         (async function () {
    |         ^^^^^^^^^^^^^^^^^^^^
> 3 |           await res(1);
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 4 |         })();
    | ^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  5 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

        void (async function () {
          await res(1);
        })();
      
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

        (async function () {
          Promise.resolve();
        })();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         (async function () {
> 3 |           Promise.resolve();
    |           ^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  4 |         })();
  5 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

        (async function () {
          void Promise.resolve();
        })();
      
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

        (async function () {
          const promiseIntersection: Promise<number> & number;
          promiseIntersection;
          promiseIntersection.then(() => {});
          promiseIntersection.catch();
          promiseIntersection.finally();
        })();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         (async function () {
  3 |           const promiseIntersection: Promise<number> & number;
> 4 |           promiseIntersection;
    |           ^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  5 |           promiseIntersection.then(() => {});
  6 |           promiseIntersection.catch();
  7 |           promiseIntersection.finally();
  8 |         })();
  9 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

        (async function () {
          const promiseIntersection: Promise<number> & number;
          void promiseIntersection;
          promiseIntersection.then(() => {});
          promiseIntersection.catch();
          promiseIntersection.finally();
        })();
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         (async function () {
  3 |           const promiseIntersection: Promise<number> & number;
  4 |           promiseIntersection;
> 5 |           promiseIntersection.then(() => {});
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  6 |           promiseIntersection.catch();
  7 |           promiseIntersection.finally();
  8 |         })();
  9 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

        (async function () {
          const promiseIntersection: Promise<number> & number;
          promiseIntersection;
          void promiseIntersection.then(() => {});
          promiseIntersection.catch();
          promiseIntersection.finally();
        })();
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         (async function () {
  3 |           const promiseIntersection: Promise<number> & number;
  4 |           promiseIntersection;
  5 |           promiseIntersection.then(() => {});
> 6 |           promiseIntersection.catch();
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  7 |           promiseIntersection.finally();
  8 |         })();
  9 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

        (async function () {
          const promiseIntersection: Promise<number> & number;
          promiseIntersection;
          promiseIntersection.then(() => {});
          void promiseIntersection.catch();
          promiseIntersection.finally();
        })();
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         (async function () {
  3 |           const promiseIntersection: Promise<number> & number;
  4 |           promiseIntersection;
  5 |           promiseIntersection.then(() => {});
  6 |           promiseIntersection.catch();
> 7 |           promiseIntersection.finally();
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  8 |         })();
  9 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

        (async function () {
          const promiseIntersection: Promise<number> & number;
          promiseIntersection;
          promiseIntersection.then(() => {});
          promiseIntersection.catch();
          void promiseIntersection.finally();
        })();
      
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = async () => void 0;
  const condition = true;

  void condition || myPromise();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {
  3 |   const myPromise = async () => void 0;
  4 |   const condition = true;
  5 |
> 6 |   void condition || myPromise();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = async () => void 0;
  const condition = true;

  void (void condition || myPromise());
}
      
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = async () => void 0;
  const condition = true;

  (await condition) && myPromise();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {
  3 |   const myPromise = async () => void 0;
  4 |   const condition = true;
  5 |
> 6 |   (await condition) && myPromise();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, or end with a call to .then with a rejection handler.
  7 | }
  8 |       
```

#### Suggestions

##### Add await operator.

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = async () => void 0;
  const condition = true;

  await ((await condition) && myPromise());
}
      
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = async () => void 0;
  const condition = true;

  condition && myPromise();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {
  3 |   const myPromise = async () => void 0;
  4 |   const condition = true;
  5 |
> 6 |   condition && myPromise();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = async () => void 0;
  const condition = true;

  void (condition && myPromise());
}
      
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = async () => void 0;
  const condition = false;

  condition || myPromise();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {
  3 |   const myPromise = async () => void 0;
  4 |   const condition = false;
  5 |
> 6 |   condition || myPromise();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = async () => void 0;
  const condition = false;

  void (condition || myPromise());
}
      
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = async () => void 0;
  const condition = null;

  condition ?? myPromise();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {
  3 |   const myPromise = async () => void 0;
  4 |   const condition = null;
  5 |
> 6 |   condition ?? myPromise();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = async () => void 0;
  const condition = null;

  void (condition ?? myPromise());
}
      
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = Promise.resolve(true);
  let condition = true;
  condition && myPromise;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {
  3 |   const myPromise = Promise.resolve(true);
  4 |   let condition = true;
> 5 |   condition && myPromise;
    |   ^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, or end with a call to .then with a rejection handler.
  6 | }
  7 |       
```

#### Suggestions

##### Add await operator.

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = Promise.resolve(true);
  let condition = true;
  await (condition && myPromise);
}
      
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = Promise.resolve(true);
  let condition = false;
  condition || myPromise;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {
  3 |   const myPromise = Promise.resolve(true);
  4 |   let condition = false;
> 5 |   condition || myPromise;
    |   ^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, or end with a call to .then with a rejection handler.
  6 | }
  7 |       
```

#### Suggestions

##### Add await operator.

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = Promise.resolve(true);
  let condition = false;
  await (condition || myPromise);
}
      
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = Promise.resolve(true);
  let condition = null;
  condition ?? myPromise;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {
  3 |   const myPromise = Promise.resolve(true);
  4 |   let condition = null;
> 5 |   condition ?? myPromise;
    |   ^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, or end with a call to .then with a rejection handler.
  6 | }
  7 |       
```

#### Suggestions

##### Add await operator.

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = Promise.resolve(true);
  let condition = null;
  await (condition ?? myPromise);
}
      
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = async () => void 0;
  const condition = false;

  condition || condition || myPromise();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | async function foo() {
  3 |   const myPromise = async () => void 0;
  4 |   const condition = false;
  5 |
> 6 |   condition || condition || myPromise();
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator.
  7 | }
  8 |       
```

#### Suggestions

##### Add void operator to ignore.

<!-- prettier-ignore -->
```ts

async function foo() {
  const myPromise = async () => void 0;
  const condition = false;

  void (condition || condition || myPromise());
}
      
```
