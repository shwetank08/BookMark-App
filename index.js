const save = document.querySelector("#save");
const clear = document.querySelector("#clear");
let savedUrl = document.querySelector(".savedUrl");

const arr = [];

function display(){
  console.log(arr.length);
  savedUrl.innerHTML = ""
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      let li = document.createElement('li');
      li.innerText = key;
      let btn = document.createElement('button');
      btn.innerText = "VISIT";
      let del = document.createElement('button');
      del.innerHTML = "DELETE";
      let btngrp = document.createElement('div');

      btngrp.appendChild(btn);
      btngrp.appendChild(del);


      li.appendChild(btngrp);
      


      savedUrl.appendChild(li);
      btn.addEventListener('click',()=>{
        console.log(localStorage.getItem(key));
        window.open(`${localStorage.getItem(key)}`, '_blank');
      })
      del.addEventListener('click',()=>{
        localStorage.removeItem(key);
        arr.splice(arr.findIndex(e => e.key === key) , 1);
        console.log(arr);
        display();
      })
    }
  }
}

save.addEventListener("click", () => {
  const names = document.querySelector("#name");
  const url = document.querySelector("#url");
  
  if (!names.value || !url.value) {
    return alert("Enter input pls!");
  }
  let cur = {
    sitename: names.value,
    siteurl: url.value,
  };
  names.value = "";
  url.value = "";
  arr.push(cur);

  arr.forEach(e => {
    let key = e.sitename;
    let value = e.siteurl;
    localStorage.setItem(key,value);
  });

  display();
});


clear.addEventListener('click',()=>{
  const names = document.querySelector("#name");
  const url = document.querySelector("#url");
  names.value = "";
  url.value = "";
  localStorage.clear();
  arr.splice(0,arr.length);
  display();
})
