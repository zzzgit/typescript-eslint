# quotes

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
var foo = 'bar';
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = "bar";
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = 'bar';
    |           ^^^^^ Strings must use doublequote.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
var foo = "bar";
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = 'bar';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = "bar";
    |           ^^^^^ Strings must use singlequote.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
var foo = `bar`;
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = 'bar';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = `bar`;
    |           ^^^^^ Strings must use singlequote.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
var foo = 'don\'t';
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = "don't";
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = 'don\'t';
    |           ^^^^^^^^ Strings must use doublequote.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
var msg = "Plugin '" + name + "' not found"
```

### Fix Output

<!-- prettier-ignore -->
```ts
var msg = 'Plugin \'' + name + '\' not found'
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var msg = "Plugin '" + name + "' not found"
    |           ^^^^^^^^^^ Strings must use singlequote.
```

<!-- prettier-ignore -->
```ts
> 1 | var msg = "Plugin '" + name + "' not found"
    |                               ^^^^^^^^^^^^^ Strings must use singlequote.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
var foo = 'bar';
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = "bar";
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = 'bar';
    |           ^^^^^ Strings must use doublequote.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
var foo = `bar`;
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = "bar";
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = `bar`;
    |           ^^^^^ Strings must use doublequote.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
var foo = "bar";
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = 'bar';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = "bar";
    |           ^^^^^ Strings must use singlequote.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
var foo = 'bar';
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = "bar";
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = 'bar';
    |           ^^^^^ Strings must use doublequote.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
var foo = '\\';
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = "\\";
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = '\\';
    |           ^^^^ Strings must use doublequote.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
var foo = "bar";
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = 'bar';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = "bar";
    |           ^^^^^ Strings must use singlequote.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
var foo = 'bar';
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = "bar";
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = 'bar';
    |           ^^^^^ Strings must use doublequote.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
var foo = 'bar';
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = `bar`;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = 'bar';
    |           ^^^^^ Strings must use backtick.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
var foo = 'b${x}a$r';
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = `b\${x}a$r`;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = 'b${x}a$r';
    |           ^^^^^^^^^^ Strings must use backtick.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
var foo = "bar";
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = `bar`;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = "bar";
    |           ^^^^^ Strings must use backtick.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
var foo = "bar";
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = `bar`;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = "bar";
    |           ^^^^^ Strings must use backtick.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
var foo = 'bar';
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = `bar`;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = 'bar';
    |           ^^^^^ Strings must use backtick.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
