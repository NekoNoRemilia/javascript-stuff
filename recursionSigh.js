function sum(arr, n) {
    // Only change code below this line
    if (n <= 0){ return 0;}
    else{
      return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
  }
let _sum = sum([2, 3, 4], 1);
console.log(_sum);