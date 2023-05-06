# comma-dangle

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
const Foo = {bar: 1,}
```

### Fix Output

<!-- prettier-ignore -->
```ts
const Foo = {bar: 1}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const Foo = {bar: 1,}
    |                    ^ Unexpected trailing comma.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
enum Foo {Bar,}
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum Foo {Bar}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | enum Foo {Bar,}
    | ^^^^^^^^^^^^^^^ Unexpected trailing comma.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
function Foo<T,>() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function Foo<T>() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function Foo<T,>() {}
    |             ^^^^ Unexpected trailing comma.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = [string,]
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = [string]
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [string,]
    |            ^^^^^^^^^ Unexpected trailing comma.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
enum Foo {Bar,}
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum Foo {Bar}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | enum Foo {Bar,}
    | ^^^^^^^^^^^^^^^ Unexpected trailing comma.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
enum Foo {Bar,
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum Foo {Bar
}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | enum Foo {Bar,
    | ^^^^^^^^^^^^^^
> 2 | }
    | ^^ Unexpected trailing comma.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
function Foo<T,>() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function Foo<T>() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function Foo<T,>() {}
    |             ^^^^ Unexpected trailing comma.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
function Foo<T,
>() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function Foo<T
>() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function Foo<T,
    |             ^^^
> 2 | >() {}
    | ^^ Unexpected trailing comma.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = [string,]
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = [string]
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [string,]
    |            ^^^^^^^^^ Unexpected trailing comma.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = [string,
]
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = [string
]
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [string,
    |            ^^^^^^^^
> 2 | ]
    | ^^ Unexpected trailing comma.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
enum Foo {Bar}
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum Foo {Bar,}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | enum Foo {Bar}
    | ^^^^^^^^^^^^^^ Missing trailing comma.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
enum Foo {Bar
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum Foo {Bar,
}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | enum Foo {Bar
    | ^^^^^^^^^^^^^
> 2 | }
    | ^^ Missing trailing comma.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
function Foo<T>() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function Foo<T,>() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function Foo<T>() {}
    |             ^^^ Missing trailing comma.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
function Foo<T
>() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function Foo<T,
>() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function Foo<T
    |             ^^
> 2 | >() {}
    | ^^ Missing trailing comma.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = [string]
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = [string,]
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [string]
    |            ^^^^^^^^ Missing trailing comma.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = [string
]
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = [string,
]
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [string
    |            ^^^^^^^
> 2 | ]
    | ^^ Missing trailing comma.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
enum Foo {Bar,}
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum Foo {Bar}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | enum Foo {Bar,}
    | ^^^^^^^^^^^^^^^ Unexpected trailing comma.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
enum Foo {Bar
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum Foo {Bar,
}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | enum Foo {Bar
    | ^^^^^^^^^^^^^
> 2 | }
    | ^^ Missing trailing comma.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
function Foo<T,>() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function Foo<T>() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function Foo<T,>() {}
    |             ^^^^ Unexpected trailing comma.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
function Foo<T
>() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function Foo<T,
>() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function Foo<T
    |             ^^
> 2 | >() {}
    | ^^ Missing trailing comma.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = [string,]
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = [string]
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [string,]
    |            ^^^^^^^^^ Unexpected trailing comma.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = [string
]
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = [string,
]
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [string
    |            ^^^^^^^
> 2 | ]
    | ^^ Missing trailing comma.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
enum Foo {Bar,}
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum Foo {Bar}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | enum Foo {Bar,}
    | ^^^^^^^^^^^^^^^ Unexpected trailing comma.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
function Foo<T,>() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function Foo<T>() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function Foo<T,>() {}
    |             ^^^^ Unexpected trailing comma.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = [string,]
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = [string]
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = [string,]
    |            ^^^^^^^^^ Unexpected trailing comma.
```
