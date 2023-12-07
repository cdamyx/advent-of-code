const helpers = require('../helpers')
let data = helpers.data('./input')
let total = 0
let firstIndex = 1000, lastIndex = 0
let firstIndexName = '', lastIndexName = ''
let nums = ['one','two','three','four','five','six','seven','eight','nine']
let map = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
}

for(let i = 0; i < data.length; i++) {
  data[i] = data[i].replace(/eightwo/i, 'eighttwo')
  data[i] = data[i].replace(/oneight/i, 'oneeight')
  data[i] = data[i].replace(/twone/i, 'twoone')
  data[i] = data[i].replace(/eighthree/i, 'eightthree')
  data[i] = data[i].replace(/threeight/i, 'threeeight')
  data[i] = data[i].replace(/fiveight/i, 'fiveeight')
  data[i] = data[i].replace(/sevenine/i, 'sevennine')
  data[i] = data[i].replace(/eighthree/i, 'eightthree')
  data[i] = data[i].replace(/nineight/i, 'nineeight')
  
  for(let j = 0; j < nums.length; j++){
      if(data[i].indexOf(nums[j]) != -1 && data[i].indexOf(nums[j]) < firstIndex) {
          firstIndex = data[i].indexOf(nums[j])
          firstIndexName = nums[j]
      }
      if(data[i].lastIndexOf(nums[j]) > lastIndex) {
          lastIndex = data[i].lastIndexOf(nums[j])
          lastIndexName = nums[j]
      }
  }

  if(firstIndexName){
    const regex = new RegExp(`${firstIndexName}`, 'i')
    data[i] = data[i].replace(regex, map[firstIndexName])
  }
  if(lastIndexName){
    const regex = new RegExp(`${lastIndexName.split('').reverse().join('')}`, 'i')
    data[i] = data[i].split('').reverse().join('').replace(regex, map[lastIndexName]).split('').reverse().join('')
  }
  firstIndex = 1000, lastIndex = 0, firstIndexName =  '', lastIndexName = ''

  let left = 0, right = data[i].length - 1, result = ''

  while(!Number(data[i][left])) {
    left++
  }
  while(!Number(data[i][right])) {
    right--
  }
  result = data[i][left].toString().concat(data[i][right].toString())
  console.log(data[i])
  console.log('should be ' + result)
  total += Number(result)
  console.log(total)
}
console.log(total)