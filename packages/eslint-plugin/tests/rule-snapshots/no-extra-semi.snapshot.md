# no-extra-semi

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
var x = 5;;
```

### Fix Output

<!-- prettier-ignore -->
```ts
var x = 5;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var x = 5;;
    |           ^ Unnecessary semicolon.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
function foo(){};
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo(){}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(){};
    |                 ^ Unnecessary semicolon.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
for(;;);;
```

### Fix Output

<!-- prettier-ignore -->
```ts
for(;;);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | for(;;);;
    |         ^ Unnecessary semicolon.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
while(0);;
```

### Fix Output

<!-- prettier-ignore -->
```ts
while(0);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | while(0);;
    |          ^ Unnecessary semicolon.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
do;while(0);;
```

### Fix Output

<!-- prettier-ignore -->
```ts
do;while(0);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | do;while(0);;
    |             ^ Unnecessary semicolon.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
for(a in b);;
```

### Fix Output

<!-- prettier-ignore -->
```ts
for(a in b);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | for(a in b);;
    |             ^ Unnecessary semicolon.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
for(a of b);;
```

### Fix Output

<!-- prettier-ignore -->
```ts
for(a of b);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | for(a of b);;
    |             ^ Unnecessary semicolon.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
if(true);;
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(true);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if(true);;
    |          ^ Unnecessary semicolon.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
if(true){} else;;
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(true){} else;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if(true){} else;;
    |                 ^ Unnecessary semicolon.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
if(true){;} else {;}
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(true){} else {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if(true){;} else {;}
    |          ^ Unnecessary semicolon.
```

<!-- prettier-ignore -->
```ts
> 1 | if(true){;} else {;}
    |                   ^ Unnecessary semicolon.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
foo:;;
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo:;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo:;;
    |      ^ Unnecessary semicolon.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
with(foo);;
```

### Fix Output

<!-- prettier-ignore -->
```ts
with(foo);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | with(foo);;
    |           ^ Unnecessary semicolon.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
with(foo){;}
```

### Fix Output

<!-- prettier-ignore -->
```ts
with(foo){}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | with(foo){;}
    |           ^ Unnecessary semicolon.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
class A { ; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
class A {  }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | class A { ; }
    |           ^ Unnecessary semicolon.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
class A { /*a*/; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
class A { /*a*/ }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | class A { /*a*/; }
    |                ^ Unnecessary semicolon.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
class A { ; a() {} }
```

### Fix Output

<!-- prettier-ignore -->
```ts
class A {  a() {} }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | class A { ; a() {} }
    |           ^ Unnecessary semicolon.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
class A { a() {}; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
class A { a() {} }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | class A { a() {}; }
    |                 ^ Unnecessary semicolon.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
class A { a() {}; b() {} }
```

### Fix Output

<!-- prettier-ignore -->
```ts
class A { a() {} b() {} }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | class A { a() {}; b() {} }
    |                 ^ Unnecessary semicolon.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
class A {; a() {}; b() {}; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
class A { a() {} b() {} }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | class A {; a() {}; b() {}; }
    |          ^ Unnecessary semicolon.
```

<!-- prettier-ignore -->
```ts
> 1 | class A {; a() {}; b() {}; }
    |                  ^ Unnecessary semicolon.
```

<!-- prettier-ignore -->
```ts
> 1 | class A {; a() {}; b() {}; }
    |                          ^ Unnecessary semicolon.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
class A { a() {}; get b() {} }
```

### Fix Output

<!-- prettier-ignore -->
```ts
class A { a() {} get b() {} }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | class A { a() {}; get b() {} }
    |                 ^ Unnecessary semicolon.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public foo: number = 0;;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  public foo: number = 0;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   public foo: number = 0;;
    |                          ^ Unnecessary semicolon.
  4 | }
  5 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  public foo: number = 0;; public bar: number = 1;;
  public baz: number = 1;;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  public foo: number = 0; public bar: number = 1;
  public baz: number = 1;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   public foo: number = 0;; public bar: number = 1;;
    |                          ^ Unnecessary semicolon.
  4 |   public baz: number = 1;;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   public foo: number = 0;; public bar: number = 1;;
    |                                                   ^ Unnecessary semicolon.
  4 |   public baz: number = 1;;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   public foo: number = 0;; public bar: number = 1;;
> 4 |   public baz: number = 1;;
    |                          ^ Unnecessary semicolon.
  5 | }
  6 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  abstract foo: number;; abstract bar: number;;
  abstract baz: number;;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  abstract foo: number; abstract bar: number;
  abstract baz: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   abstract foo: number;; abstract bar: number;;
    |                        ^ Unnecessary semicolon.
  4 |   abstract baz: number;;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   abstract foo: number;; abstract bar: number;;
    |                                               ^ Unnecessary semicolon.
  4 |   abstract baz: number;;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   abstract foo: number;; abstract bar: number;;
> 4 |   abstract baz: number;;
    |                        ^ Unnecessary semicolon.
  5 | }
  6 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  abstract foo();; abstract bar();;
  abstract baz();;
  abstract foo(): void;; abstract bar(): void;;
  abstract baz(): void;;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  abstract foo(); abstract bar();
  abstract baz();
  abstract foo(): void; abstract bar(): void;
  abstract baz(): void;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   abstract foo();; abstract bar();;
    |                  ^ Unnecessary semicolon.
  4 |   abstract baz();;
  5 |   abstract foo(): void;; abstract bar(): void;;
  6 |   abstract baz(): void;;
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   abstract foo();; abstract bar();;
    |                                   ^ Unnecessary semicolon.
  4 |   abstract baz();;
  5 |   abstract foo(): void;; abstract bar(): void;;
  6 |   abstract baz(): void;;
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   abstract foo();; abstract bar();;
> 4 |   abstract baz();;
    |                  ^ Unnecessary semicolon.
  5 |   abstract foo(): void;; abstract bar(): void;;
  6 |   abstract baz(): void;;
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   abstract foo();; abstract bar();;
  4 |   abstract baz();;
> 5 |   abstract foo(): void;; abstract bar(): void;;
    |                        ^ Unnecessary semicolon.
  6 |   abstract baz(): void;;
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   abstract foo();; abstract bar();;
  4 |   abstract baz();;
> 5 |   abstract foo(): void;; abstract bar(): void;;
    |                                               ^ Unnecessary semicolon.
  6 |   abstract baz(): void;;
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
  3 |   abstract foo();; abstract bar();;
  4 |   abstract baz();;
  5 |   abstract foo(): void;; abstract bar(): void;;
> 6 |   abstract baz(): void;;
    |                        ^ Unnecessary semicolon.
  7 | }
  8 |       
```
