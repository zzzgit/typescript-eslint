# no-confusing-void-expression

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

        const x = console.log('foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const x = console.log('foo');
    |                   ^^^^^^^^^^^^^^^^^^ Placing a void expression inside another expression is forbidden. Move it to its own statement instead.
  3 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

        const x = console?.log('foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const x = console?.log('foo');
    |                   ^^^^^^^^^^^^^^^^^^^ Placing a void expression inside another expression is forbidden. Move it to its own statement instead.
  3 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

        console.error(console.log('foo'));
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         console.error(console.log('foo'));
    |                       ^^^^^^^^^^^^^^^^^^ Placing a void expression inside another expression is forbidden. Move it to its own statement instead.
  3 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

        [console.log('foo')];
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         [console.log('foo')];
    |          ^^^^^^^^^^^^^^^^^^ Placing a void expression inside another expression is forbidden. Move it to its own statement instead.
  3 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        ({ x: console.log('foo') });
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         ({ x: console.log('foo') });
    |               ^^^^^^^^^^^^^^^^^^ Placing a void expression inside another expression is forbidden. Move it to its own statement instead.
  3 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        void console.log('foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         void console.log('foo');
    |              ^^^^^^^^^^^^^^^^^^ Placing a void expression inside another expression is forbidden. Move it to its own statement instead.
  3 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        console.log('foo') ? true : false;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         console.log('foo') ? true : false;
    |         ^^^^^^^^^^^^^^^^^^ Placing a void expression inside another expression is forbidden. Move it to its own statement instead.
  3 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        (console.log('foo') && true) || false;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         (console.log('foo') && true) || false;
    |          ^^^^^^^^^^^^^^^^^^ Placing a void expression inside another expression is forbidden. Move it to its own statement instead.
  3 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        (cond && console.log('ok')) || console.log('error');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         (cond && console.log('ok')) || console.log('error');
    |                  ^^^^^^^^^^^^^^^^^ Placing a void expression inside another expression is forbidden. Move it to its own statement instead.
  3 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

        !console.log('foo');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         !console.log('foo');
    |          ^^^^^^^^^^^^^^^^^^ Placing a void expression inside another expression is forbidden. Move it to its own statement instead.
  3 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

function notcool(input: string) {
  return input, console.log(input);
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function notcool(input: string) {
> 3 |   return input, console.log(input);
    |                 ^^^^^^^^^^^^^^^^^^ Placing a void expression inside another expression is forbidden. Move it to its own statement instead.
  4 | }
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
() => console.log('foo');
```

### Fix Output

<!-- prettier-ignore -->
```ts
() => { console.log('foo'); };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | () => console.log('foo');
    |       ^^^^^^^^^^^^^^^^^^ Returning a void expression from an arrow function shorthand is forbidden. Please add braces to the arrow function.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
foo => foo && console.log(foo);
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo => { foo && console.log(foo); };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo => foo && console.log(foo);
    |               ^^^^^^^^^^^^^^^^ Returning a void expression from an arrow function shorthand is forbidden. Please add braces to the arrow function.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
foo => foo || console.log(foo);
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo => { foo || console.log(foo); };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo => foo || console.log(foo);
    |               ^^^^^^^^^^^^^^^^ Returning a void expression from an arrow function shorthand is forbidden. Please add braces to the arrow function.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
foo => (foo ? console.log(true) : console.log(false));
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo => { foo ? console.log(true) : console.log(false); };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo => (foo ? console.log(true) : console.log(false));
    |               ^^^^^^^^^^^^^^^^^ Returning a void expression from an arrow function shorthand is forbidden. Please add braces to the arrow function.
```

<!-- prettier-ignore -->
```ts
> 1 | foo => (foo ? console.log(true) : console.log(false));
    |                                   ^^^^^^^^^^^^^^^^^^ Returning a void expression from an arrow function shorthand is forbidden. Please add braces to the arrow function.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

        function f() {
          return console.log('foo');
          console.log('bar');
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f() {
          console.log('foo'); return;
          console.log('bar');
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f() {
> 3 |           return console.log('foo');
    |                  ^^^^^^^^^^^^^^^^^^ Returning a void expression from a function is forbidden. Please move it before the `return` statement.
  4 |           console.log('bar');
  5 |         }
  6 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

        function f() {
          console.log('foo')
          return ['bar', 'baz'].forEach(console.log)
          console.log('quux')
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f() {
          console.log('foo')
          ;['bar', 'baz'].forEach(console.log); return;
          console.log('quux')
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f() {
  3 |           console.log('foo')
> 4 |           return ['bar', 'baz'].forEach(console.log)
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Returning a void expression from a function is forbidden. Please move it before the `return` statement.
  5 |           console.log('quux')
  6 |         }
  7 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

        function f() {
          console.log('foo');
          return console.log('bar');
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f() {
          console.log('foo');
          console.log('bar');
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f() {
  3 |           console.log('foo');
> 4 |           return console.log('bar');
    |                  ^^^^^^^^^^^^^^^^^^ Returning a void expression from a function is forbidden. Please remove the `return` statement.
  5 |         }
  6 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

        function f() {
          console.log('foo')
          return ['bar', 'baz'].forEach(console.log)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f() {
          console.log('foo')
          ;['bar', 'baz'].forEach(console.log);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f() {
  3 |           console.log('foo')
> 4 |           return ['bar', 'baz'].forEach(console.log)
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Returning a void expression from a function is forbidden. Please remove the `return` statement.
  5 |         }
  6 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

        const f = () => {
          if (cond) {
            return console.error('foo');
          }
          console.log('bar');
        };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const f = () => {
          if (cond) {
            console.error('foo'); return;
          }
          console.log('bar');
        };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const f = () => {
  3 |           if (cond) {
> 4 |             return console.error('foo');
    |                    ^^^^^^^^^^^^^^^^^^^^ Returning a void expression from a function is forbidden. Please move it before the `return` statement.
  5 |           }
  6 |           console.log('bar');
  7 |         };
  8 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

        const f = function () {
          if (cond) return console.error('foo');
          console.log('bar');
        };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const f = function () {
          if (cond) { console.error('foo'); return; }
          console.log('bar');
        };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const f = function () {
> 3 |           if (cond) return console.error('foo');
    |                            ^^^^^^^^^^^^^^^^^^^^ Returning a void expression from a function is forbidden. Please move it before the `return` statement.
  4 |           console.log('bar');
  5 |         };
  6 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
return console.log('foo');
```

### Fix Output

<!-- prettier-ignore -->
```ts
return void console.log('foo');
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | return console.log('foo');
    |        ^^^^^^^^^^^^^^^^^^ Void expressions returned from a function must be marked explicitly with the `void` operator.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
console.error(console.log('foo'));
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | console.error(console.log('foo'));
    |               ^^^^^^^^^^^^^^^^^^ Void expressions used inside another expression must be moved to its own statement or marked explicitly with the `void` operator.
```

#### Suggestions

##### Mark with an explicit `void` operator.

<!-- prettier-ignore -->
```ts
console.error(void console.log('foo'));
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
console.log('foo') ? true : false;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | console.log('foo') ? true : false;
    | ^^^^^^^^^^^^^^^^^^ Void expressions used inside another expression must be moved to its own statement or marked explicitly with the `void` operator.
```

#### Suggestions

##### Mark with an explicit `void` operator.

<!-- prettier-ignore -->
```ts
void console.log('foo') ? true : false;
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
const x = foo ?? console.log('foo');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x = foo ?? console.log('foo');
    |                  ^^^^^^^^^^^^^^^^^^ Void expressions used inside another expression must be moved to its own statement or marked explicitly with the `void` operator.
```

#### Suggestions

##### Mark with an explicit `void` operator.

<!-- prettier-ignore -->
```ts
const x = foo ?? void console.log('foo');
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
foo => foo || console.log(foo);
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo => foo || void console.log(foo);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo => foo || console.log(foo);
    |               ^^^^^^^^^^^^^^^^ Void expressions returned from an arrow function shorthand must be marked explicitly with the `void` operator.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
!!console.log('foo');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !!console.log('foo');
    |   ^^^^^^^^^^^^^^^^^^ Void expressions used inside another expression must be moved to its own statement or marked explicitly with the `void` operator.
```

#### Suggestions

##### Mark with an explicit `void` operator.

<!-- prettier-ignore -->
```ts
!!void console.log('foo');
```
