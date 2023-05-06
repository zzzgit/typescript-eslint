# non-nullable-type-assertion-style

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

declare const maybe: string | undefined;
const bar = maybe as string;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare const maybe: string | undefined;
const bar = maybe!;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const maybe: string | undefined;
> 3 | const bar = maybe as string;
    |             ^^^^^^^^^^^^^^^ Use a ! assertion to more succinctly remove null and undefined from the type.
  4 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

declare const maybe: string | null;
const bar = maybe as string;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare const maybe: string | null;
const bar = maybe!;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const maybe: string | null;
> 3 | const bar = maybe as string;
    |             ^^^^^^^^^^^^^^^ Use a ! assertion to more succinctly remove null and undefined from the type.
  4 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

declare const maybe: string | null | undefined;
const bar = maybe as string;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

declare const maybe: string | null | undefined;
const bar = maybe!;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const maybe: string | null | undefined;
> 3 | const bar = maybe as string;
    |             ^^^^^^^^^^^^^^^ Use a ! assertion to more succinctly remove null and undefined from the type.
  4 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

type Type = { value: string };
declare const maybe: Type | undefined;
const bar = maybe as Type;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type Type = { value: string };
declare const maybe: Type | undefined;
const bar = maybe!;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type Type = { value: string };
  3 | declare const maybe: Type | undefined;
> 4 | const bar = maybe as Type;
    |             ^^^^^^^^^^^^^ Use a ! assertion to more succinctly remove null and undefined from the type.
  5 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

interface Interface {
  value: string;
}
declare const maybe: Interface | undefined;
const bar = maybe as Interface;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

interface Interface {
  value: string;
}
declare const maybe: Interface | undefined;
const bar = maybe!;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface Interface {
  3 |   value: string;
  4 | }
  5 | declare const maybe: Interface | undefined;
> 6 | const bar = maybe as Interface;
    |             ^^^^^^^^^^^^^^^^^^ Use a ! assertion to more succinctly remove null and undefined from the type.
  7 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

type T = string | null;
declare const x: T;

const y = x as NonNullable<T>;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type T = string | null;
declare const x: T;

const y = x!;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = string | null;
  3 | declare const x: T;
  4 |
> 5 | const y = x as NonNullable<T>;
    |           ^^^^^^^^^^^^^^^^^^^ Use a ! assertion to more succinctly remove null and undefined from the type.
  6 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

type T = string | null | undefined;
declare const x: T;

const y = x as NonNullable<T>;
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

type T = string | null | undefined;
declare const x: T;

const y = x!;
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | type T = string | null | undefined;
  3 | declare const x: T;
  4 |
> 5 | const y = x as NonNullable<T>;
    |           ^^^^^^^^^^^^^^^^^^^ Use a ! assertion to more succinctly remove null and undefined from the type.
  6 |       
```
