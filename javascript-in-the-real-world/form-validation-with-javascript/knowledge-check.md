- Understand the importance of validating HTML forms before submitting them to a server
  - ensures data submitted matches the requirements set forth in the various form controls
  - important feature of good user experience--less delay since server isn't hit yet
  - even with client side validation, security checks should still be in place since client side validation is too easy to bypass

  - we want to get the right data, in the right format
  - we want to protect our users' data
  - we want to protect ourselves

- Describe the two types of client-side form validation, built-in form validation and validation using JavaScript
  - built-in form validation that uses HTML form validation features--better performance but less customizable as JavaScript validation
  - built-in form validation uses :valid and :invalid CSS pseudo-classes
  - JavaScript validation is completely customizable, but you need to create it all (or use a library)

- Understand JavaScript Constraint Validation API provides more control and customization of form validation
  - it provides a set of methods and properties available on <button>, <fieldset>, <input>, <output>, <select>, and <textarea> elements that have to do with validation
    - an example is checking the valid state of the input every time its value is changed by running checkValidity() method via the event handler set on the input
- Use JavaScript to write custom error messages and add custom styling to the errors
  - make use of JavaScript Constraint Validation API
- Understand forms can also be validated without using Constraint Validation API, which is useful in certain cases
  - without using the Constraint Validation API, you have to create your own JavaScript