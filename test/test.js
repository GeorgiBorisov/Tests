const assert = require('assert')
const lib = require('../app/lib')
const tests = {}

tests['string should be reversed'] = (done) => {
    let val = 'testString'
    const revStr = lib.reverseString(val)
    assert.equal(typeof(revStr), 'string')
    assert.equal(revStr, val.split('').reverse().join(''))
    done()
}

tests['check the random number'] = (done) => {
    const min = 2
    const max = 25
    const randNum = lib.randomNum(min, max)
    assert.equal(typeof(randNum), 'number')
    assert.ok(randNum >= min)
    assert.ok(randNum <= max)
    done()
}

tests['to power of n'] = (done) => {
    const num = 5
    const pow = 3
    const toPowOfN = lib.toPowerOf(num, pow)
    assert.equal(typeof(toPowOfN), 'number')
    assert.equal(Math.pow(num, pow), toPowOfN)
    done()
}

tests['uppercased string'] = (done) => {
    const str = 'just some string'
    const uppercased = lib.toUpper(str)
    assert.ok(str.toUpperCase() === uppercased) 
    done()
}

module.exports = tests