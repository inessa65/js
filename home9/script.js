const input = document.getElementById("input");
input.addEventListener('contextmenu', function () {
    input.innerHTML = "";
    input.insertAdjacentHTML(`beforeend`,
        `<div id="div">
    <a  href="http://code.mu/ru/javascript/book/prime/">hi</a>
    <a  href="http://code.mu/ru/javascript/book/prime/">hello</a></div>`);

    const link = document.querySelector(' a');
    //for(let i=0;i<div.length;i++){
    //let link=div.a[i];

    link.addEventListener('click', function (e) {
        console.log(link);
        if (confirm("leave the page")) {

        } else {
            e.preventDefault();
        }



    })
})

document.addEventListener('click', function () {
    div.remove();
})




const link = document.querySelector('a');
link.addEventListener('click', function (e) {
    let target = e.target;
    if (target.tagName != 'A') {
        return false
    }
    let targetA = confirm('Хотите покинуть страницу?');

    return targetA ? true : e.preventDefault()
});
