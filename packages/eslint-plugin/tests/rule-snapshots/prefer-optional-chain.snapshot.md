# prefer-optional-chain

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar
    | ^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz
    | ^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo()
    | ^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.()
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar()
    | ^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.()
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz && foo.bar.baz && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz && foo.bar.baz && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo[bar] && foo[bar].baz && foo[bar].baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo[bar] && foo[bar].baz && foo[bar].baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar]?.baz?.buzz
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo[bar].baz && foo[bar].baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo[bar].baz && foo[bar].baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar].baz?.buzz
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo[bar.baz] && foo[bar.baz].buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo[bar.baz] && foo[bar.baz].buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar.baz]?.buzz
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
foo[this.bar] && foo[this.bar].baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo[this.bar] && foo[this.bar].baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo[this.bar]?.baz
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz()
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz?.()
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz && foo.bar.baz.buzz && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz && foo.bar.baz.buzz && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz?.()
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz()
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz()
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz.buzz && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz.buzz && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz?.()
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar() && foo.bar().baz && foo.bar().baz.buzz && foo.bar().baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar() && foo.bar().baz && foo.bar().baz.buzz && foo.bar().baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar()?.baz?.buzz?.()
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]()
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz[buzz] && foo.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz[buzz] && foo.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.()
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.bar && foo?.bar.baz && foo?.bar.baz[buzz] && foo?.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.bar && foo?.bar.baz && foo?.bar.baz[buzz] && foo?.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.()
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.bar.baz && foo?.bar.baz[buzz]
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.bar.baz && foo?.bar.baz[buzz]
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar.baz?.[buzz]
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.() && foo?.().bar
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.() && foo?.().bar
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.()?.bar
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar?.() && foo.bar?.().baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar?.() && foo.bar?.().baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.()?.baz
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar !== null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar !== null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar != null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar != null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar !== null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar !== null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar != null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar != null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.      bar
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.      bar
    | ^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
foo.      bar && foo.      bar.      baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.      bar && foo.      bar.      baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo()
    | ^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.()
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts
foo.      bar && foo.      bar()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.      bar && foo.      bar()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.()
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.      bar && foo.      bar.      baz && foo.      bar.      baz.      buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.      bar && foo.      bar.      baz && foo.      bar.      baz.      buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts
foo.      bar && foo.      bar.      baz && foo.      bar.      baz.      buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.      bar && foo.      bar.      baz && foo.      bar.      baz.      buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.      bar && foo.      bar.      baz.      buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.      bar && foo.      bar.      baz.      buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts
foo.      bar && foo.      bar.      baz.      buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.      bar && foo.      bar.      baz.      buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.      bar && foo.      bar.      baz && foo.      bar.      baz && foo.      bar.      baz.      buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.      bar && foo.      bar.      baz && foo.      bar.      baz && foo.      bar.      baz.      buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts
foo.      bar && foo.      bar.      baz && foo.      bar.      baz && foo.      bar.      baz.      buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.      bar && foo.      bar.      baz && foo.      bar.      baz && foo.      bar.      baz.      buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo[bar] && foo[bar].      baz && foo[bar].      baz.      buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo[bar] && foo[bar].      baz && foo[bar].      baz.      buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar]?.baz?.buzz
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo[bar].      baz && foo[bar].      baz.      buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo[bar].      baz && foo[bar].      baz.      buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar].baz?.buzz
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo[bar.      baz] && foo[bar.      baz].      buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo[bar.      baz] && foo[bar.      baz].      buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar.baz]?.buzz
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts
foo[this.      bar] && foo[this.      bar].      baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo[this.      bar] && foo[this.      bar].      baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo[this.bar]?.baz
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.      bar && foo.      bar.      baz && foo.      bar.      baz.      buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.      bar && foo.      bar.      baz && foo.      bar.      baz.      buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz()
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.      bar && foo.      bar.      baz && foo.      bar.      baz.      buzz && foo.      bar.      baz.      buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.      bar && foo.      bar.      baz && foo.      bar.      baz.      buzz && foo.      bar.      baz.      buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz?.()
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts
foo.      bar && foo.      bar.      baz && foo.      bar.      baz.      buzz && foo.      bar.      baz.      buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.      bar && foo.      bar.      baz && foo.      bar.      baz.      buzz && foo.      bar.      baz.      buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz?.()
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.      bar && foo.      bar.      baz.      buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.      bar && foo.      bar.      baz.      buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz()
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts
foo.      bar && foo.      bar.      baz.      buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.      bar && foo.      bar.      baz.      buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz()
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.      bar && foo.      bar.      baz.      buzz && foo.      bar.      baz.      buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.      bar && foo.      bar.      baz.      buzz && foo.      bar.      baz.      buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz?.()
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.      bar() && foo.      bar().      baz && foo.      bar().      baz.      buzz && foo.      bar().      baz.      buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.      bar() && foo.      bar().      baz && foo.      bar().      baz.      buzz && foo.      bar().      baz.      buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar()?.baz?.buzz?.()
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.      bar && foo.      bar.      baz && foo.      bar.      baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.      bar && foo.      bar.      baz && foo.      bar.      baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]()
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.      bar && foo.      bar.      baz && foo.      bar.      baz[buzz] && foo.      bar.      baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.      bar && foo.      bar.      baz && foo.      bar.      baz[buzz] && foo.      bar.      baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.()
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.      bar && foo?.      bar.      baz && foo?.      bar.      baz[buzz] && foo?.      bar.      baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.      bar && foo?.      bar.      baz && foo?.      bar.      baz[buzz] && foo?.      bar.      baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.()
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.      bar.      baz && foo?.      bar.      baz[buzz]
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.      bar.      baz && foo?.      bar.      baz[buzz]
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar.baz?.[buzz]
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.      () && foo?.      ().      bar
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.      () && foo?.      ().      bar
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.()?.bar
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts
foo.      bar && foo.      bar?.      () && foo.      bar?.      ().      baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.      bar && foo.      bar?.      () && foo.      bar?.      ().      baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.()?.baz
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.      bar !== null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.      bar !== null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.      bar != null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.      bar != null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.      bar !== null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.      bar !== null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.      bar != null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.      bar != null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.
bar
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.
    | ^^^^^^^^^^^
> 2 | bar
    | ^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts
foo.
bar && foo.
bar.
baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.
    | ^^^^
> 2 | bar && foo.
    | ^^^^^^^^^^^
> 3 | bar.
    | ^^^^^^^^^^^
> 4 | baz
    | ^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo()
    | ^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.()
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts
foo.
bar && foo.
bar()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.
    | ^^^^
> 2 | bar && foo.
    | ^^^^^^^^^^^
> 3 | bar()
    | ^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.()
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.
bar && foo.
bar.
baz && foo.
bar.
baz.
buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.
    | ^^^^^^^^^^^
> 2 | bar && foo.
    | ^^^^^^^^^^^
> 3 | bar.
    | ^^^^^^^^^^^
> 4 | baz && foo.
    | ^^^^^^^^^^^
> 5 | bar.
    | ^^^^^^^^^^^
> 6 | baz.
    | ^^^^^^^^^^^
> 7 | buzz
    | ^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz
```

## Test #68

### Test Code

<!-- prettier-ignore -->
```ts
foo.
bar && foo.
bar.
baz && foo.
bar.
baz.
buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.
    | ^^^^
> 2 | bar && foo.
    | ^^^^^^^^^^^
> 3 | bar.
    | ^^^^^^^^^^^
> 4 | baz && foo.
    | ^^^^^^^^^^^
> 5 | bar.
    | ^^^^^^^^^^^
> 6 | baz.
    | ^^^^^^^^^^^
