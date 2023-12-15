const helpers = require('../helpers')
let data = helpers.data('./input')
let total = 0

for(let i = 0; i < data.length; i++){
    let originalArr = data[i].split(' ')
    let currentArr = data[i].split(' ')
    let allResults = []
    let allZeros = false
    let iterator = 0

    while(!allZeros) {

        let result = []

        for(let j = 0; j < currentArr.length - 1; j++){
            result.push(currentArr[j + 1] - currentArr[j])
        }
        if(result.length === 0) {result.push(0)}
        allResults[iterator] = result
        const sum = result.reduce((acc, curr) => 
             acc + curr
        ) 
        currentArr = []
        currentArr.push(...result)
        sum === 0 ? allZeros = true : allZeros = false
        iterator++
    }

    let tempSum = 0
    for(let x = iterator - 1; x > 0; x--){
        let nextRow = allResults[x - 1]
        let nextLength = nextRow.length - 1
        let nextIndex = nextRow[nextLength]
        tempSum += nextIndex
    }

    let finalIndex = tempSum + Number(originalArr[originalArr.length -1])

    total += finalIndex

}

console.log(total);