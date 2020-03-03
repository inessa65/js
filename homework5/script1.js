const exp = /(\+)[\d]{10,14}/gim;
const text = "hello +14321234566754 , teew +1343245676 ffg";
console.log(text.match(exp));