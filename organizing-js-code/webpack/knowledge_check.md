- How do you load CSS using webpack?
  - `npm install --save-dev style-loader css-loader`
  - in `webpack.config.js` add `style-loader` and `css-loader` to the module configuration
  - then add a `.css` file in the `/src` folder of our project
  - add style
  - then in `index.js` use `import './filename.css';`

- How do you load images using webpack?
  - add module rules to `webpack.config.js`
  - add icons to `/src` folder
  - in `index.js`, `import corgi from './corgi-icon.png';` 
  - add script code to `index.js`
  - use icon in styling in `src/style.css`

- How do you load fonts using webpack?
  - add module rules to `webpack.config.js`
  - in `.css` file, add @font-face

- How do you load data using webpack?
  - `npm install --save-dev csv-loader xml-loader`
  - add module rules to `webpack.config.js`
  - add .xml and .csv files to `/src`
  - import those into `index.js`
  - add script code

- How would you track errors in bundled source code?
  - use source maps which map compiled code back to original source code
  - use `devtool: 'inline-source-map'` in ` webpack.config.js`--however there are a lot of [different options](https://webpack.js.org/configuration/devtool/) when it comes to source maps