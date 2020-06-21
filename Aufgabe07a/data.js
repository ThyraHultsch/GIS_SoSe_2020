"use strict";
var Aufgabe07a;
(function (Aufgabe07a) {
    loadArticles("data.json");
    async function loadArticles(_url) {
        let response = await fetch(_url);
        let jsonArray = await response.json();
        Aufgabe07a.articles = await JSON.parse(JSON.stringify(jsonArray));
        Aufgabe07a.createArticles();
    }
})(Aufgabe07a || (Aufgabe07a = {}));
//# sourceMappingURL=data.js.map