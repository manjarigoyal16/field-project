const cards = document.querySelectorAll(".project-card");
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {

card.addEventListener("click", ()=>{

const title = card.querySelector("h3").innerText;

modalTitle.innerText = title;

modalDesc.innerText = "Detailed information about " + title + " project.";

modal.style.display="block";

});

});

closeBtn.onclick = function(){

modal.style.display="none";

}

window.onclick = function(e){

if(e.target == modal){

modal.style.display="none";

}

}