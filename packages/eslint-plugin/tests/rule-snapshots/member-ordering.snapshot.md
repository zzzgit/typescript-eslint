# member-ordering

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

// no accessibility === public
interface Foo {
  [Z: string]: any;
  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
  F: string;
  G();
  H();
  I();
  J();
  K();
  L();
  new ();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   [Z: string]: any;
   5 |   A: string;
   6 |   B: string;
   7 |   C: string;
   8 |   D: string;
   9 |   E: string;
  10 |   F: string;
  11 |   G();
  12 |   H();
  13 |   I();
  14 |   J();
  15 |   K();
  16 |   L();
> 17 |   new ();
     |   ^^^^^^^ Member new should be declared before all method definitions.
  18 | }
  19 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  a: unknown;
  (): void;
  b(): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
  3 |   a: unknown;
> 4 |   (): void;
    |   ^^^^^^^^^ Member call should be declared before all field definitions.
  5 |   b(): void;
  6 | }
  7 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

// no accessibility === public
interface Foo {
  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
  F: string;
  G();
  H();
  I();
  J();
  K();
  L();
  new ();
  [Z: string]: any;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
> 10 |   G();
     |   ^^^^ Member G should be declared before all field definitions.
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
> 11 |   H();
     |   ^^^^ Member H should be declared before all field definitions.
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
> 12 |   I();
     |   ^^^^ Member I should be declared before all field definitions.
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
> 13 |   J();
     |   ^^^^ Member J should be declared before all field definitions.
  14 |   K();
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
> 14 |   K();
     |   ^^^^ Member K should be declared before all field definitions.
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
> 15 |   L();
     |   ^^^^ Member L should be declared before all field definitions.
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
> 16 |   new ();
     |   ^^^^^^^ Member new should be declared before all field definitions.
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   new ();
> 17 |   [Z: string]: any;
     |   ^^^^^^^^^^^^^^^^^ Member Z should be declared before all field definitions.
  18 | }
  19 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

// no accessibility === public
interface Foo {
  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
  F: string;
  G();
  H();
  I();
  J();
  K();
  L();
  new ();
  [Z: string]: any;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
> 10 |   G();
     |   ^^^^ Member G should be declared before all field definitions.
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
> 11 |   H();
     |   ^^^^ Member H should be declared before all field definitions.
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
> 12 |   I();
     |   ^^^^ Member I should be declared before all field definitions.
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
> 13 |   J();
     |   ^^^^ Member J should be declared before all field definitions.
  14 |   K();
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
> 14 |   K();
     |   ^^^^ Member K should be declared before all field definitions.
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
> 15 |   L();
     |   ^^^^ Member L should be declared before all field definitions.
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
> 16 |   new ();
     |   ^^^^^^^ Member new should be declared before all field definitions.
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   new ();
> 17 |   [Z: string]: any;
     |   ^^^^^^^^^^^^^^^^^ Member Z should be declared before all field definitions.
  18 | }
  19 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

// no accessibility === public
interface Foo {
  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
  F: string;
  G();
  H();
  I();
  J();
  K();
  L();
  new ();
  [Z: string]: any;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
> 10 |   G();
     |   ^^^^ Member G should be declared before all field definitions.
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
> 11 |   H();
     |   ^^^^ Member H should be declared before all field definitions.
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
> 12 |   I();
     |   ^^^^ Member I should be declared before all field definitions.
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
> 13 |   J();
     |   ^^^^ Member J should be declared before all field definitions.
  14 |   K();
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
> 14 |   K();
     |   ^^^^ Member K should be declared before all field definitions.
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
> 15 |   L();
     |   ^^^^ Member L should be declared before all field definitions.
  16 |   new ();
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
> 16 |   new ();
     |   ^^^^^^^ Member new should be declared before all field definitions.
  17 |   [Z: string]: any;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   new ();
> 17 |   [Z: string]: any;
     |   ^^^^^^^^^^^^^^^^^ Member Z should be declared before all field definitions.
  18 | }
  19 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

