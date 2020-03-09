let arr = [
    chair = {
        name: "chair",
        price: 45,
        numbers: 1,
        description: "small ",
        img: "https://sun9-47.userapi.com/c856520/v856520906/b7550/IhF-5Gli7pY.jpg"
    },
    bed = {
        img:
            "https://st.hzcdn.com/fimgs/6ec1c17100563bae_7579-w312-h312-b0-p0--sovremennyy-.jpg",
        name: "bed",
        price: 65,
        numbers: 98,
        description: "small "
    },
    sofa = {
        name: "sofa",
        price: 75,
        numbers: 8,
        description: "huge ",
        img:
            "https://luxedition.ru/upload/images-info/908/908e447acf1a90c484f022fe65933654.jpg"
    }
];

const ul = document.getElementById("ul");
for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `<img  src= "${arr[i].img}"><br>
${arr[i].name}<br>
Numbers:${arr[i].numbers}<br>
Descriptions:${arr[i].description}<br>
Price:${arr[i].price}<br>`;
    ul.appendChild(li);
}
