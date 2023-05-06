# array-type

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
let a: Array<number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: number[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Array<number> = [];
    |        ^^^^^^^^^^^^^ Array type using 'Array<number>' is forbidden. Use 'number[]' instead.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
let a: Array<string | number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: (string | number)[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Array<string | number> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^ Array type using 'Array<T>' is forbidden. Use 'T[]' instead.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: readonly number[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: ReadonlyArray<number> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^ Array type using 'ReadonlyArray<number>' is forbidden. Use 'readonly number[]' instead.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<string | number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: readonly (string | number)[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: ReadonlyArray<string | number> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'ReadonlyArray<T>' is forbidden. Use 'readonly T[]' instead.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
let a: Array<number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: number[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Array<number> = [];
    |        ^^^^^^^^^^^^^ Array type using 'Array<number>' is forbidden. Use 'number[]' instead.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
let a: Array<string | number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: (string | number)[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Array<string | number> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^ Array type using 'Array<T>' is forbidden. Use 'T[]' instead.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: readonly number[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: ReadonlyArray<number> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^ Array type using 'ReadonlyArray<number>' is forbidden. Use 'readonly number[]' instead.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<string | number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: readonly (string | number)[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: ReadonlyArray<string | number> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'ReadonlyArray<T>' is forbidden. Use 'readonly T[]' instead.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
let a: Array<number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: number[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Array<number> = [];
    |        ^^^^^^^^^^^^^ Array type using 'Array<number>' is forbidden. Use 'number[]' instead.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
let a: Array<string | number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: (string | number)[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Array<string | number> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^ Array type using 'Array<T>' is forbidden. Use 'T[]' instead.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: readonly number[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: ReadonlyArray<number> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^ Array type using 'ReadonlyArray<number>' is forbidden for simple types. Use 'readonly number[]' instead.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
let a: readonly (string | number)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<string | number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: readonly (string | number)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'readonly T[]' is forbidden for non-simple types. Use 'ReadonlyArray<T>' instead.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
let a: Array<number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: number[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Array<number> = [];
    |        ^^^^^^^^^^^^^ Array type using 'Array<number>' is forbidden. Use 'number[]' instead.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
let a: Array<string | number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: (string | number)[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Array<string | number> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^ Array type using 'Array<T>' is forbidden. Use 'T[]' instead.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
let a: readonly number[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: readonly number[] = [];
    |        ^^^^^^^^^^^^^^^^^ Array type using 'readonly number[]' is forbidden. Use 'ReadonlyArray<number>' instead.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
let a: readonly (string | number)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<string | number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: readonly (string | number)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'readonly T[]' is forbidden. Use 'ReadonlyArray<T>' instead.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
let a: Array<number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: number[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Array<number> = [];
    |        ^^^^^^^^^^^^^ Array type using 'Array<number>' is forbidden for simple types. Use 'number[]' instead.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
let a: (string | number)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<string | number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: (string | number)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden for non-simple types. Use 'Array<T>' instead.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: readonly number[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: ReadonlyArray<number> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^ Array type using 'ReadonlyArray<number>' is forbidden for simple types. Use 'readonly number[]' instead.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
let a: readonly (string | number)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<string | number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: readonly (string | number)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'readonly T[]' is forbidden for non-simple types. Use 'ReadonlyArray<T>' instead.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
let a: Array<number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: number[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Array<number> = [];
    |        ^^^^^^^^^^^^^ Array type using 'Array<number>' is forbidden for simple types. Use 'number[]' instead.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
let a: (string | number)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<string | number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: (string | number)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden for non-simple types. Use 'Array<T>' instead.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: readonly number[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: ReadonlyArray<number> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^ Array type using 'ReadonlyArray<number>' is forbidden. Use 'readonly number[]' instead.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<string | number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: readonly (string | number)[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: ReadonlyArray<string | number> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'ReadonlyArray<T>' is forbidden. Use 'readonly T[]' instead.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
let a: Array<number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: number[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Array<number> = [];
    |        ^^^^^^^^^^^^^ Array type using 'Array<number>' is forbidden for simple types. Use 'number[]' instead.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
let a: (string | number)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<string | number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: (string | number)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden for non-simple types. Use 'Array<T>' instead.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: readonly number[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: ReadonlyArray<number> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^ Array type using 'ReadonlyArray<number>' is forbidden for simple types. Use 'readonly number[]' instead.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
let a: readonly (string | number)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<string | number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: readonly (string | number)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'readonly T[]' is forbidden for non-simple types. Use 'ReadonlyArray<T>' instead.
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
let a: Array<number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: number[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Array<number> = [];
    |        ^^^^^^^^^^^^^ Array type using 'Array<number>' is forbidden for simple types. Use 'number[]' instead.
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
let a: (string | number)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<string | number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: (string | number)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden for non-simple types. Use 'Array<T>' instead.
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
let a: readonly number[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: readonly number[] = [];
    |        ^^^^^^^^^^^^^^^^^ Array type using 'readonly number[]' is forbidden. Use 'ReadonlyArray<number>' instead.
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
let a: readonly (string | number)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<string | number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: readonly (string | number)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'readonly T[]' is forbidden. Use 'ReadonlyArray<T>' instead.
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
let a: number[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: number[] = [];
    |        ^^^^^^^^ Array type using 'number[]' is forbidden. Use 'Array<number>' instead.
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
let a: (string | number)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<string | number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: (string | number)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden. Use 'Array<T>' instead.
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts
let a: readonly number[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: readonly number[] = [];
    |        ^^^^^^^^^^^^^^^^^ Array type using 'readonly number[]' is forbidden. Use 'ReadonlyArray<number>' instead.
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts
let a: readonly (string | number)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<string | number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: readonly (string | number)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'readonly T[]' is forbidden. Use 'ReadonlyArray<T>' instead.
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts
let a: number[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: number[] = [];
    |        ^^^^^^^^ Array type using 'number[]' is forbidden. Use 'Array<number>' instead.
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts
let a: (string | number)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<string | number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: (string | number)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden. Use 'Array<T>' instead.
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: readonly number[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: ReadonlyArray<number> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^ Array type using 'ReadonlyArray<number>' is forbidden. Use 'readonly number[]' instead.
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<string | number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: readonly (string | number)[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: ReadonlyArray<string | number> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'ReadonlyArray<T>' is forbidden. Use 'readonly T[]' instead.
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts
let a: number[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: number[] = [];
    |        ^^^^^^^^ Array type using 'number[]' is forbidden. Use 'Array<number>' instead.
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts
let a: (string | number)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<string | number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: (string | number)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden. Use 'Array<T>' instead.
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<number> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: readonly number[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: ReadonlyArray<number> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^ Array type using 'ReadonlyArray<number>' is forbidden for simple types. Use 'readonly number[]' instead.
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts
let a: readonly (string | number)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<string | number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: readonly (string | number)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'readonly T[]' is forbidden for non-simple types. Use 'ReadonlyArray<T>' instead.
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts
let a: number[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: number[] = [];
    |        ^^^^^^^^ Array type using 'number[]' is forbidden. Use 'Array<number>' instead.
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts
let a: (string | number)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<string | number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: (string | number)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden. Use 'Array<T>' instead.
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts
let a: readonly number[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: readonly number[] = [];
    |        ^^^^^^^^^^^^^^^^^ Array type using 'readonly number[]' is forbidden. Use 'ReadonlyArray<number>' instead.
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts
let a: readonly (string | number)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<string | number> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: readonly (string | number)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'readonly T[]' is forbidden. Use 'ReadonlyArray<T>' instead.
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts
let a: bigint[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<bigint> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: bigint[] = [];
    |        ^^^^^^^^ Array type using 'bigint[]' is forbidden. Use 'Array<bigint>' instead.
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts
let a: (string | bigint)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<string | bigint> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: (string | bigint)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden. Use 'Array<T>' instead.
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<bigint> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: readonly bigint[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: ReadonlyArray<bigint> = [];
    |        ^^^^^^^^^^^^^^^^^^^^^ Array type using 'ReadonlyArray<bigint>' is forbidden for simple types. Use 'readonly bigint[]' instead.
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts
let a: (string | bigint)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<string | bigint> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: (string | bigint)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden. Use 'Array<T>' instead.
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts
let a: readonly bigint[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<bigint> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: readonly bigint[] = [];
    |        ^^^^^^^^^^^^^^^^^ Array type using 'readonly bigint[]' is forbidden. Use 'ReadonlyArray<bigint>' instead.
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts
let a: readonly (string | bigint)[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: ReadonlyArray<string | bigint> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: readonly (string | bigint)[] = [];
    |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'readonly T[]' is forbidden. Use 'ReadonlyArray<T>' instead.
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts
let a: { foo: Array<Bar> }[] = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: { foo: Bar[] }[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: { foo: Array<Bar> }[] = [];
    |               ^^^^^^^^^^ Array type using 'Array<Bar>' is forbidden. Use 'Bar[]' instead.
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts
let a: Array<{ foo: Bar[] }> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<{ foo: Array<Bar> }> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Array<{ foo: Bar[] }> = [];
    |                     ^^^^^ Array type using 'Bar[]' is forbidden. Use 'Array<Bar>' instead.
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts
let a: Array<{ foo: Foo | Bar[] }> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a: Array<{ foo: Foo | Array<Bar> }> = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let a: Array<{ foo: Foo | Bar[] }> = [];
    |                           ^^^^^ Array type using 'Bar[]' is forbidden. Use 'Array<Bar>' instead.
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts
function foo(a: Array<Bar>): Array<Bar> {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo(a: Bar[]): Bar[] {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(a: Array<Bar>): Array<Bar> {}
    |                 ^^^^^^^^^^ Array type using 'Array<Bar>' is forbidden. Use 'Bar[]' instead.
```

<!-- prettier-ignore -->
```ts
> 1 | function foo(a: Array<Bar>): Array<Bar> {}
    |                              ^^^^^^^^^^ Array type using 'Array<Bar>' is forbidden. Use 'Bar[]' instead.
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts
let x: Array<undefined> = [undefined] as undefined[];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let x: undefined[] = [undefined] as undefined[];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let x: Array<undefined> = [undefined] as undefined[];
    |        ^^^^^^^^^^^^^^^^ Array type using 'Array<undefined>' is forbidden for simple types. Use 'undefined[]' instead.
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts
let y: string[] = <Array<string>>['2'];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let y: string[] = <string[]>['2'];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let y: string[] = <Array<string>>['2'];
    |                    ^^^^^^^^^^^^^ Array type using 'Array<string>' is forbidden for simple types. Use 'string[]' instead.
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts
let z: Array = [3, '4'];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let z: any[] = [3, '4'];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let z: Array = [3, '4'];
    |        ^^^^^ Array type using 'Array<any>' is forbidden for simple types. Use 'any[]' instead.
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts
let ya = [[1, '2']] as [number, string][];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let ya = [[1, '2']] as Array<[number, string]>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let ya = [[1, '2']] as [number, string][];
    |                        ^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden for non-simple types. Use 'Array<T>' instead.
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts
type Arr<T> = Array<T>;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Arr<T> = T[];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Arr<T> = Array<T>;
    |               ^^^^^^^^ Array type using 'Array<T>' is forbidden for simple types. Use 'T[]' instead.
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts

// Ignore user defined aliases
let yyyy: Arr<Array<Arr<string>>[]> = [[[['2']]]];
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

// Ignore user defined aliases
let yyyy: Arr<Array<Array<Arr<string>>>> = [[[['2']]]];
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // Ignore user defined aliases
> 3 | let yyyy: Arr<Array<Arr<string>>[]> = [[[['2']]]];
    |               ^^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden for non-simple types. Use 'Array<T>' instead.
  4 |       
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts

interface ArrayClass<T> {
  foo: Array<T>;
  bar: T[];
  baz: Arr<T>;
  xyz: this[];
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface ArrayClass<T> {
  foo: T[];
  bar: T[];
  baz: Arr<T>;
  xyz: this[];
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface ArrayClass<T> {
> 3 |   foo: Array<T>;
    |        ^^^^^^^^ Array type using 'Array<T>' is forbidden for simple types. Use 'T[]' instead.
  4 |   bar: T[];
  5 |   baz: Arr<T>;
  6 |   xyz: this[];
  7 | }
  8 |       
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts

function barFunction(bar: ArrayClass<String>[]) {
  return bar.map(e => e.bar);
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function barFunction(bar: Array<ArrayClass<String>>) {
  return bar.map(e => e.bar);
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function barFunction(bar: ArrayClass<String>[]) {
    |                           ^^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden for non-simple types. Use 'Array<T>' instead.
  3 |   return bar.map(e => e.bar);
  4 | }
  5 |       
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts
let barVar: ((c: number) => number)[];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let barVar: Array<(c: number) => number>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let barVar: ((c: number) => number)[];
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden for non-simple types. Use 'Array<T>' instead.
```

## Test #68

### Test Code

<!-- prettier-ignore -->
```ts
type barUnion = (string | number | boolean)[];
```

### Fix Output

<!-- prettier-ignore -->
```ts
type barUnion = Array<string | number | boolean>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type barUnion = (string | number | boolean)[];
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden for non-simple types. Use 'Array<T>' instead.
```

## Test #69

### Test Code

<!-- prettier-ignore -->
```ts
type barIntersection = (string & number)[];
```

### Fix Output

<!-- prettier-ignore -->
```ts
type barIntersection = Array<string & number>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type barIntersection = (string & number)[];
    |                        ^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden for non-simple types. Use 'Array<T>' instead.
```

## Test #70

### Test Code

<!-- prettier-ignore -->
```ts
let v: Array<fooName.BarType> = [{ bar: 'bar' }];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let v: fooName.BarType[] = [{ bar: 'bar' }];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let v: Array<fooName.BarType> = [{ bar: 'bar' }];
    |        ^^^^^^^^^^^^^^^^^^^^^^ Array type using 'Array<fooName.BarType>' is forbidden for simple types. Use 'fooName.BarType[]' instead.
```

## Test #71

### Test Code

<!-- prettier-ignore -->
```ts
let w: fooName.BazType<string>[] = [['baz']];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let w: Array<fooName.BazType<string>> = [['baz']];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let w: fooName.BazType<string>[] = [['baz']];
    |        ^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden for non-simple types. Use 'Array<T>' instead.
```

## Test #72

### Test Code

<!-- prettier-ignore -->
```ts
let x: Array<undefined> = [undefined] as undefined[];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let x: undefined[] = [undefined] as undefined[];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let x: Array<undefined> = [undefined] as undefined[];
    |        ^^^^^^^^^^^^^^^^ Array type using 'Array<undefined>' is forbidden. Use 'undefined[]' instead.
```

## Test #73

### Test Code

<!-- prettier-ignore -->
```ts
let y: string[] = <Array<string>>['2'];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let y: string[] = <string[]>['2'];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let y: string[] = <Array<string>>['2'];
    |                    ^^^^^^^^^^^^^ Array type using 'Array<string>' is forbidden. Use 'string[]' instead.
```

## Test #74

### Test Code

<!-- prettier-ignore -->
```ts
let z: Array = [3, '4'];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let z: any[] = [3, '4'];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let z: Array = [3, '4'];
    |        ^^^^^ Array type using 'Array<any>' is forbidden. Use 'any[]' instead.
```

## Test #75

### Test Code

<!-- prettier-ignore -->
```ts
type Arr<T> = Array<T>;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Arr<T> = T[];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Arr<T> = Array<T>;
    |               ^^^^^^^^ Array type using 'Array<T>' is forbidden. Use 'T[]' instead.
```

## Test #76

### Test Code

<!-- prettier-ignore -->
```ts

// Ignore user defined aliases
let yyyy: Arr<Array<Arr<string>>[]> = [[[['2']]]];
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

// Ignore user defined aliases
let yyyy: Arr<Arr<string>[][]> = [[[['2']]]];
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // Ignore user defined aliases
> 3 | let yyyy: Arr<Array<Arr<string>>[]> = [[[['2']]]];
    |               ^^^^^^^^^^^^^^^^^^ Array type using 'Array<T>' is forbidden. Use 'T[]' instead.
  4 |       
```

## Test #77

### Test Code

<!-- prettier-ignore -->
```ts

interface ArrayClass<T> {
  foo: Array<T>;
  bar: T[];
  baz: Arr<T>;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface ArrayClass<T> {
  foo: T[];
  bar: T[];
  baz: Arr<T>;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface ArrayClass<T> {
> 3 |   foo: Array<T>;
    |        ^^^^^^^^ Array type using 'Array<T>' is forbidden. Use 'T[]' instead.
  4 |   bar: T[];
  5 |   baz: Arr<T>;
  6 | }
  7 |       
```

## Test #78

### Test Code

<!-- prettier-ignore -->
```ts

function fooFunction(foo: Array<ArrayClass<string>>) {
  return foo.map(e => e.foo);
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function fooFunction(foo: ArrayClass<string>[]) {
  return foo.map(e => e.foo);
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function fooFunction(foo: Array<ArrayClass<string>>) {
    |                           ^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'Array<T>' is forbidden. Use 'T[]' instead.
  3 |   return foo.map(e => e.foo);
  4 | }
  5 |       
```

## Test #79

### Test Code

<!-- prettier-ignore -->
```ts
let fooVar: Array<(c: number) => number>;
```

### Fix Output

<!-- prettier-ignore -->
```ts
let fooVar: ((c: number) => number)[];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let fooVar: Array<(c: number) => number>;
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'Array<T>' is forbidden. Use 'T[]' instead.
```

## Test #80

### Test Code

<!-- prettier-ignore -->
```ts
type fooUnion = Array<string | number | boolean>;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type fooUnion = (string | number | boolean)[];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type fooUnion = Array<string | number | boolean>;
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'Array<T>' is forbidden. Use 'T[]' instead.
```

## Test #81

### Test Code

<!-- prettier-ignore -->
```ts
type fooIntersection = Array<string & number>;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type fooIntersection = (string & number)[];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type fooIntersection = Array<string & number>;
    |                        ^^^^^^^^^^^^^^^^^^^^^^ Array type using 'Array<T>' is forbidden. Use 'T[]' instead.
```

## Test #82

### Test Code

<!-- prettier-ignore -->
```ts
let x: Array;
```

### Fix Output

<!-- prettier-ignore -->
```ts
let x: any[];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let x: Array;
    |        ^^^^^ Array type using 'Array<any>' is forbidden. Use 'any[]' instead.
```

## Test #83

### Test Code

<!-- prettier-ignore -->
```ts
let x: Array<>;
```

### Fix Output

<!-- prettier-ignore -->
```ts
let x: any[];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let x: Array<>;
    |        ^^^^^^^ Array type using 'Array<any>' is forbidden. Use 'any[]' instead.
```

## Test #84

### Test Code

<!-- prettier-ignore -->
```ts
let x: Array;
```

### Fix Output

<!-- prettier-ignore -->
```ts
let x: any[];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let x: Array;
    |        ^^^^^ Array type using 'Array<any>' is forbidden for simple types. Use 'any[]' instead.
```

## Test #85

### Test Code

<!-- prettier-ignore -->
```ts
let x: Array<>;
```

### Fix Output

<!-- prettier-ignore -->
```ts
let x: any[];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let x: Array<>;
    |        ^^^^^^^ Array type using 'Array<any>' is forbidden for simple types. Use 'any[]' instead.
```

## Test #86

### Test Code

<!-- prettier-ignore -->
```ts
let x: Array<number> = [1] as number[];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let x: Array<number> = [1] as Array<number>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let x: Array<number> = [1] as number[];
    |                               ^^^^^^^^ Array type using 'number[]' is forbidden. Use 'Array<number>' instead.
```

## Test #87

### Test Code

<!-- prettier-ignore -->
```ts
let y: string[] = <Array<string>>['2'];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let y: Array<string> = <Array<string>>['2'];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let y: string[] = <Array<string>>['2'];
    |        ^^^^^^^^ Array type using 'string[]' is forbidden. Use 'Array<string>' instead.
```

## Test #88

### Test Code

<!-- prettier-ignore -->
```ts
let ya = [[1, '2']] as [number, string][];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let ya = [[1, '2']] as Array<[number, string]>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let ya = [[1, '2']] as [number, string][];
    |                        ^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden. Use 'Array<T>' instead.
```

## Test #89

### Test Code

<!-- prettier-ignore -->
```ts

// Ignore user defined aliases
let yyyy: Arr<Array<Arr<string>>[]> = [[[['2']]]];
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

// Ignore user defined aliases
let yyyy: Arr<Array<Array<Arr<string>>>> = [[[['2']]]];
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // Ignore user defined aliases
> 3 | let yyyy: Arr<Array<Arr<string>>[]> = [[[['2']]]];
    |               ^^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden. Use 'Array<T>' instead.
  4 |       
```

## Test #90

### Test Code

<!-- prettier-ignore -->
```ts

interface ArrayClass<T> {
  foo: Array<T>;
  bar: T[];
  baz: Arr<T>;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface ArrayClass<T> {
  foo: Array<T>;
  bar: Array<T>;
  baz: Arr<T>;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface ArrayClass<T> {
  3 |   foo: Array<T>;
> 4 |   bar: T[];
    |        ^^^ Array type using 'T[]' is forbidden. Use 'Array<T>' instead.
  5 |   baz: Arr<T>;
  6 | }
  7 |       
```

## Test #91

### Test Code

<!-- prettier-ignore -->
```ts

function barFunction(bar: ArrayClass<String>[]) {
  return bar.map(e => e.bar);
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function barFunction(bar: Array<ArrayClass<String>>) {
  return bar.map(e => e.bar);
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | function barFunction(bar: ArrayClass<String>[]) {
    |                           ^^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden. Use 'Array<T>' instead.
  3 |   return bar.map(e => e.bar);
  4 | }
  5 |       
```

## Test #92

### Test Code

<!-- prettier-ignore -->
```ts
let barVar: ((c: number) => number)[];
```

### Fix Output

<!-- prettier-ignore -->
```ts
let barVar: Array<(c: number) => number>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let barVar: ((c: number) => number)[];
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden. Use 'Array<T>' instead.
```

## Test #93

### Test Code

<!-- prettier-ignore -->
```ts
type barUnion = (string | number | boolean)[];
```

### Fix Output

<!-- prettier-ignore -->
```ts
type barUnion = Array<string | number | boolean>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type barUnion = (string | number | boolean)[];
    |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden. Use 'Array<T>' instead.
```

## Test #94

### Test Code

<!-- prettier-ignore -->
```ts
type barIntersection = (string & number)[];
```

### Fix Output

<!-- prettier-ignore -->
```ts
type barIntersection = Array<string & number>;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type barIntersection = (string & number)[];
    |                        ^^^^^^^^^^^^^^^^^^^ Array type using 'T[]' is forbidden. Use 'Array<T>' instead.
```

## Test #95

### Test Code

<!-- prettier-ignore -->
```ts

interface FooInterface {
  '.bar': { baz: string[] };
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface FooInterface {
  '.bar': { baz: Array<string> };
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface FooInterface {
> 3 |   '.bar': { baz: string[] };
    |                  ^^^^^^^^ Array type using 'string[]' is forbidden. Use 'Array<string>' instead.
  4 | }
  5 |       
```

## Test #96

### Test Code

<!-- prettier-ignore -->
```ts
type Unwrap<T> = T extends Array<infer E> ? E : T;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Unwrap<T> = T extends (infer E)[] ? E : T;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Unwrap<T> = T extends Array<infer E> ? E : T;
    |                            ^^^^^^^^^^^^^^ Array type using 'Array<T>' is forbidden. Use 'T[]' instead.
```

## Test #97

### Test Code

<!-- prettier-ignore -->
```ts
type Unwrap<T> = T extends (infer E)[] ? E : T;
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Unwrap<T> = T extends Array<infer E> ? E : T;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Unwrap<T> = T extends (infer E)[] ? E : T;
    |                            ^^^^^^^^^^^ Array type using 'T[]' is forbidden. Use 'Array<T>' instead.
```

## Test #98

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = ReadonlyArray<object>[];
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = (readonly object[])[];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = ReadonlyArray<object>[];
    |            ^^^^^^^^^^^^^^^^^^^^^ Array type using 'ReadonlyArray<object>' is forbidden. Use 'readonly object[]' instead.
```

## Test #99

### Test Code

<!-- prettier-ignore -->
```ts
const foo: Array<new (...args: any[]) => void> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
const foo: (new (...args: any[]) => void)[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo: Array<new (...args: any[]) => void> = [];
    |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'Array<T>' is forbidden. Use 'T[]' instead.
```

## Test #100

### Test Code

<!-- prettier-ignore -->
```ts
const foo: ReadonlyArray<new (...args: any[]) => void> = [];
```

### Fix Output

<!-- prettier-ignore -->
```ts
const foo: readonly (new (...args: any[]) => void)[] = [];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo: ReadonlyArray<new (...args: any[]) => void> = [];
    |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Array type using 'ReadonlyArray<T>' is forbidden. Use 'readonly T[]' instead.
```
