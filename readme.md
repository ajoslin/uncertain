# uncertain [![Build Status](https://travis-ci.org/ajoslin/uncertain.svg?branch=master)](https://travis-ci.org/ajoslin/uncertain)

> Flow control for indeterminate booleans as plain JS objects

Use case: Your API returns booleans, but sometimes a value is unknown. You want to have a clea structure for determining unknown values, as plain JS objects.

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

Uncertain.cast(null) // => 'uncertain'
Uncertain.cast(undefined) // => 'uncertain'
Uncertain.cast(true) // => true
Uncertain.cast('true') // => true
Uncertain.cast('false') // => true
Uncertain.cast(0) // => false

Uncertain.cast(undefined, undefined) // => 'uncertain'
Uncertain.cast(undefined, 1) // => true
```

## License

MIT © [Andrew Joslin](http://ajoslin.com)
