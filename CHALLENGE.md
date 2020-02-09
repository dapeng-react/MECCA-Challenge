# CODE CHALLENGE

## Instructions

Detailed instructions on how to use this project can be found in the `README.md` file.

## Quick start (from command line)

| Node.js must be installed (preferably a recent version, i.e. 12.x)

> install dependencies
```
npm install
```

> run development server on localhost
```
npm start
```

> run tests
```
npm test
```

## Requirements

- Update the component in `/src/App.js` to triger the search on click of the `search` button
- Create separate components for the following elements:
  - no results found
  - search results found (each row in search results should have it's own react component)
- Fill in the data module in `/src/data/index.js` to complete the functions
  - use the native `fetch` browser API to retrieve `/iphones.json`
- Call the `getIphones()` function in the data module inside the application to trigger the search results
- Update the stylesheet `/src/App.css` to style the page and search results elements:
  - add an element for the logo `/logo.png`
- Complete the broken unit test `/src/data/index.test.js
  - cover multiple test cases