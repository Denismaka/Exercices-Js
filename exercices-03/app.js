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

// Notion des prototypes et des classes et la programmation orientée objet en JavaScript
// ##########################################################
// Exercice 3[1] : On traivaille sur un site qui utilise des
// formes géométriques pour représenter des formes
// ##########################################################

// Classe de base pour les formes géométriques
// La classe Retangle représente un rectangle avec une largeur et une hauteur
class Retangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get perimeter() {
        return (this.width + this.height) * 2;
    }

    get isValid() {
        return this.width > 0 && this.height > 0;
    }

    isBiggerThan(shape) {
        return this.perimeter > shape.perimeter;
    }
    isBiggerThan(other) {
        return this.perimeter > other.perimeter;
    }
}

// Classe qui hérite de la classe Retangle pour représenter un carré
// Un carré est un rectangle avec une largeur et une hauteur égales
class Square extends Retangle {
    constructor(width) {
        super(width, width);
    }
}

// Classe de base pour les formes géométriques
const r = new Retangle(10, 20);
console.log(r.perimeter);
console.log(r.isValid);

// Classe Rectangle qui hérite de la classe Forme
const r2 = new Retangle(-10, 20);
console.log(r.isValid);

// Classe Forme
const c = new Square(10);
console.log(c.perimeter);
console.log(c.isBiggerThan(r));



// Notion des prototypes et des classes et la programmation orientée objet en JavaScript
// ##########################################################
// Exercice 3[2] : On va gérer une librairie avec des objets
// ##########################################################

class Book {
    #page = 1;

    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    get page() {
        return this.#page;
    }

    nextPage() {
        if (this.#page < this.pages) {
            this.#page++;
        }
    }

    close() {
        this.#page = 1;
    }
}

class Library {
    #books = [];

    addBook(book) {
        this.#books.push(book);
    }

    addBooks(books) {
        for (let book of books) {
            this.addBook(book);
        }
    }

    findBooksByLetter(letter) {
        const found = [];
        for (let book of this.#books) {
            if (
                book.title[0].toLocaleLowerCase() === letter.toLocaleLowerCase()
            ) {
                found.push(book);
            }
        }
        return found;
    }
}

const b = new Book("Le Seigneur des Anneaux", 1000);
console.log(b.page);
b.nextPage();
console.log(b.page);
b.close();
console.log(b.page);

const library1 = new Library();
library1.addBook(b);
library1.addBooks([
    new Book("Ready Player One", 100),
    new Book("Oui-Oui", 10),
    new Book("Sillage", 50),
]);

// Recherche des livres commençant par la lettre "S"
const foundBooks = library1.findBooksByLetter("S");
console.log(foundBooks);