> 7 | buzz
    | ^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz
```

## Test #69

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.
bar && foo.
bar.
baz.
buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.
    | ^^^^^^^^^^^
> 2 | bar && foo.
    | ^^^^^^^^^^^
> 3 | bar.
    | ^^^^^^^^^^^
> 4 | baz.
    | ^^^^^^^^^^^
> 5 | buzz
    | ^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz
```

## Test #70

### Test Code

<!-- prettier-ignore -->
```ts
foo.
bar && foo.
bar.
baz.
buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.
    | ^^^^
> 2 | bar && foo.
    | ^^^^^^^^^^^
> 3 | bar.
    | ^^^^^^^^^^^
> 4 | baz.
    | ^^^^^^^^^^^
> 5 | buzz
    | ^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz
```

## Test #71

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.
bar && foo.
bar.
baz && foo.
bar.
baz && foo.
bar.
baz.
buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.
    | ^^^^^^^^^^^
> 2 | bar && foo.
    | ^^^^^^^^^^^
> 3 | bar.
    | ^^^^^^^^^^^
> 4 | baz && foo.
    | ^^^^^^^^^^^
> 5 | bar.
    | ^^^^^^^^^^^
> 6 | baz && foo.
    | ^^^^^^^^^^^
> 7 | bar.
    | ^^^^^^^^^^^
> 8 | baz.
    | ^^^^^^^^^^^
> 9 | buzz
    | ^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz
```

## Test #72

### Test Code

<!-- prettier-ignore -->
```ts
foo.
bar && foo.
bar.
baz && foo.
bar.
baz && foo.
bar.
baz.
buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.
    | ^^^^
> 2 | bar && foo.
    | ^^^^^^^^^^^
> 3 | bar.
    | ^^^^^^^^^^^
> 4 | baz && foo.
    | ^^^^^^^^^^^
> 5 | bar.
    | ^^^^^^^^^^^
> 6 | baz && foo.
    | ^^^^^^^^^^^
> 7 | bar.
    | ^^^^^^^^^^^
> 8 | baz.
    | ^^^^^^^^^^^
> 9 | buzz
    | ^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz
```

## Test #73

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo[bar] && foo[bar].
baz && foo[bar].
baz.
buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo[bar] && foo[bar].
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 2 | baz && foo[bar].
    | ^^^^^^^^^^^^^^^^
> 3 | baz.
    | ^^^^^^^^^^^^^^^^
> 4 | buzz
    | ^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar]?.baz?.buzz
```

## Test #74

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo[bar].
baz && foo[bar].
baz.
buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo[bar].
    | ^^^^^^^^^^^^^^^^
> 2 | baz && foo[bar].
    | ^^^^^^^^^^^^^^^^
> 3 | baz.
    | ^^^^^^^^^^^^^^^^
> 4 | buzz
    | ^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar].baz?.buzz
```

## Test #75

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo[bar.
baz] && foo[bar.
baz].
buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo[bar.
    | ^^^^^^^^^^^^^^^
> 2 | baz] && foo[bar.
    | ^^^^^^^^^^^^^^^^
> 3 | baz].
    | ^^^^^^^^^^^^^^^^
> 4 | buzz
    | ^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar.baz]?.buzz
```

## Test #76

### Test Code

<!-- prettier-ignore -->
```ts
foo[this.
bar] && foo[this.
bar].
baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo[this.
    | ^^^^^^^^^
> 2 | bar] && foo[this.
    | ^^^^^^^^^^^^^^^^^
> 3 | bar].
    | ^^^^^^^^^^^^^^^^^
> 4 | baz
    | ^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo[this.bar]?.baz
```

## Test #77

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.
bar && foo.
bar.
baz && foo.
bar.
baz.
buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.
    | ^^^^^^^^^^^
> 2 | bar && foo.
    | ^^^^^^^^^^^
> 3 | bar.
    | ^^^^^^^^^^^
> 4 | baz && foo.
    | ^^^^^^^^^^^
> 5 | bar.
    | ^^^^^^^^^^^
> 6 | baz.
    | ^^^^^^^^^^^
> 7 | buzz()
    | ^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz()
```

## Test #78

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.
bar && foo.
bar.
baz && foo.
bar.
baz.
buzz && foo.
bar.
baz.
buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
>  1 | foo && foo.
     | ^^^^^^^^^^^
>  2 | bar && foo.
     | ^^^^^^^^^^^
>  3 | bar.
     | ^^^^^^^^^^^
>  4 | baz && foo.
     | ^^^^^^^^^^^
>  5 | bar.
     | ^^^^^^^^^^^
>  6 | baz.
     | ^^^^^^^^^^^
>  7 | buzz && foo.
     | ^^^^^^^^^^^
>  8 | bar.
     | ^^^^^^^^^^^
>  9 | baz.
     | ^^^^^^^^^^^
> 10 | buzz()
     | ^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz?.()
```

## Test #79

### Test Code

<!-- prettier-ignore -->
```ts
foo.
bar && foo.
bar.
baz && foo.
bar.
baz.
buzz && foo.
bar.
baz.
buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
>  1 | foo.
     | ^^^^
>  2 | bar && foo.
     | ^^^^^^^^^^^
>  3 | bar.
     | ^^^^^^^^^^^
>  4 | baz && foo.
     | ^^^^^^^^^^^
>  5 | bar.
     | ^^^^^^^^^^^
>  6 | baz.
     | ^^^^^^^^^^^
>  7 | buzz && foo.
     | ^^^^^^^^^^^
>  8 | bar.
     | ^^^^^^^^^^^
>  9 | baz.
     | ^^^^^^^^^^^
> 10 | buzz()
     | ^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz?.()
```

## Test #80

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.
bar && foo.
bar.
baz.
buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.
    | ^^^^^^^^^^^
> 2 | bar && foo.
    | ^^^^^^^^^^^
> 3 | bar.
    | ^^^^^^^^^^^
> 4 | baz.
    | ^^^^^^^^^^^
> 5 | buzz()
    | ^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz()
```

## Test #81

### Test Code

<!-- prettier-ignore -->
```ts
foo.
bar && foo.
bar.
baz.
buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.
    | ^^^^
> 2 | bar && foo.
    | ^^^^^^^^^^^
> 3 | bar.
    | ^^^^^^^^^^^
> 4 | baz.
    | ^^^^^^^^^^^
> 5 | buzz()
    | ^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz()
```

## Test #82

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.
bar && foo.
bar.
baz.
buzz && foo.
bar.
baz.
buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.
    | ^^^^^^^^^^^
> 2 | bar && foo.
    | ^^^^^^^^^^^
> 3 | bar.
    | ^^^^^^^^^^^
> 4 | baz.
    | ^^^^^^^^^^^
> 5 | buzz && foo.
    | ^^^^^^^^^^^
> 6 | bar.
    | ^^^^^^^^^^^
> 7 | baz.
    | ^^^^^^^^^^^
> 8 | buzz()
    | ^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz?.()
```

## Test #83

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.
bar() && foo.
bar().
baz && foo.
bar().
baz.
buzz && foo.
bar().
baz.
buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
>  1 | foo && foo.
     | ^^^^^^^^^^^
>  2 | bar() && foo.
     | ^^^^^^^^^^^^^
>  3 | bar().
     | ^^^^^^^^^^^^^
>  4 | baz && foo.
     | ^^^^^^^^^^^^^
>  5 | bar().
     | ^^^^^^^^^^^^^
>  6 | baz.
     | ^^^^^^^^^^^^^
>  7 | buzz && foo.
     | ^^^^^^^^^^^^^
>  8 | bar().
     | ^^^^^^^^^^^^^
>  9 | baz.
     | ^^^^^^^^^^^^^
> 10 | buzz()
     | ^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar()?.baz?.buzz?.()
