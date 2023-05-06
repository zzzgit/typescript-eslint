# brace-style

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

if (f) {
  bar;
}
else
  baz;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

if (f) {
  bar;
} else
  baz;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | if (f) {
  3 |   bar;
> 4 | }
    | ^ Closing curly brace does not appear on the same line as the subsequent block.
  5 | else
  6 |   baz;
  7 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
var foo = () => { return; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
var foo = () => {
 return; 
}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var foo = () => { return; }
    |                 ^ Statement inside of curly braces should be on next line.
```

<!-- prettier-ignore -->
```ts
> 1 | var foo = () => { return; }
    |                           ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
function foo() { return; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo() {
 return; 
}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo() { return; }
    |                ^ Statement inside of curly braces should be on next line.
```

<!-- prettier-ignore -->
```ts
> 1 | function foo() { return; }
    |                          ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
function foo() 
 { 
 return; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo() { 
 return; 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function foo() 
> 2 |  { 
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
  3 |  return; }
```

<!-- prettier-ignore -->
```ts
  1 | function foo() 
  2 |  { 
> 3 |  return; }
    |          ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
!function foo() 
 { 
 return; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
!function foo() { 
 return; 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | !function foo() 
> 2 |  { 
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
  3 |  return; }
```

<!-- prettier-ignore -->
```ts
  1 | !function foo() 
  2 |  { 
> 3 |  return; }
    |          ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) 
 { 
 bar(); }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo) { 
 bar(); 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if (foo) 
> 2 |  { 
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
  3 |  bar(); }
```

<!-- prettier-ignore -->
```ts
  1 | if (foo) 
  2 |  { 
> 3 |  bar(); }
    |         ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
if (a) { 
b();
 } else 
 { c(); }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (a) { 
b();
 } else {
 c(); 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if (a) { 
  2 | b();
  3 |  } else 
> 4 |  { c(); }
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
```

<!-- prettier-ignore -->
```ts
  1 | if (a) { 
  2 | b();
  3 |  } else 
> 4 |  { c(); }
    |  ^ Statement inside of curly braces should be on next line.
```

<!-- prettier-ignore -->
```ts
  1 | if (a) { 
  2 | b();
  3 |  } else 
> 4 |  { c(); }
    |         ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
while (foo) 
 { 
 bar(); }
```

### Fix Output

<!-- prettier-ignore -->
```ts
while (foo) { 
 bar(); 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | while (foo) 
> 2 |  { 
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
  3 |  bar(); }
```

<!-- prettier-ignore -->
```ts
  1 | while (foo) 
  2 |  { 
> 3 |  bar(); }
    |         ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
for (;;) 
 { 
 bar(); }
```

### Fix Output

<!-- prettier-ignore -->
```ts
for (;;) { 
 bar(); 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | for (;;) 
> 2 |  { 
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
  3 |  bar(); }
```

<!-- prettier-ignore -->
```ts
  1 | for (;;) 
  2 |  { 
> 3 |  bar(); }
    |         ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
with (foo) 
 { 
 bar(); }
```

### Fix Output

<!-- prettier-ignore -->
```ts
with (foo) { 
 bar(); 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | with (foo) 
> 2 |  { 
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
  3 |  bar(); }
```

<!-- prettier-ignore -->
```ts
  1 | with (foo) 
  2 |  { 
> 3 |  bar(); }
    |         ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
switch (foo) 
 { 
 case 'bar': break; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch (foo) { 
 case 'bar': break; 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | switch (foo) 
> 2 |  { 
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
  3 |  case 'bar': break; }
```

<!-- prettier-ignore -->
```ts
  1 | switch (foo) 
  2 |  { 
> 3 |  case 'bar': break; }
    |                     ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
switch (foo) 
 { }
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch (foo) { }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | switch (foo) 
> 2 |  { }
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
try 
 { 
 bar(); 
 } catch (e) {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 } catch (e) {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try 
> 2 |  { 
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
  3 |  bar(); 
  4 |  } catch (e) {}
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 } catch (e) 
 {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 } catch (e) {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try { 
  2 |  bar(); 
  3 |  } catch (e) 
> 4 |  {}
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
do 
 { 
 bar(); 
} while (true)
```

### Fix Output

<!-- prettier-ignore -->
```ts
do { 
 bar(); 
} while (true)
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | do 
> 2 |  { 
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
  3 |  bar(); 
  4 | } while (true)
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
for (foo in bar) 
 { 
 baz(); 
 }
```

### Fix Output

<!-- prettier-ignore -->
```ts
for (foo in bar) { 
 baz(); 
 }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | for (foo in bar) 
> 2 |  { 
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
  3 |  baz(); 
  4 |  }
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
for (foo of bar) 
 { 
 baz(); 
 }
```

### Fix Output

<!-- prettier-ignore -->
```ts
for (foo of bar) { 
 baz(); 
 }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | for (foo of bar) 
> 2 |  { 
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
  3 |  baz(); 
  4 |  }
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 }
catch (e) {
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 } catch (e) {
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try { 
  2 |  bar(); 
> 3 |  }
    |  ^ Closing curly brace does not appear on the same line as the subsequent block.
  4 | catch (e) {
  5 | }
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 } catch (e) {
}
 finally {
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 } catch (e) {
} finally {
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try { 
  2 |  bar(); 
  3 |  } catch (e) {
> 4 | }
    | ^ Closing curly brace does not appear on the same line as the subsequent block.
  5 |  finally {
  6 | }
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
if (a) { 
b();
 } 
 else { 
c();
 }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (a) { 
b();
 } else { 
c();
 }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if (a) { 
  2 | b();
> 3 |  } 
    |  ^ Closing curly brace does not appear on the same line as the subsequent block.
  4 |  else { 
  5 | c();
  6 |  }
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 }
catch (e) {
} finally {
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 }
catch (e) {
}
 finally {
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try { 
  2 |  bar(); 
  3 |  }
  4 | catch (e) {
> 5 | } finally {
    | ^ Closing curly brace appears on the same line as the subsequent block.
  6 | }
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 } catch (e) {
}
 finally {
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 }
 catch (e) {
}
 finally {
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try { 
  2 |  bar(); 
> 3 |  } catch (e) {
    |  ^ Closing curly brace appears on the same line as the subsequent block.
  4 | }
  5 |  finally {
  6 | }
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
if (a) { 
b();
 } else { 
c();
 }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (a) { 
b();
 }
 else { 
c();
 }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if (a) { 
  2 | b();
> 3 |  } else { 
    |  ^ Closing curly brace appears on the same line as the subsequent block.
  4 | c();
  5 |  }
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) {
baz();
} else if (bar) {
baz();
}
else {
qux();
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo) {
baz();
}
 else if (bar) {
baz();
}
else {
qux();
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if (foo) {
  2 | baz();
> 3 | } else if (bar) {
    | ^ Closing curly brace appears on the same line as the subsequent block.
  4 | baz();
  5 | }
  6 | else {
  7 | qux();
  8 | }
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) {
poop();
} 
else if (bar) {
baz();
} else if (thing) {
boom();
}
else {
qux();
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo) {
poop();
} 
else if (bar) {
baz();
}
 else if (thing) {
boom();
}
else {
qux();
}
```

### Errors

<!-- prettier-ignore -->
```ts
   1 | if (foo) {
   2 | poop();
   3 | } 
   4 | else if (bar) {
   5 | baz();
>  6 | } else if (thing) {
     | ^ Closing curly brace appears on the same line as the subsequent block.
   7 | boom();
   8 | }
   9 | else {
  10 | qux();
  11 | }
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 }
 catch (e) {
}
 finally {
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
try 
{ 
 bar(); 
 }
 catch (e) 
{
}
 finally 
{
}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | try { 
    |     ^ Opening curly brace appears on the same line as controlling statement.
  2 |  bar(); 
  3 |  }
  4 |  catch (e) {
  5 | }
  6 |  finally {
  7 | }
```

<!-- prettier-ignore -->
```ts
  1 | try { 
  2 |  bar(); 
  3 |  }
> 4 |  catch (e) {
    |            ^ Opening curly brace appears on the same line as controlling statement.
  5 | }
  6 |  finally {
  7 | }
```

<!-- prettier-ignore -->
```ts
  1 | try { 
  2 |  bar(); 
  3 |  }
  4 |  catch (e) {
  5 | }
> 6 |  finally {
    |          ^ Opening curly brace appears on the same line as controlling statement.
  7 | }
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
switch(x) { case 1: 
bar(); }
 
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch(x) 
{
 case 1: 
bar(); 
}
 
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | switch(x) { case 1: 
    |           ^ Opening curly brace appears on the same line as controlling statement.
  2 | bar(); }
  3 |  
```

<!-- prettier-ignore -->
```ts
> 1 | switch(x) { case 1: 
    |           ^ Statement inside of curly braces should be on next line.
  2 | bar(); }
  3 |  
```

<!-- prettier-ignore -->
```ts
  1 | switch(x) { case 1: 
> 2 | bar(); }
    |        ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
  3 |  
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
if (a) { 
b();
 } else { 
c();
 }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (a) 
{ 
b();
 }
 else 
{ 
c();
 }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (a) { 
    |        ^ Opening curly brace appears on the same line as controlling statement.
  2 | b();
  3 |  } else { 
  4 | c();
  5 |  }
```

<!-- prettier-ignore -->
```ts
  1 | if (a) { 
  2 | b();
> 3 |  } else { 
    |  ^ Closing curly brace appears on the same line as the subsequent block.
  4 | c();
  5 |  }
```

<!-- prettier-ignore -->
```ts
  1 | if (a) { 
  2 | b();
> 3 |  } else { 
    |         ^ Opening curly brace appears on the same line as controlling statement.
  4 | c();
  5 |  }
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) {
baz();
} else if (bar) {
baz();
}
else {
qux();
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo) 
{
baz();
}
 else if (bar) 
{
baz();
}
else 
{
qux();
}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (foo) {
    |          ^ Opening curly brace appears on the same line as controlling statement.
  2 | baz();
  3 | } else if (bar) {
  4 | baz();
  5 | }
  6 | else {
  7 | qux();
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 | if (foo) {
  2 | baz();
> 3 | } else if (bar) {
    | ^ Closing curly brace appears on the same line as the subsequent block.
  4 | baz();
  5 | }
  6 | else {
  7 | qux();
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 | if (foo) {
  2 | baz();
> 3 | } else if (bar) {
    |                 ^ Opening curly brace appears on the same line as controlling statement.
  4 | baz();
  5 | }
  6 | else {
  7 | qux();
  8 | }
```

<!-- prettier-ignore -->
```ts
  1 | if (foo) {
  2 | baz();
  3 | } else if (bar) {
  4 | baz();
  5 | }
> 6 | else {
    |      ^ Opening curly brace appears on the same line as controlling statement.
  7 | qux();
  8 | }
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
if (foo)
{ poop();
} 
else if (bar) {
baz();
} else if (thing) {
boom();
}
else {
qux();
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo)
{
 poop();
} 
else if (bar) 
{
baz();
}
 else if (thing) 
{
boom();
}
else 
{
qux();
}
```

### Errors

<!-- prettier-ignore -->
```ts
   1 | if (foo)
>  2 | { poop();
     | ^ Statement inside of curly braces should be on next line.
   3 | } 
   4 | else if (bar) {
   5 | baz();
   6 | } else if (thing) {
   7 | boom();
   8 | }
   9 | else {
  10 | qux();
  11 | }
```

<!-- prettier-ignore -->
```ts
   1 | if (foo)
   2 | { poop();
   3 | } 
>  4 | else if (bar) {
     |               ^ Opening curly brace appears on the same line as controlling statement.
   5 | baz();
   6 | } else if (thing) {
   7 | boom();
   8 | }
   9 | else {
  10 | qux();
  11 | }
```

<!-- prettier-ignore -->
```ts
   1 | if (foo)
   2 | { poop();
   3 | } 
   4 | else if (bar) {
   5 | baz();
>  6 | } else if (thing) {
     | ^ Closing curly brace appears on the same line as the subsequent block.
   7 | boom();
   8 | }
   9 | else {
  10 | qux();
  11 | }
```

<!-- prettier-ignore -->
```ts
   1 | if (foo)
   2 | { poop();
   3 | } 
   4 | else if (bar) {
   5 | baz();
>  6 | } else if (thing) {
     |                   ^ Opening curly brace appears on the same line as controlling statement.
   7 | boom();
   8 | }
   9 | else {
  10 | qux();
  11 | }
```

<!-- prettier-ignore -->
```ts
   1 | if (foo)
   2 | { poop();
   3 | } 
   4 | else if (bar) {
   5 | baz();
   6 | } else if (thing) {
   7 | boom();
   8 | }
>  9 | else {
     |      ^ Opening curly brace appears on the same line as controlling statement.
  10 | qux();
  11 | }
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
if (foo)
{
  bar(); }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo)
{
  bar(); 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if (foo)
  2 | {
> 3 |   bar(); }
    |          ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
try
{
  somethingRisky();
} catch (e)
{
  handleError()
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
try
{
  somethingRisky();
}
 catch (e)
{
  handleError()
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try
  2 | {
  3 |   somethingRisky();
> 4 | } catch (e)
    | ^ Closing curly brace appears on the same line as the subsequent block.
  5 | {
  6 |   handleError()
  7 | }
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
function foo() { return; 
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo() {
 return; 
}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo() { return; 
    |                ^ Statement inside of curly braces should be on next line.
  2 | }
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
function foo() { a(); b(); return; 
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo() {
 a(); b(); return; 
}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function foo() { a(); b(); return; 
    |                ^ Statement inside of curly braces should be on next line.
  2 | }
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts
function foo() { 
 return; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo() { 
 return; 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function foo() { 
> 2 |  return; }
    |          ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts
function foo() {
a();
b();
return; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo() {
a();
b();
return; 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function foo() {
  2 | a();
  3 | b();
> 4 | return; }
    |         ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts
!function foo() { 
 return; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
!function foo() { 
 return; 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | !function foo() { 
> 2 |  return; }
    |          ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts
if (a) { b();
 } else { c(); }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (a) {
 b();
 } else { c(); }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (a) { b();
    |        ^ Statement inside of curly braces should be on next line.
  2 |  } else { c(); }
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts
if (a) { b(); }
else { c(); }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (a) { b(); } else { c(); }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (a) { b(); }
    |               ^ Closing curly brace does not appear on the same line as the subsequent block.
  2 | else { c(); }
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts
while (foo) { 
 bar(); }
```

### Fix Output

<!-- prettier-ignore -->
```ts
while (foo) { 
 bar(); 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | while (foo) { 
> 2 |  bar(); }
    |         ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts
for (;;) { bar(); 
 }
```

### Fix Output

<!-- prettier-ignore -->
```ts
for (;;) {
 bar(); 
 }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | for (;;) { bar(); 
    |          ^ Statement inside of curly braces should be on next line.
  2 |  }
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts
with (foo) { bar(); 
 }
```

### Fix Output

<!-- prettier-ignore -->
```ts
with (foo) {
 bar(); 
 }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | with (foo) { bar(); 
    |            ^ Statement inside of curly braces should be on next line.
  2 |  }
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts
switch (foo) 
 { 
 case `bar`: break; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch (foo) { 
 case `bar`: break; 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | switch (foo) 
> 2 |  { 
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
  3 |  case `bar`: break; }
```

<!-- prettier-ignore -->
```ts
  1 | switch (foo) 
  2 |  { 
> 3 |  case `bar`: break; }
    |                     ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts
switch (foo) 
 { }
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch (foo) { }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | switch (foo) 
> 2 |  { }
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts
try {  bar(); }
catch (e) { baz();  }
```

### Fix Output

<!-- prettier-ignore -->
```ts
try {  bar(); } catch (e) { baz();  }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | try {  bar(); }
    |               ^ Closing curly brace does not appear on the same line as the subsequent block.
  2 | catch (e) { baz();  }
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts
try 
 { 
 bar(); 
 } catch (e) {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 } catch (e) {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try 
> 2 |  { 
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
  3 |  bar(); 
  4 |  } catch (e) {}
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 } catch (e) 
 {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 } catch (e) {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try { 
  2 |  bar(); 
  3 |  } catch (e) 
> 4 |  {}
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts
do 
 { 
 bar(); 
} while (true)
```

### Fix Output

<!-- prettier-ignore -->
```ts
do { 
 bar(); 
} while (true)
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | do 
> 2 |  { 
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
  3 |  bar(); 
  4 | } while (true)
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts
for (foo in bar) 
 { 
 baz(); 
 }
```

### Fix Output

<!-- prettier-ignore -->
```ts
for (foo in bar) { 
 baz(); 
 }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | for (foo in bar) 
> 2 |  { 
    |  ^ Opening curly brace does not appear on the same line as controlling statement.
  3 |  baz(); 
  4 |  }
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 }
catch (e) {
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 } catch (e) {
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try { 
  2 |  bar(); 
> 3 |  }
    |  ^ Closing curly brace does not appear on the same line as the subsequent block.
  4 | catch (e) {
  5 | }
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 } catch (e) {
}
 finally {
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 } catch (e) {
} finally {
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try { 
  2 |  bar(); 
  3 |  } catch (e) {
> 4 | }
    | ^ Closing curly brace does not appear on the same line as the subsequent block.
  5 |  finally {
  6 | }
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts
if (a) { 
b();
 } 
 else { 
c();
 }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (a) { 
b();
 } else { 
c();
 }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if (a) { 
  2 | b();
> 3 |  } 
    |  ^ Closing curly brace does not appear on the same line as the subsequent block.
  4 |  else { 
  5 | c();
  6 |  }
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 }
catch (e) {
} finally {
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 }
catch (e) {
}
 finally {
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try { 
  2 |  bar(); 
  3 |  }
  4 | catch (e) {
> 5 | } finally {
    | ^ Closing curly brace appears on the same line as the subsequent block.
  6 | }
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 } catch (e) {
}
 finally {
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
try { 
 bar(); 
 }
 catch (e) {
}
 finally {
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try { 
  2 |  bar(); 
> 3 |  } catch (e) {
    |  ^ Closing curly brace appears on the same line as the subsequent block.
  4 | }
  5 |  finally {
  6 | }
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts
if (a) { 
b();
 } else { 
c();
 }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (a) { 
b();
 }
 else { 
c();
 }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if (a) { 
  2 | b();
> 3 |  } else { 
    |  ^ Closing curly brace appears on the same line as the subsequent block.
  4 | c();
  5 |  }
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts
if (foo)
{ poop();
} 
else if (bar) {
baz();
} else if (thing) {
boom();
}
else {
qux();
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo)
{
 poop();
} 
else if (bar) 
{
baz();
}
 else if (thing) 
{
boom();
}
else 
{
qux();
}
```

### Errors

<!-- prettier-ignore -->
```ts
   1 | if (foo)
>  2 | { poop();
     | ^ Statement inside of curly braces should be on next line.
   3 | } 
   4 | else if (bar) {
   5 | baz();
   6 | } else if (thing) {
   7 | boom();
   8 | }
   9 | else {
  10 | qux();
  11 | }
```

<!-- prettier-ignore -->
```ts
   1 | if (foo)
   2 | { poop();
   3 | } 
>  4 | else if (bar) {
     |               ^ Opening curly brace appears on the same line as controlling statement.
   5 | baz();
   6 | } else if (thing) {
   7 | boom();
   8 | }
   9 | else {
  10 | qux();
  11 | }
```

<!-- prettier-ignore -->
```ts
   1 | if (foo)
   2 | { poop();
   3 | } 
   4 | else if (bar) {
   5 | baz();
>  6 | } else if (thing) {
     | ^ Closing curly brace appears on the same line as the subsequent block.
   7 | boom();
   8 | }
   9 | else {
  10 | qux();
  11 | }
```

<!-- prettier-ignore -->
```ts
   1 | if (foo)
   2 | { poop();
   3 | } 
   4 | else if (bar) {
   5 | baz();
>  6 | } else if (thing) {
     |                   ^ Opening curly brace appears on the same line as controlling statement.
   7 | boom();
   8 | }
   9 | else {
  10 | qux();
  11 | }
```

<!-- prettier-ignore -->
```ts
   1 | if (foo)
   2 | { poop();
   3 | } 
   4 | else if (bar) {
   5 | baz();
   6 | } else if (thing) {
   7 | boom();
   8 | }
>  9 | else {
     |      ^ Opening curly brace appears on the same line as controlling statement.
  10 | qux();
  11 | }
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) // comment 
{
bar();
}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 | if (foo) // comment 
> 2 | {
    | ^ Opening curly brace does not appear on the same line as controlling statement.
  3 | bar();
  4 | }
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) {
 bar
.baz }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo) {
 bar
.baz 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if (foo) {
  2 |  bar
> 3 | .baz }
    |      ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts
if (foo)
{
 bar
.baz }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo)
{
 bar
.baz 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if (foo)
  2 | {
  3 |  bar
> 4 | .baz }
    |      ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) { bar
.baz }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo) {
 bar
.baz 
}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (foo) { bar
    |          ^ Statement inside of curly braces should be on next line.
  2 | .baz }
```

<!-- prettier-ignore -->
```ts
  1 | if (foo) { bar
> 2 | .baz }
    |      ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts
if (foo) { bar
.baz }
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (foo) 
{
 bar
.baz 
}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (foo) { bar
    |          ^ Opening curly brace appears on the same line as controlling statement.
  2 | .baz }
```

<!-- prettier-ignore -->
```ts
> 1 | if (foo) { bar
    |          ^ Statement inside of curly braces should be on next line.
  2 | .baz }
```

<!-- prettier-ignore -->
```ts
  1 | if (foo) { bar
> 2 | .baz }
    |      ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts
switch (x) {
 case 1: foo() }
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch (x) {
 case 1: foo() 
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | switch (x) {
> 2 |  case 1: foo() }
    |                ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts
class Foo
{
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
class Foo {
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | class Foo
> 2 | {
    | ^ Opening curly brace does not appear on the same line as controlling statement.
  3 | }
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts
(class
{
})
```

### Fix Output

<!-- prettier-ignore -->
```ts
(class {
})
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | (class
> 2 | {
    | ^ Opening curly brace does not appear on the same line as controlling statement.
  3 | })
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts
class Foo{
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
class Foo
{
}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | class Foo{
    |          ^ Opening curly brace appears on the same line as controlling statement.
  2 | }
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts
(class {
})
```

### Fix Output

<!-- prettier-ignore -->
```ts
(class 
{
})
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (class {
    |        ^ Opening curly brace appears on the same line as controlling statement.
  2 | })
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts
class Foo {
bar() {
}}
```

### Fix Output

<!-- prettier-ignore -->
```ts
class Foo {
bar() {
}
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | class Foo {
  2 | bar() {
> 3 | }}
    |  ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #68

### Test Code

<!-- prettier-ignore -->
```ts
(class Foo {
bar() {
}})
```

### Fix Output

<!-- prettier-ignore -->
```ts
(class Foo {
bar() {
}
})
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | (class Foo {
  2 | bar() {
> 3 | }})
    |  ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```

## Test #69

### Test Code

<!-- prettier-ignore -->
```ts
class
Foo{}
```

### Fix Output

<!-- prettier-ignore -->
```ts
class
Foo
{}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | class
> 2 | Foo{}
    |    ^ Opening curly brace appears on the same line as controlling statement.
```

## Test #70

### Test Code

<!-- prettier-ignore -->
```ts

if (foo)
{
  bar
}
else {
  baz
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

if (foo) {
  bar
} else {
  baz
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | if (foo)
> 3 | {
    | ^ Opening curly brace does not appear on the same line as controlling statement.
  4 |   bar
  5 | }
  6 | else {
  7 |   baz
  8 | }
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | if (foo)
  3 | {
  4 |   bar
> 5 | }
    | ^ Closing curly brace does not appear on the same line as the subsequent block.
  6 | else {
  7 |   baz
  8 | }
  9 |       
```

## Test #71

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo
{
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo
> 3 | {
    | ^ Opening curly brace does not appear on the same line as controlling statement.
  4 | }
  5 |       
```

## Test #72

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo
{
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Foo {
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo
> 3 | {
    | ^ Opening curly brace does not appear on the same line as controlling statement.
  4 | }
  5 |       
```

## Test #73

### Test Code

<!-- prettier-ignore -->
```ts
interface Foo { 
 }
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface Foo 
{ 
 }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Foo { 
    |               ^ Opening curly brace appears on the same line as controlling statement.
  2 |  }
```

## Test #74

### Test Code

<!-- prettier-ignore -->
```ts

module "Foo"
{
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

module "Foo" {
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | module "Foo"
> 3 | {
    | ^ Opening curly brace does not appear on the same line as controlling statement.
  4 | }
  5 |       
```

## Test #75

### Test Code

<!-- prettier-ignore -->
```ts

module "Foo"
{
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

module "Foo" {
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | module "Foo"
> 3 | {
    | ^ Opening curly brace does not appear on the same line as controlling statement.
  4 | }
  5 |       
```

## Test #76

### Test Code

<!-- prettier-ignore -->
```ts
module "Foo" { 
 }
```

### Fix Output

<!-- prettier-ignore -->
```ts
module "Foo" 
{ 
 }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | module "Foo" { 
    |              ^ Opening curly brace appears on the same line as controlling statement.
  2 |  }
```

## Test #77

### Test Code

<!-- prettier-ignore -->
```ts

namespace Foo
{
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

namespace Foo {
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace Foo
> 3 | {
    | ^ Opening curly brace does not appear on the same line as controlling statement.
  4 | }
  5 |       
```

## Test #78

### Test Code

<!-- prettier-ignore -->
```ts

namespace Foo
{
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

namespace Foo {
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | namespace Foo
> 3 | {
    | ^ Opening curly brace does not appear on the same line as controlling statement.
  4 | }
  5 |       
```

## Test #79

### Test Code

<!-- prettier-ignore -->
```ts
namespace Foo { 
 }
```

### Fix Output

<!-- prettier-ignore -->
```ts
namespace Foo 
{ 
 }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | namespace Foo { 
    |               ^ Opening curly brace appears on the same line as controlling statement.
  2 |  }
```

## Test #80

### Test Code

<!-- prettier-ignore -->
```ts

enum Foo
{
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

enum Foo {
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum Foo
> 3 | {
    | ^ Opening curly brace does not appear on the same line as controlling statement.
  4 | }
  5 |       
```

## Test #81

### Test Code

<!-- prettier-ignore -->
```ts

enum Foo
{
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

enum Foo {
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum Foo
> 3 | {
    | ^ Opening curly brace does not appear on the same line as controlling statement.
  4 | }
  5 |       
```

## Test #82

### Test Code

<!-- prettier-ignore -->
```ts
enum Foo { A }
```

### Fix Output

<!-- prettier-ignore -->
```ts
enum Foo 
{
 A 
}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | enum Foo { A }
    |          ^ Opening curly brace appears on the same line as controlling statement.
```

<!-- prettier-ignore -->
```ts
> 1 | enum Foo { A }
    |          ^ Statement inside of curly braces should be on next line.
```

<!-- prettier-ignore -->
```ts
> 1 | enum Foo { A }
    |              ^ Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.
```
