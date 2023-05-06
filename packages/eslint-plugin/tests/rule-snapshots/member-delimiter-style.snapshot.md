# member-delimiter-style

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string
    |                 ^ Expected a semicolon.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a semicolon.
  5 | }
  6 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

type Test = {
  a: {
      one: 1
  }; b: 2
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Test = {
  3 |   a: {
  4 |       one: 1
> 5 |   }; b: 2
    |     ^ Unexpected separator (;).
  6 | };
  7 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string
    |                 ^ Expected a semicolon.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a semicolon.
  5 | }
  6 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string
    |                 ^ Expected a semicolon.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a semicolon.
  5 | }
  6 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string
    |                 ^ Expected a semicolon.
  4 |     age: number
  5 | }
  6 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string;
> 4 |     age: number
    |                ^ Expected a semicolon.
  5 | }
  6 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string
    |                 ^ Expected a comma.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a comma.
  5 | }
  6 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string
    |                 ^ Expected a comma.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a comma.
  5 | }
  6 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string
    |                 ^ Expected a comma.
  4 |     age: number
  5 | }
  6 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string;
    |                  ^ Expected a comma.
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Expected a comma.
  5 | }
  6 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string;
    |                  ^ Expected a comma.
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Expected a comma.
  5 | }
  6 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string;
    |                  ^ Expected a comma.
  4 |     age: number
  5 | }
  6 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string
    |                 ^ Expected a comma.
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string;
    |                  ^ Unexpected separator (;).
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string;
    |                  ^ Unexpected separator (;).
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string;
    |                  ^ Unexpected separator (;).
  4 |     age: number
  5 | }
  6 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string,
    |                  ^ Unexpected separator (,).
  4 |     age: number,
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string,
> 4 |     age: number,
    |                 ^ Unexpected separator (,).
  5 | }
  6 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string,
    |                  ^ Unexpected separator (,).
  4 |     age: number,
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string,
> 4 |     age: number,
    |                 ^ Unexpected separator (,).
  5 | }
  6 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string,
    |                  ^ Unexpected separator (,).
  4 |     age: number
  5 | }
  6 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string
> 4 |     age: number,
    |                 ^ Unexpected separator (,).
  5 | }
  6 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string
    |                 ^ Expected a semicolon.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a semicolon.
  5 | }
  6 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string
    |                 ^ Expected a semicolon.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a semicolon.
  5 | }
  6 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string;
> 4 |     age: number
    |                ^ Expected a semicolon.
  5 | }
  6 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string
    |                 ^ Expected a comma.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a comma.
  5 | }
  6 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string
    |                 ^ Expected a comma.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a comma.
  5 | }
  6 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string
    |                 ^ Expected a comma.
  4 |     age: number
  5 | }
  6 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string;
    |                  ^ Expected a comma.
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Expected a comma.
  5 | }
  6 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string;
    |                  ^ Expected a comma.
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Expected a comma.
  5 | }
  6 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string;
    |                  ^ Expected a comma.
  4 |     age: number
  5 | }
  6 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string
    |                 ^ Expected a comma.
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string;
    |                  ^ Unexpected separator (;).
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string;
    |                  ^ Unexpected separator (;).
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string;
    |                  ^ Unexpected separator (;).
  4 |     age: number
  5 | }
  6 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string,
    |                  ^ Unexpected separator (,).
  4 |     age: number,
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string,
> 4 |     age: number,
    |                 ^ Unexpected separator (,).
  5 | }
  6 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string,
    |                  ^ Unexpected separator (,).
  4 |     age: number,
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string,
> 4 |     age: number,
    |                 ^ Unexpected separator (,).
  5 | }
  6 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     name: string,
    |                  ^ Unexpected separator (,).
  4 |     age: number
  5 | }
  6 |       
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string
> 4 |     age: number,
    |                 ^ Unexpected separator (,).
  5 | }
  6 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string
    |                 ^ Expected a semicolon.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a semicolon.
  5 | }
  6 |       
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string
    |                 ^ Expected a semicolon.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a semicolon.
  5 | }
  6 |       
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string
    |                 ^ Expected a semicolon.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a semicolon.
  5 | }
  6 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string;