// no accessibility === public
interface Foo {
  [Z: string]: any;
  new ();
  A: string;
  G();
  B: string;
  H();
  C: string;
  I();
  D: string;
  J();
  E: string;
  K();
  F: string;
  L();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   [Z: string]: any;
   5 |   new ();
   6 |   A: string;
   7 |   G();
>  8 |   B: string;
     |   ^^^^^^^^^^ Member B should be declared before all method definitions.
   9 |   H();
  10 |   C: string;
  11 |   I();
  12 |   D: string;
  13 |   J();
  14 |   E: string;
  15 |   K();
  16 |   F: string;
  17 |   L();
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   [Z: string]: any;
   5 |   new ();
   6 |   A: string;
   7 |   G();
   8 |   B: string;
   9 |   H();
> 10 |   C: string;
     |   ^^^^^^^^^^ Member C should be declared before all method definitions.
  11 |   I();
  12 |   D: string;
  13 |   J();
  14 |   E: string;
  15 |   K();
  16 |   F: string;
  17 |   L();
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   [Z: string]: any;
   5 |   new ();
   6 |   A: string;
   7 |   G();
   8 |   B: string;
   9 |   H();
  10 |   C: string;
  11 |   I();
> 12 |   D: string;
     |   ^^^^^^^^^^ Member D should be declared before all method definitions.
  13 |   J();
  14 |   E: string;
  15 |   K();
  16 |   F: string;
  17 |   L();
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   [Z: string]: any;
   5 |   new ();
   6 |   A: string;
   7 |   G();
   8 |   B: string;
   9 |   H();
  10 |   C: string;
  11 |   I();
  12 |   D: string;
  13 |   J();
> 14 |   E: string;
     |   ^^^^^^^^^^ Member E should be declared before all method definitions.
  15 |   K();
  16 |   F: string;
  17 |   L();
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | interface Foo {
   4 |   [Z: string]: any;
   5 |   new ();
   6 |   A: string;
   7 |   G();
   8 |   B: string;
   9 |   H();
  10 |   C: string;
  11 |   I();
  12 |   D: string;
  13 |   J();
  14 |   E: string;
  15 |   K();
> 16 |   F: string;
     |   ^^^^^^^^^^ Member F should be declared before all method definitions.
  17 |   L();
  18 | }
  19 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

// no accessibility === public
type Foo = {
  [Z: string]: any;
  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
  F: string;
  G();
  H();
  I();
  J();
  K();
  L();
  new ();
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   [Z: string]: any;
   5 |   A: string;
   6 |   B: string;
   7 |   C: string;
   8 |   D: string;
   9 |   E: string;
  10 |   F: string;
  11 |   G();
  12 |   H();
  13 |   I();
  14 |   J();
  15 |   K();
  16 |   L();
> 17 |   new ();
     |   ^^^^^^^ Member new should be declared before all method definitions.
  18 | };
  19 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

// no accessibility === public
type Foo = {
  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
  F: string;
  G();
  H();
  I();
  J();
  K();
  L();
  [Z: string]: any;
  new ();
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
> 10 |   G();
     |   ^^^^ Member G should be declared before all field definitions.
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   [Z: string]: any;
  17 |   new ();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
> 11 |   H();
     |   ^^^^ Member H should be declared before all field definitions.
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   [Z: string]: any;
  17 |   new ();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
> 12 |   I();
     |   ^^^^ Member I should be declared before all field definitions.
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   [Z: string]: any;
  17 |   new ();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
> 13 |   J();
     |   ^^^^ Member J should be declared before all field definitions.
  14 |   K();
  15 |   L();
  16 |   [Z: string]: any;
  17 |   new ();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
> 14 |   K();
     |   ^^^^ Member K should be declared before all field definitions.
  15 |   L();
  16 |   [Z: string]: any;
  17 |   new ();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
> 15 |   L();
     |   ^^^^ Member L should be declared before all field definitions.
  16 |   [Z: string]: any;
  17 |   new ();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
> 16 |   [Z: string]: any;
     |   ^^^^^^^^^^^^^^^^^ Member Z should be declared before all field definitions.
  17 |   new ();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   [Z: string]: any;
> 17 |   new ();
     |   ^^^^^^^ Member new should be declared before all field definitions.
  18 | };
  19 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

// no accessibility === public
type Foo = {
  [Z: string]: any;
  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
  F: string;
  G();
  H();
  I();
  J();
  K();
  L();
  new ();
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   [Z: string]: any;
   5 |   A: string;
   6 |   B: string;
   7 |   C: string;
   8 |   D: string;
   9 |   E: string;
  10 |   F: string;
> 11 |   G();
     |   ^^^^ Member G should be declared before all signature definitions.
  12 |   H();
  13 |   I();
  14 |   J();
  15 |   K();
  16 |   L();
  17 |   new ();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   [Z: string]: any;
   5 |   A: string;
   6 |   B: string;
   7 |   C: string;
   8 |   D: string;
   9 |   E: string;
  10 |   F: string;
  11 |   G();
> 12 |   H();
     |   ^^^^ Member H should be declared before all signature definitions.
  13 |   I();
  14 |   J();
  15 |   K();
  16 |   L();
  17 |   new ();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   [Z: string]: any;
   5 |   A: string;
   6 |   B: string;
   7 |   C: string;
   8 |   D: string;
   9 |   E: string;
  10 |   F: string;
  11 |   G();
  12 |   H();
> 13 |   I();
     |   ^^^^ Member I should be declared before all signature definitions.
  14 |   J();
  15 |   K();
  16 |   L();
  17 |   new ();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   [Z: string]: any;
   5 |   A: string;
   6 |   B: string;
   7 |   C: string;
   8 |   D: string;
   9 |   E: string;
  10 |   F: string;
  11 |   G();
  12 |   H();
  13 |   I();
> 14 |   J();
     |   ^^^^ Member J should be declared before all signature definitions.
  15 |   K();
  16 |   L();
  17 |   new ();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   [Z: string]: any;
   5 |   A: string;
   6 |   B: string;
   7 |   C: string;
   8 |   D: string;
   9 |   E: string;
  10 |   F: string;
  11 |   G();
  12 |   H();
  13 |   I();
  14 |   J();
> 15 |   K();
     |   ^^^^ Member K should be declared before all signature definitions.
  16 |   L();
  17 |   new ();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   [Z: string]: any;
   5 |   A: string;
   6 |   B: string;
   7 |   C: string;
   8 |   D: string;
   9 |   E: string;
  10 |   F: string;
  11 |   G();
  12 |   H();
  13 |   I();
  14 |   J();
  15 |   K();
> 16 |   L();
     |   ^^^^ Member L should be declared before all signature definitions.
  17 |   new ();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   [Z: string]: any;
   5 |   A: string;
   6 |   B: string;
   7 |   C: string;
   8 |   D: string;
   9 |   E: string;
  10 |   F: string;
  11 |   G();
  12 |   H();
  13 |   I();
  14 |   J();
  15 |   K();
  16 |   L();
> 17 |   new ();
     |   ^^^^^^^ Member new should be declared before all signature definitions.
  18 | };
  19 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

// no accessibility === public
type Foo = {
  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
  F: string;
  G();
  H();
  I();
  J();
  K();
  L();
  new ();
  [Z: string]: any;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
> 10 |   G();
     |   ^^^^ Member G should be declared before all field definitions.
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
> 11 |   H();
     |   ^^^^ Member H should be declared before all field definitions.
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
> 12 |   I();
     |   ^^^^ Member I should be declared before all field definitions.
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
> 13 |   J();
     |   ^^^^ Member J should be declared before all field definitions.
  14 |   K();
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
> 14 |   K();
     |   ^^^^ Member K should be declared before all field definitions.
  15 |   L();
  16 |   new ();
  17 |   [Z: string]: any;
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
> 15 |   L();
     |   ^^^^ Member L should be declared before all field definitions.
  16 |   new ();
  17 |   [Z: string]: any;
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
> 16 |   new ();
     |   ^^^^^^^ Member new should be declared before all field definitions.
  17 |   [Z: string]: any;
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   A: string;
   5 |   B: string;
   6 |   C: string;
   7 |   D: string;
   8 |   E: string;
   9 |   F: string;
  10 |   G();
  11 |   H();
  12 |   I();
  13 |   J();
  14 |   K();
  15 |   L();
  16 |   new ();
> 17 |   [Z: string]: any;
     |   ^^^^^^^^^^^^^^^^^ Member Z should be declared before all field definitions.
  18 | };
  19 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

// no accessibility === public
type Foo = {
  new ();
  [Z: string]: any;
  A: string;
  G();
  B: string;
  H();
  C: string;
  I();
  D: string;
  J();
  E: string;
  K();
  F: string;
  L();
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   new ();
   5 |   [Z: string]: any;
   6 |   A: string;
   7 |   G();
>  8 |   B: string;
     |   ^^^^^^^^^^ Member B should be declared before all method definitions.
   9 |   H();
  10 |   C: string;
  11 |   I();
  12 |   D: string;
  13 |   J();
  14 |   E: string;
  15 |   K();
  16 |   F: string;
  17 |   L();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   new ();
   5 |   [Z: string]: any;
   6 |   A: string;
   7 |   G();
   8 |   B: string;
   9 |   H();
> 10 |   C: string;
     |   ^^^^^^^^^^ Member C should be declared before all method definitions.
  11 |   I();
  12 |   D: string;
  13 |   J();
  14 |   E: string;
  15 |   K();
  16 |   F: string;
  17 |   L();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   new ();
   5 |   [Z: string]: any;
   6 |   A: string;
   7 |   G();
   8 |   B: string;
   9 |   H();
  10 |   C: string;
  11 |   I();
> 12 |   D: string;
     |   ^^^^^^^^^^ Member D should be declared before all method definitions.
  13 |   J();
  14 |   E: string;
  15 |   K();
  16 |   F: string;
  17 |   L();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   new ();
   5 |   [Z: string]: any;
   6 |   A: string;
   7 |   G();
   8 |   B: string;
   9 |   H();
  10 |   C: string;
  11 |   I();
  12 |   D: string;
  13 |   J();
> 14 |   E: string;
     |   ^^^^^^^^^^ Member E should be declared before all method definitions.
  15 |   K();
  16 |   F: string;
  17 |   L();
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | type Foo = {
   4 |   new ();
   5 |   [Z: string]: any;
   6 |   A: string;
   7 |   G();
   8 |   B: string;
   9 |   H();
  10 |   C: string;
  11 |   I();
  12 |   D: string;
  13 |   J();
  14 |   E: string;
  15 |   K();
> 16 |   F: string;
     |   ^^^^^^^^^^ Member F should be declared before all method definitions.
  17 |   L();
  18 | };
  19 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  [Z: string]: any;
  public static A: string = '';
  protected static B: string = '';
  private static C: string = '';
  static #C: string = '';
  public D: string = '';
  protected E: string = '';
  private F: string = '';
  #F: string = '';
  constructor() {}
  public J() {}
  protected K() {}
  private L() {}
  #L() {}
  public static G() {}
  protected static H() {}
  private static I() {}
  static #I() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   [Z: string]: any;
   4 |   public static A: string = '';
   5 |   protected static B: string = '';
   6 |   private static C: string = '';
   7 |   static #C: string = '';
   8 |   public D: string = '';
   9 |   protected E: string = '';
  10 |   private F: string = '';
  11 |   #F: string = '';
  12 |   constructor() {}
  13 |   public J() {}
  14 |   protected K() {}
  15 |   private L() {}
  16 |   #L() {}
> 17 |   public static G() {}
     |   ^^^^^^^^^^^^^^^^^^^^ Member G should be declared before all public instance method definitions.
  18 |   protected static H() {}
  19 |   private static I() {}
  20 |   static #I() {}
  21 | }
  22 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   [Z: string]: any;
   4 |   public static A: string = '';
   5 |   protected static B: string = '';
   6 |   private static C: string = '';
   7 |   static #C: string = '';
   8 |   public D: string = '';
   9 |   protected E: string = '';
  10 |   private F: string = '';
  11 |   #F: string = '';
  12 |   constructor() {}
  13 |   public J() {}
  14 |   protected K() {}
  15 |   private L() {}
  16 |   #L() {}
  17 |   public static G() {}
> 18 |   protected static H() {}
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Member H should be declared before all public instance method definitions.
  19 |   private static I() {}
  20 |   static #I() {}
  21 | }
  22 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   [Z: string]: any;
   4 |   public static A: string = '';
   5 |   protected static B: string = '';
   6 |   private static C: string = '';
   7 |   static #C: string = '';
   8 |   public D: string = '';
   9 |   protected E: string = '';
  10 |   private F: string = '';
  11 |   #F: string = '';
  12 |   constructor() {}
  13 |   public J() {}
  14 |   protected K() {}
  15 |   private L() {}
  16 |   #L() {}
  17 |   public static G() {}
  18 |   protected static H() {}
> 19 |   private static I() {}
     |   ^^^^^^^^^^^^^^^^^^^^^ Member I should be declared before all public instance method definitions.
  20 |   static #I() {}
  21 | }
  22 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   [Z: string]: any;
   4 |   public static A: string = '';
   5 |   protected static B: string = '';
   6 |   private static C: string = '';
   7 |   static #C: string = '';
   8 |   public D: string = '';
   9 |   protected E: string = '';
  10 |   private F: string = '';
  11 |   #F: string = '';
  12 |   constructor() {}
  13 |   public J() {}
  14 |   protected K() {}
  15 |   private L() {}
  16 |   #L() {}
  17 |   public static G() {}
  18 |   protected static H() {}
  19 |   private static I() {}
