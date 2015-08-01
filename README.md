# About
docs.balsamiq.com

# Content
* Add new files to the content/(section name) directory with a .md extensions. Markdown is accepted, and HUGO's [front matter](http://gohugo.io/content/front-matter/) is expected for the navigation to work properly.
* You can create new docs using the command line to add the file to the content directory with architectype templates. This inserts the proper front matter including parent and creation date.
  * $ hugo new jira/mypage.md

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
* If you're working on SASS or JS, run gulp using watch to rebuild css/js files as you make changes to them.
  * $ gulp watch dev
* For SASS or JS only, just use these:
  * $ gulp watch sass
  * $ gulp watch js
* If you think the balsamiq.com \_config.scss file has changed, you can copy a new version here before running the sass task.
  * $gulp getsassconfig  

# TODO
- [x] Generate nav
- [x] Create balsamiq theme
- [x] Figure out what leon wants to do with the IA
- [x] Create Local Nav Top
- [x] Set up gulp and document
- [x] Create gulp JS tasks
- [x] Create gulp CSS tasks
- [x] Create gulp tasks to pull header/footer from balsamiq.com repo into partials
- [x] Create Left Nav
- [x] Create Right / In-Page Nav
- [x] Get the JS to work in the Search box
- [x] Make Sidebar Heading Styles the same
- [x] Remove all of the # anchors
- [x] Make Titles h1 and decrease headings below that
- [ ] Create Overview pages based on Leon's IA
- [ ] Try to make the TOC a toggle to expand/collapse
- [ ] Get the equal column heights to 100%
