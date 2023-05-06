# dot-notation

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

class X {
  private priv_prop = 123;
}

const x = new X();
x['priv_prop'] = 123;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class X {
  private priv_prop = 123;
}

const x = new X();
x.priv_prop = 123;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class X {
  3 |   private priv_prop = 123;
  4 | }
  5 |
  6 | const x = new X();
> 7 | x['priv_prop'] = 123;
    |   ^^^^^^^^^^^ ["priv_prop"] is better written in dot notation.
  8 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

class X {
  public pub_prop = 123;
}

const x = new X();
x['pub_prop'] = 123;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class X {
  public pub_prop = 123;
}

const x = new X();
x.pub_prop = 123;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class X {
  3 |   public pub_prop = 123;
  4 | }
  5 |
  6 | const x = new X();
> 7 | x['pub_prop'] = 123;
    |   ^^^^^^^^^^ ["pub_prop"] is better written in dot notation.
  8 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
a['true'];
```

### Fix Output

<!-- prettier-ignore -->
```ts
a.true;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a['true'];
    |   ^^^^^^ ["true"] is better written in dot notation.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
a['time'];
```

### Fix Output

<!-- prettier-ignore -->
```ts
a.time;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a['time'];
    |   ^^^^^^ ["time"] is better written in dot notation.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
a[null];
```

### Fix Output

<!-- prettier-ignore -->
```ts
a.null;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a[null];
    |   ^^^^ [null] is better written in dot notation.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
a[true];
```

### Fix Output

<!-- prettier-ignore -->
```ts
a.true;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a[true];
    |   ^^^^ [true] is better written in dot notation.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
a[false];
```

### Fix Output

<!-- prettier-ignore -->
```ts
a.false;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a[false];
    |   ^^^^^ [false] is better written in dot notation.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
a['b'];
```

### Fix Output

<!-- prettier-ignore -->
```ts
a.b;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a['b'];
    |   ^^^ ["b"] is better written in dot notation.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
a.b['c'];
```

### Fix Output

<!-- prettier-ignore -->
```ts
a.b.c;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a.b['c'];
    |     ^^^ ["c"] is better written in dot notation.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
a['_dangle'];
```

### Fix Output

<!-- prettier-ignore -->
```ts
a._dangle;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a['_dangle'];
    |   ^^^^^^^^^ ["_dangle"] is better written in dot notation.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
a['SHOUT_CASE'];
```

### Fix Output

<!-- prettier-ignore -->
```ts
a.SHOUT_CASE;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a['SHOUT_CASE'];
    |   ^^^^^^^^^^^^ ["SHOUT_CASE"] is better written in dot notation.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
a
  ['SHOUT_CASE'];
```

### Fix Output

<!-- prettier-ignore -->
```ts
a
  .SHOUT_CASE;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | a
> 2 |   ['SHOUT_CASE'];
    |    ^^^^^^^^^^^^ ["SHOUT_CASE"] is better written in dot notation.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
getResource()
    .then(function(){})
    ["catch"](function(){})
    .then(function(){})
    ["catch"](function(){});
```

### Fix Output

<!-- prettier-ignore -->
```ts
getResource()
    .then(function(){})
    .catch(function(){})
    .then(function(){})
    .catch(function(){});
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | getResource()
  2 |     .then(function(){})
> 3 |     ["catch"](function(){})
    |      ^^^^^^^ ["catch"] is better written in dot notation.
  4 |     .then(function(){})
  5 |     ["catch"](function(){});
```

<!-- prettier-ignore -->
```ts
  1 | getResource()
  2 |     .then(function(){})
  3 |     ["catch"](function(){})
  4 |     .then(function(){})
> 5 |     ["catch"](function(){});
    |      ^^^^^^^ ["catch"] is better written in dot notation.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
foo
  .while;
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo
  ["while"];
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | foo
> 2 |   .while;
    |    ^^^^^ .while is a syntax error.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
foo[/* comment */ 'bar'];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo[/* comment */ 'bar'];
    |                   ^^^^^ ["bar"] is better written in dot notation.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
foo['bar' /* comment */];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo['bar' /* comment */];
    |     ^^^^^ ["bar"] is better written in dot notation.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
foo['bar'];
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo.bar;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo['bar'];
    |     ^^^^^ ["bar"] is better written in dot notation.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
foo./* comment */ while;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo./* comment */ while;
    |                   ^^^^^ .while is a syntax error.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
foo[null];
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo.null;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo[null];
    |     ^^^^ [null] is better written in dot notation.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
foo['bar'] instanceof baz;
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo.bar instanceof baz;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo['bar'] instanceof baz;
    |     ^^^^^ ["bar"] is better written in dot notation.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
let.if();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let.if();
    |     ^^ .if is a syntax error.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

class X {
  protected protected_prop = 123;
}

const x = new X();
x['protected_prop'] = 123;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class X {
  protected protected_prop = 123;
}

const x = new X();
x.protected_prop = 123;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class X {
  3 |   protected protected_prop = 123;
  4 | }
  5 |
  6 | const x = new X();
> 7 | x['protected_prop'] = 123;
    |   ^^^^^^^^^^^^^^^^ ["protected_prop"] is better written in dot notation.
  8 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

class X {
  prop: string;
  [key: string]: number;
}

const x = new X();
x['prop'] = 'hello';
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class X {
  prop: string;
  [key: string]: number;
}

const x = new X();
x.prop = 'hello';
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class X {
  3 |   prop: string;
  4 |   [key: string]: number;
  5 | }
  6 |
  7 | const x = new X();
> 8 | x['prop'] = 'hello';
    |   ^^^^^^ ["prop"] is better written in dot notation.
  9 |       
```
