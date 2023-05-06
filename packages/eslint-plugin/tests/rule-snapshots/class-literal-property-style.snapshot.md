# class-literal-property-style

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

class Mx {
  get p1() {
    return 'hello world';
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Mx {
  readonly p1 = 'hello world';
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Mx {
> 3 |   get p1() {
    |       ^^ Literals should be exposed using readonly fields.
  4 |     return 'hello world';
  5 |   }
  6 | }
  7 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

class Mx {
  get p1() {
    return `hello world`;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Mx {
  readonly p1 = `hello world`;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Mx {
> 3 |   get p1() {
    |       ^^ Literals should be exposed using readonly fields.
  4 |     return `hello world`;
  5 |   }
  6 | }
  7 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

class Mx {
  static get p1() {
    return 'hello world';
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Mx {
  static readonly p1 = 'hello world';
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Mx {
> 3 |   static get p1() {
    |              ^^ Literals should be exposed using readonly fields.
  4 |     return 'hello world';
  5 |   }
  6 | }
  7 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

class Mx {
  public static get foo() {
    return 1;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Mx {
  public static readonly foo = 1;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Mx {
> 3 |   public static get foo() {
    |                     ^^^ Literals should be exposed using readonly fields.
  4 |     return 1;
  5 |   }
  6 | }
  7 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

class Mx {
  public get [myValue]() {
    return 'a literal value';
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Mx {
  public readonly [myValue] = 'a literal value';
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Mx {
> 3 |   public get [myValue]() {
    |               ^^^^^^^ Literals should be exposed using readonly fields.
  4 |     return 'a literal value';
  5 |   }
  6 | }
  7 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

class Mx {
  public get [myValue]() {
    return 12345n;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Mx {
  public readonly [myValue] = 12345n;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Mx {
> 3 |   public get [myValue]() {
    |               ^^^^^^^ Literals should be exposed using readonly fields.
  4 |     return 12345n;
  5 |   }
  6 | }
  7 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

class Mx {
  public readonly [myValue] = 'a literal value';
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Mx {
  public get [myValue]() { return 'a literal value'; }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Mx {
> 3 |   public readonly [myValue] = 'a literal value';
    |                    ^^^^^^^ Literals should be exposed using getters.
  4 | }
  5 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

class Mx {
  readonly p1 = 'hello world';
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Mx {
  get p1() { return 'hello world'; }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Mx {
> 3 |   readonly p1 = 'hello world';
    |            ^^ Literals should be exposed using getters.
  4 | }
  5 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

class Mx {
  readonly p1 = `hello world`;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Mx {
  get p1() { return `hello world`; }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Mx {
> 3 |   readonly p1 = `hello world`;
    |            ^^ Literals should be exposed using getters.
  4 | }
  5 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

class Mx {
  static readonly p1 = 'hello world';
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Mx {
  static get p1() { return 'hello world'; }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Mx {
> 3 |   static readonly p1 = 'hello world';
    |                   ^^ Literals should be exposed using getters.
  4 | }
  5 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

class Mx {
  protected get p1() {
    return 'hello world';
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Mx {
  protected readonly p1 = 'hello world';
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Mx {
> 3 |   protected get p1() {
    |                 ^^ Literals should be exposed using readonly fields.
  4 |     return 'hello world';
  5 |   }
  6 | }
  7 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

class Mx {
  protected readonly p1 = 'hello world';
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Mx {
  protected get p1() { return 'hello world'; }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Mx {
> 3 |   protected readonly p1 = 'hello world';
    |                      ^^ Literals should be exposed using getters.
  4 | }
  5 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

class Mx {
  public static get p1() {
    return 'hello world';
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Mx {
  public static readonly p1 = 'hello world';
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Mx {
> 3 |   public static get p1() {
    |                     ^^ Literals should be exposed using readonly fields.
  4 |     return 'hello world';
  5 |   }
  6 | }
  7 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

class Mx {
  public static readonly p1 = 'hello world';
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Mx {
  public static get p1() { return 'hello world'; }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class Mx {
> 3 |   public static readonly p1 = 'hello world';
    |                          ^^ Literals should be exposed using getters.
  4 | }
  5 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

class Mx {
  public get myValue() {
    return gql`
      {
        user(id: 5) {
          firstName
          lastName
        }
      }
    `;
  }
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Mx {
  public readonly myValue = gql`
      {
        user(id: 5) {
          firstName
          lastName
        }
      }
    `;
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Mx {
>  3 |   public get myValue() {
     |              ^^^^^^^ Literals should be exposed using readonly fields.
   4 |     return gql`
   5 |       {
   6 |         user(id: 5) {
   7 |           firstName
   8 |           lastName
   9 |         }
  10 |       }
  11 |     `;
  12 |   }
  13 | }
  14 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

class Mx {
  public readonly myValue = gql`
    {
      user(id: 5) {
        firstName
        lastName
      }
    }
  `;
}
      
```

### Fix Output

<!-- prettier-ignore -->
```ts

class Mx {
  public get myValue() { return gql`
    {
      user(id: 5) {
        firstName
        lastName
      }
    }
  `; }
}
      
```

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class Mx {
>  3 |   public readonly myValue = gql`
     |                   ^^^^^^^ Literals should be exposed using getters.
   4 |     {
   5 |       user(id: 5) {
   6 |         firstName
   7 |         lastName
   8 |       }
   9 |     }
  10 |   `;
  11 | }
  12 |       
```
