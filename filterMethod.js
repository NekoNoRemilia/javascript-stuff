Array.prototype.myFilter = function(callback) {
    const newArr = [];
    for(let n of this){
        if(callback(n)) newArr.push(n);
    }
    return newArr;
  };
