const size = 8;
const line = '# '.repeat(size);

for (let i = 0; i < size; i++) {
  if (i % 2 === 0) {
    console.log(' ' + line + '\n');
  }
  else {
    console.log(line + '\n');
  }
}

