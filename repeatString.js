function repeatStringNumTimes(str, num) {
    let rString = "";
    if(num < 0){
      return "";
    }
    while(num > 0){
      rString+=str;
      num--;
    }
    return rString;
  }
  console.clear();
  console.log(repeatStringNumTimes("abc", 3));