> 20 |   static #I() {}
     |   ^^^^^^^^^^^^^^ Member I should be declared before all public instance method definitions.
  21 | }
  22 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor() {}
  public static A: string = '';
  protected static B: string = '';
  private static C: string = '';
  static #C: string = '';
  public D: string = '';
  protected E: string = '';
  private F: string = '';
  #F: string = '';
  public J() {}
  protected K() {}
  private L() {}
  #L() {}
  public static G() {}
  protected static H() {}
  private static I() {}
  static #I() {}
  [Z: string]: any;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   constructor() {}
>  4 |   public static A: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member A should be declared before all constructor definitions.
   5 |   protected static B: string = '';
   6 |   private static C: string = '';
   7 |   static #C: string = '';
   8 |   public D: string = '';
   9 |   protected E: string = '';
  10 |   private F: string = '';
  11 |   #F: string = '';
  12 |   public J() {}
  13 |   protected K() {}
  14 |   private L() {}
  15 |   #L() {}
  16 |   public static G() {}
  17 |   protected static H() {}
  18 |   private static I() {}
  19 |   static #I() {}
  20 |   [Z: string]: any;
  21 | }
  22 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   constructor() {}
   4 |   public static A: string = '';
>  5 |   protected static B: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member B should be declared before all constructor definitions.
   6 |   private static C: string = '';
   7 |   static #C: string = '';
   8 |   public D: string = '';
   9 |   protected E: string = '';
  10 |   private F: string = '';
  11 |   #F: string = '';
  12 |   public J() {}
  13 |   protected K() {}
  14 |   private L() {}
  15 |   #L() {}
  16 |   public static G() {}
  17 |   protected static H() {}
  18 |   private static I() {}
  19 |   static #I() {}
  20 |   [Z: string]: any;
  21 | }
  22 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   constructor() {}
   4 |   public static A: string = '';
   5 |   protected static B: string = '';
>  6 |   private static C: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member C should be declared before all constructor definitions.
   7 |   static #C: string = '';
   8 |   public D: string = '';
   9 |   protected E: string = '';
  10 |   private F: string = '';
  11 |   #F: string = '';
  12 |   public J() {}
  13 |   protected K() {}
  14 |   private L() {}
  15 |   #L() {}
  16 |   public static G() {}
  17 |   protected static H() {}
  18 |   private static I() {}
  19 |   static #I() {}
  20 |   [Z: string]: any;
  21 | }
  22 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   constructor() {}
   4 |   public static A: string = '';
   5 |   protected static B: string = '';
   6 |   private static C: string = '';
>  7 |   static #C: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Member C should be declared before all constructor definitions.
   8 |   public D: string = '';
   9 |   protected E: string = '';
  10 |   private F: string = '';
  11 |   #F: string = '';
  12 |   public J() {}
  13 |   protected K() {}
  14 |   private L() {}
  15 |   #L() {}
  16 |   public static G() {}
  17 |   protected static H() {}
  18 |   private static I() {}
  19 |   static #I() {}
  20 |   [Z: string]: any;
  21 | }
  22 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   constructor() {}
   4 |   public static A: string = '';
   5 |   protected static B: string = '';
   6 |   private static C: string = '';
   7 |   static #C: string = '';
>  8 |   public D: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^ Member D should be declared before all constructor definitions.
   9 |   protected E: string = '';
  10 |   private F: string = '';
  11 |   #F: string = '';
  12 |   public J() {}
  13 |   protected K() {}
  14 |   private L() {}
  15 |   #L() {}
  16 |   public static G() {}
  17 |   protected static H() {}
  18 |   private static I() {}
  19 |   static #I() {}
  20 |   [Z: string]: any;
  21 | }
  22 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   constructor() {}
   4 |   public static A: string = '';
   5 |   protected static B: string = '';
   6 |   private static C: string = '';
   7 |   static #C: string = '';
   8 |   public D: string = '';
>  9 |   protected E: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^ Member E should be declared before all constructor definitions.
  10 |   private F: string = '';
  11 |   #F: string = '';
  12 |   public J() {}
  13 |   protected K() {}
  14 |   private L() {}
  15 |   #L() {}
  16 |   public static G() {}
  17 |   protected static H() {}
  18 |   private static I() {}
  19 |   static #I() {}
  20 |   [Z: string]: any;
  21 | }
  22 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   constructor() {}
   4 |   public static A: string = '';
   5 |   protected static B: string = '';
   6 |   private static C: string = '';
   7 |   static #C: string = '';
   8 |   public D: string = '';
   9 |   protected E: string = '';
> 10 |   private F: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Member F should be declared before all constructor definitions.
  11 |   #F: string = '';
  12 |   public J() {}
  13 |   protected K() {}
  14 |   private L() {}
  15 |   #L() {}
  16 |   public static G() {}
  17 |   protected static H() {}
  18 |   private static I() {}
  19 |   static #I() {}
  20 |   [Z: string]: any;
  21 | }
  22 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   constructor() {}
   4 |   public static A: string = '';
   5 |   protected static B: string = '';
   6 |   private static C: string = '';
   7 |   static #C: string = '';
   8 |   public D: string = '';
   9 |   protected E: string = '';
  10 |   private F: string = '';
> 11 |   #F: string = '';
     |   ^^^^^^^^^^^^^^^^ Member F should be declared before all constructor definitions.
  12 |   public J() {}
  13 |   protected K() {}
  14 |   private L() {}
  15 |   #L() {}
  16 |   public static G() {}
  17 |   protected static H() {}
  18 |   private static I() {}
  19 |   static #I() {}
  20 |   [Z: string]: any;
  21 | }
  22 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  constructor() {}
  protected static B: string = '';
  private static C: string = '';
  public D: string = '';
  protected E: string = '';
  private F: string = '';
  public static G() {}
  public static A: string;
  protected static H() {}
  private static I() {}
  public J() {}
  protected K() {}
  private L() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   constructor() {}
   4 |   protected static B: string = '';
   5 |   private static C: string = '';
   6 |   public D: string = '';
   7 |   protected E: string = '';
   8 |   private F: string = '';
   9 |   public static G() {}
> 10 |   public static A: string;
     |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member A should be declared before all method definitions.
  11 |   protected static H() {}
  12 |   private static I() {}
  13 |   public J() {}
  14 |   protected K() {}
  15 |   private L() {}
  16 | }
  17 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  protected static H() {}
  private static I() {}
  public J() {}
  protected K() {}
  private L() {}
  public static A: string;
  public static G() {}
  protected static B: string = '';
  private static C: string = '';
  public D: string = '';
  protected E: string = '';
  private F: string = '';
  constructor() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   protected static H() {}
   4 |   private static I() {}
   5 |   public J() {}
   6 |   protected K() {}
   7 |   private L() {}
   8 |   public static A: string;
>  9 |   public static G() {}
     |   ^^^^^^^^^^^^^^^^^^^^ Member G should be declared before all field definitions.
  10 |   protected static B: string = '';
  11 |   private static C: string = '';
  12 |   public D: string = '';
  13 |   protected E: string = '';
  14 |   private F: string = '';
  15 |   constructor() {}
  16 | }
  17 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public static G() {}
  protected static H() {}
  protected static B: string = '';
  private static I() {}
  public J() {}
  protected K() {}
  private L() {}
  public static A: string;
  constructor() {}
  private static C: string = '';
  public D: string = '';
  protected E: string = '';
  private F: string = '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static G() {}
   4 |   protected static H() {}
   5 |   protected static B: string = '';
>  6 |   private static I() {}
     |   ^^^^^^^^^^^^^^^^^^^^^ Member I should be declared before all field definitions.
   7 |   public J() {}
   8 |   protected K() {}
   9 |   private L() {}
  10 |   public static A: string;
  11 |   constructor() {}
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static G() {}
   4 |   protected static H() {}
   5 |   protected static B: string = '';
   6 |   private static I() {}
>  7 |   public J() {}
     |   ^^^^^^^^^^^^^ Member J should be declared before all field definitions.
   8 |   protected K() {}
   9 |   private L() {}
  10 |   public static A: string;
  11 |   constructor() {}
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static G() {}
   4 |   protected static H() {}
   5 |   protected static B: string = '';
   6 |   private static I() {}
   7 |   public J() {}
>  8 |   protected K() {}
     |   ^^^^^^^^^^^^^^^^ Member K should be declared before all field definitions.
   9 |   private L() {}
  10 |   public static A: string;
  11 |   constructor() {}
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static G() {}
   4 |   protected static H() {}
   5 |   protected static B: string = '';
   6 |   private static I() {}
   7 |   public J() {}
   8 |   protected K() {}
