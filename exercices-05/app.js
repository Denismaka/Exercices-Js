// #############################################
// Les timers
// #############################################
function decompte(n) {
    console.log(n);
    if (n === 0) {
        console.log("Lancement du produit !");
        return;
    }
    setTimeout(() => {
        decompte(n - 1);
    }, 1000);
}

// Démarrer le compte à rebours à partir de 3 secondes
decompte(3);
