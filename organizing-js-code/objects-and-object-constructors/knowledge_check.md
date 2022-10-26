- Write an object constructor and instantiate the object.
  - create constructor
  ```js
  function Object(thing, otherThing) {
    this.thing = thing
    this.otherThing = otherThing
  }
  ```
  - another example
  ```js
  function Book(title, author, pageAmount, read) {
    this.title = title
    this.author = author
    this.pageAmount = pageAmount
    this.read = read
    this.info = function() {
      title + " by " + author + " , " + pageAmount + " " + read;
    }
  }
  ```
  - instantiation
  ```js
  const newObject = Object('A string', 'Another string');
  ```
- Describe what a prototype is and how it can be used.
  - it's an object that the original object inherits from--the original object has access to all of its prototype's methods and properties
  - if using constructors to make objects, it's better to define functions on the prototype of that object so a single instance of each function is shared between all the (for example, Student) objects
  
  - there are two ways an object's prototype attribute is set when an object is created
    - if an object is created with an object literal, it inherits properties from Object.prototype
    - if an object is created from a constructor function

- Explain prototypal inheritance.
  - inheritance is a programming paradigm where objects can inherit properties and methods form other objects; and specifically with JS, you can implement inheritance with the prototype property

- Understand the basic do's and dont's of prototypical inheritance.
  - don't reference in circles as JS will throw an error
  - `__proto__` can only be an object or null

- Explain what `Object.create` does.
  - creates a new object using an existing object as the prototype of the newly created object

- How does `this` behave in different situations.
  - `this` is the context of a function invocation which JS has 4 function invocation types:
    - function invocation
      - note that function invocation cannot be a property accessor `object.myFunc()`, which creates a method invocation
      - in strict mode, `this` is undefined
      - pitfall
        - thinking that `this` is the same in an inner function as in the outer function
    - method invocation
      - `this` is the object that owns the method in a method invocation
      - pitfall
        - a method can be extracted from an object into a separated variable in which you might think that `this` is the object which the method was defined in--using `bind` in the statement `const alone = myObj.myMethod.bind(myObj)` fixes the context by binding `this` the object that owns the method
    - constructor invocation
      - `this` is the newly created object in a constructor invocation
      - pitfall
        - using a function invocation to create objects is a potential issue because some constructors may omit the logic to initialize the object when `new` keyword is missing
          - make sure to use `new` operator in cases when a constructor call is expected
    - indirect invocation
      - `this` is the first argument of `.call()` or `.apply()` in an indirect invocation
    - bound function
      - a bound function is a function whose context and/or arguments are bound to specific values
      - `this` is the first argument of `myFunc.bind(thisArg)` when invoking a bound function
    - arrow function
      - arrow function is designed to declare the function in a shorter form and lexically bind the context
      - don't have verbose keyword `function` sometimes omitting the `return` keyboard when the arrow function has only one statement
      - `this` is the enclosing context where the arrow function is defined
      - the arrow function is bound with the lexical `this` once and forever