>  9 |   private L() {}
     |   ^^^^^^^^^^^^^^ Member L should be declared before all field definitions.
  10 |   public static A: string;
  11 |   constructor() {}
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static G() {}
   4 |   protected static H() {}
   5 |   protected static B: string = '';
   6 |   private static I() {}
   7 |   public J() {}
   8 |   protected K() {}
   9 |   private L() {}
  10 |   public static A: string;
> 11 |   constructor() {}
     |   ^^^^^^^^^^^^^^^^ Member constructor should be declared before all field definitions.
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | }
  17 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public static A: string;
  public static G() {}
  protected static H() {}
  private static I() {}
  public J() {}
  protected K() {}
  private L() {}
  constructor() {}
  protected static B: string = '';
  private static C: string = '';
  public D: string = '';
  protected E: string = '';
  private F: string = '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static A: string;
>  4 |   public static G() {}
     |   ^^^^^^^^^^^^^^^^^^^^ Member G should be declared before all field definitions.
   5 |   protected static H() {}
   6 |   private static I() {}
   7 |   public J() {}
   8 |   protected K() {}
   9 |   private L() {}
  10 |   constructor() {}
  11 |   protected static B: string = '';
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static A: string;
   4 |   public static G() {}
>  5 |   protected static H() {}
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Member H should be declared before all field definitions.
   6 |   private static I() {}
   7 |   public J() {}
   8 |   protected K() {}
   9 |   private L() {}
  10 |   constructor() {}
  11 |   protected static B: string = '';
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static A: string;
   4 |   public static G() {}
   5 |   protected static H() {}
>  6 |   private static I() {}
     |   ^^^^^^^^^^^^^^^^^^^^^ Member I should be declared before all field definitions.
   7 |   public J() {}
   8 |   protected K() {}
   9 |   private L() {}
  10 |   constructor() {}
  11 |   protected static B: string = '';
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static A: string;
   4 |   public static G() {}
   5 |   protected static H() {}
   6 |   private static I() {}
>  7 |   public J() {}
     |   ^^^^^^^^^^^^^ Member J should be declared before all field definitions.
   8 |   protected K() {}
   9 |   private L() {}
  10 |   constructor() {}
  11 |   protected static B: string = '';
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static A: string;
   4 |   public static G() {}
   5 |   protected static H() {}
   6 |   private static I() {}
   7 |   public J() {}
>  8 |   protected K() {}
     |   ^^^^^^^^^^^^^^^^ Member K should be declared before all field definitions.
   9 |   private L() {}
  10 |   constructor() {}
  11 |   protected static B: string = '';
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static A: string;
   4 |   public static G() {}
   5 |   protected static H() {}
   6 |   private static I() {}
   7 |   public J() {}
   8 |   protected K() {}
>  9 |   private L() {}
     |   ^^^^^^^^^^^^^^ Member L should be declared before all field definitions.
  10 |   constructor() {}
  11 |   protected static B: string = '';
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static A: string;
   4 |   public static G() {}
   5 |   protected static H() {}
   6 |   private static I() {}
   7 |   public J() {}
   8 |   protected K() {}
   9 |   private L() {}
> 10 |   constructor() {}
     |   ^^^^^^^^^^^^^^^^ Member constructor should be declared before all field definitions.
  11 |   protected static B: string = '';
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | }
  17 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  private L() {}
  public J() {}
  public static G() {}
  protected static H() {}
  private static I() {}
  protected K() {}
  constructor() {}
  public D: string = '';
  private static C: string = '';
  public static A: string;
  private static C: string = '';
  protected static B: string = '';
  private F: string = '';
  protected static B: string = '';
  protected E: string = '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   private L() {}
   4 |   public J() {}
   5 |   public static G() {}
   6 |   protected static H() {}
   7 |   private static I() {}
   8 |   protected K() {}
   9 |   constructor() {}
  10 |   public D: string = '';
  11 |   private static C: string = '';
> 12 |   public static A: string;
     |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member A should be declared before all private field definitions.
  13 |   private static C: string = '';
  14 |   protected static B: string = '';
  15 |   private F: string = '';
  16 |   protected static B: string = '';
  17 |   protected E: string = '';
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   private L() {}
   4 |   public J() {}
   5 |   public static G() {}
   6 |   protected static H() {}
   7 |   private static I() {}
   8 |   protected K() {}
   9 |   constructor() {}
  10 |   public D: string = '';
  11 |   private static C: string = '';
  12 |   public static A: string;
  13 |   private static C: string = '';
  14 |   protected static B: string = '';
> 15 |   private F: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Member F should be declared before all protected field definitions.
  16 |   protected static B: string = '';
  17 |   protected E: string = '';
  18 | }
  19 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public static G() {}
  private static I() {}
  public J() {}
  protected static H() {}
  private L() {}
  protected K() {}
  public D: string = '';
  constructor() {}
  public static A: string;
  protected static B: string = '';
  protected E: string = '';
  private static C: string = '';
  private F: string = '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static G() {}
   4 |   private static I() {}
   5 |   public J() {}
>  6 |   protected static H() {}
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Member H should be declared before all public instance method definitions.
   7 |   private L() {}
   8 |   protected K() {}
   9 |   public D: string = '';
  10 |   constructor() {}
  11 |   public static A: string;
  12 |   protected static B: string = '';
  13 |   protected E: string = '';
  14 |   private static C: string = '';
  15 |   private F: string = '';
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public static G() {}
   4 |   private static I() {}
   5 |   public J() {}
   6 |   protected static H() {}
   7 |   private L() {}
   8 |   protected K() {}
   9 |   public D: string = '';
> 10 |   constructor() {}
     |   ^^^^^^^^^^^^^^^^ Member constructor should be declared before all public field definitions.
  11 |   public static A: string;
  12 |   protected static B: string = '';
  13 |   protected E: string = '';
  14 |   private static C: string = '';
  15 |   private F: string = '';
  16 | }
  17 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public J() {}
  public static G() {}
  public D: string = '';
  public static A: string = '';
  private L() {}
  constructor() {}
  protected K() {}
  protected static H() {}
  private static I() {}
  protected static B: string = '';
  private static C: string = '';
  protected E: string = '';
  private F: string = '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public J() {}
   4 |   public static G() {}
   5 |   public D: string = '';
   6 |   public static A: string = '';
   7 |   private L() {}
>  8 |   constructor() {}
     |   ^^^^^^^^^^^^^^^^ Member constructor should be declared before all method definitions.
   9 |   protected K() {}
  10 |   protected static H() {}
  11 |   private static I() {}
  12 |   protected static B: string = '';
  13 |   private static C: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | }
  17 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public J() {}
  private static I() {}
  public static G() {}
  protected static H() {}
  protected K() {}
  private L() {}
  constructor() {}
  public static A: string;
  private F: string = '';
  protected static B: string = '';
  public D: string = '';
  private static C: string = '';
  protected E: string = '';
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public J() {}
   4 |   private static I() {}
>  5 |   public static G() {}
     |   ^^^^^^^^^^^^^^^^^^^^ Member G should be declared before all private static method definitions.
   6 |   protected static H() {}
   7 |   protected K() {}
   8 |   private L() {}
   9 |   constructor() {}
  10 |   public static A: string;
  11 |   private F: string = '';
  12 |   protected static B: string = '';
  13 |   public D: string = '';
  14 |   private static C: string = '';
  15 |   protected E: string = '';
  16 | }
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   public J() {}
   4 |   private static I() {}
   5 |   public static G() {}
>  6 |   protected static H() {}
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Member H should be declared before all private static method definitions.
   7 |   protected K() {}
   8 |   private L() {}
   9 |   constructor() {}
  10 |   public static A: string;
  11 |   private F: string = '';
  12 |   protected static B: string = '';
  13 |   public D: string = '';
  14 |   private static C: string = '';
  15 |   protected E: string = '';
  16 | }
  17 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  private static I() {}
  protected static H() {}
  protected static B: string = '';
  public static G() {}
  public J() {}
  protected K() {}
  private static C: string = '';
  private L() {}
  private F: string = '';
  protected E: string = '';
  public static A: string;
  public D: string = '';
  constructor() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   private static I() {}
   4 |   protected static H() {}
   5 |   protected static B: string = '';
   6 |   public static G() {}
   7 |   public J() {}
   8 |   protected K() {}
   9 |   private static C: string = '';
> 10 |   private L() {}
     |   ^^^^^^^^^^^^^^ Member L should be declared before all protected static field definitions.
  11 |   private F: string = '';
  12 |   protected E: string = '';
  13 |   public static A: string;
  14 |   public D: string = '';
  15 |   constructor() {}
  16 | }
  17 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  private L() {}
  private static I() {}
  protected static H() {}
  public static G() {}
  protected static B: string = '';
  public J() {}
  protected K() {}
  private static C: string = '';
  private F: string = '';
  protected E: string = '';
  public static A: string;
  public D: string = '';
  constructor() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   private L() {}
   4 |   private static I() {}
   5 |   protected static H() {}
   6 |   public static G() {}
   7 |   protected static B: string = '';
