function initAppName() {
  const text = document.getElementById("text");
  const name = document.getElementById("book1");
  name.addEventListener("click", function () {
    const wrap = document.getElementById("wrap");
    wrap.style.display = "none";

    text.style.display = "flex";
  });
}
const textName = document.getElementById("info");
const names = document.getElementById("names");
const blockUl = document.getElementById("blockUl");

async function start() {
  const houses = (
    await axios.get(
      "https://www.potterapi.com/v1/houses?key=$2a$10$RfcRSuKmboI/wekKSqopceNyVFmIznakgpk..fqf8ZuIGDHFoeEUu"
    )
  ).data;
  const characters = (
    await axios.get(
      "https://www.potterapi.com/v1/characters?key=$2a$10$RfcRSuKmboI/wekKSqopceNyVFmIznakgpk..fqf8ZuIGDHFoeEUu"
    )
  ).data;

  for (let i = 0; i < houses.length; i++) {
    const currentMembers = houses[i].members;

    const div = document.createElement("div");
    div.insertAdjacentHTML(
      `beforeend`,
      `
    <div class="nameBox active">
    <p>${houses[i].name}</p><br><p>Mascot: ${houses[i].mascot}</p><br><p>Head oh House: ${houses[i].headOfHouse}
    </p>
    </div>`
    );
    textName.appendChild(div);

    // console.log('----------', houses[i].name);
    textName.appendChild(div);

    /*const nameBox=document.querySelectorAll(".nameBox")
    for(let n=0;n<nameBox.length;n++){
    
    
    nameBox[n].addEventListener('click', function(){
        console.log(nameBox[n])
        blockUl.style.display="flex";
    })
  }*/
    for (let j = 0; j < currentMembers.length; j++) {
      const currentId = currentMembers[j];
      for (let k = 0; k < characters.length; k++) {
        if (currentId === characters[k]._id) {
          //console.log(characters[k].name)

          const ul = document.createElement("ul");
          ul.insertAdjacentHTML(
            `beforeend`,
            `
         <li> ${characters[k].name}</li>
    `
          );

          info.appendChild(ul);
        }
      }
    }
  }
}
const btn = document.getElementById("btn");
btn.addEventListener("dblclick", function () {
  console.log(btn);
  const wrap = document.getElementById("wrap");
  wrap.style["display"] = "flex";
  const text = document.getElementById("text");

  text.style["display"] = "none";
  console.log(text);
});

start();
initAppName();
