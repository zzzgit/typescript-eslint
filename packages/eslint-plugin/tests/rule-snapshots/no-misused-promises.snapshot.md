# no-misused-promises

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

if (Promise.resolve()) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | if (Promise.resolve()) {
    |     ^^^^^^^^^^^^^^^^^ Expected non-Promise value in a boolean conditional.
  3 | }
  4 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

if (Promise.resolve()) {
} else if (Promise.resolve()) {
} else {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | if (Promise.resolve()) {
    |     ^^^^^^^^^^^^^^^^^ Expected non-Promise value in a boolean conditional.
  3 | } else if (Promise.resolve()) {
  4 | } else {
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | if (Promise.resolve()) {
> 3 | } else if (Promise.resolve()) {
    |            ^^^^^^^^^^^^^^^^^ Expected non-Promise value in a boolean conditional.
  4 | } else {
  5 | }
  6 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
for (let i; Promise.resolve(); i++) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | for (let i; Promise.resolve(); i++) {}
    |             ^^^^^^^^^^^^^^^^^ Expected non-Promise value in a boolean conditional.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
do {} while (Promise.resolve());
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | do {} while (Promise.resolve());
    |              ^^^^^^^^^^^^^^^^^ Expected non-Promise value in a boolean conditional.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
while (Promise.resolve()) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | while (Promise.resolve()) {}
    |        ^^^^^^^^^^^^^^^^^ Expected non-Promise value in a boolean conditional.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
Promise.resolve() ? 123 : 456;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | Promise.resolve() ? 123 : 456;
    | ^^^^^^^^^^^^^^^^^ Expected non-Promise value in a boolean conditional.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

if (!Promise.resolve()) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | if (!Promise.resolve()) {
    |      ^^^^^^^^^^^^^^^^^ Expected non-Promise value in a boolean conditional.
  3 | }
  4 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
Promise.resolve() || false;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | Promise.resolve() || false;
    | ^^^^^^^^^^^^^^^^^ Expected non-Promise value in a boolean conditional.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

[Promise.resolve(), Promise.reject()].forEach(async val => {
  await val;
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | [Promise.resolve(), Promise.reject()].forEach(async val => {
    |                                               ^^^^^^^^^^^^^^
> 3 |   await val;
    | ^^^^^^^^^^^^
> 4 | });
    | ^^ Promise returned in function argument where a void return was expected.
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

new Promise(async (resolve, reject) => {
  await Promise.resolve();
  resolve();
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | new Promise(async (resolve, reject) => {
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   await Promise.resolve();
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |   resolve();
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^
> 5 | });
    | ^^ Promise returned in function argument where a void return was expected.
  6 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

const fnWithCallback = (arg: string, cb: (err: any, res: string) => void) => {
  cb(null, arg);
};

fnWithCallback('val', async (err, res) => {
  await res;
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const fnWithCallback = (arg: string, cb: (err: any, res: string) => void) => {
  3 |   cb(null, arg);
  4 | };
  5 |
> 6 | fnWithCallback('val', async (err, res) => {
    |                       ^^^^^^^^^^^^^^^^^^^^^
> 7 |   await res;
    | ^^^^^^^^^^^^
> 8 | });
    | ^^ Promise returned in function argument where a void return was expected.
  9 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

const fnWithCallback = (arg: string, cb: (err: any, res: string) => void) => {
  cb(null, arg);
};

fnWithCallback('val', (err, res) => Promise.resolve(res));
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const fnWithCallback = (arg: string, cb: (err: any, res: string) => void) => {
  3 |   cb(null, arg);
  4 | };
  5 |
> 6 | fnWithCallback('val', (err, res) => Promise.resolve(res));
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promise returned in function argument where a void return was expected.
  7 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

const fnWithCallback = (arg: string, cb: (err: any, res: string) => void) => {
  cb(null, arg);
};

fnWithCallback('val', (err, res) => {
  if (err) {
    return 'abc';
  } else {
    return Promise.resolve(res);
  }
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const fnWithCallback = (arg: string, cb: (err: any, res: string) => void) => {
   3 |   cb(null, arg);
   4 | };
   5 |
>  6 | fnWithCallback('val', (err, res) => {
     |                       ^^^^^^^^^^^^^^^
>  7 |   if (err) {
     | ^^^^^^^^^^^^
>  8 |     return 'abc';
     | ^^^^^^^^^^^^
>  9 |   } else {
     | ^^^^^^^^^^^^
> 10 |     return Promise.resolve(res);
     | ^^^^^^^^^^^^
> 11 |   }
     | ^^^^^^^^^^^^
> 12 | });
     | ^^ Promise returned in function argument where a void return was expected.
  13 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

const fnWithCallback:
  | ((arg: string, cb: (err: any, res: string) => void) => void)
  | null = (arg, cb) => {
  cb(null, arg);
};

fnWithCallback?.('val', (err, res) => Promise.resolve(res));
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const fnWithCallback:
  3 |   | ((arg: string, cb: (err: any, res: string) => void) => void)
  4 |   | null = (arg, cb) => {
  5 |   cb(null, arg);
  6 | };
  7 |
> 8 | fnWithCallback?.('val', (err, res) => Promise.resolve(res));
    |                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promise returned in function argument where a void return was expected.
  9 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

const fnWithCallback:
  | ((arg: string, cb: (err: any, res: string) => void) => void)
  | null = (arg, cb) => {
  cb(null, arg);
};

fnWithCallback('val', (err, res) => {
  if (err) {
    return 'abc';
  } else {
    return Promise.resolve(res);
  }
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const fnWithCallback:
   3 |   | ((arg: string, cb: (err: any, res: string) => void) => void)
   4 |   | null = (arg, cb) => {
   5 |   cb(null, arg);
   6 | };
   7 |
>  8 | fnWithCallback('val', (err, res) => {
     |                       ^^^^^^^^^^^^^^^
>  9 |   if (err) {
     | ^^^^^^^^^^^^
> 10 |     return 'abc';
     | ^^^^^^^^^^^^
> 11 |   } else {
     | ^^^^^^^^^^^^
> 12 |     return Promise.resolve(res);
     | ^^^^^^^^^^^^
> 13 |   }
     | ^^^^^^^^^^^^
> 14 | });
     | ^^ Promise returned in function argument where a void return was expected.
  15 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

function test(bool: boolean, p: Promise<void>) {
  if (bool || p) {
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test(bool: boolean, p: Promise<void>) {
> 3 |   if (bool || p) {
    |               ^ Expected non-Promise value in a boolean conditional.
  4 |   }
  5 | }
  6 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

function test(bool: boolean, p: Promise<void>) {
  if (bool && p) {
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test(bool: boolean, p: Promise<void>) {
> 3 |   if (bool && p) {
    |               ^ Expected non-Promise value in a boolean conditional.
  4 |   }
  5 | }
  6 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

function test(a: any, p: Promise<void>) {
  if (a ?? p) {
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test(a: any, p: Promise<void>) {
> 3 |   if (a ?? p) {
    |            ^ Expected non-Promise value in a boolean conditional.
  4 |   }
  5 | }
  6 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

function test(p: Promise<void> | undefined) {
  if (p ?? Promise.reject()) {
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test(p: Promise<void> | undefined) {
> 3 |   if (p ?? Promise.reject()) {
    |            ^^^^^^^^^^^^^^^^ Expected non-Promise value in a boolean conditional.
  4 |   }
  5 | }
  6 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

let f: () => void;
f = async () => {
  return 3;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let f: () => void;
> 3 | f = async () => {
    |     ^^^^^^^^^^^^^
> 4 |   return 3;
    | ^^^^^^^^^^^
> 5 | };
    | ^^ Promise-returning function provided to variable where a void return was expected.
  6 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

let f: () => void;
f = async () => {
  return 3;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let f: () => void;
> 3 | f = async () => {
    |     ^^^^^^^^^^^^^
> 4 |   return 3;
    | ^^^^^^^^^^^
> 5 | };
    | ^^ Promise-returning function provided to variable where a void return was expected.
  6 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

const f: () => void = async () => {
  return 0;
};
const g = async () => 1,
  h: () => void = async () => {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | const f: () => void = async () => {
    |                       ^^^^^^^^^^^^^
> 3 |   return 0;
    | ^^^^^^^^^^^
> 4 | };
    | ^^ Promise-returning function provided to variable where a void return was expected.
  5 | const g = async () => 1,
  6 |   h: () => void = async () => {};
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const f: () => void = async () => {
  3 |   return 0;
  4 | };
  5 | const g = async () => 1,
> 6 |   h: () => void = async () => {};
    |                   ^^^^^^^^^^^^^^ Promise-returning function provided to variable where a void return was expected.
  7 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

const obj: {
  f?: () => void;
} = {};
obj.f = async () => {
  return 0;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const obj: {
  3 |   f?: () => void;
  4 | } = {};
> 5 | obj.f = async () => {
    |         ^^^^^^^^^^^^^
> 6 |   return 0;
    | ^^^^^^^^^^^
> 7 | };
    | ^^ Promise-returning function provided to variable where a void return was expected.
  8 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

type O = { f: () => void };
const obj: O = {
  f: async () => 'foo',
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type O = { f: () => void };
  3 | const obj: O = {
> 4 |   f: async () => 'foo',
    |      ^^^^^^^^^^^^^^^^^ Promise-returning function provided to property where a void return was expected.
  5 | };
  6 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

type O = { f: () => void };
const obj: O = {
  f: async () => 'foo',
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type O = { f: () => void };
  3 | const obj: O = {
> 4 |   f: async () => 'foo',
    |      ^^^^^^^^^^^^^^^^^ Promise-returning function provided to property where a void return was expected.
  5 | };
  6 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

type O = { f: () => void };
const f = async () => 0;
const obj: O = {
  f,
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type O = { f: () => void };
  3 | const f = async () => 0;
  4 | const obj: O = {
> 5 |   f,
    |   ^ Promise-returning function provided to property where a void return was expected.
  6 | };
  7 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

type O = { f: () => void };
const obj: O = {
  async f() {
    return 0;
  },
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type O = { f: () => void };
  3 | const obj: O = {
> 4 |   async f() {
    |          ^^^^
> 5 |     return 0;
    | ^^^^^^^^^^^^^
> 6 |   },
    | ^^^^ Promise-returning function provided to property where a void return was expected.
  7 | };
  8 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

type O = { f: () => void; g: () => void; h: () => void };
function f(): O {
  const h = async () => 0;
  return {
    async f() {
      return 123;
    },
    g: async () => 0,
    h,
  };
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | type O = { f: () => void; g: () => void; h: () => void };
   3 | function f(): O {
   4 |   const h = async () => 0;
   5 |   return {
>  6 |     async f() {
     |            ^^^^
>  7 |       return 123;
     | ^^^^^^^^^^^^^^^^^
>  8 |     },
     | ^^^^^^ Promise-returning function provided to property where a void return was expected.
   9 |     g: async () => 0,
  10 |     h,
  11 |   };
  12 | }
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | type O = { f: () => void; g: () => void; h: () => void };
   3 | function f(): O {
   4 |   const h = async () => 0;
   5 |   return {
   6 |     async f() {
   7 |       return 123;
   8 |     },
>  9 |     g: async () => 0,
     |        ^^^^^^^^^^^^^ Promise-returning function provided to property where a void return was expected.
  10 |     h,
  11 |   };
  12 | }
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | type O = { f: () => void; g: () => void; h: () => void };
   3 | function f(): O {
   4 |   const h = async () => 0;
   5 |   return {
   6 |     async f() {
   7 |       return 123;
   8 |     },
   9 |     g: async () => 0,
> 10 |     h,
     |     ^ Promise-returning function provided to property where a void return was expected.
  11 |   };
  12 | }
  13 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

function f(): () => void {
  return async () => 0;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function f(): () => void {
> 3 |   return async () => 0;
    |          ^^^^^^^^^^^^^ Promise-returning function provided to return value where a void return was expected.
  4 | }
  5 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

function f(): () => void {
  return async () => 0;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function f(): () => void {
> 3 |   return async () => 0;
    |          ^^^^^^^^^^^^^ Promise-returning function provided to return value where a void return was expected.
  4 | }
  5 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```tsx

type O = {
  func: () => void;
};
const Component = (obj: O) => null;
<Component func={async () => 0} />;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
  1 |
  2 | type O = {
  3 |   func: () => void;
  4 | };
  5 | const Component = (obj: O) => null;
> 6 | <Component func={async () => 0} />;
    |                 ^^^^^^^^^^^^^^^ Promise-returning function provided to attribute where a void return was expected.
  7 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```tsx

type O = {
  func: () => void;
};
const Component = (obj: O) => null;
<Component func={async () => 0} />;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
  1 |
  2 | type O = {
  3 |   func: () => void;
  4 | };
  5 | const Component = (obj: O) => null;
> 6 | <Component func={async () => 0} />;
    |                 ^^^^^^^^^^^^^^^ Promise-returning function provided to attribute where a void return was expected.
  7 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```tsx

type O = {
  func: () => void;
};
const g = async () => 'foo';
const Component = (obj: O) => null;
<Component func={g} />;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
  1 |
  2 | type O = {
  3 |   func: () => void;
  4 | };
  5 | const g = async () => 'foo';
  6 | const Component = (obj: O) => null;
> 7 | <Component func={g} />;
    |                 ^^^ Promise-returning function provided to attribute where a void return was expected.
  8 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

interface ItLike {
  (name: string, callback: () => number): void;
  (name: string, callback: () => void): void;
}

declare const it: ItLike;

it('', async () => {});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface ItLike {
   3 |   (name: string, callback: () => number): void;
   4 |   (name: string, callback: () => void): void;
   5 | }
   6 |
   7 | declare const it: ItLike;
   8 |
>  9 | it('', async () => {});
     |        ^^^^^^^^^^^^^^ Promise returned in function argument where a void return was expected.
  10 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

interface ItLike {
  (name: string, callback: () => number): void;
}
interface ItLike {
  (name: string, callback: () => void): void;
}

declare const it: ItLike;

it('', async () => {});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface ItLike {
   3 |   (name: string, callback: () => number): void;
   4 | }
   5 | interface ItLike {
   6 |   (name: string, callback: () => void): void;
   7 | }
   8 |
   9 | declare const it: ItLike;
  10 |
> 11 | it('', async () => {});
     |        ^^^^^^^^^^^^^^ Promise returned in function argument where a void return was expected.
  12 |       
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

interface ItLike {
  (name: string, callback: () => void): void;
}
interface ItLike {
  (name: string, callback: () => number): void;
}

declare const it: ItLike;

it('', async () => {});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface ItLike {
   3 |   (name: string, callback: () => void): void;
   4 | }
   5 | interface ItLike {
   6 |   (name: string, callback: () => number): void;
   7 | }
   8 |
   9 | declare const it: ItLike;
  10 |
> 11 | it('', async () => {});
     |        ^^^^^^^^^^^^^^ Promise returned in function argument where a void return was expected.
  12 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

console.log({ ...Promise.resolve({ key: 42 }) });
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | console.log({ ...Promise.resolve({ key: 42 }) });
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected a non-Promise value to be spreaded in an object.
  3 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

const getData = () => Promise.resolve({ key: 42 });

console.log({
  someData: 42,
  ...getData(),
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const getData = () => Promise.resolve({ key: 42 });
  3 |
  4 | console.log({
  5 |   someData: 42,
> 6 |   ...getData(),
    |      ^^^^^^^^^ Expected a non-Promise value to be spreaded in an object.
  7 | });
  8 |       
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

declare const condition: boolean;

console.log({ ...(condition && Promise.resolve({ key: 42 })) });
console.log({ ...(condition || Promise.resolve({ key: 42 })) });
console.log({ ...(condition ? {} : Promise.resolve({ key: 42 })) });
console.log({ ...(condition ? Promise.resolve({ key: 42 }) : {}) });
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const condition: boolean;
  3 |
> 4 | console.log({ ...(condition && Promise.resolve({ key: 42 })) });
    |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected a non-Promise value to be spreaded in an object.
  5 | console.log({ ...(condition || Promise.resolve({ key: 42 })) });
  6 | console.log({ ...(condition ? {} : Promise.resolve({ key: 42 })) });
  7 | console.log({ ...(condition ? Promise.resolve({ key: 42 }) : {}) });
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const condition: boolean;
  3 |
  4 | console.log({ ...(condition && Promise.resolve({ key: 42 })) });
> 5 | console.log({ ...(condition || Promise.resolve({ key: 42 })) });
    |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected a non-Promise value to be spreaded in an object.
  6 | console.log({ ...(condition ? {} : Promise.resolve({ key: 42 })) });
  7 | console.log({ ...(condition ? Promise.resolve({ key: 42 }) : {}) });
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const condition: boolean;
  3 |
  4 | console.log({ ...(condition && Promise.resolve({ key: 42 })) });
  5 | console.log({ ...(condition || Promise.resolve({ key: 42 })) });
> 6 | console.log({ ...(condition ? {} : Promise.resolve({ key: 42 })) });
    |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected a non-Promise value to be spreaded in an object.
  7 | console.log({ ...(condition ? Promise.resolve({ key: 42 }) : {}) });
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const condition: boolean;
  3 |
  4 | console.log({ ...(condition && Promise.resolve({ key: 42 })) });
  5 | console.log({ ...(condition || Promise.resolve({ key: 42 })) });
  6 | console.log({ ...(condition ? {} : Promise.resolve({ key: 42 })) });
> 7 | console.log({ ...(condition ? Promise.resolve({ key: 42 }) : {}) });
    |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected a non-Promise value to be spreaded in an object.
  8 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

function restPromises(first: Boolean, ...callbacks: Array<() => void>): void {}

restPromises(
  true,
  () => Promise.resolve(true),
  () => Promise.resolve(null),
  () => true,
  () => Promise.resolve('Hello'),
);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | function restPromises(first: Boolean, ...callbacks: Array<() => void>): void {}
   3 |
   4 | restPromises(
   5 |   true,
>  6 |   () => Promise.resolve(true),
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promise returned in function argument where a void return was expected.
   7 |   () => Promise.resolve(null),
   8 |   () => true,
   9 |   () => Promise.resolve('Hello'),
  10 | );
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function restPromises(first: Boolean, ...callbacks: Array<() => void>): void {}
   3 |
   4 | restPromises(
   5 |   true,
   6 |   () => Promise.resolve(true),
>  7 |   () => Promise.resolve(null),
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promise returned in function argument where a void return was expected.
   8 |   () => true,
   9 |   () => Promise.resolve('Hello'),
  10 | );
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function restPromises(first: Boolean, ...callbacks: Array<() => void>): void {}
   3 |
   4 | restPromises(
   5 |   true,
   6 |   () => Promise.resolve(true),
   7 |   () => Promise.resolve(null),
   8 |   () => true,
>  9 |   () => Promise.resolve('Hello'),
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promise returned in function argument where a void return was expected.
  10 | );
  11 |       
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

type MyUnion = (() => void) | boolean;

function restUnion(first: string, ...callbacks: Array<MyUnion>): void {}
restUnion('Testing', false, () => Promise.resolve(true));
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type MyUnion = (() => void) | boolean;
  3 |
  4 | function restUnion(first: string, ...callbacks: Array<MyUnion>): void {}
> 5 | restUnion('Testing', false, () => Promise.resolve(true));
    |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promise returned in function argument where a void return was expected.
  6 |       
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

function restTupleOne(first: string, ...callbacks: [() => void]): void {}
restTupleOne('My string', () => Promise.resolve(1));
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function restTupleOne(first: string, ...callbacks: [() => void]): void {}
> 3 | restTupleOne('My string', () => Promise.resolve(1));
    |                           ^^^^^^^^^^^^^^^^^^^^^^^^ Promise returned in function argument where a void return was expected.
  4 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

function restTupleTwo(
  first: boolean,
  ...callbacks: [undefined, () => void, undefined]
): void {}

restTupleTwo(true, undefined, () => Promise.resolve(true), undefined);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function restTupleTwo(
  3 |   first: boolean,
  4 |   ...callbacks: [undefined, () => void, undefined]
  5 | ): void {}
  6 |
> 7 | restTupleTwo(true, undefined, () => Promise.resolve(true), undefined);
    |                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promise returned in function argument where a void return was expected.
  8 |       
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts

function restTupleFour(
  first: number,
  ...callbacks: [() => void, boolean, () => void, () => void]
): void;

restTupleFour(
  1,
  () => Promise.resolve(true),
  false,
  () => {},
  () => Promise.resolve(1),
);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | function restTupleFour(
   3 |   first: number,
   4 |   ...callbacks: [() => void, boolean, () => void, () => void]
   5 | ): void;
   6 |
   7 | restTupleFour(
   8 |   1,
>  9 |   () => Promise.resolve(true),
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promise returned in function argument where a void return was expected.
  10 |   false,
  11 |   () => {},
  12 |   () => Promise.resolve(1),
  13 | );
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | function restTupleFour(
   3 |   first: number,
   4 |   ...callbacks: [() => void, boolean, () => void, () => void]
   5 | ): void;
   6 |
   7 | restTupleFour(
   8 |   1,
   9 |   () => Promise.resolve(true),
  10 |   false,
  11 |   () => {},
> 12 |   () => Promise.resolve(1),
     |   ^^^^^^^^^^^^^^^^^^^^^^^^ Promise returned in function argument where a void return was expected.
  13 | );
  14 |       
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts

class TakesVoidCb {
  constructor(first: string, ...args: Array<() => void>);
}

new TakesVoidCb;
new TakesVoidCb();
new TakesVoidCb(
  'Testing',
  () => {},
  () => Promise.resolve(true),
);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class TakesVoidCb {
   3 |   constructor(first: string, ...args: Array<() => void>);
   4 | }
   5 |
   6 | new TakesVoidCb;
   7 | new TakesVoidCb();
   8 | new TakesVoidCb(
   9 |   'Testing',
  10 |   () => {},
> 11 |   () => Promise.resolve(true),
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Promise returned in function argument where a void return was expected.
  12 | );
  13 |       
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts

function restTuple(...args: []): void;
function restTuple(...args: [boolean, () => void]): void;
function restTuple(..._args: any[]): void {}

restTuple();
restTuple(true, () => Promise.resolve(1));
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function restTuple(...args: []): void;
  3 | function restTuple(...args: [boolean, () => void]): void;
  4 | function restTuple(..._args: any[]): void {}
  5 |
  6 | restTuple();
> 7 | restTuple(true, () => Promise.resolve(1));
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^ Promise returned in function argument where a void return was expected.
  8 |       
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts

type ReturnsRecord = () => Record<string, () => void>;

const test: ReturnsRecord = () => {
  return { asynchronous: async () => {} };
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type ReturnsRecord = () => Record<string, () => void>;
  3 |
  4 | const test: ReturnsRecord = () => {
> 5 |   return { asynchronous: async () => {} };
    |                          ^^^^^^^^^^^^^^ Promise-returning function provided to property where a void return was expected.
  6 | };
  7 |       
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts

let value: Record<string, () => void>;
value.asynchronous = async () => {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let value: Record<string, () => void>;
> 3 | value.asynchronous = async () => {};
    |                      ^^^^^^^^^^^^^^ Promise-returning function provided to variable where a void return was expected.
  4 |       
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts

type ReturnsRecord = () => Record<string, () => void>;

async function asynchronous() {}

const test: ReturnsRecord = () => {
  return { asynchronous };
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type ReturnsRecord = () => Record<string, () => void>;
  3 |
  4 | async function asynchronous() {}
  5 |
  6 | const test: ReturnsRecord = () => {
> 7 |   return { asynchronous };
    |            ^^^^^^^^^^^^ Promise-returning function provided to property where a void return was expected.
  8 | };
  9 |       
```
