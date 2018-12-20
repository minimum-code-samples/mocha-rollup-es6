# Mocha with Rollup and ES6

This is a simplistic project illustrating how to use Mocha and Chai in a project that uses ES6 modules with Rollup.

Last updated: 29 November 2018

## TL;DR

Install Babel:

```bash
npm install --save-dev babel-core
npm install --save-dev babel-register
npm install --save-dev babel-preset-env
```

Modify "package.json" by adding the following:

```json
  "babel": {
    "presets": [
      "env"
    ]
  }
```

## Description

The project contains an entry file ('src/index.js') and a module file ('src/converter.js').

A basic Rollup script is available as 'scripts/rollup.config.js' which bundles the entry file and the module into an IIFE-style script.

The two source files use ES6-style import-export definitions. ES6 modules, however, are not recognized by Mocha.

Thus, trying to run the tests like so will fail:

```bash
node_modules/mocha/bin/mocha tests/test.js
```

The errors that occur are SyntaxErrors which are due to the words `import` and `export` being unrecognized.

To make the tests work, we need Babel to transpile the module definitions.

The packages needed are "babel-core", "babel-register", and "babel-preset-env".

In addition to that the "package.json" file needs a section for Babel as well.

## Reference

[https://github.com/mochajs/mocha/issues/2655](https://github.com/mochajs/mocha/issues/2655)

Tags: #es6 #js #modules #mocha #chai #rollup

