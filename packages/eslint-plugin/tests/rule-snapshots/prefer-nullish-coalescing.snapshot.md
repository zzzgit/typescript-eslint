# prefer-nullish-coalescing

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
(x || 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | (x || 'foo');
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
(x ?? 'foo');
      
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
(x ||= 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | (x ||= 'foo');
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
(x ??= 'foo');
      
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null;
(x || 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null;
> 3 | (x || 'foo');
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | null;
(x ?? 'foo');
      
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null;
(x ||= 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null;
> 3 | (x ||= 'foo');
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | null;
(x ??= 'foo');
      
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
(x || 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null;
> 3 | (x || 'foo');
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
(x ?? 'foo');
      
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
(x ||= 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null;
> 3 | (x ||= 'foo');
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
(x ??= 'foo');
      
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null;
(x || 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null;
> 3 | (x || 'foo');
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | null;
(x ?? 'foo');
      
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null;
(x ||= 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null;
> 3 | (x ||= 'foo');
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | null;
(x ??= 'foo');
      
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
(x || 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | (x || 'foo');
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
(x ?? 'foo');
      
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
(x ||= 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | (x ||= 'foo');
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
(x ??= 'foo');
      
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
(x || 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | undefined;
> 3 | (x || 'foo');
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
(x ?? 'foo');
      
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
(x ||= 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | undefined;
> 3 | (x ||= 'foo');
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
(x ??= 'foo');
      
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
(x || 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | undefined;
> 3 | (x || 'foo');
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
(x ?? 'foo');
      
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
(x ||= 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | undefined;
> 3 | (x ||= 'foo');
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
(x ??= 'foo');
      
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
(x || 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | undefined;
> 3 | (x || 'foo');
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
(x ?? 'foo');
      
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
(x ||= 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | undefined;
> 3 | (x ||= 'foo');
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
(x ??= 'foo');
      
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
(x || 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null | undefined;
> 3 | (x || 'foo');
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
(x ?? 'foo');
      
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
(x ||= 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null | undefined;
> 3 | (x ||= 'foo');
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
(x ??= 'foo');
      
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
(x || 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null | undefined;
> 3 | (x || 'foo');
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
(x ?? 'foo');
      
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
(x ||= 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null | undefined;
> 3 | (x ||= 'foo');
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
(x ??= 'foo');
      
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
(x || 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null | undefined;
> 3 | (x || 'foo');
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
(x ?? 'foo');
      
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
(x ||= 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null | undefined;
> 3 | (x ||= 'foo');
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
(x ??= 'foo');
      
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
(x || 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null | undefined;
> 3 | (x || 'foo');
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
(x ?? 'foo');
      
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
(x ||= 'foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null | undefined;
> 3 | (x ||= 'foo');
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
(x ??= 'foo');
      
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
x !== undefined && x !== null ? x : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x !== undefined && x !== null ? x : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] !== undefined && x.z[1][this[this.o]]["3"][a.b.c] !== null ? x.z[1][this[this.o]]["3"][a.b.c] : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] !== undefined && x.z[1][this[this.o]]["3"][a.b.c] !== null ? x.z[1][this[this.o]]["3"][a.b.c] : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
x !== null && x !== undefined ? x : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x !== null && x !== undefined ? x : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] !== null && x.z[1][this[this.o]]["3"][a.b.c] !== undefined ? x.z[1][this[this.o]]["3"][a.b.c] : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] !== null && x.z[1][this[this.o]]["3"][a.b.c] !== undefined ? x.z[1][this[this.o]]["3"][a.b.c] : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
x === undefined || x === null ? y : x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x === undefined || x === null ? y : x;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] === undefined || x.z[1][this[this.o]]["3"][a.b.c] === null ? y : x.z[1][this[this.o]]["3"][a.b.c];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] === undefined || x.z[1][this[this.o]]["3"][a.b.c] === null ? y : x.z[1][this[this.o]]["3"][a.b.c];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
x === null || x === undefined ? y : x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x === null || x === undefined ? y : x;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] === null || x.z[1][this[this.o]]["3"][a.b.c] === undefined ? y : x.z[1][this[this.o]]["3"][a.b.c];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] === null || x.z[1][this[this.o]]["3"][a.b.c] === undefined ? y : x.z[1][this[this.o]]["3"][a.b.c];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
undefined !== x && x !== null ? x : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | undefined !== x && x !== null ? x : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
undefined !== x.z[1][this[this.o]]["3"][a.b.c] && x.z[1][this[this.o]]["3"][a.b.c] !== null ? x.z[1][this[this.o]]["3"][a.b.c] : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | undefined !== x.z[1][this[this.o]]["3"][a.b.c] && x.z[1][this[this.o]]["3"][a.b.c] !== null ? x.z[1][this[this.o]]["3"][a.b.c] : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts
null !== x && x !== undefined ? x : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | null !== x && x !== undefined ? x : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts
null !== x.z[1][this[this.o]]["3"][a.b.c] && x.z[1][this[this.o]]["3"][a.b.c] !== undefined ? x.z[1][this[this.o]]["3"][a.b.c] : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | null !== x.z[1][this[this.o]]["3"][a.b.c] && x.z[1][this[this.o]]["3"][a.b.c] !== undefined ? x.z[1][this[this.o]]["3"][a.b.c] : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts
undefined === x || x === null ? y : x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | undefined === x || x === null ? y : x;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts
undefined === x.z[1][this[this.o]]["3"][a.b.c] || x.z[1][this[this.o]]["3"][a.b.c] === null ? y : x.z[1][this[this.o]]["3"][a.b.c];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | undefined === x.z[1][this[this.o]]["3"][a.b.c] || x.z[1][this[this.o]]["3"][a.b.c] === null ? y : x.z[1][this[this.o]]["3"][a.b.c];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts
null === x || x === undefined ? y : x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | null === x || x === undefined ? y : x;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts
null === x.z[1][this[this.o]]["3"][a.b.c] || x.z[1][this[this.o]]["3"][a.b.c] === undefined ? y : x.z[1][this[this.o]]["3"][a.b.c];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | null === x.z[1][this[this.o]]["3"][a.b.c] || x.z[1][this[this.o]]["3"][a.b.c] === undefined ? y : x.z[1][this[this.o]]["3"][a.b.c];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts
x !== undefined && null !== x ? x : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x !== undefined && null !== x ? x : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] !== undefined && null !== x.z[1][this[this.o]]["3"][a.b.c] ? x.z[1][this[this.o]]["3"][a.b.c] : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] !== undefined && null !== x.z[1][this[this.o]]["3"][a.b.c] ? x.z[1][this[this.o]]["3"][a.b.c] : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts
x !== null && undefined !== x ? x : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x !== null && undefined !== x ? x : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] !== null && undefined !== x.z[1][this[this.o]]["3"][a.b.c] ? x.z[1][this[this.o]]["3"][a.b.c] : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] !== null && undefined !== x.z[1][this[this.o]]["3"][a.b.c] ? x.z[1][this[this.o]]["3"][a.b.c] : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts
x === undefined || null === x ? y : x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x === undefined || null === x ? y : x;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] === undefined || null === x.z[1][this[this.o]]["3"][a.b.c] ? y : x.z[1][this[this.o]]["3"][a.b.c];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] === undefined || null === x.z[1][this[this.o]]["3"][a.b.c] ? y : x.z[1][this[this.o]]["3"][a.b.c];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts
x === null || undefined === x ? y : x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x === null || undefined === x ? y : x;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] === null || undefined === x.z[1][this[this.o]]["3"][a.b.c] ? y : x.z[1][this[this.o]]["3"][a.b.c];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] === null || undefined === x.z[1][this[this.o]]["3"][a.b.c] ? y : x.z[1][this[this.o]]["3"][a.b.c];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts
undefined !== x && null !== x ? x : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | undefined !== x && null !== x ? x : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts
undefined !== x.z[1][this[this.o]]["3"][a.b.c] && null !== x.z[1][this[this.o]]["3"][a.b.c] ? x.z[1][this[this.o]]["3"][a.b.c] : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | undefined !== x.z[1][this[this.o]]["3"][a.b.c] && null !== x.z[1][this[this.o]]["3"][a.b.c] ? x.z[1][this[this.o]]["3"][a.b.c] : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts
null !== x && undefined !== x ? x : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | null !== x && undefined !== x ? x : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts
null !== x.z[1][this[this.o]]["3"][a.b.c] && undefined !== x.z[1][this[this.o]]["3"][a.b.c] ? x.z[1][this[this.o]]["3"][a.b.c] : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | null !== x.z[1][this[this.o]]["3"][a.b.c] && undefined !== x.z[1][this[this.o]]["3"][a.b.c] ? x.z[1][this[this.o]]["3"][a.b.c] : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts
undefined === x || null === x ? y : x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | undefined === x || null === x ? y : x;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts
undefined === x.z[1][this[this.o]]["3"][a.b.c] || null === x.z[1][this[this.o]]["3"][a.b.c] ? y : x.z[1][this[this.o]]["3"][a.b.c];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | undefined === x.z[1][this[this.o]]["3"][a.b.c] || null === x.z[1][this[this.o]]["3"][a.b.c] ? y : x.z[1][this[this.o]]["3"][a.b.c];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts
null === x || undefined === x ? y : x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | null === x || undefined === x ? y : x;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts
null === x.z[1][this[this.o]]["3"][a.b.c] || undefined === x.z[1][this[this.o]]["3"][a.b.c] ? y : x.z[1][this[this.o]]["3"][a.b.c];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | null === x.z[1][this[this.o]]["3"][a.b.c] || undefined === x.z[1][this[this.o]]["3"][a.b.c] ? y : x.z[1][this[this.o]]["3"][a.b.c];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts
x != undefined && x != null ? x : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x != undefined && x != null ? x : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] != undefined && x.z[1][this[this.o]]["3"][a.b.c] != null ? x.z[1][this[this.o]]["3"][a.b.c] : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] != undefined && x.z[1][this[this.o]]["3"][a.b.c] != null ? x.z[1][this[this.o]]["3"][a.b.c] : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts
x == undefined || x == null ? y : x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x == undefined || x == null ? y : x;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] == undefined || x.z[1][this[this.o]]["3"][a.b.c] == null ? y : x.z[1][this[this.o]]["3"][a.b.c];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] == undefined || x.z[1][this[this.o]]["3"][a.b.c] == null ? y : x.z[1][this[this.o]]["3"][a.b.c];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts
x != undefined && x !== null ? x : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x != undefined && x !== null ? x : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] != undefined && x.z[1][this[this.o]]["3"][a.b.c] !== null ? x.z[1][this[this.o]]["3"][a.b.c] : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] != undefined && x.z[1][this[this.o]]["3"][a.b.c] !== null ? x.z[1][this[this.o]]["3"][a.b.c] : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts
x == undefined || x === null ? y : x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x == undefined || x === null ? y : x;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] == undefined || x.z[1][this[this.o]]["3"][a.b.c] === null ? y : x.z[1][this[this.o]]["3"][a.b.c];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] == undefined || x.z[1][this[this.o]]["3"][a.b.c] === null ? y : x.z[1][this[this.o]]["3"][a.b.c];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts
x !== undefined && x != null ? x : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x !== undefined && x != null ? x : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] !== undefined && x.z[1][this[this.o]]["3"][a.b.c] != null ? x.z[1][this[this.o]]["3"][a.b.c] : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] !== undefined && x.z[1][this[this.o]]["3"][a.b.c] != null ? x.z[1][this[this.o]]["3"][a.b.c] : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts
undefined != x ? x : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | undefined != x ? x : y;
    | ^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #68

