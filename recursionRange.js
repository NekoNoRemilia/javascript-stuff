function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum){return []}
    if(endNum >= startNum){
        let returnArray = rangeOfNumbers(startNum, endNum-1);
        returnArray.push(endNum);
        return returnArray;
    }
  };

  console.log(rangeOfNumbers(1,7));

  