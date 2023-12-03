const fs = require("fs");
let data = fs.readFileSync("./input", { encoding: "utf8" }).trim().split('\n');

let map = {
    'red': 12,
    'green': 13,
    'blue': 14
}

let total = 0

for(let i = 0; i < data.length; i++){
    let rounds = data[i].split(':')[1].trim().split('; ')
    let impossible = false
   
    for(let j = 0; j < rounds.length; j++) {
        let round = rounds[j].split(', ')

        for(let k = 0; k < round.length; k++) {
            let instances = round[k].split(', ')
            
            for(let l = 0; l < instances.length; l++) {
                let color = instances[l].split(' ').pop()
                let number = instances[l].split(' ').shift()

                if(map[color] < Number(number)) {
                    impossible = true
                }
            }
        }
    }
    if(!impossible){
        total += i + 1
    }
}
console.log(total)