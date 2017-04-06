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

Uncertain.from(null) // => 'uncertain'
Uncertain.from(undefined) // => 'uncertain'
Uncertain.from(true) // => true
Uncertain.from('true') // => true
Uncertain.from('false') // => true
Uncertain.from(0) // => false

Uncertain.from(undefined, undefined) // => 'uncertain'
Uncertain.from(undefined, 1) // => true
```

## License

MIT © [Andrew Joslin](http://ajoslin.com)
