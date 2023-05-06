# prefer-enum-initializers

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

enum Direction {
  Up,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum Direction {
> 3 |   Up,
    |   ^^ The value of the member 'Up' should be explicitly defined.
  4 | }
  5 |       
```

#### Suggestions

##### Can be fixed to Up = 0

<!-- prettier-ignore -->
```ts

enum Direction {
  Up = 0,
}
      
```

##### Can be fixed to Up = 1

<!-- prettier-ignore -->
```ts

enum Direction {
  Up = 1,
}
      
```

##### Can be fixed to Up = 'Up'

<!-- prettier-ignore -->
```ts

enum Direction {
  Up = 'Up',
}
      
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

enum Direction {
  Up,
  Down,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum Direction {
> 3 |   Up,
    |   ^^ The value of the member 'Up' should be explicitly defined.
  4 |   Down,
  5 | }
  6 |       
```

#### Suggestions

##### Can be fixed to Up = 0

<!-- prettier-ignore -->
```ts

enum Direction {
  Up = 0,
  Down,
}
      
```

##### Can be fixed to Up = 1

<!-- prettier-ignore -->
```ts

enum Direction {
  Up = 1,
  Down,
}
      
```

##### Can be fixed to Up = 'Up'

<!-- prettier-ignore -->
```ts

enum Direction {
  Up = 'Up',
  Down,
}
      
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum Direction {
  3 |   Up,
> 4 |   Down,
    |   ^^^^ The value of the member 'Down' should be explicitly defined.
  5 | }
  6 |       
```

#### Suggestions

##### Can be fixed to Down = 1

<!-- prettier-ignore -->
```ts

enum Direction {
  Up,
  Down = 1,
}
      
```

##### Can be fixed to Down = 2

<!-- prettier-ignore -->
```ts

enum Direction {
  Up,
  Down = 2,
}
      
```

##### Can be fixed to Down = 'Down'

<!-- prettier-ignore -->
```ts

enum Direction {
  Up,
  Down = 'Down',
}
      
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

enum Direction {
  Up = 'Up',
  Down,
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum Direction {
  3 |   Up = 'Up',
> 4 |   Down,
    |   ^^^^ The value of the member 'Down' should be explicitly defined.
  5 | }
  6 |       
```

#### Suggestions

##### Can be fixed to Down = 1

<!-- prettier-ignore -->
```ts

enum Direction {
  Up = 'Up',
  Down = 1,
}
      
```

##### Can be fixed to Down = 2

<!-- prettier-ignore -->
```ts

enum Direction {
  Up = 'Up',
  Down = 2,
}
      
```

##### Can be fixed to Down = 'Down'

<!-- prettier-ignore -->
```ts

enum Direction {
  Up = 'Up',
  Down = 'Down',
}
      
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

enum Direction {
  Up,
  Down = 'Down',
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | enum Direction {
> 3 |   Up,
    |   ^^ The value of the member 'Up' should be explicitly defined.
  4 |   Down = 'Down',
  5 | }
  6 |       
```

#### Suggestions

##### Can be fixed to Up = 0

<!-- prettier-ignore -->
```ts

enum Direction {
  Up = 0,
  Down = 'Down',
}
      
```

##### Can be fixed to Up = 1

<!-- prettier-ignore -->
```ts

enum Direction {
  Up = 1,
  Down = 'Down',
}
      
```

##### Can be fixed to Up = 'Up'

<!-- prettier-ignore -->
```ts

enum Direction {
  Up = 'Up',
  Down = 'Down',
}
      
```
