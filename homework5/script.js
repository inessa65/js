let list = [4, 5, 7, 44, 894, 34, 21, 90];
let newList = list;
let clonedList = [...list];
console.log(clonedList);
list.sort((a, b) => a - b);
console.log(newList);