var foo = `backtick`; "use strict";
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = `backtick`; `use strict`;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = `backtick`; "use strict";
    |                       ^^^^^^^^^^^^ Strings must use backtick.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
{ "use strict"; var foo = `backtick`; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
{ `use strict`; var foo = `backtick`; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | { "use strict"; var foo = `backtick`; }
    |   ^^^^^^^^^^^^ Strings must use backtick.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
if (1) { "use strict"; var foo = `backtick`; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (1) { `use strict`; var foo = `backtick`; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (1) { "use strict"; var foo = `backtick`; }
    |          ^^^^^^^^^^^^ Strings must use backtick.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
var obj = {["key0"]: 0, ['key1']: 1};
```

### Fix Output

<!-- prettier-ignore -->
```ts
var obj = {[`key0`]: 0, [`key1`]: 1};
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var obj = {["key0"]: 0, ['key1']: 1};
    |             ^^^^^^ Strings must use backtick.
```

<!-- prettier-ignore -->
```ts
> 1 | var obj = {["key0"]: 0, ['key1']: 1};
    |                          ^^^^^^ Strings must use backtick.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
class Foo { ['a'](){} static ['b'](){} }
```

### Fix Output

<!-- prettier-ignore -->
```ts
class Foo { [`a`](){} static [`b`](){} }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | class Foo { ['a'](){} static ['b'](){} }
    |              ^^^ Strings must use backtick.
```

<!-- prettier-ignore -->
```ts
> 1 | class Foo { ['a'](){} static ['b'](){} }
    |                               ^^^ Strings must use backtick.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```tsx
<div blah={"blah"} />
```

### Fix Output

<!-- prettier-ignore -->
```tsx
<div blah={'blah'} />
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | <div blah={"blah"} />
    |            ^^^^^^ Strings must use singlequote.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```tsx
<div blah={'blah'} />
```

### Fix Output

<!-- prettier-ignore -->
```tsx
<div blah={"blah"} />
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | <div blah={'blah'} />
    |            ^^^^^^ Strings must use doublequote.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```tsx
<div blah={'blah'} />
```

### Fix Output

<!-- prettier-ignore -->
```tsx
<div blah={`blah`} />
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | <div blah={'blah'} />
    |            ^^^^^^ Strings must use backtick.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
`use strict`;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | `use strict`;
    | ^^^^^^^^^^^^ Strings must use doublequote.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
function foo() { `use strict`; foo(); }
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo() { `use strict`; foo(); }
    |                  ^^^^^^^^^^^^ Strings must use doublequote.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
foo = function() { `use strict`; foo(); }
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo = function() { `use strict`; foo(); }
    |                    ^^^^^^^^^^^^ Strings must use doublequote.
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
() => { `use strict`; foo(); }
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | () => { `use strict`; foo(); }
    |         ^^^^^^^^^^^^ Strings must use doublequote.
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
() => { foo(); `use strict`; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
() => { foo(); "use strict"; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | () => { foo(); `use strict`; }
    |                ^^^^^^^^^^^^ Strings must use doublequote.
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
foo(); `use strict`;
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo(); "use strict";
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo(); `use strict`;
    |        ^^^^^^^^^^^^ Strings must use doublequote.
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
var foo = `foo\nbar`;
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = "foo\nbar";
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = `foo\nbar`;
    |           ^^^^^^^^^^ Strings must use doublequote.
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
var foo = `foo\
bar`;
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = "foo\
bar";
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = `foo\
    |           ^^^^^
> 2 | bar`;
    | ^^^^^ Strings must use doublequote.
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
var foo = `foo\\\
bar`;
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = "foo\\\
bar";
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = `foo\\\
    |           ^^^^^^^
> 2 | bar`;
    | ^^^^^ Strings must use doublequote.
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts
````

````

### Fix Output

<!-- prettier-ignore -->
```ts
""``
````

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ````
    | ^^ Strings must use doublequote.
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  a: number;
  b: string;
  'a-b': boolean;
  'a-b-c': boolean;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
  a: number;
  b: string;
  "a-b": boolean;
  "a-b-c": boolean;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   a: number;
  4 |   b: string;
> 5 |   'a-b': boolean;
    |   ^^^^^ Strings must use doublequote.
  6 |   'a-b-c': boolean;
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   a: number;
  4 |   b: string;
  5 |   'a-b': boolean;
> 6 |   'a-b-c': boolean;
    |   ^^^^^^^ Strings must use doublequote.
  7 | }
  8 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  a: number;
  b: string;
  "a-b": boolean;
  "a-b-c": boolean;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
  a: number;
  b: string;
  'a-b': boolean;
  'a-b-c': boolean;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   a: number;
  4 |   b: string;
> 5 |   "a-b": boolean;
    |   ^^^^^ Strings must use singlequote.
  6 |   "a-b-c": boolean;
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   a: number;
  4 |   b: string;
  5 |   "a-b": boolean;
> 6 |   "a-b-c": boolean;
    |   ^^^^^^^ Strings must use singlequote.
  7 | }
  8 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

enum Foo {
  A = 1,
  'A-B' = 2
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

enum Foo {
  A = 1,
  "A-B" = 2
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum Foo {
  3 |   A = 1,
> 4 |   'A-B' = 2
    |   ^^^^^ Strings must use doublequote.
  5 | }
  6 |       
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

enum Foo {
  A = 1,
  "A-B" = 2
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

enum Foo {
  A = 1,
  'A-B' = 2
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum Foo {
  3 |   A = 1,
> 4 |   "A-B" = 2
    |   ^^^^^ Strings must use singlequote.
  5 | }
  6 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

enum Foo {
  A = 'A',
  'A-B' = 'A-B'
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

enum Foo {
  A = `A`,
  'A-B' = `A-B`
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum Foo {
> 3 |   A = 'A',
    |       ^^^ Strings must use backtick.
  4 |   'A-B' = 'A-B'
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum Foo {
  3 |   A = 'A',
> 4 |   'A-B' = 'A-B'
    |           ^^^^^ Strings must use backtick.
  5 | }
  6 |       
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  a(): void;
  'a-b'(): void;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
  a(): void;
  "a-b"(): void;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   a(): void;
> 4 |   'a-b'(): void;
    |   ^^^^^ Strings must use doublequote.
  5 | }
  6 |       
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {
  a(): void;
  "a-b"(): void;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
  a(): void;
  'a-b'(): void;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {
  3 |   a(): void;
> 4 |   "a-b"(): void;
    |   ^^^^^ Strings must use singlequote.
  5 | }
  6 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public a = '';
  public 'a-b' = '';
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  public a = "";
  public "a-b" = "";
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   public a = '';
    |              ^^ Strings must use doublequote.
  4 |   public 'a-b' = '';
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   public a = '';
> 4 |   public 'a-b' = '';
    |          ^^^^^ Strings must use doublequote.
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   public a = '';
> 4 |   public 'a-b' = '';
    |                  ^^ Strings must use doublequote.
  5 | }
  6 |       
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public a = "";
  public "a-b" = "";
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  public a = '';
  public 'a-b' = '';
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   public a = "";
    |              ^^ Strings must use singlequote.
  4 |   public "a-b" = "";
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   public a = "";
> 4 |   public "a-b" = "";
    |          ^^^^^ Strings must use singlequote.
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   public a = "";
> 4 |   public "a-b" = "";
    |                  ^^ Strings must use singlequote.
  5 | }
  6 |       
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public a = "";
  public "a-b" = "";
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  public a = ``;
  public "a-b" = ``;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   public a = "";
    |              ^^ Strings must use backtick.
  4 |   public "a-b" = "";
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   public a = "";
> 4 |   public "a-b" = "";
    |                  ^^ Strings must use backtick.
  5 | }
  6 |       
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts

abstract class Foo {
  public abstract a: '';
  public abstract 'a-b': '';
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

abstract class Foo {
  public abstract a: "";
  public abstract "a-b": "";
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class Foo {
> 3 |   public abstract a: '';
    |                      ^^ Strings must use doublequote.
  4 |   public abstract 'a-b': '';
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class Foo {
  3 |   public abstract a: '';
> 4 |   public abstract 'a-b': '';
    |                   ^^^^^ Strings must use doublequote.
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class Foo {
  3 |   public abstract a: '';
> 4 |   public abstract 'a-b': '';
    |                          ^^ Strings must use doublequote.
  5 | }
  6 |       
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts

abstract class Foo {
  public abstract a: "";
  public abstract "a-b": "";
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

abstract class Foo {
  public abstract a: '';
  public abstract 'a-b': '';
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class Foo {
> 3 |   public abstract a: "";
    |                      ^^ Strings must use singlequote.
  4 |   public abstract "a-b": "";
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class Foo {
  3 |   public abstract a: "";
> 4 |   public abstract "a-b": "";
    |                   ^^^^^ Strings must use singlequote.
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class Foo {
  3 |   public abstract a: "";
> 4 |   public abstract "a-b": "";
    |                          ^^ Strings must use singlequote.
  5 | }
  6 |       
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts

abstract class Foo {
  public abstract a(): void;
  public abstract 'a-b'(): void;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

abstract class Foo {
  public abstract a(): void;
  public abstract "a-b"(): void;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class Foo {
  3 |   public abstract a(): void;
> 4 |   public abstract 'a-b'(): void;
    |                   ^^^^^ Strings must use doublequote.
  5 | }
  6 |       
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts

abstract class Foo {
  public abstract a(): void;
  public abstract "a-b"(): void;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

abstract class Foo {
  public abstract a(): void;
  public abstract 'a-b'(): void;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class Foo {
  3 |   public abstract a(): void;
> 4 |   public abstract "a-b"(): void;
    |                   ^^^^^ Strings must use singlequote.
  5 | }
  6 |       
```
