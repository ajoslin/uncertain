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

  t.equal(u(true), true)
  t.equal(u('true'), true)
  t.equal(u(1), true)
  t.equal(u({}), true)
  t.equal(u(0), false)
  t.equal(u(''), false)
  t.equal(u('false'), false)
  t.equal(u(false), false)

  t.equal(u(null), u())
  t.equal(u(undefined), u())

  t.equal(u(null, true), true)
  t.equal(u(null, 'false'), false)
  t.equal(u(null, undefined), 'uncertain')
})
