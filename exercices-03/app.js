// Notion des prototypes et des classes et la programmation orientée objet en JavaScript
// ##########################################################
// Exercice 3 : Calculer la moyenne des notes d'un étudiant
// ##########################################################
const moyenne = (notes) => {
    let sum = 0;
    for (let note of notes) {
        sum += note;
    }
    return sum / notes.length;
};

// Classe étudiant
class Student {
    ecole = "collège Saint Pierre";

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.notes = [];
    }

    setNotes(notes) {
        this.notes = notes;
    }

    // Méthode pour calculer la moyenne des notes
    getAverage() {
        if (this.notes && this.notes.length > 0) {
            return this.notes.reduce((a, b) => a + b, 0) / this.notes.length;
        }
        return 0;
    }

    // Méthode pour vérifier si l'étudiant peut réussir
    canPass() {
        return this.getAverage() >= 10;
    }
}

class SuperStudent extends Student {
    constructor(firstname, lastname, school) {
        super(firstname, lastname);
        this.school = school;
    }

    // Méthode pour afficher les informations de l'étudiant
    displayInfo() {
        console.log(
            `${this.firstname} ${this.lastname} étudie à ${
                this.school
            } et a une moyenne de ${this.getAverage()}`
        );
    }
}

// Création d'instances de la classe étudiant
const denis = new Student("Denis", "Maka");
const wilson = new Student("Wilson", "Maka");
const gedeon = new Student("Gedeon", "Maka");
const tony = new Student("Tony", "Maka");

// Définition des notes pour chaque étudiant
denis.setNotes([18, 19, 20, 17, 16]);
wilson.setNotes([12, 14, 15, 13, 11]);
gedeon.setNotes([10, 12, 13, 12, 10]);
tony.setNotes([3, 7, 8, 6, 11]);

// Affichage de la moyenne de chaque étudiant
const students = [denis, wilson, gedeon, tony];
students.forEach((student) => {
    const average = student.getAverage();
    const result = student.canPass() ? "a réussi" : "a échoué";
    console.log(
        `${student.firstname} ${student.lastname} ${result} avec une moyenne de : ${average}`
    );
});
