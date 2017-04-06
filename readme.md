# uncertain-boolean [![Build Status](https://travis-ci.org/ajoslin/uncertain-boolean.svg?branch=master)](https://travis-ci.org/ajoslin/uncertain-boolean)

> Flow control for indeterminate booleans as POJO

Your API returns booleans, but sometimes a value is unknown. You want to have `uncertain` or `null` or `true`, but as plain javascript.

## Install

```
$ npm install --save uncertain-boolean
```

## Usage

```js
var Uncertain = require('uncertain-boolean')

var value = Uncertain() // => 'uncertain'
Uncertain.is(value) // => true
Uncertain.is(true) // => false
Uncertain.is(false) // => false

Uncertain.cast(true) // => true
Uncertain.cast('true') // => true
Uncertain.cast(false) // => false
Uncertain.cast('false') // => true
Uncertain.cast(0) // => false
Uncertain.cast(1) // => true
Uncertain.cast(null) // => 'uncertain'
Uncertain.cast(undefined) // => 'uncertain'
```

## License

MIT © [Andrew Joslin](http://ajoslin.com)