```

## Test #84

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.
bar && foo.
bar.
baz && foo.
bar.
baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.
    | ^^^^^^^^^^^
> 2 | bar && foo.
    | ^^^^^^^^^^^
> 3 | bar.
    | ^^^^^^^^^^^
> 4 | baz && foo.
    | ^^^^^^^^^^^
> 5 | bar.
    | ^^^^^^^^^^^
> 6 | baz[buzz]()
    | ^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]()
```

## Test #85

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.
bar && foo.
bar.
baz && foo.
bar.
baz[buzz] && foo.
bar.
baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.
    | ^^^^^^^^^^^
> 2 | bar && foo.
    | ^^^^^^^^^^^
> 3 | bar.
    | ^^^^^^^^^^^
> 4 | baz && foo.
    | ^^^^^^^^^^^
> 5 | bar.
    | ^^^^^^^^^^^
> 6 | baz[buzz] && foo.
    | ^^^^^^^^^^^
> 7 | bar.
    | ^^^^^^^^^^^
> 8 | baz[buzz]()
    | ^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.()
```

## Test #86

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.
bar && foo?.
bar.
baz && foo?.
bar.
baz[buzz] && foo?.
bar.
baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.
    | ^^^^^^^^^^^^
> 2 | bar && foo?.
    | ^^^^^^^^^^^^
> 3 | bar.
    | ^^^^^^^^^^^^
> 4 | baz && foo?.
    | ^^^^^^^^^^^^
> 5 | bar.
    | ^^^^^^^^^^^^
> 6 | baz[buzz] && foo?.
    | ^^^^^^^^^^^^
> 7 | bar.
    | ^^^^^^^^^^^^
> 8 | baz[buzz]()
    | ^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.()
```

## Test #87

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.
bar.
baz && foo?.
bar.
baz[buzz]
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.
    | ^^^^^^^^^^^^
> 2 | bar.
    | ^^^^
> 3 | baz && foo?.
    | ^^^^
> 4 | bar.
    | ^^^^
> 5 | baz[buzz]
    | ^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar.baz?.[buzz]
```

## Test #88

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.
() && foo?.
().
bar
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.
    | ^^^^^^^^^^^^
> 2 | () && foo?.
    | ^^^^^^^^^^^
> 3 | ().
    | ^^^^^^^^^^^
> 4 | bar
    | ^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.()?.bar
```

## Test #89

### Test Code

<!-- prettier-ignore -->
```ts
foo.
bar && foo.
bar?.
() && foo.
bar?.
().
baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.
    | ^^^^
> 2 | bar && foo.
    | ^^^^^^^^^^^
> 3 | bar?.
    | ^^^^^^^^^^^
> 4 | () && foo.
    | ^^^^^^^^^^^
> 5 | bar?.
    | ^^^^^^^^^^^
> 6 | ().
    | ^^^^^^^^^^^
> 7 | baz
    | ^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.()?.baz
```

## Test #90

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.
bar !== null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.
    | ^^^^^^^^^^^^^^^^^^^^
> 2 | bar !== null
    | ^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #91

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.
bar != null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.
    | ^^^^^^^^^^^^^^^^^^^
> 2 | bar != null
    | ^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #92

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.
bar !== null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.
    | ^^^^^^^^^^^^^^^^^^^
> 2 | bar !== null
    | ^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #93

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.
bar != null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.
    | ^^^^^^^^^^^^^^^^^^^^
> 2 | bar != null
    | ^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #94

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && bing
    | ^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar && bing
```

## Test #95

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz && bing
    | ^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz && bing
```

## Test #96

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo() && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo() && bing
    | ^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.() && bing
```

## Test #97

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar() && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar() && bing
    | ^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.() && bing
```

## Test #98

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz && bing
```

## Test #99

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz && foo.bar.baz.buzz && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz && foo.bar.baz.buzz && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz && bing
```

## Test #100

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz.buzz && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz.buzz && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz && bing
```

## Test #101

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz.buzz && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz.buzz && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz && bing
```

## Test #102

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz && foo.bar.baz.buzz && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz && foo.bar.baz.buzz && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz && bing
```

## Test #103

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz && foo.bar.baz && foo.bar.baz.buzz && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz && foo.bar.baz && foo.bar.baz.buzz && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz && bing
```

## Test #104

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo[bar] && foo[bar].baz && foo[bar].baz.buzz && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo[bar] && foo[bar].baz && foo[bar].baz.buzz && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar]?.baz?.buzz && bing
```

## Test #105

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo[bar].baz && foo[bar].baz.buzz && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo[bar].baz && foo[bar].baz.buzz && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar].baz?.buzz && bing
```

## Test #106

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo[bar.baz] && foo[bar.baz].buzz && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo[bar.baz] && foo[bar.baz].buzz && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar.baz]?.buzz && bing
```

## Test #107

### Test Code

<!-- prettier-ignore -->
```ts
foo[this.bar] && foo[this.bar].baz && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo[this.bar] && foo[this.bar].baz && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo[this.bar]?.baz && bing
```

## Test #108

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz() && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz() && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz() && bing
```

## Test #109

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz && foo.bar.baz.buzz() && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz && foo.bar.baz.buzz() && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz?.() && bing
```

## Test #110

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz && foo.bar.baz.buzz && foo.bar.baz.buzz() && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz && foo.bar.baz.buzz && foo.bar.baz.buzz() && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz?.() && bing
```

## Test #111

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz.buzz() && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz.buzz() && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz() && bing
```

## Test #112

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz.buzz() && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz.buzz() && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz() && bing
```

## Test #113

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz.buzz && foo.bar.baz.buzz() && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz.buzz && foo.bar.baz.buzz() && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz?.() && bing
```

## Test #114

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar() && foo.bar().baz && foo.bar().baz.buzz && foo.bar().baz.buzz() && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar() && foo.bar().baz && foo.bar().baz.buzz && foo.bar().baz.buzz() && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar()?.baz?.buzz?.() && bing
```

## Test #115

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz[buzz]() && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz[buzz]() && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]() && bing
```

## Test #116

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz[buzz] && foo.bar.baz[buzz]() && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz[buzz] && foo.bar.baz[buzz]() && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.() && bing
```

## Test #117

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.bar && foo?.bar.baz && foo?.bar.baz[buzz] && foo?.bar.baz[buzz]() && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.bar && foo?.bar.baz && foo?.bar.baz[buzz] && foo?.bar.baz[buzz]() && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.() && bing
```

## Test #118

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.bar.baz && foo?.bar.baz[buzz] && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.bar.baz && foo?.bar.baz[buzz] && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar.baz?.[buzz] && bing
```

## Test #119

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.() && foo?.().bar && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.() && foo?.().bar && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.()?.bar && bing
```

## Test #120

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar?.() && foo.bar?.().baz && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar?.() && foo.bar?.().baz && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.()?.baz && bing
```

## Test #121

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar !== null && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar !== null && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null && bing
```

## Test #122

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar != null && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar != null && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null && bing
```

## Test #123

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar !== null && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar !== null && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null && bing
```

## Test #124

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar != null && bing
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar != null && bing
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null && bing
```

## Test #125

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && bing.bong
    | ^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar && bing.bong
```

## Test #126

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz && bing.bong
```

## Test #127

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo() && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo() && bing.bong
    | ^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.() && bing.bong
```

## Test #128

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar() && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar() && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.() && bing.bong
```

## Test #129

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz && bing.bong
```

## Test #130

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz && foo.bar.baz.buzz && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz && foo.bar.baz.buzz && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz && bing.bong
```

## Test #131

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz.buzz && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz.buzz && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz && bing.bong
```

## Test #132

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz.buzz && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz.buzz && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz && bing.bong
```

