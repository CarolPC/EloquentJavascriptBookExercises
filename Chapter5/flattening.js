const arrays = [[1, 2, 3], [4, 5], [6]];

const flat = arrays.reduce((aggr, array) => {
  return aggr.concat(array);
}, []);

console.log(flat);
