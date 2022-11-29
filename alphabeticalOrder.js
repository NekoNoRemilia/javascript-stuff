const alphaStuff = (arr)=>{
    return arr.sort((a,b) =>{
        return a === b ? 0 : a < b ? -1 : 1;
    });
}

console.log(alphaStuff(['a','d','z','g','h']));

