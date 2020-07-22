"use strict";
var Eis;
(function (Eis) {
    let formData;
    let buttonActionBestellen = document.getElementById("in");
    buttonActionBestellen.addEventListener("click", handleClickBestellen);
    async function handleClickBestellen() {
        formData = new FormData(document.forms[0]);
        let serverURL = "https://thyra.herokuapp.com";
        serverURL += "/bestellen";
        let query = new URLSearchParams(formData);
        serverURL += "?" + query.toString;
        let formular = document.getElementById("formular");
        formular.reset();
        await fetch(serverURL);
    }
    let buttonActionAnzeigen = document.getElementById("buttonAnzeigen");
    buttonActionAnzeigen.addEventListener("click", handleClickAnzeigen);
    async function handleClickAnzeigen() {
        let serverURL = "https://thyra.herokuapp.com";
        serverURL += "/anzeigen";
        let ausgabe = await fetch(serverURL);
        console.log(ausgabe);
        let datenbankausgabe = await ausgabe.json();
        let serverResponse = document.getElementById("DatenbankAusgabe");
        serverResponse.innerHTML = datenbankausgabe;
        console.log(datenbankausgabe);
    }
})(Eis || (Eis = {}));
//# sourceMappingURL=scriptBestellen.js.map