// #############################################
// Manipuler le DOM
// #############################################
/**
 * Crée un élément HTML répresentant un articles
 * @param {title: string, body: string} post
 * @return {HTMLlement}
 */
function createArticles(post) {
    const article = document.createElement(article);
    article.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
    `;
    return article;
}

async function main() {
    const wrapper = document.querySelector("#lastPost");
    const loader = document.createElement("p");
    loader.innerText = "Chargement...";
    wrapper.append(loader);

    try {
        const r = await fetch("https://jsonplaceholder.typicode.com/users", {
            headers: {
                Accept: "application/json",
            },
        });

        if (!r.ok) {
            throw new Error("Erreur serveur");
        }
        const posts = await r.json();
        loader.remove();
        for (let post of posts) {
            wrapper.append(createArticles(post));
        }
    } catch (error) {
        loader.innerText = "Impossible de charger les articles";
        loader.style.color = "red";
        return;
    }
}

main();
