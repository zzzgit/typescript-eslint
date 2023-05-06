# prefer-return-this-type

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  f(): Foo {
    return this;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  f(): this {
    return this;
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   f(): Foo {
    |        ^^^ Use `this` type instead.
  4 |     return this;
  5 |   }
  6 | }
  7 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  f(): Foo {
    const self = this;
    return self;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  f(): this {
    const self = this;
    return self;
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   f(): Foo {
    |        ^^^ Use `this` type instead.
  4 |     const self = this;
  5 |     return self;
  6 |   }
  7 | }
  8 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  f = (): Foo => {
    return this;
  };
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  f = (): this => {
    return this;
  };
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   f = (): Foo => {
    |           ^^^ Use `this` type instead.
  4 |     return this;
  5 |   };
  6 | }
  7 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  f = (): Foo => {
    const self = this;
    return self;
  };
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  f = (): this => {
    const self = this;
    return self;
  };
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   f = (): Foo => {
    |           ^^^ Use `this` type instead.
  4 |     const self = this;
  5 |     return self;
  6 |   };
  7 | }
  8 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  f = (): Foo => this;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  f = (): this => this;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   f = (): Foo => this;
    |           ^^^ Use `this` type instead.
  4 | }
  5 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  f1(): Foo | undefined {
    return this;
  }
  f2(): this | undefined {
    return this;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  f1(): this | undefined {
    return this;
  }
  f2(): this | undefined {
    return this;
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
>  3 |   f1(): Foo | undefined {
     |         ^^^ Use `this` type instead.
   4 |     return this;
   5 |   }
   6 |   f2(): this | undefined {
   7 |     return this;
   8 |   }
   9 | }
  10 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  bar(): Foo | undefined {
    if (Math.random() > 0.5) {
      return this;
    }
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  bar(): this | undefined {
    if (Math.random() > 0.5) {
      return this;
    }
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Foo {
> 3 |   bar(): Foo | undefined {
    |          ^^^ Use `this` type instead.
  4 |     if (Math.random() > 0.5) {
  5 |       return this;
  6 |     }
  7 |   }
  8 | }
  9 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

class Foo {
  bar(num: 1 | 2): Foo {
    switch (num) {
      case 1:
        return this;
      case 2:
        return this;
    }
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Foo {
  bar(num: 1 | 2): this {
    switch (num) {
      case 1:
        return this;
      case 2:
        return this;
    }
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Foo {
>  3 |   bar(num: 1 | 2): Foo {
     |                    ^^^ Use `this` type instead.
   4 |     switch (num) {
   5 |       case 1:
   6 |         return this;
   7 |       case 2:
   8 |         return this;
   9 |     }
  10 |   }
  11 | }
  12 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

class Animal<T> {
  eat(): Animal<T> {
    console.log("I'm moving!");
    return this;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Animal<T> {
  eat(): this {
    console.log("I'm moving!");
    return this;
  }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Animal<T> {
> 3 |   eat(): Animal<T> {
    |          ^^^^^^^^^ Use `this` type instead.
  4 |     console.log("I'm moving!");
  5 |     return this;
  6 |   }
  7 | }
  8 |       
```