### Test Code

<!-- prettier-ignore -->
```ts
undefined != x.z[1][this[this.o]]["3"][a.b.c] ? x.z[1][this[this.o]]["3"][a.b.c] : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | undefined != x.z[1][this[this.o]]["3"][a.b.c] ? x.z[1][this[this.o]]["3"][a.b.c] : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #69

### Test Code

<!-- prettier-ignore -->
```ts
null != x ? x : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | null != x ? x : y;
    | ^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #70

### Test Code

<!-- prettier-ignore -->
```ts
null != x.z[1][this[this.o]]["3"][a.b.c] ? x.z[1][this[this.o]]["3"][a.b.c] : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | null != x.z[1][this[this.o]]["3"][a.b.c] ? x.z[1][this[this.o]]["3"][a.b.c] : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #71

### Test Code

<!-- prettier-ignore -->
```ts
undefined == x ? y : x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | undefined == x ? y : x;
    | ^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #72

### Test Code

<!-- prettier-ignore -->
```ts
undefined == x.z[1][this[this.o]]["3"][a.b.c] ? y : x.z[1][this[this.o]]["3"][a.b.c];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | undefined == x.z[1][this[this.o]]["3"][a.b.c] ? y : x.z[1][this[this.o]]["3"][a.b.c];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #73

### Test Code

<!-- prettier-ignore -->
```ts
null == x ? y : x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | null == x ? y : x;
    | ^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #74

### Test Code

<!-- prettier-ignore -->
```ts
null == x.z[1][this[this.o]]["3"][a.b.c] ? y : x.z[1][this[this.o]]["3"][a.b.c];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | null == x.z[1][this[this.o]]["3"][a.b.c] ? y : x.z[1][this[this.o]]["3"][a.b.c];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #75

### Test Code

<!-- prettier-ignore -->
```ts
x != undefined ? x : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x != undefined ? x : y;
    | ^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #76

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] != undefined ? x.z[1][this[this.o]]["3"][a.b.c] : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] != undefined ? x.z[1][this[this.o]]["3"][a.b.c] : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #77

### Test Code

<!-- prettier-ignore -->
```ts
x != null ? x : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x != null ? x : y;
    | ^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #78

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] != null ? x.z[1][this[this.o]]["3"][a.b.c] : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] != null ? x.z[1][this[this.o]]["3"][a.b.c] : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #79

### Test Code

<!-- prettier-ignore -->
```ts
x == undefined  ? y : x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x == undefined  ? y : x;
    | ^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #80

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] == undefined  ? y : x.z[1][this[this.o]]["3"][a.b.c];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] == undefined  ? y : x.z[1][this[this.o]]["3"][a.b.c];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #81

### Test Code

<!-- prettier-ignore -->
```ts
x == null ? y : x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x == null ? y : x;
    | ^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x ?? y;
```

## Test #82

### Test Code

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] == null ? y : x.z[1][this[this.o]]["3"][a.b.c];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | x.z[1][this[this.o]]["3"][a.b.c] == null ? y : x.z[1][this[this.o]]["3"][a.b.c];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
x.z[1][this[this.o]]["3"][a.b.c] ?? y;
```

## Test #83

### Test Code

<!-- prettier-ignore -->
```ts
this != undefined ? this : y;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | this != undefined ? this : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts
this ?? y;
```

## Test #84

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
x !== undefined ? x : y;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | x !== undefined ? x : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
x ?? y;
      
```

## Test #85

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
undefined !== x ? x : y;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | undefined !== x ? x : y;
    | ^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
x ?? y;
      
```

## Test #86

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
undefined === x ? y : x;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | undefined === x ? y : x;
    | ^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
x ?? y;
      
```

## Test #87

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
undefined === x ? y : x;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | undefined === x ? y : x;
    | ^^^^^^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
x ?? y;
      
```

## Test #88

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
x !== null ? x : y;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | x !== null ? x : y;
    | ^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
x ?? y;
      
```

## Test #89

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
null !== x ? x : y;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | null !== x ? x : y;
    | ^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
x ?? y;
      
```

## Test #90

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
null === x ? y : x;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | null === x ? y : x;
    | ^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
x ?? y;
      
```

## Test #91

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
null === x ? y : x;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | null === x ? y : x;
    | ^^^^^^^^^^^^^^^^^^ Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
x ?? y;
      
```

## Test #92

### Test Code

<!-- prettier-ignore -->
```ts

declare const x: string[] | null;
if (x) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const x: string[] | null;
  3 | if (x) {
  4 | }
  5 |       
```

## Test #93

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
(x || 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | (x || 'foo') ? null : null;
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
(x ?? 'foo') ? null : null;
      
```

