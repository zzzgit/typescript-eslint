# prefer-readonly

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiableStatic {
          private static incorrectlyModifiableStatic = 7;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiableStatic {
          private static readonly incorrectlyModifiableStatic = 7;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class TestIncorrectlyModifiableStatic {
> 3 |           private static incorrectlyModifiableStatic = 7;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member 'incorrectlyModifiableStatic' is never reassigned; mark it as `readonly`.
  4 |         }
  5 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiableStaticArrow {
          private static incorrectlyModifiableStaticArrow = () => 7;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiableStaticArrow {
          private static readonly incorrectlyModifiableStaticArrow = () => 7;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class TestIncorrectlyModifiableStaticArrow {
> 3 |           private static incorrectlyModifiableStaticArrow = () => 7;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member 'incorrectlyModifiableStaticArrow' is never reassigned; mark it as `readonly`.
  4 |         }
  5 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiableInline {
          private incorrectlyModifiableInline = 7;

          public createConfusingChildClass() {
            return class {
              private incorrectlyModifiableInline = 7;
            };
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiableInline {
          private readonly incorrectlyModifiableInline = 7;

          public createConfusingChildClass() {
            return class {
              private readonly incorrectlyModifiableInline = 7;
            };
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class TestIncorrectlyModifiableInline {
>  3 |           private incorrectlyModifiableInline = 7;
     |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member 'incorrectlyModifiableInline' is never reassigned; mark it as `readonly`.
   4 |
   5 |           public createConfusingChildClass() {
   6 |             return class {
   7 |               private incorrectlyModifiableInline = 7;
   8 |             };
   9 |           }
  10 |         }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class TestIncorrectlyModifiableInline {
   3 |           private incorrectlyModifiableInline = 7;
   4 |
   5 |           public createConfusingChildClass() {
   6 |             return class {
>  7 |               private incorrectlyModifiableInline = 7;
     |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member 'incorrectlyModifiableInline' is never reassigned; mark it as `readonly`.
   8 |             };
   9 |           }
  10 |         }
  11 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiableDelayed {
          private incorrectlyModifiableDelayed = 7;

          public constructor() {
            this.incorrectlyModifiableDelayed = 7;
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiableDelayed {
          private readonly incorrectlyModifiableDelayed = 7;

          public constructor() {
            this.incorrectlyModifiableDelayed = 7;
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class TestIncorrectlyModifiableDelayed {
> 3 |           private incorrectlyModifiableDelayed = 7;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member 'incorrectlyModifiableDelayed' is never reassigned; mark it as `readonly`.
  4 |
  5 |           public constructor() {
  6 |             this.incorrectlyModifiableDelayed = 7;
  7 |           }
  8 |         }
  9 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        class TestChildClassExpressionModifiable {
          private childClassExpressionModifiable = 7;

          public createConfusingChildClass() {
            return class {
              private childClassExpressionModifiable = 7;

              mutate() {
                this.childClassExpressionModifiable += 1;
              }
            };
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class TestChildClassExpressionModifiable {
          private readonly childClassExpressionModifiable = 7;

          public createConfusingChildClass() {
            return class {
              private childClassExpressionModifiable = 7;

              mutate() {
                this.childClassExpressionModifiable += 1;
              }
            };
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class TestChildClassExpressionModifiable {
>  3 |           private childClassExpressionModifiable = 7;
     |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member 'childClassExpressionModifiable' is never reassigned; mark it as `readonly`.
   4 |
   5 |           public createConfusingChildClass() {
   6 |             return class {
   7 |               private childClassExpressionModifiable = 7;
   8 |
   9 |               mutate() {
  10 |                 this.childClassExpressionModifiable += 1;
  11 |               }
  12 |             };
  13 |           }
  14 |         }
  15 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiablePostMinus {
          private incorrectlyModifiablePostMinus = 7;

          public mutate() {
            this.incorrectlyModifiablePostMinus - 1;
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiablePostMinus {
          private readonly incorrectlyModifiablePostMinus = 7;

          public mutate() {
            this.incorrectlyModifiablePostMinus - 1;
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class TestIncorrectlyModifiablePostMinus {
> 3 |           private incorrectlyModifiablePostMinus = 7;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member 'incorrectlyModifiablePostMinus' is never reassigned; mark it as `readonly`.
  4 |
  5 |           public mutate() {
  6 |             this.incorrectlyModifiablePostMinus - 1;
  7 |           }
  8 |         }
  9 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiablePostPlus {
          private incorrectlyModifiablePostPlus = 7;

          public mutate() {
            this.incorrectlyModifiablePostPlus + 1;
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiablePostPlus {
          private readonly incorrectlyModifiablePostPlus = 7;

          public mutate() {
            this.incorrectlyModifiablePostPlus + 1;
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class TestIncorrectlyModifiablePostPlus {
> 3 |           private incorrectlyModifiablePostPlus = 7;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member 'incorrectlyModifiablePostPlus' is never reassigned; mark it as `readonly`.
  4 |
  5 |           public mutate() {
  6 |             this.incorrectlyModifiablePostPlus + 1;
  7 |           }
  8 |         }
  9 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiablePreMinus {
          private incorrectlyModifiablePreMinus = 7;

          public mutate() {
            -this.incorrectlyModifiablePreMinus;
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiablePreMinus {
          private readonly incorrectlyModifiablePreMinus = 7;

          public mutate() {
            -this.incorrectlyModifiablePreMinus;
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class TestIncorrectlyModifiablePreMinus {
> 3 |           private incorrectlyModifiablePreMinus = 7;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member 'incorrectlyModifiablePreMinus' is never reassigned; mark it as `readonly`.
  4 |
  5 |           public mutate() {
  6 |             -this.incorrectlyModifiablePreMinus;
  7 |           }
  8 |         }
  9 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiablePrePlus {
          private incorrectlyModifiablePrePlus = 7;

          public mutate() {
            +this.incorrectlyModifiablePrePlus;
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiablePrePlus {
          private readonly incorrectlyModifiablePrePlus = 7;

          public mutate() {
            +this.incorrectlyModifiablePrePlus;
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class TestIncorrectlyModifiablePrePlus {
> 3 |           private incorrectlyModifiablePrePlus = 7;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member 'incorrectlyModifiablePrePlus' is never reassigned; mark it as `readonly`.
  4 |
  5 |           public mutate() {
  6 |             +this.incorrectlyModifiablePrePlus;
  7 |           }
  8 |         }
  9 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

        class TestOverlappingClassVariable {
          private overlappingClassVariable = 7;

          public workWithSimilarClass(other: SimilarClass) {
            other.overlappingClassVariable = 7;
          }
        }

        class SimilarClass {
          public overlappingClassVariable = 7;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class TestOverlappingClassVariable {
          private readonly overlappingClassVariable = 7;

          public workWithSimilarClass(other: SimilarClass) {
            other.overlappingClassVariable = 7;
          }
        }

        class SimilarClass {
          public overlappingClassVariable = 7;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class TestOverlappingClassVariable {
>  3 |           private overlappingClassVariable = 7;
     |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member 'overlappingClassVariable' is never reassigned; mark it as `readonly`.
   4 |
   5 |           public workWithSimilarClass(other: SimilarClass) {
   6 |             other.overlappingClassVariable = 7;
   7 |           }
   8 |         }
   9 |
  10 |         class SimilarClass {
  11 |           public overlappingClassVariable = 7;
  12 |         }
  13 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiableParameter {
          public constructor(private incorrectlyModifiableParameter = 7) {}
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiableParameter {
          public constructor(private readonly incorrectlyModifiableParameter = 7) {}
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class TestIncorrectlyModifiableParameter {
> 3 |           public constructor(private incorrectlyModifiableParameter = 7) {}
    |                                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member 'incorrectlyModifiableParameter' is never reassigned; mark it as `readonly`.
  4 |         }
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiableParameter {
          public constructor(
            public ignore: boolean,
            private incorrectlyModifiableParameter = 7,
          ) {}
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class TestIncorrectlyModifiableParameter {
          public constructor(
            public ignore: boolean,
            private readonly incorrectlyModifiableParameter = 7,
          ) {}
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class TestIncorrectlyModifiableParameter {
  3 |           public constructor(
  4 |             public ignore: boolean,
> 5 |             private incorrectlyModifiableParameter = 7,
    |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member 'incorrectlyModifiableParameter' is never reassigned; mark it as `readonly`.
  6 |           ) {}
  7 |         }
  8 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

        class TestCorrectlyNonInlineLambdas {
          private incorrectlyInlineLambda = () => 7;
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class TestCorrectlyNonInlineLambdas {
          private readonly incorrectlyInlineLambda = () => 7;
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class TestCorrectlyNonInlineLambdas {
> 3 |           private incorrectlyInlineLambda = () => 7;
    |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member 'incorrectlyInlineLambda' is never reassigned; mark it as `readonly`.
  4 |         }
  5 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

function ClassWithName<TBase extends new (...args: any[]) => {}>(Base: TBase) {
  return class extends Base {
    private _name: string;
  };
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

function ClassWithName<TBase extends new (...args: any[]) => {}>(Base: TBase) {
  return class extends Base {
    private readonly _name: string;
  };
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function ClassWithName<TBase extends new (...args: any[]) => {}>(Base: TBase) {
  3 |   return class extends Base {
> 4 |     private _name: string;
    |     ^^^^^^^^^^^^^^^^^^^^^^ Member '_name' is never reassigned; mark it as `readonly`.
  5 |   };
  6 | }
  7 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          private testObj = {
            prop: '',
          };

          public test(): void {
            this.testObj.prop = '';
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          private readonly testObj = {
            prop: '',
          };

          public test(): void {
            this.testObj.prop = '';
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class Test {
>  3 |           private testObj = {
     |           ^^^^^^^^^^^^^^^^^^^
>  4 |             prop: '',
     | ^^^^^^^^^^^^^^^^^^^^^
>  5 |           };
     | ^^^^^^^^^^^^^ Member 'testObj' is never reassigned; mark it as `readonly`.
   6 |
   7 |           public test(): void {
   8 |             this.testObj.prop = '';
   9 |           }
  10 |         }
  11 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

        class TestObject {
          public prop: number;
        }

        class Test {
          private testObj = new TestObject();

          public test(): void {
            this.testObj.prop = 10;
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class TestObject {
          public prop: number;
        }

        class Test {
          private readonly testObj = new TestObject();

          public test(): void {
            this.testObj.prop = 10;
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class TestObject {
   3 |           public prop: number;
   4 |         }
   5 |
   6 |         class Test {
>  7 |           private testObj = new TestObject();
     |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Member 'testObj' is never reassigned; mark it as `readonly`.
   8 |
   9 |           public test(): void {
  10 |             this.testObj.prop = 10;
  11 |           }
  12 |         }
  13 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          private testObj = {
            prop: '',
          };
          public test(): void {
            this.testObj.prop;
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          private readonly testObj = {
            prop: '',
          };
          public test(): void {
            this.testObj.prop;
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class Test {
>  3 |           private testObj = {
     |           ^^^^^^^^^^^^^^^^^^^
>  4 |             prop: '',
     | ^^^^^^^^^^^^^^^^^^^^^
>  5 |           };
     | ^^^^^^^^^^^^^ Member 'testObj' is never reassigned; mark it as `readonly`.
   6 |           public test(): void {
   7 |             this.testObj.prop;
   8 |           }
   9 |         }
  10 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          private testObj = {};
          public test(): void {
            this.testObj?.prop;
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          private readonly testObj = {};
          public test(): void {
            this.testObj?.prop;
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           private testObj = {};
    |           ^^^^^^^^^^^^^^^^^^^^^ Member 'testObj' is never reassigned; mark it as `readonly`.
  4 |           public test(): void {
  5 |             this.testObj?.prop;
  6 |           }
  7 |         }
  8 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          private testObj = {};
          public test(): void {
            this.testObj!.prop;
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          private readonly testObj = {};
          public test(): void {
            this.testObj!.prop;
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           private testObj = {};
    |           ^^^^^^^^^^^^^^^^^^^^^ Member 'testObj' is never reassigned; mark it as `readonly`.
  4 |           public test(): void {
  5 |             this.testObj!.prop;
  6 |           }
  7 |         }
  8 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          private testObj = {};
          public test(): void {
            this.testObj.prop.prop = '';
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          private readonly testObj = {};
          public test(): void {
            this.testObj.prop.prop = '';
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           private testObj = {};
    |           ^^^^^^^^^^^^^^^^^^^^^ Member 'testObj' is never reassigned; mark it as `readonly`.
  4 |           public test(): void {
  5 |             this.testObj.prop.prop = '';
  6 |           }
  7 |         }
  8 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          private testObj = {};
          public test(): void {
            this.testObj.prop.doesSomething();
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          private readonly testObj = {};
          public test(): void {
            this.testObj.prop.doesSomething();
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           private testObj = {};
    |           ^^^^^^^^^^^^^^^^^^^^^ Member 'testObj' is never reassigned; mark it as `readonly`.
  4 |           public test(): void {
  5 |             this.testObj.prop.doesSomething();
  6 |           }
  7 |         }
  8 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          private testObj = {};
          public test(): void {
            this.testObj?.prop.prop;
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          private readonly testObj = {};
          public test(): void {
            this.testObj?.prop.prop;
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           private testObj = {};
    |           ^^^^^^^^^^^^^^^^^^^^^ Member 'testObj' is never reassigned; mark it as `readonly`.
  4 |           public test(): void {
  5 |             this.testObj?.prop.prop;
  6 |           }
  7 |         }
  8 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          private testObj = {};
          public test(): void {
            this.testObj?.prop?.prop;
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          private readonly testObj = {};
          public test(): void {
            this.testObj?.prop?.prop;
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           private testObj = {};
    |           ^^^^^^^^^^^^^^^^^^^^^ Member 'testObj' is never reassigned; mark it as `readonly`.
  4 |           public test(): void {
  5 |             this.testObj?.prop?.prop;
  6 |           }
  7 |         }
  8 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          private testObj = {};
          public test(): void {
            this.testObj.prop?.prop;
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          private readonly testObj = {};
          public test(): void {
            this.testObj.prop?.prop;
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           private testObj = {};
    |           ^^^^^^^^^^^^^^^^^^^^^ Member 'testObj' is never reassigned; mark it as `readonly`.
  4 |           public test(): void {
  5 |             this.testObj.prop?.prop;
  6 |           }
  7 |         }
  8 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

        class Test {
          private testObj = {};
          public test(): void {
            this.testObj!.prop?.prop;
          }
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        class Test {
          private readonly testObj = {};
          public test(): void {
            this.testObj!.prop?.prop;
          }
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Test {
> 3 |           private testObj = {};
    |           ^^^^^^^^^^^^^^^^^^^^^ Member 'testObj' is never reassigned; mark it as `readonly`.
  4 |           public test(): void {
  5 |             this.testObj!.prop?.prop;
  6 |           }
  7 |         }
  8 |       
```
