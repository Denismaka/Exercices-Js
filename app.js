// Notion des exceptions en Javascript
// ##########################################################
// Exercice 3[2] :
// ##########################################################

class Retangle {
    constructor(width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error(
                "Impossible d'avoir une forme géométrique avec des dimensions négative"
            );
        }
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

try {
    const r = new Retangle(-10, 20);
} catch (e) {
    console.log(e);
}

// // Classe de base pour les formes géométriques
// const r = new Retangle(10, 20);
// console.log(r.perimeter);
// console.log(r.isValid);

// // Classe Rectangle qui hérite de la classe Forme
// const r2 = new Retangle(-10, 20);
// console.log(r.isValid);

// // Classe Forme
// const c = new Square(10);
// console.log(c.perimeter);
// console.log(c.isBiggerThan(r));
