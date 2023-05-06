# naming-convention

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
const x_x = 1;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x_x = 1;
    |       ^^^ Variable name `x_x` must match one of the following formats: camelCase, UPPER_CASE
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
const x_x = 1;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const x_x = 1;
    |       ^^^ Variable name `x_x` must match one of the following formats: camelCase, UPPER_CASE
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

        const child_process = require('child_process');
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const child_process = require('child_process');
    |               ^^^^^^^^^^^^^ Variable name `child_process` must match one of the following formats: camelCase
  3 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

        declare const any_camelCase01: any;
        declare const any_camelCase02: any | null;
        declare const any_camelCase03: any | null | undefined;
        declare const string_camelCase01: string;
        declare const string_camelCase02: string | null;
        declare const string_camelCase03: string | null | undefined;
        declare const string_camelCase04: 'a' | null | undefined;
        declare const string_camelCase05: string | 'a' | null | undefined;
        declare const number_camelCase06: number;
        declare const number_camelCase07: number | null;
        declare const number_camelCase08: number | null | undefined;
        declare const number_camelCase09: 1 | null | undefined;
        declare const number_camelCase10: number | 2 | null | undefined;
        declare const boolean_camelCase11: boolean;
        declare const boolean_camelCase12: boolean | null;
        declare const boolean_camelCase13: boolean | null | undefined;
        declare const boolean_camelCase14: true | null | undefined;
        declare const boolean_camelCase15: false | null | undefined;
        declare const boolean_camelCase16: true | false | null | undefined;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 |         declare const any_camelCase01: any;
     |                       ^^^^^^^^^^^^^^^^^^^^ Variable name `any_camelCase01` trimmed as `camelCase01` must match one of the following formats: UPPER_CASE
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
>  3 |         declare const any_camelCase02: any | null;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `any_camelCase02` trimmed as `camelCase02` must match one of the following formats: UPPER_CASE
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
>  4 |         declare const any_camelCase03: any | null | undefined;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `any_camelCase03` trimmed as `camelCase03` must match one of the following formats: UPPER_CASE
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
>  5 |         declare const string_camelCase01: string;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `string_camelCase01` trimmed as `camelCase01` must match one of the following formats: snake_case
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
>  6 |         declare const string_camelCase02: string | null;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `string_camelCase02` trimmed as `camelCase02` must match one of the following formats: snake_case
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
>  7 |         declare const string_camelCase03: string | null | undefined;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `string_camelCase03` trimmed as `camelCase03` must match one of the following formats: snake_case
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
>  8 |         declare const string_camelCase04: 'a' | null | undefined;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `string_camelCase04` trimmed as `camelCase04` must match one of the following formats: snake_case
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
>  9 |         declare const string_camelCase05: string | 'a' | null | undefined;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `string_camelCase05` trimmed as `camelCase05` must match one of the following formats: snake_case
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
> 10 |         declare const number_camelCase06: number;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `number_camelCase06` trimmed as `camelCase06` must match one of the following formats: snake_case
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
> 11 |         declare const number_camelCase07: number | null;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `number_camelCase07` trimmed as `camelCase07` must match one of the following formats: snake_case
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
> 12 |         declare const number_camelCase08: number | null | undefined;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `number_camelCase08` trimmed as `camelCase08` must match one of the following formats: snake_case
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
> 13 |         declare const number_camelCase09: 1 | null | undefined;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `number_camelCase09` trimmed as `camelCase09` must match one of the following formats: snake_case
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
> 14 |         declare const number_camelCase10: number | 2 | null | undefined;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `number_camelCase10` trimmed as `camelCase10` must match one of the following formats: snake_case
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
> 15 |         declare const boolean_camelCase11: boolean;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `boolean_camelCase11` trimmed as `camelCase11` must match one of the following formats: snake_case
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
> 16 |         declare const boolean_camelCase12: boolean | null;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `boolean_camelCase12` trimmed as `camelCase12` must match one of the following formats: snake_case
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
> 17 |         declare const boolean_camelCase13: boolean | null | undefined;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `boolean_camelCase13` trimmed as `camelCase13` must match one of the following formats: snake_case
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
> 18 |         declare const boolean_camelCase14: true | null | undefined;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `boolean_camelCase14` trimmed as `camelCase14` must match one of the following formats: snake_case
  19 |         declare const boolean_camelCase15: false | null | undefined;
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
> 19 |         declare const boolean_camelCase15: false | null | undefined;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `boolean_camelCase15` trimmed as `camelCase15` must match one of the following formats: snake_case
  20 |         declare const boolean_camelCase16: true | false | null | undefined;
  21 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const any_camelCase01: any;
   3 |         declare const any_camelCase02: any | null;
   4 |         declare const any_camelCase03: any | null | undefined;
   5 |         declare const string_camelCase01: string;
   6 |         declare const string_camelCase02: string | null;
   7 |         declare const string_camelCase03: string | null | undefined;
   8 |         declare const string_camelCase04: 'a' | null | undefined;
   9 |         declare const string_camelCase05: string | 'a' | null | undefined;
  10 |         declare const number_camelCase06: number;
  11 |         declare const number_camelCase07: number | null;
  12 |         declare const number_camelCase08: number | null | undefined;
  13 |         declare const number_camelCase09: 1 | null | undefined;
  14 |         declare const number_camelCase10: number | 2 | null | undefined;
  15 |         declare const boolean_camelCase11: boolean;
  16 |         declare const boolean_camelCase12: boolean | null;
  17 |         declare const boolean_camelCase13: boolean | null | undefined;
  18 |         declare const boolean_camelCase14: true | null | undefined;
  19 |         declare const boolean_camelCase15: false | null | undefined;
> 20 |         declare const boolean_camelCase16: true | false | null | undefined;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `boolean_camelCase16` trimmed as `camelCase16` must match one of the following formats: snake_case
  21 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

        declare const function_camelCase1: () => void;
        declare const function_camelCase2: (() => void) | null;
        declare const function_camelCase3: (() => void) | null | undefined;
        declare const function_camelCase4:
          | (() => void)
          | (() => string)
          | null
          | undefined;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 |         declare const function_camelCase1: () => void;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `function_camelCase1` trimmed as `camelCase1` must match one of the following formats: snake_case
   3 |         declare const function_camelCase2: (() => void) | null;
   4 |         declare const function_camelCase3: (() => void) | null | undefined;
   5 |         declare const function_camelCase4:
   6 |           | (() => void)
   7 |           | (() => string)
   8 |           | null
   9 |           | undefined;
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const function_camelCase1: () => void;
>  3 |         declare const function_camelCase2: (() => void) | null;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `function_camelCase2` trimmed as `camelCase2` must match one of the following formats: snake_case
   4 |         declare const function_camelCase3: (() => void) | null | undefined;
   5 |         declare const function_camelCase4:
   6 |           | (() => void)
   7 |           | (() => string)
   8 |           | null
   9 |           | undefined;
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const function_camelCase1: () => void;
   3 |         declare const function_camelCase2: (() => void) | null;
>  4 |         declare const function_camelCase3: (() => void) | null | undefined;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `function_camelCase3` trimmed as `camelCase3` must match one of the following formats: snake_case
   5 |         declare const function_camelCase4:
   6 |           | (() => void)
   7 |           | (() => string)
   8 |           | null
   9 |           | undefined;
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const function_camelCase1: () => void;
   3 |         declare const function_camelCase2: (() => void) | null;
   4 |         declare const function_camelCase3: (() => void) | null | undefined;
>  5 |         declare const function_camelCase4:
     |                       ^^^^^^^^^^^^^^^^^^^^
>  6 |           | (() => void)
     | ^^^^^^^^^^^^^^^^^^^^^^^^
>  7 |           | (() => string)
     | ^^^^^^^^^^^^^^^^^^^^^^^^
>  8 |           | null
     | ^^^^^^^^^^^^^^^^^^^^^^^^
