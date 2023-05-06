# prefer-string-starts-ends-with

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s[0] === "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s[0] === "a"
    |           ^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.[0] === "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.[0] === "a"
    |           ^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s[0] !== "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s[0] !== "a"
    |           ^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.[0] !== "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s?.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.[0] !== "a"
    |           ^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s[0] == "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s[0] == "a"
    |           ^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.[0] == "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.[0] == "a"
    |           ^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s[0] != "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s[0] != "a"
    |           ^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.[0] != "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s?.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.[0] != "a"
    |           ^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s[0] === "あ"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.startsWith("あ")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s[0] === "あ"
    |           ^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.[0] === "あ"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.startsWith("あ")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.[0] === "あ"
    |           ^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s[0] === "👍" // the length is 2.
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s[0] === "👍" // the length is 2.
    |           ^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.[0] === "👍" // the length is 2?.
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.[0] === "👍" // the length is 2?.
    |           ^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string, t: string) {
          s[0] === t // the length of t is unknown.
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string, t: string) {
> 3 |           s[0] === t // the length of t is unknown.
    |           ^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string, t: string) {
          s?.[0] === t // the length of t is unknown?.
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string, t: string) {
> 3 |           s?.[0] === t // the length of t is unknown?.
    |           ^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s[s.length - 1] === "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.endsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s[s.length - 1] === "a"
    |           ^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.[s.length - 1] === "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.endsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.[s.length - 1] === "a"
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          (s)[0] === ("a")
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          (s).startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           (s)[0] === ("a")
    |           ^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          (s)?.[0] === ("a")
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          (s)?.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           (s)?.[0] === ("a")
    |           ^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.charAt(0) === "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.charAt(0) === "a"
    |           ^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.charAt(0) === "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.charAt(0) === "a"
    |           ^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.charAt(0) !== "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.charAt(0) !== "a"
    |           ^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.charAt(0) !== "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s?.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.charAt(0) !== "a"
    |           ^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.charAt(0) == "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.charAt(0) == "a"
    |           ^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.charAt(0) == "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.charAt(0) == "a"
    |           ^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.charAt(0) != "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.charAt(0) != "a"
    |           ^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.charAt(0) != "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s?.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.charAt(0) != "a"
    |           ^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.charAt(0) === "あ"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.startsWith("あ")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.charAt(0) === "あ"
    |           ^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.charAt(0) === "あ"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.startsWith("あ")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.charAt(0) === "あ"
    |           ^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.charAt(0) === "👍" // the length is 2.
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.charAt(0) === "👍" // the length is 2.
    |           ^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.charAt(0) === "👍" // the length is 2.
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.charAt(0) === "👍" // the length is 2.
    |           ^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string, t: string) {
          s.charAt(0) === t // the length of t is unknown.
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string, t: string) {
> 3 |           s.charAt(0) === t // the length of t is unknown.
    |           ^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string, t: string) {
          s?.charAt(0) === t // the length of t is unknown.
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string, t: string) {
> 3 |           s?.charAt(0) === t // the length of t is unknown.
    |           ^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.charAt(s.length - 1) === "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.endsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.charAt(s.length - 1) === "a"
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.charAt(s.length - 1) === "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.endsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.charAt(s.length - 1) === "a"
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          (s).charAt(0) === "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          (s).startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           (s).charAt(0) === "a"
    |           ^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          (s)?.charAt(0) === "a"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          (s)?.startsWith("a")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           (s)?.charAt(0) === "a"
    |           ^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.indexOf(needle) === 0
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.startsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.indexOf(needle) === 0
    |           ^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.indexOf(needle) === 0
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.startsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.indexOf(needle) === 0
    |           ^^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.indexOf(needle) !== 0
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s.startsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.indexOf(needle) !== 0
    |           ^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.indexOf(needle) !== 0
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s?.startsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.indexOf(needle) !== 0
    |           ^^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.indexOf(needle) == 0
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.startsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.indexOf(needle) == 0
    |           ^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.indexOf(needle) == 0
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.startsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.indexOf(needle) == 0
    |           ^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.indexOf(needle) != 0
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s.startsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.indexOf(needle) != 0
    |           ^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.indexOf(needle) != 0
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s?.startsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.indexOf(needle) != 0
    |           ^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.lastIndexOf("bar") === s.length - 3
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.lastIndexOf("bar") === s.length - 3
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.lastIndexOf("bar") === s.length - 3
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.lastIndexOf("bar") === s.length - 3
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.lastIndexOf("bar") !== s.length - 3
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.lastIndexOf("bar") !== s.length - 3
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.lastIndexOf("bar") !== s.length - 3
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s?.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.lastIndexOf("bar") !== s.length - 3
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.lastIndexOf("bar") == s.length - 3
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.lastIndexOf("bar") == s.length - 3
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.lastIndexOf("bar") == s.length - 3
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.lastIndexOf("bar") == s.length - 3
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.lastIndexOf("bar") != s.length - 3
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.lastIndexOf("bar") != s.length - 3
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.lastIndexOf("bar") != s.length - 3
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s?.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.lastIndexOf("bar") != s.length - 3
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.lastIndexOf("bar") === s.length - "bar".length
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.lastIndexOf("bar") === s.length - "bar".length
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.lastIndexOf("bar") === s.length - "bar".length
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.lastIndexOf("bar") === s.length - "bar".length
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.lastIndexOf(needle) === s.length - needle.length
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.endsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.lastIndexOf(needle) === s.length - needle.length
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.lastIndexOf(needle) === s.length - needle.length
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.endsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.lastIndexOf(needle) === s.length - needle.length
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.match(/^bar/) !== null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.match(/^bar/) !== null
    |           ^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.match(/^bar/) !== null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.match(/^bar/) !== null
    |           ^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.match(/^bar/) != null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.match(/^bar/) != null
    |           ^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.match(/^bar/) != null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.match(/^bar/) != null
    |           ^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.match(/bar$/) !== null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.match(/bar$/) !== null
    |           ^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.match(/bar$/) !== null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.match(/bar$/) !== null
    |           ^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.match(/bar$/) != null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.match(/bar$/) != null
    |           ^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.match(/bar$/) != null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.match(/bar$/) != null
    |           ^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.match(/^bar/) === null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.match(/^bar/) === null
    |           ^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.match(/^bar/) === null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s?.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.match(/^bar/) === null
    |           ^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.match(/^bar/) == null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.match(/^bar/) == null
    |           ^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #68

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.match(/^bar/) == null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s?.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.match(/^bar/) == null
    |           ^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #69

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.match(/bar$/) === null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.match(/bar$/) === null
    |           ^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #70

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.match(/bar$/) === null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s?.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.match(/bar$/) === null
    |           ^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #71

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.match(/bar$/) == null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.match(/bar$/) == null
    |           ^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #72

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.match(/bar$/) == null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s?.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.match(/bar$/) == null
    |           ^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #73

### Test Code

<!-- prettier-ignore -->
```ts

        const pattern = /^bar/
        function f(s: string) {
          s.match(pattern) != null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const pattern = /^bar/
        function f(s: string) {
          s.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const pattern = /^bar/
  3 |         function f(s: string) {
> 4 |           s.match(pattern) != null
    |           ^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  5 |         }
  6 |       
```

## Test #74

### Test Code

<!-- prettier-ignore -->
```ts

        const pattern = /^bar/
        function f(s: string) {
          s?.match(pattern) != null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const pattern = /^bar/
        function f(s: string) {
          s?.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const pattern = /^bar/
  3 |         function f(s: string) {
> 4 |           s?.match(pattern) != null
    |           ^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  5 |         }
  6 |       
```

## Test #75

### Test Code

<!-- prettier-ignore -->
```ts

        const pattern = new RegExp("^bar")
        function f(s: string) {
          s.match(pattern) != null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const pattern = new RegExp("^bar")
        function f(s: string) {
          s.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const pattern = new RegExp("^bar")
  3 |         function f(s: string) {
> 4 |           s.match(pattern) != null
    |           ^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  5 |         }
  6 |       
```

## Test #76

### Test Code

<!-- prettier-ignore -->
```ts

        const pattern = new RegExp("^bar")
        function f(s: string) {
          s?.match(pattern) != null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const pattern = new RegExp("^bar")
        function f(s: string) {
          s?.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const pattern = new RegExp("^bar")
  3 |         function f(s: string) {
> 4 |           s?.match(pattern) != null
    |           ^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  5 |         }
  6 |       
```

## Test #77

### Test Code

<!-- prettier-ignore -->
```ts

        const pattern = /^"quoted"/
        function f(s: string) {
          s.match(pattern) != null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const pattern = /^"quoted"/
        function f(s: string) {
          s.startsWith("\"quoted\"")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const pattern = /^"quoted"/
  3 |         function f(s: string) {
> 4 |           s.match(pattern) != null
    |           ^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  5 |         }
  6 |       
```

## Test #78

### Test Code

<!-- prettier-ignore -->
```ts

        const pattern = /^"quoted"/
        function f(s: string) {
          s?.match(pattern) != null
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const pattern = /^"quoted"/
        function f(s: string) {
          s?.startsWith("\"quoted\"")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const pattern = /^"quoted"/
  3 |         function f(s: string) {
> 4 |           s?.match(pattern) != null
    |           ^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  5 |         }
  6 |       
```

## Test #79

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.slice(0, 3) === "bar"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.slice(0, 3) === "bar"
    |           ^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #80

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.slice(0, 3) === "bar"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.slice(0, 3) === "bar"
    |           ^^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #81

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.slice(0, 3) !== "bar"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.slice(0, 3) !== "bar"
    |           ^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #82

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.slice(0, 3) !== "bar"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s?.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.slice(0, 3) !== "bar"
    |           ^^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #83

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.slice(0, 3) == "bar"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.slice(0, 3) == "bar"
    |           ^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #84

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.slice(0, 3) == "bar"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.slice(0, 3) == "bar"
    |           ^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #85

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.slice(0, 3) != "bar"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.slice(0, 3) != "bar"
    |           ^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #86

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.slice(0, 3) != "bar"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s?.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.slice(0, 3) != "bar"
    |           ^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #87

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.slice(0, needle.length) === needle
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.startsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.slice(0, needle.length) === needle
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #88

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.slice(0, needle.length) === needle
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.startsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.slice(0, needle.length) === needle
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #89

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.slice(0, length) === needle // the 'length' can be different to 'needle.length'
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.slice(0, length) === needle // the 'length' can be different to 'needle.length'
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #90

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.slice(0, length) === needle // the 'length' can be different to 'needle.length'
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.slice(0, length) === needle // the 'length' can be different to 'needle.length'
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #91

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.slice(0, needle.length) == needle // hating implicit type conversion
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.slice(0, needle.length) == needle // hating implicit type conversion
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #92

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.slice(0, needle.length) == needle // hating implicit type conversion
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.slice(0, needle.length) == needle // hating implicit type conversion
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #93

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.slice(-3) === "bar"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.slice(-3) === "bar"
    |           ^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #94

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.slice(-3) === "bar"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.slice(-3) === "bar"
    |           ^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #95

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.slice(-3) !== "bar"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.slice(-3) !== "bar"
    |           ^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #96

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.slice(-3) !== "bar"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          !s?.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.slice(-3) !== "bar"
    |           ^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #97

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.slice(-needle.length) === needle
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.endsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.slice(-needle.length) === needle
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #98

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.slice(-needle.length) === needle
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.endsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.slice(-needle.length) === needle
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #99

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.slice(s.length - needle.length) === needle
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.endsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.slice(s.length - needle.length) === needle
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #100

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.slice(s.length - needle.length) === needle
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.endsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.slice(s.length - needle.length) === needle
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #101

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.slice(-length) === needle // 'length' can be different
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.slice(-length) === needle // 'length' can be different
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #102

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.slice(-length) === needle // 'length' can be different
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.slice(-length) === needle // 'length' can be different
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #103

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.substring(0, 3) === "bar"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.substring(0, 3) === "bar"
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #104

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.substring(0, 3) === "bar"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.substring(0, 3) === "bar"
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #105

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.substring(-3) === "bar" // the code is probably mistake.
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.substring(-3) === "bar" // the code is probably mistake.
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #106

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.substring(-3) === "bar" // the code is probably mistake.
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.substring(-3) === "bar" // the code is probably mistake.
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #107

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.substring(s.length - 3, s.length) === "bar"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s.substring(s.length - 3, s.length) === "bar"
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #108

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.substring(s.length - 3, s.length) === "bar"
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           s?.substring(s.length - 3, s.length) === "bar"
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #109

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          /^bar/.test(s)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           /^bar/.test(s)
    |           ^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #110

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          /^bar/?.test(s)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           /^bar/?.test(s)
    |           ^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #111

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          /bar$/.test(s)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           /bar$/.test(s)
    |           ^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #112

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          /bar$/?.test(s)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          s?.endsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           /bar$/?.test(s)
    |           ^^^^^^^^^^^^^^^ Use the 'String#endsWith' method instead.
  4 |         }
  5 |       
