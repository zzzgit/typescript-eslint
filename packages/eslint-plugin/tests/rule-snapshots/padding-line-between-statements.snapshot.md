# padding-line-between-statements

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
foo();

foo();
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo();
foo();
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | foo();
  2 |
> 3 | foo();
    | ^^^^^^ Unexpected blank line before this statement.
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
foo();

//comment
foo();
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo();
//comment
foo();
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | foo();
  2 |
  3 | //comment
> 4 | foo();
    | ^^^^^^ Unexpected blank line before this statement.
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
    foo();
    
    //comment
    foo();
```

### Fix Output

<!-- prettier-ignore -->
```ts
    foo();
    //comment
    foo();
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |     foo();
  2 |     
  3 |     //comment
> 4 |     foo();
    |     ^^^^^^ Unexpected blank line before this statement.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
if (a) {}

for (;;) {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (a) {}
for (;;) {}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if (a) {}
  2 |
> 3 | for (;;) {}
    | ^^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
foo();
foo();
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo();

foo();
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | foo();
> 2 | foo();
    | ^^^^^^ Expected blank line before this statement.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
    function a() {}
    do {} while (a)
```

### Fix Output

<!-- prettier-ignore -->
```ts
    function a() {}

    do {} while (a)
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |     function a() {}
> 2 |     do {} while (a)
    |     ^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
foo();//trailing-comment
//comment
//comment
foo();
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo();//trailing-comment

//comment
//comment
foo();
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | foo();//trailing-comment
  2 | //comment
  3 | //comment
> 4 | foo();
    | ^^^^^^ Expected blank line before this statement.
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
{}

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
{}
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | {}
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
{}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
{}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | {}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
if(a){}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(a){}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if(a){}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
if(a){}else{}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(a){}else{}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if(a){}else{}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
if(a){}else if(b){}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(a){}else if(b){}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if(a){}else if(b){}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
if(a){}else if(b){}else{}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(a){}else if(b){}else{}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if(a){}else if(b){}else{}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
switch(a){}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch(a){}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | switch(a){}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
switch(a){case 0:}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch(a){case 0:}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | switch(a){case 0:}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
try{}catch(e){}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
try{}catch(e){}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try{}catch(e){}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
try{}finally{}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
try{}finally{}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try{}finally{}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
try{}catch(e){}finally{}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
try{}catch(e){}finally{}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try{}catch(e){}finally{}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
while(a){}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
while(a){}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | while(a){}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
do{}while(a)
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
do{}while(a)

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | do{}while(a)
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
for(;;){}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
for(;;){}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | for(;;){}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
for(a in b){}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
for(a in b){}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | for(a in b){}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
for(a of b){}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
for(a of b){}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | for(a of b){}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
a=function(){}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
a=function(){}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | a=function(){}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
a=()=>{}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
a=()=>{}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | a=()=>{}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
function a(){}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a(){}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a(){}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
let a=function(){}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a=function(){}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | let a=function(){}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
module.exports=1

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
module.exports=1
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | module.exports=1
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
module.exports=1
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
module.exports=1

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | module.exports=1
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
module.exports.foo=1
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
module.exports.foo=1

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | module.exports.foo=1
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
module.exports[foo]=1
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
module.exports[foo]=1

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | module.exports[foo]=1
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
exports.foo=1
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
exports.foo=1

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | exports.foo=1
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
exports[foo]=1
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
exports[foo]=1

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | exports[foo]=1
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
const foo=require("foo")

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
const foo=require("foo")
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const foo=require("foo")
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts
const foo=require("foo")
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
const foo=require("foo")

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const foo=require("foo")
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts
const foo=require("foo").Foo
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
const foo=require("foo").Foo

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const foo=require("foo").Foo
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts
const foo=require("foo")[a]
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
const foo=require("foo")[a]

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const foo=require("foo")[a]
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts
"use strict"

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
"use strict"
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | "use strict"
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts
"use strict"
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
"use strict"

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | "use strict"
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts
'use strict'
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
'use strict'

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | 'use strict'
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts
'use asm'
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
'use asm'

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | 'use asm'
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts
{
}

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
{
}
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | {
  2 | }
  3 |
> 4 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts
{
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
{
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | {
  2 | }
> 3 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts
if(a){
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(a){
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if(a){
  2 | }
> 3 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts
if(a){
}else{
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(a){
}else{
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if(a){
  2 | }else{
  3 | }
> 4 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts
if(a){
}else if(b){
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(a){
}else if(b){
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if(a){
  2 | }else if(b){
  3 | }
> 4 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts
if(a){
}else if(b){
}else{
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(a){
}else if(b){
}else{
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if(a){
  2 | }else if(b){
  3 | }else{
  4 | }
> 5 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts
switch(a){
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch(a){
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | switch(a){
  2 | }
> 3 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts
try{
}catch(e){
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
try{
}catch(e){
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try{
  2 | }catch(e){
  3 | }
> 4 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts
try{
}finally{
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
try{
}finally{
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try{
  2 | }finally{
  3 | }
> 4 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts
try{
}catch(e){
}finally{
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
try{
}catch(e){
}finally{
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try{
  2 | }catch(e){
  3 | }finally{
  4 | }
> 5 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts
while(a){
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
while(a){
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | while(a){
  2 | }
> 3 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts
do{
}while(a)
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
do{
}while(a)

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | do{
  2 | }while(a)
> 3 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts
for(;;){
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
for(;;){
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | for(;;){
  2 | }
> 3 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts
for(a in b){
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
for(a in b){
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | for(a in b){
  2 | }
> 3 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts
for(a of b){
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
for(a of b){
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | for(a of b){
  2 | }
> 3 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts
a=function(){
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
a=function(){
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | a=function(){
  2 | }
> 3 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts
a=()=>{
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
a=()=>{
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | a=()=>{
  2 | }
> 3 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts
function a(){
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a(){
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a(){
  2 | }
> 3 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts
let a=function(){
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a=function(){
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | let a=function(){
  2 | }
> 3 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts
{}

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
{}
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | {}
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts
{}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
{}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | {}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts
;

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
;
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | ;
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts
;
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
;

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | ;
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts
foo()

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo()
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | foo()
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts
foo()
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo()

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | foo()
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts
foo()

foo(
	x,
	y
)
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo()
foo(
	x,
	y
)
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | foo()
  2 |
> 3 | foo(
    | ^^^^
> 4 | 	x,
    | ^^^
> 5 | 	y
    | ^^^
> 6 | )
    | ^^ Unexpected blank line before this statement.
```

## Test #68

### Test Code

<!-- prettier-ignore -->
```ts
foo()
foo(
	x,
	y
)
```

### Fix Output

<!-- prettier-ignore -->
```ts
foo()

foo(
	x,
	y
)
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | foo()
> 2 | foo(
    | ^^^^
> 3 | 	x,
    | ^^^
> 4 | 	y
    | ^^^
> 5 | )
    | ^^ Expected blank line before this statement.
```

## Test #69

### Test Code

<!-- prettier-ignore -->
```ts
() => {
	someArray.forEach(
		x => doSomething(x)
	);
	return theThing;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
() => {
	someArray.forEach(
		x => doSomething(x)
	);

	return theThing;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | () => {
  2 | 	someArray.forEach(
  3 | 		x => doSomething(x)
  4 | 	);
> 5 | 	return theThing;
    | 	^^^^^^^^^^^^^^^^ Expected blank line before this statement.
  6 | }
```

## Test #70

### Test Code

<!-- prettier-ignore -->
```ts
while(a){break

foo()}
```

### Fix Output

<!-- prettier-ignore -->
```ts
while(a){break
foo()}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | while(a){break
  2 |
> 3 | foo()}
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #71

### Test Code

<!-- prettier-ignore -->
```ts
switch(a){case 0:break

foo()}
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch(a){case 0:break
foo()}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | switch(a){case 0:break
  2 |
> 3 | foo()}
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #72

### Test Code

<!-- prettier-ignore -->
```ts
while(a){break
foo()}
```

### Fix Output

<!-- prettier-ignore -->
```ts
while(a){break

foo()}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | while(a){break
> 2 | foo()}
    | ^^^^^ Expected blank line before this statement.
```

## Test #73

### Test Code

<!-- prettier-ignore -->
```ts
switch(a){case 0:break
foo()}
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch(a){case 0:break

foo()}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | switch(a){case 0:break
> 2 | foo()}
    | ^^^^^ Expected blank line before this statement.
```

## Test #74

### Test Code

<!-- prettier-ignore -->
```ts
switch(a){case 0:
foo()

default:}
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch(a){case 0:
foo()
default:}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | switch(a){case 0:
  2 | foo()
  3 |
> 4 | default:}
    | ^^^^^^^^ Unexpected blank line before this statement.
```

## Test #75

### Test Code

<!-- prettier-ignore -->
```ts
switch(a){case 0:
foo()
default:}
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch(a){case 0:
foo()

default:}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | switch(a){case 0:
  2 | foo()
> 3 | default:}
    | ^^^^^^^^ Expected blank line before this statement.
```

## Test #76

### Test Code

<!-- prettier-ignore -->
```ts
class A{}

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
class A{}
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | class A{}
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #77

### Test Code

<!-- prettier-ignore -->
```ts
class A{}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
class A{}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | class A{}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #78

### Test Code

<!-- prettier-ignore -->
```ts
const a=1

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a=1
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const a=1
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #79

### Test Code

<!-- prettier-ignore -->
```ts
const a=1
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a=1

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const a=1
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #80

### Test Code

<!-- prettier-ignore -->
```ts
type a=number

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
type a=number
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | type a=number
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #81

### Test Code

<!-- prettier-ignore -->
```ts
type a=number
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
type a=number

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | type a=number
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #82

### Test Code

<!-- prettier-ignore -->
```ts
interface Test{
a:number;
}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
interface Test{
a:number;
}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | interface Test{
  2 | a:number;
  3 | }
> 4 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #83

### Test Code

<!-- prettier-ignore -->
```ts
while(a){continue

foo()}
```

### Fix Output

<!-- prettier-ignore -->
```ts
while(a){continue
foo()}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | while(a){continue
  2 |
> 3 | foo()}
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #84

### Test Code

<!-- prettier-ignore -->
```ts
while(a){continue
foo()}
```

### Fix Output

<!-- prettier-ignore -->
```ts
while(a){continue

foo()}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | while(a){continue
> 2 | foo()}
    | ^^^^^ Expected blank line before this statement.
```

## Test #85

### Test Code

<!-- prettier-ignore -->
```ts
debugger

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
debugger
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | debugger
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #86

### Test Code

<!-- prettier-ignore -->
```ts
debugger
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
debugger

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | debugger
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #87

### Test Code

<!-- prettier-ignore -->
```ts
switch(a){default:
foo()

case 0:}
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch(a){default:
foo()
case 0:}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | switch(a){default:
  2 | foo()
  3 |
> 4 | case 0:}
    | ^^^^^^^ Unexpected blank line before this statement.
```

## Test #88

### Test Code

<!-- prettier-ignore -->
```ts
switch(a){default:
foo()
case 0:}
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch(a){default:
foo()

case 0:}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | switch(a){default:
  2 | foo()
> 3 | case 0:}
    | ^^^^^^^ Expected blank line before this statement.
```

## Test #89

### Test Code

<!-- prettier-ignore -->
```ts
do;while(a)

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
do;while(a)
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | do;while(a)
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #90

### Test Code

<!-- prettier-ignore -->
```ts
do;while(a)
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
do;while(a)

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | do;while(a)
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #91

### Test Code

<!-- prettier-ignore -->
```ts
export default 1

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
export default 1
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | export default 1
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #92

### Test Code

<!-- prettier-ignore -->
```ts
export let a=1

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
export let a=1
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | export let a=1
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #93

### Test Code

<!-- prettier-ignore -->
```ts
var a = 0;export {a}

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a = 0;export {a}
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a = 0;export {a}
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #94

### Test Code

<!-- prettier-ignore -->
```ts
export default 1
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
export default 1

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | export default 1
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #95

### Test Code

<!-- prettier-ignore -->
```ts
export let a=1
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
export let a=1

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | export let a=1
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #96

### Test Code

<!-- prettier-ignore -->
```ts
var a = 0;export {a}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a = 0;export {a}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a = 0;export {a}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #97

### Test Code

<!-- prettier-ignore -->
```ts
for(;;);

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
for(;;);
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | for(;;);
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #98

### Test Code

<!-- prettier-ignore -->
```ts
for(a in b);

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
for(a in b);
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | for(a in b);
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #99

### Test Code

<!-- prettier-ignore -->
```ts
for(a of b);

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
for(a of b);
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | for(a of b);
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #100

### Test Code

<!-- prettier-ignore -->
```ts
for(;;);
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
for(;;);

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | for(;;);
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #101

### Test Code

<!-- prettier-ignore -->
```ts
for(a in b);
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
for(a in b);

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | for(a in b);
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #102

### Test Code

<!-- prettier-ignore -->
```ts
for(a of b);
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
for(a of b);

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | for(a of b);
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #103

### Test Code

<!-- prettier-ignore -->
```ts
function foo(){}

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo(){}
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function foo(){}
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #104

### Test Code

<!-- prettier-ignore -->
```ts
function foo(){}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo(){}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function foo(){}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #105

### Test Code

<!-- prettier-ignore -->
```ts
async function foo(){}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
async function foo(){}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | async function foo(){}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #106

### Test Code

<!-- prettier-ignore -->
```ts
if(a);

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(a);
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if(a);
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #107

### Test Code

<!-- prettier-ignore -->
```ts
if(a);else;

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(a);else;
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if(a);else;
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #108

### Test Code

<!-- prettier-ignore -->
```ts
if(a);
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(a);

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if(a);
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #109

### Test Code

<!-- prettier-ignore -->
```ts
if(a);else;
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(a);else;

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if(a);else;
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #110

### Test Code

<!-- prettier-ignore -->
```ts
(function(){
})()

var a = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
(function(){
})()
var a = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | (function(){
  2 | })()
  3 |
> 4 | var a = 2;
    | ^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #111

### Test Code

<!-- prettier-ignore -->
```ts
+(function(){
})()

var a = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
+(function(){
})()
var a = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | +(function(){
  2 | })()
  3 |
> 4 | var a = 2;
    | ^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #112

### Test Code

<!-- prettier-ignore -->
```ts
(function(){
})()
var a = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
(function(){
})()

var a = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | (function(){
  2 | })()
> 3 | var a = 2;
    | ^^^^^^^^^^ Expected blank line before this statement.
```

## Test #113

### Test Code

<!-- prettier-ignore -->
```ts
+(function(){
})()
var a = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
+(function(){
})()

var a = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | +(function(){
  2 | })()
> 3 | var a = 2;
    | ^^^^^^^^^^ Expected blank line before this statement.
```

## Test #114

### Test Code

<!-- prettier-ignore -->
```ts
(function(){
})?.()
var a = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
(function(){
})?.()

var a = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | (function(){
  2 | })?.()
> 3 | var a = 2;
    | ^^^^^^^^^^ Expected blank line before this statement.
```

## Test #115

### Test Code

<!-- prettier-ignore -->
```ts
void (function(){
})?.()
var a = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
void (function(){
})?.()

var a = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | void (function(){
  2 | })?.()
> 3 | var a = 2;
    | ^^^^^^^^^^ Expected blank line before this statement.
```

## Test #116

### Test Code

<!-- prettier-ignore -->
```ts
(1,2,3,function(){
})()
var a = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
(1,2,3,function(){
})()

var a = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | (1,2,3,function(){
  2 | })()
> 3 | var a = 2;
    | ^^^^^^^^^^ Expected blank line before this statement.
```

## Test #117

### Test Code

<!-- prettier-ignore -->
```ts
import a from 'a'

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
import a from 'a'
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | import a from 'a'
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #118

### Test Code

<!-- prettier-ignore -->
```ts
import * as a from 'a'

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
import * as a from 'a'
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | import * as a from 'a'
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #119

### Test Code

<!-- prettier-ignore -->
```ts
import {a} from 'a'

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
import {a} from 'a'
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | import {a} from 'a'
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #120

### Test Code

<!-- prettier-ignore -->
```ts
import a from 'a'
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
import a from 'a'

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | import a from 'a'
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #121

### Test Code

<!-- prettier-ignore -->
```ts
import * as a from 'a'
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
import * as a from 'a'

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | import * as a from 'a'
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #122

### Test Code

<!-- prettier-ignore -->
```ts
import {a} from 'a'
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
import {a} from 'a'

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | import {a} from 'a'
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #123

### Test Code

<!-- prettier-ignore -->
```ts
let a

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | let a
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #124

### Test Code

<!-- prettier-ignore -->
```ts
let a
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | let a
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #125

### Test Code

<!-- prettier-ignore -->
```ts
function foo(){return

foo()}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo(){return
foo()}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function foo(){return
  2 |
> 3 | foo()}
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #126

### Test Code

<!-- prettier-ignore -->
```ts
function foo(){return
foo()}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo(){return

foo()}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function foo(){return
> 2 | foo()}
    | ^^^^^ Expected blank line before this statement.
```

## Test #127

### Test Code

<!-- prettier-ignore -->
```ts
switch(a){}

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch(a){}
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | switch(a){}
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #128

### Test Code

<!-- prettier-ignore -->
```ts
switch(a){}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
switch(a){}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | switch(a){}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #129

### Test Code

<!-- prettier-ignore -->
```ts
throw a

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
throw a
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | throw a
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #130

### Test Code

<!-- prettier-ignore -->
```ts
throw a
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
throw a

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | throw a
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #131

### Test Code

<!-- prettier-ignore -->
```ts
try{}catch(e){}

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
try{}catch(e){}
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try{}catch(e){}
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #132

### Test Code

<!-- prettier-ignore -->
```ts
try{}finally{}

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
try{}finally{}
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try{}finally{}
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #133

### Test Code

<!-- prettier-ignore -->
```ts
try{}catch(e){}finally{}

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
try{}catch(e){}finally{}
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try{}catch(e){}finally{}
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #134

### Test Code

<!-- prettier-ignore -->
```ts
try{}catch(e){}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
try{}catch(e){}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try{}catch(e){}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #135

### Test Code

<!-- prettier-ignore -->
```ts
try{}finally{}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
try{}finally{}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try{}finally{}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #136

### Test Code

<!-- prettier-ignore -->
```ts
try{}catch(e){}finally{}
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
try{}catch(e){}finally{}

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | try{}catch(e){}finally{}
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #137

### Test Code

<!-- prettier-ignore -->
```ts
var a

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #138

### Test Code

<!-- prettier-ignore -->
```ts
var a
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #139

### Test Code

<!-- prettier-ignore -->
```ts
while(a);

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
while(a);
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | while(a);
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #140

### Test Code

<!-- prettier-ignore -->
```ts
while(a);
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
while(a);

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | while(a);
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #141

### Test Code

<!-- prettier-ignore -->
```ts
with(a);

foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
with(a);
foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | with(a);
  2 |
> 3 | foo()
    | ^^^^^ Unexpected blank line before this statement.
```

## Test #142

### Test Code

<!-- prettier-ignore -->
```ts
with(a);
foo()
```

### Fix Output

<!-- prettier-ignore -->
```ts
with(a);

foo()
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | with(a);
> 2 | foo()
    | ^^^^^ Expected blank line before this statement.
```

## Test #143

### Test Code

<!-- prettier-ignore -->
```ts
const a={
b:1,
c:2
}

const d=3
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a={
b:1,
c:2
}
const d=3
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const a={
  2 | b:1,
  3 | c:2
  4 | }
  5 |
> 6 | const d=3
    | ^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #144

### Test Code

<!-- prettier-ignore -->
```ts
const a={
b:1,
c:2
}
const d=3
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a={
b:1,
c:2
}

const d=3
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const a={
  2 | b:1,
  3 | c:2
  4 | }
> 5 | const d=3
    | ^^^^^^^^^ Expected blank line before this statement.
```

## Test #145

### Test Code

<!-- prettier-ignore -->
```ts
const a=1

const b={
c:2,
d:3
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a=1
const b={
c:2,
d:3
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const a=1
  2 |
> 3 | const b={
    | ^^^^^^^^^
> 4 | c:2,
    | ^^^^
> 5 | d:3
    | ^^^^
> 6 | }
    | ^^ Unexpected blank line before this statement.
```

## Test #146

### Test Code

<!-- prettier-ignore -->
```ts
const a=1
const b={
c:2,
d:3
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a=1

const b={
c:2,
d:3
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const a=1
> 2 | const b={
    | ^^^^^^^^^
> 3 | c:2,
    | ^^^^
> 4 | d:3
    | ^^^^
> 5 | }
    | ^^ Expected blank line before this statement.
```

## Test #147

### Test Code

<!-- prettier-ignore -->
```ts
let a={
b:1,
c:2
}

let d=3
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a={
b:1,
c:2
}
let d=3
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | let a={
  2 | b:1,
  3 | c:2
  4 | }
  5 |
> 6 | let d=3
    | ^^^^^^^ Unexpected blank line before this statement.
```

## Test #148

### Test Code

<!-- prettier-ignore -->
```ts
let a={
b:1,
c:2
}
let d=3
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a={
b:1,
c:2
}

let d=3
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | let a={
  2 | b:1,
  3 | c:2
  4 | }
> 5 | let d=3
    | ^^^^^^^ Expected blank line before this statement.
```

## Test #149

### Test Code

<!-- prettier-ignore -->
```ts
let a=1

let b={
c:2,
d:3
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a=1
let b={
c:2,
d:3
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | let a=1
  2 |
> 3 | let b={
    | ^^^^^^^
> 4 | c:2,
    | ^^^^
> 5 | d:3
    | ^^^^
> 6 | }
    | ^^ Unexpected blank line before this statement.
```

## Test #150

### Test Code

<!-- prettier-ignore -->
```ts
let a=1
let b={
c:2,
d:3
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a=1

let b={
c:2,
d:3
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | let a=1
> 2 | let b={
    | ^^^^^^^
> 3 | c:2,
    | ^^^^
> 4 | d:3
    | ^^^^
> 5 | }
    | ^^ Expected blank line before this statement.
```

## Test #151

### Test Code

<!-- prettier-ignore -->
```ts
var a={
b:1,
c:2
}

var d=3
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a={
b:1,
c:2
}
var d=3
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a={
  2 | b:1,
  3 | c:2
  4 | }
  5 |
> 6 | var d=3
    | ^^^^^^^ Unexpected blank line before this statement.
```

## Test #152

### Test Code

<!-- prettier-ignore -->
```ts
var a={
b:1,
c:2
}
var d=3
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a={
b:1,
c:2
}

var d=3
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a={
  2 | b:1,
  3 | c:2
  4 | }
> 5 | var d=3
    | ^^^^^^^ Expected blank line before this statement.
```

## Test #153

### Test Code

<!-- prettier-ignore -->
```ts
var a=1

var b={
c:2,
d:3
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a=1
var b={
c:2,
d:3
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a=1
  2 |
> 3 | var b={
    | ^^^^^^^
> 4 | c:2,
    | ^^^^
> 5 | d:3
    | ^^^^
> 6 | }
    | ^^ Unexpected blank line before this statement.
```

## Test #154

### Test Code

<!-- prettier-ignore -->
```ts
var a=1
var b={
c:2,
d:3
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a=1

var b={
c:2,
d:3
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a=1
> 2 | var b={
    | ^^^^^^^
> 3 | c:2,
    | ^^^^
> 4 | d:3
    | ^^^^
> 5 | }
    | ^^ Expected blank line before this statement.
```

## Test #155

### Test Code

<!-- prettier-ignore -->
```ts
const a=1

const b=2
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a=1
const b=2
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const a=1
  2 |
> 3 | const b=2
    | ^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #156

### Test Code

<!-- prettier-ignore -->
```ts
const a=1
const b=2
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a=1

const b=2
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const a=1
> 2 | const b=2
    | ^^^^^^^^^ Expected blank line before this statement.
```

## Test #157

### Test Code

<!-- prettier-ignore -->
```ts
const a=1

const b=2
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a=1
const b=2
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const a=1
  2 |
> 3 | const b=2
    | ^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #158

### Test Code

<!-- prettier-ignore -->
```ts
const a=1
const b=2
```

### Fix Output

<!-- prettier-ignore -->
```ts
const a=1

const b=2
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const a=1
> 2 | const b=2
    | ^^^^^^^^^ Expected blank line before this statement.
```

## Test #159

### Test Code

<!-- prettier-ignore -->
```ts
let a=1

let b=2
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a=1
let b=2
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | let a=1
  2 |
> 3 | let b=2
    | ^^^^^^^ Unexpected blank line before this statement.
```

## Test #160

### Test Code

<!-- prettier-ignore -->
```ts
let a=1
let b=2
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a=1

let b=2
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | let a=1
> 2 | let b=2
    | ^^^^^^^ Expected blank line before this statement.
```

## Test #161

### Test Code

<!-- prettier-ignore -->
```ts
let a=1

let b=2
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a=1
let b=2
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | let a=1
  2 |
> 3 | let b=2
    | ^^^^^^^ Unexpected blank line before this statement.
```

## Test #162

### Test Code

<!-- prettier-ignore -->
```ts
let a=1
let b=2
```

### Fix Output

<!-- prettier-ignore -->
```ts
let a=1

let b=2
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | let a=1
> 2 | let b=2
    | ^^^^^^^ Expected blank line before this statement.
```

## Test #163

### Test Code

<!-- prettier-ignore -->
```ts
var a=1

var b=2
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a=1
var b=2
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a=1
  2 |
> 3 | var b=2
    | ^^^^^^^ Unexpected blank line before this statement.
```

## Test #164

### Test Code

<!-- prettier-ignore -->
```ts
var a=1
var b=2
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a=1

var b=2
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a=1
> 2 | var b=2
    | ^^^^^^^ Expected blank line before this statement.
```

## Test #165

### Test Code

<!-- prettier-ignore -->
```ts
var a=1

var b=2
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a=1
var b=2
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a=1
  2 |
> 3 | var b=2
    | ^^^^^^^ Unexpected blank line before this statement.
```

## Test #166

### Test Code

<!-- prettier-ignore -->
```ts
var a=1
var b=2
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a=1

var b=2
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a=1
> 2 | var b=2
    | ^^^^^^^ Expected blank line before this statement.
```

## Test #167

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello';console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello';

console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var greet = 'hello';console.log(greet);
    |                     ^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #168

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello';var name = 'world';console.log(greet, name);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello';var name = 'world';

console.log(greet, name);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var greet = 'hello';var name = 'world';console.log(greet, name);
    |                                        ^^^^^^^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #169

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello', name = 'world';console.log(greet, name);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello', name = 'world';

console.log(greet, name);
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var greet = 'hello', name = 'world';console.log(greet, name);
    |                                     ^^^^^^^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #170

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello';
console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello';

console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello';
> 2 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #171

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello';    
console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello';
    
console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello';    
> 2 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #172

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello'; // inline comment
console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello'; // inline comment

console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello'; // inline comment
> 2 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #173

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello';
var name = 'world';
console.log(greet, name);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello';
var name = 'world';

console.log(greet, name);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello';
  2 | var name = 'world';
> 3 | console.log(greet, name);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #174

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello', name = 'world';
console.log(greet, name);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello', name = 'world';

console.log(greet, name);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello', name = 'world';
> 2 | console.log(greet, name);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #175

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello',
name = 'world';
console.log(greet, name);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello',
name = 'world';

console.log(greet, name);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello',
  2 | name = 'world';
> 3 | console.log(greet, name);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #176

### Test Code

<!-- prettier-ignore -->
```ts
let greet = 'hello';
console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
let greet = 'hello';

console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | let greet = 'hello';
> 2 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #177

### Test Code

<!-- prettier-ignore -->
```ts
const greet = 'hello';
console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
const greet = 'hello';

console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const greet = 'hello';
> 2 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #178

### Test Code

<!-- prettier-ignore -->
```ts
function example() {
var greet = 'hello';
console.log(greet);
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function example() {
var greet = 'hello';

console.log(greet);
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function example() {
  2 | var greet = 'hello';
> 3 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
  4 | }
```

## Test #179

### Test Code

<!-- prettier-ignore -->
```ts
var f = function() {
var greet = 'hello';
console.log(greet);
};
```

### Fix Output

<!-- prettier-ignore -->
```ts
var f = function() {
var greet = 'hello';

console.log(greet);
};
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var f = function() {
  2 | var greet = 'hello';
> 3 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
  4 | };
```

## Test #180

### Test Code

<!-- prettier-ignore -->
```ts
() => {
var greet = 'hello';
console.log(greet);
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
() => {
var greet = 'hello';

console.log(greet);
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | () => {
  2 | var greet = 'hello';
> 3 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
  4 | }
```

## Test #181

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello';

console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello';
console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello';
  2 |
> 3 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #182

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello';


console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello';
console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello';
  2 |
  3 |
> 4 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #183

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello';



console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello';
console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello';
  2 |
  3 |
  4 |
> 5 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #184

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello';    

console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello';    
console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello';    
  2 |
> 3 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #185

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello'; // inline comment

console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello'; // inline comment
console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello'; // inline comment
  2 |
> 3 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #186

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello';
var name = 'world';

console.log(greet, name);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello';
var name = 'world';
console.log(greet, name);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello';
  2 | var name = 'world';
  3 |
> 4 | console.log(greet, name);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #187

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello', name = 'world';

console.log(greet, name);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello', name = 'world';
console.log(greet, name);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello', name = 'world';
  2 |
> 3 | console.log(greet, name);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #188

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello',
name = 'world';

console.log(greet, name);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello',
name = 'world';
console.log(greet, name);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello',
  2 | name = 'world';
  3 |
> 4 | console.log(greet, name);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #189

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello', // inline comment
name = 'world'; // inline comment

console.log(greet, name);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello', // inline comment
name = 'world'; // inline comment
console.log(greet, name);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello', // inline comment
  2 | name = 'world'; // inline comment
  3 |
> 4 | console.log(greet, name);
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #190

### Test Code

<!-- prettier-ignore -->
```ts
let greet = 'hello';

console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
let greet = 'hello';
console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | let greet = 'hello';
  2 |
> 3 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #191

### Test Code

<!-- prettier-ignore -->
```ts
const greet = 'hello';

console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
const greet = 'hello';
console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | const greet = 'hello';
  2 |
> 3 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #192

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello';
// next-line comment
console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello';

// next-line comment
console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello';
  2 | // next-line comment
> 3 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #193

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello';
/* block comment
block comment */
console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello';

/* block comment
block comment */
console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello';
  2 | /* block comment
  3 | block comment */
> 4 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #194

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello',
name = 'world';
// next-line comment
console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello',
name = 'world';

// next-line comment
console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello',
  2 | name = 'world';
  3 | // next-line comment
> 4 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #195

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello',
name = 'world';
/* block comment
block comment */
console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello',
name = 'world';

/* block comment
block comment */
console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello',
  2 | name = 'world';
  3 | /* block comment
  4 | block comment */
> 5 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #196

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello';
// next-line comment
// second-line comment
console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello';

// next-line comment
// second-line comment
console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello';
  2 | // next-line comment
  3 | // second-line comment
> 4 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #197

### Test Code

<!-- prettier-ignore -->
```ts
var greet = 'hello';
// next-line comment
/* block comment
block comment */
console.log(greet);
```

### Fix Output

<!-- prettier-ignore -->
```ts
var greet = 'hello';

// next-line comment
/* block comment
block comment */
console.log(greet);
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var greet = 'hello';
  2 | // next-line comment
  3 | /* block comment
  4 | block comment */
> 5 | console.log(greet);
    | ^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #198

### Test Code

<!-- prettier-ignore -->
```ts

var a = 1
;(b || c).doSomething()
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

var a = 1

;(b || c).doSomething()
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 1
> 3 | ;(b || c).doSomething()
    |  ^^^^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
  4 |       
```

## Test #199

### Test Code

<!-- prettier-ignore -->
```ts

var a = 1

;(b || c).doSomething()
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

var a = 1
;(b || c).doSomething()
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a = 1
  3 |
> 4 | ;(b || c).doSomething()
    |  ^^^^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
  5 |       
```

## Test #200

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
var b; return;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
var b;

 return;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
> 2 | var b; return;
    |        ^^^^^^^ Expected blank line before this statement.
  3 | }
```

## Test #201

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
var b;
return;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
var b;

return;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | var b;
> 3 | return;
    | ^^^^^^^ Expected blank line before this statement.
  4 | }
```

## Test #202

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
if (b) return b;
else if (c) return c;
else {
e();
return d;
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
if (b) return b;
else if (c) return c;
else {
e();

return d;
}
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | if (b) return b;
  3 | else if (c) return c;
  4 | else {
  5 | e();
> 6 | return d;
    | ^^^^^^^^^ Expected blank line before this statement.
  7 | }
  8 | }
```

## Test #203

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
if (b) return b;
else if (c) return c;
else {
e(); return d;
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
if (b) return b;
else if (c) return c;
else {
e();

 return d;
}
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | if (b) return b;
  3 | else if (c) return c;
  4 | else {
> 5 | e(); return d;
    |      ^^^^^^^^^ Expected blank line before this statement.
  6 | }
  7 | }
```

## Test #204

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
 while (b) {
c();
return;
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
 while (b) {
c();

return;
}
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 |  while (b) {
  3 | c();
> 4 | return;
    | ^^^^^^^ Expected blank line before this statement.
  5 | }
  6 | }
```

## Test #205

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
do {
c();
return;
} while (b);
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
do {
c();

return;
} while (b);
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | do {
  3 | c();
> 4 | return;
    | ^^^^^^^ Expected blank line before this statement.
  5 | } while (b);
  6 | }
```

## Test #206

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
for (var b; b < c; b++) {
c();
return;
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
for (var b; b < c; b++) {
c();

return;
}
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | for (var b; b < c; b++) {
  3 | c();
> 4 | return;
    | ^^^^^^^ Expected blank line before this statement.
  5 | }
  6 | }
```

## Test #207

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
for (b in c) {
d();
return;
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
for (b in c) {
d();

return;
}
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | for (b in c) {
  3 | d();
> 4 | return;
    | ^^^^^^^ Expected blank line before this statement.
  5 | }
  6 | }
```

## Test #208

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
for (b of c) {
d();
return;
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
for (b of c) {
d();

return;
}
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | for (b of c) {
  3 | d();
> 4 | return;
    | ^^^^^^^ Expected blank line before this statement.
  5 | }
  6 | }
```

## Test #209

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
if (b) {
c();
}
//comment
return b;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
if (b) {
c();
}

//comment
return b;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | if (b) {
  3 | c();
  4 | }
  5 | //comment
> 6 | return b;
    | ^^^^^^^^^ Expected blank line before this statement.
  7 | }
```

## Test #210

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
/*comment
comment*/
if (b) {
c();
return b;
} else {
//comment

return d;
}
/*multi-line
comment*/
return e;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
/*comment
comment*/
if (b) {
c();

return b;
} else {
//comment

return d;
}

/*multi-line
comment*/
return e;
}
```

### Errors

<!-- prettier-ignore -->
```ts
   1 | function a() {
   2 | /*comment
   3 | comment*/
   4 | if (b) {
   5 | c();
>  6 | return b;
     | ^^^^^^^^^ Expected blank line before this statement.
   7 | } else {
   8 | //comment
   9 |
  10 | return d;
  11 | }
  12 | /*multi-line
  13 | comment*/
  14 | return e;
  15 | }
```

<!-- prettier-ignore -->
```ts
   1 | function a() {
   2 | /*comment
   3 | comment*/
   4 | if (b) {
   5 | c();
   6 | return b;
   7 | } else {
   8 | //comment
   9 |
  10 | return d;
  11 | }
  12 | /*multi-line
  13 | comment*/
> 14 | return e;
     | ^^^^^^^^^ Expected blank line before this statement.
  15 | }
```

## Test #211

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
if (b) { return; } //comment
return c;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
if (b) { return; } //comment

return c;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | if (b) { return; } //comment
> 3 | return c;
    | ^^^^^^^^^ Expected blank line before this statement.
  4 | }
```

## Test #212

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
if (b) { return; } /*multi-line
comment*/
return c;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
if (b) { return; } /*multi-line
comment*/

return c;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | if (b) { return; } /*multi-line
  3 | comment*/
> 4 | return c;
    | ^^^^^^^^^ Expected blank line before this statement.
  5 | }
```

## Test #213

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
if (b) { return; }
/*multi-line
comment*/ return c;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
if (b) { return; }

/*multi-line
comment*/ return c;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | if (b) { return; }
  3 | /*multi-line
> 4 | comment*/ return c;
    |           ^^^^^^^^^ Expected blank line before this statement.
  5 | }
```

## Test #214

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
if (b) { return; } /*multi-line
comment*/ return c;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
if (b) { return; } /*multi-line
comment*/

 return c;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | if (b) { return; } /*multi-line
> 3 | comment*/ return c;
    |           ^^^^^^^^^ Expected blank line before this statement.
  4 | }
```

## Test #215

### Test Code

<!-- prettier-ignore -->
```ts
var a;
return;
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a;

return;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a;
> 2 | return;
    | ^^^^^^^ Expected blank line before this statement.
```

## Test #216

### Test Code

<!-- prettier-ignore -->
```ts
var a; return;
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a;

 return;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | var a; return;
    |        ^^^^^^^ Expected blank line before this statement.
```

## Test #217

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
{
//comment
}
return
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
{
//comment
}

return
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | {
  3 | //comment
  4 | }
> 5 | return
    | ^^^^^^ Expected blank line before this statement.
  6 | }
```

## Test #218

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
{
//comment
} return
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
{
//comment
}

 return
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | {
  3 | //comment
> 4 | } return
    |   ^^^^^^ Expected blank line before this statement.
  5 | }
```

## Test #219

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
var c;
while (b) {
 c = d; //comment
}
return c;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
var c;
while (b) {
 c = d; //comment
}

return c;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | var c;
  3 | while (b) {
  4 |  c = d; //comment
  5 | }
> 6 | return c;
    | ^^^^^^^^^ Expected blank line before this statement.
  7 | }
```

## Test #220

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
for (var b; b < c; b++) {
if (d) {
break; //comment
}
return;
}
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
for (var b; b < c; b++) {
if (d) {
break; //comment
}

return;
}
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | for (var b; b < c; b++) {
  3 | if (d) {
  4 | break; //comment
  5 | }
> 6 | return;
    | ^^^^^^^ Expected blank line before this statement.
  7 | }
  8 | }
```

## Test #221

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
var b; /*multi-line
comment*/
return c;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
var b; /*multi-line
comment*/

return c;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | var b; /*multi-line
  3 | comment*/
> 4 | return c;
    | ^^^^^^^^^ Expected blank line before this statement.
  5 | }
```

## Test #222

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
var b;
/*multi-line
comment*/ return c;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
var b;

/*multi-line
comment*/ return c;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | var b;
  3 | /*multi-line
> 4 | comment*/ return c;
    |           ^^^^^^^^^ Expected blank line before this statement.
  5 | }
```

## Test #223

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
var b; /*multi-line
comment*/ return c;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
var b; /*multi-line
comment*/

 return c;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | var b; /*multi-line
> 3 | comment*/ return c;
    |           ^^^^^^^^^ Expected blank line before this statement.
  4 | }
```

## Test #224

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
var b;
//comment
return;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
var b;

//comment
return;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | var b;
  3 | //comment
> 4 | return;
    | ^^^^^^^ Expected blank line before this statement.
  5 | }
```

## Test #225

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
var b; //comment
return;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
var b; //comment

return;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | var b; //comment
> 3 | return;
    | ^^^^^^^ Expected blank line before this statement.
  4 | }
```

## Test #226

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
var b;
/* comment */ return;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
var b;

/* comment */ return;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | var b;
> 3 | /* comment */ return;
    |               ^^^^^^^ Expected blank line before this statement.
  4 | }
```

## Test #227

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
var b;
//comment
/* comment */ return;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
var b;

//comment
/* comment */ return;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | var b;
  3 | //comment
> 4 | /* comment */ return;
    |               ^^^^^^^ Expected blank line before this statement.
  5 | }
```

## Test #228

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
var b; /* comment */ return;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
var b; /* comment */

 return;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
> 2 | var b; /* comment */ return;
    |                      ^^^^^^^ Expected blank line before this statement.
  3 | }
```

## Test #229

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
var b; /* comment */
return;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
var b; /* comment */

return;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | var b; /* comment */
> 3 | return;
    | ^^^^^^^ Expected blank line before this statement.
  4 | }
```

## Test #230

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
var b;
return; //comment
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
var b;

return; //comment
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
  2 | var b;
> 3 | return; //comment
    | ^^^^^^^ Expected blank line before this statement.
  4 | }
```

## Test #231

### Test Code

<!-- prettier-ignore -->
```ts
function a() {
var b; return; //comment
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function a() {
var b;

 return; //comment
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function a() {
> 2 | var b; return; //comment
    |        ^^^^^^^ Expected blank line before this statement.
  3 | }
```

## Test #232

### Test Code

<!-- prettier-ignore -->
```ts
if(true){}

var a = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(true){}
var a = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if(true){}
  2 |
> 3 | var a = 2;
    | ^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #233

### Test Code

<!-- prettier-ignore -->
```ts
if(true){
if(true) {}

var a = 2;}
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(true){
if(true) {}
var a = 2;}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if(true){
  2 | if(true) {}
  3 |
> 4 | var a = 2;}
    | ^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #234

### Test Code

<!-- prettier-ignore -->
```ts
(function(){
})()

var a = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
(function(){
})()
var a = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | (function(){
  2 | })()
  3 |
> 4 | var a = 2;
    | ^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #235

### Test Code

<!-- prettier-ignore -->
```ts
+(function(){
})()

var a = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
+(function(){
})()
var a = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | +(function(){
  2 | })()
  3 |
> 4 | var a = 2;
    | ^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #236

### Test Code

<!-- prettier-ignore -->
```ts
var a = function() {};

var b = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a = function() {};
var b = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a = function() {};
  2 |
> 3 | var b = 2;
    | ^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #237

### Test Code

<!-- prettier-ignore -->
```ts
var a = 2;

module.exports = a;
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a = 2;
module.exports = a;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a = 2;
  2 |
> 3 | module.exports = a;
    | ^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #238

### Test Code

<!-- prettier-ignore -->
```ts
function x() { var a;

return; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function x() { var a;
return; }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function x() { var a;
  2 |
> 3 | return; }
    | ^^^^^^^ Unexpected blank line before this statement.
```

## Test #239

### Test Code

<!-- prettier-ignore -->
```ts
function x() { var a = true;

if (a) { a = !a; }; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function x() { var a = true;
if (a) { a = !a; }; }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function x() { var a = true;
  2 |
> 3 | if (a) { a = !a; }; }
    | ^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #240

### Test Code

<!-- prettier-ignore -->
```ts
function x() { var a = true;

for (var i = 0; i < 10; i++) { a = !a; }; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function x() { var a = true;
for (var i = 0; i < 10; i++) { a = !a; }; }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function x() { var a = true;
  2 |
> 3 | for (var i = 0; i < 10; i++) { a = !a; }; }
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #241

### Test Code

<!-- prettier-ignore -->
```ts
function x() { var y = true;

switch ("Oranges") { case "Oranges": y = !y;

break;

case "Apples": y = !y;

break; default: y = !y; } }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function x() { var y = true;
switch ("Oranges") { case "Oranges": y = !y;
break;
case "Apples": y = !y;
break; default: y = !y; } }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function x() { var y = true;
  2 |
> 3 | switch ("Oranges") { case "Oranges": y = !y;
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 4 |
    | ^
> 5 | break;
    | ^
> 6 |
    | ^
> 7 | case "Apples": y = !y;
    | ^
> 8 |
    | ^
> 9 | break; default: y = !y; } }
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
```

<!-- prettier-ignore -->
```ts
  1 | function x() { var y = true;
  2 |
  3 | switch ("Oranges") { case "Oranges": y = !y;
  4 |
> 5 | break;
    | ^^^^^^ Unexpected blank line before this statement.
  6 |
  7 | case "Apples": y = !y;
  8 |
  9 | break; default: y = !y; } }
```

<!-- prettier-ignore -->
```ts
  1 | function x() { var y = true;
  2 |
  3 | switch ("Oranges") { case "Oranges": y = !y;
  4 |
  5 | break;
  6 |
> 7 | case "Apples": y = !y;
    | ^^^^^^^^^^^^^^^^^^^^^^
> 8 |
    | ^
> 9 | break; default: y = !y; } }
    | ^^^^^^^ Unexpected blank line before this statement.
```

<!-- prettier-ignore -->
```ts
  1 | function x() { var y = true;
  2 |
  3 | switch ("Oranges") { case "Oranges": y = !y;
  4 |
  5 | break;
  6 |
  7 | case "Apples": y = !y;
  8 |
> 9 | break; default: y = !y; } }
    | ^^^^^^ Unexpected blank line before this statement.
```

## Test #242

### Test Code

<!-- prettier-ignore -->
```ts
function x() {try { var a;

throw 0; } catch (e) { var b = 0;

throw e; } }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function x() {try { var a;
throw 0; } catch (e) { var b = 0;
throw e; } }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function x() {try { var a;
  2 |
> 3 | throw 0; } catch (e) { var b = 0;
    | ^^^^^^^^ Unexpected blank line before this statement.
  4 |
  5 | throw e; } }
```

<!-- prettier-ignore -->
```ts
  1 | function x() {try { var a;
  2 |
  3 | throw 0; } catch (e) { var b = 0;
  4 |
> 5 | throw e; } }
    | ^^^^^^^^ Unexpected blank line before this statement.
```

## Test #243

### Test Code

<!-- prettier-ignore -->
```ts
function x(a) { var b = 0;

if (!a) { return false; };

for (var i = 0; i < b; i++) { if (!a[i]) return false; }

return true; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function x(a) { var b = 0;
if (!a) { return false; };
for (var i = 0; i < b; i++) { if (!a[i]) return false; }
return true; }
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function x(a) { var b = 0;
  2 |
> 3 | if (!a) { return false; };
    | ^^^^^^^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
  4 |
  5 | for (var i = 0; i < b; i++) { if (!a[i]) return false; }
  6 |
  7 | return true; }
```

<!-- prettier-ignore -->
```ts
  1 | function x(a) { var b = 0;
  2 |
  3 | if (!a) { return false; };
  4 |
> 5 | for (var i = 0; i < b; i++) { if (!a[i]) return false; }
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unexpected blank line before this statement.
  6 |
  7 | return true; }
```

<!-- prettier-ignore -->
```ts
  1 | function x(a) { var b = 0;
  2 |
  3 | if (!a) { return false; };
  4 |
  5 | for (var i = 0; i < b; i++) { if (!a[i]) return false; }
  6 |
> 7 | return true; }
    | ^^^^^^^^^^^^ Unexpected blank line before this statement.
```

## Test #244

### Test Code

<!-- prettier-ignore -->
```ts
if(true){}
var a = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(true){}

var a = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if(true){}
> 2 | var a = 2;
    | ^^^^^^^^^^ Expected blank line before this statement.
```

## Test #245

### Test Code

<!-- prettier-ignore -->
```ts
var a = function() {
};
var b = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a = function() {
};

var b = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a = function() {
  2 | };
> 3 | var b = 2;
    | ^^^^^^^^^^ Expected blank line before this statement.
```

## Test #246

### Test Code

<!-- prettier-ignore -->
```ts
if(true){
if(true) {}
var a = 2;}
```

### Fix Output

<!-- prettier-ignore -->
```ts
if(true){
if(true) {}

var a = 2;}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | if(true){
  2 | if(true) {}
> 3 | var a = 2;}
    | ^^^^^^^^^^ Expected blank line before this statement.
```

## Test #247

### Test Code

<!-- prettier-ignore -->
```ts
(function(){
})()
var a = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
(function(){
})()

var a = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | (function(){
  2 | })()
> 3 | var a = 2;
    | ^^^^^^^^^^ Expected blank line before this statement.
```

## Test #248

### Test Code

<!-- prettier-ignore -->
```ts
var a = function() {
};
var b = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a = function() {
};

var b = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a = function() {
  2 | };
> 3 | var b = 2;
    | ^^^^^^^^^^ Expected blank line before this statement.
```

## Test #249

### Test Code

<!-- prettier-ignore -->
```ts
(function(){
})()
var a = 2;
```

### Fix Output

<!-- prettier-ignore -->
```ts
(function(){
})()

var a = 2;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | (function(){
  2 | })()
> 3 | var a = 2;
    | ^^^^^^^^^^ Expected blank line before this statement.
```

## Test #250

### Test Code

<!-- prettier-ignore -->
```ts
var a = 2;
module.exports = a;
```

### Fix Output

<!-- prettier-ignore -->
```ts
var a = 2;

module.exports = a;
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | var a = 2;
> 2 | module.exports = a;
    | ^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #251

### Test Code

<!-- prettier-ignore -->
```ts
function x() { var a; return; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function x() { var a;

 return; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function x() { var a; return; }
    |                       ^^^^^^^ Expected blank line before this statement.
```

## Test #252

### Test Code

<!-- prettier-ignore -->
```ts
function x() { var a = true; for (var i = 0; i < 10; i++) { a = !a; }; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function x() { var a = true;

 for (var i = 0; i < 10; i++) { a = !a; }; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function x() { var a = true; for (var i = 0; i < 10; i++) { a = !a; }; }
    |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #253

### Test Code

<!-- prettier-ignore -->
```ts
function x() { var y = true; switch ("Oranges") { case "Oranges": y = !y; break; case "Apples": y = !y; break; default: y = !y; } }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function x() { var y = true;

 switch ("Oranges") { case "Oranges": y = !y;

 break;

 case "Apples": y = !y;

 break;

 default: y = !y; } }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function x() { var y = true; switch ("Oranges") { case "Oranges": y = !y; break; case "Apples": y = !y; break; default: y = !y; } }
    |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

<!-- prettier-ignore -->
```ts
> 1 | function x() { var y = true; switch ("Oranges") { case "Oranges": y = !y; break; case "Apples": y = !y; break; default: y = !y; } }
    |                                                                           ^^^^^^ Expected blank line before this statement.
```

<!-- prettier-ignore -->
```ts
> 1 | function x() { var y = true; switch ("Oranges") { case "Oranges": y = !y; break; case "Apples": y = !y; break; default: y = !y; } }
    |                                                                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

<!-- prettier-ignore -->
```ts
> 1 | function x() { var y = true; switch ("Oranges") { case "Oranges": y = !y; break; case "Apples": y = !y; break; default: y = !y; } }
    |                                                                                                         ^^^^^^ Expected blank line before this statement.
```

<!-- prettier-ignore -->
```ts
> 1 | function x() { var y = true; switch ("Oranges") { case "Oranges": y = !y; break; case "Apples": y = !y; break; default: y = !y; } }
    |                                                                                                                ^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #254

### Test Code

<!-- prettier-ignore -->
```ts
function x() { var a = true; while (!a) { a = !a; }; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function x() { var a = true;

 while (!a) { a = !a; }; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function x() { var a = true; while (!a) { a = !a; }; }
    |                              ^^^^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #255

### Test Code

<!-- prettier-ignore -->
```ts
function x() {try { var a; throw 0; } catch (e) { var b = 0; throw e; } }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function x() {try { var a;

 throw 0; } catch (e) { var b = 0;

 throw e; } }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function x() {try { var a; throw 0; } catch (e) { var b = 0; throw e; } }
    |                            ^^^^^^^^ Expected blank line before this statement.
```

<!-- prettier-ignore -->
```ts
> 1 | function x() {try { var a; throw 0; } catch (e) { var b = 0; throw e; } }
    |                                                              ^^^^^^^^ Expected blank line before this statement.
```

## Test #256

### Test Code

<!-- prettier-ignore -->
```ts
function x(a) { var b = 0; if (!a) { return false; }; for (var i = 0; i < b; i++) { if (!a[i]) return false; } return true; }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function x(a) { var b = 0;

 if (!a) { return false; };

 for (var i = 0; i < b; i++) { if (!a[i]) return false; }

 return true; }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function x(a) { var b = 0; if (!a) { return false; }; for (var i = 0; i < b; i++) { if (!a[i]) return false; } return true; }
    |                            ^^^^^^^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

<!-- prettier-ignore -->
```ts
> 1 | function x(a) { var b = 0; if (!a) { return false; }; for (var i = 0; i < b; i++) { if (!a[i]) return false; } return true; }
    |                                                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
```

<!-- prettier-ignore -->
```ts
> 1 | function x(a) { var b = 0; if (!a) { return false; }; for (var i = 0; i < b; i++) { if (!a[i]) return false; } return true; }
    |                                                                                                                ^^^^^^^^^^^^ Expected blank line before this statement.
```

## Test #257

### Test Code

<!-- prettier-ignore -->
```ts

declare namespace Types {
  type Foo = string;
  type Bar = string;
  interface FooBar {
    [key: string]: string;
  }
  interface BarBaz {
    [key: string]: string;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare namespace Types {
  type Foo = string;

  type Bar = string;

  interface FooBar {
    [key: string]: string;
  }

  interface BarBaz {
    [key: string]: string;
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | declare namespace Types {
   3 |   type Foo = string;
>  4 |   type Bar = string;
     |   ^^^^^^^^^^^^^^^^^^ Expected blank line before this statement.
   5 |   interface FooBar {
   6 |     [key: string]: string;
   7 |   }
   8 |   interface BarBaz {
   9 |     [key: string]: string;
  10 |   }
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | declare namespace Types {
   3 |   type Foo = string;
   4 |   type Bar = string;
>  5 |   interface FooBar {
     |   ^^^^^^^^^^^^^^^^^^
>  6 |     [key: string]: string;
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^
>  7 |   }
     | ^^^^ Expected blank line before this statement.
   8 |   interface BarBaz {
   9 |     [key: string]: string;
  10 |   }
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | declare namespace Types {
   3 |   type Foo = string;
   4 |   type Bar = string;
   5 |   interface FooBar {
   6 |     [key: string]: string;
   7 |   }
>  8 |   interface BarBaz {
     |   ^^^^^^^^^^^^^^^^^^
>  9 |     [key: string]: string;
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^
> 10 |   }
     | ^^^^ Expected blank line before this statement.
  11 | }
  12 |       
```

## Test #258

### Test Code

<!-- prettier-ignore -->
```ts
export function foo(arg1: string): number;
export function foo(arg2: number) {
 return arg2;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
export function foo(arg1: string): number;

export function foo(arg2: number) {
 return arg2;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | export function foo(arg1: string): number;
> 2 | export function foo(arg2: number) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |  return arg2;
    | ^^^^^^^^^^^^^
> 4 | }
    | ^^ Expected blank line before this statement.
```

## Test #259

### Test Code

<!-- prettier-ignore -->
```ts
function foo(arg1: string): number;
function foo(arg2: number) {
 return arg2;
}
```

### Fix Output

<!-- prettier-ignore -->
```ts
function foo(arg1: string): number;

function foo(arg2: number) {
 return arg2;
}
```

### Errors

<!-- prettier-ignore -->
```ts
  1 | function foo(arg1: string): number;
> 2 | function foo(arg2: number) {
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 3 |  return arg2;
    | ^^^^^^^^^^^^^
> 4 | }
    | ^^ Expected blank line before this statement.
```