>  8 |   public J() {}
     |   ^^^^^^^^^^^^^ Member J should be declared before all protected static field definitions.
   9 |   protected K() {}
  10 |   private static C: string = '';
  11 |   private F: string = '';
  12 |   protected E: string = '';
  13 |   public static A: string;
  14 |   public D: string = '';
  15 |   constructor() {}
  16 | }
  17 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class Foo {
  public static A: string = '';
  protected static B: string = '';
  private static C: string = '';
  public D: string = '';
  protected E: string = '';
  private F: string = '';
  constructor() {}
  public J() {}
  protected K() {}
  private L() {}
  public static G() {}
  protected static H() {}
  private static I() {}
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class Foo {
   3 |   public static A: string = '';
   4 |   protected static B: string = '';
   5 |   private static C: string = '';
   6 |   public D: string = '';
   7 |   protected E: string = '';
   8 |   private F: string = '';
   9 |   constructor() {}
  10 |   public J() {}
  11 |   protected K() {}
  12 |   private L() {}
> 13 |   public static G() {}
     |   ^^^^^^^^^^^^^^^^^^^^ Member G should be declared before all public instance method definitions.
  14 |   protected static H() {}
  15 |   private static I() {}
  16 | };
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class Foo {
   3 |   public static A: string = '';
   4 |   protected static B: string = '';
   5 |   private static C: string = '';
   6 |   public D: string = '';
   7 |   protected E: string = '';
   8 |   private F: string = '';
   9 |   constructor() {}
  10 |   public J() {}
  11 |   protected K() {}
  12 |   private L() {}
  13 |   public static G() {}
> 14 |   protected static H() {}
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Member H should be declared before all public instance method definitions.
  15 |   private static I() {}
  16 | };
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class Foo {
   3 |   public static A: string = '';
   4 |   protected static B: string = '';
   5 |   private static C: string = '';
   6 |   public D: string = '';
   7 |   protected E: string = '';
   8 |   private F: string = '';
   9 |   constructor() {}
  10 |   public J() {}
  11 |   protected K() {}
  12 |   private L() {}
  13 |   public static G() {}
  14 |   protected static H() {}
> 15 |   private static I() {}
     |   ^^^^^^^^^^^^^^^^^^^^^ Member I should be declared before all public instance method definitions.
  16 | };
  17 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class {
  [Z: string]: any;
  constructor() {}
  public static A: string = '';
  protected static B: string = '';
  private static C: string = '';
  public D: string = '';
  protected E: string = '';
  private F: string = '';
  public J() {}
  protected K() {}
  private L() {}
  public static G() {}
  protected static H() {}
  private static I() {}
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   [Z: string]: any;
   4 |   constructor() {}
>  5 |   public static A: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member A should be declared before all constructor definitions.
   6 |   protected static B: string = '';
   7 |   private static C: string = '';
   8 |   public D: string = '';
   9 |   protected E: string = '';
  10 |   private F: string = '';
  11 |   public J() {}
  12 |   protected K() {}
  13 |   private L() {}
  14 |   public static G() {}
  15 |   protected static H() {}
  16 |   private static I() {}
  17 | };
  18 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   [Z: string]: any;
   4 |   constructor() {}
   5 |   public static A: string = '';
>  6 |   protected static B: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member B should be declared before all constructor definitions.
   7 |   private static C: string = '';
   8 |   public D: string = '';
   9 |   protected E: string = '';
  10 |   private F: string = '';
  11 |   public J() {}
  12 |   protected K() {}
  13 |   private L() {}
  14 |   public static G() {}
  15 |   protected static H() {}
  16 |   private static I() {}
  17 | };
  18 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   [Z: string]: any;
   4 |   constructor() {}
   5 |   public static A: string = '';
   6 |   protected static B: string = '';
>  7 |   private static C: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member C should be declared before all constructor definitions.
   8 |   public D: string = '';
   9 |   protected E: string = '';
  10 |   private F: string = '';
  11 |   public J() {}
  12 |   protected K() {}
  13 |   private L() {}
  14 |   public static G() {}
  15 |   protected static H() {}
  16 |   private static I() {}
  17 | };
  18 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   [Z: string]: any;
   4 |   constructor() {}
   5 |   public static A: string = '';
   6 |   protected static B: string = '';
   7 |   private static C: string = '';
>  8 |   public D: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^ Member D should be declared before all constructor definitions.
   9 |   protected E: string = '';
  10 |   private F: string = '';
  11 |   public J() {}
  12 |   protected K() {}
  13 |   private L() {}
  14 |   public static G() {}
  15 |   protected static H() {}
  16 |   private static I() {}
  17 | };
  18 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   [Z: string]: any;
   4 |   constructor() {}
   5 |   public static A: string = '';
   6 |   protected static B: string = '';
   7 |   private static C: string = '';
   8 |   public D: string = '';
>  9 |   protected E: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^ Member E should be declared before all constructor definitions.
  10 |   private F: string = '';
  11 |   public J() {}
  12 |   protected K() {}
  13 |   private L() {}
  14 |   public static G() {}
  15 |   protected static H() {}
  16 |   private static I() {}
  17 | };
  18 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   [Z: string]: any;
   4 |   constructor() {}
   5 |   public static A: string = '';
   6 |   protected static B: string = '';
   7 |   private static C: string = '';
   8 |   public D: string = '';
   9 |   protected E: string = '';
> 10 |   private F: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Member F should be declared before all constructor definitions.
  11 |   public J() {}
  12 |   protected K() {}
  13 |   private L() {}
  14 |   public static G() {}
  15 |   protected static H() {}
  16 |   private static I() {}
  17 | };
  18 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class {
  constructor() {}
  protected static B: string = '';
  private static C: string = '';
  public D: string = '';
  protected E: string = '';
  private F: string = '';
  [Z: string]: any;
  public static G() {}
  public static A: string;
  protected static H() {}
  private static I() {}
  public J() {}
  protected K() {}
  private L() {}
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   constructor() {}
   4 |   protected static B: string = '';
   5 |   private static C: string = '';
   6 |   public D: string = '';
   7 |   protected E: string = '';
   8 |   private F: string = '';
   9 |   [Z: string]: any;
  10 |   public static G() {}
> 11 |   public static A: string;
     |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member A should be declared before all method definitions.
  12 |   protected static H() {}
  13 |   private static I() {}
  14 |   public J() {}
  15 |   protected K() {}
  16 |   private L() {}
  17 | };
  18 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class {
  protected static H() {}
  private static I() {}
  public J() {}
  protected K() {}
  private L() {}
  public static A: string;
  public static G() {}
  protected static B: string = '';
  private static C: string = '';
  public D: string = '';
  protected E: string = '';
  private F: string = '';
  constructor() {}
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   protected static H() {}
   4 |   private static I() {}
   5 |   public J() {}
   6 |   protected K() {}
   7 |   private L() {}
   8 |   public static A: string;
>  9 |   public static G() {}
     |   ^^^^^^^^^^^^^^^^^^^^ Member G should be declared before all field definitions.
  10 |   protected static B: string = '';
  11 |   private static C: string = '';
  12 |   public D: string = '';
  13 |   protected E: string = '';
  14 |   private F: string = '';
  15 |   constructor() {}
  16 | };
  17 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class {
  public static G() {}
  protected static H() {}
  protected static B: string = '';
  private static I() {}
  public J() {}
  protected K() {}
  private L() {}
  public static A: string;
  constructor() {}
  [Z: string]: any;
  private static C: string = '';
  public D: string = '';
  protected E: string = '';
  private F: string = '';
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public static G() {}
   4 |   protected static H() {}
   5 |   protected static B: string = '';
>  6 |   private static I() {}
     |   ^^^^^^^^^^^^^^^^^^^^^ Member I should be declared before all field definitions.
   7 |   public J() {}
   8 |   protected K() {}
   9 |   private L() {}
  10 |   public static A: string;
  11 |   constructor() {}
  12 |   [Z: string]: any;
  13 |   private static C: string = '';
  14 |   public D: string = '';
  15 |   protected E: string = '';
  16 |   private F: string = '';
  17 | };
  18 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public static G() {}
   4 |   protected static H() {}
   5 |   protected static B: string = '';
   6 |   private static I() {}
