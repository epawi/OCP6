// Slider sous forme d'un tableau contenant les objets de chaque slide
// Chaque objet contient une images, son alt et son texte associé
const slider = [
  {
    image: "slide1.jpg",
    alt: "Photo de pages en cours d'impression dans des rouleaux",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    alt: "Photo d'une très grande affiche noire et dorée prenant tout un pan de mur dans un open space",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    alt: "Photo montrant plusieurs nuanciers de couleurs ainsi qu'une tablette et un stylet",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    alt: "10 autocollants autour d'un thème astral sur fond jaune",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Récupération des éléments HTML pour pouvoir les utiliser dans le script
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
// Index de la première slide du tableau pour commencer au début du slider
let currentIndex = 0;

// Création des dots
function createDots() {
  // Chaque objet du tableau slider exécute le code ci-dessous
  slider.forEach((_, index) => {
    // Création d'une div qui contient un dot
    const dot = document.createElement("div");
    dot.classList.add("dot");
    // Si on est sur la première slide, on sélectionne le 1er dot
    if (index === 0) {
      dot.classList.add("dot_selected");
    }
    // On l'ajoute dans le container prévu dans le HTML
    dotsContainer.appendChild(dot);
  });
}

// Mise à jour du slider
function updateSlider() {
  // Image changée en fonction de là où on se situe dans le tableau slider
  bannerImage.src = `./assets/images/slideshow/${slider[currentIndex].image}`;
  bannerImage.alt = slider[currentIndex].alt;
  // Idem pour le texte (innerHTML car Tagline contient des <span>)
  bannerText.innerHTML = slider[currentIndex].tagLine;
  // MaJ des dots
  updateDots();
}

// Fonction qui gère la m ise à jour des dots
function updateDots() {
  // On sélectionne tous les dots et on en parcourt la liste
  document.querySelectorAll(".dot").forEach((dot, index) => {
    // On applique la classe CSS adéquate au dot en cours d'utilisation
    // et on l'enlève aux autres grâce à toggle
    dot.classList.toggle("dot_selected", index === currentIndex);
  });
}

// Clic sur la flèche gauche
// On écoute d'abord l'évènement
leftArrow.addEventListener("click", () => {
  // S'il a lieu, on va à la slide précédente
  // Si on est sur la 1ère slide, on va à la dernière
  // grâce au % slider.length qui créé une boucle infinie
  currentIndex = (currentIndex - 1 + slider.length) % slider.length;
  // On appelle la fonction qui met à jour le slider
  updateSlider();
});

// Clic sur la flèche droite
// On écoute d'abord l'évènement
rightArrow.addEventListener("click", () => {
    // S'il a lieu, on va à la slide suivante
      // Si on est sur la dernière slide, on va à la 1ère
        // grâce au % slider.length qui créé une boucle infinie
  currentIndex = (currentIndex + 1) % slider.length;
  updateSlider();
});

// Initialisation, permet que le slider et les dots apparaissent au chargement de la page
createDots();
updateSlider();
