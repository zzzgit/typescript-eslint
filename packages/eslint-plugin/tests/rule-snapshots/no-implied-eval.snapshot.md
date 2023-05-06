# no-implied-eval

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

setTimeout('x = 1', 0);
setInterval('x = 1', 0);
setImmediate('x = 1');
execScript('x = 1');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | setTimeout('x = 1', 0);
    |            ^^^^^^^ Implied eval. Consider passing a function.
  3 | setInterval('x = 1', 0);
  4 | setImmediate('x = 1');
  5 | execScript('x = 1');
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | setTimeout('x = 1', 0);
> 3 | setInterval('x = 1', 0);
    |             ^^^^^^^ Implied eval. Consider passing a function.
  4 | setImmediate('x = 1');
  5 | execScript('x = 1');
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | setTimeout('x = 1', 0);
  3 | setInterval('x = 1', 0);
> 4 | setImmediate('x = 1');
    |              ^^^^^^^ Implied eval. Consider passing a function.
  5 | execScript('x = 1');
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | setTimeout('x = 1', 0);
  3 | setInterval('x = 1', 0);
  4 | setImmediate('x = 1');
> 5 | execScript('x = 1');
    |            ^^^^^^^ Implied eval. Consider passing a function.
  6 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

setTimeout(undefined, 0);
setInterval(undefined, 0);
setImmediate(undefined);
execScript(undefined);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | setTimeout(undefined, 0);
    |            ^^^^^^^^^ Implied eval. Consider passing a function.
  3 | setInterval(undefined, 0);
  4 | setImmediate(undefined);
  5 | execScript(undefined);
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | setTimeout(undefined, 0);
> 3 | setInterval(undefined, 0);
    |             ^^^^^^^^^ Implied eval. Consider passing a function.
  4 | setImmediate(undefined);
  5 | execScript(undefined);
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | setTimeout(undefined, 0);
  3 | setInterval(undefined, 0);
> 4 | setImmediate(undefined);
    |              ^^^^^^^^^ Implied eval. Consider passing a function.
  5 | execScript(undefined);
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | setTimeout(undefined, 0);
  3 | setInterval(undefined, 0);
  4 | setImmediate(undefined);
> 5 | execScript(undefined);
    |            ^^^^^^^^^ Implied eval. Consider passing a function.
  6 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

setTimeout(1 + '' + (() => {}), 0);
setInterval(1 + '' + (() => {}), 0);
setImmediate(1 + '' + (() => {}));
execScript(1 + '' + (() => {}));
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | setTimeout(1 + '' + (() => {}), 0);
    |            ^^^^^^^^^^^^^^^^^^^ Implied eval. Consider passing a function.
  3 | setInterval(1 + '' + (() => {}), 0);
  4 | setImmediate(1 + '' + (() => {}));
  5 | execScript(1 + '' + (() => {}));
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | setTimeout(1 + '' + (() => {}), 0);
> 3 | setInterval(1 + '' + (() => {}), 0);
    |             ^^^^^^^^^^^^^^^^^^^ Implied eval. Consider passing a function.
  4 | setImmediate(1 + '' + (() => {}));
  5 | execScript(1 + '' + (() => {}));
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | setTimeout(1 + '' + (() => {}), 0);
  3 | setInterval(1 + '' + (() => {}), 0);
> 4 | setImmediate(1 + '' + (() => {}));
    |              ^^^^^^^^^^^^^^^^^^^ Implied eval. Consider passing a function.
  5 | execScript(1 + '' + (() => {}));
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | setTimeout(1 + '' + (() => {}), 0);
  3 | setInterval(1 + '' + (() => {}), 0);
  4 | setImmediate(1 + '' + (() => {}));
> 5 | execScript(1 + '' + (() => {}));
    |            ^^^^^^^^^^^^^^^^^^^ Implied eval. Consider passing a function.
  6 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

const foo = 'x = 1';

setTimeout(foo, 0);
setInterval(foo, 0);
setImmediate(foo);
execScript(foo);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = 'x = 1';
  3 |
> 4 | setTimeout(foo, 0);
    |            ^^^ Implied eval. Consider passing a function.
  5 | setInterval(foo, 0);
  6 | setImmediate(foo);
  7 | execScript(foo);
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = 'x = 1';
  3 |
  4 | setTimeout(foo, 0);
