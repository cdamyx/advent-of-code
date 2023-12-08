const helpers = require('../helpers')
let data = helpers.data('./input')
let total = 0

for(let i = 0; i < data.length; i++){
    let currentRow = data[i]
    let winningIndex = currentRow.indexOf(':') + 2
    let myIndex = currentRow.indexOf('|') + 2
    const winningNums = currentRow.slice((winningIndex), winningIndex + 29).split(' ').filter(n => n)
    // console.log(winningNums)
    const myNums = currentRow.slice((myIndex), myIndex + 74).split(' ').filter(n => n)
    // console.log(myNums);
    let winners = 0
    let winnersFinal = 1

    for(let j = 0; j < myNums.length; j++){
        if(winningNums.indexOf(myNums[j]) > - 1){
            winners++
        }
    }
    console.log('winners ' + winners)
    if(winners === 0){
        winnersFinal = 0
    } else if(winners === 1){
        winnersFinal = 1
    } else {
        for(let k = 0; k < winners - 1; k++){
            winnersFinal *= 2
        }
    }
    total += winnersFinal
    console.log('line total ' + winnersFinal)
    console.log('running total ' + total);
}
console.log(total);