```

## Test #113

### Test Code

<!-- prettier-ignore -->
```ts

        const pattern = /^bar/
        function f(s: string) {
          pattern.test(s)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const pattern = /^bar/
        function f(s: string) {
          s.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const pattern = /^bar/
  3 |         function f(s: string) {
> 4 |           pattern.test(s)
    |           ^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  5 |         }
  6 |       
```

## Test #114

### Test Code

<!-- prettier-ignore -->
```ts

        const pattern = /^bar/
        function f(s: string) {
          pattern?.test(s)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const pattern = /^bar/
        function f(s: string) {
          s?.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const pattern = /^bar/
  3 |         function f(s: string) {
> 4 |           pattern?.test(s)
    |           ^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  5 |         }
  6 |       
```

## Test #115

### Test Code

<!-- prettier-ignore -->
```ts

        const pattern = new RegExp("^bar")
        function f(s: string) {
          pattern.test(s)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const pattern = new RegExp("^bar")
        function f(s: string) {
          s.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const pattern = new RegExp("^bar")
  3 |         function f(s: string) {
> 4 |           pattern.test(s)
    |           ^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  5 |         }
  6 |       
```

## Test #116

### Test Code

<!-- prettier-ignore -->
```ts

        const pattern = new RegExp("^bar")
        function f(s: string) {
          pattern?.test(s)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const pattern = new RegExp("^bar")
        function f(s: string) {
          s?.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const pattern = new RegExp("^bar")
  3 |         function f(s: string) {
> 4 |           pattern?.test(s)
    |           ^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  5 |         }
  6 |       
```

## Test #117

### Test Code

<!-- prettier-ignore -->
```ts

        const pattern = /^"quoted"/
        function f(s: string) {
          pattern.test(s)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const pattern = /^"quoted"/
        function f(s: string) {
          s.startsWith("\"quoted\"")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const pattern = /^"quoted"/
  3 |         function f(s: string) {
> 4 |           pattern.test(s)
    |           ^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  5 |         }
  6 |       
```

## Test #118

### Test Code

<!-- prettier-ignore -->
```ts

        const pattern = /^"quoted"/
        function f(s: string) {
          pattern?.test(s)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const pattern = /^"quoted"/
        function f(s: string) {
          s?.startsWith("\"quoted\"")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const pattern = /^"quoted"/
  3 |         function f(s: string) {
> 4 |           pattern?.test(s)
    |           ^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  5 |         }
  6 |       
```

## Test #119

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          /^bar/.test(a + b)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          (a + b).startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           /^bar/.test(a + b)
    |           ^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #120

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          /^bar/?.test(a + b)
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: string) {
          (a + b)?.startsWith("bar")
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: string) {
> 3 |           /^bar/?.test(a + b)
    |           ^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #121

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: "a" | "b") {
          s.indexOf(needle) === 0
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: "a" | "b") {
          s.startsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: "a" | "b") {
> 3 |           s.indexOf(needle) === 0
    |           ^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #122

### Test Code

<!-- prettier-ignore -->
```ts

        function f(s: "a" | "b") {
          s?.indexOf(needle) === 0
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f(s: "a" | "b") {
          s?.startsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f(s: "a" | "b") {
> 3 |           s?.indexOf(needle) === 0
    |           ^^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #123

### Test Code

<!-- prettier-ignore -->
```ts

        function f<T extends "a" | "b">(s: T) {
          s.indexOf(needle) === 0
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f<T extends "a" | "b">(s: T) {
          s.startsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f<T extends "a" | "b">(s: T) {
> 3 |           s.indexOf(needle) === 0
    |           ^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #124

### Test Code

<!-- prettier-ignore -->
```ts

        function f<T extends "a" | "b">(s: T) {
          s?.indexOf(needle) === 0
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function f<T extends "a" | "b">(s: T) {
          s?.startsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         function f<T extends "a" | "b">(s: T) {
> 3 |           s?.indexOf(needle) === 0
    |           ^^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  4 |         }
  5 |       
```

## Test #125

### Test Code

<!-- prettier-ignore -->
```ts

        type SafeString = string & {__HTML_ESCAPED__: void}
        function f(s: SafeString) {
          s.indexOf(needle) === 0
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type SafeString = string & {__HTML_ESCAPED__: void}
        function f(s: SafeString) {
          s.startsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type SafeString = string & {__HTML_ESCAPED__: void}
  3 |         function f(s: SafeString) {
> 4 |           s.indexOf(needle) === 0
    |           ^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  5 |         }
  6 |       
```

## Test #126

### Test Code

<!-- prettier-ignore -->
```ts

        type SafeString = string & {__HTML_ESCAPED__: void}
        function f(s: SafeString) {
          s?.indexOf(needle) === 0
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type SafeString = string & {__HTML_ESCAPED__: void}
        function f(s: SafeString) {
          s?.startsWith(needle)
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type SafeString = string & {__HTML_ESCAPED__: void}
  3 |         function f(s: SafeString) {
> 4 |           s?.indexOf(needle) === 0
    |           ^^^^^^^^^^^^^^^^^^^^^^^^ Use 'String#startsWith' method instead.
  5 |         }
  6 |       
```
