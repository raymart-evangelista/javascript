### My notes
- in class components, common lifecycle methods include:
  - `constructor()`
  - `componentDidMount`
  - `render()`
  - `componentDidUpdate`
  - `componentWillUnmount`

- `useEffect` in functional components can mimic these class component lifecycle methods:
  - leaving out the dependency array, the `useEffect` hook runs anytime the component is updated, AND right after the initial render
    - this is equal to a `componentDidMount` and `componentDidUpdate` method combined
  - `componentDidUpdate`
    - in class components:
      - not called for initial render, but called any other time that the component updates
    - in functional components:
      - if the dependency array of the useEffect has a dependency, `[color]`, it will be similar to `componentDidUpdate` with the only difference is that it runs when a certain condition has changed, in this case `color` changing
  - `componentDidMount`
    - in class components:
      - runs when the component is inserted in the DOM tree
    - in functional components:
      - if the dependency array of the useEffect is empty, `[]`, it is equivalent to the `componentDidMount` lifecycle method--meaning the hook runs one time when the component mounts
  - `componentWillUnmount`
    - in class components:
      - called when component is removed from the DOM tree
    - in functional components:
      - adding a return statement inside `useEffect` is equivalent to `componentWillUnmount`

### Knowledge Check
- How do you declare state in a functional component?
  - `const [variable, setVariable] = useState(someValue)`

- What is the correct naming convention for state values?
  - the convention is to always call the second value like the first, just with a "set" in front of it

- How do you mimic `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in a functional component?
  - to mimic `componentDidMount` 
    - if the dependency array of the useEffect is empty, `[]`, it is equivalent to the `componentDidMount` lifecycle method--meaning the hook runs one time when the component mounts
  - to mimic `componentDidUpdate`
    - if the dependency array of the useEffect has a dependency, `[color]`, it will be similar to `componentDidUpdate` with the only difference is that it runs when a certain condition has changed, in this case `color` changing
  - to mimic `componentWilUnmount`
    - adding a return statement inside `useEffect` is equivalent to `componentWillUnmount`

- Explain how the dependency array in the `useEffect` hook impacts the effect of the hook
  - leave dependency array empty, `[]`
    - equal to `componentDidMount` in that the hook runs one time when the component mounts
  - add dependency to array, `[color]`
    - reruns anytime the dependency changes--similar to `componentDidUpdate` but runs when certain condition changes
  - leave out dependency array
    - useEffect hook runs anytime the component is updated AND right after the initial render--equal to `componentDidMount` and `componentDidUpdate` method combined