> 4 |     age: number
    |                ^ Expected a semicolon.
  5 | }
  6 |       
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string
    |                 ^ Expected a comma.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a comma.
  5 | }
  6 |       
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string
    |                 ^ Expected a comma.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a comma.
  5 | }
  6 |       
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string
    |                 ^ Expected a comma.
  4 |     age: number
  5 | }
  6 |       
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string;
    |                  ^ Expected a comma.
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Expected a comma.
  5 | }
  6 |       
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string;
    |                  ^ Expected a comma.
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Expected a comma.
  5 | }
  6 |       
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string;
    |                  ^ Expected a comma.
  4 |     age: number
  5 | }
  6 |       
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string
    |                 ^ Expected a comma.
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string;
    |                  ^ Unexpected separator (;).
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string;
    |                  ^ Unexpected separator (;).
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string;
    |                  ^ Unexpected separator (;).
  4 |     age: number
  5 | }
  6 |       
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string,
    |                  ^ Unexpected separator (,).
  4 |     age: number,
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string,
> 4 |     age: number,
    |                 ^ Unexpected separator (,).
  5 | }
  6 |       
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string,
    |                  ^ Unexpected separator (,).
  4 |     age: number,
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string,
> 4 |     age: number,
    |                 ^ Unexpected separator (,).
  5 | }
  6 |       
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string,
    |                  ^ Unexpected separator (,).
  4 |     age: number
  5 | }
  6 |       
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string
> 4 |     age: number,
    |                 ^ Unexpected separator (,).
  5 | }
  6 |       
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string
    |                 ^ Expected a semicolon.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a semicolon.
  5 | }
  6 |       
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string
    |                 ^ Expected a semicolon.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a semicolon.
  5 | }
  6 |       
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string;
> 4 |     age: number
    |                ^ Expected a semicolon.
  5 | }
  6 |       
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string
    |                 ^ Expected a comma.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a comma.
  5 | }
  6 |       
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string
    |                 ^ Expected a comma.
  4 |     age: number
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string
> 4 |     age: number
    |                ^ Expected a comma.
  5 | }
  6 |       
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string
    |                 ^ Expected a comma.
  4 |     age: number
  5 | }
  6 |       
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string;
    |                  ^ Expected a comma.
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Expected a comma.
  5 | }
  6 |       
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string;
    |                  ^ Expected a comma.
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Expected a comma.
  5 | }
  6 |       
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string;
    |                  ^ Expected a comma.
  4 |     age: number
  5 | }
  6 |       
```

## Test #68

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string
    |                 ^ Expected a comma.
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #69

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string;
    |                  ^ Unexpected separator (;).
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #70

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string;
    |                  ^ Unexpected separator (;).
  4 |     age: number;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #71

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string;
    |                  ^ Unexpected separator (;).
  4 |     age: number
  5 | }
  6 |       
```

## Test #72

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #73

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string,
    |                  ^ Unexpected separator (,).
  4 |     age: number,
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string,
> 4 |     age: number,
    |                 ^ Unexpected separator (,).
  5 | }
  6 |       
```

## Test #74

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string,
    |                  ^ Unexpected separator (,).
  4 |     age: number,
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string,
> 4 |     age: number,
    |                 ^ Unexpected separator (,).
  5 | }
  6 |       
```

## Test #75

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string,
    age: number
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     name: string,
    |                  ^ Unexpected separator (,).
  4 |     age: number
  5 | }
  6 |       
```

## Test #76

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string
> 4 |     age: number,
    |                 ^ Unexpected separator (,).
  5 | }
  6 |       
```

## Test #77

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}

type Bar = {
    name: string,
    age: number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string,
    age: number,
}

type Bar = {
    name: string;
    age: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
>  3 |     name: string;
     |                  ^ Expected a comma.
   4 |     age: number;
   5 | }
   6 |
   7 | type Bar = {
   8 |     name: string,
   9 |     age: number,
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 |     name: string;
>  4 |     age: number;
     |                 ^ Expected a comma.
   5 | }
   6 |
   7 | type Bar = {
   8 |     name: string,
   9 |     age: number,
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 |     name: string;
   4 |     age: number;
   5 | }
   6 |
   7 | type Bar = {
>  8 |     name: string,
     |                  ^ Expected a semicolon.
   9 |     age: number,
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 |     name: string;
   4 |     age: number;
   5 | }
   6 |
   7 | type Bar = {
   8 |     name: string,
>  9 |     age: number,
     |                 ^ Expected a semicolon.
  10 | }
  11 |       
```

## Test #78

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    [key: string]: any
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    [key: string]: any;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     [key: string]: any
    |                       ^ Expected a semicolon.
  4 | }
  5 |       
```

## Test #79

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    [key: string]: any
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    [key: string]: any;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 |     [key: string]: any
    |                       ^ Expected a semicolon.
  4 | }
  5 |       
