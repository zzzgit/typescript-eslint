# getWrappingFixer

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
(function wrapFunction() {})
```

### Fix Output

<!-- prettier-ignore -->
```ts
(void (function wrapFunction() {}))
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (function wrapFunction() {})
    |  ^^^^^^^^^^^^^^^^^^^^^^^^^^ Please void this
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
(class wrapClass {})
```

### Fix Output

<!-- prettier-ignore -->
```ts
(void (class wrapClass {}))
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | (class wrapClass {})
    |  ^^^^^^^^^^^^^^^^^^ Please void this
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
wrapMe
```

### Fix Output

<!-- prettier-ignore -->
```ts
void wrapMe
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | wrapMe
    | ^^^^^^ Please void this
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
"wrapMe"
```

### Fix Output

<!-- prettier-ignore -->
```ts
void "wrapMe"
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | "wrapMe"
    | ^^^^^^^^ Please void this
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
["wrapArray"]
```

### Fix Output

<!-- prettier-ignore -->
```ts
void ["wrapArray"]
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ["wrapArray"]
    | ^^^^^^^^^^^^^ Please void this
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
({ x: "wrapObject" })
```

### Fix Output

<!-- prettier-ignore -->
```ts
(void { x: "wrapObject" })
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ({ x: "wrapObject" })
    |  ^^^^^^^^^^^^^^^^^^^ Please void this
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
!wrapMe
```

### Fix Output

<!-- prettier-ignore -->
```ts
!(void wrapMe)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | !wrapMe
    |  ^^^^^^ Please void this
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
wrapMe++
```

### Fix Output

<!-- prettier-ignore -->
```ts
(void wrapMe)++
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | wrapMe++
    | ^^^^^^ Please void this
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
"wrapMe" + "dontWrap"
```

### Fix Output

<!-- prettier-ignore -->
```ts
(void "wrapMe") + "dontWrap"
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | "wrapMe" + "dontWrap"
    | ^^^^^^^^ Please void this
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
async () => await wrapMe
```

### Fix Output

<!-- prettier-ignore -->
```ts
async () => await (void wrapMe)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | async () => await wrapMe
    |                   ^^^^^^ Please void this
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
wrapMe(arg)
```

### Fix Output

<!-- prettier-ignore -->
```ts
(void wrapMe)(arg)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | wrapMe(arg)
    | ^^^^^^ Please void this
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
new wrapMe(arg)
```

### Fix Output

<!-- prettier-ignore -->
```ts
new (void wrapMe)(arg)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | new wrapMe(arg)
    |     ^^^^^^ Please void this
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
wrapMe`arg`
```

### Fix Output

<!-- prettier-ignore -->
```ts
(void wrapMe)`arg`
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | wrapMe`arg`
    | ^^^^^^ Please void this
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
wrapMe.prop
```

### Fix Output

<!-- prettier-ignore -->
```ts
(void wrapMe).prop
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | wrapMe.prop
    | ^^^^^^ Please void this
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
obj["wrapMe"]
```

### Fix Output

<!-- prettier-ignore -->
```ts
obj[void "wrapMe"]
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | obj["wrapMe"]
    |     ^^^^^^^^ Please void this
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
fn(wrapMe)
```

### Fix Output

<!-- prettier-ignore -->
```ts
fn(void wrapMe)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | fn(wrapMe)
    |    ^^^^^^ Please void this
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
new Cls(wrapMe)
```

### Fix Output

<!-- prettier-ignore -->
```ts
new Cls(void wrapMe)
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | new Cls(wrapMe)
    |         ^^^^^^ Please void this
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
[wrapMe, ...wrapMe]
```

### Fix Output

<!-- prettier-ignore -->
```ts
[void wrapMe, ...void wrapMe]
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | [wrapMe, ...wrapMe]
    |  ^^^^^^ Please void this
