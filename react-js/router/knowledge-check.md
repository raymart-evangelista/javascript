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

- Different types of Routers
  - `BrowserRouter` is what you will be using most if not all the time
  - `HashRouter` adds a # portion to URL
    - 99 percent of the time don't use this
    - used in server settings where URL cannot be changed
  - `HistoryRouter` gives direct access to browser history
    - 99 percent of the time don't use this
  - `MemoryRouter` stores everything related to history in memory
    - useful for running tests on Routing code
  - `StaticRouter` is specific for routing on server
    - render components on server in react
    - if you aren't doing server sided rendering, not useful
  - `NativeRouter` is used for react-native

- React Router Hooks
  - `useParams` returns an object of custom parameters
    - `import { useParams } from "react-router-dom"`
    - `const { someParamName, id } = useParams()`
  - `useRoutes()` can define routes with JS rather than JSX

- Nested Routes
- `<Outlet />` renders current route
  - can pass in context, `useOutletContext()`

- Link Component
  - `replace` property useful when in a login page and when the client clicks back, they don't go back to the login page
  - `reloadDocument` reloads entire page
  - `state` passes data between links

- NavLink Component
  - just like Link Component
  - can style links like styling an active link

- Navigate Component
  - ability to redirect people to another page if page isn't found
  - `useNavigate` hook instead of Navigate Component
    - can redirect to new location after set time

- Search Params

- Navigation State