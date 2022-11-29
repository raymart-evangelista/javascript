- What is Client-side routing?
  - internal handling of routes inside JS file that is rendered to front-end (client)
  - helps in building SPAs without refreshing as user navigates

- How do you add page routing to a React project?
  - run `npm i react-router-dom`
  - create a route switching file, `RouteSwitch.js`
  - `import { BrowserRouter, Routes, Route } from "react-router-dom"`
  - add `BrowserRouter`, `Route`, and `Routes` JSX elements

- What are the three code components of React Router?
  - Route: has a path equivalent to url `path` and a corresponding component `element` that renders when navigating to that `path`
  - BrowserRouter: uses history API to keep UI in sync with URL
  - Routes: renders first child Route that matches the location--the first Route whose path matches the url exactly is rendered

- How do you ensure that Router links are routed accurately?
  - Render the `RouteSwitch.js` file first instead of `App.js`