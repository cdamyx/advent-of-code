const helpers = require('../helpers')
let data = helpers.data('./input')
let isSymbol = (c) => {return !c.match(/([0-9]|\.)/)}
let currentNumber = ''
let total = 0

const lookLeft = (row, prevIndex) => {
    if(Number(row[prevIndex]) || Number(row[prevIndex]) === 0){
        let counter = prevIndex
        currentNumber = ''
        while(Number(row[counter]) || Number(row[counter]) === 0){
            currentNumber = row[counter] + currentNumber
            counter--
        }
        total += Number(currentNumber)
        console.log(currentNumber + 'left')
        console.log(total + 'total');
    }
}

const lookRight = (row, nextIndex) => {
    if(Number(row[nextIndex]) || Number(row[nextIndex]) === 0){
        let counter = nextIndex
        currentNumber = ''
        while(Number(row[counter]) || Number(row[counter]) === 0){
            currentNumber = currentNumber + row[counter]
            counter++
        }
        total += Number(currentNumber)
        console.log(currentNumber + 'right')
        console.log(total + 'total');
    }
}

const lookMiddle = (row, currIndex) => {
    if(Number(row[currIndex]) || Number(row[currIndex]) === 0){
        currentNumber = ''
        let rightCounter = currIndex + 1
        let counter = currIndex
        currentNumber = ''
        while(Number(row[counter]) || Number(row[counter]) === 0){
            currentNumber = row[counter] + currentNumber
            counter--
        }
        
        while(Number(row[rightCounter]) || Number(row[rightCounter]) === 0){
            currentNumber = currentNumber + row[rightCounter]
            rightCounter++
        }
        total += Number(currentNumber)
        console.log(currentNumber + 'middle');
        console.log(total + 'total');
    }
}

for(let i = 1; i < data.length - 1; i++){
    let lastRow = data[i - 1]
    let currentRow = data[i]
    let nextRow = data[i + 1]
    
    for(let j = 0; j < currentRow.length; j++){
        if(isSymbol(currentRow[j])){
            lookLeft(currentRow, j - 1)
            lookRight(currentRow, j + 1)
            if(Number(lastRow[j]) || Number(lastRow[j]) === 0){
                lookMiddle(lastRow, j)
            } else {
                lookLeft(lastRow, j - 1)
                lookRight(lastRow, j + 1)
            }
            if(Number(nextRow[j]) || Number(nextRow[j]) === 0){
                lookMiddle(nextRow, j)
            } else {
                lookLeft(nextRow, j - 1)
                lookRight(nextRow, j + 1)
            }
        }
    }
}

console.log(total)