const deepComparison = (a, b) => {
  if (a === b) return true;

  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;

  let propsA = 0, propsB = 0;

  for (let prop in a)
    propsA += 1;

  for (let prop in b) {
    propsB += 1;
    if (!(prop in a) || !deepComparison(a[prop], b[prop]))
      return false;
  }

  return propsA == propsB;
}

const obj = {here: {is: "an"}, object: 2};
console.log(deepComparison(obj, obj));
console.log(deepComparison(obj, {here: 1, object: 2}));
console.log(deepComparison(obj, {here: {is: "an"}, object: 2}));