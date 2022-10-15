- Write an object constructor and instantiate the object.
  - create constructor
  ```js
  {
    function Object(thing, otherThing) {
      this.thing = thing
      this.otherThing = otherThing
    }
  }
  ```
  - instantiation
  ```js
  {
    const newObject = Object('A string', 'Another string');
  }
  ```
- Describe what a prototype is and how it can be used.

- Explain prototypal inheritance.

- Understand the basic do's and dont's of prototypical inheritance.

- Explain what `Object.create` does.

- How does `this` behave in different situations.