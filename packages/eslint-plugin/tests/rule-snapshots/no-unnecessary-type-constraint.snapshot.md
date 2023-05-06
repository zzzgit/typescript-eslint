# no-unnecessary-type-constraint

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
function data<T extends any>() {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function data<T extends any>() {}
    |               ^^^^^^^^^^^^^ Constraining the generic type `T` to `any` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `any` constraint.

<!-- prettier-ignore -->
```ts
function data<T>() {}
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
function data<T extends any, U>() {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function data<T extends any, U>() {}
    |               ^^^^^^^^^^^^^ Constraining the generic type `T` to `any` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `any` constraint.

<!-- prettier-ignore -->
```ts
function data<T, U>() {}
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
function data<T, U extends any>() {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function data<T, U extends any>() {}
    |                  ^^^^^^^^^^^^^ Constraining the generic type `U` to `any` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `any` constraint.

<!-- prettier-ignore -->
```ts
function data<T, U>() {}
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
function data<T extends any, U extends T>() {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function data<T extends any, U extends T>() {}
    |               ^^^^^^^^^^^^^ Constraining the generic type `T` to `any` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `any` constraint.

<!-- prettier-ignore -->
```ts
function data<T, U extends T>() {}
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```tsx
const data = <T extends any>() => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | const data = <T extends any>() => {};
    |               ^^^^^^^^^^^^^ Constraining the generic type `T` to `any` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `any` constraint.

<!-- prettier-ignore -->
```tsx
const data = <T,>() => {};
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```tsx
const data = <T extends any,>() => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | const data = <T extends any,>() => {};
    |               ^^^^^^^^^^^^^ Constraining the generic type `T` to `any` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `any` constraint.

<!-- prettier-ignore -->
```tsx
const data = <T,>() => {};
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```tsx
const data = <T extends any, >() => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | const data = <T extends any, >() => {};
    |               ^^^^^^^^^^^^^ Constraining the generic type `T` to `any` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `any` constraint.

<!-- prettier-ignore -->
```tsx
const data = <T, >() => {};
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```tsx
const data = <T extends any ,>() => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | const data = <T extends any ,>() => {};
    |               ^^^^^^^^^^^^^ Constraining the generic type `T` to `any` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `any` constraint.

<!-- prettier-ignore -->
```tsx
const data = <T ,>() => {};
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```tsx
const data = <T extends any , >() => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | const data = <T extends any , >() => {};
    |               ^^^^^^^^^^^^^ Constraining the generic type `T` to `any` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `any` constraint.

<!-- prettier-ignore -->
```tsx
const data = <T , >() => {};
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```tsx
const data = <T extends any = unknown>() => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | const data = <T extends any = unknown>() => {};
    |               ^^^^^^^^^^^^^^^^^^^^^^^ Constraining the generic type `T` to `any` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `any` constraint.

<!-- prettier-ignore -->
```tsx
const data = <T = unknown>() => {};
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```tsx
const data = <T extends any, U extends any>() => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```tsx
> 1 | const data = <T extends any, U extends any>() => {};
    |               ^^^^^^^^^^^^^ Constraining the generic type `T` to `any` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `any` constraint.

<!-- prettier-ignore -->
```tsx
const data = <T, U extends any>() => {};
```

<!-- prettier-ignore -->
```tsx
> 1 | const data = <T extends any, U extends any>() => {};
    |                              ^^^^^^^^^^^^^ Constraining the generic type `U` to `any` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `any` constraint.

<!-- prettier-ignore -->
```tsx
const data = <T extends any, U>() => {};
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
function data<T extends unknown>() {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | function data<T extends unknown>() {}
    |               ^^^^^^^^^^^^^^^^^ Constraining the generic type `T` to `unknown` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `unknown` constraint.

<!-- prettier-ignore -->
```ts
function data<T>() {}
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
const data = <T extends any>() => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const data = <T extends any>() => {};
    |               ^^^^^^^^^^^^^ Constraining the generic type `T` to `any` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `any` constraint.

<!-- prettier-ignore -->
```ts
const data = <T>() => {};
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
const data = <T extends unknown>() => {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const data = <T extends unknown>() => {};
    |               ^^^^^^^^^^^^^^^^^ Constraining the generic type `T` to `unknown` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `unknown` constraint.

<!-- prettier-ignore -->
```ts
const data = <T>() => {};
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
class Data<T extends unknown> {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | class Data<T extends unknown> {}
    |            ^^^^^^^^^^^^^^^^^ Constraining the generic type `T` to `unknown` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `unknown` constraint.

<!-- prettier-ignore -->
```ts
class Data<T> {}
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
const Data = class<T extends unknown> {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | const Data = class<T extends unknown> {};
    |                    ^^^^^^^^^^^^^^^^^ Constraining the generic type `T` to `unknown` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `unknown` constraint.

<!-- prettier-ignore -->
```ts
const Data = class<T> {};
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

class Data {
  member<T extends unknown>() {}
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Data {
> 3 |   member<T extends unknown>() {}
    |          ^^^^^^^^^^^^^^^^^ Constraining the generic type `T` to `unknown` does nothing and is unnecessary.
  4 | }
  5 |       
```

#### Suggestions

##### Remove the unnecessary `unknown` constraint.

<!-- prettier-ignore -->
```ts

class Data {
  member<T>() {}
}
      
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

const Data = class {
  member<T extends unknown>() {}
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | const Data = class {
> 3 |   member<T extends unknown>() {}
    |          ^^^^^^^^^^^^^^^^^ Constraining the generic type `T` to `unknown` does nothing and is unnecessary.
  4 | };
  5 |       
```

#### Suggestions

##### Remove the unnecessary `unknown` constraint.

<!-- prettier-ignore -->
```ts

const Data = class {
  member<T>() {}
};
      
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
interface Data<T extends unknown> {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | interface Data<T extends unknown> {}
    |                ^^^^^^^^^^^^^^^^^ Constraining the generic type `T` to `unknown` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `unknown` constraint.

<!-- prettier-ignore -->
```ts
interface Data<T> {}
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
type Data<T extends unknown> = {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | type Data<T extends unknown> = {};
    |           ^^^^^^^^^^^^^^^^^ Constraining the generic type `T` to `unknown` does nothing and is unnecessary.
```

#### Suggestions

##### Remove the unnecessary `unknown` constraint.

<!-- prettier-ignore -->
```ts
type Data<T> = {};
```
