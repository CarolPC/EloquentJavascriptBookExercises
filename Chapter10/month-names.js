const month = function () {
    const names = ['January', 'February', 'March', 'April', 'May',
                    'June', 'July', 'August', 'September', 'October',
                    'November', 'December'];
    return {
        name: (number) => { return names[number]; },
        number: (name) => { return names.indexOf(name); }
    };
}();

console.log(month.name(2));
console.log(month.number('June'));
