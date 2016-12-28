const ancestry = require('./ancestry');
const ancestryArray = JSON.parse(ancestry);

const average = (array) => {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

const getCentury = (deathYear) => {
    return Math.ceil(deathYear/100);
}

const centuries = ancestryArray.map((person) => {
    return getCentury(person.died);
});

const ages = ancestryArray.map((person) => {
    return person.died - person.born;
});


const groupBy = (centuries) => {
    let groups = {};
    let index = 0;
    centuries.forEach((century) => {
        if (century in groups) {
            groups[century].push(ages[index]);
        }
        else {
            groups[century] = [ages[index]];
        }
        index++;
    });
    return groups;
}

const avgCentury = (centuries) => {
    const groups = groupBy(centuries);
    return Object.keys(groups).reduce((aggr, century) => {
        let avg = average(groups[century]);
        aggr.push(avg);
        return aggr;
    }, []);
}

console.log(avgCentury(centuries));