>  7 |   public J() {}
     |   ^^^^^^^^^^^^^ Member J should be declared before all field definitions.
   8 |   protected K() {}
   9 |   private L() {}
  10 |   public static A: string;
  11 |   constructor() {}
  12 |   [Z: string]: any;
  13 |   private static C: string = '';
  14 |   public D: string = '';
  15 |   protected E: string = '';
  16 |   private F: string = '';
  17 | };
  18 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public static G() {}
   4 |   protected static H() {}
   5 |   protected static B: string = '';
   6 |   private static I() {}
   7 |   public J() {}
>  8 |   protected K() {}
     |   ^^^^^^^^^^^^^^^^ Member K should be declared before all field definitions.
   9 |   private L() {}
  10 |   public static A: string;
  11 |   constructor() {}
  12 |   [Z: string]: any;
  13 |   private static C: string = '';
  14 |   public D: string = '';
  15 |   protected E: string = '';
  16 |   private F: string = '';
  17 | };
  18 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public static G() {}
   4 |   protected static H() {}
   5 |   protected static B: string = '';
   6 |   private static I() {}
   7 |   public J() {}
   8 |   protected K() {}
>  9 |   private L() {}
     |   ^^^^^^^^^^^^^^ Member L should be declared before all field definitions.
  10 |   public static A: string;
  11 |   constructor() {}
  12 |   [Z: string]: any;
  13 |   private static C: string = '';
  14 |   public D: string = '';
  15 |   protected E: string = '';
  16 |   private F: string = '';
  17 | };
  18 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public static G() {}
   4 |   protected static H() {}
   5 |   protected static B: string = '';
   6 |   private static I() {}
   7 |   public J() {}
   8 |   protected K() {}
   9 |   private L() {}
  10 |   public static A: string;
> 11 |   constructor() {}
     |   ^^^^^^^^^^^^^^^^ Member constructor should be declared before all field definitions.
  12 |   [Z: string]: any;
  13 |   private static C: string = '';
  14 |   public D: string = '';
  15 |   protected E: string = '';
  16 |   private F: string = '';
  17 | };
  18 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class {
  public static A: string;
  public static G() {}
  protected static H() {}
  private static I() {}
  public J() {}
  protected K() {}
  private L() {}
  constructor() {}
  protected static B: string = '';
  private static C: string = '';
  public D: string = '';
  protected E: string = '';
  private F: string = '';
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public static A: string;
>  4 |   public static G() {}
     |   ^^^^^^^^^^^^^^^^^^^^ Member G should be declared before all field definitions.
   5 |   protected static H() {}
   6 |   private static I() {}
   7 |   public J() {}
   8 |   protected K() {}
   9 |   private L() {}
  10 |   constructor() {}
  11 |   protected static B: string = '';
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | };
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public static A: string;
   4 |   public static G() {}
>  5 |   protected static H() {}
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Member H should be declared before all field definitions.
   6 |   private static I() {}
   7 |   public J() {}
   8 |   protected K() {}
   9 |   private L() {}
  10 |   constructor() {}
  11 |   protected static B: string = '';
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | };
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public static A: string;
   4 |   public static G() {}
   5 |   protected static H() {}
>  6 |   private static I() {}
     |   ^^^^^^^^^^^^^^^^^^^^^ Member I should be declared before all field definitions.
   7 |   public J() {}
   8 |   protected K() {}
   9 |   private L() {}
  10 |   constructor() {}
  11 |   protected static B: string = '';
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | };
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public static A: string;
   4 |   public static G() {}
   5 |   protected static H() {}
   6 |   private static I() {}
>  7 |   public J() {}
     |   ^^^^^^^^^^^^^ Member J should be declared before all field definitions.
   8 |   protected K() {}
   9 |   private L() {}
  10 |   constructor() {}
  11 |   protected static B: string = '';
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | };
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public static A: string;
   4 |   public static G() {}
   5 |   protected static H() {}
   6 |   private static I() {}
   7 |   public J() {}
>  8 |   protected K() {}
     |   ^^^^^^^^^^^^^^^^ Member K should be declared before all field definitions.
   9 |   private L() {}
  10 |   constructor() {}
  11 |   protected static B: string = '';
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | };
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public static A: string;
   4 |   public static G() {}
   5 |   protected static H() {}
   6 |   private static I() {}
   7 |   public J() {}
   8 |   protected K() {}
>  9 |   private L() {}
     |   ^^^^^^^^^^^^^^ Member L should be declared before all field definitions.
  10 |   constructor() {}
  11 |   protected static B: string = '';
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | };
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public static A: string;
   4 |   public static G() {}
   5 |   protected static H() {}
   6 |   private static I() {}
   7 |   public J() {}
   8 |   protected K() {}
   9 |   private L() {}
> 10 |   constructor() {}
     |   ^^^^^^^^^^^^^^^^ Member constructor should be declared before all field definitions.
  11 |   protected static B: string = '';
  12 |   private static C: string = '';
  13 |   public D: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | };
  17 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class {
  private L() {}
  public J() {}
  public static G() {}
  protected static H() {}
  private static I() {}
  protected K() {}
  constructor() {}
  public D: string = '';
  private static C: string = '';
  public static A: string;
  private static C: string = '';
  protected static B: string = '';
  private F: string = '';
  protected static B: string = '';
  protected E: string = '';
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   private L() {}
   4 |   public J() {}
   5 |   public static G() {}
   6 |   protected static H() {}
   7 |   private static I() {}
   8 |   protected K() {}
   9 |   constructor() {}
  10 |   public D: string = '';
  11 |   private static C: string = '';
> 12 |   public static A: string;
     |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member A should be declared before all private field definitions.
  13 |   private static C: string = '';
  14 |   protected static B: string = '';
  15 |   private F: string = '';
  16 |   protected static B: string = '';
  17 |   protected E: string = '';
  18 | };
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   private L() {}
   4 |   public J() {}
   5 |   public static G() {}
   6 |   protected static H() {}
   7 |   private static I() {}
   8 |   protected K() {}
   9 |   constructor() {}
  10 |   public D: string = '';
  11 |   private static C: string = '';
  12 |   public static A: string;
  13 |   private static C: string = '';
  14 |   protected static B: string = '';
> 15 |   private F: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Member F should be declared before all protected field definitions.
  16 |   protected static B: string = '';
  17 |   protected E: string = '';
  18 | };
  19 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class {
  public static G() {}
  private static I() {}
  public J() {}
  protected static H() {}
  private L() {}
  protected K() {}
  public D: string = '';
  constructor() {}
  public static A: string;
  protected static B: string = '';
  protected E: string = '';
  private static C: string = '';
  private F: string = '';
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public static G() {}
   4 |   private static I() {}
   5 |   public J() {}
>  6 |   protected static H() {}
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Member H should be declared before all public instance method definitions.
   7 |   private L() {}
   8 |   protected K() {}
   9 |   public D: string = '';
  10 |   constructor() {}
  11 |   public static A: string;
  12 |   protected static B: string = '';
  13 |   protected E: string = '';
  14 |   private static C: string = '';
  15 |   private F: string = '';
  16 | };
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public static G() {}
   4 |   private static I() {}
   5 |   public J() {}
   6 |   protected static H() {}
   7 |   private L() {}
   8 |   protected K() {}
   9 |   public D: string = '';
> 10 |   constructor() {}
     |   ^^^^^^^^^^^^^^^^ Member constructor should be declared before all public field definitions.
  11 |   public static A: string;
  12 |   protected static B: string = '';
  13 |   protected E: string = '';
  14 |   private static C: string = '';
  15 |   private F: string = '';
  16 | };
  17 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class {
  public J() {}
  public static G() {}
  public D: string = '';
  public static A: string = '';
  private L() {}
  constructor() {}
  protected K() {}
  protected static H() {}
  private static I() {}
  protected static B: string = '';
  private static C: string = '';
  protected E: string = '';
  private F: string = '';
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public J() {}
   4 |   public static G() {}
   5 |   public D: string = '';
   6 |   public static A: string = '';
   7 |   private L() {}
>  8 |   constructor() {}
     |   ^^^^^^^^^^^^^^^^ Member constructor should be declared before all method definitions.
   9 |   protected K() {}
  10 |   protected static H() {}
  11 |   private static I() {}
  12 |   protected static B: string = '';
  13 |   private static C: string = '';
  14 |   protected E: string = '';
  15 |   private F: string = '';
  16 | };
  17 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class {
  public J() {}
  private static I() {}
  public static G() {}
  protected static H() {}
  protected K() {}
  private L() {}
  constructor() {}
  public static A: string;
  private F: string = '';
  protected static B: string = '';
  public D: string = '';
  private static C: string = '';
  protected E: string = '';
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public J() {}
   4 |   private static I() {}
>  5 |   public static G() {}
     |   ^^^^^^^^^^^^^^^^^^^^ Member G should be declared before all private static method definitions.
   6 |   protected static H() {}
   7 |   protected K() {}
   8 |   private L() {}
   9 |   constructor() {}
  10 |   public static A: string;
  11 |   private F: string = '';
  12 |   protected static B: string = '';
  13 |   public D: string = '';
  14 |   private static C: string = '';
  15 |   protected E: string = '';
  16 | };
  17 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   public J() {}
   4 |   private static I() {}
   5 |   public static G() {}
