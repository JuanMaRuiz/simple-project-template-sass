Simple Project Template
=======================

### Version
0.1.0

> Grunt task watch has been updated. Now it's not necessary grunt-contrib-livereload package. 

This is project is a simple template for begin shortly a project with:

* [LESS](http://lesscss.org/)
* [LiveReload](https://www.npmjs.org/package/livereload) preconfigured.
* [Jshint](http://jshint.com/docs/) preconfigured as default task.

## Instalation

* Download repository.
* Install dependencies:

	```sh
	$ sudo npm install
	```
	> Maybe you'll need to run npm install grunt-contrib-watch to get the last version of grunt-contrib-watch package. [More info](https://github.com/gruntjs/grunt-contrib-watch)

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

Project structure:

```
.
├── less
├── public
│   ├── css
│   ├── js
│   └── index.html
├── .gitignore
├── .jshintrc
├── Gruntfile.js
├── package.json
├── README.md

```


License
-------

[MIT](http://opensource.org/licenses/MIT)