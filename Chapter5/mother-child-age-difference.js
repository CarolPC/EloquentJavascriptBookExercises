function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

let byName = {};
ancestry.forEach((person) => {
  byName[person.name] = person;
});

const mother = (person) => {
  return byName[person.mother] != null;
}

const differences = ancestry.filter(mother).map((person) => {
  return person.born - byName[person.mother].born;
});

console.log(average(differences));

