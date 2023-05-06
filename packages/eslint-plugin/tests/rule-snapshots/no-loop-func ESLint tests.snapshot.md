# no-loop-func ESLint tests

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

for (var i = 0; i < l; i++) {
  (function () {
    i;
  });
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | for (var i = 0; i < l; i++) {
> 3 |   (function () {
    |    ^^^^^^^^^^^^^
> 4 |     i;
    | ^^^^^^
> 5 |   });
    | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'i'.
  6 | }
  7 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

for (var i = 0; i < l; i++) {
  for (var j = 0; j < m; j++) {
    (function () {
      i + j;
    });
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | for (var i = 0; i < l; i++) {
  3 |   for (var j = 0; j < m; j++) {
> 4 |     (function () {
    |      ^^^^^^^^^^^^^
> 5 |       i + j;
    | ^^^^^^^^^^^^
> 6 |     });
    | ^^^^^^ Function declared in a loop contains unsafe references to variable(s) 'i', 'j'.
  7 |   }
  8 | }
  9 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

for (var i in {}) {
  (function () {
    i;
  });
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | for (var i in {}) {
> 3 |   (function () {
    |    ^^^^^^^^^^^^^
> 4 |     i;
    | ^^^^^^
> 5 |   });
    | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'i'.
  6 | }
  7 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

for (var i of {}) {
  (function () {
    i;
  });
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | for (var i of {}) {
> 3 |   (function () {
    |    ^^^^^^^^^^^^^
> 4 |     i;
    | ^^^^^^
> 5 |   });
    | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'i'.
  6 | }
  7 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

for (var i = 0; i < l; i++) {
  () => {
    i;
  };
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | for (var i = 0; i < l; i++) {
> 3 |   () => {
    |   ^^^^^^^
> 4 |     i;
    | ^^^^^^
> 5 |   };
    | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'i'.
  6 | }
  7 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

for (var i = 0; i < l; i++) {
  var a = function () {
    i;
  };
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | for (var i = 0; i < l; i++) {
> 3 |   var a = function () {
    |           ^^^^^^^^^^^^^
> 4 |     i;
    | ^^^^^^
> 5 |   };
    | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'i'.
  6 | }
  7 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

for (var i = 0; i < l; i++) {
  function a() {
    i;
  }
  a();
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | for (var i = 0; i < l; i++) {
> 3 |   function a() {
    |   ^^^^^^^^^^^^^^
> 4 |     i;
    | ^^^^^^
> 5 |   }
    | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'i'.
  6 |   a();
  7 | }
  8 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

for (
  var i = 0;
  (function () {
    i;
  })(),
    i < l;
  i++
) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | for (
   3 |   var i = 0;
>  4 |   (function () {
     |    ^^^^^^^^^^^^^
>  5 |     i;
     | ^^^^^^
>  6 |   })(),
     | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'i'.
   7 |     i < l;
   8 |   i++
   9 | ) {}
  10 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

for (
  var i = 0;
  i < l;
  (function () {
    i;
  })(),
    i++
) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | for (
   3 |   var i = 0;
   4 |   i < l;
>  5 |   (function () {
     |    ^^^^^^^^^^^^^
>  6 |     i;
     | ^^^^^^
>  7 |   })(),
     | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'i'.
   8 |     i++
   9 | ) {}
  10 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

while (i) {
  (function () {
    i;
  });
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | while (i) {
> 3 |   (function () {
    |    ^^^^^^^^^^^^^
> 4 |     i;
    | ^^^^^^
> 5 |   });
    | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'i'.
  6 | }
  7 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

do {
  (function () {
    i;
  });
} while (i);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | do {
> 3 |   (function () {
    |    ^^^^^^^^^^^^^
> 4 |     i;
    | ^^^^^^
> 5 |   });
    | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'i'.
  6 | } while (i);
  7 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

let a;
for (let i = 0; i < l; i++) {
  a = 1;
  (function () {
    a;
  });
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let a;
  3 | for (let i = 0; i < l; i++) {
  4 |   a = 1;
> 5 |   (function () {
    |    ^^^^^^^^^^^^^
> 6 |     a;
    | ^^^^^^
> 7 |   });
    | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'a'.
  8 | }
  9 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

let a;
for (let i in {}) {
  (function () {
    a;
  });
  a = 1;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let a;
  3 | for (let i in {}) {
> 4 |   (function () {
    |    ^^^^^^^^^^^^^
> 5 |     a;
    | ^^^^^^
> 6 |   });
    | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'a'.
  7 |   a = 1;
  8 | }
  9 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

let a;
for (let i of {}) {
  (function () {
    a;
  });
}
a = 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let a;
  3 | for (let i of {}) {
> 4 |   (function () {
    |    ^^^^^^^^^^^^^
> 5 |     a;
    | ^^^^^^
> 6 |   });
    | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'a'.
  7 | }
  8 | a = 1;
  9 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

let a;
for (let i = 0; i < l; i++) {
  (function () {
    (function () {
      a;
    });
  });
  a = 1;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | let a;
   3 | for (let i = 0; i < l; i++) {
>  4 |   (function () {
     |    ^^^^^^^^^^^^^
>  5 |     (function () {
     | ^^^^^^^^^^^^^^^^^^
>  6 |       a;
     | ^^^^^^^^^^^^^^^^^^
>  7 |     });
     | ^^^^^^^^^^^^^^^^^^
>  8 |   });
     | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'a'.
   9 |   a = 1;
  10 | }
  11 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

let a;
for (let i in {}) {
  a = 1;
  function foo() {
    (function () {
      a;
    });
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | let a;
   3 | for (let i in {}) {
   4 |   a = 1;
>  5 |   function foo() {
     |   ^^^^^^^^^^^^^^^^
>  6 |     (function () {
     | ^^^^^^^^^^^^^^^^^^
>  7 |       a;
     | ^^^^^^^^^^^^^^^^^^
>  8 |     });
     | ^^^^^^^^^^^^^^^^^^
>  9 |   }
     | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'a'.
  10 | }
  11 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

let a;
for (let i of {}) {
  () => {
    (function () {
      a;
    });
  };
}
a = 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | let a;
   3 | for (let i of {}) {
>  4 |   () => {
     |   ^^^^^^^
>  5 |     (function () {
     | ^^^^^^^^^^^^^^^^^^
>  6 |       a;
     | ^^^^^^^^^^^^^^^^^^
>  7 |     });
     | ^^^^^^^^^^^^^^^^^^
>  8 |   };
     | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'a'.
   9 | }
  10 | a = 1;
  11 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

for (var i = 0; i < 10; ++i) {
  for (let x in xs.filter(x => x != i)) {
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | for (var i = 0; i < 10; ++i) {
> 3 |   for (let x in xs.filter(x => x != i)) {
    |                           ^^^^^^^^^^^ Function declared in a loop contains unsafe references to variable(s) 'i'.
  4 |   }
  5 | }
  6 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

for (let x of xs) {
  let a;
  for (let y of ys) {
    a = 1;
    (function () {
      a;
    });
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | for (let x of xs) {
   3 |   let a;
   4 |   for (let y of ys) {
   5 |     a = 1;
>  6 |     (function () {
     |      ^^^^^^^^^^^^^
>  7 |       a;
     | ^^^^^^^^
>  8 |     });
     | ^^^^^^ Function declared in a loop contains unsafe references to variable(s) 'a'.
   9 |   }
  10 | }
  11 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

for (var x of xs) {
  for (let y of ys) {
    (function () {
      x;
    });
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | for (var x of xs) {
  3 |   for (let y of ys) {
> 4 |     (function () {
    |      ^^^^^^^^^^^^^
> 5 |       x;
    | ^^^^^^^^
> 6 |     });
    | ^^^^^^ Function declared in a loop contains unsafe references to variable(s) 'x'.
  7 |   }
  8 | }
  9 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

for (var x of xs) {
  (function () {
    x;
  });
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | for (var x of xs) {
> 3 |   (function () {
    |    ^^^^^^^^^^^^^
> 4 |     x;
    | ^^^^^^
> 5 |   });
    | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'x'.
  6 | }
  7 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

var a;
for (let x of xs) {
  a = 1;
  (function () {
    a;
  });
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a;
  3 | for (let x of xs) {
  4 |   a = 1;
> 5 |   (function () {
    |    ^^^^^^^^^^^^^
> 6 |     a;
    | ^^^^^^
> 7 |   });
    | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'a'.
  8 | }
  9 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

var a;
for (let x of xs) {
  (function () {
    a;
  });
  a = 1;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var a;
  3 | for (let x of xs) {
> 4 |   (function () {
    |    ^^^^^^^^^^^^^
> 5 |     a;
    | ^^^^^^
> 6 |   });
    | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'a'.
  7 |   a = 1;
  8 | }
  9 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

let a;
function foo() {
  a = 10;
}
for (let x of xs) {
  (function () {
    a;
  });
}
foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | let a;
   3 | function foo() {
   4 |   a = 10;
   5 | }
   6 | for (let x of xs) {
>  7 |   (function () {
     |    ^^^^^^^^^^^^^
>  8 |     a;
     | ^^^^^^
>  9 |   });
     | ^^^^ Function declared in a loop contains unsafe references to variable(s) 'a'.
  10 | }
  11 | foo();
  12 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

let a;
function foo() {
  a = 10;
  for (let x of xs) {
    (function () {
      a;
    });
  }
}
foo();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | let a;
   3 | function foo() {
   4 |   a = 10;
   5 |   for (let x of xs) {
>  6 |     (function () {
     |      ^^^^^^^^^^^^^
>  7 |       a;
     | ^^^^^^^^
>  8 |     });
     | ^^^^^^ Function declared in a loop contains unsafe references to variable(s) 'a'.
   9 |   }
  10 | }
  11 | foo();
  12 |       
```