> 5 | setInterval(foo, 0);
    |             ^^^ Implied eval. Consider passing a function.
  6 | setImmediate(foo);
  7 | execScript(foo);
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = 'x = 1';
  3 |
  4 | setTimeout(foo, 0);
  5 | setInterval(foo, 0);
> 6 | setImmediate(foo);
    |              ^^^ Implied eval. Consider passing a function.
  7 | execScript(foo);
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = 'x = 1';
  3 |
  4 | setTimeout(foo, 0);
  5 | setInterval(foo, 0);
  6 | setImmediate(foo);
> 7 | execScript(foo);
    |            ^^^ Implied eval. Consider passing a function.
  8 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

const foo = function () {
  return 'x + 1';
};

setTimeout(foo(), 0);
setInterval(foo(), 0);
setImmediate(foo());
execScript(foo());
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = function () {
   3 |   return 'x + 1';
   4 | };
   5 |
>  6 | setTimeout(foo(), 0);
     |            ^^^^^ Implied eval. Consider passing a function.
   7 | setInterval(foo(), 0);
   8 | setImmediate(foo());
   9 | execScript(foo());
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = function () {
   3 |   return 'x + 1';
   4 | };
   5 |
   6 | setTimeout(foo(), 0);
>  7 | setInterval(foo(), 0);
     |             ^^^^^ Implied eval. Consider passing a function.
   8 | setImmediate(foo());
   9 | execScript(foo());
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = function () {
   3 |   return 'x + 1';
   4 | };
   5 |
   6 | setTimeout(foo(), 0);
   7 | setInterval(foo(), 0);
>  8 | setImmediate(foo());
     |              ^^^^^ Implied eval. Consider passing a function.
   9 | execScript(foo());
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = function () {
   3 |   return 'x + 1';
   4 | };
   5 |
   6 | setTimeout(foo(), 0);
   7 | setInterval(foo(), 0);
   8 | setImmediate(foo());
>  9 | execScript(foo());
     |            ^^^^^ Implied eval. Consider passing a function.
  10 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

const foo = function () {
  return () => 'x + 1';
};

setTimeout(foo()(), 0);
setInterval(foo()(), 0);
setImmediate(foo()());
execScript(foo()());
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = function () {
   3 |   return () => 'x + 1';
   4 | };
   5 |
>  6 | setTimeout(foo()(), 0);
     |            ^^^^^^^ Implied eval. Consider passing a function.
   7 | setInterval(foo()(), 0);
   8 | setImmediate(foo()());
   9 | execScript(foo()());
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = function () {
   3 |   return () => 'x + 1';
   4 | };
   5 |
   6 | setTimeout(foo()(), 0);
>  7 | setInterval(foo()(), 0);
     |             ^^^^^^^ Implied eval. Consider passing a function.
   8 | setImmediate(foo()());
   9 | execScript(foo()());
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = function () {
   3 |   return () => 'x + 1';
   4 | };
   5 |
   6 | setTimeout(foo()(), 0);
   7 | setInterval(foo()(), 0);
>  8 | setImmediate(foo()());
     |              ^^^^^^^ Implied eval. Consider passing a function.
   9 | execScript(foo()());
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | const foo = function () {
   3 |   return () => 'x + 1';
   4 | };
   5 |
   6 | setTimeout(foo()(), 0);
   7 | setInterval(foo()(), 0);
   8 | setImmediate(foo()());
>  9 | execScript(foo()());
     |            ^^^^^^^ Implied eval. Consider passing a function.
  10 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

const fn = function () {};

setTimeout(fn + '', 0);
setInterval(fn + '', 0);
setImmediate(fn + '');
execScript(fn + '');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const fn = function () {};
  3 |
> 4 | setTimeout(fn + '', 0);
    |            ^^^^^^^ Implied eval. Consider passing a function.
  5 | setInterval(fn + '', 0);
  6 | setImmediate(fn + '');
  7 | execScript(fn + '');
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const fn = function () {};
  3 |
  4 | setTimeout(fn + '', 0);
> 5 | setInterval(fn + '', 0);
    |             ^^^^^^^ Implied eval. Consider passing a function.
  6 | setImmediate(fn + '');
  7 | execScript(fn + '');
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const fn = function () {};
  3 |
  4 | setTimeout(fn + '', 0);
  5 | setInterval(fn + '', 0);
> 6 | setImmediate(fn + '');
    |              ^^^^^^^ Implied eval. Consider passing a function.
  7 | execScript(fn + '');
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const fn = function () {};
  3 |
  4 | setTimeout(fn + '', 0);
  5 | setInterval(fn + '', 0);
  6 | setImmediate(fn + '');
