// Slider
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

// Flèches
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

leftArrow.addEventListener("click", () => {
  console.log("Clic flèche gauche");
});

rightArrow.addEventListener("click", () => {
  console.log("Clic flèche droite");
});

// Dots
const dotsContainer = document.querySelector(".dots");
let currentIndex = 0;

function createDots() {
  slider.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) {
      dot.classList.add("dot_selected");
    }
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentIndex);
  });
}

createDots();
