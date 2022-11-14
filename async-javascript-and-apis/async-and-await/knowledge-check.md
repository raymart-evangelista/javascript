- How do you declare an `async` function?
  - use the `async` keyword

- What does the `async` keyword do?
  - lets JavaScript know you are declaring an asynchronous function which required to use `await` inside any function

- What does the `await` keyword do?
  - wait for an async action to finish before continuing the function
  - used to get a value from a function where you would normally use `.then()`
    - instead of calling `.then()` after the sync function, simply assign a variable to the result using `await`

- What is returned from an `async` function?
  - a promise is automatically returned
  - returning in an `async` function is the same as resolving a promise and throwing an error is the same as rejecting the promise

- What happens when an error is thrown inside an `async` function?
  - it will reject the promise

- How can you handle errors inside an `async` function?
  - `.catch()` appended to the end of the `async` function call
  - `try/catch` directly inside the `async` function