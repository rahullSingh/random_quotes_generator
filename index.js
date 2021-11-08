const thought=document.querySelector(".thought");
const author=document.querySelector(".author");

document.querySelector("button").addEventListener("click",newThoughtGenerator)
document.querySelector("button").style.backgroundColor="#92D8C0"

newThoughtGenerator();

async function newThoughtGenerator(){
  const response= await fetch("https://type.fit/api/quotes");
  const data= await response.json();
  const quote=data[Math.floor(Math.random()*data.length)]

  thought.innerText=quote.text;
  author.innerText=quote.author;

  thought.style.color="#000000";
  // author.style.color="#8E8E8E";
  author.style.color="#000000";

}
