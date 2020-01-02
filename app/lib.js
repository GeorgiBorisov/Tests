const lib = {}

lib.reverseString = (str) => {
    return str.split('').reverse().join('')
}

lib.randomNum = (min, max) => {
    return Math.random() * (max - min + 1) + min
}

lib.toPowerOf = (num, pow) => {
    return Math.pow(num, pow)
}

lib.toUpper = (str) => {
    return str.toUpperCase()
}

module.exports = lib