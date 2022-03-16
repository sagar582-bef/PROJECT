const json_convert=function(res){
  return res.json();
}
const searchMovie=function(sagar){
  console.log(sagar);
  const parent=document.getElementById("section");
  parent.innerHTML="";
  for(let i=0;i<sagar.Search.length;i++){
      const data=sagar.Search[i];
      const div_el=document.createElement("div");
      const img_el=document.createElement("img");
      const h=document.createElement("h3");
      const p_el=document.createElement("p");
      const btn=document.createElement("button");
      img_el.src=data.Poster;
      h.innerText=data.Title;
      p_el.innerText=data.Year;
      btn.innerText="Read more";
      btn.id=data.imdbID;  // for more details about movie
      div_el.appendChild(img_el);
      div_el.appendChild(h);
      div_el.appendChild(p_el);
      div_el.appendChild(btn);
      div_el.classList.add("show");
     
     
     
      
      parent.appendChild(div_el)

  }
}
const searchFn=function(){
    let ip=document.getElementById("search").value;
    fetch(`http://www.omdbapi.com/?s=${ip}&apikey=eed92429`).then(json_convert).then(searchMovie);
}

document.getElementById("search_btn").addEventListener("click",searchFn);

const enter=function(e){
    if(e.key == "Enter"){
  fetch(`http://www.omdbapi.com/?s=${e.target.value}&apikey=eed92429`).then(json_convert).then(searchMovie);
    }
}
document.getElementById("search").addEventListener('keyup',enter);