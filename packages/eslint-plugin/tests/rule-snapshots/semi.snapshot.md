# semi

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) { bar() }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo) { bar(); }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (foo) { bar() }
    |                 ^ Missing semicolon.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) { bar(); baz() }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo) { bar(); baz(); }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (foo) { bar(); baz() }
    |                        ^ Missing semicolon.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) { bar(); }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo) { bar() }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (foo) { bar(); }
    |                 ^ Extra semicolon.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) { bar(); baz(); }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo) { bar(); baz() }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (foo) { bar(); baz(); }
    |                        ^ Extra semicolon.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        class A {
          method(): void
          method(arg?: any): void {

          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class A {
          method(): void;
          method(arg?: any): void {

          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class A {
> 3 |           method(): void
    |                         ^
> 4 |           method(arg?: any): void {
    | ^ Missing semicolon.
  5 |
  6 |           }
  7 |         }
  8 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        class A {
          method(): void;
          method(arg?: any): void {

          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class A {
          method(): void
          method(arg?: any): void {

          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class A {
> 3 |           method(): void;
    |                         ^ Extra semicolon.
  4 |           method(arg?: any): void {
  5 |
  6 |           }
  7 |         }
  8 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        import a from "a"
        (function() {
            // ...
        })()
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import a from "a";
        (function() {
            // ...
        })()
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import a from "a"
    |                          ^
> 3 |         (function() {
    | ^ Missing semicolon.
  4 |             // ...
  5 |         })()
  6 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        import a from "a"
        ;(function() {
            // ...
        })()
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import a from "a"
        (function() {
            // ...
        })()
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         import a from "a"
> 3 |         ;(function() {
    |         ^ Extra semicolon.
  4 |             // ...
  5 |         })()
  6 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
for (;;){var i;}
```

### Fix Output

<!-- prettier-ignore -->
```ts
for (;;){var i}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | for (;;){var i;}
    |               ^ Extra semicolon.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
for (;;) var i; 
```

### Fix Output

<!-- prettier-ignore -->
```ts
for (;;) var i 
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | for (;;) var i; 
    |               ^ Extra semicolon.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
for (var j;;) {var i;}
```

### Fix Output

<!-- prettier-ignore -->
```ts
for (var j;;) {var i}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | for (var j;;) {var i;}
    |                     ^ Extra semicolon.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
for (;;){var i}
```

### Fix Output

<!-- prettier-ignore -->
```ts
for (;;){var i;}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | for (;;){var i}
    |               ^ Missing semicolon.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
for (;;) var i 
```

### Fix Output

<!-- prettier-ignore -->
```ts
for (;;) var i; 
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | for (;;) var i 
    |               ^ Missing semicolon.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
for (var j;;) {var i}
```

### Fix Output

<!-- prettier-ignore -->
```ts
for (var j;;) {var i;}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | for (var j;;) {var i}
    |                     ^ Missing semicolon.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
var foo = {
 bar: baz
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = {
 bar: baz
};
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var foo = {
  2 |  bar: baz
> 3 | }
    |  ^ Missing semicolon.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) { bar()
 }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo) { bar();
 }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (foo) { bar()
    |                 ^
> 2 |  }
    | ^ Missing semicolon.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) {
 bar() }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo) {
 bar(); }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if (foo) {
> 2 |  bar() }
    |       ^ Missing semicolon.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) {
 bar(); baz() }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo) {
 bar(); baz(); }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if (foo) {
> 2 |  bar(); baz() }
    |              ^ Missing semicolon.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

        import a from "a"
        [1,2,3].forEach(doSomething)
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import a from "a";
        [1,2,3].forEach(doSomething)
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import a from "a"
    |                          ^
> 3 |         [1,2,3].forEach(doSomething)
    | ^ Missing semicolon.
  4 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

        var a = 0; export {a}
        [a] = b
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        var a = 0; export {a};
        [a] = b
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         var a = 0; export {a}
    |                              ^
> 3 |         [a] = b
    | ^ Missing semicolon.
  4 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

        function wrap() {
          return
          ({a} = b)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function wrap() {
          return;
          ({a} = b)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function wrap() {
> 3 |           return
    |                 ^
> 4 |           ({a} = b)
    | ^ Missing semicolon.
  5 |         }
  6 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

        while (true) {
          break
          +i
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        while (true) {
          break;
          +i
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         while (true) {
> 3 |           break
    |                ^
> 4 |           +i
    | ^ Missing semicolon.
  5 |         }
  6 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

        while (true) {
          continue
          [1,2,3].forEach(doSomething)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        while (true) {
          continue;
          [1,2,3].forEach(doSomething)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         while (true) {
> 3 |           continue
    |                   ^
> 4 |           [1,2,3].forEach(doSomething)
    | ^ Missing semicolon.
  5 |         }
  6 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

        do; while(a)
        [1,2,3].forEach(doSomething)
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        do; while(a);
        [1,2,3].forEach(doSomething)
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         do; while(a)
    |                     ^
> 3 |         [1,2,3].forEach(doSomething)
    | ^ Missing semicolon.
  4 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

        const f = () => {}
        [1,2,3].forEach(doSomething)
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const f = () => {};
        [1,2,3].forEach(doSomething)
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const f = () => {}
    |                           ^
> 3 |         [1,2,3].forEach(doSomething)
    | ^ Missing semicolon.
  4 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

        import a from "a";
        [1,2,3].forEach(doSomething)
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import a from "a"
        [1,2,3].forEach(doSomething)
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         import a from "a";
    |                          ^ Extra semicolon.
  3 |         [1,2,3].forEach(doSomething)
  4 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

        var a = 0; export {a};
        [a] = b
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        var a = 0; export {a}
        [a] = b
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         var a = 0; export {a};
    |                              ^ Extra semicolon.
  3 |         [a] = b
  4 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

        function wrap() {
          return;
          ({a} = b)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function wrap() {
          return
          ({a} = b)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function wrap() {
> 3 |           return;
    |                 ^ Extra semicolon.
  4 |           ({a} = b)
  5 |         }
  6 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

        while (true) {
          break;
          +i
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        while (true) {
          break
          +i
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         while (true) {
> 3 |           break;
    |                ^ Extra semicolon.
  4 |           +i
  5 |         }
  6 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

        while (true) {
          continue;
          [1,2,3].forEach(doSomething)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        while (true) {
          continue
          [1,2,3].forEach(doSomething)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         while (true) {
> 3 |           continue;
    |                   ^ Extra semicolon.
  4 |           [1,2,3].forEach(doSomething)
  5 |         }
  6 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

        do; while(a);
        [1,2,3].forEach(doSomething)
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        do; while(a)
        [1,2,3].forEach(doSomething)
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         do; while(a);
    |                     ^ Extra semicolon.
  3 |         [1,2,3].forEach(doSomething)
  4 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

        const f = () => {};
        [1,2,3].forEach(doSomething)
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const f = () => {}
        [1,2,3].forEach(doSomething)
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const f = () => {};
    |                           ^ Extra semicolon.
  3 |         [1,2,3].forEach(doSomething)
  4 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

        import a from "a"
        ;[1,2,3].forEach(doSomething)
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        import a from "a"
        [1,2,3].forEach(doSomething)
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         import a from "a"
> 3 |         ;[1,2,3].forEach(doSomething)
    |         ^ Extra semicolon.
  4 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

        var a = 0; export {a}
        ;[1,2,3].forEach(doSomething)
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        var a = 0; export {a}
        [1,2,3].forEach(doSomething)
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         var a = 0; export {a}
> 3 |         ;[1,2,3].forEach(doSomething)
    |         ^ Extra semicolon.
  4 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

        function wrap() {
          return
          ;[1,2,3].forEach(doSomething)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function wrap() {
          return
          [1,2,3].forEach(doSomething)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function wrap() {
  3 |           return
> 4 |           ;[1,2,3].forEach(doSomething)
    |           ^ Extra semicolon.
  5 |         }
  6 |       
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

        while (true) {
          break
          ;[1,2,3].forEach(doSomething)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        while (true) {
          break
          [1,2,3].forEach(doSomething)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         while (true) {
  3 |           break
> 4 |           ;[1,2,3].forEach(doSomething)
    |           ^ Extra semicolon.
  5 |         }
  6 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

        while (true) {
          continue
          ;[1,2,3].forEach(doSomething)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        while (true) {
          continue
          [1,2,3].forEach(doSomething)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         while (true) {
  3 |           continue
> 4 |           ;[1,2,3].forEach(doSomething)
    |           ^ Extra semicolon.
  5 |         }
  6 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

        do; while(a)
        ;[1,2,3].forEach(doSomething)
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        do; while(a)
        [1,2,3].forEach(doSomething)
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         do; while(a)
> 3 |         ;[1,2,3].forEach(doSomething)
    |         ^ Extra semicolon.
  4 |       
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

        const f = () => {}
        ;[1,2,3].forEach(doSomething)
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const f = () => {}
        [1,2,3].forEach(doSomething)
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const f = () => {}
> 3 |         ;[1,2,3].forEach(doSomething)
    |         ^ Extra semicolon.
  4 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts
declare function declareFn(): string
```

### Fix Output

<!-- prettier-ignore -->
```ts
declare function declareFn(): string;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare function declareFn(): string
    |                                     ^ Missing semicolon.
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts
declare function declareFn(): string;
```

### Fix Output

<!-- prettier-ignore -->
```ts
declare function declareFn(): string
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare function declareFn(): string;
    |                                     ^ Extra semicolon.
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts
export = Foo
```

### Fix Output

<!-- prettier-ignore -->
```ts
export = Foo;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export = Foo
    |             ^ Missing semicolon.
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts
export = Foo;
```

### Fix Output

<!-- prettier-ignore -->
```ts
export = Foo
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export = Foo;
    |             ^ Extra semicolon.
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts
import f = require("f")
```

### Fix Output

<!-- prettier-ignore -->
```ts
import f = require("f");
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import f = require("f")
    |                        ^ Missing semicolon.
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts
import f = require("f");
```

### Fix Output

<!-- prettier-ignore -->
```ts
import f = require("f")
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import f = require("f");
    |                        ^ Extra semicolon.
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = {};
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {}
    |              ^ Missing semicolon.
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts
type Foo = {};
```

### Fix Output

<!-- prettier-ignore -->
```ts
type Foo = {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Foo = {};
    |              ^ Extra semicolon.
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts

class Class {
    prop: string
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Class {
    prop: string;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Class {
> 3 |     prop: string
    |                 ^
> 4 | }
    | ^ Missing semicolon.
  5 |       
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts

class Class {
    prop: string;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Class {
    prop: string
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Class {
> 3 |     prop: string;
    |                 ^ Extra semicolon.
  4 | }
  5 |       
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts

abstract class AbsClass {
    abstract prop: string
    abstract meth(): string
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

abstract class AbsClass {
    abstract prop: string;
    abstract meth(): string;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class AbsClass {
> 3 |     abstract prop: string
    |                          ^
> 4 |     abstract meth(): string
    | ^ Missing semicolon.
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class AbsClass {
  3 |     abstract prop: string
> 4 |     abstract meth(): string
    |                            ^
> 5 | }
    | ^ Missing semicolon.
  6 |       
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts

abstract class AbsClass {
    abstract prop: string;
    abstract meth(): string;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

abstract class AbsClass {
    abstract prop: string
    abstract meth(): string
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class AbsClass {
> 3 |     abstract prop: string;
    |                          ^ Extra semicolon.
  4 |     abstract meth(): string;
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | abstract class AbsClass {
  3 |     abstract prop: string;
> 4 |     abstract meth(): string;
    |                            ^ Extra semicolon.
  5 | }
  6 |       
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts

class PanCamera extends FreeCamera {
  public invertY: boolean = false
}
    
```

### Fix Output

<!-- prettier-ignore -->
```ts

class PanCamera extends FreeCamera {
  public invertY: boolean = false;
}
    
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class PanCamera extends FreeCamera {
> 3 |   public invertY: boolean = false
    |                                  ^
> 4 | }
    | ^ Missing semicolon.
  5 |     
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts

class PanCamera extends FreeCamera {
  public invertY: boolean = false;
}
    
```

### Fix Output

<!-- prettier-ignore -->
```ts

class PanCamera extends FreeCamera {
  public invertY: boolean = false
}
    
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class PanCamera extends FreeCamera {
> 3 |   public invertY: boolean = false;
    |                                  ^ Extra semicolon.
  4 | }
  5 |     
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts
throw new Error('foo')
```

### Fix Output

<!-- prettier-ignore -->
```ts
throw new Error('foo');
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw new Error('foo')
    |                       ^ Missing semicolon.
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts
throw new Error('foo');
```

### Fix Output

<!-- prettier-ignore -->
```ts
throw new Error('foo')
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | throw new Error('foo');
    |                       ^ Extra semicolon.
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts
function foo() { return [] }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo() { return []; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo() { return [] }
    |                           ^ Missing semicolon.
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts
function foo() { return []; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo() { return [] }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo() { return []; }
    |                           ^ Extra semicolon.
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts
while(true) { break }
```

### Fix Output

<!-- prettier-ignore -->
```ts
while(true) { break; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | while(true) { break }
    |                    ^ Missing semicolon.
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts
while(true) { break; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
while(true) { break }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | while(true) { break; }
    |                    ^ Extra semicolon.
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts
while(true) { continue }
```

### Fix Output

<!-- prettier-ignore -->
```ts
while(true) { continue; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | while(true) { continue }
    |                       ^ Missing semicolon.
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts
while(true) { continue; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
while(true) { continue }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | while(true) { continue; }
    |                       ^ Extra semicolon.
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts
let x = 5
```

### Fix Output

<!-- prettier-ignore -->
```ts
let x = 5;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let x = 5
    |          ^ Missing semicolon.
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts
let x = 5;
```

### Fix Output

<!-- prettier-ignore -->
```ts
let x = 5
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let x = 5;
    |          ^ Extra semicolon.
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts
var x = 5
```

### Fix Output

<!-- prettier-ignore -->
```ts
var x = 5;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var x = 5
    |          ^ Missing semicolon.
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts
var x = 5;
```

### Fix Output

<!-- prettier-ignore -->
```ts
var x = 5
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var x = 5;
    |          ^ Extra semicolon.
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts
var x = 5, y
```

### Fix Output

<!-- prettier-ignore -->
```ts
var x = 5, y;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var x = 5, y
    |             ^ Missing semicolon.
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts
var x = 5, y;
```

### Fix Output

<!-- prettier-ignore -->
```ts
var x = 5, y
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var x = 5, y;
    |             ^ Extra semicolon.
```

## Test #68

### Test Code

<!-- prettier-ignore -->
```ts
debugger
```

### Fix Output

<!-- prettier-ignore -->
```ts
debugger;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | debugger
    |         ^ Missing semicolon.
```

## Test #69

### Test Code

<!-- prettier-ignore -->
```ts
debugger;
```

### Fix Output

<!-- prettier-ignore -->
```ts
debugger
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | debugger;
    |         ^ Extra semicolon.
```

## Test #70

### Test Code

<!-- prettier-ignore -->
```ts
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo()
    |      ^ Missing semicolon.
```

## Test #71

### Test Code

<!-- prettier-ignore -->
```ts
foo();
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo();
    |      ^ Extra semicolon.
```

## Test #72

### Test Code

<!-- prettier-ignore -->
```ts
for (var a in b) var i 
```

### Fix Output

<!-- prettier-ignore -->
```ts
for (var a in b) var i; 
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | for (var a in b) var i 
    |                       ^ Missing semicolon.
```

## Test #73

### Test Code

<!-- prettier-ignore -->
```ts
for (var a in b) var i; 
```

### Fix Output

<!-- prettier-ignore -->
```ts
for (var a in b) var i 
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | for (var a in b) var i; 
    |                       ^ Extra semicolon.
```

## Test #74

### Test Code

<!-- prettier-ignore -->
```ts
var foo = {
 bar: baz
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = {
 bar: baz
};
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var foo = {
  2 |  bar: baz
> 3 | }
    |  ^ Missing semicolon.
```

## Test #75

### Test Code

<!-- prettier-ignore -->
```ts
var foo = {
 bar: baz
};
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = {
 bar: baz
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var foo = {
  2 |  bar: baz
> 3 | };
    |  ^ Extra semicolon.
```

## Test #76

### Test Code

<!-- prettier-ignore -->
```ts
import theDefault, { named1, named2 } from 'src/mylib'
```

### Fix Output

<!-- prettier-ignore -->
```ts
import theDefault, { named1, named2 } from 'src/mylib';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import theDefault, { named1, named2 } from 'src/mylib'
    |                                                       ^ Missing semicolon.
```

## Test #77

### Test Code

<!-- prettier-ignore -->
```ts
import theDefault, { named1, named2 } from 'src/mylib';
```

### Fix Output

<!-- prettier-ignore -->
```ts
import theDefault, { named1, named2 } from 'src/mylib'
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import theDefault, { named1, named2 } from 'src/mylib';
    |                                                       ^ Extra semicolon.
```

## Test #78

### Test Code

<!-- prettier-ignore -->
```ts
do{}while(true)
```

### Fix Output

<!-- prettier-ignore -->
```ts
do{}while(true);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | do{}while(true)
    |                ^ Missing semicolon.
```

## Test #79

### Test Code

<!-- prettier-ignore -->
```ts
do{}while(true);
```

### Fix Output

<!-- prettier-ignore -->
```ts
do{}while(true)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | do{}while(true);
    |                ^ Extra semicolon.
```

## Test #80

### Test Code

<!-- prettier-ignore -->
```ts
import * as utils from './utils'
```

### Fix Output

<!-- prettier-ignore -->
```ts
import * as utils from './utils';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import * as utils from './utils'
    |                                 ^ Missing semicolon.
```

## Test #81

### Test Code

<!-- prettier-ignore -->
```ts
import * as utils from './utils';
```

### Fix Output

<!-- prettier-ignore -->
```ts
import * as utils from './utils'
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import * as utils from './utils';
    |                                 ^ Extra semicolon.
```

## Test #82

### Test Code

<!-- prettier-ignore -->
```ts
import { square, diag } from 'lib'
```

### Fix Output

<!-- prettier-ignore -->
```ts
import { square, diag } from 'lib';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import { square, diag } from 'lib'
    |                                   ^ Missing semicolon.
```

## Test #83

### Test Code

<!-- prettier-ignore -->
```ts
import { square, diag } from 'lib';
```

### Fix Output

<!-- prettier-ignore -->
```ts
import { square, diag } from 'lib'
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import { square, diag } from 'lib';
    |                                   ^ Extra semicolon.
```

## Test #84

### Test Code

<!-- prettier-ignore -->
```ts
import { default as foo } from 'lib'
```

### Fix Output

<!-- prettier-ignore -->
```ts
import { default as foo } from 'lib';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import { default as foo } from 'lib'
    |                                     ^ Missing semicolon.
```

## Test #85

### Test Code

<!-- prettier-ignore -->
```ts
import { default as foo } from 'lib';
```

### Fix Output

<!-- prettier-ignore -->
```ts
import { default as foo } from 'lib'
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import { default as foo } from 'lib';
    |                                     ^ Extra semicolon.
```

## Test #86

### Test Code

<!-- prettier-ignore -->
```ts
import 'src/mylib'
```

### Fix Output

<!-- prettier-ignore -->
```ts
import 'src/mylib';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import 'src/mylib'
    |                   ^ Missing semicolon.
```

## Test #87

### Test Code

<!-- prettier-ignore -->
```ts
import 'src/mylib';
```

### Fix Output

<!-- prettier-ignore -->
```ts
import 'src/mylib'
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | import 'src/mylib';
    |                   ^ Extra semicolon.
```

## Test #88

### Test Code

<!-- prettier-ignore -->
```ts
var foo
var bar
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo;
var bar;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo
    |        ^
> 2 | var bar
    | ^ Missing semicolon.
```

<!-- prettier-ignore -->
```ts
  1 | var foo
> 2 | var bar
    |        ^ Missing semicolon.
```

## Test #89

### Test Code

<!-- prettier-ignore -->
```ts
var foo;
var bar;
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo
var bar
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo;
    |        ^ Extra semicolon.
  2 | var bar;
```

<!-- prettier-ignore -->
```ts
  1 | var foo;
> 2 | var bar;
    |        ^ Extra semicolon.
```

## Test #90

### Test Code

<!-- prettier-ignore -->
```ts
export * from 'foo'
```

### Fix Output

<!-- prettier-ignore -->
```ts
export * from 'foo';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export * from 'foo'
    |                    ^ Missing semicolon.
```

## Test #91

### Test Code

<!-- prettier-ignore -->
```ts
export * from 'foo';
```

### Fix Output

<!-- prettier-ignore -->
```ts
export * from 'foo'
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export * from 'foo';
    |                    ^ Extra semicolon.
```

## Test #92

### Test Code

<!-- prettier-ignore -->
```ts
export { foo } from 'foo'
```

### Fix Output

<!-- prettier-ignore -->
```ts
export { foo } from 'foo';
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export { foo } from 'foo'
    |                          ^ Missing semicolon.
```

## Test #93

### Test Code

<!-- prettier-ignore -->
```ts
export { foo } from 'foo';
```

### Fix Output

<!-- prettier-ignore -->
```ts
export { foo } from 'foo'
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export { foo } from 'foo';
    |                          ^ Extra semicolon.
```

## Test #94

### Test Code

<!-- prettier-ignore -->
```ts
var foo = 0
export { foo }
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = 0;
export { foo };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = 0
    |            ^
> 2 | export { foo }
    | ^ Missing semicolon.
```

<!-- prettier-ignore -->
```ts
  1 | var foo = 0
> 2 | export { foo }
    |               ^ Missing semicolon.
```

## Test #95

### Test Code

<!-- prettier-ignore -->
```ts
var foo = 0;
export { foo };
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = 0
export { foo }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = 0;
    |            ^ Extra semicolon.
  2 | export { foo };
```

<!-- prettier-ignore -->
```ts
  1 | var foo = 0;
> 2 | export { foo };
    |               ^ Extra semicolon.
```

## Test #96

### Test Code

<!-- prettier-ignore -->
```ts
export var foo
```

### Fix Output

<!-- prettier-ignore -->
```ts
export var foo;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export var foo
    |               ^ Missing semicolon.
```

## Test #97

### Test Code

<!-- prettier-ignore -->
```ts
export var foo;
```

### Fix Output

<!-- prettier-ignore -->
```ts
export var foo
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export var foo;
    |               ^ Extra semicolon.
```

## Test #98

### Test Code

<!-- prettier-ignore -->
```ts
export let foo
```

### Fix Output

<!-- prettier-ignore -->
```ts
export let foo;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export let foo
    |               ^ Missing semicolon.
```

## Test #99

### Test Code

<!-- prettier-ignore -->
```ts
export let foo;
```

### Fix Output

<!-- prettier-ignore -->
```ts
export let foo
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export let foo;
    |               ^ Extra semicolon.
```

## Test #100

### Test Code

<!-- prettier-ignore -->
```ts
export const FOO = 42
```

### Fix Output

<!-- prettier-ignore -->
```ts
export const FOO = 42;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export const FOO = 42
    |                      ^ Missing semicolon.
```

## Test #101

### Test Code

<!-- prettier-ignore -->
```ts
export const FOO = 42;
```

### Fix Output

<!-- prettier-ignore -->
```ts
export const FOO = 42
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export const FOO = 42;
    |                      ^ Extra semicolon.
```

## Test #102

### Test Code

<!-- prettier-ignore -->
```ts
export default foo || bar
```

### Fix Output

<!-- prettier-ignore -->
```ts
export default foo || bar;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export default foo || bar
    |                          ^ Missing semicolon.
```

## Test #103

### Test Code

<!-- prettier-ignore -->
```ts
export default foo || bar;
```

### Fix Output

<!-- prettier-ignore -->
```ts
export default foo || bar
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export default foo || bar;
    |                          ^ Extra semicolon.
```

## Test #104

### Test Code

<!-- prettier-ignore -->
```ts
export default (foo) => foo.bar()
```

### Fix Output

<!-- prettier-ignore -->
```ts
export default (foo) => foo.bar();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export default (foo) => foo.bar()
    |                                  ^ Missing semicolon.
```

## Test #105

### Test Code

<!-- prettier-ignore -->
```ts
export default (foo) => foo.bar();
```

### Fix Output

<!-- prettier-ignore -->
```ts
export default (foo) => foo.bar()
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export default (foo) => foo.bar();
    |                                  ^ Extra semicolon.
```

## Test #106

### Test Code

<!-- prettier-ignore -->
```ts
export default foo = 42
```

### Fix Output

<!-- prettier-ignore -->
```ts
export default foo = 42;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export default foo = 42
    |                        ^ Missing semicolon.
```

## Test #107

### Test Code

<!-- prettier-ignore -->
```ts
export default foo = 42;
```

### Fix Output

<!-- prettier-ignore -->
```ts
export default foo = 42
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | export default foo = 42;
    |                        ^ Extra semicolon.
```

## Test #108

### Test Code

<!-- prettier-ignore -->
```ts
a
++b
```

### Fix Output

<!-- prettier-ignore -->
```ts
a;
++b;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a
    |  ^
> 2 | ++b
    | ^ Missing semicolon.
```

<!-- prettier-ignore -->
```ts
  1 | a
> 2 | ++b
    |    ^ Missing semicolon.
```

## Test #109

### Test Code

<!-- prettier-ignore -->
```ts
a;
++b;
```

### Fix Output

<!-- prettier-ignore -->
```ts
a
++b;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a;
    |  ^ Extra semicolon.
  2 | ++b;
```

<!-- prettier-ignore -->
```ts
  1 | a;
> 2 | ++b;
    |    ^ Extra semicolon.
```
