// ############################################################################
// Exercice 3 : Calculer la fréquence des mots dans une chaîne de caractères
// ############################################################################

// Objectif : Créer une fonction qui prend une chaîne de caractères
// et retourne un objet avec la fréquence de chaque mot dans la chaîne.

const phrase = "Bonjour le monde, le monde est beau. Bonjour à tous !";
const fréquencies = {};
const words = phrase.toLocaleLowerCase().replace(",", "").split(" ");
for (let word of words) {
    if (word !== "") {
        if (fréquencies[word]) {
            fréquencies[word]++;
        } else {
            fréquencies[word] = 1;
        }
    }
}
console.log(fréquencies);
