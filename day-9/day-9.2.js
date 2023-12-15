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

    console.log(allResults);
    let tempSum = 0
    for(let x = 0; x < iterator; x++){
        let nextRow = allResults[iterator - 1 - x]
    //     let nextLength = nextRow.length - 1
        let nextIndex = nextRow[0]
        tempSum = nextIndex - tempSum
        // console.log(tempSum);
    }

    let finalIndex = Number(originalArr[0]) - tempSum

    total += finalIndex

}

console.log(total);