
const a =
"https://www.metaweather.com/api/location/search/?lattlong=50.068,-5.316";
const b = "https://www.metaweather.com/api/location/2487956/";
const box = document.getElementById("box");

function getXhr(filename) {
return new Promise(function (resolve, reject) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", filename, true);
  xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
    resolve(data);
  };
  xhr.onerror = () => reject();
  xhr.send(null);
});
}

getXhr(a).then((result) => {
console.log(result);
let res = [];

for (let i = 0; i < result.length; i++) {
  res = result[i];
  //res.push(result[i]);
  //console.log(result[i]);
  const div = document.createElement("div");
  div.insertAdjacentHTML(`beforeend`, `<h1 class="item">${res.title} </h1>
  <div class="weather hidden"></div>`);

  box.appendChild(div);
  getXhr(b).then((weather) => {
    console.log(weather.sun_set, weather.sun_rise);

    const weather1 = div.getElementsByClassName("weather")[0];
    weather1.innerText=`${weather.sun_set} \n ${weather.sun_rise}`;
  });
}
const item = document.querySelectorAll(".item");

});



//вторая задача
/*function getXhr() {
  return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', ' https://freegeoip.app/json/', true);
      xhr.onload = () => {
          const data = JSON.parse(xhr.responseText);
          resolve(data)
      }
      xhr.onerror = () => reject();
      xhr.send(null)
  })
}
getXhr().then((result) => {
  console.log(result)
  const box = document.getElementById("box")
  box.innerHTML = `city:${result.city}`;
})

//первая задача
function getCoord() {
  return new Promise(function (resolve, reject) {
      window.navigator.geolocation.getCurrentPosition(function (pos) {
          resolve(pos);
      },function(err){
          reject(err);

      })
  })
}
getCoord().then(function(pos){
  console.log(pos)
}).catch(function(err){
  console.error(err)
})*/