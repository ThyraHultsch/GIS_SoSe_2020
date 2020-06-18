"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let formData;
    let senden = document.getElementById("senden");
    senden.addEventListener("click", handleClick);
    async function handleClick() {
        formData = new FormData(document.forms[0]);
        let url = "https://thyra.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        console.log(responseText);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=Script.js.map