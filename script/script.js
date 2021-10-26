var navbar = document.querySelector(".navbar"); //On crée une variable navbar qui est directement relié a une classe html pareil pour Ham
var ham = document.querySelector(".ham");

function toggleHamburger() {
  //On crée une fonction pour le menu Burger
  navbar.classList.toggle("showNav");
  ham.classList.toggle("showClose");
}

ham.addEventListener("click", toggleHamburger); // On crée une fonction lors d'un click
