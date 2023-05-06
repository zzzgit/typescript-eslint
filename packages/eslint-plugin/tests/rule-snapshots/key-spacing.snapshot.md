# key-spacing

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  a: number;
  abc: string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X {
  a:   number;
  abc: string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
> 3 |   a: number;
    |   ^^^^^^^^^^ Missing space before value for key 'a'.
  4 |   abc: string
  5 | };
  6 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  a: number;
  "a:c": string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X {
  a:     number;
  "a:c": string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
> 3 |   a: number;
    |   ^^^^^^^^^^ Missing space before value for key 'a'.
  4 |   "a:c": string
  5 | };
  6 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

let x: {
  a: number;
  abc: string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

let x: {
  a:   number;
  abc: string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let x: {
> 3 |   a: number;
    |   ^^^^^^^^^^ Missing space before value for key 'a'.
  4 |   abc: string
  5 | };
  6 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

let x: {
  a: number;
  abc: string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

let x: {
  a:   number;
  abc: string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | let x: {
> 3 |   a: number;
    |   ^^^^^^^^^^ Missing space before value for key 'a'.
  4 |   abc: string
  5 | };
  6 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

let x: {
  a: number;
  "🌷": "bar", // 2 code points
  "🎁": "baz", // 2 code points
  "🇮🇳": "qux", // 4 code points
  "🏳️‍🌈": "xyz", // 6 code points
  [𐌘]: string
  "𐌘": string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

let x: {
  a:   number;
  "🌷": "bar", // 2 code points
  "🎁": "baz", // 2 code points
  "🇮🇳": "qux", // 4 code points
  "🏳️‍🌈": "xyz", // 6 code points
  [𐌘]: string
  "𐌘": string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | let x: {
>  3 |   a: number;
     |   ^^^^^^^^^^ Missing space before value for key 'a'.
   4 |   "🌷": "bar", // 2 code points
   5 |   "🎁": "baz", // 2 code points
   6 |   "🇮🇳": "qux", // 4 code points
   7 |   "🏳️‍🌈": "xyz", // 6 code points
   8 |   [𐌘]: string
   9 |   "𐌘": string
  10 | };
  11 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

class X {
  a: number;
  abc: string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class X {
  a:   number;
  abc: string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class X {
> 3 |   a: number;
    |   ^^^^^^^^^^ Missing space before value for key 'a'.
  4 |   abc: string
  5 | };
  6 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

class X {
  a: number;
  abc: string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class X {
  a:   number;
  abc: string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class X {
> 3 |   a: number;
    |   ^^^^^^^^^^ Missing space before value for key 'a'.
  4 |   abc: string
  5 | };
  6 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

class X {
  a: number;
  b;
  abc: string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class X {
  a:   number;
  b;
  abc: string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class X {
> 3 |   a: number;
    |   ^^^^^^^^^^ Missing space before value for key 'a'.
  4 |   b;
  5 |   abc: string
  6 | };
  7 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

type X = {
  a: number;
  abc: string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type X = {
  a:   number;
  abc: string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type X = {
> 3 |   a: number;
    |   ^^^^^^^^^^ Missing space before value for key 'a'.
  4 |   abc: string
  5 | };
  6 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  a:   number;
  abc:  string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X {
  a:   number;
  abc: string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
  3 |   a:   number;
> 4 |   abc:  string
    |   ^^^^^^^^^^^^ Extra space before value for key 'abc'.
  5 | };
  6 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

class X {
  a:   number;
  abc:  string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class X {
  a:   number;
  abc: string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class X {
  3 |   a:   number;
> 4 |   abc:  string
    |   ^^^^^^^^^^^^ Extra space before value for key 'abc'.
  5 | };
  6 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

class X {
  x:   number;
  z = 1;
  xbcef: number;
  }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class X {
  x:     number;
  z = 1;
  xbcef: number;
  }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class X {
> 3 |   x:   number;
    |   ^^^^^^^^^^^^ Missing space before value for key 'x'.
  4 |   z = 1;
  5 |   xbcef: number;
  6 |   }
  7 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  a:   number;

  abc     : string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X {
  a: number;

  abc: string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
> 3 |   a:   number;
    |   ^^^^^^^^^^^^ Extra space before value for key 'a'.
  4 |
  5 |   abc     : string
  6 | };
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
  3 |   a:   number;
  4 |
> 5 |   abc     : string
    |   ^^^^^^^^^^^^^^^^ Extra space after key 'abc'.
  6 | };
  7 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

class X {
  a:   number;

  abc     : string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class X {
  a: number;

  abc: string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class X {
> 3 |   a:   number;
    |   ^^^^^^^^^^^^ Extra space before value for key 'a'.
  4 |
  5 |   abc     : string
  6 | };
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class X {
  3 |   a:   number;
  4 |
> 5 |   abc     : string
    |   ^^^^^^^^^^^^^^^^ Extra space after key 'abc'.
  6 | };
  7 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  a:   number;
  // Some comment

  // interrupted in the middle
  abc: string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X {
  a: number;
  // Some comment

  // interrupted in the middle
  abc: string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
> 3 |   a:   number;
    |   ^^^^^^^^^^^^ Extra space before value for key 'a'.
  4 |   // Some comment
  5 |
  6 |   // interrupted in the middle
  7 |   abc: string
  8 | };
  9 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  a:   number;
  /**
   * Multiline comment
   */

  /** interrupted in the middle */
  abc: string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X {
  a: number;
  /**
   * Multiline comment
   */

  /** interrupted in the middle */
  abc: string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface X {
>  3 |   a:   number;
     |   ^^^^^^^^^^^^ Extra space before value for key 'a'.
   4 |   /**
   5 |    * Multiline comment
   6 |    */
   7 |
   8 |   /** interrupted in the middle */
   9 |   abc: string
  10 | };
  11 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  a:   number;
  prop: {
    abc: number;
    a:   number;
  },
  abc: string
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X {
  a:    number;
  prop: {
    abc: number;
    a:   number;
  },
  abc: string
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface X {
>  3 |   a:   number;
     |   ^^^^^^^^^^^^ Missing space before value for key 'a'.
   4 |   prop: {
   5 |     abc: number;
   6 |     a:   number;
   7 |   },
   8 |   abc: string
   9 | }
  10 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  a:    number;
  prop: {
    abc: number;
    a:  number;
  },
  abc: string
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X {
  a:    number;
  prop: {
    abc: number;
    a:   number;
  },
  abc: string
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface X {
   3 |   a:    number;
   4 |   prop: {
   5 |     abc: number;
>  6 |     a:  number;
     |     ^^^^^^^^^^^ Missing space before value for key 'a'.
   7 |   },
   8 |   abc: string
   9 | }
  10 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  a:    number;
  prop: {
    abc: number;
    a:   number;
  },
  abc:  string
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X {
  a:    number;
  prop: {
    abc: number;
    a:   number;
  },
  abc: string
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | interface X {
   3 |   a:    number;
   4 |   prop: {
   5 |     abc: number;
   6 |     a:   number;
   7 |   },
>  8 |   abc:  string
     |   ^^^^^^^^^^^^ Extra space before value for key 'abc'.
   9 | }
  10 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

class X {
  a:      number;
  prop: {
    abc: number;
    a?: number;
  };
  abc: string;
  x = 1;
  d: number;
  z:  number = 1;
  ef: string;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class X {
  a:    number;
  prop: {
    abc: number;
    a?:  number;
  };
  abc: string;
  x = 1;
  d:   number;
  z:   number = 1;
  ef:  string;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class X {
>  3 |   a:      number;
     |   ^^^^^^^^^^^^^^^ Extra space before value for key 'a'.
   4 |   prop: {
   5 |     abc: number;
   6 |     a?: number;
   7 |   };
   8 |   abc: string;
   9 |   x = 1;
  10 |   d: number;
  11 |   z:  number = 1;
  12 |   ef: string;
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class X {
   3 |   a:      number;
   4 |   prop: {
   5 |     abc: number;
>  6 |     a?: number;
     |     ^^^^^^^^^^^ Missing space before value for key 'a'.
   7 |   };
   8 |   abc: string;
   9 |   x = 1;
  10 |   d: number;
  11 |   z:  number = 1;
  12 |   ef: string;
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class X {
   3 |   a:      number;
   4 |   prop: {
   5 |     abc: number;
   6 |     a?: number;
   7 |   };
   8 |   abc: string;
   9 |   x = 1;
> 10 |   d: number;
     |   ^^^^^^^^^^ Missing space before value for key 'd'.
  11 |   z:  number = 1;
  12 |   ef: string;
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class X {
   3 |   a:      number;
   4 |   prop: {
   5 |     abc: number;
   6 |     a?: number;
   7 |   };
   8 |   abc: string;
   9 |   x = 1;
  10 |   d: number;
> 11 |   z:  number = 1;
     |   ^^^^^^^^^^^^^^^ Missing space before value for key 'z'.
  12 |   ef: string;
  13 | }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class X {
   3 |   a:      number;
   4 |   prop: {
   5 |     abc: number;
   6 |     a?: number;
   7 |   };
   8 |   abc: string;
   9 |   x = 1;
  10 |   d: number;
  11 |   z:  number = 1;
> 12 |   ef: string;
     |   ^^^^^^^^^^^ Missing space before value for key 'ef'.
  13 | }
  14 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  a   : number;
  abc: string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X {
  a  : number;
  abc: string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
> 3 |   a   : number;
    |   ^^^^^^^^^^^^^ Extra space after key 'a'.
  4 |   abc: string
  5 | };
  6 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  a   : number;
  abc: string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X {
  a  : number;
  abc: string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
> 3 |   a   : number;
    |   ^^^^^^^^^^^^^ Extra space after key 'a'.
  4 |   abc: string
  5 | };
  6 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  a   : number;
  abc: string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X {
  a   : number;
  abc : string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
  3 |   a   : number;
> 4 |   abc: string
    |   ^^^^^^^^^^^ Missing space after key 'abc'.
  5 | };
  6 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  [x: number]:  string;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X {
  [x: number]: string;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
> 3 |   [x: number]:  string;
    |   ^^^^^^^^^^^^^^^^^^^^^ Extra space before value for key '[x: number]'.
  4 | }
  5 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  [x: number]:string;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X {
  [x: number]: string;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
> 3 |   [x: number]:string;
    |   ^^^^^^^^^^^^^^^^^^^ Missing space before value for key '[x: number]'.
  4 | }
  5 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

interface X {
  a:number;
  abc:string
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X {
  a : number;
  abc : string
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
> 3 |   a:number;
    |   ^^^^^^^^^ Missing space after key 'a'.
  4 |   abc:string
  5 | };
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
> 3 |   a:number;
    |   ^^^^^^^^^ Missing space before value for key 'a'.
  4 |   abc:string
  5 | };
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
  3 |   a:number;
> 4 |   abc:string
    |   ^^^^^^^^^^ Missing space after key 'abc'.
  5 | };
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface X {
  3 |   a:number;
> 4 |   abc:string
    |   ^^^^^^^^^^ Missing space before value for key 'abc'.
  5 | };
  6 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

interface X { a : number; abc : string; };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X { a:number; abc:string; };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a : number; abc : string; };
    |               ^^^^^^^^^^^ Extra space after key 'a'.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a : number; abc : string; };
    |               ^^^^^^^^^^^ Extra space before value for key 'a'.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a : number; abc : string; };
    |                           ^^^^^^^^^^^^^ Extra space after key 'abc'.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a : number; abc : string; };
    |                           ^^^^^^^^^^^^^ Extra space before value for key 'abc'.
  3 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

interface X { a : number; abc : string; };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X { a: number; abc: string; };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a : number; abc : string; };
    |               ^^^^^^^^^^^ Extra space after key 'a'.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a : number; abc : string; };
    |                           ^^^^^^^^^^^^^ Extra space after key 'abc'.
  3 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

interface X { a:number; abc:string; };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X { a : number; abc : string; };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a:number; abc:string; };
    |               ^^^^^^^^^ Missing space after key 'a'.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a:number; abc:string; };
    |               ^^^^^^^^^ Missing space before value for key 'a'.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a:number; abc:string; };
    |                         ^^^^^^^^^^^ Missing space after key 'abc'.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a:number; abc:string; };
    |                         ^^^^^^^^^^^ Missing space before value for key 'abc'.
  3 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

interface X { a:number; abc:   string; };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X { a : number; abc :   string; };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a:number; abc:   string; };
    |               ^^^^^^^^^ Missing space after key 'a'.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a:number; abc:   string; };
    |               ^^^^^^^^^ Missing space before value for key 'a'.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a:number; abc:   string; };
    |                         ^^^^^^^^^^^^^^ Missing space after key 'abc'.
  3 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

interface X { a : number; abc : string; };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X { a:number; abc:string; };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a : number; abc : string; };
    |               ^^^^^^^^^^^ Extra space after key 'a'.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a : number; abc : string; };
    |               ^^^^^^^^^^^ Extra space before value for key 'a'.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a : number; abc : string; };
    |                           ^^^^^^^^^^^^^ Extra space after key 'abc'.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a : number; abc : string; };
    |                           ^^^^^^^^^^^^^ Extra space before value for key 'abc'.
  3 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

interface X { a:number; abc:string; };
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface X { a : number; abc : string; };
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a:number; abc:string; };
    |               ^^^^^^^^^ Missing space after key 'a'.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a:number; abc:string; };
    |               ^^^^^^^^^ Missing space before value for key 'a'.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a:number; abc:string; };
    |                         ^^^^^^^^^^^ Missing space after key 'abc'.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface X { a:number; abc:string; };
    |                         ^^^^^^^^^^^ Missing space before value for key 'abc'.
  3 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

type Wacky = {
    a: number;
    b: string;
    agc: number;
    middle: Date | {
        inner: {
            a: boolean;
            bc: boolean;
            "🌷": "rose";
        }
        [x: number]: string;
        abc: boolean;
    }
} & {
    a: "string";
    abc: number;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Wacky = {
    a:      number;
    b:      string;
    agc:    number;
    middle: Date | {
        inner: {
            a:   boolean;
            bc:  boolean;
            "🌷": "rose";
        }
        [x: number]: string;
        abc:         boolean;
    }
} & {
    a:   "string";
    abc: number;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Wacky = {
>  3 |     a: number;
     |     ^^^^^^^^^^ Missing space before value for key 'a'.
   4 |     b: string;
   5 |     agc: number;
   6 |     middle: Date | {
   7 |         inner: {
   8 |             a: boolean;
   9 |             bc: boolean;
  10 |             "🌷": "rose";
  11 |         }
  12 |         [x: number]: string;
  13 |         abc: boolean;
  14 |     }
  15 | } & {
  16 |     a: "string";
  17 |     abc: number;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Wacky = {
   3 |     a: number;
>  4 |     b: string;
     |     ^^^^^^^^^^ Missing space before value for key 'b'.
   5 |     agc: number;
   6 |     middle: Date | {
   7 |         inner: {
   8 |             a: boolean;
   9 |             bc: boolean;
  10 |             "🌷": "rose";
  11 |         }
  12 |         [x: number]: string;
  13 |         abc: boolean;
  14 |     }
  15 | } & {
  16 |     a: "string";
  17 |     abc: number;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Wacky = {
   3 |     a: number;
   4 |     b: string;
>  5 |     agc: number;
     |     ^^^^^^^^^^^^ Missing space before value for key 'agc'.
   6 |     middle: Date | {
   7 |         inner: {
   8 |             a: boolean;
   9 |             bc: boolean;
  10 |             "🌷": "rose";
  11 |         }
  12 |         [x: number]: string;
  13 |         abc: boolean;
  14 |     }
  15 | } & {
  16 |     a: "string";
  17 |     abc: number;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Wacky = {
   3 |     a: number;
   4 |     b: string;
   5 |     agc: number;
   6 |     middle: Date | {
   7 |         inner: {
>  8 |             a: boolean;
     |             ^^^^^^^^^^^ Missing space before value for key 'a'.
   9 |             bc: boolean;
  10 |             "🌷": "rose";
  11 |         }
  12 |         [x: number]: string;
  13 |         abc: boolean;
  14 |     }
  15 | } & {
  16 |     a: "string";
  17 |     abc: number;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Wacky = {
   3 |     a: number;
   4 |     b: string;
   5 |     agc: number;
   6 |     middle: Date | {
   7 |         inner: {
   8 |             a: boolean;
>  9 |             bc: boolean;
     |             ^^^^^^^^^^^^ Missing space before value for key 'bc'.
  10 |             "🌷": "rose";
  11 |         }
  12 |         [x: number]: string;
  13 |         abc: boolean;
  14 |     }
  15 | } & {
  16 |     a: "string";
  17 |     abc: number;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Wacky = {
   3 |     a: number;
   4 |     b: string;
   5 |     agc: number;
   6 |     middle: Date | {
   7 |         inner: {
   8 |             a: boolean;
   9 |             bc: boolean;
  10 |             "🌷": "rose";
  11 |         }
  12 |         [x: number]: string;
> 13 |         abc: boolean;
     |         ^^^^^^^^^^^^^ Missing space before value for key 'abc'.
  14 |     }
  15 | } & {
  16 |     a: "string";
  17 |     abc: number;
  18 | }
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | type Wacky = {
   3 |     a: number;
   4 |     b: string;
   5 |     agc: number;
   6 |     middle: Date | {
   7 |         inner: {
   8 |             a: boolean;
   9 |             bc: boolean;
  10 |             "🌷": "rose";
  11 |         }
  12 |         [x: number]: string;
  13 |         abc: boolean;
  14 |     }
  15 | } & {
> 16 |     a: "string";
     |     ^^^^^^^^^^^^ Missing space before value for key 'a'.
  17 |     abc: number;
  18 | }
  19 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

class Wacky {
    a: number;
    b?: string;
    public z: number;
    abc = 10;
    private override xy: number;
    static x = "test";
    static abcdef: number = 1;
    get fn(): number { return 0; };
    inter: number;
    get fn2(): number {
      return 1;
    };
    agc: number;
    middle: Date | {
        inner: {
            a: boolean;
            bc: boolean;
            "🌷": "rose";
        }
        [x: number]: string;
        abc: boolean;
    }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Wacky {
    a:                   number;
    b?:                  string;
    public z:            number;
    abc = 10;
    private override xy: number;
    static x = "test";
    static abcdef:       number = 1;
    get fn(): number { return 0; };
    inter:               number;
    get fn2(): number {
      return 1;
    };
    agc:    number;
    middle: Date | {
        inner: {
            a:   boolean;
            bc:  boolean;
            "🌷": "rose";
        }
        [x: number]: string;
        abc:         boolean;
    }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Wacky {
>  3 |     a: number;
     |     ^^^^^^^^^^ Missing space before value for key 'a'.
   4 |     b?: string;
   5 |     public z: number;
   6 |     abc = 10;
   7 |     private override xy: number;
   8 |     static x = "test";
   9 |     static abcdef: number = 1;
  10 |     get fn(): number { return 0; };
  11 |     inter: number;
  12 |     get fn2(): number {
  13 |       return 1;
  14 |     };
  15 |     agc: number;
  16 |     middle: Date | {
  17 |         inner: {
  18 |             a: boolean;
  19 |             bc: boolean;
  20 |             "🌷": "rose";
  21 |         }
  22 |         [x: number]: string;
  23 |         abc: boolean;
  24 |     }
  25 | }
  26 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Wacky {
   3 |     a: number;
>  4 |     b?: string;
     |     ^^^^^^^^^^^ Missing space before value for key 'b'.
   5 |     public z: number;
   6 |     abc = 10;
   7 |     private override xy: number;
   8 |     static x = "test";
   9 |     static abcdef: number = 1;
  10 |     get fn(): number { return 0; };
  11 |     inter: number;
  12 |     get fn2(): number {
  13 |       return 1;
  14 |     };
  15 |     agc: number;
  16 |     middle: Date | {
  17 |         inner: {
  18 |             a: boolean;
  19 |             bc: boolean;
  20 |             "🌷": "rose";
  21 |         }
  22 |         [x: number]: string;
  23 |         abc: boolean;
  24 |     }
  25 | }
  26 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Wacky {
   3 |     a: number;
   4 |     b?: string;
>  5 |     public z: number;
     |     ^^^^^^^^^^^^^^^^^ Missing space before value for key 'z'.
   6 |     abc = 10;
   7 |     private override xy: number;
   8 |     static x = "test";
   9 |     static abcdef: number = 1;
  10 |     get fn(): number { return 0; };
  11 |     inter: number;
  12 |     get fn2(): number {
  13 |       return 1;
  14 |     };
  15 |     agc: number;
  16 |     middle: Date | {
  17 |         inner: {
  18 |             a: boolean;
  19 |             bc: boolean;
  20 |             "🌷": "rose";
  21 |         }
  22 |         [x: number]: string;
  23 |         abc: boolean;
  24 |     }
  25 | }
  26 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Wacky {
   3 |     a: number;
   4 |     b?: string;
   5 |     public z: number;
   6 |     abc = 10;
   7 |     private override xy: number;
   8 |     static x = "test";
>  9 |     static abcdef: number = 1;
     |     ^^^^^^^^^^^^^^^^^^^^^^^^^^ Missing space before value for key 'abcdef'.
  10 |     get fn(): number { return 0; };
  11 |     inter: number;
  12 |     get fn2(): number {
  13 |       return 1;
  14 |     };
  15 |     agc: number;
  16 |     middle: Date | {
  17 |         inner: {
  18 |             a: boolean;
  19 |             bc: boolean;
  20 |             "🌷": "rose";
  21 |         }
  22 |         [x: number]: string;
  23 |         abc: boolean;
  24 |     }
  25 | }
  26 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Wacky {
   3 |     a: number;
   4 |     b?: string;
   5 |     public z: number;
   6 |     abc = 10;
   7 |     private override xy: number;
   8 |     static x = "test";
   9 |     static abcdef: number = 1;
  10 |     get fn(): number { return 0; };
> 11 |     inter: number;
     |     ^^^^^^^^^^^^^^ Missing space before value for key 'inter'.
  12 |     get fn2(): number {
  13 |       return 1;
  14 |     };
  15 |     agc: number;
  16 |     middle: Date | {
  17 |         inner: {
  18 |             a: boolean;
  19 |             bc: boolean;
  20 |             "🌷": "rose";
  21 |         }
  22 |         [x: number]: string;
  23 |         abc: boolean;
  24 |     }
  25 | }
  26 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Wacky {
   3 |     a: number;
   4 |     b?: string;
   5 |     public z: number;
   6 |     abc = 10;
   7 |     private override xy: number;
   8 |     static x = "test";
   9 |     static abcdef: number = 1;
  10 |     get fn(): number { return 0; };
  11 |     inter: number;
  12 |     get fn2(): number {
  13 |       return 1;
  14 |     };
> 15 |     agc: number;
     |     ^^^^^^^^^^^^ Missing space before value for key 'agc'.
  16 |     middle: Date | {
  17 |         inner: {
  18 |             a: boolean;
  19 |             bc: boolean;
  20 |             "🌷": "rose";
  21 |         }
  22 |         [x: number]: string;
  23 |         abc: boolean;
  24 |     }
  25 | }
  26 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Wacky {
   3 |     a: number;
   4 |     b?: string;
   5 |     public z: number;
   6 |     abc = 10;
   7 |     private override xy: number;
   8 |     static x = "test";
   9 |     static abcdef: number = 1;
  10 |     get fn(): number { return 0; };
  11 |     inter: number;
  12 |     get fn2(): number {
  13 |       return 1;
  14 |     };
  15 |     agc: number;
  16 |     middle: Date | {
  17 |         inner: {
> 18 |             a: boolean;
     |             ^^^^^^^^^^^ Missing space before value for key 'a'.
  19 |             bc: boolean;
  20 |             "🌷": "rose";
  21 |         }
  22 |         [x: number]: string;
  23 |         abc: boolean;
  24 |     }
  25 | }
  26 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Wacky {
   3 |     a: number;
   4 |     b?: string;
   5 |     public z: number;
   6 |     abc = 10;
   7 |     private override xy: number;
   8 |     static x = "test";
   9 |     static abcdef: number = 1;
  10 |     get fn(): number { return 0; };
  11 |     inter: number;
  12 |     get fn2(): number {
  13 |       return 1;
  14 |     };
  15 |     agc: number;
  16 |     middle: Date | {
  17 |         inner: {
  18 |             a: boolean;
> 19 |             bc: boolean;
     |             ^^^^^^^^^^^^ Missing space before value for key 'bc'.
  20 |             "🌷": "rose";
  21 |         }
  22 |         [x: number]: string;
  23 |         abc: boolean;
  24 |     }
  25 | }
  26 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Wacky {
   3 |     a: number;
   4 |     b?: string;
   5 |     public z: number;
   6 |     abc = 10;
   7 |     private override xy: number;
   8 |     static x = "test";
   9 |     static abcdef: number = 1;
  10 |     get fn(): number { return 0; };
  11 |     inter: number;
  12 |     get fn2(): number {
  13 |       return 1;
  14 |     };
  15 |     agc: number;
  16 |     middle: Date | {
  17 |         inner: {
  18 |             a: boolean;
  19 |             bc: boolean;
  20 |             "🌷": "rose";
  21 |         }
  22 |         [x: number]: string;
> 23 |         abc: boolean;
     |         ^^^^^^^^^^^^^ Missing space before value for key 'abc'.
  24 |     }
  25 | }
  26 |       
```
