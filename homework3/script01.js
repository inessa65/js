let str = prompt('any words');
function findLongestWord(str) {
  return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
};

console.log(findLongestWord(str));

let a = prompt('');
const words = s => s.split("").filter(c => "aeuioEUIOA".includes(c)).length;

console.log(words(a));