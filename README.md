# random-integer

generate a random integer

<a href="https://nodei.co/npm/random-integer/"><img src="https://nodei.co/npm/random-integer.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/random-integer)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/random-integer/blob/master/LICENSE)


## API
```js
var random = require('random-integer')
```


## Usage

##### one number - returns an integer between 0 and 1024 (inclusive)
```js
random(1024)
```

##### two numbers - returns an integer between 1025 and 9000 (inclusive)
```js
random(1025, 9000)
```


### Development

##### this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit


to run test
``` js
npm test
```

to run jshint
``` js
npm run jshint
```

to run code style
``` js
npm run code-style
```

to run check code coverage
``` js
npm run check-coverage
```

to open the code coverage report
``` js
npm run open-coverage
```
