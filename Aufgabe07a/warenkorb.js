"use strict";
var Aufgabe07a;
(function (Aufgabe07a) {
    let warenkorbItems = Number(localStorage.getItem("AnzahlItems"));
    let divCoffee = document.getElementById("containerCoffeeID");
    for (let i = 0; i < warenkorbItems; i++) {
        let divElem = document.createElement("div");
        divElem.setAttribute("class", "artikelCoffee");
        divElem.id = "Artikel" + i;
        divElem.setAttribute("divIdentifier", localStorage.getItem("divId" + i));
        let imgElem = document.createElement("img");
        imgElem.setAttribute("src", localStorage.getItem("img" + i));
        imgElem.setAttribute("alt", localStorage.getItem("title" + i));
        divElem.appendChild(imgElem);
        let pName = document.createElement("p");
        divElem.appendChild(pName);
        pName.innerHTML = localStorage.getItem("title" + i);
        let pElem = document.createElement("p");
        divElem.appendChild(pElem);
        pElem.innerHTML = localStorage.getItem("beschreibung" + i);
        let pElem2 = document.createElement("p");
        divElem.appendChild(pElem2);
        pElem2.setAttribute("class", "preis");
        pElem2.innerHTML = localStorage.getItem("preis" + i);
        let buttonElem = document.createElement("button");
        buttonElem.innerHTML = "Entfernen";
        buttonElem.setAttribute("identifier", "" + i);
        buttonElem.addEventListener("click", handleDelete);
        divElem.appendChild(buttonElem);
        divCoffee.appendChild(divElem);
    }
    let hGesamtpreis = document.getElementById("gesamtpreis");
    hGesamtpreis.innerHTML += " " + localStorage.getItem("gesamtpreis") + "€";
    let buttonDeleteAll = document.getElementById("deleteAll");
    buttonDeleteAll.addEventListener("click", handleDeleteAll);
    //Div löschen +Preis berechnen
    function handleDelete(_event) {
        let buttonPressed = _event.currentTarget;
        let identifier = buttonPressed.getAttribute("identifier");
        let preisAbzug = localStorage.getItem("preis" + identifier);
        preisAbzug = preisAbzug.substring(0, preisAbzug.length - 1);
        preisAbzug = preisAbzug.replace(",", ".");
        let neuGesamtpreis = Number((Number(localStorage.getItem("gesamtpreis")) - Number(preisAbzug)).toFixed(2));
        localStorage.setItem("gesamtpreis", "" + neuGesamtpreis);
        let hGesamtpreis = document.getElementById("gesamtpreis");
        hGesamtpreis.innerHTML = "Gesamtpreis: " + localStorage.getItem("gesamtpreis") + "€";
        localStorage.removeItem("img" + identifier);
        localStorage.removeItem("title" + identifier);
        localStorage.removeItem("beschreibung" + identifier);
        localStorage.removeItem("preis" + identifier);
        let divRemove = document.getElementById("Artikel" + identifier);
        divRemove.remove();
    }
    //alle divs löschen
    function handleDeleteAll(_event) {
        for (let i = 0; i < warenkorbItems; i++) {
            localStorage.removeItem("img" + i);
            localStorage.removeItem("title" + i);
            localStorage.removeItem("beschreibung" + i);
            localStorage.removeItem("preis" + i);
            let divRemove = document.getElementById("Artikel" + i);
            if (divRemove)
                divRemove.remove();
        }
        let hGesamtpreis = document.getElementById("gesamtpreis");
        hGesamtpreis.innerHTML = "Gesamtpreis: 0€";
    }
})(Aufgabe07a || (Aufgabe07a = {}));
//# sourceMappingURL=warenkorb.js.map