# strict-boolean-expressions

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts
if (true && (1 + 1)) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (true && (1 + 1)) {}
    |              ^^^^^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
if (true && ((1 + 1) !== 0)) {}
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
if (true && (!Number.isNaN((1 + 1)))) {}
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
if (true && (Boolean((1 + 1)))) {}
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts
        while (false || "a" + "b") {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         while (false || "a" + "b") {}
    |                         ^^^^^^^^^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
        while (false || (("a" + "b").length > 0)) {}
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
        while (false || (("a" + "b") !== "")) {}
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        while (false || (Boolean(("a" + "b")))) {}
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts
        (x: object) => true || false || x ? true : false;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         (x: object) => true || false || x ? true : false;
    |                                         ^ Unexpected object value in conditional. The condition is always true.
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts
if (('' && {}) || (0 && void 0)) { }
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (('' && {}) || (0 && void 0)) { }
    |      ^^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
if (((''.length > 0) && {}) || (0 && void 0)) { }
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
if ((('' !== "") && {}) || (0 && void 0)) { }
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
if (((Boolean('')) && {}) || (0 && void 0)) { }
```

<!-- prettier-ignore -->
```ts
> 1 | if (('' && {}) || (0 && void 0)) { }
    |            ^^ Unexpected object value in conditional. The condition is always true.
```

<!-- prettier-ignore -->
```ts
> 1 | if (('' && {}) || (0 && void 0)) { }
    |                    ^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
if (('' && {}) || ((0 !== 0) && void 0)) { }
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
if (('' && {}) || ((!Number.isNaN(0)) && void 0)) { }
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
if (('' && {}) || ((Boolean(0)) && void 0)) { }
```

<!-- prettier-ignore -->
```ts
> 1 | if (('' && {}) || (0 && void 0)) { }
    |                         ^^^^^^ Unexpected nullish value in conditional. The condition is always false.
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts
'asd' && 123 && [] && null;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | 'asd' && 123 && [] && null;
    | ^^^^^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
('asd'.length > 0) && 123 && [] && null;
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
('asd' !== "") && 123 && [] && null;
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
(Boolean('asd')) && 123 && [] && null;
```

<!-- prettier-ignore -->
```ts
> 1 | 'asd' && 123 && [] && null;
    |          ^^^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
'asd' && (123 !== 0) && [] && null;
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
'asd' && (!Number.isNaN(123)) && [] && null;
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
'asd' && (Boolean(123)) && [] && null;
```

<!-- prettier-ignore -->
```ts
> 1 | 'asd' && 123 && [] && null;
    |                 ^^ Unexpected object value in conditional. The condition is always true.
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts
'asd' || 123 || [] || null;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | 'asd' || 123 || [] || null;
    | ^^^^^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
('asd'.length > 0) || 123 || [] || null;
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
('asd' !== "") || 123 || [] || null;
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
(Boolean('asd')) || 123 || [] || null;
```

<!-- prettier-ignore -->
```ts
> 1 | 'asd' || 123 || [] || null;
    |          ^^^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
'asd' || (123 !== 0) || [] || null;
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
'asd' || (!Number.isNaN(123)) || [] || null;
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
'asd' || (Boolean(123)) || [] || null;
```

<!-- prettier-ignore -->
```ts
> 1 | 'asd' || 123 || [] || null;
    |                 ^^ Unexpected object value in conditional. The condition is always true.
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts
let x = (1 && 'a' && null) || 0 || '' || {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let x = (1 && 'a' && null) || 0 || '' || {};
    |          ^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
let x = ((1 !== 0) && 'a' && null) || 0 || '' || {};
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
let x = ((!Number.isNaN(1)) && 'a' && null) || 0 || '' || {};
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
let x = ((Boolean(1)) && 'a' && null) || 0 || '' || {};
```

<!-- prettier-ignore -->
```ts
> 1 | let x = (1 && 'a' && null) || 0 || '' || {};
    |               ^^^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
let x = (1 && ('a'.length > 0) && null) || 0 || '' || {};
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
let x = (1 && ('a' !== "") && null) || 0 || '' || {};
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
let x = (1 && (Boolean('a')) && null) || 0 || '' || {};
```

<!-- prettier-ignore -->
```ts
> 1 | let x = (1 && 'a' && null) || 0 || '' || {};
    |                      ^^^^ Unexpected nullish value in conditional. The condition is always false.
```

<!-- prettier-ignore -->
```ts
> 1 | let x = (1 && 'a' && null) || 0 || '' || {};
    |                               ^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
let x = (1 && 'a' && null) || (0 !== 0) || '' || {};
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
let x = (1 && 'a' && null) || (!Number.isNaN(0)) || '' || {};
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
let x = (1 && 'a' && null) || (Boolean(0)) || '' || {};
```

<!-- prettier-ignore -->
```ts
> 1 | let x = (1 && 'a' && null) || 0 || '' || {};
    |                                    ^^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
let x = (1 && 'a' && null) || 0 || (''.length > 0) || {};
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
let x = (1 && 'a' && null) || 0 || ('' !== "") || {};
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
let x = (1 && 'a' && null) || 0 || (Boolean('')) || {};
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts
return (1 || 'a' || null) && 0 && '' && {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | return (1 || 'a' || null) && 0 && '' && {};
    |         ^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
return ((1 !== 0) || 'a' || null) && 0 && '' && {};
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
return ((!Number.isNaN(1)) || 'a' || null) && 0 && '' && {};
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
return ((Boolean(1)) || 'a' || null) && 0 && '' && {};
```

<!-- prettier-ignore -->
```ts
> 1 | return (1 || 'a' || null) && 0 && '' && {};
    |              ^^^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
return (1 || ('a'.length > 0) || null) && 0 && '' && {};
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
return (1 || ('a' !== "") || null) && 0 && '' && {};
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
return (1 || (Boolean('a')) || null) && 0 && '' && {};
```

<!-- prettier-ignore -->
```ts
> 1 | return (1 || 'a' || null) && 0 && '' && {};
    |                     ^^^^ Unexpected nullish value in conditional. The condition is always false.
```

<!-- prettier-ignore -->
```ts
> 1 | return (1 || 'a' || null) && 0 && '' && {};
    |                              ^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
return (1 || 'a' || null) && (0 !== 0) && '' && {};
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
return (1 || 'a' || null) && (!Number.isNaN(0)) && '' && {};
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
return (1 || 'a' || null) && (Boolean(0)) && '' && {};
```

<!-- prettier-ignore -->
```ts
> 1 | return (1 || 'a' || null) && 0 && '' && {};
    |                                   ^^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
return (1 || 'a' || null) && 0 && (''.length > 0) && {};
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
return (1 || 'a' || null) && 0 && ('' !== "") && {};
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
return (1 || 'a' || null) && 0 && (Boolean('')) && {};
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts
console.log((1 && []) || ('a' && {}));
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | console.log((1 && []) || ('a' && {}));
    |              ^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
console.log(((1 !== 0) && []) || ('a' && {}));
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
console.log(((!Number.isNaN(1)) && []) || ('a' && {}));
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
console.log(((Boolean(1)) && []) || ('a' && {}));
```

<!-- prettier-ignore -->
```ts
> 1 | console.log((1 && []) || ('a' && {}));
    |                   ^^ Unexpected object value in conditional. The condition is always true.
```

<!-- prettier-ignore -->
```ts
> 1 | console.log((1 && []) || ('a' && {}));
    |                           ^^^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
console.log((1 && []) || (('a'.length > 0) && {}));
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
console.log((1 && []) || (('a' !== "") && {}));
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
console.log((1 && []) || ((Boolean('a')) && {}));
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts
if ((1 && []) || ('a' && {})) void 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if ((1 && []) || ('a' && {})) void 0;
    |      ^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
if (((1 !== 0) && []) || ('a' && {})) void 0;
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
if (((!Number.isNaN(1)) && []) || ('a' && {})) void 0;
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
if (((Boolean(1)) && []) || ('a' && {})) void 0;
```

<!-- prettier-ignore -->
```ts
> 1 | if ((1 && []) || ('a' && {})) void 0;
    |           ^^ Unexpected object value in conditional. The condition is always true.
```

<!-- prettier-ignore -->
```ts
> 1 | if ((1 && []) || ('a' && {})) void 0;
    |                   ^^^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
if ((1 && []) || (('a'.length > 0) && {})) void 0;
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
if ((1 && []) || (('a' !== "") && {})) void 0;
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
if ((1 && []) || ((Boolean('a')) && {})) void 0;
```

<!-- prettier-ignore -->
```ts
> 1 | if ((1 && []) || ('a' && {})) void 0;
    |                          ^^ Unexpected object value in conditional. The condition is always true.
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts
let x = null || 0 || 'a' || [] ? {} : undefined;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | let x = null || 0 || 'a' || [] ? {} : undefined;
    |         ^^^^ Unexpected nullish value in conditional. The condition is always false.
```

<!-- prettier-ignore -->
```ts
> 1 | let x = null || 0 || 'a' || [] ? {} : undefined;
    |                 ^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
let x = null || (0 !== 0) || 'a' || [] ? {} : undefined;
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
let x = null || (!Number.isNaN(0)) || 'a' || [] ? {} : undefined;
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
let x = null || (Boolean(0)) || 'a' || [] ? {} : undefined;
```

<!-- prettier-ignore -->
```ts
> 1 | let x = null || 0 || 'a' || [] ? {} : undefined;
    |                      ^^^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
let x = null || 0 || ('a'.length > 0) || [] ? {} : undefined;
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
let x = null || 0 || ('a' !== "") || [] ? {} : undefined;
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
let x = null || 0 || (Boolean('a')) || [] ? {} : undefined;
```

<!-- prettier-ignore -->
```ts
> 1 | let x = null || 0 || 'a' || [] ? {} : undefined;
    |                             ^^ Unexpected object value in conditional. The condition is always true.
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts
return !(null || 0 || 'a' || []);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | return !(null || 0 || 'a' || []);
    |          ^^^^ Unexpected nullish value in conditional. The condition is always false.
```

<!-- prettier-ignore -->
```ts
> 1 | return !(null || 0 || 'a' || []);
    |                  ^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
return !(null || (0 !== 0) || 'a' || []);
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
return !(null || (!Number.isNaN(0)) || 'a' || []);
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
return !(null || (Boolean(0)) || 'a' || []);
```

<!-- prettier-ignore -->
```ts
> 1 | return !(null || 0 || 'a' || []);
    |                       ^^^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
return !(null || 0 || ('a'.length > 0) || []);
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
return !(null || 0 || ('a' !== "") || []);
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
return !(null || 0 || (Boolean('a')) || []);
```

<!-- prettier-ignore -->
```ts
> 1 | return !(null || 0 || 'a' || []);
    |                              ^^ Unexpected object value in conditional. The condition is always true.
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts
null || {};
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | null || {};
    | ^^^^ Unexpected nullish value in conditional. The condition is always false.
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts
        undefined && [];
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         undefined && [];
    |         ^^^^^^^^^ Unexpected nullish value in conditional. The condition is always false.
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts
        declare const x: null; if (x) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         declare const x: null; if (x) {}
    |                                    ^ Unexpected nullish value in conditional. The condition is always false.
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts
        (x: undefined) => !x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         (x: undefined) => !x;
    |                            ^ Unexpected nullish value in conditional. The condition is always false.
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts
        <T extends null | undefined>(x: T) => x ? 1 : 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T extends null | undefined>(x: T) => x ? 1 : 0;
    |                                               ^ Unexpected nullish value in conditional. The condition is always false.
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts
        <T extends null>(x: T) => x ? 1 : 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T extends null>(x: T) => x ? 1 : 0;
    |                                   ^ Unexpected nullish value in conditional. The condition is always false.
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts
        <T extends undefined>(x: T) => x ? 1 : 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T extends undefined>(x: T) => x ? 1 : 0;
    |                                        ^ Unexpected nullish value in conditional. The condition is always false.
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts
[] || 1;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | [] || 1;
    | ^^ Unexpected object value in conditional. The condition is always true.
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts
        ({}) && "a";
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         ({}) && "a";
    |          ^^ Unexpected object value in conditional. The condition is always true.
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts
        declare const x: symbol; if (x) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         declare const x: symbol; if (x) {}
    |                                      ^ Unexpected object value in conditional. The condition is always true.
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts
        (x: () => void) => !x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         (x: () => void) => !x;
    |                             ^ Unexpected object value in conditional. The condition is always true.
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts
        <T extends object>(x: T) => x ? 1 : 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T extends object>(x: T) => x ? 1 : 0;
    |                                     ^ Unexpected object value in conditional. The condition is always true.
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts
        <T extends Object | Function>(x: T) => x ? 1 : 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T extends Object | Function>(x: T) => x ? 1 : 0;
    |                                                ^ Unexpected object value in conditional. The condition is always true.
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts
        <T extends { a: number }>(x: T) => x ? 1 : 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T extends { a: number }>(x: T) => x ? 1 : 0;
    |                                            ^ Unexpected object value in conditional. The condition is always true.
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts
        <T extends () => void>(x: T) => x ? 1 : 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T extends () => void>(x: T) => x ? 1 : 0;
    |                                         ^ Unexpected object value in conditional. The condition is always true.
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts
while ("") {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | while ("") {}
    |        ^^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
while ("".length > 0) {}
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
while ("" !== "") {}
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
while (Boolean("")) {}
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts
        for (; "foo";) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         for (; "foo";) {}
    |                ^^^^^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
        for (; "foo".length > 0;) {}
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
        for (; "foo" !== "";) {}
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        for (; Boolean("foo");) {}
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts
        declare const x: string; if (x) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         declare const x: string; if (x) {}
    |                                      ^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
        declare const x: string; if (x.length > 0) {}
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
        declare const x: string; if (x !== "") {}
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        declare const x: string; if (Boolean(x)) {}
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts
        (x: string) => (!x);
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         (x: string) => (!x);
    |                          ^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
        (x: string) => (x.length === 0);
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
        (x: string) => (x === "");
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        (x: string) => (!Boolean(x));
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts
        <T extends string>(x: T) => x ? 1 : 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T extends string>(x: T) => x ? 1 : 0;
    |                                     ^ Unexpected string value in conditional. An explicit empty string check is required.
```

#### Suggestions

##### Change condition to check string's length (`value.length !== 0`)

<!-- prettier-ignore -->
```ts
        <T extends string>(x: T) => (x.length > 0) ? 1 : 0;
```

##### Change condition to check for empty string (`value !== ""`)

<!-- prettier-ignore -->
```ts
        <T extends string>(x: T) => (x !== "") ? 1 : 0;
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        <T extends string>(x: T) => (Boolean(x)) ? 1 : 0;
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts
while (0n) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | while (0n) {}
    |        ^^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
while (0n !== 0) {}
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
while (!Number.isNaN(0n)) {}
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
while (Boolean(0n)) {}
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts
        for (; 123;) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         for (; 123;) {}
    |                ^^^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
        for (; 123 !== 0;) {}
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
        for (; !Number.isNaN(123);) {}
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        for (; Boolean(123);) {}
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts
        declare const x: number; if (x) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         declare const x: number; if (x) {}
    |                                      ^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
        declare const x: number; if (x !== 0) {}
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
        declare const x: number; if (!Number.isNaN(x)) {}
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        declare const x: number; if (Boolean(x)) {}
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts
        (x: bigint) => !x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         (x: bigint) => !x;
    |                         ^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
        (x: bigint) => x === 0;
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
        (x: bigint) => Number.isNaN(x);
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        (x: bigint) => !Boolean(x);
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts
        <T extends number>(x: T) => (x) ? 1 : 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T extends number>(x: T) => (x) ? 1 : 0;
    |                                      ^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
        <T extends number>(x: T) => (x !== 0) ? 1 : 0;
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
        <T extends number>(x: T) => (!Number.isNaN(x)) ? 1 : 0;
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        <T extends number>(x: T) => (Boolean(x)) ? 1 : 0;
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts
        ![]["length"]; // doesn't count as array.length when computed
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         ![]["length"]; // doesn't count as array.length when computed
    |          ^^^^^^^^^^^^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
        []["length"] === 0; // doesn't count as array.length when computed
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
        Number.isNaN([]["length"]); // doesn't count as array.length when computed
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        !Boolean([]["length"]); // doesn't count as array.length when computed
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts
        declare const a: any[] & { notLength: number }; if (a.notLength) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         declare const a: any[] & { notLength: number }; if (a.notLength) {}
    |                                                             ^^^^^^^^^^^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

#### Suggestions

##### Change condition to check for 0 (`value !== 0`)

<!-- prettier-ignore -->
```ts
        declare const a: any[] & { notLength: number }; if (a.notLength !== 0) {}
```

##### Change condition to check for NaN (`!Number.isNaN(value)`)

<!-- prettier-ignore -->
```ts
        declare const a: any[] & { notLength: number }; if (!Number.isNaN(a.notLength)) {}
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        declare const a: any[] & { notLength: number }; if (Boolean(a.notLength)) {}
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts
if (![].length) {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
if ([].length === 0) {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (![].length) {}
    |      ^^^^^^^^^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts
        (a: number[]) => a.length && "..."
```

### Fix Output

<!-- prettier-ignore -->
```ts
        (a: number[]) => (a.length > 0) && "..."
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         (a: number[]) => a.length && "..."
    |                          ^^^^^^^^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts
        <T extends unknown[]>(...a: T) => a.length || "empty";
```

### Fix Output

<!-- prettier-ignore -->
```ts
        <T extends unknown[]>(...a: T) => (a.length > 0) || "empty";
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T extends unknown[]>(...a: T) => a.length || "empty";
    |                                           ^^^^^^^^ Unexpected number value in conditional. An explicit zero/NaN check is required.
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts
declare const x: string | number; if (x) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare const x: string | number; if (x) {}
    |                                       ^ Unexpected value in conditional. A boolean expression is required.
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts
        (x: bigint | string) => !x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         (x: bigint | string) => !x;
    |                                  ^ Unexpected value in conditional. A boolean expression is required.
```

## Test #45

### Test Code

<!-- prettier-ignore -->
```ts
        <T extends number | bigint | string>(x: T) => x ? 1 : 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T extends number | bigint | string>(x: T) => x ? 1 : 0;
    |                                                       ^ Unexpected value in conditional. A boolean expression is required.
```

## Test #46

### Test Code

<!-- prettier-ignore -->
```ts
declare const x: boolean | null; if (x) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare const x: boolean | null; if (x) {}
    |                                      ^ Unexpected nullable boolean value in conditional. Please handle the nullish case explicitly.
```

#### Suggestions

##### Explicitly treat nullish value the same as false (`value ?? false`)

<!-- prettier-ignore -->
```ts
declare const x: boolean | null; if (x ?? false) {}
```

##### Change condition to check if true (`value === true`)

<!-- prettier-ignore -->
```ts
declare const x: boolean | null; if (x === true) {}
```

## Test #47

### Test Code

<!-- prettier-ignore -->
```ts
        (x?: boolean) => !x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         (x?: boolean) => !x;
    |                           ^ Unexpected nullable boolean value in conditional. Please handle the nullish case explicitly.
```

#### Suggestions

##### Explicitly treat nullish value the same as false (`value ?? false`)

<!-- prettier-ignore -->
```ts
        (x?: boolean) => !(x ?? false);
```

##### Change condition to check if false (`value === false`)

<!-- prettier-ignore -->
```ts
        (x?: boolean) => x === false;
```

## Test #48

### Test Code

<!-- prettier-ignore -->
```ts
        <T extends boolean | null | undefined>(x: T) => x ? 1 : 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T extends boolean | null | undefined>(x: T) => x ? 1 : 0;
    |                                                         ^ Unexpected nullable boolean value in conditional. Please handle the nullish case explicitly.
```

#### Suggestions

##### Explicitly treat nullish value the same as false (`value ?? false`)

<!-- prettier-ignore -->
```ts
        <T extends boolean | null | undefined>(x: T) => (x ?? false) ? 1 : 0;
```

##### Change condition to check if true (`value === true`)

<!-- prettier-ignore -->
```ts
        <T extends boolean | null | undefined>(x: T) => (x === true) ? 1 : 0;
```

## Test #49

### Test Code

<!-- prettier-ignore -->
```ts
declare const x: object | null; if (x) {}
```

### Fix Output

<!-- prettier-ignore -->
```ts
declare const x: object | null; if (x != null) {}
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare const x: object | null; if (x) {}
    |                                     ^ Unexpected nullable object value in conditional. An explicit null check is required.
```

## Test #50

### Test Code

<!-- prettier-ignore -->
```ts
        (x?: { a: number }) => !x;
```

### Fix Output

<!-- prettier-ignore -->
```ts
        (x?: { a: number }) => x == null;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         (x?: { a: number }) => !x;
    |                                 ^ Unexpected nullable object value in conditional. An explicit null check is required.
```

## Test #51

### Test Code

<!-- prettier-ignore -->
```ts
        <T extends {} | null | undefined>(x: T) => x ? 1 : 0;
```

### Fix Output

<!-- prettier-ignore -->
```ts
        <T extends {} | null | undefined>(x: T) => (x != null) ? 1 : 0;
```

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T extends {} | null | undefined>(x: T) => x ? 1 : 0;
    |                                                    ^ Unexpected nullable object value in conditional. An explicit null check is required.
```

## Test #52

### Test Code

<!-- prettier-ignore -->
```ts
declare const x: string | null; if (x) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare const x: string | null; if (x) {}
    |                                     ^ Unexpected nullable string value in conditional. Please handle the nullish/empty cases explicitly.
```

#### Suggestions

##### Change condition to check for null/undefined (`value != null`)

<!-- prettier-ignore -->
```ts
declare const x: string | null; if (x != null) {}
```

##### Explicitly treat nullish value the same as an empty string (`value ?? ""`)

<!-- prettier-ignore -->
```ts
declare const x: string | null; if (x ?? "") {}
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
declare const x: string | null; if (Boolean(x)) {}
```

## Test #53

### Test Code

<!-- prettier-ignore -->
```ts
        (x?: string) => !x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         (x?: string) => !x;
    |                          ^ Unexpected nullable string value in conditional. Please handle the nullish/empty cases explicitly.
```

#### Suggestions

##### Change condition to check for null/undefined (`value != null`)

<!-- prettier-ignore -->
```ts
        (x?: string) => x == null;
```

##### Explicitly treat nullish value the same as an empty string (`value ?? ""`)

<!-- prettier-ignore -->
```ts
        (x?: string) => !(x ?? "");
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        (x?: string) => !Boolean(x);
```

## Test #54

### Test Code

<!-- prettier-ignore -->
```ts
        <T extends string | null | undefined>(x: T) => x ? 1 : 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T extends string | null | undefined>(x: T) => x ? 1 : 0;
    |                                                        ^ Unexpected nullable string value in conditional. Please handle the nullish/empty cases explicitly.
```

#### Suggestions

##### Change condition to check for null/undefined (`value != null`)

<!-- prettier-ignore -->
```ts
        <T extends string | null | undefined>(x: T) => (x != null) ? 1 : 0;
```

##### Explicitly treat nullish value the same as an empty string (`value ?? ""`)

<!-- prettier-ignore -->
```ts
        <T extends string | null | undefined>(x: T) => (x ?? "") ? 1 : 0;
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        <T extends string | null | undefined>(x: T) => (Boolean(x)) ? 1 : 0;
```

## Test #55

### Test Code

<!-- prettier-ignore -->
```ts
        function foo(x: '' | 'bar' | null) { if (!x) {} }
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         function foo(x: '' | 'bar' | null) { if (!x) {} }
    |                                                   ^ Unexpected nullable string value in conditional. Please handle the nullish/empty cases explicitly.
```

#### Suggestions

##### Change condition to check for null/undefined (`value != null`)

<!-- prettier-ignore -->
```ts
        function foo(x: '' | 'bar' | null) { if (x == null) {} }
```

##### Explicitly treat nullish value the same as an empty string (`value ?? ""`)

<!-- prettier-ignore -->
```ts
        function foo(x: '' | 'bar' | null) { if (!(x ?? "")) {} }
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        function foo(x: '' | 'bar' | null) { if (!Boolean(x)) {} }
```

## Test #56

### Test Code

<!-- prettier-ignore -->
```ts
declare const x: number | null; if (x) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | declare const x: number | null; if (x) {}
    |                                     ^ Unexpected nullable number value in conditional. Please handle the nullish/zero/NaN cases explicitly.
```

#### Suggestions

##### Change condition to check for null/undefined (`value != null`)

<!-- prettier-ignore -->
```ts
declare const x: number | null; if (x != null) {}
```

##### Explicitly treat nullish value the same as 0 (`value ?? 0`)

<!-- prettier-ignore -->
```ts
declare const x: number | null; if (x ?? 0) {}
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
declare const x: number | null; if (Boolean(x)) {}
```

## Test #57

### Test Code

<!-- prettier-ignore -->
```ts
        (x?: number) => !x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         (x?: number) => !x;
    |                          ^ Unexpected nullable number value in conditional. Please handle the nullish/zero/NaN cases explicitly.
```

#### Suggestions

##### Change condition to check for null/undefined (`value != null`)

<!-- prettier-ignore -->
```ts
        (x?: number) => x == null;
```

##### Explicitly treat nullish value the same as 0 (`value ?? 0`)

<!-- prettier-ignore -->
```ts
        (x?: number) => !(x ?? 0);
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        (x?: number) => !Boolean(x);
```

## Test #58

### Test Code

<!-- prettier-ignore -->
```ts
        <T extends number | null | undefined>(x: T) => x ? 1 : 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T extends number | null | undefined>(x: T) => x ? 1 : 0;
    |                                                        ^ Unexpected nullable number value in conditional. Please handle the nullish/zero/NaN cases explicitly.
```

#### Suggestions

##### Change condition to check for null/undefined (`value != null`)

<!-- prettier-ignore -->
```ts
        <T extends number | null | undefined>(x: T) => (x != null) ? 1 : 0;
```

##### Explicitly treat nullish value the same as 0 (`value ?? 0`)

<!-- prettier-ignore -->
```ts
        <T extends number | null | undefined>(x: T) => (x ?? 0) ? 1 : 0;
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        <T extends number | null | undefined>(x: T) => (Boolean(x)) ? 1 : 0;
```

## Test #59

### Test Code

<!-- prettier-ignore -->
```ts
        function foo(x: 0 | 1 | null) { if (!x) {} }
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         function foo(x: 0 | 1 | null) { if (!x) {} }
    |                                              ^ Unexpected nullable number value in conditional. Please handle the nullish/zero/NaN cases explicitly.
```

#### Suggestions

##### Change condition to check for null/undefined (`value != null`)

<!-- prettier-ignore -->
```ts
        function foo(x: 0 | 1 | null) { if (x == null) {} }
```

##### Explicitly treat nullish value the same as 0 (`value ?? 0`)

<!-- prettier-ignore -->
```ts
        function foo(x: 0 | 1 | null) { if (!(x ?? 0)) {} }
```

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        function foo(x: 0 | 1 | null) { if (!Boolean(x)) {} }
```

## Test #60

### Test Code

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = 0,
          That = 1,
        }
        const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
        if (theEnum) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = 0,
          That = 1,
        }
        const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
        if (theEnum != null) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum ExampleEnum {
  3 |           This = 0,
  4 |           That = 1,
  5 |         }
  6 |         const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
> 7 |         if (theEnum) {
    |             ^^^^^^^ Unexpected nullable enum value in conditional. Please handle the nullish/zero/NaN cases explicitly.
  8 |         }
  9 |       
```

## Test #61

### Test Code

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = 0,
          That = 1,
        }
        const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
        if (!theEnum) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = 0,
          That = 1,
        }
        const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
        if (theEnum == null) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum ExampleEnum {
  3 |           This = 0,
  4 |           That = 1,
  5 |         }
  6 |         const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
> 7 |         if (!theEnum) {
    |              ^^^^^^^ Unexpected nullable enum value in conditional. Please handle the nullish/zero/NaN cases explicitly.
  8 |         }
  9 |       
```

## Test #62

### Test Code

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This,
          That,
        }
        const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
        if (!theEnum) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This,
          That,
        }
        const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
        if (theEnum == null) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum ExampleEnum {
  3 |           This,
  4 |           That,
  5 |         }
  6 |         const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
