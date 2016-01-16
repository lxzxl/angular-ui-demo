'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    initializing: function () {
        try {
            this.username = process.env.USER || process.env.USERPROFILE.split(require('path').sep)[2];
        } catch (e) {
            this.username = '';
        }
    },
    prompting: function () {
        var done = this.async();
        var self = this;

        this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                validate: function (name) {
                    if (!name) {
                        return 'Project name cannot be empty';
                    }
                    if (!/\w+/.test(name)) {
                        return 'Project name should only consist of 0~9, a~z, A~Z, _, .';
                    }

                    var fs = require('fs');
                    if (!fs.existsSync(self.destinationPath(name))) {
                        return true;
                    }
                    if (fs.statSync(self.destinationPath(name)).isDirectory()) {
                        return 'Project already exist';
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Your project description',
                default: ''
            },
            {
                type: 'input',
                name: 'username',
                message: 'Your name',
                default: this.username
            },
            {
                type: 'input',
                name: 'email',
                message: 'Your email',
                default: ''
            },
            {
                type: 'list',
                name: 'registry',
                message: 'Which registry would you use?',
                choices: [
                    'https://registry.npm.taobao.org',
                    'https://registry.npmjs.org'
                ]
            }
        ], function (answers) {
            require('date-util');
            this.answers = answers;
            this.answers.date = new Date().format('mmm d, yyyy');
            this.obj = {answers: this.answers};
            done();
        }.bind(this));
    },
    configuring: function () {
        var path = require('path');
        var fs = require('fs');
        var self = this;
        var done = this.async();
        fs.exists(this.destinationPath(this.answers.name), function (exists) {
            if (exists && fs.statSync(self.destinationPath(self.answers.name)).isDirectory()) {
                self.log.error('Directory [' + self.answers.name + '] exists');
                process.exit(1);
            }
            self.destinationRoot(path.join(self.destinationRoot(), self.answers.name));
            done();
        });
    },
    writing: function () {
        var self = this;
        var _ = require('lodash');

        self.fs.copyTpl(self.templatePath('etc/config.js'), self.destinationPath('etc/config.js'), self.obj);
        self.directory(self.templatePath('img'), self.destinationPath('img'));
        self.directory(self.templatePath('js'), self.destinationPath('js'), function (body) {
            return _.template(body, {
                interpolate: /<%=([\s\S]+?)%>/g
            })(self.obj);
        });
        self.directory(self.templatePath('less'), self.destinationPath('less'));
        self.directory(self.templatePath('mock'), self.destinationPath('mock'));
        self.directory(self.templatePath('test'), self.destinationPath('test'), function (body) {
            return _.template(body, {
                interpolate: /<%=([\s\S]+?)%>/g
            })(self.obj);
        });
        self.copy(self.templatePath('gitignore'), self.destinationPath('.gitignore'));
        self.copy(self.templatePath('gulpfile.js'), self.destinationPath('gulpfile.js'));
        self.copy(self.templatePath('index.html'), self.destinationPath('index.html'));
        self.fs.copyTpl(self.templatePath('_package.json'), self.destinationPath('package.json'), self.obj);
        self.copy(self.templatePath('karma.conf.js'), self.destinationPath('karma.conf.js'));
        self.copy(self.templatePath('webpack.config.test.js'), self.destinationPath('webpack.config.test.js'));
        self.copy(self.templatePath('webpack.config.dev.js'), self.destinationPath('webpack.config.dev.js'));
        self.copy(self.templatePath('webpack.config.prod.js'), self.destinationPath('webpack.config.prod.js'));
    },
    install: function () {
        this.npmInstall(undefined, {
            registry: this.answers.registry
        });
    },
    end: function () {
        this.log.ok('Project ' + this.answers.name + ' generated!!!');
    }
});