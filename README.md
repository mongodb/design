# MongoDB Design System

### What is this?

The MongoDB Design System contains the UI building blocks that make up the user experience across all MongoDB products. These components are available to use in your project. HTML/CSS ([BEM](https://en.bem.info/)) as well as React versions are included.


### Documentation

Build locally or visit [mongodb.design](http://mongodb.design/) to view component documentation.

Sketch template files can be found at [github.com/leafygreen/sketchUILibrary](https://github.com/leafygreen/sketchUILibrary).


### To Build Locally

Clone repo and create `config.js` in the root directory. :

```
var config = {
  gitkey : '...'
}

export default config;
```

Generate a new Github personal access token and paste it into `...`. Only the `repo` > `public_repo` scope is required.


### Contribute

Fork the repo, install the node modules and run the dev server:

```
$ npm install
$ npm start
```

Open [http://localhost:3000](http://localhost:3000). Make changes and submit a pull request (screenshots appreciated). 

