- What is an API?
  - servers that are created for serving data for external use

- How is access to an API restricted?
  - must have an API key to make a call
  - tier list of data you can extract

- How do you fetch and extract data from an API?
  - in ancient times, using XMLHttpRequest
    - popular libraries like `axios` and `superagent`
  - in recent times, `fetch` is a native function for making HTTP requests

- Why might your API request be blocked by the browser, and how might you fix this?
  - CORS
  - quick fix is adding `mode: 'cors'` to fetch