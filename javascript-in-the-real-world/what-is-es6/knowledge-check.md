# notes
- modern browsers support all of es6 and most of es7, but older browsers don't
  - if writing code that uses these new features, it won't run on browsers that don't support it
  - in the real world, if selling products to customers, you ca't control which browsers people will use to connect to your site
- babel is a tool that takes modern JavaScript code and transpiles it to code that older browsers can understand
  - babel can be used from the CLI with a simple command; and can be added to the webpack config through babel loader