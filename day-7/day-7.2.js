const helpers = require('../helpers')
let data = helpers.data('./input')
let arr1 =[], arr2 = [], arr3 = [], arr4 = [], arr5 = [], arr6 = [], arr7 = []
const handMap = new Map([
    ['A', 13],
    ['K', 12],
    ['Q', 11],
    ['T', 10],
    ['9', 9],
    ['8', 8],
    ['7', 7],
    ['6', 6],
    ['5', 5],
    ['4', 4],
    ['3', 3],
    ['2', 2],
    ['J', 1],
  ])

let total = 0

const arrSort = (currentHand, arr, currentGame) => {
    if(!arr.length){
        arr.push(currentGame)
    } else {
        for(let k = 0; k < arr.length; k++) {
            let breaker = 0
            for(let l = 0; l < 5; l++) {
                if(handMap.get(currentHand[l]) < handMap.get(arr[k][l])) {
                    console.log('current hand ' + currentHand + ' loses to ' + arr[k] + ' at index ' + l);
                    arr.splice(k, 0, currentGame)
                    breaker = 1
                    break
                } else if(handMap.get(currentHand[l]) > handMap.get(arr[k][l])){
                    if(k === arr.length - 1) { arr.push(currentGame) }
                    console.log('current hand ' + currentHand + ' wins against ' + arr[k] + ' at index ' + l)
                    break
                }
            }
            if(breaker === 1) { break }
        }
    }
}

for(let i = 0; i < data.length; i++) {
    let currentGame = data[i]
    let currentHand = currentGame.split(' ')[0]
    let handType = 0
    // let hasJoker = false
    let map = new Map()
    
    // put the individual cards for the current hand into a hashmap, and set hasJoker if true
    for(let j = 0; j < currentHand.length; j++){
        if(currentHand[j] === 'J') { hasJoker = true}
        map.get(currentHand[j]) === undefined ? map.set(currentHand[j], 1) : map.set(currentHand[j], map.get(currentHand[j]) + 1)
    }

    // order the map so the cards with the most duplicates are at the start
    let resultMap = new Map([...map].sort((a, b) => b[1] - a[1] ))

    // set hand type (5 of a kind, 4 of a kind, etc.)
    if(resultMap.size === 1) { handType = 7 }
    if(resultMap.size === 2) { 
        if(resultMap.has('J')){
            handType = 7
            console.log('found J', currentHand);
        } else {
            // use destructuring to grab first value
            const [firstValue] = resultMap.values();
            firstValue === 4 ? handType = 6 : handType = 5
        }
    }
    if(resultMap.size === 3) { 
        if(resultMap.has('J')){
            if(resultMap.get('J') === 3) { 
                handType = 6
            } else if(resultMap.get('J') === 2) {
                handType = 6
            } else { 
                // handType = 5
                const [firstValue] = resultMap.values();
            firstValue === 3 ? handType = 6 : handType = 5
            }
        } else {
            // use destructuring to grab first value
            const [firstValue] = resultMap.values();
            firstValue === 3 ? handType = 4 : handType = 3
        }
    }
    if(resultMap.size === 4) { 
        if(resultMap.has('J')){
            handType = 4
        } else {
            handType = 2
        }
    }
    if(resultMap.size === 5) { 
        if(resultMap.has('J')){
            handType = 2
        } else {
            handType = 1
        }
    }
    
    if(handType === 7) { arrSort(currentHand, arr7, currentGame) }
    if(handType === 6) { arrSort(currentHand, arr6, currentGame) }
    if(handType === 5) { arrSort(currentHand, arr5, currentGame) }
    if(handType === 4) { arrSort(currentHand, arr4, currentGame) }
    if(handType === 3) { arrSort(currentHand, arr3, currentGame) }
    if(handType === 2) { arrSort(currentHand, arr2, currentGame) }
    if(handType === 1) { arrSort(currentHand, arr1, currentGame) }
}

const finalArr = arr1.concat(arr2).concat(arr3).concat(arr4).concat(arr5).concat(arr6).concat(arr7)
for(let z = 0; z < finalArr.length; z++){
    let bid = finalArr[z].split(' ')[1]
    total += bid * (z + 1)
}

console.log(total);