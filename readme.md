# uncertain [![Build Status](https://travis-ci.org/ajoslin/uncertain.svg?branch=master)](https://travis-ci.org/ajoslin/uncertain)

> Flow control for indeterminate booleans as plain JS objects

Your API returns booleans, but sometimes a value is unknown. You want to have `uncertain` or `null` or `true`, but as plain javascript.

## Install

```
$ npm install --save uncertain
```

## Usage

```js
var Uncertain = require('uncertain')

var value = Uncertain() // => 'uncertain'
Uncertain.is(value) // => true
Uncertain.is(true) // => false
Uncertain.is(false) // => false

Uncertain(null) // => 'uncertain'
Uncertain(undefined) // => 'uncertain'
Uncertain(true) // => true
Uncertain('true') // => true
Uncertain('false') // => true
Uncertain(0) // => false

Uncertain(undefined, undefined) // => 'uncertain'
Uncertain(undefined, 1) // => true
```

## License

MIT © [Andrew Joslin](http://ajoslin.com)
