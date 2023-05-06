# strict-enums-comparison

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

        enum Fruit {
          Apple,
        }
        Fruit.Apple < 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Fruit {
  3 |           Apple,
  4 |         }
> 5 |         Fruit.Apple < 1;
    |         ^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  6 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

        enum Fruit {
          Apple,
        }
        Fruit.Apple > 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Fruit {
  3 |           Apple,
  4 |         }
> 5 |         Fruit.Apple > 1;
    |         ^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  6 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

        enum Fruit {
          Apple,
        }
        Fruit.Apple == 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Fruit {
  3 |           Apple,
  4 |         }
> 5 |         Fruit.Apple == 1;
    |         ^^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  6 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

        enum Fruit {
          Apple,
        }
        Fruit.Apple === 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Fruit {
  3 |           Apple,
  4 |         }
> 5 |         Fruit.Apple === 1;
    |         ^^^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  6 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        enum Fruit {
          Apple,
        }
        Fruit.Apple != 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Fruit {
  3 |           Apple,
  4 |         }
> 5 |         Fruit.Apple != 1;
    |         ^^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  6 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        enum Fruit {
          Apple,
        }
        Fruit.Apple !== 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Fruit {
  3 |           Apple,
  4 |         }
> 5 |         Fruit.Apple !== 1;
    |         ^^^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  6 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        enum Fruit {
          Apple = 0,
          Banana = 'banana',
        }
        Fruit.Apple === 0;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Fruit {
  3 |           Apple = 0,
  4 |           Banana = 'banana',
  5 |         }
> 6 |         Fruit.Apple === 0;
    |         ^^^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  7 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        enum Fruit {
          Apple = 0,
          Banana = 'banana',
        }
        Fruit.Banana === '';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Fruit {
  3 |           Apple = 0,
  4 |           Banana = 'banana',
  5 |         }
> 6 |         Fruit.Banana === '';
    |         ^^^^^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  7 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        enum Vegetable {
          Asparagus = 'asparagus',
          Beet = 'beet',
          Celery = 'celery',
        }
        Vegetable.Asparagus === 'beet';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Vegetable {
  3 |           Asparagus = 'asparagus',
  4 |           Beet = 'beet',
  5 |           Celery = 'celery',
  6 |         }
> 7 |         Vegetable.Asparagus === 'beet';
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  8 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

        enum Fruit {
          Apple,
          Banana,
          Cherry,
        }
        1 === Fruit.Apple;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Fruit {
  3 |           Apple,
  4 |           Banana,
  5 |           Cherry,
  6 |         }
> 7 |         1 === Fruit.Apple;
    |         ^^^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  8 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

        enum Vegetable {
          Asparagus = 'asparagus',
          Beet = 'beet',
          Celery = 'celery',
        }
        'beet' === Vegetable.Asparagus;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Vegetable {
  3 |           Asparagus = 'asparagus',
  4 |           Beet = 'beet',
  5 |           Celery = 'celery',
  6 |         }
> 7 |         'beet' === Vegetable.Asparagus;
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  8 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

        enum Fruit {
          Apple,
          Banana,
          Cherry,
        }
        const fruit = Fruit.Apple;
        fruit === 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Fruit {
  3 |           Apple,
  4 |           Banana,
  5 |           Cherry,
  6 |         }
  7 |         const fruit = Fruit.Apple;
> 8 |         fruit === 1;
    |         ^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  9 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

        enum Vegetable {
          Asparagus = 'asparagus',
          Beet = 'beet',
          Celery = 'celery',
        }
        const vegetable = Vegetable.Asparagus;
        vegetable === 'beet';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Vegetable {
  3 |           Asparagus = 'asparagus',
  4 |           Beet = 'beet',
  5 |           Celery = 'celery',
  6 |         }
  7 |         const vegetable = Vegetable.Asparagus;
> 8 |         vegetable === 'beet';
    |         ^^^^^^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  9 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

        enum Fruit {
          Apple,
          Banana,
          Cherry,
        }
        const fruit = Fruit.Apple;
        1 === fruit;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Fruit {
  3 |           Apple,
  4 |           Banana,
  5 |           Cherry,
  6 |         }
  7 |         const fruit = Fruit.Apple;
> 8 |         1 === fruit;
    |         ^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  9 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

        enum Vegetable {
          Asparagus = 'asparagus',
          Beet = 'beet',
          Celery = 'celery',
        }
        const vegetable = Vegetable.Asparagus;
        'beet' === vegetable;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum Vegetable {
  3 |           Asparagus = 'asparagus',
  4 |           Beet = 'beet',
  5 |           Celery = 'celery',
  6 |         }
  7 |         const vegetable = Vegetable.Asparagus;
> 8 |         'beet' === vegetable;
    |         ^^^^^^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  9 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
enum Fruit { Apple, Banana, Cherry }enum Fruit2 {
  Apple2,
  Banana2,
  Cherry2,
}
      Fruit.Apple === Fruit2.Apple2;
        
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 | enum Fruit { Apple, Banana, Cherry }enum Fruit2 {
  2 |   Apple2,
  3 |   Banana2,
  4 |   Cherry2,
  5 | }
