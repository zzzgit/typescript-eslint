# space-infix-ops

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

        enum Test {
          A= 2,
          B = 1,
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum Test {
          A = 2,
          B = 1,
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Test {
> 3 |           A= 2,
    |            ^ Operator '=' must be spaced.
  4 |           B = 1,
  5 |         }
  6 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

        enum Test {
          KEY1= "value1",
          KEY2 = "value2",
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum Test {
          KEY1 = "value1",
          KEY2 = "value2",
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Test {
> 3 |           KEY1= "value1",
    |               ^ Operator '=' must be spaced.
  4 |           KEY2 = "value2",
  5 |         }
  6 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

        enum Test {
          A =2,
          B = 1,
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum Test {
          A = 2,
          B = 1,
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Test {
> 3 |           A =2,
    |             ^ Operator '=' must be spaced.
  4 |           B = 1,
  5 |         }
  6 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          public readonly value= 2;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          public readonly value = 2;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           public readonly value= 2;
    |                                ^ Operator '=' must be spaced.
  4 |         }
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          public readonly value =2;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          public readonly value = 2;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           public readonly value =2;
    |                                 ^ Operator '=' must be spaced.
  4 |         }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          value: { prop: string }[]= [];
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          value: { prop: string }[] = [];
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           value: { prop: string }[]= [];
    |                                    ^ Operator '=' must be spaced.
  4 |         }
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          value: { prop: string }[] =[];
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          value: { prop: string }[] = [];
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           value: { prop: string }[] =[];
    |                                     ^ Operator '=' must be spaced.
  4 |         }
  5 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        type Test= string | number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = string | number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test= string | number;
    |                  ^ Operator '=' must be spaced.
  3 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        type Test= (() => void) | number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = (() => void) | number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test= (() => void) | number;
    |                  ^ Operator '=' must be spaced.
  3 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

        type Test= (((() => void))) | number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = (((() => void))) | number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test= (((() => void))) | number;
    |                  ^ Operator '=' must be spaced.
  3 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

        type Test =string | number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = string | number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test =string | number;
    |                   ^ Operator '=' must be spaced.
  3 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

        type Test =(() => void) | number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = (() => void) | number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test =(() => void) | number;
    |                   ^ Operator '=' must be spaced.
  3 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

        type Test =(((() => void))) | number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = (((() => void))) | number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test =(((() => void))) | number;
    |                   ^ Operator '=' must be spaced.
  3 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = string| number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = string | number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = string| number;
    |                           ^ Operator '|' must be spaced.
  3 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = string |number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = string | number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = string |number;
    |                            ^ Operator '|' must be spaced.
  3 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = string| (() => void);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = string | (() => void);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = string| (() => void);
    |                           ^ Operator '|' must be spaced.
  3 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = string| (((() => void)));
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = string | (((() => void)));
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = string| (((() => void)));
    |                           ^ Operator '|' must be spaced.
  3 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = string |(() => void);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = string | (() => void);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = string |(() => void);
    |                            ^ Operator '|' must be spaced.
  3 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = string |(((() => void)));
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = string | (((() => void)));
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = string |(((() => void)));
    |                            ^ Operator '|' must be spaced.
  3 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = string &number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = string & number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = string &number;
    |                            ^ Operator '&' must be spaced.
  3 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = string& number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = string & number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = string& number;
    |                           ^ Operator '&' must be spaced.
  3 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = string &(() => void);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = string & (() => void);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = string &(() => void);
    |                            ^ Operator '&' must be spaced.
  3 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = string &(((() => void)));
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = string & (((() => void)));
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = string &(((() => void)));
    |                            ^ Operator '&' must be spaced.
  3 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = string& (() => void);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = string & (() => void);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = string& (() => void);
    |                           ^ Operator '&' must be spaced.
  3 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = string& (((() => void)));
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = string & (((() => void)));
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = string& (((() => void)));
    |                           ^ Operator '&' must be spaced.
  3 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = (() => boolean)| (() => void);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = (() => boolean) | (() => void);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = (() => boolean)| (() => void);
    |                                    ^ Operator '|' must be spaced.
  3 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = (((() => boolean)))| (((() => void)));
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = (((() => boolean))) | (((() => void)));
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = (((() => boolean)))| (((() => void)));
    |                                        ^ Operator '|' must be spaced.
  3 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = (() => boolean)& (() => void);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = (() => boolean) & (() => void);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = (() => boolean)& (() => void);
    |                                    ^ Operator '&' must be spaced.
  3 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = (((() => boolean)))& (((() => void)));
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = (((() => boolean))) & (((() => void)));
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = (((() => boolean)))& (((() => void)));
    |                                        ^ Operator '&' must be spaced.
  3 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = (() => boolean)|(() => void);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = (() => boolean) | (() => void);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = (() => boolean)|(() => void);
    |                                    ^ Operator '|' must be spaced.
  3 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = (((() => boolean)))|(((() => void)));
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = (((() => boolean))) | (((() => void)));
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = (((() => boolean)))|(((() => void)));
    |                                        ^ Operator '|' must be spaced.
  3 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = (() => boolean)&(() => void);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = (() => boolean) & (() => void);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = (() => boolean)&(() => void);
    |                                    ^ Operator '&' must be spaced.
  3 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = (((() => boolean)))&(((() => void)));
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = (((() => boolean))) & (((() => void)));
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = (((() => boolean)))&(((() => void)));
    |                                        ^ Operator '&' must be spaced.
  3 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

        type Test =
        |string
        | number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test =
        | string
        | number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type Test =
> 3 |         |string
    |         ^ Operator '|' must be spaced.
  4 |         | number;
  5 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

        type Test =
        |string
        | (() => void);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test =
        | string
        | (() => void);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type Test =
> 3 |         |string
    |         ^ Operator '|' must be spaced.
  4 |         | (() => void);
  5 |       
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

        type Test =
        |string
        | (((() => void)));
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test =
        | string
        | (((() => void)));
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type Test =
> 3 |         |string
    |         ^ Operator '|' must be spaced.
  4 |         | (((() => void)));
  5 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

        type Test = |string|(((() => void)))|string;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = | string | (((() => void))) | string;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = |string|(((() => void)))|string;
    |                     ^ Operator '|' must be spaced.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = |string|(((() => void)))|string;
    |                            ^ Operator '|' must be spaced.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test = |string|(((() => void)))|string;
    |                                             ^ Operator '|' must be spaced.
  3 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

        type Test=|string|(((() => void)))|string;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = |string | (((() => void))) | string;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test=|string|(((() => void)))|string;
    |                  ^ Operator '=' must be spaced.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test=|string|(((() => void)))|string;
    |                   ^ Operator '|' must be spaced.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test=|string|(((() => void)))|string;
    |                          ^ Operator '|' must be spaced.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test=|string|(((() => void)))|string;
    |                                           ^ Operator '|' must be spaced.
  3 |       
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

        type Test=(string&number)|string|(((() => void)));
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test = (string & number) | string | (((() => void)));
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test=(string&number)|string|(((() => void)));
    |                  ^ Operator '=' must be spaced.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test=(string&number)|string|(((() => void)));
    |                          ^ Operator '&' must be spaced.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test=(string&number)|string|(((() => void)));
    |                                  ^ Operator '|' must be spaced.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test=(string&number)|string|(((() => void)));
    |                                         ^ Operator '|' must be spaced.
  3 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

        type Test =
        &string
        & number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test =
        & string
        & number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type Test =
> 3 |         &string
    |         ^ Operator '&' must be spaced.
  4 |         & number;
  5 |       
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

        type Test =
        &string
        & (() => void);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test =
        & string
        & (() => void);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type Test =
> 3 |         &string
    |         ^ Operator '&' must be spaced.
  4 |         & (() => void);
  5 |       
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

        type Test =
        &string
        & (((() => void)));
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test =
        & string
        & (((() => void)));
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type Test =
> 3 |         &string
    |         ^ Operator '&' must be spaced.
  4 |         & (((() => void)));
  5 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

        type Test<T> = T extends boolean?true:false
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test<T> = T extends boolean ? true : false
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test<T> = T extends boolean?true:false
    |                                         ^ Operator '?' must be spaced.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test<T> = T extends boolean?true:false
    |                                              ^ Operator ':' must be spaced.
  3 |       
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts

        type Test<T> = T extends boolean? true :false
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test<T> = T extends boolean ? true : false
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test<T> = T extends boolean? true :false
    |                                         ^ Operator '?' must be spaced.
  3 |       
```

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test<T> = T extends boolean? true :false
    |                                                ^ Operator ':' must be spaced.
  3 |       
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts

        type Test<T> = T extends boolean?
          true :false
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test<T> = T extends boolean ?
          true : false
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test<T> = T extends boolean?
    |                                         ^ Operator '?' must be spaced.
  3 |           true :false
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type Test<T> = T extends boolean?
> 3 |           true :false
    |                ^ Operator ':' must be spaced.
  4 |       
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts

        type Test<T> = T extends boolean?
          true
          :false
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test<T> = T extends boolean ?
          true
          : false
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         type Test<T> = T extends boolean?
    |                                         ^ Operator '?' must be spaced.
  3 |           true
  4 |           :false
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type Test<T> = T extends boolean?
  3 |           true
> 4 |           :false
    |           ^ Operator ':' must be spaced.
  5 |       
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts

        type Test<T> = T extends boolean
          ?true:
          false
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        type Test<T> = T extends boolean
          ? true :
          false
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type Test<T> = T extends boolean
> 3 |           ?true:
    |           ^ Operator '?' must be spaced.
  4 |           false
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         type Test<T> = T extends boolean
> 3 |           ?true:
    |                ^ Operator ':' must be spaced.
  4 |           false
  5 |       
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string| number;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string | number;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           prop: string| number;
    |                       ^ Operator '|' must be spaced.
  4 |         }
  5 |       
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string| (() => void);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string | (() => void);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           prop: string| (() => void);
    |                       ^ Operator '|' must be spaced.
  4 |         }
  5 |       
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string| (((() => void)));
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string | (((() => void)));
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           prop: string| (((() => void)));
    |                       ^ Operator '|' must be spaced.
  4 |         }
  5 |       
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string |number;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string | number;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           prop: string |number;
    |                        ^ Operator '|' must be spaced.
  4 |         }
  5 |       
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string |(() => void);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string | (() => void);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           prop: string |(() => void);
    |                        ^ Operator '|' must be spaced.
  4 |         }
  5 |       
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string |(((() => void)));
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string | (((() => void)));
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           prop: string |(((() => void)));
    |                        ^ Operator '|' must be spaced.
  4 |         }
  5 |       
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: (() => boolean) |(() => void);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: (() => boolean) | (() => void);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           prop: (() => boolean) |(() => void);
    |                                 ^ Operator '|' must be spaced.
  4 |         }
  5 |       
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: (((() => boolean))) |(((() => void)));
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: (((() => boolean))) | (((() => void)));
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           prop: (((() => boolean))) |(((() => void)));
    |                                     ^ Operator '|' must be spaced.
  4 |         }
  5 |       
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string &number;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string & number;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           prop: string &number;
    |                        ^ Operator '&' must be spaced.
  4 |         }
  5 |       
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string &(() => void);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string & (() => void);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           prop: string &(() => void);
    |                        ^ Operator '&' must be spaced.
  4 |         }
  5 |       
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string &(((() => void)));
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string & (((() => void)));
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           prop: string &(((() => void)));
    |                        ^ Operator '&' must be spaced.
  4 |         }
  5 |       
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string& number;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string & number;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           prop: string& number;
    |                       ^ Operator '&' must be spaced.
  4 |         }
  5 |       
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string& (() => void);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string & (() => void);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           prop: string& (() => void);
    |                       ^ Operator '&' must be spaced.
  4 |         }
  5 |       
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string& (((() => void)));
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop: string & (((() => void)));
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
> 3 |           prop: string& (((() => void)));
    |                       ^ Operator '&' must be spaced.
  4 |         }
  5 |       
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop:
            |string
            | number;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop:
            | string
            | number;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
  3 |           prop:
> 4 |             |string
    |             ^ Operator '|' must be spaced.
  5 |             | number;
  6 |         }
  7 |       
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop:
            |string
            | (() => void);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop:
            | string
            | (() => void);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
  3 |           prop:
> 4 |             |string
    |             ^ Operator '|' must be spaced.
  5 |             | (() => void);
  6 |         }
  7 |       
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop:
            |string
            | (((() => void)));
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop:
            | string
            | (((() => void)));
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
  3 |           prop:
> 4 |             |string
    |             ^ Operator '|' must be spaced.
  5 |             | (((() => void)));
  6 |         }
  7 |       
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop:
            &string
            & number;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop:
            & string
            & number;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
  3 |           prop:
> 4 |             &string
    |             ^ Operator '&' must be spaced.
  5 |             & number;
  6 |         }
  7 |       
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop:
            &string
            & (() => void);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop:
            & string
            & (() => void);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
  3 |           prop:
> 4 |             &string
    |             ^ Operator '&' must be spaced.
  5 |             & (() => void);
  6 |         }
  7 |       
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts

        interface Test {
          prop:
            &string
            & (((() => void)));
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        interface Test {
          prop:
            & string
            & (((() => void)));
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         interface Test {
  3 |           prop:
> 4 |             &string
    |             ^ Operator '&' must be spaced.
  5 |             & (((() => void)));
  6 |         }
  7 |       
```

## Test #68

### Test Code

<!-- prettier-ignore -->
```ts

        const x: string &number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const x: string & number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const x: string &number;
    |                         ^ Operator '&' must be spaced.
  3 |       
```

## Test #69

### Test Code

<!-- prettier-ignore -->
```ts

        const x: string &(() => void);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const x: string & (() => void);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const x: string &(() => void);
    |                         ^ Operator '&' must be spaced.
  3 |       
```

## Test #70

### Test Code

<!-- prettier-ignore -->
```ts

        const x: string &(((() => void)));
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const x: string & (((() => void)));
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const x: string &(((() => void)));
    |                         ^ Operator '&' must be spaced.
  3 |       
```

## Test #71

### Test Code

<!-- prettier-ignore -->
```ts

        const x: string& number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const x: string & number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const x: string& number;
    |                        ^ Operator '&' must be spaced.
  3 |       
```

## Test #72

### Test Code

<!-- prettier-ignore -->
```ts

        const x: string& (() => void);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const x: string & (() => void);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const x: string& (() => void);
    |                        ^ Operator '&' must be spaced.
  3 |       
```

## Test #73

### Test Code

<!-- prettier-ignore -->
```ts

        const x: string& (((() => void)));
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const x: string & (((() => void)));
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const x: string& (((() => void)));
    |                        ^ Operator '&' must be spaced.
  3 |       
```

## Test #74

### Test Code

<!-- prettier-ignore -->
```ts

        const x: string| number;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const x: string | number;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const x: string| number;
    |                        ^ Operator '|' must be spaced.
  3 |       
```

## Test #75

### Test Code

<!-- prettier-ignore -->
```ts

        const x: string| (() => void);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const x: string | (() => void);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const x: string| (() => void);
    |                        ^ Operator '|' must be spaced.
  3 |       
```

## Test #76

### Test Code

<!-- prettier-ignore -->
```ts

        const x: string| (((() => void)));
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        const x: string | (((() => void)));
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const x: string| (((() => void)));
    |                        ^ Operator '|' must be spaced.
  3 |       
```

## Test #77

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          value: string |number;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          value: string | number;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           value: string |number;
    |                         ^ Operator '|' must be spaced.
  4 |         }
  5 |       
```

## Test #78

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          value: string |(() => void);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          value: string | (() => void);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           value: string |(() => void);
    |                         ^ Operator '|' must be spaced.
  4 |         }
  5 |       
```

## Test #79

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          value: string |(((() => void)));
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          value: string | (((() => void)));
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           value: string |(((() => void)));
    |                         ^ Operator '|' must be spaced.
  4 |         }
  5 |       
