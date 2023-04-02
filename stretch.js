// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

function createBase(baseNumber){
    return function(addNumber){
        return baseNumber + addSix;
    }
}
const addSix = createBase(6);
console.log(addSix(10));