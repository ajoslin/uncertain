'use strict'

module.exports = Uncertain

function Uncertain () {
  return 'uncertain'
}

Uncertain.is = function (value) {
  return value === 'uncertain'
}

Uncertain.from = function (/* ...values */) {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] != null) { //eslint-disable-line
      return arguments[i] === 'false' ? false : Boolean(arguments[i])
    }
  }
  return Uncertain()
}
