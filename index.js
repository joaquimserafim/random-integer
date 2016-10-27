'use strict'

module.exports = randomInteger

function randomInteger (int1, int2 = 0) {
  return Math.floor(
    Math.random() * (Math.abs(int1) - Math.abs(int2) + 1) +
    Math.abs(int2)
  )
}
