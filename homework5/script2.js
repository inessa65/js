const exp = /([\w-]+\.)+\w+/g;
const text = "hello dear friends  my-homepage.yandex join us";
console.log(text.match(exp));