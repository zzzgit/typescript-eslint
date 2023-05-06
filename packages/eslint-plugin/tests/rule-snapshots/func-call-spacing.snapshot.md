# func-call-spacing

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
f ();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f ();
    | ^ Unexpected whitespace between function name and paren.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
f (a, b);
```

### Fix Output

<!-- prettier-ignore -->
```ts
f(a, b);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f (a, b);
    | ^ Unexpected whitespace between function name and paren.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
f.b ();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f.b();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f.b ();
    |   ^ Unexpected whitespace between function name and paren.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
f.b().c ();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f.b().c();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f.b().c ();
    |       ^ Unexpected whitespace between function name and paren.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
f() ()
```

### Fix Output

<!-- prettier-ignore -->
```ts
f()()
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f() ()
    |   ^ Unexpected whitespace between function name and paren.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
(function() {} ())
```

### Fix Output

<!-- prettier-ignore -->
```ts
(function() {}())
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (function() {} ())
    |              ^ Unexpected whitespace between function name and paren.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
var f = new Foo ()
```

### Fix Output

<!-- prettier-ignore -->
```ts
var f = new Foo()
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var f = new Foo ()
    |             ^ Unexpected whitespace between function name and paren.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
f ( (0) )
```

### Fix Output

<!-- prettier-ignore -->
```ts
f( (0) )
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f ( (0) )
    | ^ Unexpected whitespace between function name and paren.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
f(0) (1)
```

### Fix Output

<!-- prettier-ignore -->
```ts
f(0)(1)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f(0) (1)
    |    ^ Unexpected whitespace between function name and paren.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
f ();
 t   ();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f();
 t();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f ();
    | ^ Unexpected whitespace between function name and paren.
  2 |  t   ();
```

<!-- prettier-ignore -->
```ts
  1 | f ();
> 2 |  t   ();
    |  ^ Unexpected whitespace between function name and paren.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
f
();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected whitespace between function name and paren.
  2 | ();
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

this.cancelled.add(request)
this.decrement(request)
(request.reject(new api.Cancel()))
        
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | this.cancelled.add(request)
> 3 | this.decrement(request)
    |                       ^ Unexpected whitespace between function name and paren.
  4 | (request.reject(new api.Cancel()))
  5 |         
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

var a = foo
(function(global) {}(this));
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | var a = foo
    |         ^ Unexpected whitespace between function name and paren.
  3 | (function(global) {}(this));
  4 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

var a = foo
(baz())
        
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | var a = foo
    |         ^ Unexpected whitespace between function name and paren.
  3 | (baz())
  4 |         
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
f
();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected whitespace between function name and paren.
  2 | ();
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
f ();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected whitespace between function name and paren.
  2 | ();
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
f ();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected whitespace between function name and paren.
  2 | ();
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
f
();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected whitespace between function name and paren.
  2 | ();
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
f();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f();
    | ^ Missing space between function name and paren.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
f(a, b);
```

### Fix Output

<!-- prettier-ignore -->
```ts
f (a, b);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f(a, b);
    | ^ Missing space between function name and paren.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
f() ()
```

### Fix Output

<!-- prettier-ignore -->
```ts
f () ()
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f() ()
    | ^ Missing space between function name and paren.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
var f = new Foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
var f = new Foo ()
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var f = new Foo()
    |             ^ Missing space between function name and paren.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
f( (0) )
```

### Fix Output

<!-- prettier-ignore -->
```ts
f ( (0) )
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f( (0) )
    | ^ Missing space between function name and paren.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
f(0) (1)
```

### Fix Output

<!-- prettier-ignore -->
```ts
f (0) (1)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f(0) (1)
    | ^ Missing space between function name and paren.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
f
();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected newline between function name and paren.
  2 | ();
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
f
(a, b);
```

### Fix Output

<!-- prettier-ignore -->
```ts
f (a, b);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected newline between function name and paren.
  2 | (a, b);
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
f.b();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f.b ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f.b();
    |   ^ Missing space between function name and paren.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
f.b
();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f.b ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f.b
    |   ^ Unexpected newline between function name and paren.
  2 | ();
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
f.b().c ();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f.b ().c ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f.b().c ();
    |   ^ Missing space between function name and paren.
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
f.b
().c ();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f.b ().c ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f.b
    |   ^ Unexpected newline between function name and paren.
  2 | ().c ();
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
f
() ()
```

### Fix Output

<!-- prettier-ignore -->
```ts
f () ()
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected newline between function name and paren.
  2 | () ()
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
f
()()
```

### Fix Output

<!-- prettier-ignore -->
```ts
f () ()
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected newline between function name and paren.
  2 | ()()
