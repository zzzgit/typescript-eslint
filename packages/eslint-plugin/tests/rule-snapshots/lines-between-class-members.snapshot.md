# lines-between-class-members

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

class foo {
baz1() { }
baz2() { }

bar(a: string): void;
bar(a: string, b:string): void;
bar(a: string, b:string) {

}

qux1() { }
qux2() { }
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class foo {
baz1() { }

baz2() { }

bar(a: string): void;
bar(a: string, b:string): void;
bar(a: string, b:string) {

}

qux1() { }

qux2() { }
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class foo {
   3 | baz1() { }
>  4 | baz2() { }
     | ^^^^^^^^^^ Expected blank line between class members.
   5 |
   6 | bar(a: string): void;
   7 | bar(a: string, b:string): void;
   8 | bar(a: string, b:string) {
   9 |
  10 | }
  11 |
  12 | qux1() { }
  13 | qux2() { }
  14 | };
  15 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class foo {
   3 | baz1() { }
   4 | baz2() { }
   5 |
   6 | bar(a: string): void;
   7 | bar(a: string, b:string): void;
   8 | bar(a: string, b:string) {
   9 |
  10 | }
  11 |
  12 | qux1() { }
> 13 | qux2() { }
     | ^^^^^^^^^^ Expected blank line between class members.
  14 | };
  15 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

class foo {
bar(a: string): void;
bar(a: string, b:string): void;
bar(a: string, b:string) {

}
baz() { }
qux() { }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class foo {
bar(a: string): void;
bar(a: string, b:string): void;
bar(a: string, b:string) {

}

baz() { }

qux() { }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class foo {
   3 | bar(a: string): void;
   4 | bar(a: string, b:string): void;
   5 | bar(a: string, b:string) {
   6 |
   7 | }
>  8 | baz() { }
     | ^^^^^^^^^ Expected blank line between class members.
   9 | qux() { }
  10 | }
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class foo {
   3 | bar(a: string): void;
   4 | bar(a: string, b:string): void;
   5 | bar(a: string, b:string) {
   6 |
   7 | }
   8 | baz() { }
>  9 | qux() { }
     | ^^^^^^^^^ Expected blank line between class members.
  10 | }
  11 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

class foo {
bar(a: string): void;
bar(a: string, b:string): void;
bar(a: string, b:string) {

}
baz() { }
qux() { }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class foo {
bar(a: string): void;
bar(a: string, b:string): void;
bar(a: string, b:string) {

}

baz() { }
qux() { }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class foo {
   3 | bar(a: string): void;
   4 | bar(a: string, b:string): void;
   5 | bar(a: string, b:string) {
   6 |
   7 | }
>  8 | baz() { }
     | ^^^^^^^^^ Expected blank line between class members.
   9 | qux() { }
  10 | }
  11 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

class foo {
bar(a: string): void;
bar(a: string, b:string): void;
bar(a: string, b:string) {

}

baz() { }
qux() { }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class foo {
bar(a: string): void;

bar(a: string, b:string): void;

bar(a: string, b:string) {

}

baz() { }

qux() { }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class foo {
   3 | bar(a: string): void;
>  4 | bar(a: string, b:string): void;
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Expected blank line between class members.
   5 | bar(a: string, b:string) {
   6 |
   7 | }
   8 |
   9 | baz() { }
  10 | qux() { }
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class foo {
   3 | bar(a: string): void;
   4 | bar(a: string, b:string): void;
>  5 | bar(a: string, b:string) {
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^
>  6 |
     | ^
>  7 | }
     | ^^ Expected blank line between class members.
   8 |
   9 | baz() { }
  10 | qux() { }
  11 | }
  12 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class foo {
   3 | bar(a: string): void;
   4 | bar(a: string, b:string): void;
   5 | bar(a: string, b:string) {
   6 |
   7 | }
   8 |
   9 | baz() { }
> 10 | qux() { }
     | ^^^^^^^^^ Expected blank line between class members.
  11 | }
  12 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

class foo{
bar(a: string):void;

bar(a: string, b:string):void;

bar(a: string, b:string){

}

baz() { }

qux() { }
};
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class foo{
bar(a: string):void;
bar(a: string, b:string):void;
bar(a: string, b:string){

}
baz() { }
qux() { }
};
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class foo{
   3 | bar(a: string):void;
   4 |
>  5 | bar(a: string, b:string):void;
     | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Unexpected blank line between class members.
   6 |
   7 | bar(a: string, b:string){
   8 |
   9 | }
  10 |
  11 | baz() { }
  12 |
  13 | qux() { }
  14 | };
  15 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class foo{
   3 | bar(a: string):void;
   4 |
   5 | bar(a: string, b:string):void;
   6 |
>  7 | bar(a: string, b:string){
     | ^^^^^^^^^^^^^^^^^^^^^^^^^
>  8 |
     | ^
>  9 | }
     | ^^ Unexpected blank line between class members.
  10 |
  11 | baz() { }
  12 |
  13 | qux() { }
  14 | };
  15 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class foo{
   3 | bar(a: string):void;
   4 |
   5 | bar(a: string, b:string):void;
   6 |
   7 | bar(a: string, b:string){
   8 |
   9 | }
  10 |
> 11 | baz() { }
     | ^^^^^^^^^ Unexpected blank line between class members.
  12 |
  13 | qux() { }
  14 | };
  15 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class foo{
   3 | bar(a: string):void;
   4 |
   5 | bar(a: string, b:string):void;
   6 |
   7 | bar(a: string, b:string){
   8 |
   9 | }
  10 |
  11 | baz() { }
  12 |
> 13 | qux() { }
     | ^^^^^^^^^ Unexpected blank line between class members.
  14 | };
  15 |       
```
