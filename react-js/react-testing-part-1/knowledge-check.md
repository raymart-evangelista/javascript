- What packages are required for React testing?
  - `@testing-library/react`
  - `@testing-library/jest-dom`
  - `@testing-library/user-event`
  - these packages are already included if initializing React repositories with CRA

- What is the significance of the user-event package?
  - provides `userEvent` API that simulates user interactions with the webpage

- What does the `render` method do?
  - the `render` API returns an object and we can use destructuring syntax to obtain a subset of the methods required

- What is the most preferred method for querying?
  - `ByRole` methods especially when paired with `name` option

- How would you test for a click event with `userEvent`?
  - in the `test.js` file, use `screen` to access queries rather than to destructure `render`

- What is the advantage of snapshot tests?
  - checking whether all the nodes render as we expect them to
  - comparing our rendered component with an associated snapshot file
  - fast and easy to write
  - check if component behaves correctly
  - conditional rendering tests

- What are the disadvantages of snapshot tests?
  - may cause false positives
  - bugs may go undetected since we can't ascertain the validity of the component from a snapshot test
  - false negatives
  - problems with larger snapshots
  - issues with translations