> 7 | execScript(fn + '');
    |            ^^^^^^^ Implied eval. Consider passing a function.
  8 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

const foo: string = 'x + 1';

setTimeout(foo, 0);
setInterval(foo, 0);
setImmediate(foo);
execScript(foo);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo: string = 'x + 1';
  3 |
> 4 | setTimeout(foo, 0);
    |            ^^^ Implied eval. Consider passing a function.
  5 | setInterval(foo, 0);
  6 | setImmediate(foo);
  7 | execScript(foo);
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo: string = 'x + 1';
  3 |
  4 | setTimeout(foo, 0);
> 5 | setInterval(foo, 0);
    |             ^^^ Implied eval. Consider passing a function.
  6 | setImmediate(foo);
  7 | execScript(foo);
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo: string = 'x + 1';
  3 |
  4 | setTimeout(foo, 0);
  5 | setInterval(foo, 0);
> 6 | setImmediate(foo);
    |              ^^^ Implied eval. Consider passing a function.
  7 | execScript(foo);
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo: string = 'x + 1';
  3 |
  4 | setTimeout(foo, 0);
  5 | setInterval(foo, 0);
  6 | setImmediate(foo);
> 7 | execScript(foo);
    |            ^^^ Implied eval. Consider passing a function.
  8 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

const foo = new String('x + 1');

setTimeout(foo, 0);
setInterval(foo, 0);
setImmediate(foo);
execScript(foo);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = new String('x + 1');
  3 |
> 4 | setTimeout(foo, 0);
    |            ^^^ Implied eval. Consider passing a function.
  5 | setInterval(foo, 0);
  6 | setImmediate(foo);
  7 | execScript(foo);
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = new String('x + 1');
  3 |
  4 | setTimeout(foo, 0);
> 5 | setInterval(foo, 0);
    |             ^^^ Implied eval. Consider passing a function.
  6 | setImmediate(foo);
  7 | execScript(foo);
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = new String('x + 1');
  3 |
  4 | setTimeout(foo, 0);
  5 | setInterval(foo, 0);
> 6 | setImmediate(foo);
    |              ^^^ Implied eval. Consider passing a function.
  7 | execScript(foo);
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = new String('x + 1');
  3 |
  4 | setTimeout(foo, 0);
  5 | setInterval(foo, 0);
  6 | setImmediate(foo);
> 7 | execScript(foo);
    |            ^^^ Implied eval. Consider passing a function.
  8 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

const foo = 'x + 1';

setTimeout(foo as any, 0);
setInterval(foo as any, 0);
setImmediate(foo as any);
execScript(foo as any);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = 'x + 1';
  3 |
> 4 | setTimeout(foo as any, 0);
    |            ^^^^^^^^^^ Implied eval. Consider passing a function.
  5 | setInterval(foo as any, 0);
  6 | setImmediate(foo as any);
  7 | execScript(foo as any);
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = 'x + 1';
  3 |
  4 | setTimeout(foo as any, 0);
> 5 | setInterval(foo as any, 0);
    |             ^^^^^^^^^^ Implied eval. Consider passing a function.
  6 | setImmediate(foo as any);
  7 | execScript(foo as any);
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = 'x + 1';
  3 |
  4 | setTimeout(foo as any, 0);
  5 | setInterval(foo as any, 0);
> 6 | setImmediate(foo as any);
    |              ^^^^^^^^^^ Implied eval. Consider passing a function.
  7 | execScript(foo as any);
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = 'x + 1';
  3 |
  4 | setTimeout(foo as any, 0);
  5 | setInterval(foo as any, 0);
  6 | setImmediate(foo as any);
> 7 | execScript(foo as any);
    |            ^^^^^^^^^^ Implied eval. Consider passing a function.
  8 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

