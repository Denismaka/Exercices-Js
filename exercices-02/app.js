// ############################################################################
// Exercice 3 : Calculer la fréquence des mots dans une chaîne de caractères
// ############################################################################

// Objectif : Créer une fonction qui prend une chaîne de caractères
// et retourne un objet avec la fréquence de chaque mot dans la chaîne.

const phrase =
    "Bonjour le monde, le monde est beau. Bonjour à tous ! je suis content de vous voir, le monde est beau ! en attendant le monde entier. Le monde est beau, le monde est beau !";
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
const frequenciesArray = [];
for (let k in fréquencies) {
    frequenciesArray.push({
        word: k,
        count: fréquencies[k],
    });
}
frequenciesArray.sort((a, b) => b.count - a.count);
// Afficher les fréquences des mots
console.log(frequenciesArray);
