# switch-exhaustiveness-check

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

type Day =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

const day = 'Monday' as Day;
let result = 0;

switch (day) {
  case 'Monday': {
    result = 1;
    break;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Day =
   3 |   | 'Monday'
   4 |   | 'Tuesday'
   5 |   | 'Wednesday'
   6 |   | 'Thursday'
   7 |   | 'Friday'
   8 |   | 'Saturday'
   9 |   | 'Sunday';
  10 |
  11 | const day = 'Monday' as Day;
  12 | let result = 0;
  13 |
> 14 | switch (day) {
     |         ^^^ Switch is not exhaustive. Cases not matched: "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"
  15 |   case 'Monday': {
  16 |     result = 1;
  17 |     break;
  18 |   }
  19 | }
  20 |       
```

#### Suggestions

##### Add branches for missing cases.

<!-- prettier-ignore -->
```ts

type Day =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

const day = 'Monday' as Day;
let result = 0;

switch (day) {
  case 'Monday': {
    result = 1;
    break;
  }
  case "Tuesday": { throw new Error('Not implemented yet: "Tuesday" case') }
  case "Wednesday": { throw new Error('Not implemented yet: "Wednesday" case') }
  case "Thursday": { throw new Error('Not implemented yet: "Thursday" case') }
  case "Friday": { throw new Error('Not implemented yet: "Friday" case') }
  case "Saturday": { throw new Error('Not implemented yet: "Saturday" case') }
  case "Sunday": { throw new Error('Not implemented yet: "Sunday" case') }
}
      
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

enum Enum {
  A,
  B,
}

function test(value: Enum): number {
  switch (value) {
    case Enum.A:
      return 1;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | enum Enum {
   3 |   A,
   4 |   B,
   5 | }
   6 |
   7 | function test(value: Enum): number {
>  8 |   switch (value) {
     |           ^^^^^ Switch is not exhaustive. Cases not matched: Enum.B
   9 |     case Enum.A:
  10 |       return 1;
  11 |   }
  12 | }
  13 |       
```

#### Suggestions

##### Add branches for missing cases.

<!-- prettier-ignore -->
```ts

enum Enum {
  A,
  B,
}

function test(value: Enum): number {
  switch (value) {
    case Enum.A:
      return 1;
    case Enum.B: { throw new Error('Not implemented yet: Enum.B case') }
  }
}
      
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

type A = 'a';
type B = 'b';
type C = 'c';
type Union = A | B | C;

function test(value: Union): number {
  switch (value) {
    case 'a':
      return 1;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | type A = 'a';
   3 | type B = 'b';
   4 | type C = 'c';
   5 | type Union = A | B | C;
   6 |
   7 | function test(value: Union): number {
>  8 |   switch (value) {
     |           ^^^^^ Switch is not exhaustive. Cases not matched: "b" | "c"
   9 |     case 'a':
  10 |       return 1;
  11 |   }
  12 | }
  13 |       
```

#### Suggestions

##### Add branches for missing cases.

<!-- prettier-ignore -->
```ts

type A = 'a';
type B = 'b';
type C = 'c';
type Union = A | B | C;

function test(value: Union): number {
  switch (value) {
    case 'a':
      return 1;
    case "b": { throw new Error('Not implemented yet: "b" case') }
    case "c": { throw new Error('Not implemented yet: "c" case') }
  }
}
      
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

const A = 'a';
const B = 1;
const C = true;

type Union = typeof A | typeof B | typeof C;

function test(value: Union): number {
  switch (value) {
    case 'a':
      return 1;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const A = 'a';
   3 | const B = 1;
   4 | const C = true;
   5 |
   6 | type Union = typeof A | typeof B | typeof C;
   7 |
   8 | function test(value: Union): number {
>  9 |   switch (value) {
     |           ^^^^^ Switch is not exhaustive. Cases not matched: true | 1
  10 |     case 'a':
  11 |       return 1;
  12 |   }
  13 | }
  14 |       
```

#### Suggestions

##### Add branches for missing cases.

<!-- prettier-ignore -->
```ts

const A = 'a';
const B = 1;
const C = true;

type Union = typeof A | typeof B | typeof C;

function test(value: Union): number {
  switch (value) {
    case 'a':
      return 1;
    case true: { throw new Error('Not implemented yet: true case') }
    case 1: { throw new Error('Not implemented yet: 1 case') }
  }
}
      
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

type DiscriminatedUnion = { type: 'A'; a: 1 } | { type: 'B'; b: 2 };

function test(value: DiscriminatedUnion): number {
  switch (value.type) {
    case 'A':
      return 1;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | type DiscriminatedUnion = { type: 'A'; a: 1 } | { type: 'B'; b: 2 };
   3 |
   4 | function test(value: DiscriminatedUnion): number {
>  5 |   switch (value.type) {
     |           ^^^^^^^^^^ Switch is not exhaustive. Cases not matched: "B"
   6 |     case 'A':
   7 |       return 1;
   8 |   }
   9 | }
  10 |       
```

#### Suggestions

##### Add branches for missing cases.

<!-- prettier-ignore -->
```ts

type DiscriminatedUnion = { type: 'A'; a: 1 } | { type: 'B'; b: 2 };

function test(value: DiscriminatedUnion): number {
  switch (value.type) {
    case 'A':
      return 1;
    case "B": { throw new Error('Not implemented yet: "B" case') }
  }
}
      
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

type Day =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

const day = 'Monday' as Day;

switch (day) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Day =
   3 |   | 'Monday'
   4 |   | 'Tuesday'
   5 |   | 'Wednesday'
   6 |   | 'Thursday'
   7 |   | 'Friday'
   8 |   | 'Saturday'
   9 |   | 'Sunday';
  10 |
  11 | const day = 'Monday' as Day;
  12 |
> 13 | switch (day) {
     |         ^^^ Switch is not exhaustive. Cases not matched: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"
  14 | }
  15 |       
```

#### Suggestions

##### Add branches for missing cases.

<!-- prettier-ignore -->
```ts

type Day =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

const day = 'Monday' as Day;

switch (day) {
case "Monday": { throw new Error('Not implemented yet: "Monday" case') }
case "Tuesday": { throw new Error('Not implemented yet: "Tuesday" case') }
case "Wednesday": { throw new Error('Not implemented yet: "Wednesday" case') }
case "Thursday": { throw new Error('Not implemented yet: "Thursday" case') }
case "Friday": { throw new Error('Not implemented yet: "Friday" case') }
case "Saturday": { throw new Error('Not implemented yet: "Saturday" case') }
case "Sunday": { throw new Error('Not implemented yet: "Sunday" case') }
}
      
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

type FooBar = (string & { foo: void }) | 'bar';

const foobar = 'bar' as FooBar;
let result = 0;

switch (foobar) {
  case 'bar': {
    result = 42;
    break;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | type FooBar = (string & { foo: void }) | 'bar';
   3 |
   4 | const foobar = 'bar' as FooBar;
   5 | let result = 0;
   6 |
>  7 | switch (foobar) {
     |         ^^^^^^ Switch is not exhaustive. Cases not matched: string & { foo: void; }
   8 |   case 'bar': {
   9 |     result = 42;
  10 |     break;
  11 |   }
  12 | }
  13 |       
```

#### Suggestions

##### Add branches for missing cases.

<!-- prettier-ignore -->
```ts

type FooBar = (string & { foo: void }) | 'bar';

const foobar = 'bar' as FooBar;
let result = 0;

switch (foobar) {
  case 'bar': {
    result = 42;
    break;
  }

}
      
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

const a = Symbol('a');
const b = Symbol('b');
const c = Symbol('c');

type T = typeof a | typeof b | typeof c;

function test(value: T): number {
  switch (value) {
    case a:
      return 1;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const a = Symbol('a');
   3 | const b = Symbol('b');
   4 | const c = Symbol('c');
   5 |
   6 | type T = typeof a | typeof b | typeof c;
   7 |
   8 | function test(value: T): number {
>  9 |   switch (value) {
     |           ^^^^^ Switch is not exhaustive. Cases not matched: typeof b | typeof c
  10 |     case a:
  11 |       return 1;
  12 |   }
  13 | }
  14 |       
```

#### Suggestions

##### Add branches for missing cases.

<!-- prettier-ignore -->
```ts

const a = Symbol('a');
const b = Symbol('b');
const c = Symbol('c');

type T = typeof a | typeof b | typeof c;

function test(value: T): number {
  switch (value) {
    case a:
      return 1;
    case unique symbol: { throw new Error('Not implemented yet: unique symbol case') }
    case unique symbol: { throw new Error('Not implemented yet: unique symbol case') }
  }
}
      
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

type T = 1 | 2;

function test(value: T): number {
  switch (value) {
    case 1:
      return 1;
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | type T = 1 | 2;
   3 |
   4 | function test(value: T): number {
>  5 |   switch (value) {
     |           ^^^^^ Switch is not exhaustive. Cases not matched: 2
   6 |     case 1:
   7 |       return 1;
   8 |   }
   9 | }
  10 |       
```

#### Suggestions

##### Add branches for missing cases.

<!-- prettier-ignore -->
```ts

type T = 1 | 2;

function test(value: T): number {
  switch (value) {
    case 1:
      return 1;
    case 2: { throw new Error('Not implemented yet: 2 case') }
  }
}
      
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

type T = 1 | 2;

function test(value: T): number {
  switch (value) {
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = 1 | 2;
  3 |
  4 | function test(value: T): number {
> 5 |   switch (value) {
    |           ^^^^^ Switch is not exhaustive. Cases not matched: 1 | 2
  6 |   }
  7 | }
  8 |       
```

#### Suggestions

##### Add branches for missing cases.

<!-- prettier-ignore -->
```ts

type T = 1 | 2;

function test(value: T): number {
  switch (value) {
  case 1: { throw new Error('Not implemented yet: 1 case') }
  case 2: { throw new Error('Not implemented yet: 2 case') }
  }
}
      
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

export enum Enum {
  'test-test' = 'test-test',
  'test' = 'test',
}

function test(arg: Enum): string {
  switch (arg) {
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | export enum Enum {
   3 |   'test-test' = 'test-test',
   4 |   'test' = 'test',
   5 | }
   6 |
   7 | function test(arg: Enum): string {
>  8 |   switch (arg) {
     |           ^^^ Switch is not exhaustive. Cases not matched: (typeof Enum)["test-test"] | Enum.test
   9 |   }
  10 | }
  11 |       
```

#### Suggestions

##### Add branches for missing cases.

<!-- prettier-ignore -->
```ts

export enum Enum {
  'test-test' = 'test-test',
  'test' = 'test',
}

function test(arg: Enum): string {
  switch (arg) {
  case Enum['test-test']: { throw new Error('Not implemented yet: Enum['test-test'] case') }
  case Enum.test: { throw new Error('Not implemented yet: Enum.test case') }
  }
}
      
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

export enum Enum {
  '' = 'test-test',
  'test' = 'test',
}

function test(arg: Enum): string {
  switch (arg) {
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | export enum Enum {
   3 |   '' = 'test-test',
   4 |   'test' = 'test',
   5 | }
   6 |
   7 | function test(arg: Enum): string {
>  8 |   switch (arg) {
     |           ^^^ Switch is not exhaustive. Cases not matched: (typeof Enum)[""] | Enum.test
   9 |   }
  10 | }
  11 |       
```

#### Suggestions

##### Add branches for missing cases.

<!-- prettier-ignore -->
```ts

export enum Enum {
  '' = 'test-test',
  'test' = 'test',
}

function test(arg: Enum): string {
  switch (arg) {
  case Enum['']: { throw new Error('Not implemented yet: Enum[''] case') }
  case Enum.test: { throw new Error('Not implemented yet: Enum.test case') }
  }
}
      
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

export enum Enum {
  '9test' = 'test-test',
  'test' = 'test',
}

function test(arg: Enum): string {
  switch (arg) {
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | export enum Enum {
   3 |   '9test' = 'test-test',
   4 |   'test' = 'test',
   5 | }
   6 |
   7 | function test(arg: Enum): string {
>  8 |   switch (arg) {
     |           ^^^ Switch is not exhaustive. Cases not matched: (typeof Enum)["9test"] | Enum.test
   9 |   }
  10 | }
  11 |       
```

#### Suggestions

##### Add branches for missing cases.

<!-- prettier-ignore -->
```ts

export enum Enum {
  '9test' = 'test-test',
  'test' = 'test',
}

function test(arg: Enum): string {
  switch (arg) {
  case Enum['9test']: { throw new Error('Not implemented yet: Enum['9test'] case') }
  case Enum.test: { throw new Error('Not implemented yet: Enum.test case') }
  }
}
      
```
