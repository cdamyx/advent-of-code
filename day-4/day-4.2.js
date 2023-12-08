const helpers = require('../helpers')
let data = helpers.data('./input')
let cardsMap = {}

 // set each card in cardsMap to 1, initially
 for(let j = 1; j <= 201; j++){
    cardsMap[j] = 1
}

// function to copy cards
const matchCopier = (nextCard, finalMatchIndex) => {
    for(nextCard; nextCard <= finalMatchIndex; nextCard++){
        cardsMap[nextCard]++
    }
}

// iterate through each card
for(let i = 0; i < data.length; i++){
    let currentRow = data[i]
    let currentCard = i + 1
    let winningIndex = currentRow.indexOf(':') + 2
    let myIndex = currentRow.indexOf('|') + 2
    const winningNums = currentRow.slice((winningIndex), winningIndex + 29).split(' ').filter(n => n)
    const myNums = currentRow.slice((myIndex), myIndex + 74).split(' ').filter(n => n)
    let matches = 0
    
    // find matches per card
    for(let j = 0; j < myNums.length; j++){
        if(winningNums.indexOf(myNums[j]) > - 1){
            matches++
        }
    }

    // for the current card, calculate the number of copies for the next cards
    let counter = cardsMap[currentCard]
    while(counter > 0) {
        matchCopier(currentCard + 1, matches + currentCard)
        counter--
    }
}

// sum all of the values in cardsMap
console.log(Object.values(cardsMap).reduce((a, b) => a + b))