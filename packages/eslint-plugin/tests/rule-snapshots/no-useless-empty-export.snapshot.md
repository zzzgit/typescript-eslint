# no-useless-empty-export

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

export const _ = {};
export {};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

export const _ = {};

      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export const _ = {};
> 3 | export {};
    | ^^^^^^^^^^ Empty export does nothing and can be removed.
  4 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

export * from '_';
export {};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

export * from '_';

      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | export * from '_';
> 3 | export {};
    | ^^^^^^^^^^ Empty export does nothing and can be removed.
  4 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

export {};
export * from '_';
      
```

### Fix Output

<!-- prettier-ignore -->
```ts


export * from '_';
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export {};
    | ^^^^^^^^^^ Empty export does nothing and can be removed.
  3 | export * from '_';
  4 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

const _ = {};
export default _;
export {};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const _ = {};
export default _;

      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const _ = {};
  3 | export default _;
> 4 | export {};
    | ^^^^^^^^^^ Empty export does nothing and can be removed.
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

export {};
const _ = {};
export default _;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts


const _ = {};
export default _;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | export {};
    | ^^^^^^^^^^ Empty export does nothing and can be removed.
  3 | const _ = {};
  4 | export default _;
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

const _ = {};
export { _ };
export {};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

const _ = {};
export { _ };

      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const _ = {};
  3 | export { _ };
> 4 | export {};
    | ^^^^^^^^^^ Empty export does nothing and can be removed.
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

import _ = require('_');
export {};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

import _ = require('_');

      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | import _ = require('_');
> 3 | export {};
    | ^^^^^^^^^^ Empty export does nothing and can be removed.
  4 |       
```