> 6 |       Fruit.Apple === Fruit2.Apple2;
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  7 |         
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

        enum Vegetable {
          Asparagus = 'asparagus',
          Beet = 'beet',
          Celery = 'celery',
        }
        enum Vegetable2 {
          Asparagus2 = 'asparagus2',
          Beet2 = 'beet2',
          Celery2 = 'celery2',
        }
        Vegetable.Asparagus === Vegetable2.Asparagus2;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         enum Vegetable {
   3 |           Asparagus = 'asparagus',
   4 |           Beet = 'beet',
   5 |           Celery = 'celery',
   6 |         }
   7 |         enum Vegetable2 {
   8 |           Asparagus2 = 'asparagus2',
   9 |           Beet2 = 'beet2',
  10 |           Celery2 = 'celery2',
  11 |         }
> 12 |         Vegetable.Asparagus === Vegetable2.Asparagus2;
     |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  13 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
enum Fruit { Apple, Banana, Cherry }enum Fruit2 {
  Apple2,
  Banana2,
  Cherry2,
}
      const fruit = Fruit.Apple;
      fruit === Fruit2.Apple2;
        
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 | enum Fruit { Apple, Banana, Cherry }enum Fruit2 {
  2 |   Apple2,
  3 |   Banana2,
  4 |   Cherry2,
  5 | }
  6 |       const fruit = Fruit.Apple;
> 7 |       fruit === Fruit2.Apple2;
    |       ^^^^^^^^^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  8 |         
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

        enum Vegetable {
          Asparagus = 'asparagus',
          Beet = 'beet',
          Celery = 'celery',
        }
        enum Vegetable2 {
          Asparagus2 = 'asparagus2',
          Beet2 = 'beet2',
          Celery2 = 'celery2',
        }
        const vegetable = Vegetable.Asparagus;
        vegetable === Vegetable2.Asparagus2;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         enum Vegetable {
   3 |           Asparagus = 'asparagus',
   4 |           Beet = 'beet',
   5 |           Celery = 'celery',
   6 |         }
   7 |         enum Vegetable2 {
   8 |           Asparagus2 = 'asparagus2',
   9 |           Beet2 = 'beet2',
  10 |           Celery2 = 'celery2',
  11 |         }
  12 |         const vegetable = Vegetable.Asparagus;
> 13 |         vegetable === Vegetable2.Asparagus2;
     |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  14 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

        enum Str {
          A = 'a',
        }
        enum Num {
          B = 1,
        }
        enum Mixed {
          A = 'a',
          B = 1,
        }

        declare const str: Str;
        declare const num: Num;
        declare const mixed: Mixed;

        // following are all errors because the value might be an enum value
        str === 'a';
        num === 1;
        mixed === 'a';
        mixed === 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         enum Str {
   3 |           A = 'a',
   4 |         }
   5 |         enum Num {
   6 |           B = 1,
   7 |         }
   8 |         enum Mixed {
   9 |           A = 'a',
  10 |           B = 1,
  11 |         }
  12 |
  13 |         declare const str: Str;
  14 |         declare const num: Num;
  15 |         declare const mixed: Mixed;
  16 |
  17 |         // following are all errors because the value might be an enum value
> 18 |         str === 'a';
     |         ^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  19 |         num === 1;
  20 |         mixed === 'a';
  21 |         mixed === 1;
  22 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         enum Str {
   3 |           A = 'a',
   4 |         }
   5 |         enum Num {
   6 |           B = 1,
   7 |         }
   8 |         enum Mixed {
   9 |           A = 'a',
  10 |           B = 1,
  11 |         }
  12 |
  13 |         declare const str: Str;
  14 |         declare const num: Num;
  15 |         declare const mixed: Mixed;
  16 |
  17 |         // following are all errors because the value might be an enum value
  18 |         str === 'a';
> 19 |         num === 1;
     |         ^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  20 |         mixed === 'a';
  21 |         mixed === 1;
  22 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         enum Str {
   3 |           A = 'a',
   4 |         }
   5 |         enum Num {
   6 |           B = 1,
   7 |         }
   8 |         enum Mixed {
   9 |           A = 'a',
  10 |           B = 1,
  11 |         }
  12 |
  13 |         declare const str: Str;
  14 |         declare const num: Num;
  15 |         declare const mixed: Mixed;
  16 |
  17 |         // following are all errors because the value might be an enum value
  18 |         str === 'a';
  19 |         num === 1;
> 20 |         mixed === 'a';
     |         ^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  21 |         mixed === 1;
  22 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         enum Str {
   3 |           A = 'a',
   4 |         }
   5 |         enum Num {
   6 |           B = 1,
   7 |         }
   8 |         enum Mixed {
   9 |           A = 'a',
  10 |           B = 1,
  11 |         }
  12 |
  13 |         declare const str: Str;
  14 |         declare const num: Num;
  15 |         declare const mixed: Mixed;
  16 |
  17 |         // following are all errors because the value might be an enum value
  18 |         str === 'a';
  19 |         num === 1;
  20 |         mixed === 'a';
> 21 |         mixed === 1;
     |         ^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  22 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

        enum Fruit {
          Apple = 'apple',
        }
        type __String =
          | (string & { __escapedIdentifier: void })
          | (void & { __escapedIdentifier: void })
          | Fruit;
        declare const weirdString: __String;
        weirdString === 'someArbitraryValue';
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         enum Fruit {
   3 |           Apple = 'apple',
   4 |         }
   5 |         type __String =
   6 |           | (string & { __escapedIdentifier: void })
   7 |           | (void & { __escapedIdentifier: void })
   8 |           | Fruit;
   9 |         declare const weirdString: __String;
> 10 |         weirdString === 'someArbitraryValue';
     |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The two values in this comparison do not have a shared enum type.
  11 |       
```
