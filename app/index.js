'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var SghGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('Let\'s make a Sunglass Hut app. Ugh.'));

    var prompts = [{
      name: 'someOption',
      message: 'This sucks. I\'m sorry. Any last words?'
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/templates');
    this.mkdir('app/images');
    this.mkdir('app/js');
    this.mkdir('app/css');

    this.copy('favicon.ico', 'app/favicon.ico');
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_index.html', 'app/index.html');
    this.copy('composer.json', 'composer.json');
    this.copy('composer.lock', 'composer.lock');
    this.copy('Gruntfile.js', 'Gruntfile.js');

    this.directory('images', 'app/images');
    this.directory('config', 'config');
    this.directory('css', 'app/css');
    this.directory('js', 'app/js');
},

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('bowerrc', '.bowerrc');
    this.copy('gitignore', '.gitignore');
  }
});

module.exports = SghGenerator;
