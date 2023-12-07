const races = {
    race1: {
        time: 56,
        distance: 334
    },
    race2: {
        time: 71,
        distance: 1135
    },
    race3: {
        time: 79,
        distance: 1350
    },
    race4: {
        time: 99,
        distance: 2430
    },
    race5: {
        time: 56717999,
        distance: 334113513502430
    }
}

const raceCalc = (time, distance) => {
    let waysToWin = 0
    for(let i = 0; i < time; i++){
        const buttonTime = i
        const remainingTime = time - buttonTime
        const raceTotal = buttonTime * remainingTime
        if(raceTotal > distance) {
            waysToWin++
        }
    }

    return waysToWin
}
let total = raceCalc(races.race5.time, races.race5.distance)

console.log(total);