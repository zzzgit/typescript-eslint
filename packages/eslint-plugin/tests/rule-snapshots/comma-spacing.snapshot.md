# comma-spacing

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
a(b,c)
```

### Fix Output

<!-- prettier-ignore -->
```ts
a(b , c)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a(b,c)
    |    ^ A space is required before ','.
```

<!-- prettier-ignore -->
```ts
> 1 | a(b,c)
    |    ^ A space is required after ','.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
new A(b,c)
```

### Fix Output

<!-- prettier-ignore -->
```ts
new A(b , c)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | new A(b,c)
    |        ^ A space is required before ','.
```

<!-- prettier-ignore -->
```ts
> 1 | new A(b,c)
    |        ^ A space is required after ','.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
const a = 1 ,b = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a = 1, b = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const a = 1 ,b = 2;
    |             ^ There should be no space before ','.
```

<!-- prettier-ignore -->
```ts
> 1 | const a = 1 ,b = 2;
    |             ^ A space is required after ','.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
const arr = [1 , 2];
```

### Fix Output

<!-- prettier-ignore -->
```ts
const arr = [1, 2];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const arr = [1 , 2];
    |                ^ There should be no space before ','.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
const arr = [1 , ];
```

### Fix Output

<!-- prettier-ignore -->
```ts
const arr = [1, ];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const arr = [1 , ];
    |                ^ There should be no space before ','.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
const arr = [1 , ];
```

### Fix Output

<!-- prettier-ignore -->
```ts
const arr = [1 ,];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const arr = [1 , ];
    |                ^ There should be no space after ','.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
const arr = [1 ,2];
```

### Fix Output

<!-- prettier-ignore -->
```ts
const arr = [1, 2];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const arr = [1 ,2];
    |                ^ There should be no space before ','.
```

<!-- prettier-ignore -->
```ts
> 1 | const arr = [1 ,2];
    |                ^ A space is required after ','.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
const arr = [(1) , 2];
```

### Fix Output

<!-- prettier-ignore -->
```ts
const arr = [(1), 2];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const arr = [(1) , 2];
    |                  ^ There should be no space before ','.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
const arr = [1, 2];
```

### Fix Output

<!-- prettier-ignore -->
```ts
const arr = [1 ,2];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const arr = [1, 2];
    |               ^ A space is required before ','.
```

<!-- prettier-ignore -->
```ts
> 1 | const arr = [1, 2];
    |               ^ There should be no space after ','.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
const arr = [1
  , 2];
```

### Fix Output

<!-- prettier-ignore -->
```ts
const arr = [1
  ,2];
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const arr = [1
> 2 |   , 2];
    |   ^ There should be no space after ','.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
const arr = [1,
  2];
```

### Fix Output

<!-- prettier-ignore -->
```ts
const arr = [1 ,
  2];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const arr = [1,
    |               ^ A space is required before ','.
  2 |   2];
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
const obj = {'foo':
'bar', 'baz':
'qur'};
```

### Fix Output

<!-- prettier-ignore -->
```ts
const obj = {'foo':
'bar' ,'baz':
'qur'};
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const obj = {'foo':
> 2 | 'bar', 'baz':
    |      ^ A space is required before ','.
  3 | 'qur'};
```

<!-- prettier-ignore -->
```ts
  1 | const obj = {'foo':
> 2 | 'bar', 'baz':
    |      ^ There should be no space after ','.
  3 | 'qur'};
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
const obj = {a: 1
  ,b: 2};
```

### Fix Output

<!-- prettier-ignore -->
```ts
const obj = {a: 1
  , b: 2};
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const obj = {a: 1
> 2 |   ,b: 2};
    |   ^ A space is required after ','.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
const obj = {a: 1 ,
  b: 2};
```

### Fix Output

<!-- prettier-ignore -->
```ts
const obj = {a: 1,
  b: 2};
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const obj = {a: 1 ,
    |                   ^ There should be no space before ','.
  2 |   b: 2};
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
const arr = [1 ,2];
```

### Fix Output

<!-- prettier-ignore -->
```ts
const arr = [1 , 2];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const arr = [1 ,2];
    |                ^ A space is required after ','.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
const arr = [1,2];
```

### Fix Output

<!-- prettier-ignore -->
```ts
const arr = [1 , 2];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const arr = [1,2];
    |               ^ A space is required before ','.
