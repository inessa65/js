const btn=document.getElementById("btn");
btn.addEventListener('click', function(){
    const field=document.getElementById("input")
    const field1=document.getElementById("input1")
     const location =field.value;
     const description=field1.value
     console.log(description, location)
        load(location,description)
    }
)

function load(location,description) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://jobs.github.com/positions.json?description=${description}&location=${location}`, true);
    xhr.send(null);
    xhr.onload = () => {
      //console.log(xhr.responseText)
      const data = JSON.parse(xhr.responseText);
      console.log(data)
      render(data);
    };
  }

  function render(data){
      const box=document.getElementById("box")
      for(let i=0; i<data.length;i++){
          let img='';
          let p='';
          if(data[i].company_logo !== null){
            img= `<p><img src="${data[i].company_logo}"> </p>`;
          }
          if(data[i].company_url !==null){
            p=`<p><span>Web page</span><br><a href="${data[i].company_url}">${data[i].company}</a></p>`
          }
          box.insertAdjacentHTML(`beforeend`, `
          <div id="div">
      <p><span>Position</span><br>${data[i].title} </p>
 ${img}
     
${p}
<p><span>created </span><br>${data[i].created_at} </p>
<p><span>location </span><br>${data[i].location} </p>
<p><span>type</span><br>${data[i].type} </p>

     </div> `) 

      }
     

  }