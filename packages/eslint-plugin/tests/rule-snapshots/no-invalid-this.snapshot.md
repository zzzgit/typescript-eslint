# no-invalid-this

## Test #1

### Test Code

<!-- prettier-ignore -->
```ts

interface SomeType {
  prop: string;
}
function foo() {
  this.prop;
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | interface SomeType {
  3 |   prop: string;
  4 | }
  5 | function foo() {
> 6 |   this.prop;
    |   ^^^^ Unexpected 'this'.
  7 | }
  8 |       
```

## Test #2

### Test Code

<!-- prettier-ignore -->
```ts

console.log(this);
z(x => console.log(x, this));
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | console.log(this);
    |             ^^^^ Unexpected 'this'.
  3 | z(x => console.log(x, this));
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | console.log(this);
> 3 | z(x => console.log(x, this));
    |                       ^^^^ Unexpected 'this'.
  4 |       
```

## Test #3

### Test Code

<!-- prettier-ignore -->
```ts

console.log(this);
z(x => console.log(x, this));
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
> 2 | console.log(this);
    |             ^^^^ Unexpected 'this'.
  3 | z(x => console.log(x, this));
  4 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | console.log(this);
> 3 | z(x => console.log(x, this));
    |                       ^^^^ Unexpected 'this'.
  4 |       
```

## Test #4

### Test Code

<!-- prettier-ignore -->
```ts

(function () {
  console.log(this);
  z(x => console.log(x, this));
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | })();
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | })();
  6 |       
```

## Test #5

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  console.log(this);
  z(x => console.log(x, this));
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | }
  6 |       
```

## Test #6

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  console.log(this);
  z(x => console.log(x, this));
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | }
  6 |       
```

## Test #7

### Test Code

<!-- prettier-ignore -->
```ts

function Foo() {
  console.log(this);
  z(x => console.log(x, this));
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function Foo() {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | function Foo() {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | }
  6 |       
```

## Test #8

### Test Code

<!-- prettier-ignore -->
```ts

function foo() {
  'use strict';
  console.log(this);
  z(x => console.log(x, this));
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
  3 |   'use strict';
> 4 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  5 |   z(x => console.log(x, this));
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo() {
  3 |   'use strict';
  4 |   console.log(this);
> 5 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  6 | }
  7 |       
```

## Test #9

### Test Code

<!-- prettier-ignore -->
```ts

function Foo() {
  'use strict';
  console.log(this);
  z(x => console.log(x, this));
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function Foo() {
  3 |   'use strict';
> 4 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  5 |   z(x => console.log(x, this));
  6 | }
  7 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | function Foo() {
  3 |   'use strict';
  4 |   console.log(this);
> 5 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  6 | }
  7 |       
```

## Test #10

### Test Code

<!-- prettier-ignore -->
```ts

return function () {
  console.log(this);
  z(x => console.log(x, this));
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | return function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | };
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | return function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | };
  6 |       
```

## Test #11

### Test Code

<!-- prettier-ignore -->
```ts

var foo = function () {
  console.log(this);
  z(x => console.log(x, this));
}.bar(obj);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var foo = function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | }.bar(obj);
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | var foo = function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | }.bar(obj);
  6 |       
```

## Test #12

### Test Code

<!-- prettier-ignore -->
```ts

var obj = {
  foo: function () {
    function foo() {
      console.log(this);
      z(x => console.log(x, this));
    }
    foo();
  },
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | var obj = {
   3 |   foo: function () {
   4 |     function foo() {
>  5 |       console.log(this);
     |                   ^^^^ Unexpected 'this'.
   6 |       z(x => console.log(x, this));
   7 |     }
   8 |     foo();
   9 |   },
  10 | };
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | var obj = {
   3 |   foo: function () {
   4 |     function foo() {
   5 |       console.log(this);
>  6 |       z(x => console.log(x, this));
     |                             ^^^^ Unexpected 'this'.
   7 |     }
   8 |     foo();
   9 |   },
  10 | };
  11 |       
```

## Test #13

### Test Code

