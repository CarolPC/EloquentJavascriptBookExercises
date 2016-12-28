const every = (array, value) => {
    return array.reduce((aggr, element) => {
        if (element !== value)
            aggr = false;
        return aggr;
    }, true);
};

const some = (array, value) => {
    return array.reduce((aggr, element) => {
        if (element === value)
            aggr = true;
        return aggr;
    }, false);
};

console.log(every([1, 1, 1], 1));
console.log(every([1, 2, 1], 1));
console.log(some([1, 1, 1], 2));
console.log(some([1, 1, 1], 1));