```

<!-- prettier-ignore -->
```ts
> 1 | [wrapMe, ...wrapMe]
    |             ^^^^^^ Please void this
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
`${wrapMe}`
```

### Fix Output

<!-- prettier-ignore -->
```ts
`${void wrapMe}`
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | `${wrapMe}`
    |    ^^^^^^ Please void this
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
tpl`${wrapMe}`
```

### Fix Output

<!-- prettier-ignore -->
```ts
tpl`${void wrapMe}`
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | tpl`${wrapMe}`
    |       ^^^^^^ Please void this
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
({ ["wrapMe"]: wrapMe, ...wrapMe })
```

### Fix Output

<!-- prettier-ignore -->
```ts
({ [void "wrapMe"]: void wrapMe, ...void wrapMe })
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | ({ ["wrapMe"]: wrapMe, ...wrapMe })
    |     ^^^^^^^^ Please void this
```

<!-- prettier-ignore -->
```ts
> 1 | ({ ["wrapMe"]: wrapMe, ...wrapMe })
    |                ^^^^^^ Please void this
```

<!-- prettier-ignore -->
```ts
> 1 | ({ ["wrapMe"]: wrapMe, ...wrapMe })
    |                           ^^^^^^ Please void this
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
function fn() { return wrapMe }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function fn() { return void wrapMe }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function fn() { return wrapMe }
    |                        ^^^^^^ Please void this
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
function* fn() { yield wrapMe }
```

### Fix Output

<!-- prettier-ignore -->
```ts
function* fn() { yield void wrapMe }
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function* fn() { yield wrapMe }
    |                        ^^^^^^ Please void this
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
() => wrapMe
```

### Fix Output

<!-- prettier-ignore -->
```ts
() => void wrapMe
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | () => wrapMe
    |       ^^^^^^ Please void this
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
if (wrapMe) {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
if (void wrapMe) {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (wrapMe) {}
    |     ^^^^^^ Please void this
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

        "dontWrap"
        "wrapMe" + "!"
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        "dontWrap"
        ;(void "wrapMe") + "!"
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         "dontWrap"
> 3 |         "wrapMe" + "!"
    |         ^^^^^^^^ Please void this
  4 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

        dontWrap
        wrapMe++
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        dontWrap
        ;(void wrapMe)++
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         dontWrap
> 3 |         wrapMe++
    |         ^^^^^^ Please void this
  4 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

        dontWrap()
        wrapMe()
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        dontWrap()
        ;(void wrapMe)()
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         dontWrap()
> 3 |         wrapMe()
    |         ^^^^^^ Please void this
  4 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

        dontWrap()
        wrapMe``
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        dontWrap()
        ;(void wrapMe)``
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         dontWrap()
> 3 |         wrapMe``
    |         ^^^^^^ Please void this
  4 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

        "dontWrap"
        test() ? "wrapMe" : "dontWrap"
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        "dontWrap"
        test() ? (void "wrapMe") : "dontWrap"
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         "dontWrap"
> 3 |         test() ? "wrapMe" : "dontWrap"
    |                  ^^^^^^^^ Please void this
  4 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

        "dontWrap";
        wrapMe && f()
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        "dontWrap";
        (void wrapMe) && f()
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         "dontWrap";
> 3 |         wrapMe && f()
    |         ^^^^^^ Please void this
  4 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

        new dontWrap
        new wrapMe
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        new dontWrap
        new (void wrapMe)
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         new dontWrap
> 3 |         new wrapMe
    |             ^^^^^^ Please void this
  4 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

        wrapMe || f()
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        (void wrapMe) || f()
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         wrapMe || f()
    |         ^^^^^^ Please void this
  3 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

        if (true) wrapMe && f()
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        if (true) (void wrapMe) && f()
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         if (true) wrapMe && f()
    |                   ^^^^^^ Please void this
  3 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

        dontWrap
        if (true) {
          wrapMe ?? f()
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        dontWrap
        if (true) {
          (void wrapMe) ?? f()
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         dontWrap
  3 |         if (true) {
> 4 |           wrapMe ?? f()
    |           ^^^^^^ Please void this
  5 |         }
  6 |       
```
