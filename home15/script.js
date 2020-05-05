const mas = JSON.parse(localStorage.getItem("key") || "[]");

//JSON.parse(localStorage.getItem('key' )||"[]");
function render(list) {
    const box = document.getElementById("box");
    list.forEach((item) => {
        const ul = document.createElement("ul");
        ul.insertAdjacentHTML(
            `beforeend`,
            `
      <div id="wrap">
    <li><img src="${item.foto}"><li>
    <li><span>Product name:</span>${item.name}<li>
    <li><span>In storage:</span>${item.number}<li>
    <li><span>About product:</span>${item.description}<li>
    
    <button class="add-cart"> buy</button>
    </div>
    
    `
        );

        box.appendChild(ul);
    });
    const paragraphs = document.getElementsByClassName("cart");
    Array.from(paragraphs).forEach((p, item) => {
        p.setAttribute(`title`, `push `);
    });
    //   console.log(paragraphs);

    let carts = document.getElementsByClassName("add-cart");

    //   console.log(carts);
    for (let i = 0; i < carts.length; i++) {
        let btn = carts[i];
        btn.addEventListener("click", () => {
            //   console.log(btn);
            mas.push(list[i]);
            console.log(list[i]);
            cartNumbers();
        });
    }

    function cartNumbers() {
        let count = mas.length;
        document.querySelector(".cart span").textContent = count;
        localStorage.setItem("key", JSON.stringify(mas));
    }

    cartNumbers();
}

function load() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "list.json", true);
    xhr.send(null);
    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);
        //console.log(data);
        render(data);
    };
}
const goods = document.getElementById("goods");
const span = document.getElementById("span");
span.addEventListener("click", function () {
    mas.forEach((item) => {
        const p = document.createElement("p");
        p.insertAdjacentHTML(
            `beforeend`,
            `
          <p>${item.name}</p>`
        );
        goods.appendChild(p);
    });
});

load();
