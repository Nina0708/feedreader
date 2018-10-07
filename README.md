# Feed Reader (Tested with Jasmine 2.1)

## Prerequisites

- NodeJS(8 or later) and npm (5 or later)

## Install dependencies

Run the command in a terminal under the project root directory
```bash
npm install
```

This will install grunt and all the grunt plugins required to run tests and build production code

## Run test

The jasmine specs file is under `src/jasmine/spec/feedreader.js`, to run test specs, issue the following command
in a terminal under the project root directory
```bash
npx grunt test
# or
npm test
```
After this, the test server will be listening at `localhost:9001`, open a browser and enter `locahost:9001` in the
address bar, the test results will be at the bottom of document body.

## Build production code

We will strip off all the jasmine dependencies as well as our spec files when building production code.
To do so, issue the following command in a terminal under the project root directory
```bash
npx grunt build
# or
npm run build
```
Aftrer this, a `dist` folder will be created(if not exist) under root directory. Three files `index.html`, `app.js` and `app.css` will be placed under this folder.


## Preview production code

To preview the production code we just built, issue the following command under the project root directory
```bash
npx grunt preview
# or
npm run preview
```
After this, the preview server will be listening at `localhost:9000`, open a browser and enter `locahost:9000` in the address bar, this server will be exactly the same as test server, only without jasmine results.