```

## Test #80

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          value: string& number;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          value: string & number;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           value: string& number;
    |                        ^ Operator '&' must be spaced.
  4 |         }
  5 |       
```

## Test #81

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          value: string& (() => void);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          value: string & (() => void);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           value: string& (() => void);
    |                        ^ Operator '&' must be spaced.
  4 |         }
  5 |       
```

## Test #82

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          value: string& (((() => void)));
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          value: string & (((() => void)));
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           value: string& (((() => void)));
    |                        ^ Operator '&' must be spaced.
  4 |         }
  5 |       
```

## Test #83

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          value: string| number;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          value: string | number;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           value: string| number;
    |                        ^ Operator '|' must be spaced.
  4 |         }
  5 |       
```

## Test #84

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          value: string| (() => void);
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          value: string | (() => void);
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           value: string| (() => void);
    |                        ^ Operator '|' must be spaced.
  4 |         }
  5 |       
```

## Test #85

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          value: string| (((() => void)));
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          value: string | (((() => void)));
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           value: string| (((() => void)));
    |                        ^ Operator '|' must be spaced.
  4 |         }
  5 |       
```

## Test #86

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          optional?= false;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          optional? = false;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           optional?= false;
    |                    ^ Operator '=' must be spaced.
  4 |         }
  5 |       
```