const fn = (foo: string | any) => {
  setTimeout(foo, 0);
  setInterval(foo, 0);
  setImmediate(foo);
  execScript(foo);
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const fn = (foo: string | any) => {
> 3 |   setTimeout(foo, 0);
    |              ^^^ Implied eval. Consider passing a function.
  4 |   setInterval(foo, 0);
  5 |   setImmediate(foo);
  6 |   execScript(foo);
  7 | };
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const fn = (foo: string | any) => {
  3 |   setTimeout(foo, 0);
> 4 |   setInterval(foo, 0);
    |               ^^^ Implied eval. Consider passing a function.
  5 |   setImmediate(foo);
  6 |   execScript(foo);
  7 | };
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const fn = (foo: string | any) => {
  3 |   setTimeout(foo, 0);
  4 |   setInterval(foo, 0);
> 5 |   setImmediate(foo);
    |                ^^^ Implied eval. Consider passing a function.
  6 |   execScript(foo);
  7 | };
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | const fn = (foo: string | any) => {
  3 |   setTimeout(foo, 0);
  4 |   setInterval(foo, 0);
  5 |   setImmediate(foo);
> 6 |   execScript(foo);
    |              ^^^ Implied eval. Consider passing a function.
  7 | };
  8 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

const foo = 'foo';
const bar = () => {};

setTimeout(Math.radom() > 0.5 ? foo : bar, 0);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo = 'foo';
  3 | const bar = () => {};
  4 |
> 5 | setTimeout(Math.radom() > 0.5 ? foo : bar, 0);
    |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Implied eval. Consider passing a function.
  6 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

window.setTimeout(``, 0);
window['setTimeout'](``, 0);

window.setInterval(``, 0);
window['setInterval'](``, 0);

window.setImmediate(``);
window['setImmediate'](``);

window.execScript(``);
window['execScript'](``);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 | window.setTimeout(``, 0);
     |                   ^^ Implied eval. Consider passing a function.
   3 | window['setTimeout'](``, 0);
   4 |
   5 | window.setInterval(``, 0);
   6 | window['setInterval'](``, 0);
   7 |
   8 | window.setImmediate(``);
   9 | window['setImmediate'](``);
  10 |
  11 | window.execScript(``);
  12 | window['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | window.setTimeout(``, 0);
>  3 | window['setTimeout'](``, 0);
     |                      ^^ Implied eval. Consider passing a function.
   4 |
   5 | window.setInterval(``, 0);
   6 | window['setInterval'](``, 0);
   7 |
   8 | window.setImmediate(``);
   9 | window['setImmediate'](``);
  10 |
  11 | window.execScript(``);
  12 | window['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | window.setTimeout(``, 0);
   3 | window['setTimeout'](``, 0);
   4 |
>  5 | window.setInterval(``, 0);
     |                    ^^ Implied eval. Consider passing a function.
   6 | window['setInterval'](``, 0);
   7 |
   8 | window.setImmediate(``);
   9 | window['setImmediate'](``);
  10 |
  11 | window.execScript(``);
  12 | window['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | window.setTimeout(``, 0);
   3 | window['setTimeout'](``, 0);
   4 |
   5 | window.setInterval(``, 0);
>  6 | window['setInterval'](``, 0);
     |                       ^^ Implied eval. Consider passing a function.
   7 |
   8 | window.setImmediate(``);
   9 | window['setImmediate'](``);
  10 |
  11 | window.execScript(``);
  12 | window['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | window.setTimeout(``, 0);
   3 | window['setTimeout'](``, 0);
   4 |
   5 | window.setInterval(``, 0);
   6 | window['setInterval'](``, 0);
   7 |
>  8 | window.setImmediate(``);
     |                     ^^ Implied eval. Consider passing a function.
   9 | window['setImmediate'](``);
  10 |
  11 | window.execScript(``);
  12 | window['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | window.setTimeout(``, 0);
   3 | window['setTimeout'](``, 0);
   4 |
   5 | window.setInterval(``, 0);
   6 | window['setInterval'](``, 0);
   7 |
   8 | window.setImmediate(``);
>  9 | window['setImmediate'](``);
     |                        ^^ Implied eval. Consider passing a function.
  10 |
  11 | window.execScript(``);
  12 | window['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | window.setTimeout(``, 0);
   3 | window['setTimeout'](``, 0);
   4 |
   5 | window.setInterval(``, 0);
   6 | window['setInterval'](``, 0);
   7 |
   8 | window.setImmediate(``);
   9 | window['setImmediate'](``);
  10 |
> 11 | window.execScript(``);
     |                   ^^ Implied eval. Consider passing a function.
  12 | window['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | window.setTimeout(``, 0);
   3 | window['setTimeout'](``, 0);
   4 |
   5 | window.setInterval(``, 0);
   6 | window['setInterval'](``, 0);
   7 |
   8 | window.setImmediate(``);
   9 | window['setImmediate'](``);
  10 |
  11 | window.execScript(``);
> 12 | window['execScript'](``);
     |                      ^^ Implied eval. Consider passing a function.
  13 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

global.setTimeout(``, 0);
global['setTimeout'](``, 0);

global.setInterval(``, 0);
global['setInterval'](``, 0);

global.setImmediate(``);
global['setImmediate'](``);

global.execScript(``);
global['execScript'](``);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 | global.setTimeout(``, 0);
     |                   ^^ Implied eval. Consider passing a function.
   3 | global['setTimeout'](``, 0);
   4 |
   5 | global.setInterval(``, 0);
   6 | global['setInterval'](``, 0);
   7 |
   8 | global.setImmediate(``);
   9 | global['setImmediate'](``);
  10 |
  11 | global.execScript(``);
  12 | global['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | global.setTimeout(``, 0);
>  3 | global['setTimeout'](``, 0);
     |                      ^^ Implied eval. Consider passing a function.
   4 |
   5 | global.setInterval(``, 0);
   6 | global['setInterval'](``, 0);
   7 |
   8 | global.setImmediate(``);
   9 | global['setImmediate'](``);
  10 |
  11 | global.execScript(``);
  12 | global['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | global.setTimeout(``, 0);
   3 | global['setTimeout'](``, 0);
   4 |
>  5 | global.setInterval(``, 0);
     |                    ^^ Implied eval. Consider passing a function.
   6 | global['setInterval'](``, 0);
   7 |
   8 | global.setImmediate(``);
   9 | global['setImmediate'](``);
  10 |
  11 | global.execScript(``);
  12 | global['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | global.setTimeout(``, 0);
   3 | global['setTimeout'](``, 0);
   4 |
   5 | global.setInterval(``, 0);
>  6 | global['setInterval'](``, 0);
     |                       ^^ Implied eval. Consider passing a function.
   7 |
   8 | global.setImmediate(``);
   9 | global['setImmediate'](``);
  10 |
  11 | global.execScript(``);
  12 | global['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | global.setTimeout(``, 0);
   3 | global['setTimeout'](``, 0);
   4 |
   5 | global.setInterval(``, 0);
   6 | global['setInterval'](``, 0);
   7 |
>  8 | global.setImmediate(``);
     |                     ^^ Implied eval. Consider passing a function.
   9 | global['setImmediate'](``);
  10 |
  11 | global.execScript(``);
  12 | global['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | global.setTimeout(``, 0);
   3 | global['setTimeout'](``, 0);
   4 |
   5 | global.setInterval(``, 0);
   6 | global['setInterval'](``, 0);
   7 |
   8 | global.setImmediate(``);
>  9 | global['setImmediate'](``);
     |                        ^^ Implied eval. Consider passing a function.
  10 |
  11 | global.execScript(``);
  12 | global['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | global.setTimeout(``, 0);
   3 | global['setTimeout'](``, 0);
   4 |
   5 | global.setInterval(``, 0);
   6 | global['setInterval'](``, 0);
   7 |
   8 | global.setImmediate(``);
   9 | global['setImmediate'](``);
  10 |
> 11 | global.execScript(``);
     |                   ^^ Implied eval. Consider passing a function.
  12 | global['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | global.setTimeout(``, 0);
   3 | global['setTimeout'](``, 0);
   4 |
   5 | global.setInterval(``, 0);
   6 | global['setInterval'](``, 0);
   7 |
   8 | global.setImmediate(``);
   9 | global['setImmediate'](``);
  10 |
  11 | global.execScript(``);
> 12 | global['execScript'](``);
     |                      ^^ Implied eval. Consider passing a function.
  13 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

globalThis.setTimeout(``, 0);
globalThis['setTimeout'](``, 0);

globalThis.setInterval(``, 0);
globalThis['setInterval'](``, 0);

globalThis.setImmediate(``);
globalThis['setImmediate'](``);

globalThis.execScript(``);
globalThis['execScript'](``);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 | globalThis.setTimeout(``, 0);
     |                       ^^ Implied eval. Consider passing a function.
   3 | globalThis['setTimeout'](``, 0);
   4 |
   5 | globalThis.setInterval(``, 0);
   6 | globalThis['setInterval'](``, 0);
   7 |
   8 | globalThis.setImmediate(``);
   9 | globalThis['setImmediate'](``);
  10 |
  11 | globalThis.execScript(``);
  12 | globalThis['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | globalThis.setTimeout(``, 0);
>  3 | globalThis['setTimeout'](``, 0);
     |                          ^^ Implied eval. Consider passing a function.
   4 |
   5 | globalThis.setInterval(``, 0);
   6 | globalThis['setInterval'](``, 0);
   7 |
   8 | globalThis.setImmediate(``);
   9 | globalThis['setImmediate'](``);
  10 |
  11 | globalThis.execScript(``);
  12 | globalThis['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | globalThis.setTimeout(``, 0);
   3 | globalThis['setTimeout'](``, 0);
   4 |
>  5 | globalThis.setInterval(``, 0);
     |                        ^^ Implied eval. Consider passing a function.
   6 | globalThis['setInterval'](``, 0);
   7 |
   8 | globalThis.setImmediate(``);
   9 | globalThis['setImmediate'](``);
  10 |
  11 | globalThis.execScript(``);
  12 | globalThis['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | globalThis.setTimeout(``, 0);
   3 | globalThis['setTimeout'](``, 0);
   4 |
   5 | globalThis.setInterval(``, 0);
>  6 | globalThis['setInterval'](``, 0);
     |                           ^^ Implied eval. Consider passing a function.
   7 |
   8 | globalThis.setImmediate(``);
   9 | globalThis['setImmediate'](``);
  10 |
  11 | globalThis.execScript(``);
  12 | globalThis['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | globalThis.setTimeout(``, 0);
   3 | globalThis['setTimeout'](``, 0);
   4 |
   5 | globalThis.setInterval(``, 0);
   6 | globalThis['setInterval'](``, 0);
   7 |
>  8 | globalThis.setImmediate(``);
     |                         ^^ Implied eval. Consider passing a function.
   9 | globalThis['setImmediate'](``);
  10 |
  11 | globalThis.execScript(``);
  12 | globalThis['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | globalThis.setTimeout(``, 0);
   3 | globalThis['setTimeout'](``, 0);
   4 |
   5 | globalThis.setInterval(``, 0);
   6 | globalThis['setInterval'](``, 0);
   7 |
   8 | globalThis.setImmediate(``);
>  9 | globalThis['setImmediate'](``);
     |                            ^^ Implied eval. Consider passing a function.
  10 |
  11 | globalThis.execScript(``);
  12 | globalThis['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | globalThis.setTimeout(``, 0);
   3 | globalThis['setTimeout'](``, 0);
   4 |
   5 | globalThis.setInterval(``, 0);
   6 | globalThis['setInterval'](``, 0);
   7 |
   8 | globalThis.setImmediate(``);
   9 | globalThis['setImmediate'](``);
  10 |
> 11 | globalThis.execScript(``);
     |                       ^^ Implied eval. Consider passing a function.
  12 | globalThis['execScript'](``);
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | globalThis.setTimeout(``, 0);
   3 | globalThis['setTimeout'](``, 0);
   4 |
   5 | globalThis.setInterval(``, 0);
   6 | globalThis['setInterval'](``, 0);
   7 |
   8 | globalThis.setImmediate(``);
   9 | globalThis['setImmediate'](``);
  10 |
  11 | globalThis.execScript(``);
> 12 | globalThis['execScript'](``);
     |                          ^^ Implied eval. Consider passing a function.
  13 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

const foo: string | undefined = 'hello';
const bar = () => {};

setTimeout(foo || bar, 500);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const foo: string | undefined = 'hello';
  3 | const bar = () => {};
  4 |
> 5 | setTimeout(foo || bar, 500);
    |            ^^^^^^^^^^ Implied eval. Consider passing a function.
  6 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
const fn = Function();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const fn = Function();
    |            ^^^^^^^^^^ Implied eval. Do not use the Function constructor to create functions.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
const fn = new Function('a', 'b', 'return a + b');
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const fn = new Function('a', 'b', 'return a + b');
    |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Implied eval. Do not use the Function constructor to create functions.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
const fn = window.Function();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const fn = window.Function();
    |            ^^^^^^^^^^^^^^^^^ Implied eval. Do not use the Function constructor to create functions.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
const fn = new window.Function();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const fn = new window.Function();
    |            ^^^^^^^^^^^^^^^^^^^^^ Implied eval. Do not use the Function constructor to create functions.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
const fn = window['Function']();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const fn = window['Function']();
    |            ^^^^^^^^^^^^^^^^^^^^ Implied eval. Do not use the Function constructor to create functions.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
const fn = new window['Function']();
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const fn = new window['Function']();
    |            ^^^^^^^^^^^^^^^^^^^^^^^^ Implied eval. Do not use the Function constructor to create functions.
```
