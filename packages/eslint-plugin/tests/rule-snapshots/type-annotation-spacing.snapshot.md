# type-annotation-spacing

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] +?: T[P] }
    |                                ^ Unexpected space before the '+?:'.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] +?: T[P] }
    |                                ^ Unexpected space before the '+?:'.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] +?: T[P] }
    |                                ^ Unexpected space before the '+?:'.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?:T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] +?: T[P] }
    |                                ^ Unexpected space before the '+?:'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] +?: T[P] }
    |                                  ^ Unexpected space after the '+?:'.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?:T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] +?: T[P] }
    |                                ^ Unexpected space before the '+?:'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] +?: T[P] }
    |                                  ^ Unexpected space after the '+?:'.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?:T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] +?: T[P] }
    |                                  ^ Unexpected space after the '+?:'.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]+?:T[P] }
    |                                 ^ Expected a space after the '+?:'.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]+?:T[P] }
    |                               ^ Expected a space before the '+?:'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]+?:T[P] }
    |                                 ^ Expected a space after the '+?:'.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]+?:T[P] }
    |                               ^ Expected a space before the '+?:'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]+?:T[P] }
    |                                 ^ Expected a space after the '+?:'.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]+?:T[P] }
    |                                 ^ Expected a space after the '+?:'.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?:T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]+?:T[P] }
    |                               ^ Expected a space before the '+?:'.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] +?:T[P] }
    |                                ^ Unexpected space before the '+?:'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] +?:T[P] }
    |                                  ^ Expected a space after the '+?:'.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] +?:T[P] }
    |                                ^ Unexpected space before the '+?:'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] +?:T[P] }
    |                                  ^ Expected a space after the '+?:'.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] +?:T[P] }
    |                                  ^ Expected a space after the '+?:'.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] +?:T[P] }
    |                                ^ Unexpected space before the '+?:'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] +?:T[P] }
    |                                  ^ Expected a space after the '+?:'.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] +?:T[P] }
    |                                  ^ Expected a space after the '+?:'.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?:T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]+?: T[P] }
    |                                 ^ Unexpected space after the '+?:'.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]+?: T[P] }
    |                               ^ Expected a space before the '+?:'.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]+?: T[P] }
    |                               ^ Expected a space before the '+?:'.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] +?:T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]+?: T[P] }
    |                               ^ Expected a space before the '+?:'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]+?: T[P] }
    |                                 ^ Unexpected space after the '+?:'.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]+?:T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]+?: T[P] }
    |                                 ^ Unexpected space after the '+?:'.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] -?: T[P] }
    |                                ^ Unexpected space before the '-?:'.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] -?: T[P] }
    |                                ^ Unexpected space before the '-?:'.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] -?: T[P] }
    |                                ^ Unexpected space before the '-?:'.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?:T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] -?: T[P] }
    |                                ^ Unexpected space before the '-?:'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] -?: T[P] }
    |                                  ^ Unexpected space after the '-?:'.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?:T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] -?: T[P] }
    |                                ^ Unexpected space before the '-?:'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] -?: T[P] }
    |                                  ^ Unexpected space after the '-?:'.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?:T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] -?: T[P] }
    |                                  ^ Unexpected space after the '-?:'.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]-?:T[P] }
    |                                 ^ Expected a space after the '-?:'.
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]-?:T[P] }
    |                               ^ Expected a space before the '-?:'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]-?:T[P] }
    |                                 ^ Expected a space after the '-?:'.
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]-?:T[P] }
    |                               ^ Expected a space before the '-?:'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]-?:T[P] }
    |                                 ^ Expected a space after the '-?:'.
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]-?:T[P] }
    |                                 ^ Expected a space after the '-?:'.
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?:T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]-?:T[P] }
    |                               ^ Expected a space before the '-?:'.
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] -?:T[P] }
    |                                ^ Unexpected space before the '-?:'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] -?:T[P] }
    |                                  ^ Expected a space after the '-?:'.
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] -?:T[P] }
    |                                ^ Unexpected space before the '-?:'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] -?:T[P] }
    |                                  ^ Expected a space after the '-?:'.
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] -?:T[P] }
    |                                  ^ Expected a space after the '-?:'.
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] -?:T[P] }
    |                                ^ Unexpected space before the '-?:'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] -?:T[P] }
    |                                  ^ Expected a space after the '-?:'.
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?:T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T] -?:T[P] }
    |                                  ^ Expected a space after the '-?:'.
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?:T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]-?: T[P] }
    |                                 ^ Unexpected space after the '-?:'.
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]-?: T[P] }
    |                               ^ Expected a space before the '-?:'.
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?: T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]-?: T[P] }
    |                               ^ Expected a space before the '-?:'.
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T] -?:T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]-?: T[P] }
    |                               ^ Expected a space before the '-?:'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]-?: T[P] }
    |                                 ^ Unexpected space after the '-?:'.
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?: T[P] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo<T> = { [P in keyof T]-?:T[P] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo<T> = { [P in keyof T]-?: T[P] }
    |                                 ^ Unexpected space after the '-?:'.
```
