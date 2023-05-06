# space-before-function-paren

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
function foo<T extends () => {}>() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo<T extends () => {}> () {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo<T extends () => {}>() {}
    |                                 ^ Missing space before function parentheses.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
function foo() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo () {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo() {}
    |             ^ Missing space before function parentheses.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
function foo/* */() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo /* */() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo/* */() {}
    |                  ^ Missing space before function parentheses.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
var foo = function() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = function () {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = function() {}
    |                   ^ Missing space before function parentheses.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
var bar = function foo() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
var bar = function foo () {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var bar = function foo() {}
    |                       ^ Missing space before function parentheses.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
var obj = { get foo() {}, set foo(val) {} };
```

### Fix Output

<!-- prettier-ignore -->
```ts
var obj = { get foo () {}, set foo (val) {} };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var obj = { get foo() {}, set foo(val) {} };
    |                    ^ Missing space before function parentheses.
```

<!-- prettier-ignore -->
```ts
> 1 | var obj = { get foo() {}, set foo(val) {} };
    |                                  ^ Missing space before function parentheses.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
var obj = { foo() {} };
```

### Fix Output

<!-- prettier-ignore -->
```ts
var obj = { foo () {} };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var obj = { foo() {} };
    |                ^ Missing space before function parentheses.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
function* foo() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function* foo () {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function* foo() {}
    |              ^ Missing space before function parentheses.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
function foo () {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo () {}
    |             ^ Unexpected space before function parentheses.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
var foo = function () {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = function() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = function () {}
    |                   ^ Unexpected space before function parentheses.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
var bar = function foo () {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
var bar = function foo() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var bar = function foo () {}
    |                       ^ Unexpected space before function parentheses.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
var obj = { get foo () {}, set foo (val) {} };
```

### Fix Output

<!-- prettier-ignore -->
```ts
var obj = { get foo() {}, set foo(val) {} };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var obj = { get foo () {}, set foo (val) {} };
    |                    ^ Unexpected space before function parentheses.
```

<!-- prettier-ignore -->
```ts
> 1 | var obj = { get foo () {}, set foo (val) {} };
    |                                   ^ Unexpected space before function parentheses.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
var obj = { foo () {} };
```

### Fix Output

<!-- prettier-ignore -->
```ts
var obj = { foo() {} };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var obj = { foo () {} };
    |                ^ Unexpected space before function parentheses.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
function* foo () {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function* foo() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function* foo () {}
    |              ^ Unexpected space before function parentheses.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
function foo () {}
var bar = function() {}
var obj = { get foo () {}, set foo (val) {}, bar () {} };
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo() {}
var bar = function () {}
var obj = { get foo() {}, set foo(val) {}, bar() {} };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo () {}
    |             ^ Unexpected space before function parentheses.
  2 | var bar = function() {}
  3 | var obj = { get foo () {}, set foo (val) {}, bar () {} };
```

<!-- prettier-ignore -->
```ts
  1 | function foo () {}
> 2 | var bar = function() {}
    |                   ^ Missing space before function parentheses.
  3 | var obj = { get foo () {}, set foo (val) {}, bar () {} };
```

<!-- prettier-ignore -->
```ts
  1 | function foo () {}
  2 | var bar = function() {}
> 3 | var obj = { get foo () {}, set foo (val) {}, bar () {} };
    |                    ^ Unexpected space before function parentheses.
```

<!-- prettier-ignore -->
```ts
  1 | function foo () {}
  2 | var bar = function() {}
> 3 | var obj = { get foo () {}, set foo (val) {}, bar () {} };
    |                                   ^ Unexpected space before function parentheses.
```

<!-- prettier-ignore -->
```ts
  1 | function foo () {}
  2 | var bar = function() {}
> 3 | var obj = { get foo () {}, set foo (val) {}, bar () {} };
    |                                                 ^ Unexpected space before function parentheses.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
class Foo { constructor () {} *method () {} }
```

### Fix Output

<!-- prettier-ignore -->
```ts
class Foo { constructor() {} *method() {} }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | class Foo { constructor () {} *method () {} }
    |                        ^ Unexpected space before function parentheses.
```

<!-- prettier-ignore -->
```ts
> 1 | class Foo { constructor () {} *method () {} }
    |                                      ^ Unexpected space before function parentheses.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
var foo = { bar () {} }
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = { bar() {} }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = { bar () {} }
    |                ^ Unexpected space before function parentheses.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
function foo() {}
var bar = function () {}
var obj = { get foo() {}, set foo(val) {}, bar() {} };
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo () {}
var bar = function() {}
var obj = { get foo () {}, set foo (val) {}, bar () {} };
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo() {}
    |             ^ Missing space before function parentheses.
  2 | var bar = function () {}
  3 | var obj = { get foo() {}, set foo(val) {}, bar() {} };
```

<!-- prettier-ignore -->
```ts
  1 | function foo() {}
> 2 | var bar = function () {}
    |                   ^ Unexpected space before function parentheses.
  3 | var obj = { get foo() {}, set foo(val) {}, bar() {} };
```

<!-- prettier-ignore -->
```ts
  1 | function foo() {}
  2 | var bar = function () {}
> 3 | var obj = { get foo() {}, set foo(val) {}, bar() {} };
    |                    ^ Missing space before function parentheses.
```

<!-- prettier-ignore -->
```ts
  1 | function foo() {}
  2 | var bar = function () {}
> 3 | var obj = { get foo() {}, set foo(val) {}, bar() {} };
    |                                  ^ Missing space before function parentheses.
```

<!-- prettier-ignore -->
```ts
  1 | function foo() {}
  2 | var bar = function () {}
> 3 | var obj = { get foo() {}, set foo(val) {}, bar() {} };
    |                                               ^ Missing space before function parentheses.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
var foo = function() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = function () {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = function() {}
    |                   ^ Missing space before function parentheses.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
var foo = function () {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = function() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = function () {}
    |                   ^ Unexpected space before function parentheses.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
var bar = function foo() {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
var bar = function foo () {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var bar = function foo() {}
    |                       ^ Missing space before function parentheses.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
var bar = function foo () {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
var bar = function foo() {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var bar = function foo () {}
    |                       ^ Unexpected space before function parentheses.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
async() => 1
```

### Fix Output

<!-- prettier-ignore -->
```ts
async () => 1
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | async() => 1
    |      ^ Missing space before function parentheses.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
async () => 1
```

### Fix Output

<!-- prettier-ignore -->
```ts
async() => 1
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | async () => 1
    |      ^ Unexpected space before function parentheses.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
async() => 1
```

### Fix Output

<!-- prettier-ignore -->
```ts
async () => 1
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | async() => 1
    |      ^ Missing space before function parentheses.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
async() => 1
```

### Fix Output

<!-- prettier-ignore -->
```ts
async () => 1
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | async() => 1
    |      ^ Missing space before function parentheses.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
async () => 1
```

### Fix Output

<!-- prettier-ignore -->
```ts
async() => 1
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | async () => 1
    |      ^ Unexpected space before function parentheses.
```
