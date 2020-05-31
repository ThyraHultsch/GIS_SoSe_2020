"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    let divProdukteGesamt = document.createElement("div");
    divProdukteGesamt.setAttribute("class", "inhalt");
    let divKA = document.createElement("div");
    divKA.setAttribute("class", "containerCoffee");
    let hDiv = document.createElement("h2");
    hDiv.setAttribute("id", "coffee");
    hDiv.innerHTML = "-Coffee-";
    divKA.appendChild(hDiv);
    divProdukteGesamt.appendChild(divKA);
    for (let i = 0; i < Aufgabe05.coffee.length; i++) {
        let divX = document.createElement("div");
        divX.setAttribute("class", "Produkt");
        let bildDiv = document.createElement("img");
        bildDiv.setAttribute("src", Aufgabe05.coffee[i].bild);
        divX.appendChild(bildDiv);
        let h4Div = document.createElement("h4");
        divX.appendChild(h4Div);
        h4Div.innerHTML = Aufgabe05.coffee[i].name;
        let pDiv = document.createElement("p");
        divX.appendChild(pDiv);
        pDiv.innerHTML = Aufgabe05.coffee[i].beschreibung;
        let h5Div = document.createElement("h5");
        divX.appendChild(h5Div);
        h5Div.setAttribute("class", "preis");
        h5Div.innerHTML = Aufgabe05.coffee[i].preis;
        let button = document.createElement("button");
        button.innerHTML = "Add to cart";
        divX.appendChild(button);
        divProdukteGesamt.appendChild(divX);
    }
    let divKAX = document.createElement("div");
    divKAX.setAttribute("class", "containerMugs");
    let hDivX = document.createElement("h2");
    hDivX.setAttribute("id", "mugs");
    hDivX.innerHTML = "-Mugs-";
    divKAX.appendChild(hDivX);
    divProdukteGesamt.appendChild(divKAX);
    for (let j = 0; j < Aufgabe05.mugs.length; j++) {
        let divXX = document.createElement("div");
        divXX.setAttribute("class", "Produkt");
        let bildDivX = document.createElement("img");
        bildDivX.setAttribute("src", Aufgabe05.mugs[j].bild);
        divXX.appendChild(bildDivX);
        let h4DivX = document.createElement("h4");
        divXX.appendChild(h4DivX);
        h4DivX.innerHTML = Aufgabe05.mugs[j].name;
        let pDivX = document.createElement("p");
        divXX.appendChild(pDivX);
        pDivX.innerHTML = Aufgabe05.mugs[j].beschreibung;
        let h5DivX = document.createElement("h5");
        divXX.appendChild(h5DivX);
        h5DivX.setAttribute("class", "preis");
        h5DivX.innerHTML = Aufgabe05.mugs[j].preis;
        let button = document.createElement("button");
        button.innerHTML = "Add to cart";
        divXX.appendChild(button);
        divProdukteGesamt.appendChild(divXX);
    }
    document.getElementById("main")?.appendChild(divProdukteGesamt);
    let about = document.createElement("h2");
    about.innerHTML = "About us";
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=TypescriptDatei2.js.map