```

<!-- prettier-ignore -->
```ts
  1 | f
> 2 | ()()
    |  ^ Missing space between function name and paren.
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
(function() {}())
```

### Fix Output

<!-- prettier-ignore -->
```ts
(function() {} ())
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (function() {}())
    |              ^ Missing space between function name and paren.
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
f();
 t();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f ();
 t ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f();
    | ^ Missing space between function name and paren.
  2 |  t();
```

<!-- prettier-ignore -->
```ts
  1 | f();
> 2 |  t();
    |  ^ Missing space between function name and paren.
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts
f
();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected newline between function name and paren.
  2 | ();
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts
f ();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected newline between function name and paren.
  2 | ();
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts
f ();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected newline between function name and paren.
  2 | ();
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts
f
();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected newline between function name and paren.
  2 | ();
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts
f();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f();
    | ^ Missing space between function name and paren.
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts
f(a, b);
```

### Fix Output

<!-- prettier-ignore -->
```ts
f (a, b);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f(a, b);
    | ^ Missing space between function name and paren.
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts
f.b();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f.b ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f.b();
    |   ^ Missing space between function name and paren.
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts
f.b().c ();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f.b ().c ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f.b().c ();
    |   ^ Missing space between function name and paren.
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts
f() ()
```

### Fix Output

<!-- prettier-ignore -->
```ts
f () ()
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f() ()
    | ^ Missing space between function name and paren.
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts
(function() {}())
```

### Fix Output

<!-- prettier-ignore -->
```ts
(function() {} ())
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (function() {}())
    |              ^ Missing space between function name and paren.
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts
var f = new Foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
var f = new Foo ()
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var f = new Foo()
    |             ^ Missing space between function name and paren.
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts
f( (0) )
```

### Fix Output

<!-- prettier-ignore -->
```ts
f ( (0) )
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f( (0) )
    | ^ Missing space between function name and paren.
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts
f(0) (1)
```

### Fix Output

<!-- prettier-ignore -->
```ts
f (0) (1)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f(0) (1)
    | ^ Missing space between function name and paren.
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts
f();
 t();
```

### Fix Output

<!-- prettier-ignore -->
```ts
f ();
 t ();
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f();
    | ^ Missing space between function name and paren.
  2 |  t();
```

<!-- prettier-ignore -->
```ts
  1 | f();
> 2 |  t();
    |  ^ Missing space between function name and paren.
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts
f ?.();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f ?.();
    | ^ Unexpected whitespace between function name and paren.
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts
f ?.();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f ?.();
    | ^ Unexpected whitespace between function name and paren.
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts
f ?.();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f ?.();
    | ^ Unexpected whitespace between function name and paren.
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts
f?. ();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f?. ();
    | ^ Unexpected whitespace between function name and paren.
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts
f?. ();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f?. ();
    | ^ Unexpected whitespace between function name and paren.
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts
f?. ();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f?. ();
    | ^ Unexpected whitespace between function name and paren.
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts
f ?. ();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f ?. ();
    | ^ Unexpected whitespace between function name and paren.
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts
f ?. ();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f ?. ();
    | ^ Unexpected whitespace between function name and paren.
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts
f ?. ();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f ?. ();
    | ^ Unexpected whitespace between function name and paren.
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts
f
?.();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected whitespace between function name and paren.
  2 | ?.();
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts
f
?.();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected whitespace between function name and paren.
  2 | ?.();
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts
f
?.();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected whitespace between function name and paren.
  2 | ?.();
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts
f?.
();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f?.
    | ^ Unexpected whitespace between function name and paren.
  2 | ();
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts
f?.
();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f?.
    | ^ Unexpected whitespace between function name and paren.
  2 | ();
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts
f?.
();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f?.
    | ^ Unexpected whitespace between function name and paren.
  2 | ();
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts
f
?.
();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected whitespace between function name and paren.
  2 | ?.
  3 | ();
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts
f
?.
();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected whitespace between function name and paren.
  2 | ?.
  3 | ();
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts
f
?.
();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | f
    | ^ Unexpected whitespace between function name and paren.
  2 | ?.
  3 | ();
```