<!-- prettier-ignore -->
```ts

var obj = {
  foo() {
    function foo() {
      console.log(this);
      z(x => console.log(x, this));
    }
    foo();
  },
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | var obj = {
   3 |   foo() {
   4 |     function foo() {
>  5 |       console.log(this);
     |                   ^^^^ Unexpected 'this'.
   6 |       z(x => console.log(x, this));
   7 |     }
   8 |     foo();
   9 |   },
  10 | };
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | var obj = {
   3 |   foo() {
   4 |     function foo() {
   5 |       console.log(this);
>  6 |       z(x => console.log(x, this));
     |                             ^^^^ Unexpected 'this'.
   7 |     }
   8 |     foo();
   9 |   },
  10 | };
  11 |       
```

## Test #14

### Test Code

<!-- prettier-ignore -->
```ts

var obj = {
  foo: function () {
    return function () {
      console.log(this);
      z(x => console.log(x, this));
    };
  },
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | var obj = {
   3 |   foo: function () {
   4 |     return function () {
>  5 |       console.log(this);
     |                   ^^^^ Unexpected 'this'.
   6 |       z(x => console.log(x, this));
   7 |     };
   8 |   },
   9 | };
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | var obj = {
   3 |   foo: function () {
   4 |     return function () {
   5 |       console.log(this);
>  6 |       z(x => console.log(x, this));
     |                             ^^^^ Unexpected 'this'.
   7 |     };
   8 |   },
   9 | };
  10 |       
```

## Test #15

### Test Code

<!-- prettier-ignore -->
```ts

var obj = {
  foo: function () {
    'use strict';
    return function () {
      console.log(this);
      z(x => console.log(x, this));
    };
  },
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | var obj = {
   3 |   foo: function () {
   4 |     'use strict';
   5 |     return function () {
>  6 |       console.log(this);
     |                   ^^^^ Unexpected 'this'.
   7 |       z(x => console.log(x, this));
   8 |     };
   9 |   },
  10 | };
  11 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | var obj = {
   3 |   foo: function () {
   4 |     'use strict';
   5 |     return function () {
   6 |       console.log(this);
>  7 |       z(x => console.log(x, this));
     |                             ^^^^ Unexpected 'this'.
   8 |     };
   9 |   },
  10 | };
  11 |       
```

## Test #16

### Test Code

<!-- prettier-ignore -->
```ts

obj.foo = function () {
  return function () {
    console.log(this);
    z(x => console.log(x, this));
  };
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | obj.foo = function () {
  3 |   return function () {
> 4 |     console.log(this);
    |                 ^^^^ Unexpected 'this'.
  5 |     z(x => console.log(x, this));
  6 |   };
  7 | };
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | obj.foo = function () {
  3 |   return function () {
  4 |     console.log(this);
> 5 |     z(x => console.log(x, this));
    |                           ^^^^ Unexpected 'this'.
  6 |   };
  7 | };
  8 |       
```

## Test #17

### Test Code

<!-- prettier-ignore -->
```ts

obj.foo = function () {
  'use strict';
  return function () {
    console.log(this);
    z(x => console.log(x, this));
  };
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | obj.foo = function () {
  3 |   'use strict';
  4 |   return function () {
> 5 |     console.log(this);
    |                 ^^^^ Unexpected 'this'.
  6 |     z(x => console.log(x, this));
  7 |   };
  8 | };
  9 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | obj.foo = function () {
  3 |   'use strict';
  4 |   return function () {
  5 |     console.log(this);
> 6 |     z(x => console.log(x, this));
    |                           ^^^^ Unexpected 'this'.
  7 |   };
  8 | };
  9 |       
```

## Test #18

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  foo() {
    return function () {
      console.log(this);
      z(x => console.log(x, this));
    };
  }
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class A {
   3 |   foo() {
   4 |     return function () {
>  5 |       console.log(this);
     |                   ^^^^ Unexpected 'this'.
   6 |       z(x => console.log(x, this));
   7 |     };
   8 |   }
   9 | }
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class A {
   3 |   foo() {
   4 |     return function () {
   5 |       console.log(this);
>  6 |       z(x => console.log(x, this));
     |                             ^^^^ Unexpected 'this'.
   7 |     };
   8 |   }
   9 | }
  10 |       
```

## Test #19

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  b = new Array(1, 2, function () {
    console.log(this);
    z(x => console.log(x, this));
  });
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
  3 |   b = new Array(1, 2, function () {
> 4 |     console.log(this);
    |                 ^^^^ Unexpected 'this'.
  5 |     z(x => console.log(x, this));
  6 |   });
  7 | }
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | class A {
  3 |   b = new Array(1, 2, function () {
  4 |     console.log(this);
> 5 |     z(x => console.log(x, this));
    |                           ^^^^ Unexpected 'this'.
  6 |   });
  7 | }
  8 |       
```

