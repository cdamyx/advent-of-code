const fs = require("fs");
let data = fs.readFileSync("./input", { encoding: "utf8" }).split('\n');
let total = 0

for(let i = 0; i < data.length - 1; i++) {
  let left = 0, right = data[i].length - 1, result = ''
  while(!Number(data[i][left])) {
    left++
  }
  while(!Number(data[i][right])) {
    right--
  }
  result = data[i][left].toString().concat(data[i][right].toString())
  total += Number(result)
}

console.log(total)