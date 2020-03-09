let country = [
  Belarus = {
    name: "Belarus ",
    area: 400,
    population: "10 millions",
    language: "bel",
    code: +375,
    img:
      " https://www.mirprognozov.ru/assets/components/phpthumbof/cache/1456309855-1525-350x350.9e66649cca87f4eb37560e89d49f199e.png"
  },
  Brazil = {
    name: "Brazil",
    area: 900,
    population: "22 millions",
    language: "brz",
    code: +543,
    img:
      "https://img1.pngindir.com/20180302/aae/kisspng-flag-of-brazil-flag-of-colombia-flag-of-paraguay-flag-of-brazil-5a998c23b0bb20.0695533015200123237239.jpg"
  },
  Russia = {
    name: "Russia",
    area: 900,
    population: "60 millions",
    language: "rus",
    code: +894,
    img:
      "http://vincolor.ru/components/com_jshopping/files/img_products/thumb_P01565.jpg"
  }
];

const table = document.getElementById("tbody");
for (let i = 0; i < country.length; i++) {
  let row = document.createElement("tr");
  row.innerHTML += `    
<td>${country[i].name}</td><td>${country[i].area}</td><td>${country[i].population}</td>
<td>${country[i].language}</td> <td>${country[i].code}</td><td><img src="${country[i].img}"</td>`;
  table.appendChild(row);
}
