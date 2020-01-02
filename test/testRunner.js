const tests = require('./test')

function testRunner () {
    let testLength = testCount()
    let errors = []
    let success = 0
    let count = 0
    for (const test in tests) {
        if (tests.hasOwnProperty(test)) {
            (function () {
                let currentTest = test
                let currentTestValue = tests[test]
                try {
                    currentTestValue(function() {
                        console.log('\x1b[32m%s\x1b[0m', currentTest)
                        count ++
                        success ++
                        if (count == testLength) {
                            report(errors, success, testLength)
                        }
                    })
                } catch (err) {
                    errors.push({
                        'name': currentTest,
                        'error': err
                    })
                    console.log('\x1b[31m%s\x1b[0m', currentTest)
                    count ++
                    if (count == testLength) {
                        report(errors, success, testLength)
                    }
                }
            })()
        }
    }
}


function testCount () {
    let counter = 0
    for (const test in tests) {
        if (tests.hasOwnProperty(test)) {
            counter ++
        }
    }
    return counter
}

function report(err, success, testLength) {
    const dashes = '-'.repeat(10)
    console.log(`\x1b[33m%s\x1b[0m`, `\n ${dashes} TEST REPORT ${dashes} \n`)
    console.log(`TOTAL TESTS: ${testLength}`)
    console.log(`PASS: ${success}`)
    console.log(`FAIL: ${err.length} \n`)

    if (err.length > 0) {
        console.log(`\x1b[33m%s\x1b[0m`, `\n ${dashes} ERROR DETAILS ${dashes} \n`)
        err.forEach(e => {
            console.log('\x1b[31m%s\x1b[0m',e.name)
            console.log(`${e.error} \n`)
        })
        console.log(`\x1b[33m%s\x1b[0m`, `\n ${dashes} END ERROR DETAILS ${dashes} \n`)
    }
    console.log(`\x1b[33m%s\x1b[0m`, `\n ${dashes} END TEST REPORT ${dashes} \n`)
}

module.exports = testRunner()
