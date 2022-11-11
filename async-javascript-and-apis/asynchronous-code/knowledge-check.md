- What is a callback?
  - async functions were handled with callbacks
  - callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete a routine or action
  - instead of immediately returning some results like most functions, functions that use callbacks take some time to produce a result
  - usually callbacks are only used when doing I/O, downloading things, reading files, talking to databases, and etc
  - [when seeing a variable like `callback` or `cb` you can assume it is a function](https://github.com/maxogden/art-of-node#callbacks)
  - "the design of node requires you to think non-linearly"

  - callback hell has to do with waiting for the click event, then waiting for the timer to fire, then waiting for the Ajax response to come back
- What is a promise?
  - an object that might produce a value at some point in the future
  - the paradigm of promises.. instead of handing the continuation of the program to another party, expect it to return a capability to know when its task finishes, then the code could decide what to do next
  - most new async APIs being added to JS/DOM platforms are being built on Promises
  - a Promise is a future value
  - `Promise.all` method takes an array of promises and fires one callback once they are all resolved (an example of using this method is firing off multiple requests at once)

- When should you use promises over callbacks?
  - when having to do more callbacks (such as loading an image, then after that's done, loading another image, then after that's done, loading another image, and etc), it's more worthwhile to use promises over callbacks--such that you don't go through callback hell
  - promises are better composed than callbacks
  - async callbacks

- What does the `.then()` function do?
  - `.then()` tells the the variable to wait until the promise is resolved then run the function inside