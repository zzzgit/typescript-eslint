# indent

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

// ClassDeclaration
abstract class Foo {
constructor() {}
method() {
console.log('hi');
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// ClassDeclaration
abstract class Foo {
    constructor() {}
    method() {
        console.log('hi');
    }
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // ClassDeclaration
  3 | abstract class Foo {
> 4 | constructor() {}
    | ^ Expected indentation of 4 spaces but found 0.
  5 | method() {
  6 | console.log('hi');
  7 | }
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // ClassDeclaration
  3 | abstract class Foo {
  4 | constructor() {}
> 5 | method() {
    | ^ Expected indentation of 4 spaces but found 0.
  6 | console.log('hi');
  7 | }
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // ClassDeclaration
  3 | abstract class Foo {
  4 | constructor() {}
  5 | method() {
> 6 | console.log('hi');
    | ^ Expected indentation of 8 spaces but found 0.
  7 | }
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // ClassDeclaration
  3 | abstract class Foo {
  4 | constructor() {}
  5 | method() {
  6 | console.log('hi');
> 7 | }
    | ^ Expected indentation of 4 spaces but found 0.
  8 | }
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

// TSAbstractPropertyDefinition
class Foo {
abstract bar : baz;
abstract foo : {
a : number
b : number
};
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSAbstractPropertyDefinition
class Foo {
    abstract bar : baz;
    abstract foo : {
        a : number
        b : number
    };
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSAbstractPropertyDefinition
  3 | class Foo {
> 4 | abstract bar : baz;
    | ^ Expected indentation of 4 spaces but found 0.
  5 | abstract foo : {
  6 | a : number
  7 | b : number
  8 | };
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSAbstractPropertyDefinition
  3 | class Foo {
  4 | abstract bar : baz;
> 5 | abstract foo : {
    | ^ Expected indentation of 4 spaces but found 0.
  6 | a : number
  7 | b : number
  8 | };
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSAbstractPropertyDefinition
  3 | class Foo {
  4 | abstract bar : baz;
  5 | abstract foo : {
> 6 | a : number
    | ^ Expected indentation of 8 spaces but found 0.
  7 | b : number
  8 | };
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSAbstractPropertyDefinition
  3 | class Foo {
  4 | abstract bar : baz;
  5 | abstract foo : {
  6 | a : number
> 7 | b : number
    | ^ Expected indentation of 8 spaces but found 0.
  8 | };
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSAbstractPropertyDefinition
  3 | class Foo {
  4 | abstract bar : baz;
  5 | abstract foo : {
  6 | a : number
  7 | b : number
> 8 | };
    | ^ Expected indentation of 4 spaces but found 0.
  9 | }
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

// TSAbstractMethodDefinition
class Foo {
abstract bar() : baz;
abstract foo() : {
a : number
b : number
};
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSAbstractMethodDefinition
class Foo {
    abstract bar() : baz;
    abstract foo() : {
        a : number
        b : number
    };
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSAbstractMethodDefinition
  3 | class Foo {
> 4 | abstract bar() : baz;
    | ^ Expected indentation of 4 spaces but found 0.
  5 | abstract foo() : {
  6 | a : number
  7 | b : number
  8 | };
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSAbstractMethodDefinition
  3 | class Foo {
  4 | abstract bar() : baz;
> 5 | abstract foo() : {
    | ^ Expected indentation of 4 spaces but found 0.
  6 | a : number
  7 | b : number
  8 | };
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSAbstractMethodDefinition
  3 | class Foo {
  4 | abstract bar() : baz;
  5 | abstract foo() : {
> 6 | a : number
    | ^ Expected indentation of 8 spaces but found 0.
  7 | b : number
  8 | };
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSAbstractMethodDefinition
  3 | class Foo {
  4 | abstract bar() : baz;
  5 | abstract foo() : {
  6 | a : number
> 7 | b : number
    | ^ Expected indentation of 8 spaces but found 0.
  8 | };
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSAbstractMethodDefinition
  3 | class Foo {
  4 | abstract bar() : baz;
  5 | abstract foo() : {
  6 | a : number
  7 | b : number
> 8 | };
    | ^ Expected indentation of 4 spaces but found 0.
  9 | }
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

// TSAsExpression
const foo = {} as {
foo: string,
bar: number,
};
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSAsExpression
const foo = {} as {
    foo: string,
    bar: number,
};
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSAsExpression
  3 | const foo = {} as {
> 4 | foo: string,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | bar: number,
  6 | };
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSAsExpression
  3 | const foo = {} as {
  4 | foo: string,
> 5 | bar: number,
    | ^ Expected indentation of 4 spaces but found 0.
  6 | };
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

// TSAsExpression
// Non-TS Test Case

const foo = {} ===
{
foo: string,
bar: number,
};
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSAsExpression
// Non-TS Test Case

const foo = {} ===
{
    foo: string,
    bar: number,
};
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSAsExpression
  3 | // Non-TS Test Case
  4 |
  5 | const foo = {} ===
  6 | {
> 7 | foo: string,
    | ^ Expected indentation of 4 spaces but found 0.
  8 | bar: number,
  9 | };
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSAsExpression
  3 | // Non-TS Test Case
  4 |
  5 | const foo = {} ===
  6 | {
  7 | foo: string,
> 8 | bar: number,
    | ^ Expected indentation of 4 spaces but found 0.
  9 | };
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

// TSAsExpression
const foo = {} as
{
foo: string,
bar: number,
};
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSAsExpression
const foo = {} as
{
    foo: string,
    bar: number,
};
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSAsExpression
  3 | const foo = {} as
  4 | {
> 5 | foo: string,
    | ^ Expected indentation of 4 spaces but found 0.
  6 | bar: number,
  7 | };
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSAsExpression
  3 | const foo = {} as
  4 | {
  5 | foo: string,
> 6 | bar: number,
    | ^ Expected indentation of 4 spaces but found 0.
  7 | };
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

// TSConditionalType
// Non-TS Test Case

const Foo = T
? {
a: number,
b: boolean
}
: {
c: string
};
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSConditionalType
// Non-TS Test Case

const Foo = T
    ? {
        a: number,
        b: boolean
    }
    : {
        c: string
    };
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSConditionalType
   3 | // Non-TS Test Case
   4 |
   5 | const Foo = T
>  6 | ? {
     | ^ Expected indentation of 4 spaces but found 0.
   7 | a: number,
   8 | b: boolean
   9 | }
  10 | : {
  11 | c: string
  12 | };
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSConditionalType
   3 | // Non-TS Test Case
   4 |
   5 | const Foo = T
   6 | ? {
>  7 | a: number,
     | ^ Expected indentation of 8 spaces but found 0.
   8 | b: boolean
   9 | }
  10 | : {
  11 | c: string
  12 | };
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSConditionalType
   3 | // Non-TS Test Case
   4 |
   5 | const Foo = T
   6 | ? {
   7 | a: number,
>  8 | b: boolean
     | ^ Expected indentation of 8 spaces but found 0.
   9 | }
  10 | : {
  11 | c: string
  12 | };
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSConditionalType
   3 | // Non-TS Test Case
   4 |
   5 | const Foo = T
   6 | ? {
   7 | a: number,
   8 | b: boolean
>  9 | }
     | ^ Expected indentation of 4 spaces but found 0.
  10 | : {
  11 | c: string
  12 | };
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSConditionalType
   3 | // Non-TS Test Case
   4 |
   5 | const Foo = T
   6 | ? {
   7 | a: number,
   8 | b: boolean
   9 | }
> 10 | : {
     | ^ Expected indentation of 4 spaces but found 0.
  11 | c: string
  12 | };
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSConditionalType
   3 | // Non-TS Test Case
   4 |
   5 | const Foo = T
   6 | ? {
   7 | a: number,
   8 | b: boolean
   9 | }
  10 | : {
> 11 | c: string
     | ^ Expected indentation of 8 spaces but found 0.
  12 | };
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSConditionalType
   3 | // Non-TS Test Case
   4 |
   5 | const Foo = T
   6 | ? {
   7 | a: number,
   8 | b: boolean
   9 | }
  10 | : {
  11 | c: string
> 12 | };
     | ^ Expected indentation of 4 spaces but found 0.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

// TSConditionalType
type Foo<T> = T extends string
? {
a: number,
b: boolean
}
: {
c: string
};
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSConditionalType
type Foo<T> = T extends string
    ? {
        a: number,
        b: boolean
    }
    : {
        c: string
    };
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSConditionalType
   3 | type Foo<T> = T extends string
>  4 | ? {
     | ^ Expected indentation of 4 spaces but found 0.
   5 | a: number,
   6 | b: boolean
   7 | }
   8 | : {
   9 | c: string
  10 | };
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSConditionalType
   3 | type Foo<T> = T extends string
   4 | ? {
>  5 | a: number,
     | ^ Expected indentation of 8 spaces but found 0.
   6 | b: boolean
   7 | }
   8 | : {
   9 | c: string
  10 | };
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSConditionalType
   3 | type Foo<T> = T extends string
   4 | ? {
   5 | a: number,
>  6 | b: boolean
     | ^ Expected indentation of 8 spaces but found 0.
   7 | }
   8 | : {
   9 | c: string
  10 | };
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSConditionalType
   3 | type Foo<T> = T extends string
   4 | ? {
   5 | a: number,
   6 | b: boolean
>  7 | }
     | ^ Expected indentation of 4 spaces but found 0.
   8 | : {
   9 | c: string
  10 | };
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSConditionalType
   3 | type Foo<T> = T extends string
   4 | ? {
   5 | a: number,
   6 | b: boolean
   7 | }
>  8 | : {
     | ^ Expected indentation of 4 spaces but found 0.
   9 | c: string
  10 | };
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSConditionalType
   3 | type Foo<T> = T extends string
   4 | ? {
   5 | a: number,
   6 | b: boolean
   7 | }
   8 | : {
>  9 | c: string
     | ^ Expected indentation of 8 spaces but found 0.
  10 | };
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSConditionalType
   3 | type Foo<T> = T extends string
   4 | ? {
   5 | a: number,
   6 | b: boolean
   7 | }
   8 | : {
   9 | c: string
> 10 | };
     | ^ Expected indentation of 4 spaces but found 0.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

// TSConditionalType
// Non-TS Test Case

const Foo = T ? {
a: number,
b: boolean
} : string;
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSConditionalType
// Non-TS Test Case

const Foo = T ? {
    a: number,
    b: boolean
} : string;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSConditionalType
  3 | // Non-TS Test Case
  4 |
  5 | const Foo = T ? {
> 6 | a: number,
    | ^ Expected indentation of 4 spaces but found 0.
  7 | b: boolean
  8 | } : string;
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSConditionalType
  3 | // Non-TS Test Case
  4 |
  5 | const Foo = T ? {
  6 | a: number,
> 7 | b: boolean
    | ^ Expected indentation of 4 spaces but found 0.
  8 | } : string;
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

// TSConditionalType
type Foo<T> = T extends string ? {
a: number,
b: boolean
} : string;
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSConditionalType
type Foo<T> = T extends string ? {
    a: number,
    b: boolean
} : string;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSConditionalType
  3 | type Foo<T> = T extends string ? {
> 4 | a: number,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | b: boolean
  6 | } : string;
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSConditionalType
  3 | type Foo<T> = T extends string ? {
  4 | a: number,
> 5 | b: boolean
    | ^ Expected indentation of 4 spaces but found 0.
  6 | } : string;
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

// TSConstructorType
type Constructor<T> = new (
...args: any[]
) => T;
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSConstructorType
type Constructor<T> = new (
    ...args: any[]
) => T;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSConstructorType
  3 | type Constructor<T> = new (
> 4 | ...args: any[]
    | ^ Expected indentation of 4 spaces but found 0.
  5 | ) => T;
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

// TSConstructSignature
interface Foo {
new () : Foo
new () : {
bar : string
baz : string
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSConstructSignature
interface Foo {
    new () : Foo
    new () : {
        bar : string
        baz : string
    }
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSConstructSignature
  3 | interface Foo {
> 4 | new () : Foo
    | ^ Expected indentation of 4 spaces but found 0.
  5 | new () : {
  6 | bar : string
  7 | baz : string
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSConstructSignature
  3 | interface Foo {
  4 | new () : Foo
> 5 | new () : {
    | ^ Expected indentation of 4 spaces but found 0.
  6 | bar : string
  7 | baz : string
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSConstructSignature
  3 | interface Foo {
  4 | new () : Foo
  5 | new () : {
> 6 | bar : string
    | ^ Expected indentation of 8 spaces but found 0.
  7 | baz : string
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSConstructSignature
  3 | interface Foo {
  4 | new () : Foo
  5 | new () : {
  6 | bar : string
> 7 | baz : string
    | ^ Expected indentation of 8 spaces but found 0.
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSConstructSignature
  3 | interface Foo {
  4 | new () : Foo
  5 | new () : {
  6 | bar : string
  7 | baz : string
> 8 | }
    | ^ Expected indentation of 4 spaces but found 0.
  9 | }
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

// TSDeclareFunction
declare function foo() : {
bar : number,
baz : string,
};
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSDeclareFunction
declare function foo() : {
    bar : number,
    baz : string,
};
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSDeclareFunction
  3 | declare function foo() : {
> 4 | bar : number,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | baz : string,
  6 | };
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSDeclareFunction
  3 | declare function foo() : {
  4 | bar : number,
> 5 | baz : string,
    | ^ Expected indentation of 4 spaces but found 0.
  6 | };
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

// TSEmptyBodyFunctionExpression
class Foo {
constructor(
a : string,
b : {
c : number
}
)
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSEmptyBodyFunctionExpression
class Foo {
    constructor(
        a : string,
        b : {
            c : number
        }
    )
}
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSEmptyBodyFunctionExpression
   3 | class Foo {
>  4 | constructor(
     | ^ Expected indentation of 4 spaces but found 0.
   5 | a : string,
   6 | b : {
   7 | c : number
   8 | }
   9 | )
  10 | }
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSEmptyBodyFunctionExpression
   3 | class Foo {
   4 | constructor(
>  5 | a : string,
     | ^ Expected indentation of 8 spaces but found 0.
   6 | b : {
   7 | c : number
   8 | }
   9 | )
  10 | }
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSEmptyBodyFunctionExpression
   3 | class Foo {
   4 | constructor(
   5 | a : string,
>  6 | b : {
     | ^ Expected indentation of 8 spaces but found 0.
   7 | c : number
   8 | }
   9 | )
  10 | }
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSEmptyBodyFunctionExpression
   3 | class Foo {
   4 | constructor(
   5 | a : string,
   6 | b : {
>  7 | c : number
     | ^ Expected indentation of 12 spaces but found 0.
   8 | }
   9 | )
  10 | }
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSEmptyBodyFunctionExpression
   3 | class Foo {
   4 | constructor(
   5 | a : string,
   6 | b : {
   7 | c : number
>  8 | }
     | ^ Expected indentation of 8 spaces but found 0.
   9 | )
  10 | }
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSEmptyBodyFunctionExpression
   3 | class Foo {
   4 | constructor(
   5 | a : string,
   6 | b : {
   7 | c : number
   8 | }
>  9 | )
     | ^ Expected indentation of 4 spaces but found 0.
  10 | }
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

// TSEnumDeclaration, TSEnumMember
enum Foo {
bar = 1,
baz = 1,
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSEnumDeclaration, TSEnumMember
enum Foo {
    bar = 1,
    baz = 1,
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSEnumDeclaration, TSEnumMember
  3 | enum Foo {
> 4 | bar = 1,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | baz = 1,
  6 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSEnumDeclaration, TSEnumMember
  3 | enum Foo {
  4 | bar = 1,
> 5 | baz = 1,
    | ^ Expected indentation of 4 spaces but found 0.
  6 | }
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

// TSExportAssignment
export = {
a: 1,
b: 2,
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSExportAssignment
export = {
    a: 1,
    b: 2,
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSExportAssignment
  3 | export = {
> 4 | a: 1,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | b: 2,
  6 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSExportAssignment
  3 | export = {
  4 | a: 1,
> 5 | b: 2,
    | ^ Expected indentation of 4 spaces but found 0.
  6 | }
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

// TSFunctionType
const foo: () => void = () => ({
a: 1,
b: 2,
});
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSFunctionType
const foo: () => void = () => ({
    a: 1,
    b: 2,
});
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSFunctionType
  3 | const foo: () => void = () => ({
> 4 | a: 1,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | b: 2,
  6 | });
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSFunctionType
  3 | const foo: () => void = () => ({
  4 | a: 1,
> 5 | b: 2,
    | ^ Expected indentation of 4 spaces but found 0.
  6 | });
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

// TSFunctionType
const foo: () => {
a: number,
b: number,
} = () => ({
a: 1,
b: 2,
});
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSFunctionType
const foo: () => {
    a: number,
    b: number,
} = () => ({
    a: 1,
    b: 2,
});
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSFunctionType
  3 | const foo: () => {
> 4 | a: number,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | b: number,
  6 | } = () => ({
  7 | a: 1,
  8 | b: 2,
  9 | });
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSFunctionType
  3 | const foo: () => {
  4 | a: number,
> 5 | b: number,
    | ^ Expected indentation of 4 spaces but found 0.
  6 | } = () => ({
  7 | a: 1,
  8 | b: 2,
  9 | });
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSFunctionType
  3 | const foo: () => {
  4 | a: number,
  5 | b: number,
  6 | } = () => ({
> 7 | a: 1,
    | ^ Expected indentation of 4 spaces but found 0.
  8 | b: 2,
  9 | });
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSFunctionType
  3 | const foo: () => {
  4 | a: number,
  5 | b: number,
  6 | } = () => ({
  7 | a: 1,
> 8 | b: 2,
    | ^ Expected indentation of 4 spaces but found 0.
  9 | });
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

// TSFunctionType
const foo: ({
a: number,
b: number,
}) => void = (arg) => ({
a: 1,
b: 2,
});
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSFunctionType
const foo: ({
    a: number,
    b: number,
}) => void = (arg) => ({
    a: 1,
    b: 2,
});
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSFunctionType
  3 | const foo: ({
> 4 | a: number,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | b: number,
  6 | }) => void = (arg) => ({
  7 | a: 1,
  8 | b: 2,
  9 | });
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSFunctionType
  3 | const foo: ({
  4 | a: number,
> 5 | b: number,
    | ^ Expected indentation of 4 spaces but found 0.
  6 | }) => void = (arg) => ({
  7 | a: 1,
  8 | b: 2,
  9 | });
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSFunctionType
  3 | const foo: ({
  4 | a: number,
  5 | b: number,
  6 | }) => void = (arg) => ({
> 7 | a: 1,
    | ^ Expected indentation of 4 spaces but found 0.
  8 | b: 2,
  9 | });
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSFunctionType
  3 | const foo: ({
  4 | a: number,
  5 | b: number,
  6 | }) => void = (arg) => ({
  7 | a: 1,
> 8 | b: 2,
    | ^ Expected indentation of 4 spaces but found 0.
  9 | });
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

// TSFunctionType
const foo: ({
a: number,
b: number,
}) => {
a: number,
b: number,
} = (arg) => ({
a: arg.a,
b: arg.b,
});
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSFunctionType
const foo: ({
    a: number,
    b: number,
}) => {
    a: number,
    b: number,
} = (arg) => ({
    a: arg.a,
    b: arg.b,
});
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSFunctionType
   3 | const foo: ({
>  4 | a: number,
     | ^ Expected indentation of 4 spaces but found 0.
   5 | b: number,
   6 | }) => {
   7 | a: number,
   8 | b: number,
   9 | } = (arg) => ({
  10 | a: arg.a,
  11 | b: arg.b,
  12 | });
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSFunctionType
   3 | const foo: ({
   4 | a: number,
>  5 | b: number,
     | ^ Expected indentation of 4 spaces but found 0.
   6 | }) => {
   7 | a: number,
   8 | b: number,
   9 | } = (arg) => ({
  10 | a: arg.a,
  11 | b: arg.b,
  12 | });
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSFunctionType
   3 | const foo: ({
   4 | a: number,
   5 | b: number,
   6 | }) => {
>  7 | a: number,
     | ^ Expected indentation of 4 spaces but found 0.
   8 | b: number,
   9 | } = (arg) => ({
  10 | a: arg.a,
  11 | b: arg.b,
  12 | });
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSFunctionType
   3 | const foo: ({
   4 | a: number,
   5 | b: number,
   6 | }) => {
   7 | a: number,
>  8 | b: number,
     | ^ Expected indentation of 4 spaces but found 0.
   9 | } = (arg) => ({
  10 | a: arg.a,
  11 | b: arg.b,
  12 | });
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSFunctionType
   3 | const foo: ({
   4 | a: number,
   5 | b: number,
   6 | }) => {
   7 | a: number,
   8 | b: number,
   9 | } = (arg) => ({
> 10 | a: arg.a,
     | ^ Expected indentation of 4 spaces but found 0.
  11 | b: arg.b,
  12 | });
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSFunctionType
   3 | const foo: ({
   4 | a: number,
   5 | b: number,
   6 | }) => {
   7 | a: number,
   8 | b: number,
   9 | } = (arg) => ({
  10 | a: arg.a,
> 11 | b: arg.b,
     | ^ Expected indentation of 4 spaces but found 0.
  12 | });
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

// TSImportType
const foo: import("bar") = {
a: 1,
b: 2,
};
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSImportType
const foo: import("bar") = {
    a: 1,
    b: 2,
};
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSImportType
  3 | const foo: import("bar") = {
> 4 | a: 1,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | b: 2,
  6 | };
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSImportType
  3 | const foo: import("bar") = {
  4 | a: 1,
> 5 | b: 2,
    | ^ Expected indentation of 4 spaces but found 0.
  6 | };
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

// TSImportType
const foo: import(
"bar"
) = {
a: 1,
b: 2,
};
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSImportType
const foo: import(
    "bar"
) = {
    a: 1,
    b: 2,
};
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSImportType
  3 | const foo: import(
> 4 | "bar"
    | ^ Expected indentation of 4 spaces but found 0.
  5 | ) = {
  6 | a: 1,
  7 | b: 2,
  8 | };
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSImportType
  3 | const foo: import(
  4 | "bar"
  5 | ) = {
> 6 | a: 1,
    | ^ Expected indentation of 4 spaces but found 0.
  7 | b: 2,
  8 | };
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSImportType
  3 | const foo: import(
  4 | "bar"
  5 | ) = {
  6 | a: 1,
> 7 | b: 2,
    | ^ Expected indentation of 4 spaces but found 0.
  8 | };
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

// TSIndexedAccessType
// Non-TS Test Case

const Foo = Bar[
'asdf'
];
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSIndexedAccessType
// Non-TS Test Case

const Foo = Bar[
    'asdf'
];
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSIndexedAccessType
  3 | // Non-TS Test Case
  4 |
  5 | const Foo = Bar[
> 6 | 'asdf'
    | ^ Expected indentation of 4 spaces but found 0.
  7 | ];
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

// TSIndexedAccessType
type Foo = Bar[
'asdf'
];
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSIndexedAccessType
type Foo = Bar[
    'asdf'
];
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSIndexedAccessType
  3 | type Foo = Bar[
> 4 | 'asdf'
    | ^ Expected indentation of 4 spaces but found 0.
  5 | ];
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

// TSIndexSignature
type Foo = {
[a : string] : {
x : foo
[b : number] : boolean
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSIndexSignature
type Foo = {
    [a : string] : {
        x : foo
        [b : number] : boolean
    }
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSIndexSignature
  3 | type Foo = {
> 4 | [a : string] : {
    | ^ Expected indentation of 4 spaces but found 0.
  5 | x : foo
  6 | [b : number] : boolean
  7 | }
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSIndexSignature
  3 | type Foo = {
  4 | [a : string] : {
> 5 | x : foo
    | ^ Expected indentation of 8 spaces but found 0.
  6 | [b : number] : boolean
  7 | }
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSIndexSignature
  3 | type Foo = {
  4 | [a : string] : {
  5 | x : foo
> 6 | [b : number] : boolean
    | ^ Expected indentation of 8 spaces but found 0.
  7 | }
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSIndexSignature
  3 | type Foo = {
  4 | [a : string] : {
  5 | x : foo
  6 | [b : number] : boolean
> 7 | }
    | ^ Expected indentation of 4 spaces but found 0.
  8 | }
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

// TSInferType
type Foo<T> = T extends string
? infer U
: {
a : string
};
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSInferType
type Foo<T> = T extends string
    ? infer U
    : {
        a : string
    };
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSInferType
  3 | type Foo<T> = T extends string
> 4 | ? infer U
    | ^ Expected indentation of 4 spaces but found 0.
  5 | : {
  6 | a : string
  7 | };
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSInferType
  3 | type Foo<T> = T extends string
  4 | ? infer U
> 5 | : {
    | ^ Expected indentation of 4 spaces but found 0.
  6 | a : string
  7 | };
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSInferType
  3 | type Foo<T> = T extends string
  4 | ? infer U
  5 | : {
> 6 | a : string
    | ^ Expected indentation of 8 spaces but found 0.
  7 | };
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSInferType
  3 | type Foo<T> = T extends string
  4 | ? infer U
  5 | : {
  6 | a : string
> 7 | };
    | ^ Expected indentation of 4 spaces but found 0.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

// TSInterfaceBody, TSInterfaceDeclaration
interface Foo {
a : string
b : {
c : number
d : boolean
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSInterfaceBody, TSInterfaceDeclaration
interface Foo {
    a : string
    b : {
        c : number
        d : boolean
    }
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSInterfaceBody, TSInterfaceDeclaration
  3 | interface Foo {
> 4 | a : string
    | ^ Expected indentation of 4 spaces but found 0.
  5 | b : {
  6 | c : number
  7 | d : boolean
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSInterfaceBody, TSInterfaceDeclaration
  3 | interface Foo {
  4 | a : string
> 5 | b : {
    | ^ Expected indentation of 4 spaces but found 0.
  6 | c : number
  7 | d : boolean
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSInterfaceBody, TSInterfaceDeclaration
  3 | interface Foo {
  4 | a : string
  5 | b : {
> 6 | c : number
    | ^ Expected indentation of 8 spaces but found 0.
  7 | d : boolean
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSInterfaceBody, TSInterfaceDeclaration
  3 | interface Foo {
  4 | a : string
  5 | b : {
  6 | c : number
> 7 | d : boolean
    | ^ Expected indentation of 8 spaces but found 0.
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSInterfaceBody, TSInterfaceDeclaration
  3 | interface Foo {
  4 | a : string
  5 | b : {
  6 | c : number
  7 | d : boolean
> 8 | }
    | ^ Expected indentation of 4 spaces but found 0.
  9 | }
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

// TSInterfaceHeritage
interface Foo extends Bar {
a : string
b : {
c : number
d : boolean
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSInterfaceHeritage
interface Foo extends Bar {
    a : string
    b : {
        c : number
        d : boolean
    }
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSInterfaceHeritage
  3 | interface Foo extends Bar {
> 4 | a : string
    | ^ Expected indentation of 4 spaces but found 0.
  5 | b : {
  6 | c : number
  7 | d : boolean
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSInterfaceHeritage
  3 | interface Foo extends Bar {
  4 | a : string
> 5 | b : {
    | ^ Expected indentation of 4 spaces but found 0.
  6 | c : number
  7 | d : boolean
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSInterfaceHeritage
  3 | interface Foo extends Bar {
  4 | a : string
  5 | b : {
> 6 | c : number
    | ^ Expected indentation of 8 spaces but found 0.
  7 | d : boolean
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSInterfaceHeritage
  3 | interface Foo extends Bar {
  4 | a : string
  5 | b : {
  6 | c : number
> 7 | d : boolean
    | ^ Expected indentation of 8 spaces but found 0.
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSInterfaceHeritage
  3 | interface Foo extends Bar {
  4 | a : string
  5 | b : {
  6 | c : number
  7 | d : boolean
> 8 | }
    | ^ Expected indentation of 4 spaces but found 0.
  9 | }
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

// TSIntersectionType
type Foo = "string" & {
a : number
} & number;
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSIntersectionType
type Foo = "string" & {
    a : number
} & number;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSIntersectionType
  3 | type Foo = "string" & {
> 4 | a : number
    | ^ Expected indentation of 4 spaces but found 0.
  5 | } & number;
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

// TSImportEqualsDeclaration, TSExternalModuleReference
// Non-TS Test Case

const foo = require(
'asdf'
);
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSImportEqualsDeclaration, TSExternalModuleReference
// Non-TS Test Case

const foo = require(
    'asdf'
);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSImportEqualsDeclaration, TSExternalModuleReference
  3 | // Non-TS Test Case
  4 |
  5 | const foo = require(
> 6 | 'asdf'
    | ^ Expected indentation of 4 spaces but found 0.
  7 | );
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

// TSImportEqualsDeclaration, TSExternalModuleReference
import foo = require(
'asdf'
);
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSImportEqualsDeclaration, TSExternalModuleReference
import foo = require(
    'asdf'
);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSImportEqualsDeclaration, TSExternalModuleReference
  3 | import foo = require(
> 4 | 'asdf'
    | ^ Expected indentation of 4 spaces but found 0.
  5 | );
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

// TSMappedType
type Partial<T> = {
[P in keyof T]: T[P];
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSMappedType
type Partial<T> = {
    [P in keyof T]: T[P];
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSMappedType
  3 | type Partial<T> = {
> 4 | [P in keyof T]: T[P];
    | ^ Expected indentation of 4 spaces but found 0.
  5 | }
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

// TSMappedType
// TSQuestionToken
type Partial<T> = {
[P in keyof T]?: T[P];
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSMappedType
// TSQuestionToken
type Partial<T> = {
    [P in keyof T]?: T[P];
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSMappedType
  3 | // TSQuestionToken
  4 | type Partial<T> = {
> 5 | [P in keyof T]?: T[P];
    | ^ Expected indentation of 4 spaces but found 0.
  6 | }
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

// TSMappedType
// TSPlusToken
type Partial<T> = {
[P in keyof T]+?: T[P];
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSMappedType
// TSPlusToken
type Partial<T> = {
    [P in keyof T]+?: T[P];
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSMappedType
  3 | // TSPlusToken
  4 | type Partial<T> = {
> 5 | [P in keyof T]+?: T[P];
    | ^ Expected indentation of 4 spaces but found 0.
  6 | }
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

// TSMappedType
// TSMinusToken
type Partial<T> = {
[P in keyof T]-?: T[P];
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSMappedType
// TSMinusToken
type Partial<T> = {
    [P in keyof T]-?: T[P];
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSMappedType
  3 | // TSMinusToken
  4 | type Partial<T> = {
> 5 | [P in keyof T]-?: T[P];
    | ^ Expected indentation of 4 spaces but found 0.
  6 | }
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

// TSMethodSignature
interface Foo {
method() : string
method2() : {
a : number
b : string
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSMethodSignature
interface Foo {
    method() : string
    method2() : {
        a : number
        b : string
    }
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSMethodSignature
  3 | interface Foo {
> 4 | method() : string
    | ^ Expected indentation of 4 spaces but found 0.
  5 | method2() : {
  6 | a : number
  7 | b : string
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSMethodSignature
  3 | interface Foo {
  4 | method() : string
> 5 | method2() : {
    | ^ Expected indentation of 4 spaces but found 0.
  6 | a : number
  7 | b : string
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSMethodSignature
  3 | interface Foo {
  4 | method() : string
  5 | method2() : {
> 6 | a : number
    | ^ Expected indentation of 8 spaces but found 0.
  7 | b : string
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSMethodSignature
  3 | interface Foo {
  4 | method() : string
  5 | method2() : {
  6 | a : number
> 7 | b : string
    | ^ Expected indentation of 8 spaces but found 0.
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSMethodSignature
  3 | interface Foo {
  4 | method() : string
  5 | method2() : {
  6 | a : number
  7 | b : string
> 8 | }
    | ^ Expected indentation of 4 spaces but found 0.
  9 | }
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

// TSModuleBlock, TSModuleDeclaration
declare module "foo" {
export const bar : {
a : string,
b : number,
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSModuleBlock, TSModuleDeclaration
declare module "foo" {
    export const bar : {
        a : string,
        b : number,
    }
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSModuleBlock, TSModuleDeclaration
  3 | declare module "foo" {
> 4 | export const bar : {
    | ^ Expected indentation of 4 spaces but found 0.
  5 | a : string,
  6 | b : number,
  7 | }
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSModuleBlock, TSModuleDeclaration
  3 | declare module "foo" {
  4 | export const bar : {
> 5 | a : string,
    | ^ Expected indentation of 8 spaces but found 0.
  6 | b : number,
  7 | }
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSModuleBlock, TSModuleDeclaration
  3 | declare module "foo" {
  4 | export const bar : {
  5 | a : string,
> 6 | b : number,
    | ^ Expected indentation of 8 spaces but found 0.
  7 | }
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSModuleBlock, TSModuleDeclaration
  3 | declare module "foo" {
  4 | export const bar : {
  5 | a : string,
  6 | b : number,
> 7 | }
    | ^ Expected indentation of 4 spaces but found 0.
  8 | }
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

// TSNonNullExpression
// Non-TS Test Case

const foo = a
.b.
c;
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSNonNullExpression
// Non-TS Test Case

const foo = a
    .b.
    c;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSNonNullExpression
  3 | // Non-TS Test Case
  4 |
  5 | const foo = a
> 6 | .b.
    | ^ Expected indentation of 4 spaces but found 0.
  7 | c;
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSNonNullExpression
  3 | // Non-TS Test Case
  4 |
  5 | const foo = a
  6 | .b.
> 7 | c;
    | ^ Expected indentation of 4 spaces but found 0.
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

// TSNonNullExpression
const foo = a!
.b!.
c;
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSNonNullExpression
const foo = a!
    .b!.
    c;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSNonNullExpression
  3 | const foo = a!
> 4 | .b!.
    | ^ Expected indentation of 4 spaces but found 0.
  5 | c;
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSNonNullExpression
  3 | const foo = a!
  4 | .b!.
> 5 | c;
    | ^ Expected indentation of 4 spaces but found 0.
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

// TSParameterProperty
class Foo {
constructor(
private foo : string,
public bar : {
a : string,
b : number,
}
) {
console.log('foo')
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSParameterProperty
class Foo {
    constructor(
        private foo : string,
        public bar : {
            a : string,
            b : number,
        }
    ) {
        console.log('foo')
    }
}
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSParameterProperty
   3 | class Foo {
>  4 | constructor(
     | ^ Expected indentation of 4 spaces but found 0.
   5 | private foo : string,
   6 | public bar : {
   7 | a : string,
   8 | b : number,
   9 | }
  10 | ) {
  11 | console.log('foo')
  12 | }
  13 | }
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSParameterProperty
   3 | class Foo {
   4 | constructor(
>  5 | private foo : string,
     | ^ Expected indentation of 8 spaces but found 0.
   6 | public bar : {
   7 | a : string,
   8 | b : number,
   9 | }
  10 | ) {
  11 | console.log('foo')
  12 | }
  13 | }
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSParameterProperty
   3 | class Foo {
   4 | constructor(
   5 | private foo : string,
>  6 | public bar : {
     | ^ Expected indentation of 8 spaces but found 0.
   7 | a : string,
   8 | b : number,
   9 | }
  10 | ) {
  11 | console.log('foo')
  12 | }
  13 | }
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSParameterProperty
   3 | class Foo {
   4 | constructor(
   5 | private foo : string,
   6 | public bar : {
>  7 | a : string,
     | ^ Expected indentation of 12 spaces but found 0.
   8 | b : number,
   9 | }
  10 | ) {
  11 | console.log('foo')
  12 | }
  13 | }
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSParameterProperty
   3 | class Foo {
   4 | constructor(
   5 | private foo : string,
   6 | public bar : {
   7 | a : string,
>  8 | b : number,
     | ^ Expected indentation of 12 spaces but found 0.
   9 | }
  10 | ) {
  11 | console.log('foo')
  12 | }
  13 | }
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSParameterProperty
   3 | class Foo {
   4 | constructor(
   5 | private foo : string,
   6 | public bar : {
   7 | a : string,
   8 | b : number,
>  9 | }
     | ^ Expected indentation of 8 spaces but found 0.
  10 | ) {
  11 | console.log('foo')
  12 | }
  13 | }
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSParameterProperty
   3 | class Foo {
   4 | constructor(
   5 | private foo : string,
   6 | public bar : {
   7 | a : string,
   8 | b : number,
   9 | }
> 10 | ) {
     | ^ Expected indentation of 4 spaces but found 0.
  11 | console.log('foo')
  12 | }
  13 | }
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSParameterProperty
   3 | class Foo {
   4 | constructor(
   5 | private foo : string,
   6 | public bar : {
   7 | a : string,
   8 | b : number,
   9 | }
  10 | ) {
> 11 | console.log('foo')
     | ^ Expected indentation of 8 spaces but found 0.
  12 | }
  13 | }
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSParameterProperty
   3 | class Foo {
   4 | constructor(
   5 | private foo : string,
   6 | public bar : {
   7 | a : string,
   8 | b : number,
   9 | }
  10 | ) {
  11 | console.log('foo')
> 12 | }
     | ^ Expected indentation of 4 spaces but found 0.
  13 | }
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

// TSPropertySignature
interface Foo {
bar : string
baz : {
a : string
b : number
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSPropertySignature
interface Foo {
    bar : string
    baz : {
        a : string
        b : number
    }
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSPropertySignature
  3 | interface Foo {
> 4 | bar : string
    | ^ Expected indentation of 4 spaces but found 0.
  5 | baz : {
  6 | a : string
  7 | b : number
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSPropertySignature
  3 | interface Foo {
  4 | bar : string
> 5 | baz : {
    | ^ Expected indentation of 4 spaces but found 0.
  6 | a : string
  7 | b : number
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSPropertySignature
  3 | interface Foo {
  4 | bar : string
  5 | baz : {
> 6 | a : string
    | ^ Expected indentation of 8 spaces but found 0.
  7 | b : number
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSPropertySignature
  3 | interface Foo {
  4 | bar : string
  5 | baz : {
  6 | a : string
> 7 | b : number
    | ^ Expected indentation of 8 spaces but found 0.
  8 | }
  9 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSPropertySignature
  3 | interface Foo {
  4 | bar : string
  5 | baz : {
  6 | a : string
  7 | b : number
> 8 | }
    | ^ Expected indentation of 4 spaces but found 0.
  9 | }
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

// TSQualifiedName
const a: Foo.bar = {
a: 1,
b: 2,
};
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSQualifiedName
const a: Foo.bar = {
    a: 1,
    b: 2,
};
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSQualifiedName
  3 | const a: Foo.bar = {
> 4 | a: 1,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | b: 2,
  6 | };
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSQualifiedName
  3 | const a: Foo.bar = {
  4 | a: 1,
> 5 | b: 2,
    | ^ Expected indentation of 4 spaces but found 0.
  6 | };
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

// TSQualifiedName
// Non-TS Test Case

const a = Foo.
bar
.baz = {
a: 1,
b: 2,
};
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSQualifiedName
// Non-TS Test Case

const a = Foo.
    bar
    .baz = {
        a: 1,
        b: 2,
    };
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSQualifiedName
   3 | // Non-TS Test Case
   4 |
   5 | const a = Foo.
>  6 | bar
     | ^ Expected indentation of 4 spaces but found 0.
   7 | .baz = {
   8 | a: 1,
   9 | b: 2,
  10 | };
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSQualifiedName
   3 | // Non-TS Test Case
   4 |
   5 | const a = Foo.
   6 | bar
>  7 | .baz = {
     | ^ Expected indentation of 4 spaces but found 0.
   8 | a: 1,
   9 | b: 2,
  10 | };
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSQualifiedName
   3 | // Non-TS Test Case
   4 |
   5 | const a = Foo.
   6 | bar
   7 | .baz = {
>  8 | a: 1,
     | ^ Expected indentation of 8 spaces but found 0.
   9 | b: 2,
  10 | };
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSQualifiedName
   3 | // Non-TS Test Case
   4 |
   5 | const a = Foo.
   6 | bar
   7 | .baz = {
   8 | a: 1,
>  9 | b: 2,
     | ^ Expected indentation of 8 spaces but found 0.
  10 | };
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSQualifiedName
   3 | // Non-TS Test Case
   4 |
   5 | const a = Foo.
   6 | bar
   7 | .baz = {
   8 | a: 1,
   9 | b: 2,
> 10 | };
     | ^ Expected indentation of 4 spaces but found 0.
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts

// TSQualifiedName
const a: Foo.
bar
.baz = {
a: 1,
b: 2,
};
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSQualifiedName
const a: Foo.
    bar
    .baz = {
        a: 1,
        b: 2,
    };
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSQualifiedName
  3 | const a: Foo.
> 4 | bar
    | ^ Expected indentation of 4 spaces but found 0.
  5 | .baz = {
  6 | a: 1,
  7 | b: 2,
  8 | };
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSQualifiedName
  3 | const a: Foo.
  4 | bar
> 5 | .baz = {
    | ^ Expected indentation of 4 spaces but found 0.
  6 | a: 1,
  7 | b: 2,
  8 | };
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSQualifiedName
  3 | const a: Foo.
  4 | bar
  5 | .baz = {
> 6 | a: 1,
    | ^ Expected indentation of 8 spaces but found 0.
  7 | b: 2,
  8 | };
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSQualifiedName
  3 | const a: Foo.
  4 | bar
  5 | .baz = {
  6 | a: 1,
> 7 | b: 2,
    | ^ Expected indentation of 8 spaces but found 0.
  8 | };
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSQualifiedName
  3 | const a: Foo.
  4 | bar
  5 | .baz = {
  6 | a: 1,
  7 | b: 2,
> 8 | };
    | ^ Expected indentation of 4 spaces but found 0.
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts

// TSRestType
type foo = [
string,
...string[],
];
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSRestType
type foo = [
    string,
    ...string[],
];
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSRestType
  3 | type foo = [
> 4 | string,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | ...string[],
  6 | ];
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSRestType
  3 | type foo = [
  4 | string,
> 5 | ...string[],
    | ^ Expected indentation of 4 spaces but found 0.
  6 | ];
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts

// TSThisType
declare class MyArray<T> extends Array<T> {
sort(compareFn?: (a: T, b: T) => number): this;
meth() : {
a: number,
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSThisType
declare class MyArray<T> extends Array<T> {
    sort(compareFn?: (a: T, b: T) => number): this;
    meth() : {
        a: number,
    }
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSThisType
  3 | declare class MyArray<T> extends Array<T> {
> 4 | sort(compareFn?: (a: T, b: T) => number): this;
    | ^ Expected indentation of 4 spaces but found 0.
  5 | meth() : {
  6 | a: number,
  7 | }
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSThisType
  3 | declare class MyArray<T> extends Array<T> {
  4 | sort(compareFn?: (a: T, b: T) => number): this;
> 5 | meth() : {
    | ^ Expected indentation of 4 spaces but found 0.
  6 | a: number,
  7 | }
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSThisType
  3 | declare class MyArray<T> extends Array<T> {
  4 | sort(compareFn?: (a: T, b: T) => number): this;
  5 | meth() : {
> 6 | a: number,
    | ^ Expected indentation of 8 spaces but found 0.
  7 | }
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSThisType
  3 | declare class MyArray<T> extends Array<T> {
  4 | sort(compareFn?: (a: T, b: T) => number): this;
  5 | meth() : {
  6 | a: number,
> 7 | }
    | ^ Expected indentation of 4 spaces but found 0.
  8 | }
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts

// TSTupleType
// Non-TS Test Case

const foo = [
string,
number,
];
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSTupleType
// Non-TS Test Case

const foo = [
    string,
    number,
];
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSTupleType
  3 | // Non-TS Test Case
  4 |
  5 | const foo = [
> 6 | string,
    | ^ Expected indentation of 4 spaces but found 0.
  7 | number,
  8 | ];
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSTupleType
  3 | // Non-TS Test Case
  4 |
  5 | const foo = [
  6 | string,
> 7 | number,
    | ^ Expected indentation of 4 spaces but found 0.
  8 | ];
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts

// TSTupleType
type foo = [
string,
number,
];
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSTupleType
type foo = [
    string,
    number,
];
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSTupleType
  3 | type foo = [
> 4 | string,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | number,
  6 | ];
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSTupleType
  3 | type foo = [
  4 | string,
> 5 | number,
    | ^ Expected indentation of 4 spaces but found 0.
  6 | ];
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts

// TSTupleType
// Non-TS Test Case

const foo = [
[
string,
number,
],
];
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSTupleType
// Non-TS Test Case

const foo = [
    [
        string,
        number,
    ],
];
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSTupleType
   3 | // Non-TS Test Case
   4 |
   5 | const foo = [
>  6 | [
     | ^ Expected indentation of 4 spaces but found 0.
   7 | string,
   8 | number,
   9 | ],
  10 | ];
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSTupleType
   3 | // Non-TS Test Case
   4 |
   5 | const foo = [
   6 | [
>  7 | string,
     | ^ Expected indentation of 8 spaces but found 0.
   8 | number,
   9 | ],
  10 | ];
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSTupleType
   3 | // Non-TS Test Case
   4 |
   5 | const foo = [
   6 | [
   7 | string,
>  8 | number,
     | ^ Expected indentation of 8 spaces but found 0.
   9 | ],
  10 | ];
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | // TSTupleType
   3 | // Non-TS Test Case
   4 |
   5 | const foo = [
   6 | [
   7 | string,
   8 | number,
>  9 | ],
     | ^ Expected indentation of 4 spaces but found 0.
  10 | ];
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts

// TSTupleType
type foo = [
[
string,
number,
],
];
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSTupleType
type foo = [
    [
        string,
        number,
    ],
];
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSTupleType
  3 | type foo = [
> 4 | [
    | ^ Expected indentation of 4 spaces but found 0.
  5 | string,
  6 | number,
  7 | ],
  8 | ];
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSTupleType
  3 | type foo = [
  4 | [
> 5 | string,
    | ^ Expected indentation of 8 spaces but found 0.
  6 | number,
  7 | ],
  8 | ];
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSTupleType
  3 | type foo = [
  4 | [
  5 | string,
> 6 | number,
    | ^ Expected indentation of 8 spaces but found 0.
  7 | ],
  8 | ];
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSTupleType
  3 | type foo = [
  4 | [
  5 | string,
  6 | number,
> 7 | ],
    | ^ Expected indentation of 4 spaces but found 0.
  8 | ];
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts

// TSTypeOperator
type T = keyof {
a: 1,
b: 2,
};
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSTypeOperator
type T = keyof {
    a: 1,
    b: 2,
};
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSTypeOperator
  3 | type T = keyof {
> 4 | a: 1,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | b: 2,
  6 | };
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSTypeOperator
  3 | type T = keyof {
  4 | a: 1,
> 5 | b: 2,
    | ^ Expected indentation of 4 spaces but found 0.
  6 | };
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts

// TSTypeParameter, TSTypeParameterDeclaration
type Foo<T> = {
a : unknown,
b : never,
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSTypeParameter, TSTypeParameterDeclaration
type Foo<T> = {
    a : unknown,
    b : never,
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSTypeParameter, TSTypeParameterDeclaration
  3 | type Foo<T> = {
> 4 | a : unknown,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | b : never,
  6 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSTypeParameter, TSTypeParameterDeclaration
  3 | type Foo<T> = {
  4 | a : unknown,
> 5 | b : never,
    | ^ Expected indentation of 4 spaces but found 0.
  6 | }
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts

// TSTypeParameter, TSTypeParameterDeclaration
function foo<
T,
U
>() {
console.log('');
}
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSTypeParameter, TSTypeParameterDeclaration
function foo<
    T,
    U
>() {
    console.log('');
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSTypeParameter, TSTypeParameterDeclaration
  3 | function foo<
> 4 | T,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | U
  6 | >() {
  7 | console.log('');
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSTypeParameter, TSTypeParameterDeclaration
  3 | function foo<
  4 | T,
> 5 | U
    | ^ Expected indentation of 4 spaces but found 0.
  6 | >() {
  7 | console.log('');
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSTypeParameter, TSTypeParameterDeclaration
  3 | function foo<
  4 | T,
  5 | U
  6 | >() {
> 7 | console.log('');
    | ^ Expected indentation of 4 spaces but found 0.
  8 | }
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts

// TSUnionType
type Foo = string | {
a : number
} | number;
```

### Fix Output

<!-- prettier-ignore -->
```ts

// TSUnionType
type Foo = string | {
    a : number
} | number;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | // TSUnionType
  3 | type Foo = string | {
> 4 | a : number
    | ^ Expected indentation of 4 spaces but found 0.
  5 | } | number;
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts

type Foo = {
bar : string,
age : number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Foo = {
    bar : string,
    age : number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
> 3 | bar : string,
    | ^ Expected indentation of 4 spaces but found 0.
  4 | age : number,
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Foo = {
  3 | bar : string,
> 4 | age : number,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | }
  6 |       
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
bar : string,
age : number,
foo(): boolean,
baz(
asdf: string,
): boolean,
new(): Foo,
new(
asdf: string,
): Foo,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    bar : string,
    age : number,
    foo(): boolean,
    baz(
        asdf: string,
    ): boolean,
    new(): Foo,
    new(
        asdf: string,
    ): Foo,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
>  3 | bar : string,
     | ^ Expected indentation of 4 spaces but found 0.
   4 | age : number,
   5 | foo(): boolean,
   6 | baz(
   7 | asdf: string,
   8 | ): boolean,
   9 | new(): Foo,
  10 | new(
  11 | asdf: string,
  12 | ): Foo,
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 | bar : string,
>  4 | age : number,
     | ^ Expected indentation of 4 spaces but found 0.
   5 | foo(): boolean,
   6 | baz(
   7 | asdf: string,
   8 | ): boolean,
   9 | new(): Foo,
  10 | new(
  11 | asdf: string,
  12 | ): Foo,
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 | bar : string,
   4 | age : number,
>  5 | foo(): boolean,
     | ^ Expected indentation of 4 spaces but found 0.
   6 | baz(
   7 | asdf: string,
   8 | ): boolean,
   9 | new(): Foo,
  10 | new(
  11 | asdf: string,
  12 | ): Foo,
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 | bar : string,
   4 | age : number,
   5 | foo(): boolean,
>  6 | baz(
     | ^ Expected indentation of 4 spaces but found 0.
   7 | asdf: string,
   8 | ): boolean,
   9 | new(): Foo,
  10 | new(
  11 | asdf: string,
  12 | ): Foo,
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 | bar : string,
   4 | age : number,
   5 | foo(): boolean,
   6 | baz(
>  7 | asdf: string,
     | ^ Expected indentation of 8 spaces but found 0.
   8 | ): boolean,
   9 | new(): Foo,
  10 | new(
  11 | asdf: string,
  12 | ): Foo,
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 | bar : string,
   4 | age : number,
   5 | foo(): boolean,
   6 | baz(
   7 | asdf: string,
>  8 | ): boolean,
     | ^ Expected indentation of 4 spaces but found 0.
   9 | new(): Foo,
  10 | new(
  11 | asdf: string,
  12 | ): Foo,
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 | bar : string,
   4 | age : number,
   5 | foo(): boolean,
   6 | baz(
   7 | asdf: string,
   8 | ): boolean,
>  9 | new(): Foo,
     | ^ Expected indentation of 4 spaces but found 0.
  10 | new(
  11 | asdf: string,
  12 | ): Foo,
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 | bar : string,
   4 | age : number,
   5 | foo(): boolean,
   6 | baz(
   7 | asdf: string,
   8 | ): boolean,
   9 | new(): Foo,
> 10 | new(
     | ^ Expected indentation of 4 spaces but found 0.
  11 | asdf: string,
  12 | ): Foo,
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 | bar : string,
   4 | age : number,
   5 | foo(): boolean,
   6 | baz(
   7 | asdf: string,
   8 | ): boolean,
   9 | new(): Foo,
  10 | new(
> 11 | asdf: string,
     | ^ Expected indentation of 8 spaces but found 0.
  12 | ): Foo,
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface Foo {
   3 | bar : string,
   4 | age : number,
   5 | foo(): boolean,
   6 | baz(
   7 | asdf: string,
   8 | ): boolean,
   9 | new(): Foo,
  10 | new(
  11 | asdf: string,
> 12 | ): Foo,
     | ^ Expected indentation of 4 spaces but found 0.
  13 | }
  14 |       
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
bar : {
baz : string,
},
age : number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
    bar : {
        baz : string,
    },
    age : number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
> 3 | bar : {
    | ^ Expected indentation of 4 spaces but found 0.
  4 | baz : string,
  5 | },
  6 | age : number,
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 | bar : {
> 4 | baz : string,
    | ^ Expected indentation of 8 spaces but found 0.
  5 | },
  6 | age : number,
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 | bar : {
  4 | baz : string,
> 5 | },
    | ^ Expected indentation of 4 spaces but found 0.
  6 | age : number,
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 | bar : {
  4 | baz : string,
  5 | },
> 6 | age : number,
    | ^ Expected indentation of 4 spaces but found 0.
  7 | }
  8 |       
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo extends Bar {
bar : string,
age : number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo extends Bar {
    bar : string,
    age : number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo extends Bar {
> 3 | bar : string,
    | ^ Expected indentation of 4 spaces but found 0.
  4 | age : number,
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo extends Bar {
  3 | bar : string,
> 4 | age : number,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | }
  6 |       
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts

class Foo
extends Bar {
bar : string = "asdf";
age : number = 1;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo
    extends Bar {
    bar : string = "asdf";
    age : number = 1;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo
> 3 | extends Bar {
    | ^ Expected indentation of 4 spaces but found 0.
  4 | bar : string = "asdf";
  5 | age : number = 1;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo
  3 | extends Bar {
> 4 | bar : string = "asdf";
    | ^ Expected indentation of 4 spaces but found 0.
  5 | age : number = 1;
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo
  3 | extends Bar {
  4 | bar : string = "asdf";
> 5 | age : number = 1;
    | ^ Expected indentation of 4 spaces but found 0.
  6 | }
  7 |       
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo
extends Bar {
bar : string,
age : number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo
    extends Bar {
    bar : string,
    age : number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo
> 3 | extends Bar {
    | ^ Expected indentation of 4 spaces but found 0.
  4 | bar : string,
  5 | age : number,
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo
  3 | extends Bar {
> 4 | bar : string,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | age : number,
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo
  3 | extends Bar {
  4 | bar : string,
> 5 | age : number,
    | ^ Expected indentation of 4 spaces but found 0.
  6 | }
  7 |       
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts

const foo : Foo<{
bar : string,
age : number,
}>
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const foo : Foo<{
    bar : string,
    age : number,
}>
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo : Foo<{
> 3 | bar : string,
    | ^ Expected indentation of 4 spaces but found 0.
  4 | age : number,
  5 | }>
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo : Foo<{
  3 | bar : string,
> 4 | age : number,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | }>
  6 |       
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts

type T = {
bar : string,
age : number,
} | {
bar : string,
age : number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type T = {
    bar : string,
    age : number,
} | {
    bar : string,
    age : number,
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = {
> 3 | bar : string,
    | ^ Expected indentation of 4 spaces but found 0.
  4 | age : number,
  5 | } | {
  6 | bar : string,
  7 | age : number,
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = {
  3 | bar : string,
> 4 | age : number,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | } | {
  6 | bar : string,
  7 | age : number,
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = {
  3 | bar : string,
  4 | age : number,
  5 | } | {
> 6 | bar : string,
    | ^ Expected indentation of 4 spaces but found 0.
  7 | age : number,
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = {
  3 | bar : string,
  4 | age : number,
  5 | } | {
  6 | bar : string,
> 7 | age : number,
    | ^ Expected indentation of 4 spaces but found 0.
  8 | }
  9 |       
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts

type T =
    | {
bar : string,
age : number,
}
    | {
    bar : string,
    age : number,
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type T =
    | {
        bar : string,
        age : number,
    }
    | {
        bar : string,
        age : number,
    }
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | type T =
   3 |     | {
>  4 | bar : string,
     | ^ Expected indentation of 8 spaces but found 0.
   5 | age : number,
   6 | }
   7 |     | {
   8 |     bar : string,
   9 |     age : number,
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | type T =
   3 |     | {
   4 | bar : string,
>  5 | age : number,
     | ^ Expected indentation of 8 spaces but found 0.
   6 | }
   7 |     | {
   8 |     bar : string,
   9 |     age : number,
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | type T =
   3 |     | {
   4 | bar : string,
   5 | age : number,
>  6 | }
     | ^ Expected indentation of 4 spaces but found 0.
   7 |     | {
   8 |     bar : string,
   9 |     age : number,
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | type T =
   3 |     | {
   4 | bar : string,
   5 | age : number,
   6 | }
   7 |     | {
>  8 |     bar : string,
     | ^^^^ Expected indentation of 8 spaces but found 4.
   9 |     age : number,
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | type T =
   3 |     | {
   4 | bar : string,
   5 | age : number,
   6 | }
   7 |     | {
   8 |     bar : string,
>  9 |     age : number,
     | ^^^^ Expected indentation of 8 spaces but found 4.
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | type T =
   3 |     | {
   4 | bar : string,
   5 | age : number,
   6 | }
   7 |     | {
   8 |     bar : string,
   9 |     age : number,
> 10 | }
     | ^ Expected indentation of 4 spaces but found 0.
  11 |       
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts

    import Dialogs = require("widgets/Dialogs");
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import Dialogs = require("widgets/Dialogs");
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |     import Dialogs = require("widgets/Dialogs");
    | ^^^^ Expected indentation of 0 spaces but found 4.
  3 |       
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
public bar : string;
private bar : string;
protected bar : string;
abstract bar : string;
foo : string;
constructor() {
const foo = "";
}
constructor(
asdf : number,
private test : boolean,
) {}
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
    public bar : string;
    private bar : string;
    protected bar : string;
    abstract bar : string;
    foo : string;
    constructor() {
        const foo = "";
    }
    constructor(
        asdf : number,
        private test : boolean,
    ) {}
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
>  3 | public bar : string;
     | ^ Expected indentation of 4 spaces but found 0.
   4 | private bar : string;
   5 | protected bar : string;
   6 | abstract bar : string;
   7 | foo : string;
   8 | constructor() {
   9 | const foo = "";
  10 | }
  11 | constructor(
  12 | asdf : number,
  13 | private test : boolean,
  14 | ) {}
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 | public bar : string;
>  4 | private bar : string;
     | ^ Expected indentation of 4 spaces but found 0.
   5 | protected bar : string;
   6 | abstract bar : string;
   7 | foo : string;
   8 | constructor() {
   9 | const foo = "";
  10 | }
  11 | constructor(
  12 | asdf : number,
  13 | private test : boolean,
  14 | ) {}
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 | public bar : string;
   4 | private bar : string;
>  5 | protected bar : string;
     | ^ Expected indentation of 4 spaces but found 0.
   6 | abstract bar : string;
   7 | foo : string;
   8 | constructor() {
   9 | const foo = "";
  10 | }
  11 | constructor(
  12 | asdf : number,
  13 | private test : boolean,
  14 | ) {}
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 | public bar : string;
   4 | private bar : string;
   5 | protected bar : string;
>  6 | abstract bar : string;
     | ^ Expected indentation of 4 spaces but found 0.
   7 | foo : string;
   8 | constructor() {
   9 | const foo = "";
  10 | }
  11 | constructor(
  12 | asdf : number,
  13 | private test : boolean,
  14 | ) {}
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 | public bar : string;
   4 | private bar : string;
   5 | protected bar : string;
   6 | abstract bar : string;
>  7 | foo : string;
     | ^ Expected indentation of 4 spaces but found 0.
   8 | constructor() {
   9 | const foo = "";
  10 | }
  11 | constructor(
  12 | asdf : number,
  13 | private test : boolean,
  14 | ) {}
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 | public bar : string;
   4 | private bar : string;
   5 | protected bar : string;
   6 | abstract bar : string;
   7 | foo : string;
>  8 | constructor() {
     | ^ Expected indentation of 4 spaces but found 0.
   9 | const foo = "";
  10 | }
  11 | constructor(
  12 | asdf : number,
  13 | private test : boolean,
  14 | ) {}
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 | public bar : string;
   4 | private bar : string;
   5 | protected bar : string;
   6 | abstract bar : string;
   7 | foo : string;
   8 | constructor() {
>  9 | const foo = "";
     | ^ Expected indentation of 8 spaces but found 0.
  10 | }
  11 | constructor(
  12 | asdf : number,
  13 | private test : boolean,
  14 | ) {}
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 | public bar : string;
   4 | private bar : string;
   5 | protected bar : string;
   6 | abstract bar : string;
   7 | foo : string;
   8 | constructor() {
   9 | const foo = "";
> 10 | }
     | ^ Expected indentation of 4 spaces but found 0.
  11 | constructor(
  12 | asdf : number,
  13 | private test : boolean,
  14 | ) {}
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 | public bar : string;
   4 | private bar : string;
   5 | protected bar : string;
   6 | abstract bar : string;
   7 | foo : string;
   8 | constructor() {
   9 | const foo = "";
  10 | }
> 11 | constructor(
     | ^ Expected indentation of 4 spaces but found 0.
  12 | asdf : number,
  13 | private test : boolean,
  14 | ) {}
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 | public bar : string;
   4 | private bar : string;
   5 | protected bar : string;
   6 | abstract bar : string;
   7 | foo : string;
   8 | constructor() {
   9 | const foo = "";
  10 | }
  11 | constructor(
> 12 | asdf : number,
     | ^ Expected indentation of 8 spaces but found 0.
  13 | private test : boolean,
  14 | ) {}
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 | public bar : string;
   4 | private bar : string;
   5 | protected bar : string;
   6 | abstract bar : string;
   7 | foo : string;
   8 | constructor() {
   9 | const foo = "";
  10 | }
  11 | constructor(
  12 | asdf : number,
> 13 | private test : boolean,
     | ^ Expected indentation of 8 spaces but found 0.
  14 | ) {}
  15 | }
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
   3 | public bar : string;
   4 | private bar : string;
   5 | protected bar : string;
   6 | abstract bar : string;
   7 | foo : string;
   8 | constructor() {
   9 | const foo = "";
  10 | }
  11 | constructor(
  12 | asdf : number,
  13 | private test : boolean,
> 14 | ) {}
     | ^ Expected indentation of 4 spaces but found 0.
  15 | }
  16 |       
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts

    abstract class Foo {}
    class Foo {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

abstract class Foo {}
class Foo {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |     abstract class Foo {}
    | ^^^^ Expected indentation of 0 spaces but found 4.
  3 |     class Foo {}
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |     abstract class Foo {}
> 3 |     class Foo {}
    | ^^^^ Expected indentation of 0 spaces but found 4.
  4 |       
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts

enum Foo {
bar,
baz = 1,
buzz = '',
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

enum Foo {
    bar,
    baz = 1,
    buzz = '',
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum Foo {
> 3 | bar,
    | ^ Expected indentation of 4 spaces but found 0.
  4 | baz = 1,
  5 | buzz = '',
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum Foo {
  3 | bar,
> 4 | baz = 1,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | buzz = '',
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum Foo {
  3 | bar,
  4 | baz = 1,
> 5 | buzz = '',
    | ^ Expected indentation of 4 spaces but found 0.
  6 | }
  7 |       
```

## Test #68

### Test Code

<!-- prettier-ignore -->
```ts

const enum Foo {
bar,
baz = 1,
buzz = '',
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const enum Foo {
    bar,
    baz = 1,
    buzz = '',
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const enum Foo {
> 3 | bar,
    | ^ Expected indentation of 4 spaces but found 0.
  4 | baz = 1,
  5 | buzz = '',
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const enum Foo {
  3 | bar,
> 4 | baz = 1,
    | ^ Expected indentation of 4 spaces but found 0.
  5 | buzz = '',
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const enum Foo {
  3 | bar,
  4 | baz = 1,
> 5 | buzz = '',
    | ^ Expected indentation of 4 spaces but found 0.
  6 | }
  7 |       
```

## Test #69

### Test Code

<!-- prettier-ignore -->
```ts

    export = Foo;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

export = Foo;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |     export = Foo;
    | ^^^^ Expected indentation of 0 spaces but found 4.
  3 |       
```

## Test #70

### Test Code

<!-- prettier-ignore -->
```ts

    declare function h(x: number): number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare function h(x: number): number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |     declare function h(x: number): number;
    | ^^^^ Expected indentation of 0 spaces but found 4.
  3 |       
```

## Test #71

### Test Code

<!-- prettier-ignore -->
```ts

declare function h(
x: number,
): number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare function h(
    x: number,
): number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function h(
> 3 | x: number,
    | ^ Expected indentation of 4 spaces but found 0.
  4 | ): number;
  5 |       
```

## Test #72

### Test Code

<!-- prettier-ignore -->
```ts

namespace Validation {
export interface StringValidator {
isAcceptable(s: string): boolean;
}
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace Validation {
> 3 | export interface StringValidator {
    | ^ Expected indentation of 4 spaces but found 0.
  4 | isAcceptable(s: string): boolean;
  5 | }
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace Validation {
  3 | export interface StringValidator {
> 4 | isAcceptable(s: string): boolean;
    | ^ Expected indentation of 8 spaces but found 0.
  5 | }
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace Validation {
  3 | export interface StringValidator {
  4 | isAcceptable(s: string): boolean;
> 5 | }
    | ^ Expected indentation of 4 spaces but found 0.
  6 | }
  7 |       
```

## Test #73

### Test Code

<!-- prettier-ignore -->
```ts

declare module "Validation" {
export interface StringValidator {
isAcceptable(s: string): boolean;
}
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare module "Validation" {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare module "Validation" {
> 3 | export interface StringValidator {
    | ^ Expected indentation of 4 spaces but found 0.
  4 | isAcceptable(s: string): boolean;
  5 | }
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare module "Validation" {
  3 | export interface StringValidator {
> 4 | isAcceptable(s: string): boolean;
    | ^ Expected indentation of 8 spaces but found 0.
  5 | }
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare module "Validation" {
  3 | export interface StringValidator {
  4 | isAcceptable(s: string): boolean;
> 5 | }
    | ^ Expected indentation of 4 spaces but found 0.
  6 | }
  7 |       
```

## Test #74

### Test Code

<!-- prettier-ignore -->
```ts

    @Decorator()
class Foo {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

@Decorator()
class Foo {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |     @Decorator()
    | ^^^^ Expected indentation of 0 spaces but found 4.
  3 | class Foo {}
  4 |       
```
