console.clear();
function chunkArrayInGroups(arr, size) {
    let temp = [];
    const groupArr = [];
  
    for (let n = 0; n < arr.length; n++) {
      if (n % size !== size - 1) temp.push(arr[n]);
      else {
        temp.push(arr[n]);
        groupArr.push(temp);
        temp = [];
      }
    }
  
    if (temp.length !== 0) groupArr.push(temp);
    return groupArr;
  }

const _test = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(_test);