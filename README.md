# About
docs.calsamiq.com

# Usage

## Running Hugo
* Run launchHugo.sh (or $ hugo server --watch)
* If page hierarchy has been altered from previous build, remove public/ directory first, then run hugo.
* To build hugo without watch, just run $ hugo

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

### Running Gulp
* All Gulp tasks
  * $ gulp
* Just CSS
  * $ gulp sass
* Just JS
  * $ gulp js
* Just header/footer update (Make sure you pull in balsamiq.com first)
  * $ gulp getincludes

### Running Gulp during development
* If you're working on SASS or JS, run gulp using watch to rebuild css/js files as you make changes to them.
  * $ gulp watch

# TODO
- [x] Generate nav
- [x] Create balsamiq theme
- [x] Figure out what leon wants to do with the IA
- [x] Create Local Nav Top
- [ ] Create Left Nav
- [ ] Create Right / In-Page Nav
- [ ] Create Overview pages based on Leon's IA
- [ ] Make Titles h1 and decrease headings below that
- [x] Set up gulp and document
- [x] Create gulp JS tasks
- [x] Create gulp CSS tasks
- [x] Create gulp tasks to pull header/footer from balsamiq.com repo into partials
