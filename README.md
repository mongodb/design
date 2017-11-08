# MongoDB Design System

### What is this?

The MongoDB Design System contains the UI building blocks that make up the user experience across all MongoDB products. These components are available to use in your project. HTML/CSS ([BEM](https://en.bem.info/)) as well as React versions are included.


### Documentation

Build locally or visit [mongodb.design](http://mongodb.design/) to view component documentation.

Sketch template files can be found at [github.com/leafygreen/sketchUILibrary](https://github.com/leafygreen/sketchUILibrary).


### To Build Locally

Clone the repo. Create `config.js` in the root directory and add the following:

```
var config = {
  gitkey : '...'
}

export default config;
```

Generate a new Github personal access token and paste it into `...` in the above code snippet. Only the `repo` > `public_repo` scope is required.

Install the node modules and run the dev server:

```
$ npm install
$ npm start
```

Open locally at [http://localhost:3000](http://localhost:3000)

