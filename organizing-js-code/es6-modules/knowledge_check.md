- Explain what npm is and where it was commonly used before being adopted on the frontend
  - npm was commonly used in the backend before being adopted on the frontend
  - npm is a package manager that downloads and upgrades libraries

- Describe what `npm init` does and what `package.json` is
  - `npm init` creates `package.json`
  - able to install third party packages part of npm
  - when node or npm sees a `package.json` file in the folder, it knows that the project is an npm project
  - `package.json` shows all third party libraries, dependencies, and versions
  - no longer have to download modules directly onto computer--can use npm to do it directly

- Know how to install packages using npm
  - use `npm init`
  - then `npm install <>`

- Describe what a JavaScript module bundler like webpack is
  - webpack is an npm package
  - don't have to define libraries inside the html--can use `require("pacakage_name")` inside the javascript directly
    - can now use `import library from 'library` instead of `require`
  - a tool that build step before JS hits the browser, it analyzes folders and files on computer to generate a file that is compatible with the browser
    - looks for `require` in JS files
  - no longer defining third party libraries in HTML, just install with npm, require it in JS file, build out with webpack

- Explain what the concepts "entry" and "output" mean as relates to webpack
  - building out a bundle
  - take in the input JS files like `index,js`, finds all `require` keywords in that file, then create an output JS and paste all the code to make that `require` happen
    - in the HTML file, point the script to the output file name
  - create a `webpack.config.js` that can automate the entry and output method
    - add `devtool: "source-map"` to help debug code

- Briefly explain what a development dependency is
  - used in development environment, but not production environment

- Explain what "transpiling code" means and how it relates to frontend development
  - converting code in one language to code in another language

- Describe how to write an npm automation script
  - in `package.json` in `"scripts"`, write scripts then in the cli type in `npm run <script>`

- Explain one of the main benefits of writing code in modules
  - code reuse--if you write functions that manipulate the DOM, putting those in their own file as a 'module' means you can copy that file and reuse it easily
  - ES6 modules are not the same as module pattern--and with the intro to ES6 modules, module patterns (IIFEs) aren't needed anymore
  - keep diff parts of code separated, making writing and maintaining code easier and less error-prone

- Explain "named exports" and "default exports"
  - if exporting multiple functions, use named exports with the pattern 
  ```js
  export {
    functionOne,
    functionTwo
  };
  ```
  - then import with
  ```js
  import {functionOne, functionTwo} from './myModule';
  ```
  - default exports allow you to change the imported name
  - if we export as 
  ```js
  // file test.js
  export default k;
  ```
  - we can import as 
  ```js
  // freedom to use import m instead of import k because k was default export
  import m from './test';
  ```