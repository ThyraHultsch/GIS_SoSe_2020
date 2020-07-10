"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let formData;
    let buttonActionHtml = document.getElementById("rein");
    buttonActionHtml.addEventListener("click", handleClickRein);
    let buttonActionJson = document.getElementById("zeigen");
    buttonActionHtml.addEventListener("click", handleClickZeigen);
    async function handleClickRein() {
        formData = new FormData(document.forms[0]);
        let serverURL = "https://thyra.herokuapp.com";
        serverURL += "/rein";
        let query = new URLSearchParams(formData);
        serverURL += "?" + query.toString();
        let formular = document.getElementById("formid");
        formular.reset();
        await fetch(serverURL);
    }
    async function handleClickZeigen() {
        let serverURL = "https://thyra.herokuapp.com";
        serverURL += "/zeigen";
        let ausgabe = await fetch(serverURL);
        console.log(ausgabe);
        let datenbankausgabe = await ausgabe.json();
        let serverResponse = document.getElementById("DatenbankAusgabe");
        serverResponse.innerHTML = datenbankausgabe;
        console.log(datenbankausgabe);
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map