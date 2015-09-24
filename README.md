# About
docs.balsamiq.com

# Content
* Add new files to the content/(section name) directory with a .md extensions. Markdown is accepted, and HUGO's [front matter](http://gohugo.io/content/front-matter/) is expected for the navigation to work properly.
* It's recommended that you create new docs using the command line to add the file to the content directory with architectype templates. This inserts and formats the front matter into the article properly, including parent and creation date.
  * $ hugo new mybalsamiq/mypage.md
* To change the order of how articles appear on the Product overviews add a weight to the front matter.

# HUGO Usage

## Running Hugo
* Run launchHugo.sh (or $ hugo server --watch)
* If page hierarchy has been altered from previous build, remove public/ directory first, then run hugo.
* To build hugo without watch, just run $ hugo
* To use with LiveReload, <a href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei">install the extension for Chrome</a>.

## Running Gulp to rebuild CSS/JS Assets

### Installing Gulp
* Make sure you have gulp installed (https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md). If you don't run this:
  * $ sudo npm install -g gulp
* Or Install gulp in your project devDependencies:
  * $ npm install --save-dev gulp
* Install dev dependencies by running this from terminal in docs.balsamiq.com directory:
  * $ npm install

### Updating Gulp
* To update globally: $ npm update gulp -g
* To update a local instance: cd /your/folder/ then: $ npm update gulp

### Running Gulp Tasks Once
* All Gulp tasks
  * $ gulp
* Just CSS
  * $ gulp sass
* Just JS
  * $ gulp js

### Running Gulp during development (LiveReload)
* If you're working on SASS or JS, run gulp using "watch" to rebuild css/js files as you make changes to them.
  * $ gulp watch dev
* If you think the balsamiq.com \_config.scss file has changed, you can copy a new version here before running the sass task.
  * $gulp getsassconfig  