## Test #87

### Test Code

<!-- prettier-ignore -->
```ts

        function foo<T extends string &number>() {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function foo<T extends string & number>() {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo<T extends string &number>() {}
    |                                       ^ Operator '&' must be spaced.
  3 |       
```

## Test #88

### Test Code

<!-- prettier-ignore -->
```ts

        function foo<T extends string &(() => void)>() {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function foo<T extends string & (() => void)>() {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo<T extends string &(() => void)>() {}
    |                                       ^ Operator '&' must be spaced.
  3 |       
```

## Test #89

### Test Code

<!-- prettier-ignore -->
```ts

        function foo<T extends string &(((() => void)))>() {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function foo<T extends string & (((() => void)))>() {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo<T extends string &(((() => void)))>() {}
    |                                       ^ Operator '&' must be spaced.
  3 |       
```

## Test #90

### Test Code

<!-- prettier-ignore -->
```ts

        function foo<T extends string& number>() {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function foo<T extends string & number>() {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo<T extends string& number>() {}
    |                                      ^ Operator '&' must be spaced.
  3 |       
```

## Test #91

### Test Code

<!-- prettier-ignore -->
```ts

        function foo<T extends string& (() => void)>() {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function foo<T extends string & (() => void)>() {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo<T extends string& (() => void)>() {}
    |                                      ^ Operator '&' must be spaced.
  3 |       
```

