const reverseArray = (array) => {
  return array.reduce((aggr, element) => {
    aggr.unshift(element);
    return aggr;
  }, []);
}

const reverseArrayInPlace = (array) => {
  return array = reverseArray(array).slice();
}

console.log(reverseArray(['A', 'B', 'C']));
console.log(reverseArrayInPlace(['A', 'B', 'C']));