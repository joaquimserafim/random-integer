'use strict'

const test = require('tape')

const random = require('./')

test('random-integer', (assert) => {
  assert.deepEqual(
    [1024, 1025].indexOf(random(1024, 1025)) !== -1,
    true,
    'should return a number with the value `1024` or `1025`'
  )

  assert.deepEqual(
    Array.from({length: 11}, (v, i) => i++).indexOf(random(10)) !== -1,
    true,
    'should return a number with the value `0` or `10`'
  )

  assert.deepEqual(
    isNaN(random()),
    true,
    'should return `NaN` when an argument is omitted'
  )

  assert.deepEqual(
    Array.from({length: 11}, (v, i) => i++).indexOf(random(-10)) !== -1,
    true,
    'should make positive a negative number'
  )

  assert.deepEqual(
   random(''),
    0,
    'should return `0` when is an empty string'
  )

  assert.deepEqual(
    [1024, 1025].indexOf(random('1024', '1025')) !== -1,
    true,
    'should convert numbers passed as a string'
  )

  assert.end()
})
