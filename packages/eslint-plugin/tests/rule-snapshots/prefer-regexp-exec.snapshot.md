# prefer-regexp-exec

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
'something'.match(/thing/);
```

### Fix Output

<!-- prettier-ignore -->
```ts
/thing/.exec('something');
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | 'something'.match(/thing/);
    |             ^^^^^ Use the `RegExp#exec()` method instead.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
'something'.match('^[a-z]+thing/?$');
```

### Fix Output

<!-- prettier-ignore -->
```ts
/^[a-z]+thing\/?$/.exec('something');
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | 'something'.match('^[a-z]+thing/?$');
    |             ^^^^^ Use the `RegExp#exec()` method instead.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

const text = 'something';
const search = /thing/;
text.match(search);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const text = 'something';
const search = /thing/;
search.exec(text);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const text = 'something';
  3 | const search = /thing/;
> 4 | text.match(search);
    |      ^^^^^ Use the `RegExp#exec()` method instead.
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

const text = 'something';
const search = 'thing';
text.match(search);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const text = 'something';
const search = 'thing';
RegExp(search).exec(text);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const text = 'something';
  3 | const search = 'thing';
> 4 | text.match(search);
    |      ^^^^^ Use the `RegExp#exec()` method instead.
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

function f(s: 'a' | 'b') {
  s.match('a');
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function f(s: 'a' | 'b') {
  /a/.exec(s);
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function f(s: 'a' | 'b') {
> 3 |   s.match('a');
    |     ^^^^^ Use the `RegExp#exec()` method instead.
  4 | }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

type SafeString = string & { __HTML_ESCAPED__: void };
function f(s: SafeString) {
  s.match(/thing/);
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type SafeString = string & { __HTML_ESCAPED__: void };
function f(s: SafeString) {
  /thing/.exec(s);
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type SafeString = string & { __HTML_ESCAPED__: void };
  3 | function f(s: SafeString) {
> 4 |   s.match(/thing/);
    |     ^^^^^ Use the `RegExp#exec()` method instead.
  5 | }
  6 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

function f<T extends 'a' | 'b'>(s: T) {
  s.match(/thing/);
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function f<T extends 'a' | 'b'>(s: T) {
  /thing/.exec(s);
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function f<T extends 'a' | 'b'>(s: T) {
> 3 |   s.match(/thing/);
    |     ^^^^^ Use the `RegExp#exec()` method instead.
  4 | }
  5 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

const text = 'something';
const search = new RegExp('test', '');
text.match(search);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const text = 'something';
const search = new RegExp('test', '');
search.exec(text);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const text = 'something';
  3 | const search = new RegExp('test', '');
> 4 | text.match(search);
    |      ^^^^^ Use the `RegExp#exec()` method instead.
  5 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

function test(pattern: string) {
  'check'.match(new RegExp(pattern, undefined));
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function test(pattern: string) {
  new RegExp(pattern, undefined).exec('check');
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function test(pattern: string) {
> 3 |   'check'.match(new RegExp(pattern, undefined));
    |           ^^^^^ Use the `RegExp#exec()` method instead.
  4 | }
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

function temp(text: string): void {
  text.match(new RegExp(`${'hello'}`));
  text.match(new RegExp(`${'hello'.toString()}`));
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function temp(text: string): void {
  new RegExp(`${'hello'}`).exec(text);
  new RegExp(`${'hello'.toString()}`).exec(text);
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function temp(text: string): void {
> 3 |   text.match(new RegExp(`${'hello'}`));
    |        ^^^^^ Use the `RegExp#exec()` method instead.
  4 |   text.match(new RegExp(`${'hello'.toString()}`));
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | function temp(text: string): void {
  3 |   text.match(new RegExp(`${'hello'}`));
> 4 |   text.match(new RegExp(`${'hello'.toString()}`));
    |        ^^^^^ Use the `RegExp#exec()` method instead.
  5 | }
  6 |       
```
