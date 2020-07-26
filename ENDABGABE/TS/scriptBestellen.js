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
        serverURL += "?" + query.toString();
        let i = 1;
        let nummer = Number(localStorage.getItem("anzahl"));
        let reihenfolge = 1;
        while (i <= nummer) {
            if (localStorage.getItem("name" + i) != null) {
                console.log(i);
                serverURL += "&" + "Produkt" + reihenfolge + "=" + localStorage.getItem("name" + i);
                console.log(localStorage.getItem("name" + i));
                i++;
                reihenfolge++;
            }
            else {
                i++;
            }
            console.log(serverURL);
        }
        console.log(serverURL);
        localStorage.clear();
        let formular = document.getElementById("formular");
        formular.reset();
        await fetch(serverURL);
    }
})(Eis || (Eis = {}));
//# sourceMappingURL=scriptBestellen.js.map