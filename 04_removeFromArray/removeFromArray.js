const removeFromArray = function(array, ...element) {
    for(const elm of element){
        for(let i = 0; i < array.length; i++){
            if(elm === array[i]){
                array.splice(i, 1);
                break;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
