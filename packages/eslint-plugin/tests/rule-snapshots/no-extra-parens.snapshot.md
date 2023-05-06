# no-extra-parens

## Test #1

### Test Code

<!-- prettier-ignore -->
```tsx
a = (b * c);
```

### Fix Output

<!-- prettier-ignore -->
```tsx
a = b * c;
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | a = (b * c);
    |     ^ Unnecessary parentheses around expression.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```tsx
(a * b) + c;
```

### Fix Output

<!-- prettier-ignore -->
```tsx
a * b + c;
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | (a * b) + c;
    | ^ Unnecessary parentheses around expression.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```tsx
for (a in (b, c));
```

### Fix Output

<!-- prettier-ignore -->
```tsx
for (a in b, c);
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | for (a in (b, c));
    |           ^ Unnecessary parentheses around expression.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```tsx
for (a in (b));
```

### Fix Output

<!-- prettier-ignore -->
```tsx
for (a in b);
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | for (a in (b));
    |           ^ Unnecessary parentheses around expression.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```tsx
for (a of (b));
```

### Fix Output

<!-- prettier-ignore -->
```tsx
for (a of b);
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | for (a of (b));
    |           ^ Unnecessary parentheses around expression.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```tsx
typeof (a);
```

### Fix Output

<!-- prettier-ignore -->
```tsx
typeof a;
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | typeof (a);
    |        ^ Unnecessary parentheses around expression.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```tsx
a<import('')>((1));
```

### Fix Output

<!-- prettier-ignore -->
```tsx
a<import('')>(1);
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | a<import('')>((1));
    |               ^ Unnecessary parentheses around expression.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```tsx
new a<import('')>((1));
```

### Fix Output

<!-- prettier-ignore -->
```tsx
new a<import('')>(1);
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | new a<import('')>((1));
    |                   ^ Unnecessary parentheses around expression.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```tsx
a<(A)>((1));
```

### Fix Output

<!-- prettier-ignore -->
```tsx
a<(A)>(1);
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | a<(A)>((1));
    |        ^ Unnecessary parentheses around expression.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```tsx
async function f(arg: Promise<any>) { await (arg); }
```

### Fix Output

<!-- prettier-ignore -->
```tsx
async function f(arg: Promise<any>) { await arg; }
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | async function f(arg: Promise<any>) { await (arg); }
    |                                             ^ Unnecessary parentheses around expression.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```tsx
async function f(arg: any) { await ((arg as Promise<void>)); }
```

### Fix Output

<!-- prettier-ignore -->
```tsx
async function f(arg: any) { await (arg as Promise<void>); }
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | async function f(arg: any) { await ((arg as Promise<void>)); }
    |                                     ^ Unnecessary parentheses around expression.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```tsx
class Foo extends ((Bar as any)) {}
```

### Fix Output

<!-- prettier-ignore -->
```tsx
class Foo extends (Bar as any) {}
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | class Foo extends ((Bar as any)) {}
    |                    ^ Unnecessary parentheses around expression.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```tsx
class Foo extends (Bar) {}
```

### Fix Output

<!-- prettier-ignore -->
```tsx
class Foo extends Bar {}
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | class Foo extends (Bar) {}
    |                   ^ Unnecessary parentheses around expression.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```tsx
const foo = class extends ((Bar as any)) {}
```

### Fix Output

<!-- prettier-ignore -->
```tsx
const foo = class extends (Bar as any) {}
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | const foo = class extends ((Bar as any)) {}
    |                            ^ Unnecessary parentheses around expression.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```tsx
const foo = class extends (Bar) {}
```

### Fix Output

<!-- prettier-ignore -->
```tsx
const foo = class extends Bar {}
```

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | const foo = class extends (Bar) {}
    |                           ^ Unnecessary parentheses around expression.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```tsx

        const Component = (<div />)
      
```

### Fix Output

<!-- prettier-ignore -->
```tsx

        const Component = <div />
      
```

### Errors

<!-- prettier-ignore -->
```tsx
  1 |
> 2 |         const Component = (<div />)
    |                           ^ Unnecessary parentheses around expression.
  3 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```tsx

        const Component = (<div><p /></div>)
      
```

### Fix Output

<!-- prettier-ignore -->
```tsx

        const Component = <div><p /></div>
      
```

### Errors

<!-- prettier-ignore -->
```tsx
  1 |
> 2 |         const Component = (<div><p /></div>)
    |                           ^ Unnecessary parentheses around expression.
  3 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```tsx

const Component = (
    <div>
        <p />
    </div>
)
const Component = (
    <div
        prop={true}
    />
)
      
```

### Fix Output

<!-- prettier-ignore -->
```tsx

const Component = 
    <div>
        <p />
    </div>

const Component = 
    <div
        prop={true}
    />

      
```

### Errors

<!-- prettier-ignore -->
```tsx
   1 |
>  2 | const Component = (
     |                   ^ Unnecessary parentheses around expression.
   3 |     <div>
   4 |         <p />
   5 |     </div>
   6 | )
   7 | const Component = (
   8 |     <div
   9 |         prop={true}
  10 |     />
  11 | )
  12 |       
```

<!-- prettier-ignore -->
```tsx
   1 |
   2 | const Component = (
   3 |     <div>
   4 |         <p />
   5 |     </div>
   6 | )
>  7 | const Component = (
     |                   ^ Unnecessary parentheses around expression.
   8 |     <div
   9 |         prop={true}
  10 |     />
  11 | )
  12 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```tsx

((function foo() {}))();
      
```

### Fix Output

<!-- prettier-ignore -->
```tsx

(function foo() {})();
      
```

### Errors

<!-- prettier-ignore -->
```tsx
  1 |
> 2 | ((function foo() {}))();
    |  ^ Unnecessary parentheses around expression.
  3 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```tsx

var y = (function () {return 1;});
      
```

### Fix Output

<!-- prettier-ignore -->
```tsx

var y = function () {return 1;};
      
```

### Errors

<!-- prettier-ignore -->
```tsx
  1 |
> 2 | var y = (function () {return 1;});
    |         ^ Unnecessary parentheses around expression.
  3 |       
```