> 7 |         if (!theEnum) {
    |              ^^^^^^^ Unexpected nullable enum value in conditional. Please handle the nullish/zero/NaN cases explicitly.
  8 |         }
  9 |       
```

## Test #63

### Test Code

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = '',
          That = 'a',
        }
        const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
        if (!theEnum) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = '',
          That = 'a',
        }
        const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
        if (theEnum == null) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum ExampleEnum {
  3 |           This = '',
  4 |           That = 'a',
  5 |         }
  6 |         const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
> 7 |         if (!theEnum) {
    |              ^^^^^^^ Unexpected nullable enum value in conditional. Please handle the nullish/zero/NaN cases explicitly.
  8 |         }
  9 |       
```

## Test #64

### Test Code

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = '',
          That = 0,
        }
        const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
        if (!theEnum) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = '',
          That = 0,
        }
        const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
        if (theEnum == null) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum ExampleEnum {
  3 |           This = '',
  4 |           That = 0,
  5 |         }
  6 |         const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
> 7 |         if (!theEnum) {
    |              ^^^^^^^ Unexpected nullable enum value in conditional. Please handle the nullish/zero/NaN cases explicitly.
  8 |         }
  9 |       
```

## Test #65

### Test Code

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = 'one',
          That = 'two',
        }
        const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
        if (!theEnum) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = 'one',
          That = 'two',
        }
        const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
        if (theEnum == null) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum ExampleEnum {
  3 |           This = 'one',
  4 |           That = 'two',
  5 |         }
  6 |         const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
> 7 |         if (!theEnum) {
    |              ^^^^^^^ Unexpected nullable enum value in conditional. Please handle the nullish/zero/NaN cases explicitly.
  8 |         }
  9 |       
```

