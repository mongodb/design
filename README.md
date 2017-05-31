# MongoDB Design Systems

### Getting Started

Fork the repo, install the node modules and run the dev server:

```
$ npm install
$ npm start
```

Open [http://localhost:3000](http://localhost:3000) & have fun. 🐒

### Deploy

Set your `website` in `package.json` and generate all the static files with `npm run build`. Then upload the contents of the `build/` folder to your hosting solution of choice. Finish!

You can also check out the production build on your local machine using `http-server`:

```
$ npm install -g http-server
$ cd build
$ http-server
```

### FAQ

**My site is not working properly on Amazon S3**:<br>
Make sure you define paths *with* trailing slashes, like `<Route path="about/">`.

**My site is not working properly on Github Pages**:<br>
Make sure you define paths *without* trailing slashes, like `<Route path="about">`.
