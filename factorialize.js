function factorialize(num) {
    let fact = num;
    for(let i = 0; i < num ; i++){
        if(i > 0){
            fact *= i;
        } else if(i == 0){
            fact *= 1;
        }
        
        console.log(`inside for loop ${fact} -> factorial nmb || i value is ${i}\n====||====`);
    }
    if(fact === 0){
        return 1;
    }
    return fact;
  }
  console.clear();
  factorialize(5);
  console.log(factorialize(0));