- What is tightly coupled code?
  - functions that include references to functions in other parts of the code
  - code that has so much code and depends on other code

- What are the two requirements for a function to be pure?
  - function always returns same result if the same arguments are passed in--doesn't depend on any state, or data, or change during a program's execution--it depends on its input arguments
  - function doesn't produce any observable side effects such as network requests, input and output devices, or data mutation

- What are side effects and why is it important to identify them when testing a function?
  - making an http request, mutating data, printing to screen or console, dom manipulation, math.random(), getting current time
  - they can change the function requirements

- What are two solutions to the tightly coupled code problem?
  - remove dependencies from code
  - mocking

- What is mocking?
  - writing fake versions of a function that always behave exactly how you want

- When would you use a mock function?
  - an example would be when testing a function that gets info from a DOM input, where you don't want to have to set up a webpage and dynamically insert something into the input to run the tests

- How should you test incoming query messages?
  - make assertions about what the query sends back

- Why should you not test implementation?
  - you should be able to change the implementation without breaking the test

- Should you test private methods?
  - no because the client doesn't have access to these methods
    - don't make assertions about their result
    - don't expect to send them

- Why should you not test messages with no side effects?
  - waste of time, no proof