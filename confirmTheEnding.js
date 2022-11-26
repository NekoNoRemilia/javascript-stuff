function confirmEnding(str, target) {
    let confirm = new RegExp(target + "$", "i");
    return confirm.test(str);
}
console.clear();
console.log(confirmEnding('gabriele', 'iel'));
console.log(confirmEnding("Bastian", "n"));