## Test #133

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz && foo.bar.baz.buzz && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz && foo.bar.baz.buzz && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz && bing.bong
```

## Test #134

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz && foo.bar.baz && foo.bar.baz.buzz && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz && foo.bar.baz && foo.bar.baz.buzz && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz && bing.bong
```

## Test #135

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo[bar] && foo[bar].baz && foo[bar].baz.buzz && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo[bar] && foo[bar].baz && foo[bar].baz.buzz && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar]?.baz?.buzz && bing.bong
```

## Test #136

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo[bar].baz && foo[bar].baz.buzz && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo[bar].baz && foo[bar].baz.buzz && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar].baz?.buzz && bing.bong
```

## Test #137

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo[bar.baz] && foo[bar.baz].buzz && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo[bar.baz] && foo[bar.baz].buzz && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar.baz]?.buzz && bing.bong
```

## Test #138

### Test Code

<!-- prettier-ignore -->
```ts
foo[this.bar] && foo[this.bar].baz && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo[this.bar] && foo[this.bar].baz && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo[this.bar]?.baz && bing.bong
```

## Test #139

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz() && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz() && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz() && bing.bong
```

## Test #140

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz && foo.bar.baz.buzz() && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz.buzz && foo.bar.baz.buzz() && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz?.() && bing.bong
```

## Test #141

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz && foo.bar.baz.buzz && foo.bar.baz.buzz() && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz && foo.bar.baz.buzz && foo.bar.baz.buzz() && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz?.() && bing.bong
```

## Test #142

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz.buzz() && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz.buzz() && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz() && bing.bong
```

## Test #143

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz.buzz() && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz.buzz() && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz() && bing.bong
```

## Test #144

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz.buzz && foo.bar.baz.buzz() && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz.buzz && foo.bar.baz.buzz() && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz?.() && bing.bong
```

## Test #145

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar() && foo.bar().baz && foo.bar().baz.buzz && foo.bar().baz.buzz() && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar() && foo.bar().baz && foo.bar().baz.buzz && foo.bar().baz.buzz() && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar()?.baz?.buzz?.() && bing.bong
```

## Test #146

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz[buzz]() && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz[buzz]() && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]() && bing.bong
```

## Test #147

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz && foo.bar.baz[buzz] && foo.bar.baz[buzz]() && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz && foo.bar.baz[buzz] && foo.bar.baz[buzz]() && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.() && bing.bong
```

## Test #148

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.bar && foo?.bar.baz && foo?.bar.baz[buzz] && foo?.bar.baz[buzz]() && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.bar && foo?.bar.baz && foo?.bar.baz[buzz] && foo?.bar.baz[buzz]() && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.() && bing.bong
```

## Test #149

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.bar.baz && foo?.bar.baz[buzz] && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.bar.baz && foo?.bar.baz[buzz] && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar.baz?.[buzz] && bing.bong
```

## Test #150

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.() && foo?.().bar && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.() && foo?.().bar && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.()?.bar && bing.bong
```

## Test #151

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar?.() && foo.bar?.().baz && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar?.() && foo.bar?.().baz && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.()?.baz && bing.bong
```

## Test #152

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar !== null && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar !== null && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null && bing.bong
```

## Test #153

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar != null && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar != null && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null && bing.bong
```

## Test #154

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar !== null && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar !== null && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null && bing.bong
```

## Test #155

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar != null && bing.bong
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar != null && bing.bong
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null && bing.bong
```

## Test #156

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar
    | ^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar
```

## Test #157

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar !== null && foo.bar.baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar !== null && foo.bar.baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz
```

## Test #158

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo()
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.()
```

## Test #159

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar !== null && foo.bar()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar !== null && foo.bar()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.()
```

## Test #160

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar !== null && foo.bar.baz !== null && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar !== null && foo.bar.baz !== null && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz
```

## Test #161

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar !== null && foo.bar.baz !== null && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar !== null && foo.bar.baz !== null && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz
```

## Test #162

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar !== null && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar !== null && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz
```

## Test #163

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar !== null && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar !== null && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz
```

## Test #164

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar !== null && foo.bar.baz !== null && foo.bar.baz !== null && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar !== null && foo.bar.baz !== null && foo.bar.baz !== null && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz
```

## Test #165

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar !== null && foo.bar.baz !== null && foo.bar.baz !== null && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar !== null && foo.bar.baz !== null && foo.bar.baz !== null && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz
```

## Test #166

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo[bar] !== null && foo[bar].baz !== null && foo[bar].baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo[bar] !== null && foo[bar].baz !== null && foo[bar].baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar]?.baz?.buzz
```

## Test #167

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo[bar].baz !== null && foo[bar].baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo[bar].baz !== null && foo[bar].baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar].baz?.buzz
```

## Test #168

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo[bar.baz] !== null && foo[bar.baz].buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo[bar.baz] !== null && foo[bar.baz].buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar.baz]?.buzz
```

## Test #169

### Test Code

<!-- prettier-ignore -->
```ts
foo[this.bar] !== null && foo[this.bar].baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo[this.bar] !== null && foo[this.bar].baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo[this.bar]?.baz
```

## Test #170

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar !== null && foo.bar.baz !== null && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar !== null && foo.bar.baz !== null && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz()
```

## Test #171

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar !== null && foo.bar.baz !== null && foo.bar.baz.buzz !== null && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar !== null && foo.bar.baz !== null && foo.bar.baz.buzz !== null && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz?.()
```

## Test #172

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar !== null && foo.bar.baz !== null && foo.bar.baz.buzz !== null && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar !== null && foo.bar.baz !== null && foo.bar.baz.buzz !== null && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz?.()
```

## Test #173

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar !== null && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar !== null && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz()
```

## Test #174

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar !== null && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar !== null && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz()
```

## Test #175

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar !== null && foo.bar.baz.buzz !== null && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar !== null && foo.bar.baz.buzz !== null && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz?.()
```

## Test #176

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar() !== null && foo.bar().baz !== null && foo.bar().baz.buzz !== null && foo.bar().baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar() !== null && foo.bar().baz !== null && foo.bar().baz.buzz !== null && foo.bar().baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar()?.baz?.buzz?.()
```

## Test #177

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar !== null && foo.bar.baz !== null && foo.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar !== null && foo.bar.baz !== null && foo.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]()
```

## Test #178

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo.bar !== null && foo.bar.baz !== null && foo.bar.baz[buzz] !== null && foo.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo.bar !== null && foo.bar.baz !== null && foo.bar.baz[buzz] !== null && foo.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.()
```

## Test #179

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo?.bar !== null && foo?.bar.baz !== null && foo?.bar.baz[buzz] !== null && foo?.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo?.bar !== null && foo?.bar.baz !== null && foo?.bar.baz[buzz] !== null && foo?.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.()
```

## Test #180

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo?.bar.baz !== null && foo?.bar.baz[buzz]
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo?.bar.baz !== null && foo?.bar.baz[buzz]
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar.baz?.[buzz]
```

## Test #181

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null && foo?.() !== null && foo?.().bar
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null && foo?.() !== null && foo?.().bar
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.()?.bar
```

## Test #182

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar !== null && foo.bar?.() !== null && foo.bar?.().baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar !== null && foo.bar?.() !== null && foo.bar?.().baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.()?.baz
```

## Test #183

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null !== null && foo.bar !== null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null !== null && foo.bar !== null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #184

### Test Code

