# no-unsafe-argument

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(arg: number): void;
foo(1 as any);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(arg: number): void;
> 3 | foo(1 as any);
    |     ^^^^^^^^ Unsafe argument of type `any` assigned to a parameter of type `number`.
  4 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(arg1: number, arg2: string): void;
foo(1, 1 as any);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(arg1: number, arg2: string): void;
> 3 | foo(1, 1 as any);
    |        ^^^^^^^^ Unsafe argument of type `any` assigned to a parameter of type `string`.
  4 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(...arg: number[]): void;
foo(1, 2, 3, 1 as any);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(...arg: number[]): void;
> 3 | foo(1, 2, 3, 1 as any);
    |              ^^^^^^^^ Unsafe argument of type `any` assigned to a parameter of type `number`.
  4 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(arg: string, ...arg: number[]): void;
foo(1 as any, 1 as any);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(arg: string, ...arg: number[]): void;
> 3 | foo(1 as any, 1 as any);
    |     ^^^^^^^^ Unsafe argument of type `any` assigned to a parameter of type `string`.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(arg: string, ...arg: number[]): void;
> 3 | foo(1 as any, 1 as any);
    |               ^^^^^^^^ Unsafe argument of type `any` assigned to a parameter of type `number`.
  4 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(arg1: string, arg2: number): void;

foo(...(x as any));
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(arg1: string, arg2: number): void;
  3 |
> 4 | foo(...(x as any));
    |     ^^^^^^^^^^^^^ Unsafe spread of an `any` type.
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(arg1: string, arg2: number): void;

foo(...(x as any[]));
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(arg1: string, arg2: number): void;
  3 |
> 4 | foo(...(x as any[]));
    |     ^^^^^^^^^^^^^^^ Unsafe spread of an `any` array type.
  5 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(arg1: string, arg2: number): void;

const x = ['a', 1 as any] as const;
foo(...x);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(arg1: string, arg2: number): void;
  3 |
  4 | const x = ['a', 1 as any] as const;
> 5 | foo(...x);
    |     ^^^^ Unsafe spread of a tuple type. The argument is of type `any` and is assigned to a parameter of type `number`.
  6 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(arg1: string, arg2: number, arg2: string): void;

const x = [1] as const;
foo('a', ...x, 1 as any);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(arg1: string, arg2: number, arg2: string): void;
  3 |
  4 | const x = [1] as const;
> 5 | foo('a', ...x, 1 as any);
    |                ^^^^^^^^ Unsafe argument of type `any` assigned to a parameter of type `string`.
  6 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(arg1: string, arg2: number, ...rest: string[]): void;

const x = [1, 2] as [number, ...number[]];
foo('a', ...x, 1 as any);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(arg1: string, arg2: number, ...rest: string[]): void;
  3 |
  4 | const x = [1, 2] as [number, ...number[]];
> 5 | foo('a', ...x, 1 as any);
    |                ^^^^^^^^ Unsafe argument of type `any` assigned to a parameter of type `string`.
  6 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(arg1: Set<string>, arg2: Map<string, string>): void;

const x = [new Map<any, string>()] as const;
foo(new Set<any>(), ...x);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(arg1: Set<string>, arg2: Map<string, string>): void;
  3 |
  4 | const x = [new Map<any, string>()] as const;
> 5 | foo(new Set<any>(), ...x);
    |     ^^^^^^^^^^^^^^ Unsafe argument of type `Set<any>` assigned to a parameter of type `Set<string>`.
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(arg1: Set<string>, arg2: Map<string, string>): void;
  3 |
  4 | const x = [new Map<any, string>()] as const;
> 5 | foo(new Set<any>(), ...x);
    |                     ^^^^ Unsafe spread of a tuple type. The argument is of type `Map<any, string>` and is assigned to a parameter of type `Map<string, string>`.
  6 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(...params: [number, string, any]): void;
foo(1 as any, 'a' as any, 1 as any);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(...params: [number, string, any]): void;
> 3 | foo(1 as any, 'a' as any, 1 as any);
    |     ^^^^^^^^ Unsafe argument of type `any` assigned to a parameter of type `number`.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(...params: [number, string, any]): void;
> 3 | foo(1 as any, 'a' as any, 1 as any);
    |               ^^^^^^^^^^ Unsafe argument of type `any` assigned to a parameter of type `string`.
  4 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

declare function foo(param1: string, ...params: [number, string, any]): void;
foo('a', 1 as any, 'a' as any, 1 as any);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(param1: string, ...params: [number, string, any]): void;
> 3 | foo('a', 1 as any, 'a' as any, 1 as any);
    |          ^^^^^^^^ Unsafe argument of type `any` assigned to a parameter of type `number`.
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare function foo(param1: string, ...params: [number, string, any]): void;
> 3 | foo('a', 1 as any, 'a' as any, 1 as any);
    |                    ^^^^^^^^^^ Unsafe argument of type `any` assigned to a parameter of type `string`.
  4 |       
```
