
const peoples = [
    {
       name: "Холопова Ефросинья Мефодиевна",
       position: "accountant",
       date: "23.12.2007",
       salary: 1200

   },
    {
       name: "Петрищева Владлена Борисовна",
       position: "accountant",
       date: "23.03.2009",
       salary: 1000
   },
   {
       name: "Козарь Аристарх Елизарович",
       position: "accountant(junior)",
       date: "23.12.2020",
       salary: 900
   },
    {
       name: "Федулова Владислава Анатолиевна",
       position: "accountant(junior)",
       date: "23.08.2020",
       salary: 600
   },
   {
       name: "Редулов Александр Александрович",
       position: "accountant",
       date: "24.08.2019",
       salary: 870
   }

]



const tb = document.getElementById("tbody");


const render = function (peoples) {
   tb.innerHTML = "";
   for (let i = 0; i < peoples.length; i++) {
       let row = document.createElement("tr");

       row.innerHTML += `<td>${peoples[i].name}</td>
    <td>${peoples[i].position}</td>
    <td>${peoples[i].date}</td>
    <td>${peoples[i].salary}</td>
   
    <td><button id="butt">delete</button></td>
    
    `
       tb.appendChild(row);


   };

const elem = document.getElementById("butt");
for (let i = 0; i < butt.length; i++) {
   const btn = butt[i];
   btn.addEventListener('click', function () {
       this.parentNode.parentNode.remove();
       peoples.slice(1, 2);
   }
   )
};

}
const el = document.getElementById("box");

let label = document.createElement('label');
label.innerHTML += `<button id="cl">add</button> <input id="first"> <input id="second"><input id="third"><input id="fourth">`
el.appendChild(label);

const td = document.getElementById("tbody");
const trs = document.querySelectorAll("#tbody tr");
const buton = document.getElementById("sortList");

buton.addEventListener('click', function () {
const sortedPeoples=[...peoples].sort((a, b) => a.salary - b.salary);
render(sortedPeoples);
})
buton.addEventListener('dblclick', function () {
   const sortedPeoples=[...peoples].sort((a, b) => b.salary - a.salary);
   render(sortedPeoples);
});
   

const sec = document.getElementById("second");
const first = document.getElementById("first");
const third=document.getElementById("third");
const fourth=document.getElementById("fourth");
const cl = document.getElementById("cl");


cl.addEventListener("click", function () {
   let h = first.value;
   let g = sec.value;
   let f=third.value;
   let l=fourth.value;

   let v = { name: h, salary: l, position:g, date:f };

   peoples.push(v);
   render(peoples);

})

render(peoples);