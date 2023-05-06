# consistent-type-assertions

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
const x = new Generic<int>() as Foo;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = new Generic<int>() as Foo;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^ Use '<Foo>' instead of 'as Foo'.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
const x = b as A;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = b as A;
    |           ^^^^^^ Use '<A>' instead of 'as A'.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
const x = [1] as readonly number[];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = [1] as readonly number[];
    |           ^^^^^^^^^^^^^^^^^^^^^^^^ Use '<readonly number[]>' instead of 'as readonly number[]'.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
const x = ('string') as a | b;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = ('string') as a | b;
    |           ^^^^^^^^^^^^^^^^^^^ Use '<a | b>' instead of 'as a | b'.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
const x = !'string' as A;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = !'string' as A;
    |           ^^^^^^^^^^^^^^ Use '<A>' instead of 'as A'.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
const x = a as A + b;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = a as A + b;
    |           ^^^^^^ Use '<A>' instead of 'as A'.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
const x = a as (A) + (b);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = a as (A) + (b);
    |           ^^^^^^^^ Use '<A>' instead of 'as A'.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
const x = (new Generic<string>()) as Foo;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = (new Generic<string>()) as Foo;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use '<Foo>' instead of 'as Foo'.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
const x = (new (Generic<string> as Foo)());
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = (new (Generic<string> as Foo)());
    |                 ^^^^^^^^^^^^^^^^^^^^^^ Use '<Foo>' instead of 'as Foo'.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
const x = { key: 'value' } as const;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = { key: 'value' } as const;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^ Use '<const>' instead of 'as const'.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
const x = <Foo>new Generic<int>();
```

### Fix Output

<!-- prettier-ignore -->
```ts
const x = new Generic<int>() as Foo;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <Foo>new Generic<int>();
    |           ^^^^^^^^^^^^^^^^^^^^^^^ Use 'as Foo' instead of '<Foo>'.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
const x = <A>b;
```

### Fix Output

<!-- prettier-ignore -->
```ts
const x = b as A;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <A>b;
    |           ^^^^ Use 'as A' instead of '<A>'.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
const x = <readonly number[]>[1];
```

### Fix Output

<!-- prettier-ignore -->
```ts
const x = [1] as readonly number[];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <readonly number[]>[1];
    |           ^^^^^^^^^^^^^^^^^^^^^^ Use 'as readonly number[]' instead of '<readonly number[]>'.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
const x = <a | b>('string');
```

### Fix Output

<!-- prettier-ignore -->
```ts
const x = ('string') as a | b;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <a | b>('string');
    |           ^^^^^^^^^^^^^^^^^ Use 'as a | b' instead of '<a | b>'.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
const x = <A>!'string';
```

### Fix Output

<!-- prettier-ignore -->
```ts
const x = !'string' as A;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <A>!'string';
    |           ^^^^^^^^^^^^ Use 'as A' instead of '<A>'.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
const x = <A>a + b;
```

### Fix Output

<!-- prettier-ignore -->
```ts
const x = a as A + b;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <A>a + b;
    |           ^^^^ Use 'as A' instead of '<A>'.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
const x = <(A)>a + (b);
```

### Fix Output

<!-- prettier-ignore -->
```ts
const x = a as (A) + (b);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <(A)>a + (b);
    |           ^^^^^^ Use 'as A' instead of '<A>'.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
const x = <Foo>(new Generic<string>());
```

### Fix Output

<!-- prettier-ignore -->
```ts
const x = (new Generic<string>()) as Foo;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <Foo>(new Generic<string>());
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use 'as Foo' instead of '<Foo>'.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
const x = (new (<Foo>Generic<string>)());
```

### Fix Output

<!-- prettier-ignore -->
```ts
const x = (new (Generic<string> as Foo)());
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = (new (<Foo>Generic<string>)());
    |                 ^^^^^^^^^^^^^^^^^^^^ Use 'as Foo' instead of '<Foo>'.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
const x = <const>{ key: 'value' };
```

### Fix Output

<!-- prettier-ignore -->
```ts
const x = { key: 'value' } as const;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <const>{ key: 'value' };
    |           ^^^^^^^^^^^^^^^^^^^^^^^ Use 'as const' instead of '<const>'.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
const x = new Generic<int>() as Foo;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = new Generic<int>() as Foo;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use any type assertions.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
const x = b as A;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = b as A;
    |           ^^^^^^ Do not use any type assertions.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
const x = [1] as readonly number[];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = [1] as readonly number[];
    |           ^^^^^^^^^^^^^^^^^^^^^^^^ Do not use any type assertions.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
