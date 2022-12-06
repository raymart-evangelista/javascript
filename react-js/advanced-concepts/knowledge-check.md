- What are PropTypes and why can it be beneficial to use them?
  - PropTypes are about being able to declare types which can be helpful for catching errors such as passing a string that should be a number

- What are Styled Components and how do they make your code cleaner?
  - a package so that you can style buttons and other components similarly throughout the entire application
  - gives some default styling to HTML elements, allowing you to define something like a button with some basic styling and reuse the button throughout the application

- What is Redux and why are state management systems used in many large applications?
  - The most popular state management system (not part of React, but can be combined with React)
  - used to store application's state in a single place called a "store"
  - the benefit of a state management library is to prevent having to pass props through multiple levels of the component library and is recommended for larger apps

- What is prop drilling and how can you use Context API to avoid it?
  - prop drilling is having to pass props through many  components in the middle or having many components that require the same props
  - Context API lets a parent component provide data to all the components in its tree without having to pass props
    - an example would be having an optional dark theme and having many components require the theme data to style itself--having a `context` of the theme will give children components access to that data

- What is a High-order Component?
  - Components that consume another component and return a third component

- How can you create your own hooks?
  - create a function starting with `use` and what you are doing so for example, `useFetch` which contains all the logic needed to fetch data
    - use `useState` and `useEffect` and return the data
  - then use that function or import it to another component or `index.js` to utilize it like any other hook