```

## Test #80

### Test Code

<!-- prettier-ignore -->
```ts
interface Foo { a: any, [key: string]: any }
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface Foo { a: any; [key: string]: any }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Foo { a: any, [key: string]: any }
    |                        ^ Expected a semicolon.
```

## Test #81

### Test Code

<!-- prettier-ignore -->
```ts
interface Foo { a: any, [key: string]: any, }
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface Foo { a: any; [key: string]: any }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Foo { a: any, [key: string]: any, }
    |                        ^ Expected a semicolon.
```

<!-- prettier-ignore -->
```ts
> 1 | interface Foo { a: any, [key: string]: any, }
    |                                            ^ Unexpected separator (,).
```

## Test #82

### Test Code

<!-- prettier-ignore -->
```ts
interface Foo { [key: string]: any }
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface Foo { [key: string]: any; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Foo { [key: string]: any }
    |                                   ^ Expected a semicolon.
```

## Test #83

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    [key: string]: any
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    [key: string]: any;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     [key: string]: any
    |                       ^ Expected a semicolon.
  4 | }
  5 |       
```

## Test #84

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    [key: string]: any
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    [key: string]: any;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |     [key: string]: any
    |                       ^ Expected a semicolon.
  4 | }
  5 |       
```

## Test #85

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = { [key: string]: any }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = { [key: string]: any; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = { [key: string]: any }
    |                                ^ Expected a semicolon.
```

## Test #86

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = { [key: string]: any }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = { [key: string]: any; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = { [key: string]: any }
    |                                ^ Expected a semicolon.
```

## Test #87

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = { a: any, [key: string]: any }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = { a: any; [key: string]: any }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = { a: any, [key: string]: any }
    |                     ^ Expected a semicolon.
```

## Test #88

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #89

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    name: string;
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #90

### Test Code

<!-- prettier-ignore -->
```ts
interface Foo { a: any, [key: string]: any }
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface Foo { a: any; [key: string]: any }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Foo { a: any, [key: string]: any }
    |                        ^ Expected a semicolon.
```

## Test #91

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #92

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    name: string;
    age: number
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |     name: string;
> 4 |     age: number;
    |                 ^ Unexpected separator (;).
  5 | }
  6 |       
```

## Test #93

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = { a: any, [key: string]: any }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = { a: any; [key: string]: any }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = { a: any, [key: string]: any }
    |                     ^ Expected a semicolon.
```

## Test #94

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {a: {
  b: true;
};};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {a: {
  b: true;
}};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {a: {
  3 |   b: true;
> 4 | };};
    |   ^ Unexpected separator (;).
  5 |       
```

## Test #95

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {a: {
  b: true;
}};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {a: {
  b: true;
};};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {a: {
  3 |   b: true;
> 4 | }};
    |  ^ Expected a semicolon.
  5 |       
```

## Test #96

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  a: {
    b: true;
  }
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
  a: {
    b: true;
  };
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   a: {
  4 |     b: true;
> 5 |   }
    |    ^ Expected a semicolon.
  6 | };
  7 |       
```

## Test #97

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {a: {
  b: true;
}};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {a: {
  b: true;
};};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {a: {
  3 |   b: true;
> 4 | }};
    |  ^ Expected a semicolon.
  5 |       
```

## Test #98

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  a: {
    b: true;
  }; c: false;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
  a: {
    b: true
  }; c: false
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   a: {
> 4 |     b: true;
    |             ^ Unexpected separator (;).
  5 |   }; c: false;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   a: {
  4 |     b: true;
> 5 |   }; c: false;
    |     ^ Unexpected separator (;).
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   a: {
  4 |     b: true;
> 5 |   }; c: false;
    |               ^ Unexpected separator (;).
  6 | }
  7 |       
```

## Test #99

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
  a: true; /** something */ /** some
  thing */ b: true; /** something */ c: false; // something
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
  a: true /** something */ /** some
  thing */ b: true; /** something */ c: false // something
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 |   a: true; /** something */ /** some
    |           ^ Unexpected separator (;).
  4 |   thing */ b: true; /** something */ c: false; // something
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   a: true; /** something */ /** some
> 4 |   thing */ b: true; /** something */ c: false; // something
    |                    ^ Unexpected separator (;).
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 |   a: true; /** something */ /** some
> 4 |   thing */ b: true; /** something */ c: false; // something
    |                                               ^ Unexpected separator (;).
  5 | }
  6 |       
```
