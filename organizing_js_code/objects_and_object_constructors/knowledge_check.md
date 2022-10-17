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
      title + " by " + author + " , " + pageAmount + " " + read)
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
    - method invocation
    - constructor invocation
    - indirect invocation