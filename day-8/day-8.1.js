const helpers = require('../helpers')
let data = helpers.data('./input')
const map = new Map()
const directions = data[0]
let currentKey = 'AAA'
let steps = 0

for(let i = 2; i < data.length; i++){
    const currentRow = data[i]
    const key = currentRow.slice(0, 3)
    const left = currentRow.slice(7, 10)
    const right = currentRow.slice(12, 15)
    map.set(key, [left, right])
}

for(let i = 0; i < directions.length; i++){
    if(i === directions.length - 1) {
        i = -1
    }
    currentKey = map.get(currentKey)[directions[i] === 'L' ? 0 : 1]
    steps++
    if(currentKey === 'ZZZ') break
}
console.log(steps);