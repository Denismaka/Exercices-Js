// #############################################
// Qualque fonctions usuelles
// #############################################

// ##############
// concat
// ##############
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);

// ##############
// fill
// ##############
const array = [1, 2, 3, 4];
console.log(array.fill(0, 2, 4));
console.log(array.fill(5, 1));
console.log(array.fill(6));

// ##############
// filter
// ##############
// Exemples 1
const words = [
    "limite",
    "destruction",
    "elite",
    "exuberant",
    "absent",
    "present",
];
const result = words.filter((word) => word.length <= 6);
console.log(result);

// Exemples 2
const notes = [12, 17, 18, 9, 7];
const maivaisesNotes = notes.filter((note) => note < 10);
const goodNotes = notes.filter((note) => note >= 10);

if (maivaisesNotes.length > 0) {
    console.log("Notes non réussies :", maivaisesNotes);
} else {
    console.log("Toutes les notes sont réussies !");
}

if (goodNotes) {
    console.log("Notes réussies :", goodNotes);
}

// ##############
// Find
// ##############
// Exemples
const arrayf = [5, 12, 8, 130, 44];
const found = arrayf.find((element) => element > 10);
console.log(found);

// ##############
// forEach
// ##############
// Exemples
const arrays = ["a", "b", "c"];
arrays.forEach((element) => console.log(element));

// ##############
// from
// ##############
// Exemples
console.log(Array.from("foo"));
console.log(Array.from([1, 2, 3]), (x) => x + x);

// ##############
// includes
// ##############
// Exemples
const table = [1, 2, 3];
console.log(table.includes(5));

// ##############
// map
// ##############
// Exemples
const persons = [
    { firstname: "John", lastname: "Doe" },
    { firstname: "Jane", lastname: "Smith" },
    { firstname: "Jim", lastname: "Brown" },
    { firstname: "Jack", lastname: "Johnson" },
];
const map1 = persons.map((person) => person.firstname).join("\n");
console.log(map1);
