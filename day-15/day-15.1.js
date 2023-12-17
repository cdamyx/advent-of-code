const helpers = require('../helpers')
let data = helpers.data('./input')
let currentValue = 0
let total = 0
let steps = data[0].split(',')

let hashAlgo = (step) => {
    for(let i = 0; i < step.length; i++){
        let currentCharCode = step.charCodeAt(i)
        currentValue += currentCharCode
        currentValue *= 17
        currentValue %= 256
    }
}

for(let j = 0; j < steps.length; j++){
    hashAlgo(steps[j])
    total += currentValue
    currentValue = 0
}

console.log(total);