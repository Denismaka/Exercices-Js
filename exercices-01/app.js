// ##########################################################
// Exercice 2 : Calculer la moyenne des notes d'un étudiant
// ##########################################################

// Objectif : Créer un tableau d'objets représentant des étudiants
// avec leurs notes, puis calculer et afficher la moyenne de chaque étudiant.

const students = [
    {
        name: "Jhon",
        notes: [1, 20, 18, 19, 12],
    },
    {
        name: "Jane",
        notes: [17, 18, 20, 13, 15],
    },
    {
        name: "Sophie",
        notes: [17, 12, 14, 15, 13],
    },
    {
        name: "MarC",
        notes: [2, 3, 5, 8, 9],
    },
    {
        name: "Maka",
        notes: [18, 19, 18, 19, 20],
    },
];

// Fontion pour calculer la moyenne des note d'un étudiant
const moyenne = (notes) => {
    const sum = notes.reduce((acc, note) => acc + note, 0);
    return sum / notes.length;
};

// Fontion pour comparer deux étudiants par leur moyenne
const compareStudents = (a, b) => {
    return b.moyenne - a.moyenne;
};

// Calcler la moyenne, la meillure et la pire note de chaque étudiant
for (let student of students) {
    student.moyenne = moyenne(student.notes);
    student.worst = Math.min(...student.notes);
    student.best = Math.max(...student.notes);
}

// Trier le tbleau des étudiants par moyene décroissante
students.sort(compareStudents);

// Fonction pour formater l'affichage des infrmation d'un étudiant
const formatStudent = (student) => {
    return `${student.name} avec une moyenne de ${student.moyenne.toFixed(
        2
    )}, meilleure note (${student.best}), pire note (${student.worst})`;
};

// Afficher les trois meilleurs étudiants
console.log(`Top trois étudiants:`);
console.log(`1: ${formatStudent(students[0])}`);
console.log(`2: ${formatStudent(students[1])}`);
console.log(`3: ${formatStudent(students[2])}`);