const x = ('string') as a | b;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = ('string') as a | b;
    |           ^^^^^^^^^^^^^^^^^^^ Do not use any type assertions.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
const x = !'string' as A;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = !'string' as A;
    |           ^^^^^^^^^^^^^^ Do not use any type assertions.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
const x = a as A + b;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = a as A + b;
    |           ^^^^^^ Do not use any type assertions.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
const x = a as (A) + (b);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = a as (A) + (b);
    |           ^^^^^^^^ Do not use any type assertions.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
const x = (new Generic<string>()) as Foo;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = (new Generic<string>()) as Foo;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use any type assertions.
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
const x = (new (Generic<string> as Foo)());
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = (new (Generic<string> as Foo)());
    |                 ^^^^^^^^^^^^^^^^^^^^^^ Do not use any type assertions.
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
const x = <Foo>new Generic<int>();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <Foo>new Generic<int>();
    |           ^^^^^^^^^^^^^^^^^^^^^^^ Do not use any type assertions.
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
const x = <A>b;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <A>b;
    |           ^^^^ Do not use any type assertions.
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
const x = <readonly number[]>[1];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <readonly number[]>[1];
    |           ^^^^^^^^^^^^^^^^^^^^^^ Do not use any type assertions.
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
const x = <a | b>('string');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <a | b>('string');
    |           ^^^^^^^^^^^^^^^^^ Do not use any type assertions.
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
const x = <A>!'string';
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <A>!'string';
    |           ^^^^^^^^^^^^ Do not use any type assertions.
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts
const x = <A>a + b;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <A>a + b;
    |           ^^^^ Do not use any type assertions.
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts
const x = <(A)>a + (b);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <(A)>a + (b);
    |           ^^^^^^ Do not use any type assertions.
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts
const x = <Foo>(new Generic<string>());
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <Foo>(new Generic<string>());
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Do not use any type assertions.
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts
const x = (new (<Foo>Generic<string>)());
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = (new (<Foo>Generic<string>)());
    |                 ^^^^^^^^^^^^^^^^^^^^ Do not use any type assertions.
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts
const x = {} as Foo<int>;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = {} as Foo<int>;
    |           ^^^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x: Foo<int> = { ... } instead.

<!-- prettier-ignore -->
```ts
const x: Foo<int> = {};
```

##### Use const x = { ... } satisfies Foo<int> instead.

<!-- prettier-ignore -->
```ts
const x = {} satisfies Foo<int>;
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts
const x = ({}) as a | b;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = ({}) as a | b;
    |           ^^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x: a | b = { ... } instead.

<!-- prettier-ignore -->
```ts
const x: a | b = ({});
```

##### Use const x = { ... } satisfies a | b instead.

<!-- prettier-ignore -->
```ts
const x = ({}) satisfies a | b;
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts
const x = {} as A + b;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = {} as A + b;
    |           ^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x = { ... } satisfies A instead.

<!-- prettier-ignore -->
```ts
const x = {} satisfies A + b;
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts
const x = <Foo<int>>{};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <Foo<int>>{};
    |           ^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x: Foo<int> = { ... } instead.

<!-- prettier-ignore -->
```ts
const x: Foo<int> = {};
```

##### Use const x = { ... } satisfies Foo<int> instead.

<!-- prettier-ignore -->
```ts
const x = {} satisfies Foo<int>;
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts
const x = <a | b>({});
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <a | b>({});
    |           ^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x: a | b = { ... } instead.

<!-- prettier-ignore -->
```ts
const x: a | b = ({});
```

##### Use const x = { ... } satisfies a | b instead.

<!-- prettier-ignore -->
```ts
const x = ({}) satisfies a | b;
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts
const x = <A>{} + b;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <A>{} + b;
    |           ^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x = { ... } satisfies A instead.

<!-- prettier-ignore -->
```ts
const x = {} satisfies A + b;
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts
const x = {} as Foo<int>;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = {} as Foo<int>;
    |           ^^^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x: Foo<int> = { ... } instead.

<!-- prettier-ignore -->
```ts
const x: Foo<int> = {};
```

##### Use const x = { ... } satisfies Foo<int> instead.

<!-- prettier-ignore -->
```ts
const x = {} satisfies Foo<int>;
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts
const x = ({}) as a | b;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = ({}) as a | b;
    |           ^^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x: a | b = { ... } instead.

<!-- prettier-ignore -->
```ts
const x: a | b = ({});
```

##### Use const x = { ... } satisfies a | b instead.

<!-- prettier-ignore -->
```ts
const x = ({}) satisfies a | b;
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts
const x = {} as A + b;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = {} as A + b;
    |           ^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x = { ... } satisfies A instead.

