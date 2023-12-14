const helpers = require('../helpers')
let lines = helpers.data('./input')
const movements = data[0].split('')
let currentNodes = []
let startNodes = []

let nextMap = {}

for (let lineIndex = 2; lineIndex < lines.length; lineIndex++){
    let [current, nextNodes] = lines[lineIndex].split(' = ')
    let [nextLeft, nextRight] = nextNodes.replace('(', '').replace(')', '').split(', ')
    nextMap[current] = { 'L': nextLeft, 'R': nextRight }
}   

for(let node of Object.keys(nextMap)){
    if(node[2] == 'A') {
        currentNodes.push([node])
        startNodes.push([node])
    }
}

for (let currNodeI = 0; currNodeI < currentNodes.length; currNodeI++){
    let i = 0;
    while (true) {
        if(currentNodes[currNodeI][currentNodes[currNodeI].length - 1][2] == 'Z'){
            break
        }

        currentNodes[currNodeI].push(nextMap[currentNodes[currNodeI][currentNodes[currNodeI].length -1]][movements[i % movements.length]])
        i++
    }
}

console.log(currentNodes.map(el => el.length - 1));

// take the output to a spreadsheet like google sheets and run the LCM function to get
// 9606140307013



















// // loop through elements
// for(let i = 0; i < currentKeysArr.length; i++) {

//     let currentKey = currentKeysArr[i]

//     // loop through directions
//     for(let j = 0; j < directions.length; j++){

//         // if you reach the end of directions, start from beginning
//         if(j === directions.length - 1) {
//             j = -1
//         }

//         // for each index in currentKeysArr, loop through directions and increment steps until
//         let newKey = map.get(currentKey)[directions[j] === 'L' ? 0 : 1]
//         steps++
//         if(newKey[2] === 'Z') {
//             console.log('key found at index ' + i + ' ' + newKey + ' at ' + steps + ' steps');
//             break
//         } else {
//             currentKey = newKey
//         }
        
//     }
// }

// console.log(steps);

// 95392 was too low