## Test #20

### Test Code

<!-- prettier-ignore -->
```ts

class A {
  b = () => {
    function c() {
      console.log(this);
      z(x => console.log(x, this));
    }
  };
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
   1 |
   2 | class A {
   3 |   b = () => {
   4 |     function c() {
>  5 |       console.log(this);
     |                   ^^^^ Unexpected 'this'.
   6 |       z(x => console.log(x, this));
   7 |     }
   8 |   };
   9 | }
  10 |       
```

<!-- prettier-ignore -->
```ts
   1 |
   2 | class A {
   3 |   b = () => {
   4 |     function c() {
   5 |       console.log(this);
>  6 |       z(x => console.log(x, this));
     |                             ^^^^ Unexpected 'this'.
   7 |     }
   8 |   };
   9 | }
  10 |       
```

## Test #21

### Test Code

<!-- prettier-ignore -->
```ts

obj.foo = (function () {
  return () => {
    console.log(this);
    z(x => console.log(x, this));
  };
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | obj.foo = (function () {
  3 |   return () => {
> 4 |     console.log(this);
    |                 ^^^^ Unexpected 'this'.
  5 |     z(x => console.log(x, this));
  6 |   };
  7 | })();
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | obj.foo = (function () {
  3 |   return () => {
  4 |     console.log(this);
> 5 |     z(x => console.log(x, this));
    |                           ^^^^ Unexpected 'this'.
  6 |   };
  7 | })();
  8 |       
```

## Test #22

### Test Code

<!-- prettier-ignore -->
```ts

obj.foo = (() => () => {
  console.log(this);
  z(x => console.log(x, this));
})();
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | obj.foo = (() => () => {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | })();
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | obj.foo = (() => () => {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | })();
  6 |       
```

## Test #23

### Test Code

<!-- prettier-ignore -->
```ts

var foo = function () {
  console.log(this);
  z(x => console.log(x, this));
}.bind(null);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var foo = function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | }.bind(null);
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | var foo = function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | }.bind(null);
  6 |       
```

## Test #24

### Test Code

<!-- prettier-ignore -->
```ts

(function () {
  console.log(this);
  z(x => console.log(x, this));
}).call(undefined);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | }).call(undefined);
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | }).call(undefined);
  6 |       
```

## Test #25

### Test Code

<!-- prettier-ignore -->
```ts

(function () {
  console.log(this);
  z(x => console.log(x, this));
}).apply(void 0);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | }).apply(void 0);
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | (function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | }).apply(void 0);
  6 |       
```

## Test #26

### Test Code

<!-- prettier-ignore -->
```ts

Array.from([], function () {
  console.log(this);
  z(x => console.log(x, this));
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | Array.from([], function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | });
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | Array.from([], function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | });
  6 |       
```

## Test #27

### Test Code

<!-- prettier-ignore -->
```ts

foo.every(function () {
  console.log(this);
  z(x => console.log(x, this));
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | foo.every(function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | });
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | foo.every(function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | });
  6 |       
```

## Test #28

### Test Code

<!-- prettier-ignore -->
```ts

foo.filter(function () {
  console.log(this);
  z(x => console.log(x, this));
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | foo.filter(function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | });
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | foo.filter(function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | });
  6 |       
```

## Test #29

### Test Code

<!-- prettier-ignore -->
```ts

foo.find(function () {
  console.log(this);
  z(x => console.log(x, this));
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | foo.find(function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | });
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | foo.find(function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | });
  6 |       
```

## Test #30

### Test Code

<!-- prettier-ignore -->
```ts

foo.findIndex(function () {
  console.log(this);
  z(x => console.log(x, this));
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | foo.findIndex(function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | });
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | foo.findIndex(function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | });
  6 |       
```

## Test #31

### Test Code

<!-- prettier-ignore -->
```ts

foo.forEach(function () {
  console.log(this);
  z(x => console.log(x, this));
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | foo.forEach(function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | });
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | foo.forEach(function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | });
  6 |       
```

## Test #32

### Test Code

