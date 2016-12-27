const range = (start, end) => {
  const array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

const sum = (array) => {
  return array.reduce((aggr, number) => aggr += number, 0);
}

console.log(sum(range(1, 10)));
