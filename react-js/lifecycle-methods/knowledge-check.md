- What is a component's lifecycle?
  - 1. Creation of the component (componentDidMount)
    - runs when component is inserted into the DOM tree
    - common tasks that are done in this method are:
      - connect to web APIs or JavaScript frameworks
      - set timers using setTimeout or setInterval
      - add event listeners
  - 2. Render of the component (render)
    - the `render()` method contains all the logic your component should display on the screen
  - 3. (optional) Update of the component (componentDidUpdate)
    - not called for the initial render--but called any other time that the component updates
    - prone to inf loops if used to update state in a way that causes re-render, so conditional statement should be included for prevention
    - method is great place for when operating on the DOM when the component has updated
      - also useful for sending network requests when conditions are met (e.g. if user changed accounts, fetch the data for that new account during this method)
  - 4. Death of the component (componentWillUnmount)
    - called when component is removed form the DOM tree
    - usually doing cleanup tasks in this method, often cleaning up what was added in the componentDidMount method
      - e.g. removing event listeners, cancelling network requests, other clean up routines

  - A component can be in different states of its "life", and in React we can use those states to handle certain tasks

- Explain the most important lifecycle methods?


- Which tasks should be triggered at the various lifecycle stages of a component?