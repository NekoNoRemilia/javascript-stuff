// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for(let element in myArr){
  total += myArr[element];
}

console.log(total);