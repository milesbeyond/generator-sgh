# generator-sgh [![Build Status](https://secure.travis-ci.org/cheeks/generator-sgh.png?branch=master)](https://travis-ci.org/cheeks/generator-sgh)

>A [Yeoman](http://yeoman.io) generator for building pages on sunglasshut.com, which can be a very tricky situation. Includes a Grunt task for compiling a handoff.

## Installing
Let's assume you have [npm](https://npmjs.org) installed. If not, head over to [nodejs.com](nodejs.com) and get set up.

If you haven't installed Yeoman yet...

```
$ npm install -g yo
```

Now, to install this generator...
```
$ npm install -g generator-sgh
```
## Use
To initialize the generator:

```
$ yo sgh
```

You will do all of your work in `/app`

## Tasks
###```grunt```
Watch task. Runs compass, uglify.
###```grunt build```
When it's time to make a build to hand off to the client. This strips out parts of index.html, processes scss & js, and moves all relevant files into `/dist`.


## License

MIT
