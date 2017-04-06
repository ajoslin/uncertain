'use strict'

module.exports = uncertain

function uncertain () {
  return 'uncertain'
}

uncertain.is = function (value) {
  return value === 'uncertain'
}

uncertain.cast = function (value) {
  if (value == null) return uncertain()

  return value === 'false' ? Boolean(false) : Boolean(value)
}
