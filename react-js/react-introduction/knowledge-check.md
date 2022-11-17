- Why should you learn React?
  - reusability of components
  - well supported
  - not opinionated--so structure and pattern is up to you
  - smaller learning curve

- What is JSX?
  - an HTML-like syntax that is converted into JS so a browser can process it
  - React gives us the ability to combine JS and JSX

- What is a React Component?
  - building blocks that are reusable
  - defined in an ES6 module such that you can import code from one module into another module
  - can be defined as a class component or as a function (like a factory function)
  - the ability to split the UI into independent, reusable pieces, and think about each piece in isolation
  - components shouldn't be confused with React elements
    - elements are what components are made of

- What is the difference between a functional and a class component?
  - functional components:
    - don't have to import and extend "Component" from React
    - don't need a constructor
    - don't need render function--instead put the return statement right at the end of the function body
  - in professional environments, class components are for "main" components while function components are for smaller, particular components

- How should you structure your application into components?
  - you subclass `React.Component` so you are using the base class from the React library
  - you define a component class and use it to create components with the same methods that were defined in the component class
  - if part of your UI is used several times like `Button`, `Panel`, `Avatar`, or is complex enough on its own like `App`, `FeedStory`, `Comment`, it's a good candidate to be extracted to a separate component

- What does `create-react-app` do?
  - sets up a complete React application for you--does all necessary setup and configuration

- Instead of the DOM tree, what is displayed when you inspect an element using the Components tab provided by React Developer Tools?
  - you are able to inspect React components, check and edit the React component tree as well as props, state, and hooks for each component
