function getNumber() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  return r + ", " + g + " ," + b;
}
console.log(getNumber());
