'use strict'

module.exports = uncertain

function uncertain () {
  return 'uncertain'
}

uncertain.is = function (value) {
  return value === 'uncertain'
}

uncertain.cast = function (/* ...values */) {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] != null) { //eslint-disable-line
      return arguments[i] === 'false' ? false : Boolean(arguments[i])
    }
  }
  return uncertain()
}
