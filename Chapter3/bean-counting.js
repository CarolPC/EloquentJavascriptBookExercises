function countChar(string, countChar) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == countChar) {
      count++;
    }
  }
  return count;
}

function countBs(string) {
  return countChar(string, 'B');
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));