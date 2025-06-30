// ############################################################################
// Exercice 3 : Calculer la fréquence des mots dans une chaîne de caractères
// ############################################################################

// Objectif : Créer une fonction qui prend une chaîne de caractères
// et retourne un objet avec la fréquence de chaque mot dans la chaîne.

const phrase =
    "Bonjour le monde, le monde est beau. Bonjour à tous ! Je suis content de vous voir, le monde est beau ! En attendant le monde entier. Le monde est beau, le monde est beau !";

// Fonction pour calculer la fréquence des mots
const calculateWordFrequencies = (text) => {
    const frequencies = {};

    // Nettoyage et séparation des mots
    const words = text
        .toLocaleLowerCase()
        .replace(/[.,!?]/g, "")
        .split(/\s+/);

    for (let word of words) {
        if (word) {
            // Vérifie que le mot n'est pas vide
            frequencies[word] = (frequencies[word] || 0) + 1;
        }
    }

    // Convertir l'objet en tableau d'objets
    const frequenciesArray = Object.entries(frequencies).map(
        ([word, count]) => ({
            word,
            count,
        })
    );

    // Tri des mots par fréquence décroissante
    frequenciesArray.sort((a, b) => b.count - a.count);

    return frequenciesArray;
};

// Appel de la fonction et affichage des résultats
const result = calculateWordFrequencies(phrase);
console.log(result);
