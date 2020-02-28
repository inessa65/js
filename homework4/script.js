function isNatural(num){
   
    for( let i=2; i<=num/2; i++){
        if(num%i ===0){
            return false;
        }
    } return true;
}
console.log(isNatural(10));


/*function getNumber() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  return r + ", " + g + " ," + b;
}
console.log(getNumber());

const getRandomNumber = a => Math.round(Math.random() * 100);
console.log(getRandomNumber());

const getSum = (a, b) => a + b;
console.log(getSum(4, 5));*/
