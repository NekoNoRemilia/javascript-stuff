function findElement(arr, func) {
    let num = 0;

    for (let n in arr){
        num = arr[n];
        if (func(num)){
            return num;
        }
    }
    return undefined;
  }
  console.clear();
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));