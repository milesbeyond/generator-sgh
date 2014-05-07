# generator-sgh [![Build Status](https://secure.travis-ci.org/cheeks/generator-sgh.png?branch=master)](https://travis-ci.org/cheeks/generator-sgh)

A [Yeoman](http://yeoman.io) generator for building pages on sunglasshut.com, a very tricky situation.

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
###Watch
While working, let Grunt watch run compass and uglify.
```
grunt
```
###Build
When it's time to make a build to hand off to the client. This strips out parts of index.html, processes scss & js, and moves all relevant files into `/dist`.
```
grunt build
```

## License

MIT