## Test #94

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
(x ||= 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | (x ||= 'foo') ? null : null;
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
(x ??= 'foo') ? null : null;
      
```

## Test #95

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null;
(x || 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null;
> 3 | (x || 'foo') ? null : null;
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | null;
(x ?? 'foo') ? null : null;
      
```

## Test #96

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null;
(x ||= 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null;
> 3 | (x ||= 'foo') ? null : null;
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | null;
(x ??= 'foo') ? null : null;
      
```

## Test #97

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
(x || 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null;
> 3 | (x || 'foo') ? null : null;
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
(x ?? 'foo') ? null : null;
      
```

## Test #98

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
(x ||= 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null;
> 3 | (x ||= 'foo') ? null : null;
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
(x ??= 'foo') ? null : null;
      
```

## Test #99

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null;
(x || 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null;
> 3 | (x || 'foo') ? null : null;
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | null;
(x ?? 'foo') ? null : null;
      
```

## Test #100

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null;
(x ||= 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null;
> 3 | (x ||= 'foo') ? null : null;
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | null;
(x ??= 'foo') ? null : null;
      
```

## Test #101

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
(x || 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | (x || 'foo') ? null : null;
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
(x ?? 'foo') ? null : null;
      
```

## Test #102

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
(x ||= 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | (x ||= 'foo') ? null : null;
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
(x ??= 'foo') ? null : null;
      
```

## Test #103

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
(x || 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | undefined;
> 3 | (x || 'foo') ? null : null;
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
(x ?? 'foo') ? null : null;
      
```

## Test #104

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
(x ||= 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | undefined;
> 3 | (x ||= 'foo') ? null : null;
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
(x ??= 'foo') ? null : null;
      
```

## Test #105

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
(x || 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | undefined;
> 3 | (x || 'foo') ? null : null;
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
(x ?? 'foo') ? null : null;
      
```

## Test #106

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
(x ||= 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | undefined;
> 3 | (x ||= 'foo') ? null : null;
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
(x ??= 'foo') ? null : null;
      
```

## Test #107

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
(x || 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | undefined;
> 3 | (x || 'foo') ? null : null;
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
(x ?? 'foo') ? null : null;
      
```

## Test #108

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
(x ||= 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | undefined;
> 3 | (x ||= 'foo') ? null : null;
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
(x ??= 'foo') ? null : null;
      
```

## Test #109

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
(x || 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null | undefined;
> 3 | (x || 'foo') ? null : null;
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
(x ?? 'foo') ? null : null;
      
```

## Test #110

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
(x ||= 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null | undefined;
> 3 | (x ||= 'foo') ? null : null;
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
(x ??= 'foo') ? null : null;
      
```

## Test #111

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
(x || 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null | undefined;
> 3 | (x || 'foo') ? null : null;
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
(x ?? 'foo') ? null : null;
      
```

## Test #112

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
(x ||= 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null | undefined;
> 3 | (x ||= 'foo') ? null : null;
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
(x ??= 'foo') ? null : null;
      
```

## Test #113

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
(x || 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null | undefined;
> 3 | (x || 'foo') ? null : null;
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
(x ?? 'foo') ? null : null;
      
```

## Test #114

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
(x ||= 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null | undefined;
> 3 | (x ||= 'foo') ? null : null;
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
(x ??= 'foo') ? null : null;
      
```

## Test #115

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
(x || 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null | undefined;
> 3 | (x || 'foo') ? null : null;
    |    ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
(x ?? 'foo') ? null : null;
      
```

## Test #116

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
(x ||= 'foo') ? null : null;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null | undefined;
> 3 | (x ||= 'foo') ? null : null;
    |    ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
(x ??= 'foo') ? null : null;
      
```

## Test #117

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
if ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | if ((x || 'foo')) {}
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
if ((x ?? 'foo')) {}
      
```

## Test #118

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
if ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | if ((x ||= 'foo')) {}
    |        ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
if ((x ??= 'foo')) {}
      
```

## Test #119

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null;
if ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null;
> 3 | if ((x || 'foo')) {}
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | null;
if ((x ?? 'foo')) {}
      
```

## Test #120

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null;
if ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null;
> 3 | if ((x ||= 'foo')) {}
    |        ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | null;
if ((x ??= 'foo')) {}
      
```

## Test #121

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
if ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null;
> 3 | if ((x || 'foo')) {}
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
if ((x ?? 'foo')) {}
      
```

## Test #122

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
if ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null;
> 3 | if ((x ||= 'foo')) {}
    |        ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
if ((x ??= 'foo')) {}
      
```

## Test #123

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null;
if ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null;
> 3 | if ((x || 'foo')) {}
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | null;
if ((x ?? 'foo')) {}
      
```

## Test #124

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null;
if ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null;
> 3 | if ((x ||= 'foo')) {}
    |        ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | null;
if ((x ??= 'foo')) {}
      
```

## Test #125

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
if ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | if ((x || 'foo')) {}
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
if ((x ?? 'foo')) {}
      
```

## Test #126

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
if ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | if ((x ||= 'foo')) {}
    |        ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
if ((x ??= 'foo')) {}
      
```

## Test #127

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
if ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | undefined;
> 3 | if ((x || 'foo')) {}
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
if ((x ?? 'foo')) {}
      
```

## Test #128

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
if ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | undefined;
> 3 | if ((x ||= 'foo')) {}
    |        ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
if ((x ??= 'foo')) {}
      
```

## Test #129

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
if ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | undefined;
> 3 | if ((x || 'foo')) {}
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
if ((x ?? 'foo')) {}
      
```

## Test #130

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
if ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | undefined;
> 3 | if ((x ||= 'foo')) {}
    |        ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
if ((x ??= 'foo')) {}
      
```

## Test #131

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
if ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | undefined;
> 3 | if ((x || 'foo')) {}
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
if ((x ?? 'foo')) {}
      
```

## Test #132

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
if ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | undefined;
> 3 | if ((x ||= 'foo')) {}
    |        ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
if ((x ??= 'foo')) {}
      
```

## Test #133

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
if ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null | undefined;
> 3 | if ((x || 'foo')) {}
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
if ((x ?? 'foo')) {}
      
```

## Test #134

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
if ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null | undefined;
> 3 | if ((x ||= 'foo')) {}
    |        ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
if ((x ??= 'foo')) {}
      
```

## Test #135

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
if ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null | undefined;
> 3 | if ((x || 'foo')) {}
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
if ((x ?? 'foo')) {}
      
```

## Test #136

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
if ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null | undefined;
> 3 | if ((x ||= 'foo')) {}
    |        ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
if ((x ??= 'foo')) {}
      
```

## Test #137

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
if ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null | undefined;
> 3 | if ((x || 'foo')) {}
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
if ((x ?? 'foo')) {}
      
```

## Test #138

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
if ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null | undefined;
> 3 | if ((x ||= 'foo')) {}
    |        ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
if ((x ??= 'foo')) {}
      
```

## Test #139

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
if ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null | undefined;
> 3 | if ((x || 'foo')) {}
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
if ((x ?? 'foo')) {}
      
```

## Test #140

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
if ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null | undefined;
> 3 | if ((x ||= 'foo')) {}
    |        ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
if ((x ??= 'foo')) {}
      
```

## Test #141

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
do {} while ((x || 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | do {} while ((x || 'foo'))
    |                 ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
do {} while ((x ?? 'foo'))
      
```

## Test #142

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
do {} while ((x ||= 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | do {} while ((x ||= 'foo'))
    |                 ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
do {} while ((x ??= 'foo'))
      
```

## Test #143

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null;
do {} while ((x || 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null;
> 3 | do {} while ((x || 'foo'))
    |                 ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | null;
do {} while ((x ?? 'foo'))
      
```

## Test #144

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null;
do {} while ((x ||= 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null;
> 3 | do {} while ((x ||= 'foo'))
    |                 ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | null;
do {} while ((x ??= 'foo'))
      
```

## Test #145

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
do {} while ((x || 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null;
> 3 | do {} while ((x || 'foo'))
    |                 ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
do {} while ((x ?? 'foo'))
      
```

## Test #146

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
do {} while ((x ||= 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null;
> 3 | do {} while ((x ||= 'foo'))
    |                 ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
do {} while ((x ??= 'foo'))
      
```

## Test #147

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null;
do {} while ((x || 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null;
> 3 | do {} while ((x || 'foo'))
    |                 ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | null;
do {} while ((x ?? 'foo'))
      
```

## Test #148

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null;
do {} while ((x ||= 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null;
> 3 | do {} while ((x ||= 'foo'))
    |                 ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | null;
do {} while ((x ??= 'foo'))
      
```

## Test #149

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
do {} while ((x || 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | do {} while ((x || 'foo'))
    |                 ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
do {} while ((x ?? 'foo'))
      
```

## Test #150

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
do {} while ((x ||= 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | do {} while ((x ||= 'foo'))
    |                 ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
do {} while ((x ??= 'foo'))
      
```

## Test #151

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
do {} while ((x || 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | undefined;
> 3 | do {} while ((x || 'foo'))
    |                 ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
do {} while ((x ?? 'foo'))
      
```

## Test #152

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
do {} while ((x ||= 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | undefined;
> 3 | do {} while ((x ||= 'foo'))
    |                 ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
do {} while ((x ??= 'foo'))
      
```

## Test #153

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
do {} while ((x || 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | undefined;
> 3 | do {} while ((x || 'foo'))
    |                 ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
do {} while ((x ?? 'foo'))
      
```

## Test #154

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
do {} while ((x ||= 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | undefined;
> 3 | do {} while ((x ||= 'foo'))
    |                 ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
do {} while ((x ??= 'foo'))
      
```

## Test #155

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
do {} while ((x || 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | undefined;
> 3 | do {} while ((x || 'foo'))
    |                 ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
do {} while ((x ?? 'foo'))
      
```

## Test #156

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
do {} while ((x ||= 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | undefined;
> 3 | do {} while ((x ||= 'foo'))
    |                 ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
do {} while ((x ??= 'foo'))
      
```

## Test #157

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
do {} while ((x || 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null | undefined;
> 3 | do {} while ((x || 'foo'))
    |                 ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
do {} while ((x ?? 'foo'))
      
```

## Test #158

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
do {} while ((x ||= 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null | undefined;
> 3 | do {} while ((x ||= 'foo'))
    |                 ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
do {} while ((x ??= 'foo'))
      
```

## Test #159

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
do {} while ((x || 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null | undefined;
> 3 | do {} while ((x || 'foo'))
    |                 ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
do {} while ((x ?? 'foo'))
      
```

## Test #160

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
do {} while ((x ||= 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null | undefined;
> 3 | do {} while ((x ||= 'foo'))
    |                 ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
do {} while ((x ??= 'foo'))
      
```

## Test #161

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
do {} while ((x || 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null | undefined;
> 3 | do {} while ((x || 'foo'))
    |                 ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
do {} while ((x ?? 'foo'))
      
```

## Test #162

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
do {} while ((x ||= 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null | undefined;
> 3 | do {} while ((x ||= 'foo'))
    |                 ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
do {} while ((x ??= 'foo'))
      
```

## Test #163

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
do {} while ((x || 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null | undefined;
> 3 | do {} while ((x || 'foo'))
    |                 ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
do {} while ((x ?? 'foo'))
      
```

## Test #164

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
do {} while ((x ||= 'foo'))
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null | undefined;
> 3 | do {} while ((x ||= 'foo'))
    |                 ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
do {} while ((x ??= 'foo'))
      
```

## Test #165

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
for (;(x || 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | for (;(x || 'foo');) {}
    |          ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
for (;(x ?? 'foo');) {}
      
```

## Test #166

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
for (;(x ||= 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | for (;(x ||= 'foo');) {}
    |          ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
for (;(x ??= 'foo');) {}
      
```

## Test #167

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null;
for (;(x || 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null;
> 3 | for (;(x || 'foo');) {}
    |          ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | null;
for (;(x ?? 'foo');) {}
      
```

## Test #168

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null;
for (;(x ||= 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null;
> 3 | for (;(x ||= 'foo');) {}
    |          ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | null;
for (;(x ??= 'foo');) {}
      
```

## Test #169

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
for (;(x || 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null;
> 3 | for (;(x || 'foo');) {}
    |          ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
for (;(x ?? 'foo');) {}
      
```

## Test #170

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
for (;(x ||= 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null;
> 3 | for (;(x ||= 'foo');) {}
    |          ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
for (;(x ??= 'foo');) {}
      
```

## Test #171

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null;
for (;(x || 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null;
> 3 | for (;(x || 'foo');) {}
    |          ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | null;
for (;(x ?? 'foo');) {}
      
```

## Test #172

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null;
for (;(x ||= 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null;
> 3 | for (;(x ||= 'foo');) {}
    |          ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | null;
for (;(x ??= 'foo');) {}
      
```

## Test #173

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
for (;(x || 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | for (;(x || 'foo');) {}
    |          ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
for (;(x ?? 'foo');) {}
      
```

## Test #174

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
for (;(x ||= 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | for (;(x ||= 'foo');) {}
    |          ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
for (;(x ??= 'foo');) {}
      
```

## Test #175

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
for (;(x || 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | undefined;
> 3 | for (;(x || 'foo');) {}
    |          ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
for (;(x ?? 'foo');) {}
      
```

## Test #176

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
for (;(x ||= 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | undefined;
> 3 | for (;(x ||= 'foo');) {}
    |          ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
for (;(x ??= 'foo');) {}
      
```

## Test #177

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
for (;(x || 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | undefined;
> 3 | for (;(x || 'foo');) {}
    |          ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
for (;(x ?? 'foo');) {}
      
```

## Test #178

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
for (;(x ||= 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | undefined;
> 3 | for (;(x ||= 'foo');) {}
    |          ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
for (;(x ??= 'foo');) {}
      
```

## Test #179

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
for (;(x || 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | undefined;
> 3 | for (;(x || 'foo');) {}
    |          ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
for (;(x ?? 'foo');) {}
      
```

## Test #180

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
for (;(x ||= 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | undefined;
> 3 | for (;(x ||= 'foo');) {}
    |          ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
for (;(x ??= 'foo');) {}
      
```

## Test #181

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
for (;(x || 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null | undefined;
> 3 | for (;(x || 'foo');) {}
    |          ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
for (;(x ?? 'foo');) {}
      
```

## Test #182

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
for (;(x ||= 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null | undefined;
> 3 | for (;(x ||= 'foo');) {}
    |          ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
for (;(x ??= 'foo');) {}
      
```

## Test #183

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
for (;(x || 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null | undefined;
> 3 | for (;(x || 'foo');) {}
    |          ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
for (;(x ?? 'foo');) {}
      
```

## Test #184

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
for (;(x ||= 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null | undefined;
> 3 | for (;(x ||= 'foo');) {}
    |          ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
for (;(x ??= 'foo');) {}
      
```

## Test #185

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
for (;(x || 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null | undefined;
> 3 | for (;(x || 'foo');) {}
    |          ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
for (;(x ?? 'foo');) {}
      
```

## Test #186

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
for (;(x ||= 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null | undefined;
> 3 | for (;(x ||= 'foo');) {}
    |          ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
for (;(x ??= 'foo');) {}
      
```

## Test #187

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
for (;(x || 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null | undefined;
> 3 | for (;(x || 'foo');) {}
    |          ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
for (;(x ?? 'foo');) {}
      
```

## Test #188

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
for (;(x ||= 'foo');) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null | undefined;
> 3 | for (;(x ||= 'foo');) {}
    |          ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
for (;(x ??= 'foo');) {}
      
```

## Test #189

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
while ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | while ((x || 'foo')) {}
    |           ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
while ((x ?? 'foo')) {}
      
```

## Test #190

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
while ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | while ((x ||= 'foo')) {}
    |           ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
while ((x ??= 'foo')) {}
      
```

## Test #191

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null;
while ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null;
> 3 | while ((x || 'foo')) {}
    |           ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | null;
while ((x ?? 'foo')) {}
      
```

## Test #192

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null;
while ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null;
> 3 | while ((x ||= 'foo')) {}
    |           ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | null;
while ((x ??= 'foo')) {}
      
```

## Test #193

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
while ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null;
> 3 | while ((x || 'foo')) {}
    |           ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
while ((x ?? 'foo')) {}
      
```

## Test #194

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
while ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null;
> 3 | while ((x ||= 'foo')) {}
    |           ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
while ((x ??= 'foo')) {}
      
```

## Test #195

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null;
while ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null;
> 3 | while ((x || 'foo')) {}
    |           ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | null;
while ((x ?? 'foo')) {}
      
```

## Test #196

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null;
while ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null;
> 3 | while ((x ||= 'foo')) {}
    |           ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | null;
while ((x ??= 'foo')) {}
      
```

## Test #197

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
while ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | while ((x || 'foo')) {}
    |           ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
while ((x ?? 'foo')) {}
      
```

## Test #198

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
while ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | while ((x ||= 'foo')) {}
    |           ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
while ((x ??= 'foo')) {}
      
```

## Test #199

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
while ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | undefined;
> 3 | while ((x || 'foo')) {}
    |           ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
while ((x ?? 'foo')) {}
      
```

## Test #200

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
while ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | undefined;
> 3 | while ((x ||= 'foo')) {}
    |           ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
while ((x ??= 'foo')) {}
      
```

## Test #201

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
while ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | undefined;
> 3 | while ((x || 'foo')) {}
    |           ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
while ((x ?? 'foo')) {}
      
```

## Test #202

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
while ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | undefined;
> 3 | while ((x ||= 'foo')) {}
    |           ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
while ((x ??= 'foo')) {}
      
```

## Test #203

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
while ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | undefined;
> 3 | while ((x || 'foo')) {}
    |           ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
while ((x ?? 'foo')) {}
      
```

## Test #204

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
while ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | undefined;
> 3 | while ((x ||= 'foo')) {}
    |           ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
while ((x ??= 'foo')) {}
      
```

## Test #205

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
while ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null | undefined;
> 3 | while ((x || 'foo')) {}
    |           ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
while ((x ?? 'foo')) {}
      
```

## Test #206

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
while ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null | undefined;
> 3 | while ((x ||= 'foo')) {}
    |           ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
while ((x ??= 'foo')) {}
      
```

## Test #207

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
while ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null | undefined;
> 3 | while ((x || 'foo')) {}
    |           ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
while ((x ?? 'foo')) {}
      
```

## Test #208

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
while ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null | undefined;
> 3 | while ((x ||= 'foo')) {}
    |           ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
while ((x ??= 'foo')) {}
      
```

## Test #209

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
while ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null | undefined;
> 3 | while ((x || 'foo')) {}
    |           ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
while ((x ?? 'foo')) {}
      
```

## Test #210

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
while ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null | undefined;
> 3 | while ((x ||= 'foo')) {}
    |           ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
while ((x ??= 'foo')) {}
      
```

## Test #211

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
while ((x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null | undefined;
> 3 | while ((x || 'foo')) {}
    |           ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
while ((x ?? 'foo')) {}
      
```

## Test #212

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
while ((x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null | undefined;
> 3 | while ((x ||= 'foo')) {}
    |           ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
while ((x ??= 'foo')) {}
      
```

## Test #213

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string | null;
declare let c: string | null;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null;
  3 | declare let b: string | null;
  4 | declare let c: string | null;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string | null;
declare let c: string | null;
a ?? b && c;
      
```

## Test #214

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string | null;
declare let c: string | null;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null;
  3 | declare let b: string | null;
  4 | declare let c: string | null;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string | null;
declare let c: string | null;
a ?? b && c;
      
```

## Test #215

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number | null;
declare let c: number | null;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null;
  3 | declare let b: number | null;
  4 | declare let c: number | null;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number | null;
declare let c: number | null;
a ?? b && c;
      
```

## Test #216

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number | null;
declare let c: number | null;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null;
  3 | declare let b: number | null;
  4 | declare let c: number | null;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number | null;
declare let c: number | null;
a ?? b && c;
      
```

## Test #217

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean | null;
declare let c: boolean | null;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null;
  3 | declare let b: boolean | null;
  4 | declare let c: boolean | null;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean | null;
declare let c: boolean | null;
a ?? b && c;
      
```

## Test #218

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean | null;
declare let c: boolean | null;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null;
  3 | declare let b: boolean | null;
  4 | declare let c: boolean | null;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean | null;
declare let c: boolean | null;
a ?? b && c;
      
```

## Test #219

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object | null;
declare let c: object | null;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null;
  3 | declare let b: object | null;
  4 | declare let c: object | null;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object | null;
declare let c: object | null;
a ?? b && c;
      
```

## Test #220

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object | null;
declare let c: object | null;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null;
  3 | declare let b: object | null;
  4 | declare let c: object | null;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object | null;
declare let c: object | null;
a ?? b && c;
      
```

## Test #221

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string | undefined;
declare let c: string | undefined;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | undefined;
  3 | declare let b: string | undefined;
  4 | declare let c: string | undefined;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string | undefined;
declare let c: string | undefined;
a ?? b && c;
      
```

## Test #222

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string | undefined;
declare let c: string | undefined;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | undefined;
  3 | declare let b: string | undefined;
  4 | declare let c: string | undefined;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string | undefined;
declare let c: string | undefined;
a ?? b && c;
      
```

## Test #223

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number | undefined;
declare let c: number | undefined;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | undefined;
  3 | declare let b: number | undefined;
  4 | declare let c: number | undefined;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number | undefined;
declare let c: number | undefined;
a ?? b && c;
      
```

## Test #224

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number | undefined;
declare let c: number | undefined;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | undefined;
  3 | declare let b: number | undefined;
  4 | declare let c: number | undefined;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number | undefined;
declare let c: number | undefined;
a ?? b && c;
      
```

## Test #225

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean | undefined;
declare let c: boolean | undefined;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | undefined;
  3 | declare let b: boolean | undefined;
  4 | declare let c: boolean | undefined;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean | undefined;
declare let c: boolean | undefined;
a ?? b && c;
      
```

## Test #226

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean | undefined;
declare let c: boolean | undefined;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | undefined;
  3 | declare let b: boolean | undefined;
  4 | declare let c: boolean | undefined;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean | undefined;
declare let c: boolean | undefined;
a ?? b && c;
      
```

## Test #227

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object | undefined;
declare let c: object | undefined;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | undefined;
  3 | declare let b: object | undefined;
  4 | declare let c: object | undefined;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object | undefined;
declare let c: object | undefined;
a ?? b && c;
      
```

## Test #228

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object | undefined;
declare let c: object | undefined;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | undefined;
  3 | declare let b: object | undefined;
  4 | declare let c: object | undefined;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object | undefined;
declare let c: object | undefined;
a ?? b && c;
      
```

## Test #229

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string | null | undefined;
declare let c: string | null | undefined;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null | undefined;
  3 | declare let b: string | null | undefined;
  4 | declare let c: string | null | undefined;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string | null | undefined;
declare let c: string | null | undefined;
a ?? b && c;
      
```

## Test #230

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string | null | undefined;
declare let c: string | null | undefined;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null | undefined;
  3 | declare let b: string | null | undefined;
  4 | declare let c: string | null | undefined;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string | null | undefined;
declare let c: string | null | undefined;
a ?? b && c;
      
```

## Test #231

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number | null | undefined;
declare let c: number | null | undefined;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null | undefined;
  3 | declare let b: number | null | undefined;
  4 | declare let c: number | null | undefined;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number | null | undefined;
declare let c: number | null | undefined;
a ?? b && c;
      
```

## Test #232

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number | null | undefined;
declare let c: number | null | undefined;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null | undefined;
  3 | declare let b: number | null | undefined;
  4 | declare let c: number | null | undefined;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number | null | undefined;
declare let c: number | null | undefined;
a ?? b && c;
      
```

## Test #233

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean | null | undefined;
declare let c: boolean | null | undefined;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null | undefined;
  3 | declare let b: boolean | null | undefined;
  4 | declare let c: boolean | null | undefined;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean | null | undefined;
declare let c: boolean | null | undefined;
a ?? b && c;
      
```

## Test #234

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean | null | undefined;
declare let c: boolean | null | undefined;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null | undefined;
  3 | declare let b: boolean | null | undefined;
  4 | declare let c: boolean | null | undefined;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean | null | undefined;
declare let c: boolean | null | undefined;
a ?? b && c;
      
```

## Test #235

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object | null | undefined;
declare let c: object | null | undefined;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null | undefined;
  3 | declare let b: object | null | undefined;
  4 | declare let c: object | null | undefined;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object | null | undefined;
declare let c: object | null | undefined;
a ?? b && c;
      
```

## Test #236

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object | null | undefined;
declare let c: object | null | undefined;
a || b && c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null | undefined;
  3 | declare let b: object | null | undefined;
  4 | declare let c: object | null | undefined;
> 5 | a || b && c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object | null | undefined;
declare let c: object | null | undefined;
a ?? b && c;
      
```

## Test #237

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string | null;
declare let c: string | null;
declare let d: string | null;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null;
  3 | declare let b: string | null;
  4 | declare let c: string | null;
  5 | declare let d: string | null;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string | null;
declare let c: string | null;
declare let d: string | null;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null;
  3 | declare let b: string | null;
  4 | declare let c: string | null;
  5 | declare let d: string | null;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string | null;
declare let c: string | null;
declare let d: string | null;
a || b ?? c && d;
      
```

## Test #238

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string | null;
declare let c: string | null;
declare let d: string | null;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null;
  3 | declare let b: string | null;
  4 | declare let c: string | null;
  5 | declare let d: string | null;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string | null;
declare let c: string | null;
declare let d: string | null;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null;
  3 | declare let b: string | null;
  4 | declare let c: string | null;
  5 | declare let d: string | null;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string | null;
declare let c: string | null;
declare let d: string | null;
a || b ?? c && d;
      
```

## Test #239

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number | null;
declare let c: number | null;
declare let d: number | null;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null;
  3 | declare let b: number | null;
  4 | declare let c: number | null;
  5 | declare let d: number | null;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number | null;
declare let c: number | null;
declare let d: number | null;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null;
  3 | declare let b: number | null;
  4 | declare let c: number | null;
  5 | declare let d: number | null;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number | null;
declare let c: number | null;
declare let d: number | null;
a || b ?? c && d;
      
```

## Test #240

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number | null;
declare let c: number | null;
declare let d: number | null;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null;
  3 | declare let b: number | null;
  4 | declare let c: number | null;
  5 | declare let d: number | null;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number | null;
declare let c: number | null;
declare let d: number | null;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null;
  3 | declare let b: number | null;
  4 | declare let c: number | null;
  5 | declare let d: number | null;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number | null;
declare let c: number | null;
declare let d: number | null;
a || b ?? c && d;
      
```

## Test #241

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean | null;
declare let c: boolean | null;
declare let d: boolean | null;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null;
  3 | declare let b: boolean | null;
  4 | declare let c: boolean | null;
  5 | declare let d: boolean | null;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean | null;
declare let c: boolean | null;
declare let d: boolean | null;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null;
  3 | declare let b: boolean | null;
  4 | declare let c: boolean | null;
  5 | declare let d: boolean | null;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean | null;
declare let c: boolean | null;
declare let d: boolean | null;
a || b ?? c && d;
      
```

## Test #242

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean | null;
declare let c: boolean | null;
declare let d: boolean | null;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null;
  3 | declare let b: boolean | null;
  4 | declare let c: boolean | null;
  5 | declare let d: boolean | null;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean | null;
declare let c: boolean | null;
declare let d: boolean | null;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null;
  3 | declare let b: boolean | null;
  4 | declare let c: boolean | null;
  5 | declare let d: boolean | null;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean | null;
declare let c: boolean | null;
declare let d: boolean | null;
a || b ?? c && d;
      
```

## Test #243

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object | null;
declare let c: object | null;
declare let d: object | null;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null;
  3 | declare let b: object | null;
  4 | declare let c: object | null;
  5 | declare let d: object | null;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object | null;
declare let c: object | null;
declare let d: object | null;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null;
  3 | declare let b: object | null;
  4 | declare let c: object | null;
  5 | declare let d: object | null;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object | null;
declare let c: object | null;
declare let d: object | null;
a || b ?? c && d;
      
```

## Test #244

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object | null;
declare let c: object | null;
declare let d: object | null;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null;
  3 | declare let b: object | null;
  4 | declare let c: object | null;
  5 | declare let d: object | null;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object | null;
declare let c: object | null;
declare let d: object | null;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null;
  3 | declare let b: object | null;
  4 | declare let c: object | null;
  5 | declare let d: object | null;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object | null;
declare let c: object | null;
declare let d: object | null;
a || b ?? c && d;
      
```

## Test #245

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string | undefined;
declare let c: string | undefined;
declare let d: string | undefined;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | undefined;
  3 | declare let b: string | undefined;
  4 | declare let c: string | undefined;
  5 | declare let d: string | undefined;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string | undefined;
declare let c: string | undefined;
declare let d: string | undefined;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | undefined;
  3 | declare let b: string | undefined;
  4 | declare let c: string | undefined;
  5 | declare let d: string | undefined;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string | undefined;
declare let c: string | undefined;
declare let d: string | undefined;
a || b ?? c && d;
      
```

## Test #246

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string | undefined;
declare let c: string | undefined;
declare let d: string | undefined;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | undefined;
  3 | declare let b: string | undefined;
  4 | declare let c: string | undefined;
  5 | declare let d: string | undefined;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string | undefined;
declare let c: string | undefined;
declare let d: string | undefined;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | undefined;
  3 | declare let b: string | undefined;
  4 | declare let c: string | undefined;
  5 | declare let d: string | undefined;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string | undefined;
declare let c: string | undefined;
declare let d: string | undefined;
a || b ?? c && d;
      
```

## Test #247

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number | undefined;
declare let c: number | undefined;
declare let d: number | undefined;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | undefined;
  3 | declare let b: number | undefined;
  4 | declare let c: number | undefined;
  5 | declare let d: number | undefined;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number | undefined;
declare let c: number | undefined;
declare let d: number | undefined;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | undefined;
  3 | declare let b: number | undefined;
  4 | declare let c: number | undefined;
  5 | declare let d: number | undefined;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number | undefined;
declare let c: number | undefined;
declare let d: number | undefined;
a || b ?? c && d;
      
```

## Test #248

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number | undefined;
declare let c: number | undefined;
declare let d: number | undefined;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | undefined;
  3 | declare let b: number | undefined;
  4 | declare let c: number | undefined;
  5 | declare let d: number | undefined;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number | undefined;
declare let c: number | undefined;
declare let d: number | undefined;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | undefined;
  3 | declare let b: number | undefined;
  4 | declare let c: number | undefined;
  5 | declare let d: number | undefined;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number | undefined;
declare let c: number | undefined;
declare let d: number | undefined;
a || b ?? c && d;
      
```

## Test #249

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean | undefined;
declare let c: boolean | undefined;
declare let d: boolean | undefined;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | undefined;
  3 | declare let b: boolean | undefined;
  4 | declare let c: boolean | undefined;
  5 | declare let d: boolean | undefined;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean | undefined;
declare let c: boolean | undefined;
declare let d: boolean | undefined;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | undefined;
  3 | declare let b: boolean | undefined;
  4 | declare let c: boolean | undefined;
  5 | declare let d: boolean | undefined;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean | undefined;
declare let c: boolean | undefined;
declare let d: boolean | undefined;
a || b ?? c && d;
      
```

## Test #250

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean | undefined;
declare let c: boolean | undefined;
declare let d: boolean | undefined;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | undefined;
  3 | declare let b: boolean | undefined;
  4 | declare let c: boolean | undefined;
  5 | declare let d: boolean | undefined;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean | undefined;
declare let c: boolean | undefined;
declare let d: boolean | undefined;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | undefined;
  3 | declare let b: boolean | undefined;
  4 | declare let c: boolean | undefined;
  5 | declare let d: boolean | undefined;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean | undefined;
declare let c: boolean | undefined;
declare let d: boolean | undefined;
a || b ?? c && d;
      
```

## Test #251

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object | undefined;
declare let c: object | undefined;
declare let d: object | undefined;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | undefined;
  3 | declare let b: object | undefined;
  4 | declare let c: object | undefined;
  5 | declare let d: object | undefined;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object | undefined;
declare let c: object | undefined;
declare let d: object | undefined;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | undefined;
  3 | declare let b: object | undefined;
  4 | declare let c: object | undefined;
  5 | declare let d: object | undefined;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object | undefined;
declare let c: object | undefined;
declare let d: object | undefined;
a || b ?? c && d;
      
```

## Test #252

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object | undefined;
declare let c: object | undefined;
declare let d: object | undefined;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | undefined;
  3 | declare let b: object | undefined;
  4 | declare let c: object | undefined;
  5 | declare let d: object | undefined;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object | undefined;
declare let c: object | undefined;
declare let d: object | undefined;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | undefined;
  3 | declare let b: object | undefined;
  4 | declare let c: object | undefined;
  5 | declare let d: object | undefined;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object | undefined;
declare let c: object | undefined;
declare let d: object | undefined;
a || b ?? c && d;
      
```

## Test #253

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string | null | undefined;
declare let c: string | null | undefined;
declare let d: string | null | undefined;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null | undefined;
  3 | declare let b: string | null | undefined;
  4 | declare let c: string | null | undefined;
  5 | declare let d: string | null | undefined;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string | null | undefined;
declare let c: string | null | undefined;
declare let d: string | null | undefined;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null | undefined;
  3 | declare let b: string | null | undefined;
  4 | declare let c: string | null | undefined;
  5 | declare let d: string | null | undefined;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string | null | undefined;
declare let c: string | null | undefined;
declare let d: string | null | undefined;
a || b ?? c && d;
      
```

## Test #254

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string | null | undefined;
declare let c: string | null | undefined;
declare let d: string | null | undefined;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null | undefined;
  3 | declare let b: string | null | undefined;
  4 | declare let c: string | null | undefined;
  5 | declare let d: string | null | undefined;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string | null | undefined;
declare let c: string | null | undefined;
declare let d: string | null | undefined;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null | undefined;
  3 | declare let b: string | null | undefined;
  4 | declare let c: string | null | undefined;
  5 | declare let d: string | null | undefined;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string | null | undefined;
declare let c: string | null | undefined;
declare let d: string | null | undefined;
a || b ?? c && d;
      
```

## Test #255

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number | null | undefined;
declare let c: number | null | undefined;
declare let d: number | null | undefined;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null | undefined;
  3 | declare let b: number | null | undefined;
  4 | declare let c: number | null | undefined;
  5 | declare let d: number | null | undefined;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number | null | undefined;
declare let c: number | null | undefined;
declare let d: number | null | undefined;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null | undefined;
  3 | declare let b: number | null | undefined;
  4 | declare let c: number | null | undefined;
  5 | declare let d: number | null | undefined;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number | null | undefined;
declare let c: number | null | undefined;
declare let d: number | null | undefined;
a || b ?? c && d;
      
```

## Test #256

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number | null | undefined;
declare let c: number | null | undefined;
declare let d: number | null | undefined;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null | undefined;
  3 | declare let b: number | null | undefined;
  4 | declare let c: number | null | undefined;
  5 | declare let d: number | null | undefined;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number | null | undefined;
declare let c: number | null | undefined;
declare let d: number | null | undefined;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null | undefined;
  3 | declare let b: number | null | undefined;
  4 | declare let c: number | null | undefined;
  5 | declare let d: number | null | undefined;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number | null | undefined;
declare let c: number | null | undefined;
declare let d: number | null | undefined;
a || b ?? c && d;
      
```

## Test #257

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean | null | undefined;
declare let c: boolean | null | undefined;
declare let d: boolean | null | undefined;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null | undefined;
  3 | declare let b: boolean | null | undefined;
  4 | declare let c: boolean | null | undefined;
  5 | declare let d: boolean | null | undefined;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean | null | undefined;
declare let c: boolean | null | undefined;
declare let d: boolean | null | undefined;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null | undefined;
  3 | declare let b: boolean | null | undefined;
  4 | declare let c: boolean | null | undefined;
  5 | declare let d: boolean | null | undefined;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean | null | undefined;
declare let c: boolean | null | undefined;
declare let d: boolean | null | undefined;
a || b ?? c && d;
      
```

## Test #258

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean | null | undefined;
declare let c: boolean | null | undefined;
declare let d: boolean | null | undefined;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null | undefined;
  3 | declare let b: boolean | null | undefined;
  4 | declare let c: boolean | null | undefined;
  5 | declare let d: boolean | null | undefined;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean | null | undefined;
declare let c: boolean | null | undefined;
declare let d: boolean | null | undefined;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null | undefined;
  3 | declare let b: boolean | null | undefined;
  4 | declare let c: boolean | null | undefined;
  5 | declare let d: boolean | null | undefined;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean | null | undefined;
declare let c: boolean | null | undefined;
declare let d: boolean | null | undefined;
a || b ?? c && d;
      
```

## Test #259

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object | null | undefined;
declare let c: object | null | undefined;
declare let d: object | null | undefined;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null | undefined;
  3 | declare let b: object | null | undefined;
  4 | declare let c: object | null | undefined;
  5 | declare let d: object | null | undefined;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object | null | undefined;
declare let c: object | null | undefined;
declare let d: object | null | undefined;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null | undefined;
  3 | declare let b: object | null | undefined;
  4 | declare let c: object | null | undefined;
  5 | declare let d: object | null | undefined;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object | null | undefined;
declare let c: object | null | undefined;
declare let d: object | null | undefined;
a || b ?? c && d;
      
```

## Test #260

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object | null | undefined;
declare let c: object | null | undefined;
declare let d: object | null | undefined;
a || b || c && d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null | undefined;
  3 | declare let b: object | null | undefined;
  4 | declare let c: object | null | undefined;
  5 | declare let d: object | null | undefined;
> 6 | a || b || c && d;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object | null | undefined;
declare let c: object | null | undefined;
declare let d: object | null | undefined;
(a ?? b) || c && d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null | undefined;
  3 | declare let b: object | null | undefined;
  4 | declare let c: object | null | undefined;
  5 | declare let d: object | null | undefined;
> 6 | a || b || c && d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object | null | undefined;
declare let c: object | null | undefined;
declare let d: object | null | undefined;
a || b ?? c && d;
      
```

## Test #261

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string | null;
declare let c: string | null;
declare let d: string | null;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null;
  3 | declare let b: string | null;
  4 | declare let c: string | null;
  5 | declare let d: string | null;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string | null;
declare let c: string | null;
declare let d: string | null;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null;
  3 | declare let b: string | null;
  4 | declare let c: string | null;
  5 | declare let d: string | null;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string | null;
declare let c: string | null;
declare let d: string | null;
a && b || c ?? d;
      
```

## Test #262

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string | null;
declare let c: string | null;
declare let d: string | null;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null;
  3 | declare let b: string | null;
  4 | declare let c: string | null;
  5 | declare let d: string | null;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string | null;
declare let c: string | null;
declare let d: string | null;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null;
  3 | declare let b: string | null;
  4 | declare let c: string | null;
  5 | declare let d: string | null;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string | null;
declare let c: string | null;
declare let d: string | null;
a && b || c ?? d;
      
```

## Test #263

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number | null;
declare let c: number | null;
declare let d: number | null;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null;
  3 | declare let b: number | null;
  4 | declare let c: number | null;
  5 | declare let d: number | null;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number | null;
declare let c: number | null;
declare let d: number | null;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null;
  3 | declare let b: number | null;
  4 | declare let c: number | null;
  5 | declare let d: number | null;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number | null;
declare let c: number | null;
declare let d: number | null;
a && b || c ?? d;
      
```

## Test #264

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number | null;
declare let c: number | null;
declare let d: number | null;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null;
  3 | declare let b: number | null;
  4 | declare let c: number | null;
  5 | declare let d: number | null;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number | null;
declare let c: number | null;
declare let d: number | null;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null;
  3 | declare let b: number | null;
  4 | declare let c: number | null;
  5 | declare let d: number | null;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number | null;
declare let c: number | null;
declare let d: number | null;
a && b || c ?? d;
      
```

## Test #265

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean | null;
declare let c: boolean | null;
declare let d: boolean | null;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null;
  3 | declare let b: boolean | null;
  4 | declare let c: boolean | null;
  5 | declare let d: boolean | null;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean | null;
declare let c: boolean | null;
declare let d: boolean | null;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null;
  3 | declare let b: boolean | null;
  4 | declare let c: boolean | null;
  5 | declare let d: boolean | null;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean | null;
declare let c: boolean | null;
declare let d: boolean | null;
a && b || c ?? d;
      
```

## Test #266

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean | null;
declare let c: boolean | null;
declare let d: boolean | null;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null;
  3 | declare let b: boolean | null;
  4 | declare let c: boolean | null;
  5 | declare let d: boolean | null;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean | null;
declare let c: boolean | null;
declare let d: boolean | null;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null;
  3 | declare let b: boolean | null;
  4 | declare let c: boolean | null;
  5 | declare let d: boolean | null;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean | null;
declare let c: boolean | null;
declare let d: boolean | null;
a && b || c ?? d;
      
```

## Test #267

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object | null;
declare let c: object | null;
declare let d: object | null;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null;
  3 | declare let b: object | null;
  4 | declare let c: object | null;
  5 | declare let d: object | null;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object | null;
declare let c: object | null;
declare let d: object | null;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null;
  3 | declare let b: object | null;
  4 | declare let c: object | null;
  5 | declare let d: object | null;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object | null;
declare let c: object | null;
declare let d: object | null;
a && b || c ?? d;
      
```

## Test #268

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object | null;
declare let c: object | null;
declare let d: object | null;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null;
  3 | declare let b: object | null;
  4 | declare let c: object | null;
  5 | declare let d: object | null;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object | null;
declare let c: object | null;
declare let d: object | null;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null;
  3 | declare let b: object | null;
  4 | declare let c: object | null;
  5 | declare let d: object | null;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object | null;
declare let c: object | null;
declare let d: object | null;
a && b || c ?? d;
      
```

## Test #269

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string | undefined;
declare let c: string | undefined;
declare let d: string | undefined;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | undefined;
  3 | declare let b: string | undefined;
  4 | declare let c: string | undefined;
  5 | declare let d: string | undefined;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string | undefined;
declare let c: string | undefined;
declare let d: string | undefined;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | undefined;
  3 | declare let b: string | undefined;
  4 | declare let c: string | undefined;
  5 | declare let d: string | undefined;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string | undefined;
declare let c: string | undefined;
declare let d: string | undefined;
a && b || c ?? d;
      
```

## Test #270

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string | undefined;
declare let c: string | undefined;
declare let d: string | undefined;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | undefined;
  3 | declare let b: string | undefined;
  4 | declare let c: string | undefined;
  5 | declare let d: string | undefined;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string | undefined;
declare let c: string | undefined;
declare let d: string | undefined;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | undefined;
  3 | declare let b: string | undefined;
  4 | declare let c: string | undefined;
  5 | declare let d: string | undefined;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string | undefined;
declare let c: string | undefined;
declare let d: string | undefined;
a && b || c ?? d;
      
```

## Test #271

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number | undefined;
declare let c: number | undefined;
declare let d: number | undefined;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | undefined;
  3 | declare let b: number | undefined;
  4 | declare let c: number | undefined;
  5 | declare let d: number | undefined;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number | undefined;
declare let c: number | undefined;
declare let d: number | undefined;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | undefined;
  3 | declare let b: number | undefined;
  4 | declare let c: number | undefined;
  5 | declare let d: number | undefined;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number | undefined;
declare let c: number | undefined;
declare let d: number | undefined;
a && b || c ?? d;
      
```

## Test #272

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number | undefined;
declare let c: number | undefined;
declare let d: number | undefined;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | undefined;
  3 | declare let b: number | undefined;
  4 | declare let c: number | undefined;
  5 | declare let d: number | undefined;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number | undefined;
declare let c: number | undefined;
declare let d: number | undefined;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | undefined;
  3 | declare let b: number | undefined;
  4 | declare let c: number | undefined;
  5 | declare let d: number | undefined;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number | undefined;
declare let c: number | undefined;
declare let d: number | undefined;
a && b || c ?? d;
      
```

## Test #273

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean | undefined;
declare let c: boolean | undefined;
declare let d: boolean | undefined;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | undefined;
  3 | declare let b: boolean | undefined;
  4 | declare let c: boolean | undefined;
  5 | declare let d: boolean | undefined;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean | undefined;
declare let c: boolean | undefined;
declare let d: boolean | undefined;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | undefined;
  3 | declare let b: boolean | undefined;
  4 | declare let c: boolean | undefined;
  5 | declare let d: boolean | undefined;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean | undefined;
declare let c: boolean | undefined;
declare let d: boolean | undefined;
a && b || c ?? d;
      
```

## Test #274

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean | undefined;
declare let c: boolean | undefined;
declare let d: boolean | undefined;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | undefined;
  3 | declare let b: boolean | undefined;
  4 | declare let c: boolean | undefined;
  5 | declare let d: boolean | undefined;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean | undefined;
declare let c: boolean | undefined;
declare let d: boolean | undefined;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | undefined;
  3 | declare let b: boolean | undefined;
  4 | declare let c: boolean | undefined;
  5 | declare let d: boolean | undefined;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean | undefined;
declare let c: boolean | undefined;
declare let d: boolean | undefined;
a && b || c ?? d;
      
```

## Test #275

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object | undefined;
declare let c: object | undefined;
declare let d: object | undefined;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | undefined;
  3 | declare let b: object | undefined;
  4 | declare let c: object | undefined;
  5 | declare let d: object | undefined;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object | undefined;
declare let c: object | undefined;
declare let d: object | undefined;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | undefined;
  3 | declare let b: object | undefined;
  4 | declare let c: object | undefined;
  5 | declare let d: object | undefined;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object | undefined;
declare let c: object | undefined;
declare let d: object | undefined;
a && b || c ?? d;
      
```

## Test #276

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object | undefined;
declare let c: object | undefined;
declare let d: object | undefined;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | undefined;
  3 | declare let b: object | undefined;
  4 | declare let c: object | undefined;
  5 | declare let d: object | undefined;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object | undefined;
declare let c: object | undefined;
declare let d: object | undefined;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | undefined;
  3 | declare let b: object | undefined;
  4 | declare let c: object | undefined;
  5 | declare let d: object | undefined;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object | undefined;
declare let c: object | undefined;
declare let d: object | undefined;
a && b || c ?? d;
      
```

## Test #277

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string | null | undefined;
declare let c: string | null | undefined;
declare let d: string | null | undefined;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null | undefined;
  3 | declare let b: string | null | undefined;
  4 | declare let c: string | null | undefined;
  5 | declare let d: string | null | undefined;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string | null | undefined;
declare let c: string | null | undefined;
declare let d: string | null | undefined;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null | undefined;
  3 | declare let b: string | null | undefined;
  4 | declare let c: string | null | undefined;
  5 | declare let d: string | null | undefined;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string | null | undefined;
declare let c: string | null | undefined;
declare let d: string | null | undefined;
a && b || c ?? d;
      
```

## Test #278

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string | null | undefined;
declare let c: string | null | undefined;
declare let d: string | null | undefined;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null | undefined;
  3 | declare let b: string | null | undefined;
  4 | declare let c: string | null | undefined;
  5 | declare let d: string | null | undefined;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string | null | undefined;
declare let c: string | null | undefined;
declare let d: string | null | undefined;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null | undefined;
  3 | declare let b: string | null | undefined;
  4 | declare let c: string | null | undefined;
  5 | declare let d: string | null | undefined;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string | null | undefined;
declare let c: string | null | undefined;
declare let d: string | null | undefined;
a && b || c ?? d;
      
```

## Test #279

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number | null | undefined;
declare let c: number | null | undefined;
declare let d: number | null | undefined;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null | undefined;
  3 | declare let b: number | null | undefined;
  4 | declare let c: number | null | undefined;
  5 | declare let d: number | null | undefined;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number | null | undefined;
declare let c: number | null | undefined;
declare let d: number | null | undefined;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null | undefined;
  3 | declare let b: number | null | undefined;
  4 | declare let c: number | null | undefined;
  5 | declare let d: number | null | undefined;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number | null | undefined;
declare let c: number | null | undefined;
declare let d: number | null | undefined;
a && b || c ?? d;
      
```

## Test #280

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number | null | undefined;
declare let c: number | null | undefined;
declare let d: number | null | undefined;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null | undefined;
  3 | declare let b: number | null | undefined;
  4 | declare let c: number | null | undefined;
  5 | declare let d: number | null | undefined;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number | null | undefined;
declare let c: number | null | undefined;
declare let d: number | null | undefined;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null | undefined;
  3 | declare let b: number | null | undefined;
  4 | declare let c: number | null | undefined;
  5 | declare let d: number | null | undefined;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number | null | undefined;
declare let c: number | null | undefined;
declare let d: number | null | undefined;
a && b || c ?? d;
      
```

## Test #281

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean | null | undefined;
declare let c: boolean | null | undefined;
declare let d: boolean | null | undefined;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null | undefined;
  3 | declare let b: boolean | null | undefined;
  4 | declare let c: boolean | null | undefined;
  5 | declare let d: boolean | null | undefined;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean | null | undefined;
declare let c: boolean | null | undefined;
declare let d: boolean | null | undefined;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null | undefined;
  3 | declare let b: boolean | null | undefined;
  4 | declare let c: boolean | null | undefined;
  5 | declare let d: boolean | null | undefined;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean | null | undefined;
declare let c: boolean | null | undefined;
declare let d: boolean | null | undefined;
a && b || c ?? d;
      
```

## Test #282

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean | null | undefined;
declare let c: boolean | null | undefined;
declare let d: boolean | null | undefined;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null | undefined;
  3 | declare let b: boolean | null | undefined;
  4 | declare let c: boolean | null | undefined;
  5 | declare let d: boolean | null | undefined;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean | null | undefined;
declare let c: boolean | null | undefined;
declare let d: boolean | null | undefined;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null | undefined;
  3 | declare let b: boolean | null | undefined;
  4 | declare let c: boolean | null | undefined;
  5 | declare let d: boolean | null | undefined;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean | null | undefined;
declare let c: boolean | null | undefined;
declare let d: boolean | null | undefined;
a && b || c ?? d;
      
```

## Test #283

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object | null | undefined;
declare let c: object | null | undefined;
declare let d: object | null | undefined;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null | undefined;
  3 | declare let b: object | null | undefined;
  4 | declare let c: object | null | undefined;
  5 | declare let d: object | null | undefined;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object | null | undefined;
declare let c: object | null | undefined;
declare let d: object | null | undefined;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null | undefined;
  3 | declare let b: object | null | undefined;
  4 | declare let c: object | null | undefined;
  5 | declare let d: object | null | undefined;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object | null | undefined;
declare let c: object | null | undefined;
declare let d: object | null | undefined;
a && b || c ?? d;
      
```

## Test #284

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object | null | undefined;
declare let c: object | null | undefined;
declare let d: object | null | undefined;
a && b || c || d;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null | undefined;
  3 | declare let b: object | null | undefined;
  4 | declare let c: object | null | undefined;
  5 | declare let d: object | null | undefined;
> 6 | a && b || c || d;
    |        ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object | null | undefined;
declare let c: object | null | undefined;
declare let d: object | null | undefined;
a && (b ?? c) || d;
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null | undefined;
  3 | declare let b: object | null | undefined;
  4 | declare let c: object | null | undefined;
  5 | declare let d: object | null | undefined;
> 6 | a && b || c || d;
    |             ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  7 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object | null | undefined;
declare let c: object | null | undefined;
declare let d: object | null | undefined;
a && b || c ?? d;
      
```

## Test #285

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
if (() => (x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | if (() => (x || 'foo')) {}
    |              ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
if (() => (x ?? 'foo')) {}
      
```

## Test #286

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
if (() => (x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | if (() => (x ||= 'foo')) {}
    |              ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
if (() => (x ??= 'foo')) {}
      
```

## Test #287

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null;
if (() => (x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null;
> 3 | if (() => (x || 'foo')) {}
    |              ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | null;
if (() => (x ?? 'foo')) {}
      
```

## Test #288

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null;
if (() => (x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null;
> 3 | if (() => (x ||= 'foo')) {}
    |              ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | null;
if (() => (x ??= 'foo')) {}
      
```

## Test #289

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
if (() => (x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null;
> 3 | if (() => (x || 'foo')) {}
    |              ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
if (() => (x ?? 'foo')) {}
      
```

## Test #290

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
if (() => (x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null;
> 3 | if (() => (x ||= 'foo')) {}
    |              ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
if (() => (x ??= 'foo')) {}
      
```

## Test #291

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null;
if (() => (x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null;
> 3 | if (() => (x || 'foo')) {}
    |              ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | null;
if (() => (x ?? 'foo')) {}
      
```

## Test #292

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null;
if (() => (x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null;
> 3 | if (() => (x ||= 'foo')) {}
    |              ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | null;
if (() => (x ??= 'foo')) {}
      
```

## Test #293

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
if (() => (x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | if (() => (x || 'foo')) {}
    |              ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
if (() => (x ?? 'foo')) {}
      
```

## Test #294

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
if (() => (x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | if (() => (x ||= 'foo')) {}
    |              ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
if (() => (x ??= 'foo')) {}
      
```

## Test #295

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
if (() => (x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | undefined;
> 3 | if (() => (x || 'foo')) {}
    |              ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
if (() => (x ?? 'foo')) {}
      
```

## Test #296

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
if (() => (x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | undefined;
> 3 | if (() => (x ||= 'foo')) {}
    |              ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
if (() => (x ??= 'foo')) {}
      
```

## Test #297

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
if (() => (x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | undefined;
> 3 | if (() => (x || 'foo')) {}
    |              ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
if (() => (x ?? 'foo')) {}
      
```

## Test #298

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
if (() => (x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | undefined;
> 3 | if (() => (x ||= 'foo')) {}
    |              ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
if (() => (x ??= 'foo')) {}
      
```

## Test #299

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
if (() => (x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | undefined;
> 3 | if (() => (x || 'foo')) {}
    |              ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
if (() => (x ?? 'foo')) {}
      
```

## Test #300

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
if (() => (x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | undefined;
> 3 | if (() => (x ||= 'foo')) {}
    |              ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
if (() => (x ??= 'foo')) {}
      
```

## Test #301

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
if (() => (x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null | undefined;
> 3 | if (() => (x || 'foo')) {}
    |              ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
if (() => (x ?? 'foo')) {}
      
```

## Test #302

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
if (() => (x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null | undefined;
> 3 | if (() => (x ||= 'foo')) {}
    |              ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
if (() => (x ??= 'foo')) {}
      
```

## Test #303

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
if (() => (x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null | undefined;
> 3 | if (() => (x || 'foo')) {}
    |              ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
if (() => (x ?? 'foo')) {}
      
```

## Test #304

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
if (() => (x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null | undefined;
> 3 | if (() => (x ||= 'foo')) {}
    |              ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
if (() => (x ??= 'foo')) {}
      
```

## Test #305

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
if (() => (x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null | undefined;
> 3 | if (() => (x || 'foo')) {}
    |              ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
if (() => (x ?? 'foo')) {}
      
```

## Test #306

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
if (() => (x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null | undefined;
> 3 | if (() => (x ||= 'foo')) {}
    |              ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
if (() => (x ??= 'foo')) {}
      
```

## Test #307

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
if (() => (x || 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null | undefined;
> 3 | if (() => (x || 'foo')) {}
    |              ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
if (() => (x ?? 'foo')) {}
      
```

## Test #308

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
if (() => (x ||= 'foo')) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null | undefined;
> 3 | if (() => (x ||= 'foo')) {}
    |              ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
if (() => (x ??= 'foo')) {}
      
```

## Test #309

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
if (function weird() { return (x || 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | if (function weird() { return (x || 'foo') }) {}
    |                                  ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
if (function weird() { return (x ?? 'foo') }) {}
      
```

## Test #310

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null;
if (function weird() { return (x ||= 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null;
> 3 | if (function weird() { return (x ||= 'foo') }) {}
    |                                  ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | null;
if (function weird() { return (x ??= 'foo') }) {}
      
```

## Test #311

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null;
if (function weird() { return (x || 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null;
> 3 | if (function weird() { return (x || 'foo') }) {}
    |                                  ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | null;
if (function weird() { return (x ?? 'foo') }) {}
      
```

## Test #312

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null;
if (function weird() { return (x ||= 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null;
> 3 | if (function weird() { return (x ||= 'foo') }) {}
    |                                  ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | null;
if (function weird() { return (x ??= 'foo') }) {}
      
```

## Test #313

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
if (function weird() { return (x || 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null;
> 3 | if (function weird() { return (x || 'foo') }) {}
    |                                  ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
if (function weird() { return (x ?? 'foo') }) {}
      
```

## Test #314

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
if (function weird() { return (x ||= 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null;
> 3 | if (function weird() { return (x ||= 'foo') }) {}
    |                                  ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null;
if (function weird() { return (x ??= 'foo') }) {}
      
```

## Test #315

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null;
if (function weird() { return (x || 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null;
> 3 | if (function weird() { return (x || 'foo') }) {}
    |                                  ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | null;
if (function weird() { return (x ?? 'foo') }) {}
      
```

## Test #316

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null;
if (function weird() { return (x ||= 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null;
> 3 | if (function weird() { return (x ||= 'foo') }) {}
    |                                  ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | null;
if (function weird() { return (x ??= 'foo') }) {}
      
```

## Test #317

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
if (function weird() { return (x || 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | if (function weird() { return (x || 'foo') }) {}
    |                                  ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
if (function weird() { return (x ?? 'foo') }) {}
      
```

## Test #318

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
if (function weird() { return (x ||= 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | undefined;
> 3 | if (function weird() { return (x ||= 'foo') }) {}
    |                                  ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | undefined;
if (function weird() { return (x ??= 'foo') }) {}
      
```

## Test #319

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
if (function weird() { return (x || 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | undefined;
> 3 | if (function weird() { return (x || 'foo') }) {}
    |                                  ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
if (function weird() { return (x ?? 'foo') }) {}
      
```

## Test #320

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
if (function weird() { return (x ||= 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | undefined;
> 3 | if (function weird() { return (x ||= 'foo') }) {}
    |                                  ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | undefined;
if (function weird() { return (x ??= 'foo') }) {}
      
```

## Test #321

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
if (function weird() { return (x || 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | undefined;
> 3 | if (function weird() { return (x || 'foo') }) {}
    |                                  ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
if (function weird() { return (x ?? 'foo') }) {}
      
```

## Test #322

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
if (function weird() { return (x ||= 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | undefined;
> 3 | if (function weird() { return (x ||= 'foo') }) {}
    |                                  ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | undefined;
if (function weird() { return (x ??= 'foo') }) {}
      
```

## Test #323

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
if (function weird() { return (x || 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | undefined;
> 3 | if (function weird() { return (x || 'foo') }) {}
    |                                  ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
if (function weird() { return (x ?? 'foo') }) {}
      
```

## Test #324

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
if (function weird() { return (x ||= 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | undefined;
> 3 | if (function weird() { return (x ||= 'foo') }) {}
    |                                  ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | undefined;
if (function weird() { return (x ??= 'foo') }) {}
      
```

## Test #325

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
if (function weird() { return (x || 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null | undefined;
> 3 | if (function weird() { return (x || 'foo') }) {}
    |                                  ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
if (function weird() { return (x ?? 'foo') }) {}
      
```

## Test #326

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
if (function weird() { return (x ||= 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: string | null | undefined;
> 3 | if (function weird() { return (x ||= 'foo') }) {}
    |                                  ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: string | null | undefined;
if (function weird() { return (x ??= 'foo') }) {}
      
```

## Test #327

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
if (function weird() { return (x || 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null | undefined;
> 3 | if (function weird() { return (x || 'foo') }) {}
    |                                  ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
if (function weird() { return (x ?? 'foo') }) {}
      
```

## Test #328

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
if (function weird() { return (x ||= 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: number | null | undefined;
> 3 | if (function weird() { return (x ||= 'foo') }) {}
    |                                  ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: number | null | undefined;
if (function weird() { return (x ??= 'foo') }) {}
      
```

## Test #329

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
if (function weird() { return (x || 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null | undefined;
> 3 | if (function weird() { return (x || 'foo') }) {}
    |                                  ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
if (function weird() { return (x ?? 'foo') }) {}
      
```

## Test #330

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
if (function weird() { return (x ||= 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: boolean | null | undefined;
> 3 | if (function weird() { return (x ||= 'foo') }) {}
    |                                  ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: boolean | null | undefined;
if (function weird() { return (x ??= 'foo') }) {}
      
```

## Test #331

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
if (function weird() { return (x || 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null | undefined;
> 3 | if (function weird() { return (x || 'foo') }) {}
    |                                  ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
if (function weird() { return (x ?? 'foo') }) {}
      
```

## Test #332

### Test Code

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
if (function weird() { return (x ||= 'foo') }) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let x: object | null | undefined;
> 3 | if (function weird() { return (x ||= 'foo') }) {}
    |                                  ^^^ Prefer using nullish coalescing operator (`??=`) instead of a logical assignment (`||=`), as it is a safer operator.
  4 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??=`).

<!-- prettier-ignore -->
```ts

declare let x: object | null | undefined;
if (function weird() { return (x ??= 'foo') }) {}
      
```

## Test #333

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string;
declare let c: string;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null;
  3 | declare let b: string;
  4 | declare let c: string;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string;
declare let c: string;
(a ?? b) || c;
      
```

## Test #334

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string;
declare let c: string;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null;
  3 | declare let b: string;
  4 | declare let c: string;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null;
declare let b: string;
declare let c: string;
(a ?? b) || c;
      
```

## Test #335

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number;
declare let c: number;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null;
  3 | declare let b: number;
  4 | declare let c: number;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number;
declare let c: number;
(a ?? b) || c;
      
```

## Test #336

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number;
declare let c: number;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null;
  3 | declare let b: number;
  4 | declare let c: number;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null;
declare let b: number;
declare let c: number;
(a ?? b) || c;
      
```

## Test #337

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean;
declare let c: boolean;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null;
  3 | declare let b: boolean;
  4 | declare let c: boolean;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean;
declare let c: boolean;
(a ?? b) || c;
      
```

## Test #338

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean;
declare let c: boolean;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null;
  3 | declare let b: boolean;
  4 | declare let c: boolean;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null;
declare let b: boolean;
declare let c: boolean;
(a ?? b) || c;
      
```

## Test #339

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object;
declare let c: object;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null;
  3 | declare let b: object;
  4 | declare let c: object;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object;
declare let c: object;
(a ?? b) || c;
      
```

## Test #340

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object;
declare let c: object;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null;
  3 | declare let b: object;
  4 | declare let c: object;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null;
declare let b: object;
declare let c: object;
(a ?? b) || c;
      
```

## Test #341

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string;
declare let c: string;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | undefined;
  3 | declare let b: string;
  4 | declare let c: string;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string;
declare let c: string;
(a ?? b) || c;
      
```

## Test #342

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string;
declare let c: string;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | undefined;
  3 | declare let b: string;
  4 | declare let c: string;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | undefined;
declare let b: string;
declare let c: string;
(a ?? b) || c;
      
```

## Test #343

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number;
declare let c: number;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | undefined;
  3 | declare let b: number;
  4 | declare let c: number;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number;
declare let c: number;
(a ?? b) || c;
      
```

## Test #344

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number;
declare let c: number;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | undefined;
  3 | declare let b: number;
  4 | declare let c: number;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | undefined;
declare let b: number;
declare let c: number;
(a ?? b) || c;
      
```

## Test #345

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean;
declare let c: boolean;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | undefined;
  3 | declare let b: boolean;
  4 | declare let c: boolean;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean;
declare let c: boolean;
(a ?? b) || c;
      
```

## Test #346

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean;
declare let c: boolean;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | undefined;
  3 | declare let b: boolean;
  4 | declare let c: boolean;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | undefined;
declare let b: boolean;
declare let c: boolean;
(a ?? b) || c;
      
```

## Test #347

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object;
declare let c: object;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | undefined;
  3 | declare let b: object;
  4 | declare let c: object;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object;
declare let c: object;
(a ?? b) || c;
      
```

## Test #348

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object;
declare let c: object;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | undefined;
  3 | declare let b: object;
  4 | declare let c: object;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | undefined;
declare let b: object;
declare let c: object;
(a ?? b) || c;
      
```

## Test #349

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string;
declare let c: string;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null | undefined;
  3 | declare let b: string;
  4 | declare let c: string;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string;
declare let c: string;
(a ?? b) || c;
      
```

## Test #350

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string;
declare let c: string;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: string | null | undefined;
  3 | declare let b: string;
  4 | declare let c: string;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: string | null | undefined;
declare let b: string;
declare let c: string;
(a ?? b) || c;
      
```

## Test #351

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number;
declare let c: number;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null | undefined;
  3 | declare let b: number;
  4 | declare let c: number;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number;
declare let c: number;
(a ?? b) || c;
      
```

## Test #352

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number;
declare let c: number;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: number | null | undefined;
  3 | declare let b: number;
  4 | declare let c: number;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: number | null | undefined;
declare let b: number;
declare let c: number;
(a ?? b) || c;
      
```

## Test #353

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean;
declare let c: boolean;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null | undefined;
  3 | declare let b: boolean;
  4 | declare let c: boolean;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean;
declare let c: boolean;
(a ?? b) || c;
      
```

## Test #354

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean;
declare let c: boolean;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: boolean | null | undefined;
  3 | declare let b: boolean;
  4 | declare let c: boolean;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: boolean | null | undefined;
declare let b: boolean;
declare let c: boolean;
(a ?? b) || c;
      
```

## Test #355

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object;
declare let c: object;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null | undefined;
  3 | declare let b: object;
  4 | declare let c: object;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object;
declare let c: object;
(a ?? b) || c;
      
```

## Test #356

### Test Code

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object;
declare let c: object;
a || b || c;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare let a: object | null | undefined;
  3 | declare let b: object;
  4 | declare let c: object;
> 5 | a || b || c;
    |   ^^ Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.
  6 |       
```

#### Suggestions

##### Fix to nullish coalescing operator (`??`).

<!-- prettier-ignore -->
```ts

declare let a: object | null | undefined;
declare let b: object;
declare let c: object;
(a ?? b) || c;
      
```