>  9 |           | undefined;
     | ^^^^^^^^^^^^^^^^^^^^^^ Variable name `function_camelCase4` trimmed as `camelCase4` must match one of the following formats: snake_case
  10 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

        declare const array_camelCase1: Array<number>;
        declare const array_camelCase2: ReadonlyArray<number> | null;
        declare const array_camelCase3: number[] | null | undefined;
        declare const array_camelCase4: readonly number[] | null | undefined;
        declare const array_camelCase5:
          | number[]
          | (number | string)[]
          | null
          | undefined;
        declare const array_camelCase6: [] | null | undefined;
        declare const array_camelCase7: [number] | null | undefined;
        declare const array_camelCase8:
          | readonly number[]
          | Array<string>
          | [boolean]
          | null
          | undefined;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 |         declare const array_camelCase1: Array<number>;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `array_camelCase1` trimmed as `camelCase1` must match one of the following formats: snake_case
   3 |         declare const array_camelCase2: ReadonlyArray<number> | null;
   4 |         declare const array_camelCase3: number[] | null | undefined;
   5 |         declare const array_camelCase4: readonly number[] | null | undefined;
   6 |         declare const array_camelCase5:
   7 |           | number[]
   8 |           | (number | string)[]
   9 |           | null
  10 |           | undefined;
  11 |         declare const array_camelCase6: [] | null | undefined;
  12 |         declare const array_camelCase7: [number] | null | undefined;
  13 |         declare const array_camelCase8:
  14 |           | readonly number[]
  15 |           | Array<string>
  16 |           | [boolean]
  17 |           | null
  18 |           | undefined;
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const array_camelCase1: Array<number>;
>  3 |         declare const array_camelCase2: ReadonlyArray<number> | null;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `array_camelCase2` trimmed as `camelCase2` must match one of the following formats: snake_case
   4 |         declare const array_camelCase3: number[] | null | undefined;
   5 |         declare const array_camelCase4: readonly number[] | null | undefined;
   6 |         declare const array_camelCase5:
   7 |           | number[]
   8 |           | (number | string)[]
   9 |           | null
  10 |           | undefined;
  11 |         declare const array_camelCase6: [] | null | undefined;
  12 |         declare const array_camelCase7: [number] | null | undefined;
  13 |         declare const array_camelCase8:
  14 |           | readonly number[]
  15 |           | Array<string>
  16 |           | [boolean]
  17 |           | null
  18 |           | undefined;
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const array_camelCase1: Array<number>;
   3 |         declare const array_camelCase2: ReadonlyArray<number> | null;
>  4 |         declare const array_camelCase3: number[] | null | undefined;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `array_camelCase3` trimmed as `camelCase3` must match one of the following formats: snake_case
   5 |         declare const array_camelCase4: readonly number[] | null | undefined;
   6 |         declare const array_camelCase5:
   7 |           | number[]
   8 |           | (number | string)[]
   9 |           | null
  10 |           | undefined;
  11 |         declare const array_camelCase6: [] | null | undefined;
  12 |         declare const array_camelCase7: [number] | null | undefined;
  13 |         declare const array_camelCase8:
  14 |           | readonly number[]
  15 |           | Array<string>
  16 |           | [boolean]
  17 |           | null
  18 |           | undefined;
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const array_camelCase1: Array<number>;
   3 |         declare const array_camelCase2: ReadonlyArray<number> | null;
   4 |         declare const array_camelCase3: number[] | null | undefined;
>  5 |         declare const array_camelCase4: readonly number[] | null | undefined;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `array_camelCase4` trimmed as `camelCase4` must match one of the following formats: snake_case
   6 |         declare const array_camelCase5:
   7 |           | number[]
   8 |           | (number | string)[]
   9 |           | null
  10 |           | undefined;
  11 |         declare const array_camelCase6: [] | null | undefined;
  12 |         declare const array_camelCase7: [number] | null | undefined;
  13 |         declare const array_camelCase8:
  14 |           | readonly number[]
  15 |           | Array<string>
  16 |           | [boolean]
  17 |           | null
  18 |           | undefined;
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const array_camelCase1: Array<number>;
   3 |         declare const array_camelCase2: ReadonlyArray<number> | null;
   4 |         declare const array_camelCase3: number[] | null | undefined;
   5 |         declare const array_camelCase4: readonly number[] | null | undefined;
>  6 |         declare const array_camelCase5:
     |                       ^^^^^^^^^^^^^^^^^
>  7 |           | number[]
     | ^^^^^^^^^^^^^^^^^^^^
>  8 |           | (number | string)[]
     | ^^^^^^^^^^^^^^^^^^^^
>  9 |           | null
     | ^^^^^^^^^^^^^^^^^^^^
> 10 |           | undefined;
     | ^^^^^^^^^^^^^^^^^^^^^^ Variable name `array_camelCase5` trimmed as `camelCase5` must match one of the following formats: snake_case
  11 |         declare const array_camelCase6: [] | null | undefined;
  12 |         declare const array_camelCase7: [number] | null | undefined;
  13 |         declare const array_camelCase8:
  14 |           | readonly number[]
  15 |           | Array<string>
  16 |           | [boolean]
  17 |           | null
  18 |           | undefined;
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const array_camelCase1: Array<number>;
   3 |         declare const array_camelCase2: ReadonlyArray<number> | null;
   4 |         declare const array_camelCase3: number[] | null | undefined;
   5 |         declare const array_camelCase4: readonly number[] | null | undefined;
   6 |         declare const array_camelCase5:
   7 |           | number[]
   8 |           | (number | string)[]
   9 |           | null
  10 |           | undefined;
> 11 |         declare const array_camelCase6: [] | null | undefined;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `array_camelCase6` trimmed as `camelCase6` must match one of the following formats: snake_case
  12 |         declare const array_camelCase7: [number] | null | undefined;
  13 |         declare const array_camelCase8:
  14 |           | readonly number[]
  15 |           | Array<string>
  16 |           | [boolean]
  17 |           | null
  18 |           | undefined;
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const array_camelCase1: Array<number>;
   3 |         declare const array_camelCase2: ReadonlyArray<number> | null;
   4 |         declare const array_camelCase3: number[] | null | undefined;
   5 |         declare const array_camelCase4: readonly number[] | null | undefined;
   6 |         declare const array_camelCase5:
   7 |           | number[]
   8 |           | (number | string)[]
   9 |           | null
  10 |           | undefined;
  11 |         declare const array_camelCase6: [] | null | undefined;
> 12 |         declare const array_camelCase7: [number] | null | undefined;
     |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Variable name `array_camelCase7` trimmed as `camelCase7` must match one of the following formats: snake_case
  13 |         declare const array_camelCase8:
  14 |           | readonly number[]
  15 |           | Array<string>
  16 |           | [boolean]
  17 |           | null
  18 |           | undefined;
  19 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         declare const array_camelCase1: Array<number>;
   3 |         declare const array_camelCase2: ReadonlyArray<number> | null;
   4 |         declare const array_camelCase3: number[] | null | undefined;
   5 |         declare const array_camelCase4: readonly number[] | null | undefined;
   6 |         declare const array_camelCase5:
   7 |           | number[]
   8 |           | (number | string)[]
   9 |           | null
  10 |           | undefined;
  11 |         declare const array_camelCase6: [] | null | undefined;
  12 |         declare const array_camelCase7: [number] | null | undefined;
> 13 |         declare const array_camelCase8:
     |                       ^^^^^^^^^^^^^^^^^
> 14 |           | readonly number[]
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 15 |           | Array<string>
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 16 |           | [boolean]
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 17 |           | null
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 18 |           | undefined;
     | ^^^^^^^^^^^^^^^^^^^^^^ Variable name `array_camelCase8` trimmed as `camelCase8` must match one of the following formats: snake_case
  19 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

        let unused_foo = 'a';
        const _unused_foo = 1;
        interface IFoo {}
        class IBar {}
        function fooBar() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         let unused_foo = 'a';
    |             ^^^^^^^^^^ Variable name `unused_foo` must not match the RegExp: /^unused_\w/u
  3 |         const _unused_foo = 1;
  4 |         interface IFoo {}
  5 |         class IBar {}
  6 |         function fooBar() {}
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         let unused_foo = 'a';
> 3 |         const _unused_foo = 1;
    |               ^^^^^^^^^^^ Variable name `_unused_foo` must not match the RegExp: /^unused_\w/u
  4 |         interface IFoo {}
  5 |         class IBar {}
  6 |         function fooBar() {}
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         let unused_foo = 'a';
  3 |         const _unused_foo = 1;