## Test #66

### Test Code

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = 1,
          That = 2,
        }
        const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
        if (!theEnum) {
        }
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = 1,
          That = 2,
        }
        const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
        if (theEnum == null) {
        }
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum ExampleEnum {
  3 |           This = 1,
  4 |           That = 2,
  5 |         }
  6 |         const theEnum = Math.random() < 0.3 ? ExampleEnum.This : null;
> 7 |         if (!theEnum) {
    |              ^^^^^^^ Unexpected nullable enum value in conditional. Please handle the nullish/zero/NaN cases explicitly.
  8 |         }
  9 |       
```

## Test #67

### Test Code

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = 0,
          That = 'one',
        }
        (value?: ExampleEnum) => (value ? 1 : 0);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = 0,
          That = 'one',
        }
        (value?: ExampleEnum) => ((value != null) ? 1 : 0);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum ExampleEnum {
  3 |           This = 0,
  4 |           That = 'one',
  5 |         }
> 6 |         (value?: ExampleEnum) => (value ? 1 : 0);
    |                                   ^^^^^ Unexpected nullable enum value in conditional. Please handle the nullish/zero/NaN cases explicitly.
  7 |       
```

## Test #68

### Test Code

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = '',
          That = 1,
        }
        (value?: ExampleEnum) => (!value ? 1 : 0);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = '',
          That = 1,
        }
        (value?: ExampleEnum) => ((value == null) ? 1 : 0);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum ExampleEnum {
  3 |           This = '',
  4 |           That = 1,
  5 |         }