<!-- prettier-ignore -->
```ts
const x = {} satisfies A + b;
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts
print({ bar: 5 } as Foo)
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | print({ bar: 5 } as Foo)
    |       ^^^^^^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x = { ... } satisfies Foo instead.

<!-- prettier-ignore -->
```ts
print({ bar: 5 } satisfies Foo)
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts
new print({ bar: 5 } as Foo)
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | new print({ bar: 5 } as Foo)
    |           ^^^^^^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x = { ... } satisfies Foo instead.

<!-- prettier-ignore -->
```ts
new print({ bar: 5 } satisfies Foo)
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts
function foo() { throw { bar: 5 } as Foo }
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo() { throw { bar: 5 } as Foo }
    |                        ^^^^^^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x = { ... } satisfies Foo instead.

<!-- prettier-ignore -->
```ts
function foo() { throw { bar: 5 } satisfies Foo }
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts
function b(x = {} as Foo.Bar) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function b(x = {} as Foo.Bar) {}
    |                ^^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x = { ... } satisfies Foo.Bar instead.

<!-- prettier-ignore -->
```ts
function b(x = {} satisfies Foo.Bar) {}
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts
function c(x = {} as Foo) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function c(x = {} as Foo) {}
    |                ^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x = { ... } satisfies Foo instead.

<!-- prettier-ignore -->
```ts
function c(x = {} satisfies Foo) {}
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts
print?.({ bar: 5 } as Foo)
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | print?.({ bar: 5 } as Foo)
    |         ^^^^^^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x = { ... } satisfies Foo instead.

<!-- prettier-ignore -->
```ts
print?.({ bar: 5 } satisfies Foo)
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts
print?.call({ bar: 5 } as Foo)
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | print?.call({ bar: 5 } as Foo)
    |             ^^^^^^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x = { ... } satisfies Foo instead.

<!-- prettier-ignore -->
```ts
print?.call({ bar: 5 } satisfies Foo)
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts
const x = <Foo<int>>{};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <Foo<int>>{};
    |           ^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x: Foo<int> = { ... } instead.

<!-- prettier-ignore -->
```ts
const x: Foo<int> = {};
```

##### Use const x = { ... } satisfies Foo<int> instead.

<!-- prettier-ignore -->
```ts
const x = {} satisfies Foo<int>;
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts
const x = <a | b>({});
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <a | b>({});
    |           ^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x: a | b = { ... } instead.

<!-- prettier-ignore -->
```ts
const x: a | b = ({});
```

##### Use const x = { ... } satisfies a | b instead.

<!-- prettier-ignore -->
```ts
const x = ({}) satisfies a | b;
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts
const x = <A>{} + b;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = <A>{} + b;
    |           ^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x = { ... } satisfies A instead.

<!-- prettier-ignore -->
```ts
const x = {} satisfies A + b;
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts
print(<Foo>{ bar: 5 })
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | print(<Foo>{ bar: 5 })
    |       ^^^^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x = { ... } satisfies Foo instead.

<!-- prettier-ignore -->
```ts
print({ bar: 5 } satisfies Foo)
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts
new print(<Foo>{ bar: 5 })
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | new print(<Foo>{ bar: 5 })
    |           ^^^^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x = { ... } satisfies Foo instead.

<!-- prettier-ignore -->
```ts
new print({ bar: 5 } satisfies Foo)
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts
function foo() { throw <Foo>{ bar: 5 } }
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo() { throw <Foo>{ bar: 5 } }
    |                        ^^^^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x = { ... } satisfies Foo instead.

<!-- prettier-ignore -->
```ts
function foo() { throw { bar: 5 } satisfies Foo }
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts
print?.(<Foo>{ bar: 5 })
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | print?.(<Foo>{ bar: 5 })
    |         ^^^^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x = { ... } satisfies Foo instead.

<!-- prettier-ignore -->
```ts
print?.({ bar: 5 } satisfies Foo)
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts
print?.call(<Foo>{ bar: 5 })
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | print?.call(<Foo>{ bar: 5 })
    |             ^^^^^^^^^^^^^^^ Always prefer const x: T = { ... }.
```

#### Suggestions

##### Use const x = { ... } satisfies Foo instead.

<!-- prettier-ignore -->
```ts
print?.call({ bar: 5 } satisfies Foo)
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```tsx
const foo = <Foo style={{ bar: 5 } as Bar} />;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | const foo = <Foo style={{ bar: 5 } as Bar} />;
    |                         ^^^^^^^^^^^^^^^^^ Do not use any type assertions.
```
