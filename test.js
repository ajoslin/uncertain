'use strict'

var test = require('tape')
var u = require('./')

test('is', function (t) {
  t.equal(u(), 'uncertain')

  t.ok(u.is(u()))
  t.notOk(u.is(true))
  t.notOk(u.is(false))
  t.notOk(u.is(1))
  t.notOk(u.is(null))
  t.notOk(u.is(undefined))
  t.notOk(u.is('str'))
  t.end()

  t.equal(u.cast(true), true)
  t.equal(u.cast('true'), true)
  t.equal(u.cast(1), true)
  t.equal(u.cast({}), true)
  t.equal(u.cast(0), false)
  t.equal(u.cast(''), false)
  t.equal(u.cast('false'), false)
  t.equal(u.cast(false), false)

  t.equal(u.cast(null), u())
  t.equal(u.cast(undefined), u())

  t.equal(u.cast(null, true), true)
  t.equal(u.cast(null, 'false'), false)
  t.equal(u.cast(null, undefined), 'uncertain')
})
