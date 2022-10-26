- Describe common bugs you might run into using constructors
  - they do not behave like regular functions at all
  - program won't work as expected using a constructor function without `new` keyword and won't produce error messages that are easy to trace

- Write a factory method that returns an object
```js
const someFactoryMethod = (firstArg, anotherArg) => {
  const someFunc = () => console.log('some message');
  return { firstArg, anotherArg, someFunc };
}
```

- Explain how scope works in JavaScript (bonus points if you can point out what ES6 changed)
  - scope refers to where things like variables and functions can be used in your code
  - ES6 allows us to declare variables with `var` or `let` and `const`
    - `var` can be redefined or updated and are function scoped
    - `let` and `const` are scoped to a function, but if inside of that function or if inside of some other element, it will be scoped to the closest set of curly brackets

- Explain what Closure is and how it impacts private functions & variables
  - simply accessing variables outside of the immediate lexical scope creates a closure
    - basically inner function has access to outer function variables and scope
  - the concept of closure is the idea that functions retain their scope even if they are passed around and called outside of that scope
- Describe how private functions & variables are useful
  - closures allow us to create private variables and functions
    - private functions are functions that are used in the workings of our objects that are not intended to be used elsewhere in the program
    - there are likely several supporting functions that do not need to be used in your program as a whole--so making them inaccessible makes code easier to refactor, test, and reason about to use your objects

- Use inheritance in objects using the factory pattern
```js
const Person = name => {
  const sayName = () => console.log(`my name is ${name}`);
  return {sayName};
}

const Nerd = name => {
  const {sayName} = Person(name);
  const doSomethingNerdy = () => console.log('nerd stuff');
  return {sayName, doSomethingNerdy};
}
```
  - [instead of inheritance we can use composition since with inheritance we have to predict the future](https://youtu.be/wfMtDGfHWpA)

- Explain the module pattern
  - modules are similar to factory functions with the difference being in how they're created
  - instead of creating a factory that we can use over and over agian to create multiple objects, the module pattern wraps the factory in an IIFE
  - an example.. instead of having to make many calculator factories, with the module pattern we can just assign the object to a variable `calculator`

- Describe IIFE. What does it stand for?
  - Immediately Invoked Function Expression
  - we can immediately assign the object to a variable
  - the primary reason to use IIFE is for data privacy
    - vars declared within the IIFE can't be accessed by outside scope

- Briefly explain namespacing and how it's useful
  - it's a technique that is used to avoid naming collisions in programs
  - for example.. what if the calculator example had a function that added things to the HTML display and one that is a function that added numbers and operators to the stack as the users input? we'd want to call all these functions `add` which causes problems
    - nicely encapsulating them inside an object will cause no issues:
      - `calculator.add()`
      - `displayController.add()`
      - `operatorStack.add()`