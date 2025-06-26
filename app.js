// ##########################################################
// Exercice 2 : Calculer la moyenne des notes d'un étudiant
// ##########################################################

// Objectif : Créer un tableau d'objets représentant des étudiants
// avec leurs notes, puis calculer et afficher la moyenne de chaque étudiant.
// const students = [
//     {
//         name: "Jhon",
//         notes: [1, 20, 18, 19, 12],
//     },
//     {
//         name: "Jane",
//         notes: [17, 18, 20, 13, 15],
//     },
//     {
//         name: "Sophie",
//         notes: [17, 12, 14, 15, 13],
//     },
//     {
//         name: "MarC",
//         notes: [2, 3, 5, 8, 9],
//     },
//     {
//         name: "Maka",
//         notes: [18, 19, 18, 19, 20],
//     },
// ];

// // Fonction pour calculer la moyenne des notes
// // d'un étudiant et l'afficher dans la console
// const moyenne = (notes) => {
//     let sum = 0;
//     for (let note of notes) {
//         sum = sum + note;
//     }
//     return sum / notes.length;
// };

// // Fonction pour comparer deux étudiants
// const compareStudents = (a, b) => {
//     return b.moyenne - a.moyenne;
// };

// // Calculer la moyenne de chaque étudiant
// // et trier le tableau des étudiants par moyenne décroissante
// for (let student of students) {
//     student.moyenne = moyenne(student.notes);
//     student.worst = Math.min(...student.notes);
//     student.best = Math.max(...student.notes);
// }
// students.sort(compareStudents);
// const formatStudent = (student) => {
//     return `${student.name} avec une moyenne de ${student.moyenne}, meilleur note (${student.best}), pire note (${student.worst})`;
// };
// console.log(
//     `Top trois etudiants
//     1: ${formatStudent(students[0])}
//     2: ${formatStudent(students[1])}
//     3: ${formatStudent(students[2])}`
// );

// ############################################################################
// Exercice 3 : Calculer la fréquence des mots dans une chaîne de caractères
// ############################################################################

// Objectif : Créer une fonction qui prend une chaîne de caractères
// et retourne un objet avec la fréquence de chaque mot dans la chaîne.

// const phrase =
//     "Bonjour le monde, le monde est beau. Bonjour à tous ! je suis content de vous voir, le monde est beau ! en attendant le monde entier. Le monde est beau, le monde est beau !";
// const fréquencies = {};
// const words = phrase.toLocaleLowerCase().replace(",", "").split(" ");
// for (let word of words) {
//     if (word !== "") {
//         if (fréquencies[word]) {
//             fréquencies[word]++;
//         } else {
//             fréquencies[word] = 1;
//         }
//     }
// }
// const frequenciesArray = [];
// for (let k in fréquencies) {
//     frequenciesArray.push({
//         word: k,
//         count: fréquencies[k],
//     });
// }
// frequenciesArray.sort((a, b) => b.count - a.count);
// // Afficher les fréquences des mots
// console.log(frequenciesArray);

// Notion des prototypes et des classes et la programmation orientée objet en JavaScript
// ##########################################################
// Exercice 4 :
// ##########################################################
const a = { a, b };