## Test #92

### Test Code

<!-- prettier-ignore -->
```ts

        function foo<T extends string& (((() => void)))>() {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function foo<T extends string & (((() => void)))>() {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo<T extends string& (((() => void)))>() {}
    |                                      ^ Operator '&' must be spaced.
  3 |       
```

## Test #93

### Test Code

<!-- prettier-ignore -->
```ts

        function foo<T extends string |number>() {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function foo<T extends string | number>() {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo<T extends string |number>() {}
    |                                       ^ Operator '|' must be spaced.
  3 |       
```

## Test #94

### Test Code

<!-- prettier-ignore -->
```ts

        function foo<T extends string |(() => void)>() {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function foo<T extends string | (() => void)>() {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo<T extends string |(() => void)>() {}
    |                                       ^ Operator '|' must be spaced.
  3 |       
```

## Test #95

### Test Code

<!-- prettier-ignore -->
```ts

        function foo<T extends string |(((() => void)))>() {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function foo<T extends string | (((() => void)))>() {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo<T extends string |(((() => void)))>() {}
    |                                       ^ Operator '|' must be spaced.
  3 |       
```

## Test #96

### Test Code

<!-- prettier-ignore -->
```ts

        function foo<T extends string| number>() {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function foo<T extends string | number>() {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo<T extends string| number>() {}
    |                                      ^ Operator '|' must be spaced.
  3 |       
```