> 4 |         interface IFoo {}
    |                   ^^^^ Interface name `IFoo` must not match the RegExp: /^I[A-Z]/u
  5 |         class IBar {}
  6 |         function fooBar() {}
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         let unused_foo = 'a';
  3 |         const _unused_foo = 1;
  4 |         interface IFoo {}
> 5 |         class IBar {}
    |               ^^^^ Class name `IBar` must not match the RegExp: /^I[A-Z]/u
  6 |         function fooBar() {}
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         let unused_foo = 'a';
  3 |         const _unused_foo = 1;
  4 |         interface IFoo {}
  5 |         class IBar {}
> 6 |         function fooBar() {}
    |                  ^^^^^^ Function name `fooBar` must match the RegExp: /function/u
  7 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

        let unused_foo = 'a';
        const _unused_foo = 1;
        function foo_bar() {}
        interface IFoo {}
        class IBar {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         let unused_foo = 'a';
    |             ^^^^^^^^^^ Variable name `unused_foo` must match one of the following formats: camelCase
  3 |         const _unused_foo = 1;
  4 |         function foo_bar() {}
  5 |         interface IFoo {}
  6 |         class IBar {}
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         let unused_foo = 'a';
> 3 |         const _unused_foo = 1;
    |               ^^^^^^^^^^^ Variable name `_unused_foo` trimmed as `unused_foo` must match one of the following formats: camelCase
  4 |         function foo_bar() {}
  5 |         interface IFoo {}
  6 |         class IBar {}
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         let unused_foo = 'a';
  3 |         const _unused_foo = 1;
> 4 |         function foo_bar() {}
    |                  ^^^^^^^ Function name `foo_bar` must match one of the following formats: camelCase
  5 |         interface IFoo {}
  6 |         class IBar {}
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         let unused_foo = 'a';
  3 |         const _unused_foo = 1;
  4 |         function foo_bar() {}
> 5 |         interface IFoo {}
    |                   ^^^^ Interface name `IFoo` must not match the RegExp: /^I[A-Z]/u
  6 |         class IBar {}
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         let unused_foo = 'a';
  3 |         const _unused_foo = 1;
  4 |         function foo_bar() {}
  5 |         interface IFoo {}
> 6 |         class IBar {}
    |               ^^^^ Class name `IBar` must not match the RegExp: /^I[A-Z]/u
  7 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

        const foo = {
          'Property Name': 'asdf',
        };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const foo = {
> 3 |           'Property Name': 'asdf',
    |           ^^^^^^^^^^^^^^^ Object Literal Property name `Property Name` must match one of the following formats: strictCamelCase
  4 |         };
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

        const myfoo_bar = 'abcs';
        function fun(myfoo: string) {}
        class foo {
          Myfoo: string;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const myfoo_bar = 'abcs';
    |               ^^^^^^^^^ Variable name `myfoo_bar` trimmed as `foo_bar` must match one of the following formats: PascalCase
  3 |         function fun(myfoo: string) {}
  4 |         class foo {
  5 |           Myfoo: string;
  6 |         }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const myfoo_bar = 'abcs';
> 3 |         function fun(myfoo: string) {}
    |                      ^^^^^^^^^^^^^ Parameter name `myfoo` trimmed as `foo` must match one of the following formats: PascalCase
  4 |         class foo {
  5 |           Myfoo: string;
  6 |         }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const myfoo_bar = 'abcs';
  3 |         function fun(myfoo: string) {}
  4 |         class foo {
> 5 |           Myfoo: string;
    |           ^^^^^ Class Property name `Myfoo` trimmed as `foo` must match one of the following formats: PascalCase
  6 |         }
  7 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

        class foo {
          private readonly fooBar: boolean;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class foo {
> 3 |           private readonly fooBar: boolean;
    |                            ^^^^^^ Class Property name `fooBar` must match one of the following formats: PascalCase
  4 |         }
  5 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

        function my_foo_bar() {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         function my_foo_bar() {}
    |                  ^^^^^^^^^^ Function name `my_foo_bar` trimmed as `_foo_bar` must match one of the following formats: PascalCase
  3 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

        class SomeClass {
          static otherConstant = 'hello';
        }

        export const { otherConstant } = SomeClass;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class SomeClass {
> 3 |           static otherConstant = 'hello';
    |                  ^^^^^^^^^^^^^ Class Property name `otherConstant` must match one of the following formats: PascalCase
  4 |         }
  5 |
  6 |         export const { otherConstant } = SomeClass;
  7 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

        declare class Foo {
          Bar(Baz: string): void;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare class Foo {
> 3 |           Bar(Baz: string): void;
    |               ^^^^^^^^^^^ Parameter name `Baz` must match one of the following formats: camelCase
  4 |         }
  5 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

        export const PascalCaseVar = 1;
        export enum PascalCaseEnum {}
        export class PascalCaseClass {}
        export function PascalCaseFunction() {}
        export interface PascalCaseInterface {}
        export type PascalCaseType = {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         export const PascalCaseVar = 1;
    |                      ^^^^^^^^^^^^^ Variable name `PascalCaseVar` must match one of the following formats: camelCase
  3 |         export enum PascalCaseEnum {}
  4 |         export class PascalCaseClass {}
  5 |         export function PascalCaseFunction() {}
  6 |         export interface PascalCaseInterface {}
  7 |         export type PascalCaseType = {};
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         export const PascalCaseVar = 1;
> 3 |         export enum PascalCaseEnum {}
    |                     ^^^^^^^^^^^^^^ Enum name `PascalCaseEnum` must match one of the following formats: camelCase
  4 |         export class PascalCaseClass {}
  5 |         export function PascalCaseFunction() {}
  6 |         export interface PascalCaseInterface {}
  7 |         export type PascalCaseType = {};
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         export const PascalCaseVar = 1;
  3 |         export enum PascalCaseEnum {}
> 4 |         export class PascalCaseClass {}
    |                      ^^^^^^^^^^^^^^^ Class name `PascalCaseClass` must match one of the following formats: camelCase
  5 |         export function PascalCaseFunction() {}
  6 |         export interface PascalCaseInterface {}
  7 |         export type PascalCaseType = {};
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         export const PascalCaseVar = 1;
  3 |         export enum PascalCaseEnum {}
  4 |         export class PascalCaseClass {}
> 5 |         export function PascalCaseFunction() {}
    |                         ^^^^^^^^^^^^^^^^^^ Function name `PascalCaseFunction` must match one of the following formats: camelCase
  6 |         export interface PascalCaseInterface {}
  7 |         export type PascalCaseType = {};
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         export const PascalCaseVar = 1;
  3 |         export enum PascalCaseEnum {}
  4 |         export class PascalCaseClass {}
  5 |         export function PascalCaseFunction() {}
> 6 |         export interface PascalCaseInterface {}
    |                          ^^^^^^^^^^^^^^^^^^^ Interface name `PascalCaseInterface` must match one of the following formats: camelCase
  7 |         export type PascalCaseType = {};
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         export const PascalCaseVar = 1;
  3 |         export enum PascalCaseEnum {}
  4 |         export class PascalCaseClass {}
  5 |         export function PascalCaseFunction() {}
  6 |         export interface PascalCaseInterface {}
> 7 |         export type PascalCaseType = {};
    |                     ^^^^^^^^^^^^^^ Type Alias name `PascalCaseType` must match one of the following formats: camelCase
  8 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

        const PascalCaseVar = 1;
        enum PascalCaseEnum {}
        class PascalCaseClass {}
        function PascalCaseFunction() {}
        interface PascalCaseInterface {}
        type PascalCaseType = {};
        export {
          PascalCaseVar,
          PascalCaseEnum,
          PascalCaseClass,
          PascalCaseFunction,
          PascalCaseInterface,
          PascalCaseType,
        };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 |         const PascalCaseVar = 1;
     |               ^^^^^^^^^^^^^ Variable name `PascalCaseVar` must match one of the following formats: camelCase
   3 |         enum PascalCaseEnum {}
   4 |         class PascalCaseClass {}
   5 |         function PascalCaseFunction() {}
   6 |         interface PascalCaseInterface {}
   7 |         type PascalCaseType = {};
   8 |         export {
   9 |           PascalCaseVar,
  10 |           PascalCaseEnum,
  11 |           PascalCaseClass,
  12 |           PascalCaseFunction,
  13 |           PascalCaseInterface,
  14 |           PascalCaseType,
  15 |         };
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const PascalCaseVar = 1;
>  3 |         enum PascalCaseEnum {}
     |              ^^^^^^^^^^^^^^ Enum name `PascalCaseEnum` must match one of the following formats: camelCase
   4 |         class PascalCaseClass {}
   5 |         function PascalCaseFunction() {}
   6 |         interface PascalCaseInterface {}
   7 |         type PascalCaseType = {};
   8 |         export {
   9 |           PascalCaseVar,
  10 |           PascalCaseEnum,
  11 |           PascalCaseClass,
  12 |           PascalCaseFunction,
  13 |           PascalCaseInterface,
  14 |           PascalCaseType,
  15 |         };
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const PascalCaseVar = 1;
   3 |         enum PascalCaseEnum {}
>  4 |         class PascalCaseClass {}
     |               ^^^^^^^^^^^^^^^ Class name `PascalCaseClass` must match one of the following formats: camelCase
   5 |         function PascalCaseFunction() {}
   6 |         interface PascalCaseInterface {}
   7 |         type PascalCaseType = {};
   8 |         export {
   9 |           PascalCaseVar,
  10 |           PascalCaseEnum,
  11 |           PascalCaseClass,
  12 |           PascalCaseFunction,
  13 |           PascalCaseInterface,
  14 |           PascalCaseType,
  15 |         };
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const PascalCaseVar = 1;
   3 |         enum PascalCaseEnum {}
   4 |         class PascalCaseClass {}
>  5 |         function PascalCaseFunction() {}
     |                  ^^^^^^^^^^^^^^^^^^ Function name `PascalCaseFunction` must match one of the following formats: camelCase
   6 |         interface PascalCaseInterface {}
   7 |         type PascalCaseType = {};
   8 |         export {
   9 |           PascalCaseVar,
  10 |           PascalCaseEnum,
  11 |           PascalCaseClass,
  12 |           PascalCaseFunction,
  13 |           PascalCaseInterface,
  14 |           PascalCaseType,
  15 |         };
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const PascalCaseVar = 1;
   3 |         enum PascalCaseEnum {}
   4 |         class PascalCaseClass {}
   5 |         function PascalCaseFunction() {}
>  6 |         interface PascalCaseInterface {}
     |                   ^^^^^^^^^^^^^^^^^^^ Interface name `PascalCaseInterface` must match one of the following formats: camelCase
   7 |         type PascalCaseType = {};
   8 |         export {
   9 |           PascalCaseVar,
  10 |           PascalCaseEnum,
  11 |           PascalCaseClass,
  12 |           PascalCaseFunction,
  13 |           PascalCaseInterface,
  14 |           PascalCaseType,
  15 |         };
  16 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const PascalCaseVar = 1;
   3 |         enum PascalCaseEnum {}
   4 |         class PascalCaseClass {}
   5 |         function PascalCaseFunction() {}
   6 |         interface PascalCaseInterface {}
>  7 |         type PascalCaseType = {};
     |              ^^^^^^^^^^^^^^ Type Alias name `PascalCaseType` must match one of the following formats: camelCase
   8 |         export {
   9 |           PascalCaseVar,
  10 |           PascalCaseEnum,
  11 |           PascalCaseClass,
  12 |           PascalCaseFunction,
  13 |           PascalCaseInterface,
  14 |           PascalCaseType,
  15 |         };
  16 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

        const PascalCaseVar = 1;
        function PascalCaseFunction() {}
        declare function PascalCaseDeclaredFunction() {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const PascalCaseVar = 1;
    |               ^^^^^^^^^^^^^ Variable name `PascalCaseVar` must match one of the following formats: camelCase
  3 |         function PascalCaseFunction() {}
  4 |         declare function PascalCaseDeclaredFunction() {};
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const PascalCaseVar = 1;
> 3 |         function PascalCaseFunction() {}
    |                  ^^^^^^^^^^^^^^^^^^ Function name `PascalCaseFunction` must match one of the following formats: camelCase
  4 |         declare function PascalCaseDeclaredFunction() {};
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const PascalCaseVar = 1;
  3 |         function PascalCaseFunction() {}
> 4 |         declare function PascalCaseDeclaredFunction() {};
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^ Function name `PascalCaseDeclaredFunction` must match one of the following formats: camelCase
  5 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

        const { some_name1 } = {};
        const { some_name2 = 2 } = {};
        const { ignored: IgnoredDueToModifiers1 } = {};
        const { ignored: IgnoredDueToModifiers2 = 3 } = {};
        const IgnoredDueToModifiers3 = 1;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         const { some_name1 } = {};
    |                 ^^^^^^^^^^ Variable name `some_name1` must match one of the following formats: UPPER_CASE
  3 |         const { some_name2 = 2 } = {};
  4 |         const { ignored: IgnoredDueToModifiers1 } = {};
  5 |         const { ignored: IgnoredDueToModifiers2 = 3 } = {};
  6 |         const IgnoredDueToModifiers3 = 1;
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         const { some_name1 } = {};
> 3 |         const { some_name2 = 2 } = {};
    |                 ^^^^^^^^^^ Variable name `some_name2` must match one of the following formats: UPPER_CASE
  4 |         const { ignored: IgnoredDueToModifiers1 } = {};
  5 |         const { ignored: IgnoredDueToModifiers2 = 3 } = {};
  6 |         const IgnoredDueToModifiers3 = 1;
  7 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

        export function Foo(
          { aName },
          { anotherName = 1 },
          { ignored: IgnoredDueToModifiers1 },
          { ignored: IgnoredDueToModifiers1 = 2 },
          IgnoredDueToModifiers2,
        ) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         export function Foo(
> 3 |           { aName },
    |             ^^^^^ Parameter name `aName` must match one of the following formats: UPPER_CASE
  4 |           { anotherName = 1 },
  5 |           { ignored: IgnoredDueToModifiers1 },
  6 |           { ignored: IgnoredDueToModifiers1 = 2 },
  7 |           IgnoredDueToModifiers2,
  8 |         ) {}
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         export function Foo(
  3 |           { aName },
> 4 |           { anotherName = 1 },
    |             ^^^^^^^^^^^ Parameter name `anotherName` must match one of the following formats: UPPER_CASE
  5 |           { ignored: IgnoredDueToModifiers1 },
  6 |           { ignored: IgnoredDueToModifiers1 = 2 },
  7 |           IgnoredDueToModifiers2,
  8 |         ) {}
  9 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

        class Ignored {
          private static abstract readonly some_name;
          IgnoredDueToModifiers = 1;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Ignored {
> 3 |           private static abstract readonly some_name;
    |                                            ^^^^^^^^^ Class Property name `some_name` must match one of the following formats: UPPER_CASE
  4 |           IgnoredDueToModifiers = 1;
  5 |         }
  6 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

        class Ignored {
          constructor(private readonly some_name, IgnoredDueToModifiers) {}
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Ignored {
> 3 |           constructor(private readonly some_name, IgnoredDueToModifiers) {}
    |                                        ^^^^^^^^^ Parameter Property name `some_name` must match one of the following formats: UPPER_CASE
  4 |         }
  5 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

        class Ignored {
          private static abstract some_name() {}
          IgnoredDueToModifiers() {}
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Ignored {
> 3 |           private static abstract some_name() {}
    |                                   ^^^^^^^^^ Class Method name `some_name` must match one of the following formats: UPPER_CASE
  4 |           IgnoredDueToModifiers() {}
  5 |         }
  6 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

        class Ignored {
          private static get some_name() {}
          get IgnoredDueToModifiers() {}
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class Ignored {
> 3 |           private static get some_name() {}
    |                              ^^^^^^^^^ Accessor name `some_name` must match one of the following formats: UPPER_CASE
  4 |           get IgnoredDueToModifiers() {}
  5 |         }
  6 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

        abstract class some_name {}
        class IgnoredDueToModifier {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 |         abstract class some_name {}
    |                        ^^^^^^^^^ Class name `some_name` must match one of the following formats: UPPER_CASE
  3 |         class IgnoredDueToModifier {}
  4 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

        const UnusedVar = 1;
        function UnusedFunc(
          // this line is intentionally broken out
          UnusedParam: string,
        ) {}
        class UnusedClass {}
        interface UnusedInterface {}
        type UnusedType<
          // this line is intentionally broken out
          UnusedTypeParam,
        > = {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
>  2 |         const UnusedVar = 1;
     |               ^^^^^^^^^ Variable name `UnusedVar` must match one of the following formats: snake_case
   3 |         function UnusedFunc(
   4 |           // this line is intentionally broken out
   5 |           UnusedParam: string,
   6 |         ) {}
   7 |         class UnusedClass {}
   8 |         interface UnusedInterface {}
   9 |         type UnusedType<
  10 |           // this line is intentionally broken out
  11 |           UnusedTypeParam,
  12 |         > = {};
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const UnusedVar = 1;
>  3 |         function UnusedFunc(
     |                  ^^^^^^^^^^ Function name `UnusedFunc` must match one of the following formats: snake_case
   4 |           // this line is intentionally broken out
   5 |           UnusedParam: string,
   6 |         ) {}
   7 |         class UnusedClass {}
   8 |         interface UnusedInterface {}
   9 |         type UnusedType<
  10 |           // this line is intentionally broken out
  11 |           UnusedTypeParam,
  12 |         > = {};
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const UnusedVar = 1;
   3 |         function UnusedFunc(
   4 |           // this line is intentionally broken out
>  5 |           UnusedParam: string,
     |           ^^^^^^^^^^^^^^^^^^^ Parameter name `UnusedParam` must match one of the following formats: snake_case
   6 |         ) {}
   7 |         class UnusedClass {}
   8 |         interface UnusedInterface {}
   9 |         type UnusedType<
  10 |           // this line is intentionally broken out
  11 |           UnusedTypeParam,
  12 |         > = {};
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const UnusedVar = 1;
   3 |         function UnusedFunc(
   4 |           // this line is intentionally broken out
   5 |           UnusedParam: string,
   6 |         ) {}
>  7 |         class UnusedClass {}
     |               ^^^^^^^^^^^ Class name `UnusedClass` must match one of the following formats: snake_case
   8 |         interface UnusedInterface {}
   9 |         type UnusedType<
  10 |           // this line is intentionally broken out
  11 |           UnusedTypeParam,
  12 |         > = {};
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const UnusedVar = 1;
   3 |         function UnusedFunc(
   4 |           // this line is intentionally broken out
   5 |           UnusedParam: string,
   6 |         ) {}
   7 |         class UnusedClass {}
>  8 |         interface UnusedInterface {}
     |                   ^^^^^^^^^^^^^^^ Interface name `UnusedInterface` must match one of the following formats: snake_case
   9 |         type UnusedType<
  10 |           // this line is intentionally broken out
  11 |           UnusedTypeParam,
  12 |         > = {};
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const UnusedVar = 1;
   3 |         function UnusedFunc(
   4 |           // this line is intentionally broken out
   5 |           UnusedParam: string,
   6 |         ) {}
   7 |         class UnusedClass {}
   8 |         interface UnusedInterface {}
>  9 |         type UnusedType<
     |              ^^^^^^^^^^ Type Alias name `UnusedType` must match one of the following formats: snake_case
  10 |           // this line is intentionally broken out
  11 |           UnusedTypeParam,
  12 |         > = {};
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const UnusedVar = 1;
   3 |         function UnusedFunc(
   4 |           // this line is intentionally broken out
   5 |           UnusedParam: string,
   6 |         ) {}
   7 |         class UnusedClass {}
   8 |         interface UnusedInterface {}
   9 |         type UnusedType<
  10 |           // this line is intentionally broken out
> 11 |           UnusedTypeParam,
     |           ^^^^^^^^^^^^^^^ Type Parameter name `UnusedTypeParam` must match one of the following formats: snake_case
  12 |         > = {};
  13 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

        const ignored1 = {
          'a a': 1,
          'b b'() {},
          get 'c c'() {
            return 1;
          },
          set 'd d'(value: string) {},
        };
        class ignored2 {
          'a a' = 1;
          'b b'() {}
          get 'c c'() {
            return 1;
          }
          set 'd d'(value: string) {}
        }
        interface ignored3 {
          'a a': 1;
          'b b'(): void;
        }
        type ignored4 = {
          'a a': 1;
          'b b'(): void;
        };
        enum ignored5 {
          'a a',
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const ignored1 = {
>  3 |           'a a': 1,
     |           ^^^^^ Object Literal Property name `a a` must match one of the following formats: PascalCase
   4 |           'b b'() {},
   5 |           get 'c c'() {
   6 |             return 1;
   7 |           },
   8 |           set 'd d'(value: string) {},
   9 |         };
  10 |         class ignored2 {
  11 |           'a a' = 1;
  12 |           'b b'() {}
  13 |           get 'c c'() {
  14 |             return 1;
  15 |           }
  16 |           set 'd d'(value: string) {}
  17 |         }
  18 |         interface ignored3 {
  19 |           'a a': 1;
  20 |           'b b'(): void;
  21 |         }
  22 |         type ignored4 = {
  23 |           'a a': 1;
  24 |           'b b'(): void;
  25 |         };
  26 |         enum ignored5 {
  27 |           'a a',
  28 |         }
  29 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const ignored1 = {
   3 |           'a a': 1,
>  4 |           'b b'() {},
     |           ^^^^^ Object Literal Method name `b b` must match one of the following formats: PascalCase
   5 |           get 'c c'() {
   6 |             return 1;
   7 |           },
   8 |           set 'd d'(value: string) {},
   9 |         };
  10 |         class ignored2 {
  11 |           'a a' = 1;
  12 |           'b b'() {}
  13 |           get 'c c'() {
  14 |             return 1;
  15 |           }
  16 |           set 'd d'(value: string) {}
  17 |         }
  18 |         interface ignored3 {
  19 |           'a a': 1;
  20 |           'b b'(): void;
  21 |         }
  22 |         type ignored4 = {
  23 |           'a a': 1;
  24 |           'b b'(): void;
  25 |         };
  26 |         enum ignored5 {
  27 |           'a a',
  28 |         }
  29 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const ignored1 = {
   3 |           'a a': 1,
   4 |           'b b'() {},
>  5 |           get 'c c'() {
     |               ^^^^^ Accessor name `c c` must match one of the following formats: PascalCase
   6 |             return 1;
   7 |           },
   8 |           set 'd d'(value: string) {},
   9 |         };
  10 |         class ignored2 {
  11 |           'a a' = 1;
  12 |           'b b'() {}
  13 |           get 'c c'() {
  14 |             return 1;
  15 |           }
  16 |           set 'd d'(value: string) {}
  17 |         }
  18 |         interface ignored3 {
  19 |           'a a': 1;
  20 |           'b b'(): void;
  21 |         }
  22 |         type ignored4 = {
  23 |           'a a': 1;
  24 |           'b b'(): void;
  25 |         };
  26 |         enum ignored5 {
  27 |           'a a',
  28 |         }
  29 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const ignored1 = {
   3 |           'a a': 1,
   4 |           'b b'() {},
   5 |           get 'c c'() {
   6 |             return 1;
   7 |           },
>  8 |           set 'd d'(value: string) {},
     |               ^^^^^ Accessor name `d d` must match one of the following formats: PascalCase
   9 |         };
  10 |         class ignored2 {
  11 |           'a a' = 1;
  12 |           'b b'() {}
  13 |           get 'c c'() {
  14 |             return 1;
  15 |           }
  16 |           set 'd d'(value: string) {}
  17 |         }
  18 |         interface ignored3 {
  19 |           'a a': 1;
  20 |           'b b'(): void;
  21 |         }
  22 |         type ignored4 = {
  23 |           'a a': 1;
  24 |           'b b'(): void;
  25 |         };
  26 |         enum ignored5 {
  27 |           'a a',
  28 |         }
  29 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const ignored1 = {
   3 |           'a a': 1,
   4 |           'b b'() {},
   5 |           get 'c c'() {
   6 |             return 1;
   7 |           },
   8 |           set 'd d'(value: string) {},
   9 |         };
  10 |         class ignored2 {
> 11 |           'a a' = 1;
     |           ^^^^^ Class Property name `a a` must match one of the following formats: PascalCase
  12 |           'b b'() {}
  13 |           get 'c c'() {
  14 |             return 1;
  15 |           }
  16 |           set 'd d'(value: string) {}
  17 |         }
  18 |         interface ignored3 {
  19 |           'a a': 1;
  20 |           'b b'(): void;
  21 |         }
  22 |         type ignored4 = {
  23 |           'a a': 1;
  24 |           'b b'(): void;
  25 |         };
  26 |         enum ignored5 {
  27 |           'a a',
  28 |         }
  29 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const ignored1 = {
   3 |           'a a': 1,
   4 |           'b b'() {},
   5 |           get 'c c'() {
   6 |             return 1;
   7 |           },
   8 |           set 'd d'(value: string) {},
   9 |         };
  10 |         class ignored2 {
  11 |           'a a' = 1;
> 12 |           'b b'() {}
     |           ^^^^^ Class Method name `b b` must match one of the following formats: PascalCase
  13 |           get 'c c'() {
  14 |             return 1;
  15 |           }
  16 |           set 'd d'(value: string) {}
  17 |         }
  18 |         interface ignored3 {
  19 |           'a a': 1;
  20 |           'b b'(): void;
  21 |         }
  22 |         type ignored4 = {
  23 |           'a a': 1;
  24 |           'b b'(): void;
  25 |         };
  26 |         enum ignored5 {
  27 |           'a a',
  28 |         }
  29 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const ignored1 = {
   3 |           'a a': 1,
   4 |           'b b'() {},
   5 |           get 'c c'() {
   6 |             return 1;
   7 |           },
   8 |           set 'd d'(value: string) {},
   9 |         };
  10 |         class ignored2 {
  11 |           'a a' = 1;
  12 |           'b b'() {}
> 13 |           get 'c c'() {
     |               ^^^^^ Accessor name `c c` must match one of the following formats: PascalCase
  14 |             return 1;
  15 |           }
  16 |           set 'd d'(value: string) {}
  17 |         }
  18 |         interface ignored3 {
  19 |           'a a': 1;
  20 |           'b b'(): void;
  21 |         }
  22 |         type ignored4 = {
  23 |           'a a': 1;
  24 |           'b b'(): void;
  25 |         };
  26 |         enum ignored5 {
  27 |           'a a',
  28 |         }
  29 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const ignored1 = {
   3 |           'a a': 1,
   4 |           'b b'() {},
   5 |           get 'c c'() {
   6 |             return 1;
   7 |           },
   8 |           set 'd d'(value: string) {},
   9 |         };
  10 |         class ignored2 {
  11 |           'a a' = 1;
  12 |           'b b'() {}
  13 |           get 'c c'() {
  14 |             return 1;
  15 |           }
> 16 |           set 'd d'(value: string) {}
     |               ^^^^^ Accessor name `d d` must match one of the following formats: PascalCase
  17 |         }
  18 |         interface ignored3 {
  19 |           'a a': 1;
  20 |           'b b'(): void;
  21 |         }
  22 |         type ignored4 = {
  23 |           'a a': 1;
  24 |           'b b'(): void;
  25 |         };
  26 |         enum ignored5 {
  27 |           'a a',
  28 |         }
  29 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const ignored1 = {
   3 |           'a a': 1,
   4 |           'b b'() {},
   5 |           get 'c c'() {
   6 |             return 1;
   7 |           },
   8 |           set 'd d'(value: string) {},
   9 |         };
  10 |         class ignored2 {
  11 |           'a a' = 1;
  12 |           'b b'() {}
  13 |           get 'c c'() {
  14 |             return 1;
  15 |           }
  16 |           set 'd d'(value: string) {}
  17 |         }
  18 |         interface ignored3 {
> 19 |           'a a': 1;
     |           ^^^^^ Type Property name `a a` must match one of the following formats: PascalCase
  20 |           'b b'(): void;
  21 |         }
  22 |         type ignored4 = {
  23 |           'a a': 1;
  24 |           'b b'(): void;
  25 |         };
  26 |         enum ignored5 {
  27 |           'a a',
  28 |         }
  29 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const ignored1 = {
   3 |           'a a': 1,
   4 |           'b b'() {},
   5 |           get 'c c'() {
   6 |             return 1;
   7 |           },
   8 |           set 'd d'(value: string) {},
   9 |         };
  10 |         class ignored2 {
  11 |           'a a' = 1;
  12 |           'b b'() {}
  13 |           get 'c c'() {
  14 |             return 1;
  15 |           }
  16 |           set 'd d'(value: string) {}
  17 |         }
  18 |         interface ignored3 {
  19 |           'a a': 1;
> 20 |           'b b'(): void;
     |           ^^^^^ Type Method name `b b` must match one of the following formats: PascalCase
  21 |         }
  22 |         type ignored4 = {
  23 |           'a a': 1;
  24 |           'b b'(): void;
  25 |         };
  26 |         enum ignored5 {
  27 |           'a a',
  28 |         }
  29 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const ignored1 = {
   3 |           'a a': 1,
   4 |           'b b'() {},
   5 |           get 'c c'() {
   6 |             return 1;
   7 |           },
   8 |           set 'd d'(value: string) {},
   9 |         };
  10 |         class ignored2 {
  11 |           'a a' = 1;
  12 |           'b b'() {}
  13 |           get 'c c'() {
  14 |             return 1;
  15 |           }
  16 |           set 'd d'(value: string) {}
  17 |         }
  18 |         interface ignored3 {
  19 |           'a a': 1;
  20 |           'b b'(): void;
  21 |         }
  22 |         type ignored4 = {
> 23 |           'a a': 1;
     |           ^^^^^ Type Property name `a a` must match one of the following formats: PascalCase
  24 |           'b b'(): void;
  25 |         };
  26 |         enum ignored5 {
  27 |           'a a',
  28 |         }
  29 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const ignored1 = {
   3 |           'a a': 1,
   4 |           'b b'() {},
   5 |           get 'c c'() {
   6 |             return 1;
   7 |           },
   8 |           set 'd d'(value: string) {},
   9 |         };
  10 |         class ignored2 {
  11 |           'a a' = 1;
  12 |           'b b'() {}
  13 |           get 'c c'() {
  14 |             return 1;
  15 |           }
  16 |           set 'd d'(value: string) {}
  17 |         }
  18 |         interface ignored3 {
  19 |           'a a': 1;
  20 |           'b b'(): void;
  21 |         }
  22 |         type ignored4 = {
  23 |           'a a': 1;
> 24 |           'b b'(): void;
     |           ^^^^^ Type Method name `b b` must match one of the following formats: PascalCase
  25 |         };
  26 |         enum ignored5 {
  27 |           'a a',
  28 |         }
  29 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const ignored1 = {
   3 |           'a a': 1,
   4 |           'b b'() {},
   5 |           get 'c c'() {
   6 |             return 1;
   7 |           },
   8 |           set 'd d'(value: string) {},
   9 |         };
  10 |         class ignored2 {
  11 |           'a a' = 1;
  12 |           'b b'() {}
  13 |           get 'c c'() {
  14 |             return 1;
  15 |           }
  16 |           set 'd d'(value: string) {}
  17 |         }
  18 |         interface ignored3 {
  19 |           'a a': 1;
  20 |           'b b'(): void;
  21 |         }
  22 |         type ignored4 = {
  23 |           'a a': 1;
  24 |           'b b'(): void;
  25 |         };
  26 |         enum ignored5 {
> 27 |           'a a',
     |           ^^^^^ Enum Member name `a a` must match one of the following formats: PascalCase
  28 |         }
  29 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

        type Foo = {
          'foo     Bar': string;
          '': string;
          '0': string;
          'foo': string;
          'foo-bar': string;
          '#foo-bar': string;
        };

        interface Bar {
          'boo-----foo': string;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         type Foo = {
>  3 |           'foo     Bar': string;
     |           ^^^^^^^^^^^^^ Type Property name `foo     Bar` must match one of the following formats: camelCase
   4 |           '': string;
   5 |           '0': string;
   6 |           'foo': string;
   7 |           'foo-bar': string;
   8 |           '#foo-bar': string;
   9 |         };
  10 |
  11 |         interface Bar {
  12 |           'boo-----foo': string;
  13 |         }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         type Foo = {
   3 |           'foo     Bar': string;
>  4 |           '': string;
     |           ^^ Type Property name `` must match one of the following formats: camelCase
   5 |           '0': string;
   6 |           'foo': string;
   7 |           'foo-bar': string;
   8 |           '#foo-bar': string;
   9 |         };
  10 |
  11 |         interface Bar {
  12 |           'boo-----foo': string;
  13 |         }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         type Foo = {
   3 |           'foo     Bar': string;
   4 |           '': string;
>  5 |           '0': string;
     |           ^^^ Type Property name `0` must match one of the following formats: camelCase
   6 |           'foo': string;
   7 |           'foo-bar': string;
   8 |           '#foo-bar': string;
   9 |         };
  10 |
  11 |         interface Bar {
  12 |           'boo-----foo': string;
  13 |         }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         type Foo = {
   3 |           'foo     Bar': string;
   4 |           '': string;
   5 |           '0': string;
   6 |           'foo': string;
>  7 |           'foo-bar': string;
     |           ^^^^^^^^^ Type Property name `foo-bar` must match one of the following formats: camelCase
   8 |           '#foo-bar': string;
   9 |         };
  10 |
  11 |         interface Bar {
  12 |           'boo-----foo': string;
  13 |         }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         type Foo = {
   3 |           'foo     Bar': string;
   4 |           '': string;
   5 |           '0': string;
   6 |           'foo': string;
   7 |           'foo-bar': string;
>  8 |           '#foo-bar': string;
     |           ^^^^^^^^^^ Type Property name `#foo-bar` must match one of the following formats: camelCase
   9 |         };
  10 |
  11 |         interface Bar {
  12 |           'boo-----foo': string;
  13 |         }
  14 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         type Foo = {
   3 |           'foo     Bar': string;
   4 |           '': string;
   5 |           '0': string;
   6 |           'foo': string;
   7 |           'foo-bar': string;
   8 |           '#foo-bar': string;
   9 |         };
  10 |
  11 |         interface Bar {
> 12 |           'boo-----foo': string;
     |           ^^^^^^^^^^^^^ Type Property name `boo-----foo` must match one of the following formats: camelCase
  13 |         }
  14 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

        class foo {
          public Bar() {
            return 42;
          }
          public async async_bar() {
            return 42;
          }
          // ❌ error
          public async asyncBar() {
            return 42;
          }
          // ❌ error
          public AsyncBar2 = async () => {
            return 42;
          };
          // ❌ error
          public AsyncBar3 = async function () {
            return 42;
          };
        }
        abstract class foo {
          public abstract Bar(): number;
          public abstract async async_bar(): number;
          // ❌ error
          public abstract async ASYNC_BAR(): number;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class foo {
   3 |           public Bar() {
   4 |             return 42;
   5 |           }
   6 |           public async async_bar() {
   7 |             return 42;
   8 |           }
   9 |           // ❌ error
> 10 |           public async asyncBar() {
     |                        ^^^^^^^^ Class Method name `asyncBar` must match one of the following formats: snake_case
  11 |             return 42;
  12 |           }
  13 |           // ❌ error
  14 |           public AsyncBar2 = async () => {
  15 |             return 42;
  16 |           };
  17 |           // ❌ error
  18 |           public AsyncBar3 = async function () {
  19 |             return 42;
  20 |           };
  21 |         }
  22 |         abstract class foo {
  23 |           public abstract Bar(): number;
  24 |           public abstract async async_bar(): number;
  25 |           // ❌ error
  26 |           public abstract async ASYNC_BAR(): number;
  27 |         }
  28 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class foo {
   3 |           public Bar() {
   4 |             return 42;
   5 |           }
   6 |           public async async_bar() {
   7 |             return 42;
   8 |           }
   9 |           // ❌ error
  10 |           public async asyncBar() {
  11 |             return 42;
  12 |           }
  13 |           // ❌ error
> 14 |           public AsyncBar2 = async () => {
     |                  ^^^^^^^^^ Class Method name `AsyncBar2` must match one of the following formats: snake_case
  15 |             return 42;
  16 |           };
  17 |           // ❌ error
  18 |           public AsyncBar3 = async function () {
  19 |             return 42;
  20 |           };
  21 |         }
  22 |         abstract class foo {
  23 |           public abstract Bar(): number;
  24 |           public abstract async async_bar(): number;
  25 |           // ❌ error
  26 |           public abstract async ASYNC_BAR(): number;
  27 |         }
  28 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class foo {
   3 |           public Bar() {
   4 |             return 42;
   5 |           }
   6 |           public async async_bar() {
   7 |             return 42;
   8 |           }
   9 |           // ❌ error
  10 |           public async asyncBar() {
  11 |             return 42;
  12 |           }
  13 |           // ❌ error
  14 |           public AsyncBar2 = async () => {
  15 |             return 42;
  16 |           };
  17 |           // ❌ error
> 18 |           public AsyncBar3 = async function () {
     |                  ^^^^^^^^^ Class Method name `AsyncBar3` must match one of the following formats: snake_case
  19 |             return 42;
  20 |           };
  21 |         }
  22 |         abstract class foo {
  23 |           public abstract Bar(): number;
  24 |           public abstract async async_bar(): number;
  25 |           // ❌ error
  26 |           public abstract async ASYNC_BAR(): number;
  27 |         }
  28 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class foo {
   3 |           public Bar() {
   4 |             return 42;
   5 |           }
   6 |           public async async_bar() {
   7 |             return 42;
   8 |           }
   9 |           // ❌ error
  10 |           public async asyncBar() {
  11 |             return 42;
  12 |           }
  13 |           // ❌ error
  14 |           public AsyncBar2 = async () => {
  15 |             return 42;
  16 |           };
  17 |           // ❌ error
  18 |           public AsyncBar3 = async function () {
  19 |             return 42;
  20 |           };
  21 |         }
  22 |         abstract class foo {
  23 |           public abstract Bar(): number;
  24 |           public abstract async async_bar(): number;
  25 |           // ❌ error
> 26 |           public abstract async ASYNC_BAR(): number;
     |                                 ^^^^^^^^^ Class Method name `ASYNC_BAR` must match one of the following formats: snake_case
  27 |         }
  28 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

        const obj = {
          Bar() {
            return 42;
          },
          async async_bar() {
            return 42;
          },
          // ❌ error
          async AsyncBar() {
            return 42;
          },
          // ❌ error
          AsyncBar2: async () => {
            return 42;
          },
          // ❌ error
          AsyncBar3: async function () {
            return 42;
          },
        };
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const obj = {
   3 |           Bar() {
   4 |             return 42;
   5 |           },
   6 |           async async_bar() {
   7 |             return 42;
   8 |           },
   9 |           // ❌ error
> 10 |           async AsyncBar() {
     |                 ^^^^^^^^ Object Literal Method name `AsyncBar` must match one of the following formats: snake_case
  11 |             return 42;
  12 |           },
  13 |           // ❌ error
  14 |           AsyncBar2: async () => {
  15 |             return 42;
  16 |           },
  17 |           // ❌ error
  18 |           AsyncBar3: async function () {
  19 |             return 42;
  20 |           },
  21 |         };
  22 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const obj = {
   3 |           Bar() {
   4 |             return 42;
   5 |           },
   6 |           async async_bar() {
   7 |             return 42;
   8 |           },
   9 |           // ❌ error
  10 |           async AsyncBar() {
  11 |             return 42;
  12 |           },
  13 |           // ❌ error
> 14 |           AsyncBar2: async () => {
     |           ^^^^^^^^^ Object Literal Method name `AsyncBar2` must match one of the following formats: snake_case
  15 |             return 42;
  16 |           },
  17 |           // ❌ error
  18 |           AsyncBar3: async function () {
  19 |             return 42;
  20 |           },
  21 |         };
  22 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const obj = {
   3 |           Bar() {
   4 |             return 42;
   5 |           },
   6 |           async async_bar() {
   7 |             return 42;
   8 |           },
   9 |           // ❌ error
  10 |           async AsyncBar() {
  11 |             return 42;
  12 |           },
  13 |           // ❌ error
  14 |           AsyncBar2: async () => {
  15 |             return 42;
  16 |           },
  17 |           // ❌ error
> 18 |           AsyncBar3: async function () {
     |           ^^^^^^^^^ Object Literal Method name `AsyncBar3` must match one of the following formats: snake_case
  19 |             return 42;
  20 |           },
  21 |         };
  22 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

        const syncbar1 = () => {};
        function syncBar2() {}
        const syncBar3 = function syncBar4() {};

        // ❌ error
        const AsyncBar1 = async () => {};
        const async_bar1 = async () => {};
        const async_bar3 = async function async_bar4() {};
        async function async_bar2() {}
        // ❌ error
        const asyncBar5 = async function async_bar6() {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const syncbar1 = () => {};
   3 |         function syncBar2() {}
   4 |         const syncBar3 = function syncBar4() {};
   5 |
   6 |         // ❌ error
>  7 |         const AsyncBar1 = async () => {};
     |               ^^^^^^^^^ Variable name `AsyncBar1` must match one of the following formats: snake_case
   8 |         const async_bar1 = async () => {};
   9 |         const async_bar3 = async function async_bar4() {};
  10 |         async function async_bar2() {}
  11 |         // ❌ error
  12 |         const asyncBar5 = async function async_bar6() {};
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const syncbar1 = () => {};
   3 |         function syncBar2() {}
   4 |         const syncBar3 = function syncBar4() {};
   5 |
   6 |         // ❌ error
   7 |         const AsyncBar1 = async () => {};
   8 |         const async_bar1 = async () => {};
   9 |         const async_bar3 = async function async_bar4() {};
  10 |         async function async_bar2() {}
  11 |         // ❌ error
> 12 |         const asyncBar5 = async function async_bar6() {};
     |               ^^^^^^^^^ Variable name `asyncBar5` must match one of the following formats: snake_case
  13 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

        const syncbar1 = () => {};
        function syncBar2() {}
        const syncBar3 = function syncBar4() {};

        const async_bar1 = async () => {};
        // ❌ error
        async function asyncBar2() {}
        const async_bar3 = async function async_bar4() {};
        async function async_bar2() {}
        // ❌ error
        const async_bar3 = async function ASYNC_BAR4() {};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const syncbar1 = () => {};
   3 |         function syncBar2() {}
   4 |         const syncBar3 = function syncBar4() {};
   5 |
   6 |         const async_bar1 = async () => {};
   7 |         // ❌ error
>  8 |         async function asyncBar2() {}
     |                        ^^^^^^^^^ Function name `asyncBar2` must match one of the following formats: snake_case
   9 |         const async_bar3 = async function async_bar4() {};
  10 |         async function async_bar2() {}
  11 |         // ❌ error
  12 |         const async_bar3 = async function ASYNC_BAR4() {};
  13 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         const syncbar1 = () => {};
   3 |         function syncBar2() {}
   4 |         const syncBar3 = function syncBar4() {};
   5 |
   6 |         const async_bar1 = async () => {};
   7 |         // ❌ error
   8 |         async function asyncBar2() {}
   9 |         const async_bar3 = async function async_bar4() {};
  10 |         async function async_bar2() {}
  11 |         // ❌ error
> 12 |         const async_bar3 = async function ASYNC_BAR4() {};
     |                                           ^^^^^^^^^^ Function name `ASYNC_BAR4` must match one of the following formats: snake_case
  13 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

        class foo extends bar {
          public someAttribute = 1;
          public override some_attribute_override = 1;
          // ❌ error
          public override someAttributeOverride = 1;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         class foo extends bar {
  3 |           public someAttribute = 1;
  4 |           public override some_attribute_override = 1;
  5 |           // ❌ error
> 6 |           public override someAttributeOverride = 1;
    |                           ^^^^^^^^^^^^^^^^^^^^^ Class Property name `someAttributeOverride` must match one of the following formats: snake_case
  7 |         }
  8 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

        class foo extends bar {
          public override some_method_override() {
            return 42;
          }
          // ❌ error
          public override someMethodOverride() {
            return 42;
          }
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class foo extends bar {
   3 |           public override some_method_override() {
   4 |             return 42;
   5 |           }
   6 |           // ❌ error
>  7 |           public override someMethodOverride() {
     |                           ^^^^^^^^^^^^^^^^^^ Class Method name `someMethodOverride` must match one of the following formats: snake_case
   8 |             return 42;
   9 |           }
  10 |         }
  11 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

        class foo extends bar {
          public get someGetter(): string;
          public override get some_getter_override(): string;
          // ❌ error
          public override get someGetterOverride(): string;
          public set someSetter(val: string);
          public override set some_setter_override(val: string);
          // ❌ error
          public override set someSetterOverride(val: string);
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class foo extends bar {
   3 |           public get someGetter(): string;
   4 |           public override get some_getter_override(): string;
   5 |           // ❌ error
>  6 |           public override get someGetterOverride(): string;
     |                               ^^^^^^^^^^^^^^^^^^ Accessor name `someGetterOverride` must match one of the following formats: snake_case
   7 |           public set someSetter(val: string);
   8 |           public override set some_setter_override(val: string);
   9 |           // ❌ error
  10 |           public override set someSetterOverride(val: string);
  11 |         }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class foo extends bar {
   3 |           public get someGetter(): string;
   4 |           public override get some_getter_override(): string;
   5 |           // ❌ error
   6 |           public override get someGetterOverride(): string;
   7 |           public set someSetter(val: string);
   8 |           public override set some_setter_override(val: string);
   9 |           // ❌ error
> 10 |           public override set someSetterOverride(val: string);
     |                               ^^^^^^^^^^^^^^^^^^ Accessor name `someSetterOverride` must match one of the following formats: snake_case
  11 |         }
  12 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

        class foo {
          private firstPrivateField = 1;
          // ❌ error
          private first_private_field = 1;
          // ❌ error
          #secondPrivateField = 1;
          #second_private_field = 1;
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class foo {
   3 |           private firstPrivateField = 1;
   4 |           // ❌ error
>  5 |           private first_private_field = 1;
     |                   ^^^^^^^^^^^^^^^^^^^ Class Property name `first_private_field` must match one of the following formats: camelCase
   6 |           // ❌ error
   7 |           #secondPrivateField = 1;
   8 |           #second_private_field = 1;
   9 |         }
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class foo {
   3 |           private firstPrivateField = 1;
   4 |           // ❌ error
   5 |           private first_private_field = 1;
   6 |           // ❌ error
>  7 |           #secondPrivateField = 1;
     |           ^^^^^^^^^^^^^^^^^^^ Class Property name `secondPrivateField` must match one of the following formats: snake_case
   8 |           #second_private_field = 1;
   9 |         }
  10 |       
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

        class foo {
          private firstPrivateMethod() {}
          // ❌ error
          private first_private_method() {}
          // ❌ error
          #secondPrivateMethod() {}
          #second_private_method() {}
        }
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class foo {
   3 |           private firstPrivateMethod() {}
   4 |           // ❌ error
>  5 |           private first_private_method() {}
     |                   ^^^^^^^^^^^^^^^^^^^^ Class Method name `first_private_method` must match one of the following formats: camelCase
   6 |           // ❌ error
   7 |           #secondPrivateMethod() {}
   8 |           #second_private_method() {}
   9 |         }
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 |         class foo {
   3 |           private firstPrivateMethod() {}
   4 |           // ❌ error
   5 |           private first_private_method() {}
   6 |           // ❌ error
>  7 |           #secondPrivateMethod() {}
     |           ^^^^^^^^^^^^^^^^^^^^ Class Method name `secondPrivateMethod` must match one of the following formats: snake_case
   8 |           #second_private_method() {}
   9 |         }
  10 |       
```
