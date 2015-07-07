# ReactiveBoilerplate
A [NodeJS](http://nodejs.org/) Boilerplate using
[React](https://react-bootstrap.github.io/) and
[Reactive extensions](https://github.com/Reactive-Extensions/RxJS) to create 
dynamic sites, using [BabelJS](https://babeljs.io/) as polyfill for ES6.

It also comes with [handlesbars](http://handlebarsjs.com) as template engine
and [SASS](http://sass-lang.com) as CSS preprocess, which includes some 
[InuitCSS](https://github.com/inuitcss) modules to reset and normalize elements,
as well force all elements to use the `border-box` box model.

## Commands
There are some predefined commands defined in the package file, which replaces
build tools such as gulp or grunt. They can be run using `npm run [cmd]` where 
`[cmd]` is one of the following commands:

* `build-js`, `build-min-js` or `watch-js` browserify the file `src/js/app.js`
to `dist/js/app.js`, minimize/uglify it, or watch for changes.

* `build-sass`, `build-min-sass` or `watch-sass` compile the file
`src/sass/styles.scss` to `dist/css/styles.css`, minimize it, or watch for 
changes.

Start the app using `npm start`, which will run the server per default on the 
port 1337. You can change that, by either changing the config.js module or
creating a YAML config file called config.yml in the root directory  with the
folling format:

````
port: 1337
````
