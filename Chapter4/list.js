const arrayToList = (array) => {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

const listToArray = (list) => {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

const nth = (list, n) => {
  if (!list) {
    return undefined;
  }
  else if (n == 0) {
    return list.value;
  }
  else
    return nth(list.rest, n - 1);
}

const prepend = (value, list) => {
  return {value: value, rest: list};
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(prepend(10, prepend(20, null)));