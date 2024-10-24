// Récupération des éléments HTML5
const glowingCards = document.querySelectorAll(".glow__section__card");
const glowSection = document.querySelector(".glow__section");

// Déclaration de la fonction handleBlobMovement qui va permettre de gérer les mouvements du blob
const handleBlobMovement = (e) => {
  glowingCards.forEach((card) => {
    // Récupération de la <div> ayant la classe glow__section__blob
    const blob = card.querySelector(".glow__section__blob");
    const cardRect = card.getBoundingClientRect(); // La méthode Element.getBoundingClientRect() retourne un objet DOMRect fournissant des informations sur la taille d'un élément et sa position relative par rapport à la zone d'affichage

    // Apparition du blob
    blob.style.opacity = "1";

    // Faire bouger le blob et faire en sorte qu'il suive la souris
    blob.style.transform = `translate(calc(${
      e.clientX - cardRect.left
    }px - 50%), calc(${e.clientY - cardRect.top}px - 50%))`;
  });
};

// Déclaration de la fonction handleBlobMouseOut qui va permettre de gérer le blob lorsque la souris sort de la carte
const handleBlobMouseOut = (e) => {
  glowingCards.forEach((card) => {
    // Récupération de la <div> ayant la classe glow__section__blob
    const blob = card.querySelector(".glow__section__blob");
    // Disparition du blob
    blob.style.opacity = "0";
  });
};

// Seulement quand on a un curseur pointer fine (pointer : fine = le mécanisme de saisie principal inclut un dispositif de pointage précis.)
// Retourne un nouvel objet MediaQueryList contenant les résultats de la chaîne de caractères media query spécifiée.
if (window.matchMedia("(pointer:fine)").matches) {
  // Ecoute de l'événement "mousemove" et appel de la fonction handleBlobMovement
  glowSection.addEventListener("mousemove", handleBlobMovement);
  // Ecoute de l'événement "pointermove" (pour cibler les appareils qui utilisent un dispositif de pointage) et appel de la fonction handleBlobMovement
  glowSection.addEventListener("mousemove", handleBlobMovement);
  // Ecoute de l'événement "mouseout" et appel de la fonction handleBlobMouseOut
  glowSection.addEventListener("mouseout", handleBlobMouseOut);
  // Ecoute de l'événement "pointerout" (pour cibler les appareils qui utilisent un dispositif de pointage) et appel de la fonction handleBlobMouseOut
  glowSection.addEventListener("pointerout", handleBlobMouseOut);
}