## Test #97

### Test Code

<!-- prettier-ignore -->
```ts

        function foo<T extends string| (() => void)>() {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function foo<T extends string | (() => void)>() {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo<T extends string| (() => void)>() {}
    |                                      ^ Operator '|' must be spaced.
  3 |       
```

## Test #98

### Test Code

<!-- prettier-ignore -->
```ts

        function foo<T extends string| (((() => void)))>() {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function foo<T extends string | (((() => void)))>() {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function foo<T extends string| (((() => void)))>() {}
    |                                      ^ Operator '|' must be spaced.
  3 |       
```

## Test #99

### Test Code

<!-- prettier-ignore -->
```ts

        function bar(): string &number {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function bar(): string & number {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function bar(): string &number {}
    |                                ^ Operator '&' must be spaced.
  3 |       
```

## Test #100

### Test Code

<!-- prettier-ignore -->
```ts

        function bar(): string &(() => void) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function bar(): string & (() => void) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function bar(): string &(() => void) {}
    |                                ^ Operator '&' must be spaced.
  3 |       
```

## Test #101

### Test Code

<!-- prettier-ignore -->
```ts

        function bar(): string &(((() => void))) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function bar(): string & (((() => void))) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function bar(): string &(((() => void))) {}
    |                                ^ Operator '&' must be spaced.
  3 |       
```

