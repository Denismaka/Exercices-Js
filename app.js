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

// Fonction pour calculer la moyenne des notes
// d'un étudiant et l'afficher dans la console
const moyenne = (notes) => {
    let sum = 0;
    for (let note of notes) {
        sum = sum + note;
    }
    return sum / notes.length;
};

// Fonction pour comparer deux étudiants
const compareStudents = (a, b) => {
    return b.moyenne - a.moyenne;
};

// Calculer la moyenne de chaque étudiant
// et trier le tableau des étudiants par moyenne décroissante
for (let student of students) {
    student.moyenne = moyenne(student.notes);
}
students.sort(compareStudents);
const formatStudent = (student) => {
    return `${student.name} avec une moyenne de ${student.moyenne}`;
};
console.log(
    `Top trois etudiants 
    1: ${formatStudent(students[0])}
    2: ${formatStudent(students[1])}
    3: ${formatStudent(students[2])}
    4: ${formatStudent(students[3])}
    5: ${formatStudent(students[4])}`
);

// Calculer la moyenne des notes de chaque étudiant
// et afficher le résultat dans la console
students.forEach((student) => {
    console.log(
        `La moyenne de ${student.name} est de ${moyenne(student.notes)}`
    );
});
