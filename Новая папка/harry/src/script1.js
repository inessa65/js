function initApp() {
  const text = document.getElementById("text__book2");
  const name = document.getElementById("book2");
  name.addEventListener("click", function () {
    text.style.display = "block";
    const wrap = document.getElementById("wrap");

    wrap.style.display = "none";
  });
}

async function start() {
  const data = (
    await axios.get(
      "https://www.potterapi.com/v1/characters?key=$2a$10$RfcRSuKmboI/wekKSqopceNyVFmIznakgpk..fqf8ZuIGDHFoeEUu"
    )
  ).data;

  const btnBox = document.getElementById("btn-box");
  console.log(btnBox);
  btnBox.addEventListener("click", function (e) {
    e.preventDefault();
    const btnName = e.target.getAttribute("data-name");
    console.log(btnName);
    const textList = document.getElementById("innerlist");
    textList.innerText = "";
    if (btnName === "name1") {
      const result = data.filter((stud) => stud.role === "student");

      for (let k in result) {
        const div = document.createElement("div");
        div.insertAdjacentHTML(`beforeend`, `<p>${result[k].name}`);
        textList.appendChild(div);
        console.log(result[k].name);
      }
    } else {
      if (btnName === "name2") {
        const result = data.filter(
          (blood) => blood.bloodStatus === "pure-blood"
        );

        for (let k in result) {
          const div = document.createElement("div");
          div.insertAdjacentHTML(`beforeend`, `<p>${result[k].name}`);
          textList.appendChild(div);
          //console.log(result[k].name);
        }
      } else {
        if (btnName === "name3") {
          const result = data.filter((deathE) => deathE.deathEater === true);

          for (let k in result) {
            const div = document.createElement("div");
            div.insertAdjacentHTML(`beforeend`, `<p>${result[k].name}`);
            textList.appendChild(div);
            console.log(result[k].name);
          }
        } else {
          if (btnName === "name4") {
            const result = data.filter(
              (order) => order.orderOfThePhoenix === true
            );
            for (let k in result) {
              const div = document.createElement("div");
              div.insertAdjacentHTML(`beforeend`, `<p>${result[k].name}`);
              textList.appendChild(div);
              console.log(result[k].name);
            }
          } else {
            if (btnName === "") {
              for (let k in data) {
                const div = document.createElement("div");
                div.insertAdjacentHTML(`beforeend`, `<p>${data[k].name}`);
                textList.appendChild(div);
                console.log(data[k].name);
              }
            }
          }
        }
      }
    }
  });
  /*function renderResult(){
   const result1=data;
    console.log(result1)
    const textList = document.getElementById("innerlist");
    textList.innerText = "";
    for (let k in result1) {
      const div = document.createElement("div");
      div.insertAdjacentHTML(`beforeend`, `<p>${result1[k].name}`);
      textList.appendChild(div);
      console.log(result1[k].name);
    }
  }
  renderResult()*/
}

const btn1 = document.getElementById("btn1");
btn1.addEventListener("dblclick", function () {
  const wrap = document.getElementById("wrap");
  wrap.style["display"] = "flex";
  const text = document.getElementById("text__book2");
  text.style.display = "none";
});
start();
initApp();