> 6 |         (value?: ExampleEnum) => (!value ? 1 : 0);
    |                                    ^^^^^ Unexpected nullable enum value in conditional. Please handle the nullish/zero/NaN cases explicitly.
  7 |       
```

## Test #69

### Test Code

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = 'this',
          That = 1,
        }
        (value?: ExampleEnum) => (!value ? 1 : 0);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = 'this',
          That = 1,
        }
        (value?: ExampleEnum) => ((value == null) ? 1 : 0);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum ExampleEnum {
  3 |           This = 'this',
  4 |           That = 1,
  5 |         }
> 6 |         (value?: ExampleEnum) => (!value ? 1 : 0);
    |                                    ^^^^^ Unexpected nullable enum value in conditional. Please handle the nullish/zero/NaN cases explicitly.
  7 |       
```

## Test #70

### Test Code

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = '',
          That = 0,
        }
        (value?: ExampleEnum) => (!value ? 1 : 0);
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        enum ExampleEnum {
          This = '',
          That = 0,
        }
        (value?: ExampleEnum) => ((value == null) ? 1 : 0);
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         enum ExampleEnum {
  3 |           This = '',
  4 |           That = 0,
  5 |         }
> 6 |         (value?: ExampleEnum) => (!value ? 1 : 0);
    |                                    ^^^^^ Unexpected nullable enum value in conditional. Please handle the nullish/zero/NaN cases explicitly.
  7 |       
