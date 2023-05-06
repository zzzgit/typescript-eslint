# lines-around-comment

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

bar();
/** block block block
 * block
 */
var a = 1;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

bar();

/** block block block
 * block
 */
var a = 1;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | bar();
> 3 | /** block block block
    | ^^^^^^^^^^^^^^^^^^^^^
> 4 |  * block
    | ^^^^^^^^
> 5 |  */
    | ^^^^ Expected line before comment.
  6 | var a = 1;
  7 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
interface A {
  a: string;
  // line
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface A {
  a: string;

  // line
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | interface A {
  2 |   a: string;
> 3 |   // line
    |   ^^^^^^^ Expected line before comment.
  4 | }
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
interface A {
  a: string;
  /* block
     comment */
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface A {
  a: string;

  /* block
     comment */
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | interface A {
  2 |   a: string;
> 3 |   /* block
    |   ^^^^^^^^
> 4 |      comment */
    | ^^^^^^^^^^^^^^^^ Expected line before comment.
  5 | }
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
interface A {
  // line
  a: string;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface A {

  // line
  a: string;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | interface A {
> 2 |   // line
    |   ^^^^^^^ Expected line before comment.
  3 |   a: string;
  4 | }
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
interface A {
  /* block
     comment */
  a: string;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface A {

  /* block
     comment */
  a: string;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | interface A {
> 2 |   /* block
    |   ^^^^^^^^
> 3 |      comment */
    | ^^^^^^^^^^^^^^^^ Expected line before comment.
  4 |   a: string;
  5 | }
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
interface A {
  a: string;
  // line
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface A {
  a: string;
  // line

}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | interface A {
  2 |   a: string;
> 3 |   // line
    |   ^^^^^^^ Expected line after comment.
  4 | }
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
interface A {
  a: string;
  /* block
     comment */
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface A {
  a: string;
  /* block
     comment */

}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | interface A {
  2 |   a: string;
> 3 |   /* block
    |   ^^^^^^^^
> 4 |      comment */
    | ^^^^^^^^^^^^^^^^ Expected line after comment.
  5 | }
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
type A = {
  a: string;
  // line
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
type A = {
  a: string;

  // line
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | type A = {
  2 |   a: string;
> 3 |   // line
    |   ^^^^^^^ Expected line before comment.
  4 | }
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
type A = {
  a: string;
  /* block
     comment */
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
type A = {
  a: string;

  /* block
     comment */
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | type A = {
  2 |   a: string;
> 3 |   /* block
    |   ^^^^^^^^
> 4 |      comment */
    | ^^^^^^^^^^^^^^^^ Expected line before comment.
  5 | }
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
type A = {
  // line
  a: string;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
type A = {

  // line
  a: string;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | type A = {
> 2 |   // line
    |   ^^^^^^^ Expected line before comment.
  3 |   a: string;
  4 | }
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
type A = {
  /* block
     comment */
  a: string;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
type A = {

  /* block
     comment */
  a: string;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | type A = {
> 2 |   /* block
    |   ^^^^^^^^
> 3 |      comment */
    | ^^^^^^^^^^^^^^^^ Expected line before comment.
  4 |   a: string;
  5 | }
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
type A = {
  a: string;
  // line
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
type A = {
  a: string;
  // line

}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | type A = {
  2 |   a: string;
> 3 |   // line
    |   ^^^^^^^ Expected line after comment.
  4 | }
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
type A = {
  a: string;
  /* block
     comment */
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
type A = {
  a: string;
  /* block
     comment */

}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | type A = {
  2 |   a: string;
> 3 |   /* block
    |   ^^^^^^^^
> 4 |      comment */
    | ^^^^^^^^^^^^^^^^ Expected line after comment.
  5 | }
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
enum A {
  a,
  // line
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum A {
  a,

  // line
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | enum A {
  2 |   a,
> 3 |   // line
    |   ^^^^^^^ Expected line before comment.
  4 | }
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
enum A {
  a,
  /* block
     comment */
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum A {
  a,

  /* block
     comment */
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | enum A {
  2 |   a,
> 3 |   /* block
    |   ^^^^^^^^
> 4 |      comment */
    | ^^^^^^^^^^^^^^^^ Expected line before comment.
  5 | }
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
enum A {
  // line
  a,
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum A {

  // line
  a,
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | enum A {
> 2 |   // line
    |   ^^^^^^^ Expected line before comment.
  3 |   a,
  4 | }
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
enum A {
  /* block
     comment */
  a,
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum A {

  /* block
     comment */
  a,
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | enum A {
> 2 |   /* block
    |   ^^^^^^^^
> 3 |      comment */
    | ^^^^^^^^^^^^^^^^ Expected line before comment.
  4 |   a,
  5 | }
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
enum A {
  a,
  // line
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum A {
  a,
  // line

}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | enum A {
  2 |   a,
> 3 |   // line
    |   ^^^^^^^ Expected line after comment.
  4 | }
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
enum A {
  a,
  /* block
     comment */
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum A {
  a,
  /* block
     comment */

}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | enum A {
  2 |   a,
> 3 |   /* block
    |   ^^^^^^^^
> 4 |      comment */
    | ^^^^^^^^^^^^^^^^ Expected line after comment.
  5 | }
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
module A {
  const a: string;
  // line
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
module A {
  const a: string;

  // line
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | module A {
  2 |   const a: string;
> 3 |   // line
    |   ^^^^^^^ Expected line before comment.
  4 | }
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
module A {
  const a: string;
  /* block
     comment */
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
module A {
  const a: string;

  /* block
     comment */
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | module A {
  2 |   const a: string;
> 3 |   /* block
    |   ^^^^^^^^
> 4 |      comment */
    | ^^^^^^^^^^^^^^^^ Expected line before comment.
  5 | }
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
module A {
  // line
  const a: string;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
module A {

  // line
  const a: string;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | module A {
> 2 |   // line
    |   ^^^^^^^ Expected line before comment.
  3 |   const a: string;
  4 | }
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
module A {
  /* block
     comment */
  const a: string;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
module A {

  /* block
     comment */
  const a: string;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | module A {
> 2 |   /* block
    |   ^^^^^^^^
> 3 |      comment */
    | ^^^^^^^^^^^^^^^^ Expected line before comment.
  4 |   const a: string;
  5 | }
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
module A {
  const a: string;
  // line
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
module A {
  const a: string;
  // line

}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | module A {
  2 |   const a: string;
> 3 |   // line
    |   ^^^^^^^ Expected line after comment.
  4 | }
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
module A {
  const a: string;
  /* block
     comment */
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
module A {
  const a: string;
  /* block
     comment */

}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | module A {
  2 |   const a: string;
> 3 |   /* block
    |   ^^^^^^^^
> 4 |      comment */
    | ^^^^^^^^^^^^^^^^ Expected line after comment.
  5 | }
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
interface A {
  a: string;
  /* block */ /* block */
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface A {
  a: string;

  /* block */ /* block */
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | interface A {
  2 |   a: string;
> 3 |   /* block */ /* block */
    |   ^^^^^^^^^^^ Expected line before comment.
  4 | }
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
interface A {
  a: string;
  /* block */ // line
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface A {
  a: string;

  /* block */ // line
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | interface A {
  2 |   a: string;
> 3 |   /* block */ // line
    |   ^^^^^^^^^^^ Expected line before comment.
  4 | }
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
interface A {
  /* block */ /* block */
  a: string;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface A {
  /* block */ /* block */

  a: string;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | interface A {
> 2 |   /* block */ /* block */
    |               ^^^^^^^^^^^ Expected line after comment.
  3 |   a: string;
  4 | }
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
interface A {
  /* block */ // line
  a: string;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface A {
  /* block */ // line

  a: string;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | interface A {
> 2 |   /* block */ // line
    |               ^^^^^^^ Expected line after comment.
  3 |   a: string;
  4 | }
```
