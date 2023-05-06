# strict

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

window.whatevs = {
  myFunc() {
    console.log('yep');
  },
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | window.whatevs = {
> 3 |   myFunc() {
    |         ^^^^
> 4 |     console.log('yep');
    | ^^^^^^^^^^^^^^^^^^^^^^^
> 5 |   },
    | ^^^^ Use the function form of 'use strict'.
  6 | };
  7 |       
```