<!-- prettier-ignore -->
```ts
foo != null !== null && foo.bar != null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null !== null && foo.bar != null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #185

### Test Code

<!-- prettier-ignore -->
```ts
foo != null !== null && foo.bar !== null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null !== null && foo.bar !== null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #186

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null !== null && foo.bar != null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null !== null && foo.bar != null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #187

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar
    | ^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar
```

## Test #188

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar != null && foo.bar.baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar != null && foo.bar.baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz
```

## Test #189

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo()
    | ^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.()
```

## Test #190

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar != null && foo.bar()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar != null && foo.bar()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.()
```

## Test #191

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar != null && foo.bar.baz != null && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar != null && foo.bar.baz != null && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz
```

## Test #192

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar != null && foo.bar.baz != null && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar != null && foo.bar.baz != null && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz
```

## Test #193

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar != null && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar != null && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz
```

## Test #194

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar != null && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar != null && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz
```

## Test #195

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar != null && foo.bar.baz != null && foo.bar.baz != null && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar != null && foo.bar.baz != null && foo.bar.baz != null && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz
```

## Test #196

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar != null && foo.bar.baz != null && foo.bar.baz != null && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar != null && foo.bar.baz != null && foo.bar.baz != null && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz
```

## Test #197

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo[bar] != null && foo[bar].baz != null && foo[bar].baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo[bar] != null && foo[bar].baz != null && foo[bar].baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar]?.baz?.buzz
```

## Test #198

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo[bar].baz != null && foo[bar].baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo[bar].baz != null && foo[bar].baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar].baz?.buzz
```

## Test #199

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo[bar.baz] != null && foo[bar.baz].buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo[bar.baz] != null && foo[bar.baz].buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar.baz]?.buzz
```

## Test #200

### Test Code

<!-- prettier-ignore -->
```ts
foo[this.bar] != null && foo[this.bar].baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo[this.bar] != null && foo[this.bar].baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo[this.bar]?.baz
```

## Test #201

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar != null && foo.bar.baz != null && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar != null && foo.bar.baz != null && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz()
```

## Test #202

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar != null && foo.bar.baz != null && foo.bar.baz.buzz != null && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar != null && foo.bar.baz != null && foo.bar.baz.buzz != null && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz?.()
```

## Test #203

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar != null && foo.bar.baz != null && foo.bar.baz.buzz != null && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar != null && foo.bar.baz != null && foo.bar.baz.buzz != null && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz?.()
```

## Test #204

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar != null && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar != null && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz()
```

## Test #205

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar != null && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar != null && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz()
```

## Test #206

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar != null && foo.bar.baz.buzz != null && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar != null && foo.bar.baz.buzz != null && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz?.()
```

## Test #207

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar() != null && foo.bar().baz != null && foo.bar().baz.buzz != null && foo.bar().baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar() != null && foo.bar().baz != null && foo.bar().baz.buzz != null && foo.bar().baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar()?.baz?.buzz?.()
```

## Test #208

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar != null && foo.bar.baz != null && foo.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar != null && foo.bar.baz != null && foo.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]()
```

## Test #209

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo.bar != null && foo.bar.baz != null && foo.bar.baz[buzz] != null && foo.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo.bar != null && foo.bar.baz != null && foo.bar.baz[buzz] != null && foo.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.()
```

## Test #210

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo?.bar != null && foo?.bar.baz != null && foo?.bar.baz[buzz] != null && foo?.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo?.bar != null && foo?.bar.baz != null && foo?.bar.baz[buzz] != null && foo?.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.()
```

## Test #211

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo?.bar.baz != null && foo?.bar.baz[buzz]
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo?.bar.baz != null && foo?.bar.baz[buzz]
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar.baz?.[buzz]
```

## Test #212

### Test Code

<!-- prettier-ignore -->
```ts
foo != null && foo?.() != null && foo?.().bar
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null && foo?.() != null && foo?.().bar
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.()?.bar
```

## Test #213

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar != null && foo.bar?.() != null && foo.bar?.().baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar != null && foo.bar?.() != null && foo.bar?.().baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.()?.baz
```

## Test #214

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null != null && foo.bar !== null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null != null && foo.bar !== null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #215

### Test Code

<!-- prettier-ignore -->
```ts
foo != null != null && foo.bar != null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null != null && foo.bar != null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #216

### Test Code

<!-- prettier-ignore -->
```ts
foo != null != null && foo.bar !== null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null != null && foo.bar !== null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #217

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null != null && foo.bar != null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null != null && foo.bar != null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #218

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo.bar
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo.bar
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar
```

## Test #219

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar !== undefined && foo.bar.baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar !== undefined && foo.bar.baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz
```

## Test #220

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.()
```

## Test #221

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar !== undefined && foo.bar()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar !== undefined && foo.bar()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.()
```

## Test #222

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz
```

## Test #223

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz
```

## Test #224

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo.bar !== undefined && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo.bar !== undefined && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz
```

## Test #225

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar !== undefined && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar !== undefined && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz
```

## Test #226

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz !== undefined && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz !== undefined && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz
```

## Test #227

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz !== undefined && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz !== undefined && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz
```

## Test #228

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo[bar] !== undefined && foo[bar].baz !== undefined && foo[bar].baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo[bar] !== undefined && foo[bar].baz !== undefined && foo[bar].baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar]?.baz?.buzz
```

## Test #229

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo[bar].baz !== undefined && foo[bar].baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo[bar].baz !== undefined && foo[bar].baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar].baz?.buzz
```

## Test #230

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo[bar.baz] !== undefined && foo[bar.baz].buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo[bar.baz] !== undefined && foo[bar.baz].buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar.baz]?.buzz
```

## Test #231

### Test Code

<!-- prettier-ignore -->
```ts
foo[this.bar] !== undefined && foo[this.bar].baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo[this.bar] !== undefined && foo[this.bar].baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo[this.bar]?.baz
```

## Test #232

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz()
```

## Test #233

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz.buzz !== undefined && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz.buzz !== undefined && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz?.()
```

## Test #234

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz.buzz !== undefined && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz.buzz !== undefined && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz?.()
```

## Test #235

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo.bar !== undefined && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo.bar !== undefined && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz()
```

## Test #236

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar !== undefined && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar !== undefined && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz()
```

## Test #237

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo.bar !== undefined && foo.bar.baz.buzz !== undefined && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo.bar !== undefined && foo.bar.baz.buzz !== undefined && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz?.()
```

## Test #238

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo.bar() !== undefined && foo.bar().baz !== undefined && foo.bar().baz.buzz !== undefined && foo.bar().baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo.bar() !== undefined && foo.bar().baz !== undefined && foo.bar().baz.buzz !== undefined && foo.bar().baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar()?.baz?.buzz?.()
```

## Test #239

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]()
```

## Test #240

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz[buzz] !== undefined && foo.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo.bar !== undefined && foo.bar.baz !== undefined && foo.bar.baz[buzz] !== undefined && foo.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.()
```

## Test #241

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo?.bar !== undefined && foo?.bar.baz !== undefined && foo?.bar.baz[buzz] !== undefined && foo?.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo?.bar !== undefined && foo?.bar.baz !== undefined && foo?.bar.baz[buzz] !== undefined && foo?.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.()
```

## Test #242

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo?.bar.baz !== undefined && foo?.bar.baz[buzz]
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo?.bar.baz !== undefined && foo?.bar.baz[buzz]
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar.baz?.[buzz]
```

## Test #243

### Test Code

<!-- prettier-ignore -->
```ts
foo !== undefined && foo?.() !== undefined && foo?.().bar
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== undefined && foo?.() !== undefined && foo?.().bar
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.()?.bar
```

## Test #244

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar !== undefined && foo.bar?.() !== undefined && foo.bar?.().baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar !== undefined && foo.bar?.() !== undefined && foo.bar?.().baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.()?.baz
```