```

<!-- prettier-ignore -->
```ts
> 1 | const arr = [1,2];
    |               ^ A space is required after ','.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
const obj = {'foo':
'bar','baz':
'qur'};
```

### Fix Output

<!-- prettier-ignore -->
```ts
const obj = {'foo':
'bar' , 'baz':
'qur'};
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const obj = {'foo':
> 2 | 'bar','baz':
    |      ^ A space is required before ','.
  3 | 'qur'};
```

<!-- prettier-ignore -->
```ts
  1 | const obj = {'foo':
> 2 | 'bar','baz':
    |      ^ A space is required after ','.
  3 | 'qur'};
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
const arr = [1 , 2];
```

### Fix Output

<!-- prettier-ignore -->
```ts
const arr = [1,2];
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const arr = [1 , 2];
    |                ^ There should be no space before ','.
```

<!-- prettier-ignore -->
```ts
> 1 | const arr = [1 , 2];
    |                ^ There should be no space after ','.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
a ,b
```

### Fix Output

<!-- prettier-ignore -->
```ts
a, b
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | a ,b
    |   ^ There should be no space before ','.
```

<!-- prettier-ignore -->
```ts
> 1 | a ,b
    |   ^ A space is required after ','.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
function foo(a,b){}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo(a , b){}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(a,b){}
    |               ^ A space is required before ','.
```

<!-- prettier-ignore -->
```ts
> 1 | function foo(a,b){}
    |               ^ A space is required after ','.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
const foo = (a,b) => {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
const foo = (a , b) => {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = (a,b) => {}
    |               ^ A space is required before ','.
```

<!-- prettier-ignore -->
```ts
> 1 | const foo = (a,b) => {}
    |               ^ A space is required after ','.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
const foo = (a = 1,b) => {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
const foo = (a = 1 , b) => {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const foo = (a = 1,b) => {}
    |                   ^ A space is required before ','.
```

<!-- prettier-ignore -->
```ts
> 1 | const foo = (a = 1,b) => {}
    |                   ^ A space is required after ','.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
function foo(a = 1 ,b = 2) {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo(a = 1, b = 2) {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo(a = 1 ,b = 2) {}
    |                    ^ There should be no space before ','.
```

<!-- prettier-ignore -->
```ts
> 1 | function foo(a = 1 ,b = 2) {}
    |                    ^ A space is required after ','.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```tsx
<a>{foo(1 ,2)}</a>
```

### Fix Output

<!-- prettier-ignore -->
```tsx
<a>{foo(1, 2)}</a>
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | <a>{foo(1 ,2)}</a>
    |           ^ There should be no space before ','.
```

<!-- prettier-ignore -->
```tsx
> 1 | <a>{foo(1 ,2)}</a>
    |           ^ A space is required after ','.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
foo(1, true/* comment */ , 'foo');
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo(1, true/* comment */, 'foo');
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo(1, true/* comment */ , 'foo');
    |                          ^ There should be no space before ','.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
foo(1, true,/* comment */ 'foo');
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo(1, true, /* comment */ 'foo');
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo(1, true,/* comment */ 'foo');
    |            ^ A space is required after ','.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
foo(404,// comment
 true, 'hello');
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo(404, // comment
 true, 'hello');
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | foo(404,// comment
    |        ^ A space is required after ','.
  2 |  true, 'hello');
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
function Foo<T,T1>() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function Foo<T, T1>() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function Foo<T,T1>() {}
    |               ^ A space is required after ','.
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
function Foo<T , T1>() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function Foo<T, T1>() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function Foo<T , T1>() {}
    |                ^ There should be no space before ','.
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
function Foo<T ,T1>() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function Foo<T, T1>() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function Foo<T ,T1>() {}
    |                ^ There should be no space before ','.
```

<!-- prettier-ignore -->
```ts
> 1 | function Foo<T ,T1>() {}
    |                ^ A space is required after ','.
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
function Foo<T, T1>() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function Foo<T,T1>() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function Foo<T, T1>() {}
    |               ^ There should be no space after ','.
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
function Foo<T,T1>() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function Foo<T ,T1>() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function Foo<T,T1>() {}
    |               ^ A space is required before ','.
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
let foo ,
```

### Fix Output

<!-- prettier-ignore -->
```ts
let foo,
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let foo ,
    |         ^ There should be no space before ','.
```