>  6 |   protected static H() {}
     |   ^^^^^^^^^^^^^^^^^^^^^^^ Member H should be declared before all private static method definitions.
   7 |   protected K() {}
   8 |   private L() {}
   9 |   constructor() {}
  10 |   public static A: string;
  11 |   private F: string = '';
  12 |   protected static B: string = '';
  13 |   public D: string = '';
  14 |   private static C: string = '';
  15 |   protected E: string = '';
  16 | };
  17 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class {
  private static I() {}
  protected static H() {}
  protected static B: string = '';
  public static G() {}
  public J() {}
  protected K() {}
  private static C: string = '';
  private L() {}
  private F: string = '';
  protected E: string = '';
  public static A: string;
  public D: string = '';
  constructor() {}
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   private static I() {}
   4 |   protected static H() {}
   5 |   protected static B: string = '';
   6 |   public static G() {}
   7 |   public J() {}
   8 |   protected K() {}
   9 |   private static C: string = '';
> 10 |   private L() {}
     |   ^^^^^^^^^^^^^^ Member L should be declared before all protected static field definitions.
  11 |   private F: string = '';
  12 |   protected E: string = '';
  13 |   public static A: string;
  14 |   public D: string = '';
  15 |   constructor() {}
  16 | };
  17 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

const foo = class {
  private L() {}
  private static I() {}
  protected static H() {}
  public static G() {}
  protected static B: string = '';
  public J() {}
  protected K() {}
  private static C: string = '';
  private F: string = '';
  protected E: string = '';
  public static A: string;
  public D: string = '';
  constructor() {}
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = class {
   3 |   private L() {}
   4 |   private static I() {}
   5 |   protected static H() {}
   6 |   public static G() {}
   7 |   protected static B: string = '';
>  8 |   public J() {}
     |   ^^^^^^^^^^^^^ Member J should be declared before all protected static field definitions.
   9 |   protected K() {}
  10 |   private static C: string = '';
  11 |   private F: string = '';
  12 |   protected E: string = '';
  13 |   public static A: string;
  14 |   public D: string = '';
  15 |   constructor() {}
  16 | };
  17 |       
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  K = () => {};
  A: string;
  constructor() {}
  [Z: string]: any;
  J() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   K = () => {};
> 4 |   A: string;
    |   ^^^^^^^^^^ Member A should be declared before all public instance method definitions.
  5 |   constructor() {}
  6 |   [Z: string]: any;
  7 |   J() {}
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   K = () => {};
  4 |   A: string;
> 5 |   constructor() {}
    |   ^^^^^^^^^^^^^^^^ Member constructor should be declared before all public instance method definitions.
  6 |   [Z: string]: any;
  7 |   J() {}
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   K = () => {};
  4 |   A: string;
  5 |   constructor() {}
> 6 |   [Z: string]: any;
    |   ^^^^^^^^^^^^^^^^^ Member Z should be declared before all public instance method definitions.
  7 |   J() {}
  8 | }
  9 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  J() {}
  constructor() {}
  K = () => {};
  A: string;
  [Z: string]: any;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   J() {}
  4 |   constructor() {}
> 5 |   K = () => {};
    |   ^^^^^^^^^^^^^ Member K should be declared before all constructor definitions.
  6 |   A: string;
  7 |   [Z: string]: any;
  8 | }
  9 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  J() {}
  constructor() {}
  K = () => {};
  L: () => {};
  A: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   J() {}
  4 |   constructor() {}
> 5 |   K = () => {};
    |   ^^^^^^^^^^^^^ Member K should be declared before all constructor definitions.
  6 |   L: () => {};
  7 |   A: string;
  8 | }
  9 |       
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  K: () => {};
  J();
  A: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   K: () => {};
  4 |   J();
> 5 |   A: string;
    |   ^^^^^^^^^^ Member A should be declared before all method definitions.
  6 | }
  7 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  K: () => {};
  J();
  A: string;
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   K: () => {};
  4 |   J();
> 5 |   A: string;
    |   ^^^^^^^^^^ Member A should be declared before all method definitions.
  6 | };
  7 |       
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  A: string;
  K: () => {};
  J();
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   A: string;
  4 |   K: () => {};
> 5 |   J();
    |   ^^^^ Member J should be declared before all field definitions.
  6 | };
  7 |       
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

abstract class Foo {
  abstract A(): void;
  B: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class Foo {
  3 |   abstract A(): void;
> 4 |   B: string;
    |   ^^^^^^^^^^ Member B should be declared before all public abstract method definitions.
  5 | }
  6 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

abstract class Foo {
  abstract A: () => {};
  B: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class Foo {
  3 |   abstract A: () => {};
> 4 |   B: string;
    |   ^^^^^^^^^^ Member B should be declared before all public abstract field definitions.
  5 | }
  6 |       
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts

abstract class Foo {
  abstract A: () => {};
  B: string;
  public C() {}
  private D() {}
  abstract E() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class Foo {
  3 |   abstract A: () => {};
> 4 |   B: string;
    |   ^^^^^^^^^^ Member B should be declared before all public abstract field definitions.
  5 |   public C() {}
  6 |   private D() {}
  7 |   abstract E() {}
  8 | }
  9 |       
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  C: number;
  [A: string]: number;
  public static D(): {};
  static [B: string]: number;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   C: number;
  4 |   [A: string]: number;
> 5 |   public static D(): {};
    |   ^^^^^^^^^^^^^^^^^^^^^^ Member D should be declared before all signature definitions.
  6 |   static [B: string]: number;
  7 | }
  8 |       
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts

abstract class Foo {
  abstract B: string;
  abstract A(): void;
  public C(): {};
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class Foo {
  3 |   abstract B: string;
> 4 |   abstract A(): void;
    |   ^^^^^^^^^^^^^^^^^^^ Member A should be declared before all field definitions.
  5 |   public C(): {};
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class Foo {
  3 |   abstract B: string;
  4 |   abstract A(): void;
> 5 |   public C(): {};
    |   ^^^^^^^^^^^^^^^ Member C should be declared before all field definitions.
  6 | }
  7 |       
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts

// no accessibility === public
class Foo {
  B: string;
  @Dec() A: string = '';
  C: string = '';
  constructor() {}
  D() {}
  E() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | class Foo {
   4 |   B: string;
>  5 |   @Dec() A: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^ Member A should be declared before all field definitions.
   6 |   C: string = '';
   7 |   constructor() {}
   8 |   D() {}
   9 |   E() {}
  10 | }
  11 |       
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  A() {}

  @Decorator()
  B() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   A() {}
  4 |
> 5 |   @Decorator()
    |   ^^^^^^^^^^^^
> 6 |   B() {}
    | ^^^^^^^^^ Member B should be declared before all method definitions.
  7 | }
  8 |       
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  @Decorator() C() {}
  A() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   @Decorator() C() {}
> 4 |   A() {}
    |   ^^^^^^ Member A should be declared before all decorated method definitions.
  5 | }
  6 |       
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  A(): void;
  B(): void;
  private C() {}
  constructor() {}
  @Dec() private D() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   A(): void;
  4 |   B(): void;
  5 |   private C() {}
  6 |   constructor() {}
> 7 |   @Dec() private D() {}
    |   ^^^^^^^^^^^^^^^^^^^^^ Member D should be declared before all private method definitions.
  8 | }
  9 |       
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  A: string;
  get B() {}
  constructor() {}
  set B() {}
  get C() {}
  set C() {}
  D(): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   A: string;
   4 |   get B() {}
>  5 |   constructor() {}
     |   ^^^^^^^^^^^^^^^^ Member constructor should be declared before all get, set definitions.
   6 |   set B() {}
   7 |   get C() {}
   8 |   set C() {}
   9 |   D(): void;
  10 | }
  11 |       
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  A: string;
  private C(): void;
  constructor() {}
  @Dec() private B: string;
  set D() {}
  E(): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   A: string;
   4 |   private C(): void;
>  5 |   constructor() {}
     |   ^^^^^^^^^^^^^^^^ Member constructor should be declared before all private decorated field, public set, private method definitions.
   6 |   @Dec() private B: string;
   7 |   set D() {}
   8 |   E(): void;
   9 | }
  10 |       
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  A: string;
  constructor() {}
  get B() {}
  set B() {}
  get C() {}
  set C() {}
  D(): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   A: string;
   4 |   constructor() {}
   5 |   get B() {}
   6 |   set B() {}
