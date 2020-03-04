let a = prompt("");
const words = s => s.split("").filter(c => "aeuioEUIOA".includes(c)).length;

console.log(words(a));
