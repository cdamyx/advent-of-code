const helpers = require('../helpers')
let data = helpers.data('./input')
let grid = []
// starting on the element above S
let prevRow = 61
let prevElement = 10
let prevMove = 'up'
let row = 60
let element = 10
let counter = 1

// set the grid
for(let i = 0; i < data.length; i++){
    grid[i] = data[i].split('')
}

while(grid[row][element] !== 'S'){
    currentElement = grid[row][element]
    if(row === prevRow){
        if(element < prevElement){
            prevMove = 'left'
        } else {
            prevMove = 'right'
        }
    } else {
        if(row < prevRow) {
            prevMove = 'up'
        } else {
            prevMove = 'down'
        }
    }
    // console.log(currentElement);
    if(prevMove === 'left'){
        if (currentElement === '-'){
            prevElement--
            element--
        } else if (currentElement === 'L') {
            prevElement--
            row--
        } else if (currentElement === 'F') {
            prevElement--
            row++
        }
    } else if (prevMove === 'right') {
        if (currentElement === '-'){
            prevElement++
            element++
        } else if (currentElement === 'J') {
            prevElement++
            row--
        } else if (currentElement === '7') {
            prevElement++
            row++
        }
    } else if (prevMove === 'up') {
        if (currentElement === '|'){
            prevRow--
            row--
        } else if (currentElement === '7') {
            prevRow--
            element--
        } else if (currentElement === 'F') {
            prevRow--
            element++
        }
    } else if (prevMove === 'down') {
        if (currentElement === '|'){
            prevRow++
            row++
        } else if (currentElement === 'J') {
            prevRow++
            element--
        } else if (currentElement === 'L') {
            prevRow++
            element++
        }
    }
    counter++
    // console.log(prevMove);
    // console.log(counter);
}

console.log(counter);
// divide final answer by 2