```

## Test #71

### Test Code

<!-- prettier-ignore -->
```ts
if (x) {}
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 | if (x) {}
    |     ^ Unexpected any value in conditional. An explicit comparison or type cast is required.
```

#### Suggestions

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
if (Boolean(x)) {}
```

## Test #72

### Test Code

<!-- prettier-ignore -->
```ts
        x => !x;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         x => !x;
    |               ^ Unexpected any value in conditional. An explicit comparison or type cast is required.
```

#### Suggestions

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        x => !(Boolean(x));
```

## Test #73

### Test Code

<!-- prettier-ignore -->
```ts
        <T extends any>(x: T) => x ? 1 : 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T extends any>(x: T) => x ? 1 : 0;
    |                                  ^ Unexpected any value in conditional. An explicit comparison or type cast is required.
```

#### Suggestions

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        <T extends any>(x: T) => (Boolean(x)) ? 1 : 0;
```

## Test #74

### Test Code

<!-- prettier-ignore -->
```ts
        <T>(x: T) => x ? 1 : 0;
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
> 1 |         <T>(x: T) => x ? 1 : 0;
    |                      ^ Unexpected any value in conditional. An explicit comparison or type cast is required.
```

#### Suggestions

##### Explicitly cast value to a boolean (`Boolean(value)`)

