// #############################################
// Les écouteur d'événements
// #############################################
// Exercice 1: On s'y maqine que l'on a un gros paragraphe et
//  à l'intérieur on ne entrain de spoiler une série (réveler la fin d'une série important)
const spoilers = document.querySelectorAll(".spoiler");
function revealSpoiler() {
    spoilers.forEach((spoiler) => spoiler.classList.remove("spoiler"));
}
spoilers.forEach((spoiler) => {
    spoiler.addEventListener("click", revealSpoiler);
});
