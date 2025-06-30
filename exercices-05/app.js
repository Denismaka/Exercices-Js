// #############################################
// Les timers
// #############################################
function decompte(n) {
    console.log(n); // Affiche le nombre actuel du compte à rebours
    if (n === 0) {
        console.log("Lancement du produit !");
        return; // Fin du compte à rebours
    }
    setTimeout(() => {
        decompte(n - 1); // Appel récursif après 1 seconde
    }, 1000);
}

// Démarrer le compte à rebours à partir de 3 secondes
decompte(3);
