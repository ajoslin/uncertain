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

  t.equal(u.from(true), true)
  t.equal(u.from('true'), true)
  t.equal(u.from(1), true)
  t.equal(u.from({}), true)
  t.equal(u.from(0), false)
  t.equal(u.from(''), false)
  t.equal(u.from('false'), false)
  t.equal(u.from(false), false)

  t.equal(u.from(null), u())
  t.equal(u.from(undefined), u())

  t.equal(u.from(null, true), true)
  t.equal(u.from(null, 'false'), false)
  t.equal(u.from(null, undefined), 'uncertain')
})
