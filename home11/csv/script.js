const loaded = function (text) {
  const lines = text.split("\n");
  const names = lines.shift().trim().split(", ");

  const items = lines.map((line) => {
    const splitted = line.split(", ");
    const object = splitted.reduce(
      (result, value, index) => ({
        ...result,
        [names[index]]: value,
      }),
      {}
    );
    console.log(object);
    return object;
  });
  //console.log(items);

  const table = document.getElementById("table");

  items.forEach((item) => {
    table.insertAdjacentHTML(
      "beforeend",
      `
                   <tr>
                       <td>${item.names}</td>
                       <td>${item.age}</td>
                      <td>${item.position}</td>
                      <td>${item.salary}</td>
                   <td>${item.chief}</td>
                  </tr>
             `
    );
  });

  const sort = document.getElementById("sort");

  sort.addEventListener("click", function () {
    sortedItems = [...items].sort((a, b) => b.salary - a.salary);
    console.log(sortedItems);
  });
};

const xhr = new XMLHttpRequest();
xhr.open("GET", "common.csv", true);
xhr.onload = function () {
  loaded(xhr.responseText);
};
xhr.send(null);
