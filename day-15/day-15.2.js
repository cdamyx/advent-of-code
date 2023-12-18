const helpers = require('../helpers')
let data = helpers.data('./input')
let currentValue = 0
let map = {}
let total = 0
let steps = data[0].split(',')

let hashAlgo = (step) => {
    for(let i = 0; i < step.length; i++){
        let currentCharCode = step.charCodeAt(i)
        currentValue += currentCharCode
        currentValue *= 17
        currentValue %= 256
    }
}

// for(let z = 0; z < 256; z++){
//     map[z] = [' ']
// }

for(let i = 0; i < steps.length; i++){
    let currentStep = steps[i]
    let currentLabel = ''
    let currentFocalLength = 0
    if(currentStep.endsWith('-')){
        currentLabel = currentStep.slice(0, currentStep.indexOf('-'))
        hashAlgo(currentLabel)
        // if(map[currentValue].contains()
        if(map[currentValue]){
            for(let j = 0; j < map[currentValue].length; j++){
                if(map[currentValue][j].split(' ')[0] === currentLabel){
                    map[currentValue].splice(j, 1)
                    // console.log('delete');
                }
            }
        }
    } 
    else {
        // split on = and get label and number
        currentLabel = currentStep.split('=')[0]
        currentFocalLength = Number(currentStep.split('=')[1])
        hashAlgo(currentLabel)
        // if box is initialized
        if(map[currentValue]){
            // loop through each value in current box array
            for(let j = 0; j < map[currentValue].length; j++){
                // if the index label matches the current label
                if(map[currentValue][j].split(' ')[0] === currentLabel){
                    // replace the mapped lens with the new one, no matter focal value
                    map[currentValue][j] = currentLabel + ' ' + currentFocalLength.toString()
                    break
                } else {
                    if(j === map[currentValue].length - 1){
                        map[currentValue].push(currentLabel + ' ' + currentFocalLength.toString())
                    }
                }
                // console.log('add');
            }
        } else {
            map[currentValue] = [currentLabel + ' ' + currentFocalLength.toString()]
        }
    }
    
    // I think we need to reset currentValue here?
    currentValue = 0
    // console.log(map);
    
}
console.log(Object.values(map).length);
for(let b = 0; b < 10000; b++){
    if(map[b] === undefined || map[b].length === 0) {
        continue
    } else {
        // console.log(map[b]);
        let box = b + 1
        
            // console.log('run box ' + b);
            for(let c = 0; c < map[b].length; c++){
                let slot = c + 1
                let focal = Number(map[b][c].split(' ')[1])
                let product = box * slot * focal
                total += product
            }
        
    }
}
// console.log(map);
console.log(total);