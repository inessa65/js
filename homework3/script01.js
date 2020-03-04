let str = prompt("any words");
function findLongestWord(str) {
  return str.split(" ").reduce((a, b) => (b.length > a.length ? b : a));
}

console.log(findLongestWord(str));




 