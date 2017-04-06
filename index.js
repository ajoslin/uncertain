'use strict'

module.exports = Uncertain

function Uncertain (/* ...values */) {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] != null) { //eslint-disable-line
      return arguments[i] === 'false' ? false : Boolean(arguments[i])
    }
  }
  return 'uncertain'
}

Uncertain.is = function (value) {
  return value === 'uncertain'
}