## Test #102

### Test Code

<!-- prettier-ignore -->
```ts

        function bar(): string& number {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function bar(): string & number {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function bar(): string& number {}
    |                               ^ Operator '&' must be spaced.
  3 |       
```

## Test #103

### Test Code

<!-- prettier-ignore -->
```ts

        function bar(): string& (() => void) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function bar(): string & (() => void) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function bar(): string& (() => void) {}
    |                               ^ Operator '&' must be spaced.
  3 |       
```

## Test #104

### Test Code

<!-- prettier-ignore -->
```ts

        function bar(): string& (((() => void))) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function bar(): string & (((() => void))) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function bar(): string& (((() => void))) {}
    |                               ^ Operator '&' must be spaced.
  3 |       
```

## Test #105

### Test Code

<!-- prettier-ignore -->
```ts

        function bar(): string |number {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function bar(): string | number {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function bar(): string |number {}
    |                                ^ Operator '|' must be spaced.
  3 |       
```

## Test #106

### Test Code

<!-- prettier-ignore -->
```ts

        function bar(): string |(() => void) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function bar(): string | (() => void) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function bar(): string |(() => void) {}
    |                                ^ Operator '|' must be spaced.
  3 |       
```

## Test #107

### Test Code

<!-- prettier-ignore -->
```ts

        function bar(): string |(((() => void))) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function bar(): string | (((() => void))) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function bar(): string |(((() => void))) {}
    |                                ^ Operator '|' must be spaced.
  3 |       
```

## Test #108

### Test Code

<!-- prettier-ignore -->
```ts

        function bar(): string| number {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function bar(): string | number {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function bar(): string| number {}
    |                               ^ Operator '|' must be spaced.
  3 |       
```

## Test #109

### Test Code

<!-- prettier-ignore -->
```ts

        function bar(): string| (() => void) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function bar(): string | (() => void) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function bar(): string| (() => void) {}
    |                               ^ Operator '|' must be spaced.
  3 |       
```

## Test #110

### Test Code

<!-- prettier-ignore -->
```ts

        function bar(): string| (((() => void))) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function bar(): string | (((() => void))) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function bar(): string| (((() => void))) {}
    |                               ^ Operator '|' must be spaced.
  3 |       
```

## Test #111

### Test Code

<!-- prettier-ignore -->
```ts

        function bar(): (() => boolean)| (() => void) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function bar(): (() => boolean) | (() => void) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function bar(): (() => boolean)| (() => void) {}
    |                                        ^ Operator '|' must be spaced.
  3 |       
```

## Test #112

### Test Code

<!-- prettier-ignore -->
```ts

        function bar(): (((() => boolean)))| (((() => void))) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function bar(): (((() => boolean))) | (((() => void))) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function bar(): (((() => boolean)))| (((() => void))) {}
    |                                            ^ Operator '|' must be spaced.
  3 |       
```

## Test #113

### Test Code

<!-- prettier-ignore -->
```ts

        function bar(): (() => boolean)& (() => void) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function bar(): (() => boolean) & (() => void) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function bar(): (() => boolean)& (() => void) {}
    |                                        ^ Operator '&' must be spaced.
  3 |       
```

## Test #114

### Test Code

<!-- prettier-ignore -->
```ts

        function bar(): (((() => boolean)))& (((() => void))) {}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        function bar(): (((() => boolean))) & (((() => void))) {}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function bar(): (((() => boolean)))& (((() => void))) {}
    |                                            ^ Operator '&' must be spaced.
  3 |       
```
