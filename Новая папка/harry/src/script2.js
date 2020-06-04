function initApp() {
  const spell = document.getElementById("book3");
  spell.addEventListener("click", function () {
    const warap = document.getElementById("wrap");
    warap.style.display = "none";
    const text = document.getElementById("text__book3");
    text.style.display = "block";
    //const name = document.getElementById("book2");
    //name.style.display = "none";
  });
}
async function start() {
  const data = (
    await axios.get(
      "https://www.potterapi.com/v1/spells?key=$2a$10$RfcRSuKmboI/wekKSqopceNyVFmIznakgpk..fqf8ZuIGDHFoeEUu"
    )
  ).data;
  function render(data) {
    const text = document.getElementById("inner-box");
    text.innerHTML = "";
    for (let i in data) {
      const h1 = document.createElement("h1");
      h1.insertAdjacentHTML(
        `beforeend`,
        `
       <h1>${data[i].spell}</h1><br><h2>${data[i].effect}</h2>
       
      <h5>${data[i].type}</h5>
       `
      );

      text.appendChild(h1);
      //console.log(ul);
      const list = data[i].spell;
      let words = list.split("0");

      for (let j = 0; j < words.length; j++) {
        let word = words.shift("");
        // console.log(word)
        // console.log(word);

        if (word[0] === word[0]) {
          const span = document.createElement("span");

          span.insertAdjacentHTML(`beforeend`, `<span>${word[0]}</span>`);
          text.appendChild(span);
        }
      }
    }
  }
  const box = document.getElementById("box");
  const commonBox = {};
  for (let k in data) commonBox[data[k].type] = 1;
  console.log(commonBox);
  const boxList = Object.keys(commonBox);
  //console.log(boxList)

  boxList.forEach((type) => {
    const html = `
        <button id="type" data-type=${type}>${type}</button>`;
    box.insertAdjacentHTML("beforeend", html);
    console.log(`${type}`);
  });
  render(data);

  box.addEventListener("click", function (e) {
    e.preventDefault();
    const typeName = e.target.getAttribute("data-type");
    //console.log(typeName);
    const filter = data.filter((data) => data.type === typeName);
    //console.log(data.type)
    render(filter);
  });
  function filterByQuery(text) {
    const filterData = data.filter((data) => data.spell.includes(text));
    //if(text==='toLowerCase()'){

    render(filterData);
    //}
  }
  function initSearch() {
    const searchButton = document.getElementById("init-search");
    searchButton.addEventListener("click", function () {
      const searchQuery = document.getElementById("search").value;

      filterByQuery(searchQuery);

      //console.log(searchQuery);
    });
  }
  initSearch();
}
const btn3 = document.getElementById("btn3");
btn3.addEventListener("dblclick", function () {
  //console.log(btn)
  const wrap = document.getElementById("wrap");
  wrap.style["display"] = "flex";

  const text = document.getElementById("text__book3");
  text.style["display"] = "none";
  //console.log(text);
});

initApp();
start();




