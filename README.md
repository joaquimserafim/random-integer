# random-integer

generate a random integer

<a href="https://nodei.co/npm/random-integer/"><img src="https://nodei.co/npm/random-integer.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/random-integer)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/random-integer/blob/master/LICENSE)[![NodeJS](https://img.shields.io/badge/node-6.1.x-brightgreen.svg?style=flat-square)](https://github.com/joaquimserafim/random-integer/blob/master/package.json#L45)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


### require
```js
var random = require('random-integer')
```


### usage and examples

##### one number - returns an integer between 0 and 1024 (inclusive both)
```js
random(1024)
```

##### two numbers - returns an integer between 1025 and 9000 (inclusive both)
```js
random(1025, 9000)
```
