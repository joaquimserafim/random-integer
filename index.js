'use strict'

module.exports = randomInteger

function randomInteger (int1, int2) {
  if (arguments.length === 1) {
    int2 = int1
    int1 = 0
  }

  return Math.floor(Math.random() * (int2 - int1 + 1) + int1)
}