>  7 |   get C() {}
     |   ^^^^^^^^^^ Member C should be declared before all set definitions.
   8 |   set C() {}
   9 |   D(): void;
  10 | }
  11 |       
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  static {}
  m() {}
  f = 1;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   static {}
> 4 |   m() {}
    |   ^^^^^^ Member m should be declared before all static initialization definitions.
  5 |   f = 1;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   static {}
  4 |   m() {}
> 5 |   f = 1;
    |   ^^^^^^ Member f should be declared before all static initialization definitions.
  6 | }
  7 |       
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  m() {}
  f = 1;
  static {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   m() {}
  4 |   f = 1;
> 5 |   static {}
    |   ^^^^^^^^^ Member static block should be declared before all method definitions.
  6 | }
  7 |       
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  f = 1;
  static {}
  m() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   f = 1;
> 4 |   static {}
    |   ^^^^^^^^^ Member static block should be declared before all field definitions.
  5 |   m() {}
  6 | }
  7 |       
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  static {}
  f = 1;
  m() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   static {}
> 4 |   f = 1;
    |   ^^^^^^ Member f should be declared before all static initialization definitions.
  5 |   m() {}
  6 | }
  7 |       
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  private mp() {}
  static {}
  public m() {}
  @dec
  md() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   private mp() {}
> 4 |   static {}
    |   ^^^^^^^^^ Member static block should be declared before all method definitions.
  5 |   public m() {}
  6 |   @dec
  7 |   md() {}
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   private mp() {}
  4 |   static {}
  5 |   public m() {}
> 6 |   @dec
    |   ^^^^
> 7 |   md() {}
    | ^^^^^^^^^^ Member md should be declared before all method definitions.
  8 | }
  9 |       
```

## with private identifier

### Test Code

<!-- prettier-ignore -->
```ts

// no accessibility === public
class Foo {
  #imPrivate() {}
  imPublic() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // no accessibility === public
  3 | class Foo {
  4 |   #imPrivate() {}
> 5 |   imPublic() {}
    |   ^^^^^^^^^^^^^ Member imPublic should be declared before all #private method definitions.
  6 | }
  7 |       
```

## private and #private member order

### Test Code

<!-- prettier-ignore -->
```ts

// no accessibility === public
class Foo {
  #imPrivate() {}
  private imPrivate() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // no accessibility === public
  3 | class Foo {
  4 |   #imPrivate() {}
> 5 |   private imPrivate() {}
    |   ^^^^^^^^^^^^^^^^^^^^^^ Member imPrivate should be declared before all #private method definitions.
  6 | }
  7 |       
```

## #private and private member order

### Test Code

<!-- prettier-ignore -->
```ts

// no accessibility === public
class Foo {
  private imPrivate() {}
  #imPrivate() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // no accessibility === public
  3 | class Foo {
  4 |   private imPrivate() {}
> 5 |   #imPrivate() {}
    |   ^^^^^^^^^^^^^^^ Member imPrivate should be declared before all private method definitions.
  6 | }
  7 |       
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts

// no accessibility === public
class Foo {
  B: string;
  readonly A: string = '';
  C: string = '';
  constructor() {}
  D() {}
  E() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // no accessibility === public
   3 | class Foo {
   4 |   B: string;
>  5 |   readonly A: string = '';
     |   ^^^^^^^^^^^^^^^^^^^^^^^^ Member A should be declared before all field definitions.
   6 |   C: string = '';
   7 |   constructor() {}
   8 |   D() {}
   9 |   E() {}
  10 | }
  11 |       
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  A: string;
  private C(): void;
  constructor() {}
  private readonly B: string;
  set D() {}
  E(): void;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   A: string;
   4 |   private C(): void;
>  5 |   constructor() {}
     |   ^^^^^^^^^^^^^^^^ Member constructor should be declared before all public set, private method definitions.
   6 |   private readonly B: string;
   7 |   set D() {}
   8 |   E(): void;
   9 | }
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 |   A: string;
   4 |   private C(): void;
   5 |   constructor() {}
>  6 |   private readonly B: string;
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member B should be declared before all public field definitions.
   7 |   set D() {}
   8 |   E(): void;
   9 | }
  10 |       
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts

abstract class Foo {
  @Dec public readonly A: string;
  public readonly B: string;
  public static readonly C: string;
  static readonly #D: string;
  readonly #E: string;

  @Dec public F: string;
  public G: string;
  public static H: string;
  static readonly #I: string;
  readonly #J: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | abstract class Foo {
   3 |   @Dec public readonly A: string;
   4 |   public readonly B: string;
   5 |   public static readonly C: string;
   6 |   static readonly #D: string;
   7 |   readonly #E: string;
   8 |
>  9 |   @Dec public F: string;
     |   ^^^^^^^^^^^^^^^^^^^^^^ Member F should be declared before all readonly field definitions.
  10 |   public G: string;
  11 |   public static H: string;
  12 |   static readonly #I: string;
  13 |   readonly #J: string;
  14 | }
  15 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | abstract class Foo {
   3 |   @Dec public readonly A: string;
   4 |   public readonly B: string;
   5 |   public static readonly C: string;
   6 |   static readonly #D: string;
   7 |   readonly #E: string;
   8 |
   9 |   @Dec public F: string;
  10 |   public G: string;
  11 |   public static H: string;
> 12 |   static readonly #I: string;
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member I should be declared before all field definitions.
  13 |   readonly #J: string;
  14 | }
  15 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | abstract class Foo {
   3 |   @Dec public readonly A: string;
   4 |   public readonly B: string;
   5 |   public static readonly C: string;
   6 |   static readonly #D: string;
   7 |   readonly #E: string;
   8 |
   9 |   @Dec public F: string;
  10 |   public G: string;
  11 |   public static H: string;
  12 |   static readonly #I: string;
> 13 |   readonly #J: string;
     |   ^^^^^^^^^^^^^^^^^^^^ Member J should be declared before all field definitions.
  14 | }
  15 |       
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts

abstract class Foo {
  @Dec public readonly DA: string;
  @Dec protected readonly DB: string;
  @Dec private readonly DC: string;

  public static readonly SA: string;
  protected static readonly SB: string;
  private static readonly SC: string;
  static readonly #SD: string;

  public readonly IA: string;
  protected readonly IB: string;
  private readonly IC: string;
  readonly #ID: string;

  public abstract readonly AA: string;
  protected abstract readonly AB: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | abstract class Foo {
   3 |   @Dec public readonly DA: string;
   4 |   @Dec protected readonly DB: string;
   5 |   @Dec private readonly DC: string;
   6 |
   7 |   public static readonly SA: string;
   8 |   protected static readonly SB: string;
   9 |   private static readonly SC: string;
  10 |   static readonly #SD: string;
  11 |
  12 |   public readonly IA: string;
  13 |   protected readonly IB: string;
  14 |   private readonly IC: string;
  15 |   readonly #ID: string;
  16 |
> 17 |   public abstract readonly AA: string;
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member AA should be declared before all static readonly field definitions.
  18 |   protected abstract readonly AB: string;
  19 | }
  20 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | abstract class Foo {
   3 |   @Dec public readonly DA: string;
   4 |   @Dec protected readonly DB: string;
   5 |   @Dec private readonly DC: string;
   6 |
   7 |   public static readonly SA: string;
   8 |   protected static readonly SB: string;
   9 |   private static readonly SC: string;
  10 |   static readonly #SD: string;
  11 |
  12 |   public readonly IA: string;
  13 |   protected readonly IB: string;
  14 |   private readonly IC: string;
  15 |   readonly #ID: string;
  16 |
  17 |   public abstract readonly AA: string;
> 18 |   protected abstract readonly AB: string;
     |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member AB should be declared before all static readonly field definitions.
  19 | }
  20 |       
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  readonly A: string;
  readonly B: string;

  C: string;
  D: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   readonly A: string;
  4 |   readonly B: string;
  5 |
> 6 |   C: string;
    |   ^^^^^^^^^^ Member C should be declared before all readonly field definitions.
  7 |   D: string;
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   readonly A: string;
  4 |   readonly B: string;
  5 |
  6 |   C: string;
> 7 |   D: string;
    |   ^^^^^^^^^^ Member D should be declared before all readonly field definitions.
  8 | }
  9 |       
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  [i: number]: string;
  readonly [i: string]: string;

  A: string;
  readonly B: string;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   [i: number]: string;
> 4 |   readonly [i: string]: string;
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member i should be declared before all signature definitions.
  5 |
  6 |   A: string;
  7 |   readonly B: string;
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   [i: number]: string;
  4 |   readonly [i: string]: string;
  5 |
  6 |   A: string;
> 7 |   readonly B: string;
    |   ^^^^^^^^^^^^^^^^^^^ Member B should be declared before all field definitions.
  8 | }
  9 |       
```
