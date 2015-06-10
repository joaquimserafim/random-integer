'use strict'

var Lab   = require('lab')
var Code  = require('code')

var lab = module.exports.lab = Lab.script()

var describe  = lab.describe
var it        = lab.it
var expect    = Code.expect

var random = require('./')

describe('random-integer', function() {
  it('run a test 1000 times providing `from` and `to` value', function(done) {
    for (var i = 0; i < 1000; i++) {
      expect(random(1024, 1025)).to.be.within(1024, 1025)
    }
    done()
  })

  it('run a test 1000 times providing only the `to` value', function(done) {
    for (var i = 0; i < 1000; i++) {
      expect(random(10)).to.be.within(0, 10)
    }
    done()
  })
})