<!-- prettier-ignore -->
```ts

foo.map(function () {
  console.log(this);
  z(x => console.log(x, this));
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | foo.map(function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | });
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | foo.map(function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | });
  6 |       
```

## Test #33

### Test Code

<!-- prettier-ignore -->
```ts

foo.some(function () {
  console.log(this);
  z(x => console.log(x, this));
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | foo.some(function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | });
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | foo.some(function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | });
  6 |       
```

## Test #34

### Test Code

<!-- prettier-ignore -->
```ts

foo.forEach(function () {
  console.log(this);
  z(x => console.log(x, this));
}, null);
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | foo.forEach(function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | }, null);
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | foo.forEach(function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | }, null);
  6 |       
```

## Test #35

### Test Code

<!-- prettier-ignore -->
```ts

/** @returns {void} */ function foo() {
  console.log(this);
  z(x => console.log(x, this));
}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | /** @returns {void} */ function foo() {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | }
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | /** @returns {void} */ function foo() {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | }
  6 |       
```

## Test #36

### Test Code

<!-- prettier-ignore -->
```ts

/** @this Obj */ foo(function () {
  console.log(this);
  z(x => console.log(x, this));
});
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | /** @this Obj */ foo(function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | });
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | /** @this Obj */ foo(function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | });
  6 |       
```

## Test #37

### Test Code

<!-- prettier-ignore -->
```ts

var Ctor = function () {
  console.log(this);
  z(x => console.log(x, this));
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var Ctor = function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | };
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | var Ctor = function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | };
  6 |       
```

## Test #38

### Test Code

<!-- prettier-ignore -->
```ts

var func = function () {
  console.log(this);
  z(x => console.log(x, this));
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var func = function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | };
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | var func = function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | };
  6 |       
```

## Test #39

### Test Code

<!-- prettier-ignore -->
```ts

var func = function () {
  console.log(this);
  z(x => console.log(x, this));
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | var func = function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | };
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | var func = function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | };
  6 |       
```

## Test #40

### Test Code

<!-- prettier-ignore -->
```ts

Ctor = function () {
  console.log(this);
  z(x => console.log(x, this));
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | Ctor = function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | };
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | Ctor = function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | };
  6 |       
```

## Test #41

### Test Code

<!-- prettier-ignore -->
```ts

func = function () {
  console.log(this);
  z(x => console.log(x, this));
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | func = function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | };
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | func = function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | };
  6 |       
```

## Test #42

### Test Code

<!-- prettier-ignore -->
```ts

func = function () {
  console.log(this);
  z(x => console.log(x, this));
};
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | func = function () {
> 3 |   console.log(this);
    |               ^^^^ Unexpected 'this'.
  4 |   z(x => console.log(x, this));
  5 | };
  6 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | func = function () {
  3 |   console.log(this);
> 4 |   z(x => console.log(x, this));
    |                         ^^^^ Unexpected 'this'.
  5 | };
  6 |       
```

## Test #43

### Test Code

<!-- prettier-ignore -->
```ts

function foo(
  func = function () {
    console.log(this);
    z(x => console.log(x, this));
  },
) {}
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(
  3 |   func = function () {
> 4 |     console.log(this);
    |                 ^^^^ Unexpected 'this'.
  5 |     z(x => console.log(x, this));
  6 |   },
  7 | ) {}
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | function foo(
  3 |   func = function () {
  4 |     console.log(this);
> 5 |     z(x => console.log(x, this));
    |                           ^^^^ Unexpected 'this'.
  6 |   },
  7 | ) {}
  8 |       
```

## Test #44

### Test Code

<!-- prettier-ignore -->
```ts

[
  func = function () {
    console.log(this);
    z(x => console.log(x, this));
  },
] = a;
      
```

### Fix Output

No fix applied

### Errors

<!-- prettier-ignore -->
```ts
  1 |
  2 | [
  3 |   func = function () {
> 4 |     console.log(this);
    |                 ^^^^ Unexpected 'this'.
  5 |     z(x => console.log(x, this));
  6 |   },
  7 | ] = a;
  8 |       
```

<!-- prettier-ignore -->
```ts
  1 |
  2 | [
  3 |   func = function () {
  4 |     console.log(this);
> 5 |     z(x => console.log(x, this));
    |                           ^^^^ Unexpected 'this'.
  6 |   },
  7 | ] = a;
  8 |       
```
