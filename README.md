Simple Project Template
=======================

This is project is a simple template for begin shortly a project with [LESS](http://lesscss.org/) and [LiveReload](https://www.npmjs.org/package/livereload) preconfigured.

## Instalation

* Download repository.
* Install dependencies:

	```sh
	$ sudo npm install
	```

* You need install Livereload extension:

	* [Firefox](https://addons.mozilla.org/es/firefox/addon/livereload/)
	* [Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
	* [Safari](http://download.livereload.com/2.0.9/LiveReload-2.0.9.safariextz). 

*Note: You should read [Limitations of Livereload for Safari](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions)*

* Run your project with:
	
	```sh
	$ grunt
	```

* Visit [localhost:9000](http://localhost:9000) to see your project

## What do you get?

Directory structure:

```
.
├── less
├── public
│   ├── css
│   ├── js
│   └── index.html
├── .gitignore
├── Gruntfile.js
├── package.json
├── README.md

```
## To do's

* Add [Bower](http://bower.io/) for manage dependencies.
* Create a [Yeoman generator](http://yeoman.io/generators/).

License
-------

[MIT](http://opensource.org/licenses/MIT)