# block-spacing

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
interface Foo {bar: true};  /* always */
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface Foo { bar: true };  /* always */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Foo {bar: true};  /* always */
    |               ^ Requires a space after '{'.
```

<!-- prettier-ignore -->
```ts
> 1 | interface Foo {bar: true};  /* always */
    |                         ^ Requires a space before '}'.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {bar: true};  /* always */
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = { bar: true };  /* always */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {bar: true};  /* always */
    |            ^ Requires a space after '{'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {bar: true};  /* always */
    |                      ^ Requires a space before '}'.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
enum Foo {bar= true};  /* always */
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum Foo { bar= true };  /* always */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | enum Foo {bar= true};  /* always */
    |          ^ Requires a space after '{'.
```

<!-- prettier-ignore -->
```ts
> 1 | enum Foo {bar= true};  /* always */
    |                    ^ Requires a space before '}'.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
const enum Foo {bar= true};  /* always */
```

### Fix Output

<!-- prettier-ignore -->
```ts
const enum Foo { bar= true };  /* always */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const enum Foo {bar= true};  /* always */
    |                ^ Requires a space after '{'.
```

<!-- prettier-ignore -->
```ts
> 1 | const enum Foo {bar= true};  /* always */
    |                          ^ Requires a space before '}'.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
interface Foo { bar: true };  /* never */
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface Foo {bar: true};  /* never */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Foo { bar: true };  /* never */
    |                ^ Unexpected space(s) after '{'.
```

<!-- prettier-ignore -->
```ts
> 1 | interface Foo { bar: true };  /* never */
    |                          ^ Unexpected space(s) before '}'.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = { bar: true };  /* never */
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = {bar: true};  /* never */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = { bar: true };  /* never */
    |             ^ Unexpected space(s) after '{'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = { bar: true };  /* never */
    |                       ^ Unexpected space(s) before '}'.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
enum Foo { bar= true };  /* never */
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum Foo {bar= true};  /* never */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | enum Foo { bar= true };  /* never */
    |           ^ Unexpected space(s) after '{'.
```

<!-- prettier-ignore -->
```ts
> 1 | enum Foo { bar= true };  /* never */
    |                     ^ Unexpected space(s) before '}'.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
const enum Foo { bar= true };  /* never */
```

### Fix Output

<!-- prettier-ignore -->
```ts
const enum Foo {bar= true};  /* never */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const enum Foo { bar= true };  /* never */
    |                 ^ Unexpected space(s) after '{'.
```

<!-- prettier-ignore -->
```ts
> 1 | const enum Foo { bar= true };  /* never */
    |                           ^ Unexpected space(s) before '}'.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
interface Foo {/* comment */bar: true;/* comment */}  /* always */
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface Foo { /* comment */bar: true;/* comment */ }  /* always */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Foo {/* comment */bar: true;/* comment */}  /* always */
    |               ^ Requires a space after '{'.
```

<!-- prettier-ignore -->
```ts
> 1 | interface Foo {/* comment */bar: true;/* comment */}  /* always */
    |                                                    ^ Requires a space before '}'.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {/* comment */bar: true;/* comment */}  /* always */
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = { /* comment */bar: true;/* comment */ }  /* always */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {/* comment */bar: true;/* comment */}  /* always */
    |            ^ Requires a space after '{'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {/* comment */bar: true;/* comment */}  /* always */
    |                                                 ^ Requires a space before '}'.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
enum Foo {/* comment */bar = 1/* comment */}  /* always */
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum Foo { /* comment */bar = 1/* comment */ }  /* always */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | enum Foo {/* comment */bar = 1/* comment */}  /* always */
    |          ^ Requires a space after '{'.
```

<!-- prettier-ignore -->
```ts
> 1 | enum Foo {/* comment */bar = 1/* comment */}  /* always */
    |                                            ^ Requires a space before '}'.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
const enum Foo {/* comment */bar = 1/* comment */}  /* always */
```

### Fix Output

<!-- prettier-ignore -->
```ts
const enum Foo { /* comment */bar = 1/* comment */ }  /* always */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const enum Foo {/* comment */bar = 1/* comment */}  /* always */
    |                ^ Requires a space after '{'.
```

<!-- prettier-ignore -->
```ts
> 1 | const enum Foo {/* comment */bar = 1/* comment */}  /* always */
    |                                                  ^ Requires a space before '}'.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
interface Foo { /* comment */bar: true;/* comment */ }  /* never */
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface Foo {/* comment */bar: true;/* comment */}  /* never */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Foo { /* comment */bar: true;/* comment */ }  /* never */
    |                ^ Unexpected space(s) after '{'.
```

<!-- prettier-ignore -->
```ts
> 1 | interface Foo { /* comment */bar: true;/* comment */ }  /* never */
    |                                                     ^ Unexpected space(s) before '}'.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = { /* comment */bar: true;/* comment */ }  /* never */
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = {/* comment */bar: true;/* comment */}  /* never */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = { /* comment */bar: true;/* comment */ }  /* never */
    |             ^ Unexpected space(s) after '{'.
```

<!-- prettier-ignore -->
```ts
> 1 | type Foo = { /* comment */bar: true;/* comment */ }  /* never */
    |                                                  ^ Unexpected space(s) before '}'.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
enum Foo { /* comment */bar = 1/* comment */ }  /* never */
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum Foo {/* comment */bar = 1/* comment */}  /* never */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | enum Foo { /* comment */bar = 1/* comment */ }  /* never */
    |           ^ Unexpected space(s) after '{'.
```

<!-- prettier-ignore -->
```ts
> 1 | enum Foo { /* comment */bar = 1/* comment */ }  /* never */
    |                                             ^ Unexpected space(s) before '}'.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
const enum Foo { /* comment */bar = 1/* comment */ }  /* never */
```

### Fix Output

<!-- prettier-ignore -->
```ts
const enum Foo {/* comment */bar = 1/* comment */}  /* never */
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const enum Foo { /* comment */bar = 1/* comment */ }  /* never */
    |                 ^ Unexpected space(s) after '{'.
```

<!-- prettier-ignore -->
```ts
> 1 | const enum Foo { /* comment */bar = 1/* comment */ }  /* never */
    |                                                   ^ Unexpected space(s) before '}'.
```
