# uncertain-bool [![Build Status](https://travis-ci.org/ajoslin/uncertain.svg?branch=master)](https://travis-ci.org/ajoslin/uncertain-bool)

> Flow control for indeterminate booleans as plain JS objects

Use case: Your API returns booleans, but sometimes a value is unknown. You want to have a clea structure for determining unknown values, as plain JS objects.

## Install

```
$ npm install --save uncertain-bool
```

## Usage

```js
var Uncertain = require('uncertain-bool')

var value = Uncertain() // => 'uncertain'
Uncertain(null) // => 'uncertain'
Uncertain(undefined) // => 'uncertain'

Uncertain.is(value) // => true
Uncertain.is(true) // => false
Uncertain.is(false) // => false
Uncertain.is(undefiend) // => false

Uncertain(null, null, true) // => true
Uncertain('true') // => true
Uncertain('false') // => true
Uncertain(0) // => false
Uncertain(null, undefined, null) // => 'uncertain'
```

## API

### `Uncertain(...values) -> boolean|'uncertain'`

If all of the values are null or undefined, returns 'uncertain'.

Otherwise, returns the truthy or falsy version of those values, with the exception of `'false'` returned as `false`.

### `Uncertain.is(value) -> boolean`

Returns whether the value is 'uncertain'.

## License

MIT © [Andrew Joslin](http://ajoslin.com)
