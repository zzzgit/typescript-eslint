# no-unsafe-declaration-merging

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

interface Foo {}
class Foo {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | interface Foo {}
    |           ^^^ Unsafe declaration merging between classes and interfaces.
  3 | class Foo {}
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Foo {}
> 3 | class Foo {}
    |       ^^^ Unsafe declaration merging between classes and interfaces.
  4 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {}
interface Foo {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | class Foo {}
    |       ^^^ Unsafe declaration merging between classes and interfaces.
  3 | interface Foo {}
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {}
> 3 | interface Foo {}
    |           ^^^ Unsafe declaration merging between classes and interfaces.
  4 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

declare global {
  interface Foo {}
  class Foo {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare global {
> 3 |   interface Foo {}
    |             ^^^ Unsafe declaration merging between classes and interfaces.
  4 |   class Foo {}
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare global {
  3 |   interface Foo {}
> 4 |   class Foo {}
    |         ^^^ Unsafe declaration merging between classes and interfaces.
  5 | }
  6 |       
```
