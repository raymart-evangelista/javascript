- How do you render lists in React?
  - take in the props, get the array list of elements, then use the `.map()` function to map out each element in the array to a <li> element
    - also use the index as the `key` or provide a unique key with `uniqid`

- How do you handle input field changes in React?
  - set up corresponding `this.state()` in the `constructor()`
  - create a function handler `handleChange` or something along that name for when the input field has value changes to it
    - inside that function, use `this.setState({task: event.target.value })`
  - on the input element (inside `render()`) add the SyntheticEvent `onChange={this.handleChange}`
  - add binding inside `constructor()`

- How do you handle form submission in React?
  - set up corresponding `this.state()` in the `constructor()`
  - create a function handler `onSubmitTask` or `onClickBtn` or something similar for when the form or button is invoked by clicking the button
    - inside that function, use `this.setState()` that will concat the array with the input
  - on the button element (inside `render()`) add the SyntheticEvent `onClick={this.onClickBtn}`
  - add binding inside `constructor()`