## Test #245

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null !== undefined && foo.bar !== null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null !== undefined && foo.bar !== null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #246

### Test Code

<!-- prettier-ignore -->
```ts
foo != null !== undefined && foo.bar != null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null !== undefined && foo.bar != null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #247

### Test Code

<!-- prettier-ignore -->
```ts
foo != null !== undefined && foo.bar !== null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null !== undefined && foo.bar !== null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #248

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null !== undefined && foo.bar != null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null !== undefined && foo.bar != null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #249

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo.bar
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo.bar
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar
```

## Test #250

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar != undefined && foo.bar.baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar != undefined && foo.bar.baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz
```

## Test #251

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.()
```

## Test #252

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar != undefined && foo.bar()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar != undefined && foo.bar()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.()
```

## Test #253

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz
```

## Test #254

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz
```

## Test #255

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo.bar != undefined && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo.bar != undefined && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz
```

## Test #256

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar != undefined && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar != undefined && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz
```

## Test #257

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz != undefined && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz != undefined && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz
```

## Test #258

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz != undefined && foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz != undefined && foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz
```

## Test #259

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo[bar] != undefined && foo[bar].baz != undefined && foo[bar].baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo[bar] != undefined && foo[bar].baz != undefined && foo[bar].baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar]?.baz?.buzz
```

## Test #260

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo[bar].baz != undefined && foo[bar].baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo[bar].baz != undefined && foo[bar].baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar].baz?.buzz
```

## Test #261

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo[bar.baz] != undefined && foo[bar.baz].buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo[bar.baz] != undefined && foo[bar.baz].buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[bar.baz]?.buzz
```

## Test #262

### Test Code

<!-- prettier-ignore -->
```ts
foo[this.bar] != undefined && foo[this.bar].baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo[this.bar] != undefined && foo[this.bar].baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo[this.bar]?.baz
```

## Test #263

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz()
```

## Test #264

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz.buzz != undefined && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz.buzz != undefined && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz?.()
```

## Test #265

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz.buzz != undefined && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz.buzz != undefined && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.buzz?.()
```

## Test #266

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo.bar != undefined && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo.bar != undefined && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz()
```

## Test #267

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar != undefined && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar != undefined && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz.buzz()
```

## Test #268

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo.bar != undefined && foo.bar.baz.buzz != undefined && foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo.bar != undefined && foo.bar.baz.buzz != undefined && foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz.buzz?.()
```

## Test #269

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo.bar() != undefined && foo.bar().baz != undefined && foo.bar().baz.buzz != undefined && foo.bar().baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo.bar() != undefined && foo.bar().baz != undefined && foo.bar().baz.buzz != undefined && foo.bar().baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar()?.baz?.buzz?.()
```

## Test #270

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]()
```

## Test #271

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz[buzz] != undefined && foo.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo.bar != undefined && foo.bar.baz != undefined && foo.bar.baz[buzz] != undefined && foo.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.()
```

## Test #272

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo?.bar != undefined && foo?.bar.baz != undefined && foo?.bar.baz[buzz] != undefined && foo?.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo?.bar != undefined && foo?.bar.baz != undefined && foo?.bar.baz[buzz] != undefined && foo?.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.[buzz]?.()
```

## Test #273

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo?.bar.baz != undefined && foo?.bar.baz[buzz]
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo?.bar.baz != undefined && foo?.bar.baz[buzz]
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar.baz?.[buzz]
```

## Test #274

### Test Code

<!-- prettier-ignore -->
```ts
foo != undefined && foo?.() != undefined && foo?.().bar
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != undefined && foo?.() != undefined && foo?.().bar
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.()?.bar
```

## Test #275

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar != undefined && foo.bar?.() != undefined && foo.bar?.().baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar != undefined && foo.bar?.() != undefined && foo.bar?.().baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.()?.baz
```

## Test #276

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null != undefined && foo.bar !== null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null != undefined && foo.bar !== null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #277

### Test Code

<!-- prettier-ignore -->
```ts
foo != null != undefined && foo.bar != null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null != undefined && foo.bar != null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #278

### Test Code

<!-- prettier-ignore -->
```ts
foo != null != undefined && foo.bar !== null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo != null != undefined && foo.bar !== null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #279

### Test Code

<!-- prettier-ignore -->
```ts
foo !== null != undefined && foo.bar != null
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo !== null != undefined && foo.bar != null
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null
```

## Test #280

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo.bar
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo.bar
    | ^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.bar
```

## Test #281

### Test Code

<!-- prettier-ignore -->
```ts
!foo.bar || !foo.bar.baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo.bar || !foo.bar.baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo.bar?.baz
```

## Test #282

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo()
    | ^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.()
```

## Test #283

### Test Code

<!-- prettier-ignore -->
```ts
!foo.bar || !foo.bar()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo.bar || !foo.bar()
    | ^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo.bar?.()
```

## Test #284

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo.bar || !foo.bar.baz || !foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo.bar || !foo.bar.baz || !foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.bar?.baz?.buzz
```

## Test #285

### Test Code

<!-- prettier-ignore -->
```ts
!foo.bar || !foo.bar.baz || !foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo.bar || !foo.bar.baz || !foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo.bar?.baz?.buzz
```

## Test #286

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo.bar || !foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo.bar || !foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.bar?.baz.buzz
```

## Test #287

### Test Code

<!-- prettier-ignore -->
```ts
!foo.bar || !foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo.bar || !foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo.bar?.baz.buzz
```

## Test #288

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo.bar || !foo.bar.baz || !foo.bar.baz || !foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo.bar || !foo.bar.baz || !foo.bar.baz || !foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.bar?.baz?.buzz
```

## Test #289

### Test Code

<!-- prettier-ignore -->
```ts
!foo.bar || !foo.bar.baz || !foo.bar.baz || !foo.bar.baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo.bar || !foo.bar.baz || !foo.bar.baz || !foo.bar.baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo.bar?.baz?.buzz
```

## Test #290

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo[bar] || !foo[bar].baz || !foo[bar].baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo[bar] || !foo[bar].baz || !foo[bar].baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.[bar]?.baz?.buzz
```

## Test #291

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo[bar].baz || !foo[bar].baz.buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo[bar].baz || !foo[bar].baz.buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.[bar].baz?.buzz
```

## Test #292

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo[bar.baz] || !foo[bar.baz].buzz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo[bar.baz] || !foo[bar.baz].buzz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.[bar.baz]?.buzz
```

## Test #293

### Test Code

<!-- prettier-ignore -->
```ts
!foo[this.bar] || !foo[this.bar].baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo[this.bar] || !foo[this.bar].baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo[this.bar]?.baz
```

## Test #294

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo.bar || !foo.bar.baz || !foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo.bar || !foo.bar.baz || !foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.bar?.baz?.buzz()
```

## Test #295

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo.bar || !foo.bar.baz || !foo.bar.baz.buzz || !foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo.bar || !foo.bar.baz || !foo.bar.baz.buzz || !foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.bar?.baz?.buzz?.()
```

## Test #296

### Test Code

<!-- prettier-ignore -->
```ts
!foo.bar || !foo.bar.baz || !foo.bar.baz.buzz || !foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo.bar || !foo.bar.baz || !foo.bar.baz.buzz || !foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo.bar?.baz?.buzz?.()
```

## Test #297

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo.bar || !foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo.bar || !foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.bar?.baz.buzz()
```

## Test #298

### Test Code

<!-- prettier-ignore -->
```ts
!foo.bar || !foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo.bar || !foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo.bar?.baz.buzz()
```

