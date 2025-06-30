// #############################################
// Promise
// #############################################
// Fonction pour récupérer les données d'un utilisateur
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        // Simuler un appel API avec setTimeout
        setTimeout(() => {
            // Simulns une réponse de l'API
            const users = {
                1: { id: 1, name: "Justine", age: 23 },
                2: { id: 2, name: "Perside", age: 24 },
                3: { id: 3, name: "charon", age: 26 },
            };

            // Vérifins si l'utilisateur existe
            if (users[userId]) {
                resolve(users[userId]);
            } else {
                reject("Utilisateur non trouvé");
            }
        }, 1000);
    });
}

// Utiliser la fonction pour récupérer les données d'un utilisateur
fetchUserData(1)
    .then((user) => {
        console.log("Données de l'utilisateur :", user);
    })
    .catch((error) => {
        console.log("Erreur :", error);
    });