<!-- prettier-ignore -->
```ts
        <T>(x: T) => (Boolean(x)) ? 1 : 0;
```

## Test #75

### Test Code

<!-- prettier-ignore -->
```ts

declare const x: string[] | null;
if (x) {
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const x: string[] | null;
  3 | if (x) {
  4 | }
  5 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | declare const x: string[] | null;
> 3 | if (x) {
    |     ^ Unexpected object value in conditional. The condition is always true.
  4 | }
  5 |       
```

## Test #76

### Test Code

<!-- prettier-ignore -->
```ts

        declare const obj: { x: number } | null;
        !obj ? 1 : 0
        !obj
        obj || 0
        obj && 1 || 0
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

        declare const obj: { x: number } | null;
        (obj == null) ? 1 : 0
        obj == null
        ;(obj != null) || 0
        ;(obj != null) && 1 || 0
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const obj: { x: number } | null;
> 3 |         !obj ? 1 : 0
    |          ^^^ Unexpected nullable object value in conditional. An explicit null check is required.
  4 |         !obj
  5 |         obj || 0
  6 |         obj && 1 || 0
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const obj: { x: number } | null;
  3 |         !obj ? 1 : 0
> 4 |         !obj
    |          ^^^ Unexpected nullable object value in conditional. An explicit null check is required.
  5 |         obj || 0
  6 |         obj && 1 || 0
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const obj: { x: number } | null;
  3 |         !obj ? 1 : 0
  4 |         !obj
> 5 |         obj || 0
    |         ^^^ Unexpected nullable object value in conditional. An explicit null check is required.
  6 |         obj && 1 || 0
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 |         declare const obj: { x: number } | null;
  3 |         !obj ? 1 : 0
  4 |         !obj
  5 |         obj || 0
> 6 |         obj && 1 || 0
    |         ^^^ Unexpected nullable object value in conditional. An explicit null check is required.
  7 |       
```
