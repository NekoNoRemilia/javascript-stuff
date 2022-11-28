Array.prototype.myMap = function(callback) {
    const newArr = [];
    this.forEach(a => newArr.push(callback(a)));
    return newArr;
}
