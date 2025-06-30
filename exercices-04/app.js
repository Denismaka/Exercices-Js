// #############################################
// Qualque fonctions usuelles
// #############################################

// ##############
// concat
// ##############
const array1 = ["Alice", "Bob", "Charlie"];
const array2 = ["David", "Eve", "Frank"];
const students = array1.concat(array2);
console.log("Liste des étudiants :", students);

// ##############
// fill
// ##############
const grades = [10, 12, 15, 18];
console.log("Notes initiales :", grades);
console.log("Remplissage de 0 à partir de l'indice 2 :", grades.fill(0, 2, 4));

// ##############
// filter
// ##############
// Filtrer les noms d'étudiants ayant moins de 6 lettres
const shortNames = students.filter((name) => name.length <= 6);
console.log("Noms d'étudiants courts :", shortNames);

// Filtrer les notes
const notes = [12, 17, 8, 9, 15];
const failingGrades = notes.filter((note) => note < 10);
const passingGrades = notes.filter((note) => note >= 10);

if (failingGrades.length > 0) {
    console.log("Notes non réussies :", failingGrades);
} else {
    console.log("Toutes les notes sont réussies !");
}

console.log("Notes réussies :", passingGrades);

// ##############
// find
// ##############
// Trouver la première note supérieure à 10
const firstPassingGrade = notes.find((grade) => grade > 10);
console.log("Première note réussie :", firstPassingGrade);

// ##############
// forEach
// ##############
// Afficher chaque nom d'étudiant
console.log("Affichage des étudiants :");
students.forEach((student) => console.log(student));

// ##############
// from
// ##############
// Créer un tableau à partir d'une chaîne de caractères
console.log("Tableau à partir de 'foo' :", Array.from("foo"));
console.log(
    "Tableau doublé :",
    Array.from([1, 2, 3], (x) => x + x)
);

// ##############
// includes
// ##############
// Vérifier si une note est présente
const table = [1, 2, 3];
console.log("La table inclut 2 :", table.includes(2));
console.log("La table inclut 5 :", table.includes(5));

// ##############
// map
// ##############
// Extraire les prénoms des étudiants
const persons = [
    { firstname: "John", lastname: "Doe" },
    { firstname: "Jane", lastname: "Smith" },
    { firstname: "Jim", lastname: "Brown" },
    { firstname: "Jack", lastname: "Johnson" },
];
const firstNames = persons.map((person) => person.firstname).join(", ");
console.log("Prénoms des étudiants :", firstNames);

// ##############
// reduce
// ##############
// Calculer la moyenne des notes
const averageGrade = notes.reduce((acc, note) => acc + note, 0) / notes.length;
console.log("Moyenne des notes :", averageGrade);
