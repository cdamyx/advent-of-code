const helpers = require('../helpers')
var fs = require('fs')

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
            grid[row][element] = '&'
            prevElement--
            element--
        } else if (currentElement === 'L') {
            grid[row][element] = '&'
            prevElement--
            row--
        } else if (currentElement === 'F') {
            grid[row][element] = '&'
            prevElement--
            row++
        }
    } else if (prevMove === 'right') {
        if (currentElement === '-'){
            grid[row][element] = '&'
            prevElement++
            element++
        } else if (currentElement === 'J') {
            grid[row][element] = '&'
            prevElement++
            row--
        } else if (currentElement === '7') {
            grid[row][element] = '&'
            prevElement++
            row++
        }
    } else if (prevMove === 'up') {
        if (currentElement === '|'){
            grid[row][element] = '&'
            prevRow--
            row--
        } else if (currentElement === '7') {
            grid[row][element] = '&'
            prevRow--
            element--
        } else if (currentElement === 'F') {
            grid[row][element] = '&'
            prevRow--
            element++
        }
    } else if (prevMove === 'down') {
        if (currentElement === '|'){
            grid[row][element] = '&'
            prevRow++
            row++
        } else if (currentElement === 'J') {
            grid[row][element] = '&'
            prevRow++
            element--
        } else if (currentElement === 'L') {
            grid[row][element] = '&'
            prevRow++
            element++
        }
    }
    counter++
    // console.log(prevMove);
    // console.log(counter);
    // console.log(grid[row][element])
}

// console.log(counter);
// divide final answer by 2
// console.log(grid)

for(let i = 0; i < grid.length; i++){
    currentRow = grid[i].join('') + '\n'
    fs.appendFile('log.txt', currentRow, function (err) {
        if (err) {
            // append failed
          } else {
            // done
          }
        })
}


// first delete the log.txt file here, then run this file and it will output a new log file for visualizing

// so you actually don't want to replace the fictoinal pipes with any symbols here because you still 
// need to know what they are. For each character that isn't a fictional pipe (how do I know?) you'll 
// need to count all the fictional pipes to the end of the line. If the count is even, then the point
// is outside of the pipes, and if it's odd, it's inside (so you'll add it to a total). The caveat is 
// when there's "L---7" or "F---J", these are corners and need to be accounted for differently