## Test #299

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo.bar || !foo.bar.baz.buzz || !foo.bar.baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo.bar || !foo.bar.baz.buzz || !foo.bar.baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.bar?.baz.buzz?.()
```

## Test #300

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo.bar() || !foo.bar().baz || !foo.bar().baz.buzz || !foo.bar().baz.buzz()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo.bar() || !foo.bar().baz || !foo.bar().baz.buzz || !foo.bar().baz.buzz()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.bar()?.baz?.buzz?.()
```

## Test #301

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo.bar || !foo.bar.baz || !foo.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo.bar || !foo.bar.baz || !foo.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.bar?.baz?.[buzz]()
```

## Test #302

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo.bar || !foo.bar.baz || !foo.bar.baz[buzz] || !foo.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo.bar || !foo.bar.baz || !foo.bar.baz[buzz] || !foo.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.bar?.baz?.[buzz]?.()
```

## Test #303

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo?.bar || !foo?.bar.baz || !foo?.bar.baz[buzz] || !foo?.bar.baz[buzz]()
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo?.bar || !foo?.bar.baz || !foo?.bar.baz[buzz] || !foo?.bar.baz[buzz]()
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.bar?.baz?.[buzz]?.()
```

## Test #304

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo?.bar.baz || !foo?.bar.baz[buzz]
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo?.bar.baz || !foo?.bar.baz[buzz]
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.bar.baz?.[buzz]
```

## Test #305

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo?.() || !foo?.().bar
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo?.() || !foo?.().bar
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.()?.bar
```

## Test #306

### Test Code

<!-- prettier-ignore -->
```ts
!foo.bar || !foo.bar?.() || !foo.bar?.().baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo.bar || !foo.bar?.() || !foo.bar?.().baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo.bar?.()?.baz
```

## Test #307

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz || baz && baz.bar && baz.bar.foo
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz || baz && baz.bar && baz.bar.foo
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz || baz && baz.bar && baz.bar.foo
```

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar && foo.bar.baz || baz && baz.bar && baz.bar.foo
    |                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo && foo.bar && foo.bar.baz || baz?.bar?.foo
```

## Test #308

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar != null && foo.bar.baz !== undefined && foo.bar.baz.buzz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar != null && foo.bar.baz !== undefined && foo.bar.baz.buzz;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz;
```

## Test #309

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar.baz != null && foo.bar.baz.qux !== undefined && foo.bar.baz.qux.buzz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar.baz != null && foo.bar.baz.qux !== undefined && foo.bar.baz.qux.buzz;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.baz?.qux?.buzz;
```

## Test #310

### Test Code

<!-- prettier-ignore -->
```tsx
foo && foo.bar(baz => <This Requires Spaces />);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | foo && foo.bar(baz => <This Requires Spaces />);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```tsx
foo?.bar(baz => <This Requires Spaces />);
```

## Test #311

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar(baz => typeof baz);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar(baz => typeof baz);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar(baz => typeof baz);
```

## Test #312

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo["some long string"] && foo["some long string"].baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo["some long string"] && foo["some long string"].baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.["some long string"]?.baz
```

## Test #313

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo[`some long string`] && foo[`some long string`].baz
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo[`some long string`] && foo[`some long string`].baz
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.[`some long string`]?.baz
```

## Test #314

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo['some long string'] && foo['some long string'].baz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo['some long string'] && foo['some long string'].baz;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.['some long string']?.baz;
```

## Test #315

### Test Code

<!-- prettier-ignore -->
```ts

foo && foo.bar(/* comment */a,
  // comment2
  b, );
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | foo && foo.bar(/* comment */a,
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |   // comment2
    | ^^^^^^^^^^^^^
> 4 |   b, );
    | ^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
  5 |       
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts

foo?.bar(/* comment */a,
  // comment2
  b, );
      
```

## Test #316

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar != null;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar != null;
    | ^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null;
```

## Test #317

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar != undefined;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar != undefined;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != undefined;
```

## Test #318

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar != null && baz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar != null && baz;
    | ^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar != null && baz;
```

## Test #319

### Test Code

<!-- prettier-ignore -->
```ts
this.bar && this.bar.baz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | this.bar && this.bar.baz;
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
this.bar?.baz;
```

## Test #320

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo?.();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo?.();
    | ^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.();
```

## Test #321

### Test Code

<!-- prettier-ignore -->
```ts
foo.bar && foo.bar?.();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo.bar && foo.bar?.();
    | ^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.();
```

## Test #322

### Test Code

<!-- prettier-ignore -->
```ts
foo && foo.bar != null && foo.bar.baz !== undefined && foo.bar.baz.buzz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo && foo.bar != null && foo.bar.baz !== undefined && foo.bar.baz.buzz;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar?.baz?.buzz;
```

## Test #323

### Test Code

<!-- prettier-ignore -->
```tsx
foo && foo.bar(baz => <This Requires Spaces />);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | foo && foo.bar(baz => <This Requires Spaces />);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```tsx
foo?.bar(baz => <This Requires Spaces />);
```

## Test #324

### Test Code

<!-- prettier-ignore -->
```ts
(foo || {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo || {}).bar;
    | ^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar;
```

## Test #325

### Test Code

<!-- prettier-ignore -->
```ts
(foo || ({})).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo || ({})).bar;
    | ^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar;
