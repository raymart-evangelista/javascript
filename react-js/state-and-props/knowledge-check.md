- How do you pass functions, state, or other values between components?
  - to share values or functionality between components, do so by the use of `props`
  - ** pass in `props` to the constructor of the child component as well as the `super()` method, or else you won't be able ot access the props in the child component

- What is the purpose of `state` in a React component?
  - state is what is used to handle values that can change over time
    - e.g. when clicking a button that will increment `count` on every click; we want to hold that value in `state`

- Explain the importance of using `setState()` instead of mutating state directly
  - state should be immutable such that you shouldn't change state directly without using `setState()` because it can lead to unexpected behavior or bugs

- What is the difference between functional and class components and how does their syntax for handling props differ?
  - when destructuring: 
    - for class components:
      - destructure within the render method
    - for functional components:
      - destructure outside of the return statement or inside the parameter parentheses of the functional component
  - in functional components, we don't pass `props` as an argument to the constructor, but instead pass it as an argument to the component itself
  - referencing in functional components is different than referencing in class components
    - in class components, props that have been passed down from the parent component can be used with the syntax `this.props.someFunction`
    - in functional components, you can reference `props` with `props.someFunction`
- How do you attach event listeners to elements in React components?
  - instead of using `addEventListener`, assign them right in the JSX
  - bind the method to `this` because all methods in class components  must be bound when passing them to other components