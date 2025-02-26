var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

function openArticle(id) {
    localStorage.setItem("selectedArticleId", id);
    window.location.href = "article.html";
}

if (window.location.pathname.includes("article.html")) {
    const articleId = localStorage.getItem("selectedArticleId");

    if (articleId) {
        fetch("articoli.json")
            .then(response => response.json())
            .then(articles => {
                const articleData = articles[articleId];

                if (articleData) {
                    document.getElementById("article-title").textContent = articleData.title;
                    document.getElementById("article-image").src = articleData.image;
                    document.getElementById("article-text").innerHTML = articleData.text;
                } else {
                    document.querySelector("main").innerHTML = "<p>Articolo non trovato.</p>";
                }
            })
            .catch(error => console.error("Errore nel caricamento degli articoli:", error));
    } else {
        document.querySelector("main").innerHTML = "<p>Articolo non trovato.</p>";
    }
}