```

## Test #326

### Test Code

<!-- prettier-ignore -->
```ts
(await foo || {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (await foo || {}).bar;
    | ^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(await foo)?.bar;
```

## Test #327

### Test Code

<!-- prettier-ignore -->
```ts
(foo1?.foo2 || {}).foo3;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo1?.foo2 || {}).foo3;
    | ^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo1?.foo2?.foo3;
```

## Test #328

### Test Code

<!-- prettier-ignore -->
```ts
((() => foo())() || {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ((() => foo())() || {}).bar;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(() => foo())()?.bar;
```

## Test #329

### Test Code

<!-- prettier-ignore -->
```ts
const foo = (bar || {}).baz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = (bar || {}).baz;
    |             ^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
const foo = bar?.baz;
```

## Test #330

### Test Code

<!-- prettier-ignore -->
```ts
(foo.bar || {})[baz];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo.bar || {})[baz];
    | ^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.[baz];
```

## Test #331

### Test Code

<!-- prettier-ignore -->
```ts
((foo1 || {}).foo2 || {}).foo3;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ((foo1 || {}).foo2 || {}).foo3;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(foo1 || {}).foo2?.foo3;
```

<!-- prettier-ignore -->
```ts
> 1 | ((foo1 || {}).foo2 || {}).foo3;
    |  ^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(foo1?.foo2 || {}).foo3;
```

## Test #332

### Test Code

<!-- prettier-ignore -->
```ts
(foo || undefined || {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo || undefined || {}).bar;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(foo || undefined)?.bar;
```

## Test #333

### Test Code

<!-- prettier-ignore -->
```ts
(foo() || bar || {}).baz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo() || bar || {}).baz;
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(foo() || bar)?.baz;
```

## Test #334

### Test Code

<!-- prettier-ignore -->
```ts
((foo1 ? foo2 : foo3) || {}).foo4;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ((foo1 ? foo2 : foo3) || {}).foo4;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(foo1 ? foo2 : foo3)?.foo4;
```

## Test #335

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) { (foo || {}).bar; }
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (foo) { (foo || {}).bar; }
    |            ^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
if (foo) { foo?.bar; }
```

## Test #336

### Test Code

<!-- prettier-ignore -->
```ts
if ((foo || {}).bar) { foo.bar; }
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if ((foo || {}).bar) { foo.bar; }
    |     ^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
if (foo?.bar) { foo.bar; }
```

## Test #337

### Test Code

<!-- prettier-ignore -->
```ts
(undefined && foo || {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (undefined && foo || {}).bar;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(undefined && foo)?.bar;
```

## Test #338

### Test Code

<!-- prettier-ignore -->
```ts
(foo ?? {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo ?? {}).bar;
    | ^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar;
```

## Test #339

### Test Code

<!-- prettier-ignore -->
```ts
(foo ?? ({})).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo ?? ({})).bar;
    | ^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo?.bar;
```

## Test #340

### Test Code

<!-- prettier-ignore -->
```ts
(await foo ?? {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (await foo ?? {}).bar;
    | ^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(await foo)?.bar;
```

## Test #341

### Test Code

<!-- prettier-ignore -->
```ts
(foo1?.foo2 ?? {}).foo3;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo1?.foo2 ?? {}).foo3;
    | ^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo1?.foo2?.foo3;
```

## Test #342

### Test Code

<!-- prettier-ignore -->
```ts
((() => foo())() ?? {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ((() => foo())() ?? {}).bar;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(() => foo())()?.bar;
```

## Test #343

### Test Code

<!-- prettier-ignore -->
```ts
const foo = (bar ?? {}).baz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = (bar ?? {}).baz;
    |             ^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
const foo = bar?.baz;
```

## Test #344

### Test Code

<!-- prettier-ignore -->
```ts
(foo.bar ?? {})[baz];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo.bar ?? {})[baz];
    | ^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
foo.bar?.[baz];
```

## Test #345

### Test Code

<!-- prettier-ignore -->
```ts
((foo1 ?? {}).foo2 ?? {}).foo3;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ((foo1 ?? {}).foo2 ?? {}).foo3;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(foo1 ?? {}).foo2?.foo3;
```

<!-- prettier-ignore -->
```ts
> 1 | ((foo1 ?? {}).foo2 ?? {}).foo3;
    |  ^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(foo1?.foo2 ?? {}).foo3;
```

## Test #346

### Test Code

<!-- prettier-ignore -->
```ts
(foo ?? undefined ?? {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo ?? undefined ?? {}).bar;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(foo ?? undefined)?.bar;
```

## Test #347

### Test Code

<!-- prettier-ignore -->
```ts
(foo() ?? bar ?? {}).baz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo() ?? bar ?? {}).baz;
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(foo() ?? bar)?.baz;
```

## Test #348

### Test Code

<!-- prettier-ignore -->
```ts
((foo1 ? foo2 : foo3) ?? {}).foo4;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ((foo1 ? foo2 : foo3) ?? {}).foo4;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(foo1 ? foo2 : foo3)?.foo4;
```

## Test #349

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) { (foo ?? {}).bar; }
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (foo) { (foo ?? {}).bar; }
    |            ^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
if (foo) { foo?.bar; }
```

## Test #350

### Test Code

<!-- prettier-ignore -->
```ts
if ((foo ?? {}).bar) { foo.bar; }
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if ((foo ?? {}).bar) { foo.bar; }
    |     ^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
if (foo?.bar) { foo.bar; }
```

## Test #351

### Test Code

<!-- prettier-ignore -->
```ts
(undefined && foo ?? {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (undefined && foo ?? {}).bar;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(undefined && foo)?.bar;
```

## Test #352

### Test Code

<!-- prettier-ignore -->
```ts
(a > b || {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (a > b || {}).bar;
    | ^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(a > b)?.bar;
```

## Test #353

### Test Code

<!-- prettier-ignore -->
```ts
(((typeof x) as string) || {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (((typeof x) as string) || {}).bar;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
((typeof x) as string)?.bar;
```

## Test #354

### Test Code

<!-- prettier-ignore -->
```ts
(void foo() || {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (void foo() || {}).bar;
    | ^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(void foo())?.bar;
```

## Test #355

### Test Code

<!-- prettier-ignore -->
```ts
((a ? b : c) || {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ((a ? b : c) || {}).bar;
    | ^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(a ? b : c)?.bar;
```

## Test #356

### Test Code

<!-- prettier-ignore -->
```ts
((a instanceof Error) || {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ((a instanceof Error) || {}).bar;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(a instanceof Error)?.bar;
```

## Test #357

### Test Code

<!-- prettier-ignore -->
```ts
((a << b) || {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ((a << b) || {}).bar;
    | ^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(a << b)?.bar;
```

## Test #358

### Test Code

<!-- prettier-ignore -->
```ts
((foo ** 2) || {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ((foo ** 2) || {}).bar;
    | ^^^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(foo ** 2)?.bar;
```

## Test #359

### Test Code

<!-- prettier-ignore -->
```ts
(foo ** 2 || {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo ** 2 || {}).bar;
    | ^^^^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(foo ** 2)?.bar;
```

## Test #360

### Test Code

<!-- prettier-ignore -->
```ts
(foo++ || {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (foo++ || {}).bar;
    | ^^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(foo++)?.bar;
```

## Test #361

### Test Code

<!-- prettier-ignore -->
```ts
(+foo || {}).bar;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (+foo || {}).bar;
    | ^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(+foo)?.bar;
```

## Test #362

### Test Code

<!-- prettier-ignore -->
```ts
(this || {}).foo;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (this || {}).foo;
    | ^^^^^^^^^^^^^^^^ Change to an optional chain.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
this?.foo;
```

## Test #363

### Test Code

<!-- prettier-ignore -->
```ts
!this.bar || !this.bar.baz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !this.bar || !this.bar.baz;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!this.bar?.baz;
```

## Test #364

### Test Code

<!-- prettier-ignore -->
```ts
!a.b || !a.b();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !a.b || !a.b();
    | ^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!a.b?.();
```

## Test #365

### Test Code

<!-- prettier-ignore -->
```ts
!foo.bar || !foo.bar.baz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo.bar || !foo.bar.baz;
    | ^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo.bar?.baz;
```

## Test #366

### Test Code

<!-- prettier-ignore -->
```ts
!foo[bar] || !foo[bar]?.[baz];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo[bar] || !foo[bar]?.[baz];
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo[bar]?.[baz];
```

## Test #367

### Test Code

<!-- prettier-ignore -->
```ts
!foo || !foo?.bar.baz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !foo || !foo?.bar.baz;
    | ^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!foo?.bar.baz;
```

## Test #368

### Test Code

<!-- prettier-ignore -->
```ts
(!foo || !foo.bar || !foo.bar.baz) && (!baz || !baz.bar || !baz.bar.foo);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (!foo || !foo.bar || !foo.bar.baz) && (!baz || !baz.bar || !baz.bar.foo);
    |  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(!foo?.bar?.baz) && (!baz || !baz.bar || !baz.bar.foo);
```

<!-- prettier-ignore -->
```ts
> 1 | (!foo || !foo.bar || !foo.bar.baz) && (!baz || !baz.bar || !baz.bar.foo);
    |                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
(!foo || !foo.bar || !foo.bar.baz) && (!baz?.bar?.foo);
```

## Test #369

### Test Code

<!-- prettier-ignore -->
```ts

        class Foo {
          constructor() {
            new.target && new.target.length;
          }
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Foo {
  3 |           constructor() {
> 4 |             new.target && new.target.length;
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
  5 |           }
  6 |         }
  7 |       
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts

        class Foo {
          constructor() {
            new.target?.length;
          }
        }
      
```

## Test #370

### Test Code

<!-- prettier-ignore -->
```ts
import.meta && import.meta?.baz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import.meta && import.meta?.baz;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
import.meta?.baz;
```

## Test #371

### Test Code

<!-- prettier-ignore -->
```ts
!import.meta || !import.meta?.baz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !import.meta || !import.meta?.baz;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
!import.meta?.baz;
```

## Test #372

### Test Code

<!-- prettier-ignore -->
```ts
import.meta && import.meta?.() && import.meta?.().baz;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import.meta && import.meta?.() && import.meta?.().baz;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Prefer using an optional chain expression instead, as it's more concise and easier to read.
```

#### Suggestions

##### Change to an optional chain.

<!-- prettier-ignore -->
```ts
import.meta?.()?.baz;
```
