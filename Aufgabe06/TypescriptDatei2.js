"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    let divProdukteGesamt1 = document.createElement("div");
    divProdukteGesamt1.setAttribute("class", "inhalt");
    divProdukteGesamt1.setAttribute("id", "inhalt1");
    let divProdukteGesamt2 = document.createElement("div");
    divProdukteGesamt2.setAttribute("class", "inhalt");
    divProdukteGesamt2.setAttribute("id", "inhalt2");
    /*     let divKA: HTMLElement = document.createElement("div");
        divKA.setAttribute("class", "containerCoffee");
        divKA.setAttribute("id", "containerCoffee");  */
    let hDiv = document.createElement("h2");
    hDiv.setAttribute("id", "coffee");
    hDiv.innerHTML = "-Coffee-";
    /* divKA.appendChild(hDiv);
    divProdukteGesamt.appendChild(divKA); */
    for (let i = 0; i < Aufgabe06.coffee2.length; i++) {
        let divX = document.createElement("div");
        divX.setAttribute("class", "Produkt");
        divX.setAttribute("id", "Produkt");
        let bildDiv = document.createElement("img");
        bildDiv.setAttribute("src", Aufgabe06.coffee2[i].bild);
        divX.appendChild(bildDiv);
        let h4Div = document.createElement("h4");
        divX.appendChild(h4Div);
        h4Div.innerHTML = Aufgabe06.coffee2[i].name;
        let pDiv = document.createElement("p");
        divX.appendChild(pDiv);
        pDiv.innerHTML = Aufgabe06.coffee2[i].beschreibung;
        let h5Div = document.createElement("h5");
        divX.appendChild(h5Div);
        h5Div.setAttribute("class", "preis");
        h5Div.innerHTML = Aufgabe06.coffee2[i].preis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        let button = document.createElement("button");
        button.innerHTML = "Add to cart";
        divX.appendChild(button);
        button.addEventListener("click", handleClick);
        divProdukteGesamt1.appendChild(divX);
    }
    let divKAX = document.createElement("div");
    divKAX.setAttribute("class", "containerMugs");
    divKAX.setAttribute("id", "containerMugs");
    let hDivX = document.createElement("h2");
    hDivX.setAttribute("id", "mugs");
    hDivX.innerHTML = "-Mugs-";
    divKAX.appendChild(hDivX);
    /* divProdukteGesamt.appendChild(divKAX); */
    for (let j = 0; j < Aufgabe06.mugs2.length; j++) {
        let divXX = document.createElement("div");
        divXX.setAttribute("class", "Produkt");
        let bildDivX = document.createElement("img");
        bildDivX.setAttribute("src", Aufgabe06.mugs2[j].bild);
        divXX.appendChild(bildDivX);
        let h4DivX = document.createElement("h4");
        divXX.appendChild(h4DivX);
        h4DivX.innerHTML = Aufgabe06.mugs2[j].name;
        let pDivX = document.createElement("p");
        divXX.appendChild(pDivX);
        pDivX.innerHTML = Aufgabe06.mugs2[j].beschreibung;
        let h5DivX = document.createElement("h5");
        divXX.appendChild(h5DivX);
        h5DivX.setAttribute("class", "preis");
        h5DivX.innerHTML = Aufgabe06.mugs2[j].preis.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        let button = document.createElement("button");
        button.innerHTML = "Add to cart";
        divXX.appendChild(button);
        button.addEventListener("click", handleClick);
        divProdukteGesamt2.appendChild(divXX);
    }
    document.getElementById("main")?.appendChild(divProdukteGesamt1);
    document.getElementById("main")?.appendChild(divProdukteGesamt2);
    let about = document.createElement("h2");
    about.innerHTML = "About us";
})(Aufgabe06 || (Aufgabe06 = {}));
//let test: number = 0;
let gesamtpreis = 0;
//Teilaufgabe1
function handleClick(_event) {
    //test++;
    //console.log(test);
    let number = document.getElementById("number");
    number.innerHTML = Number(number.innerHTML) + Number("1") + "";
    let shoppingbagNumber = document.getElementById("shoppingbagNumber");
    shoppingbagNumber.setAttribute("style", "visibility: visible");
    //let zwischenspeicher: number = 0; 
    let ausgewaehlterButton = _event.currentTarget;
    let preisZahl = ausgewaehlterButton.previousSibling?.firstChild;
    let preis = preisZahl.nodeValue;
    preis = preis.replace(",", ".");
    gesamtpreis += Number((parseFloat(preis)).toFixed(2));
    //zwischenspeicher = gesamtpreis;
    console.log("Der Gesamtpreis beträgt:" + gesamtpreis.toFixed(2) + "€");
}
//Teilaufgabe2 funktioniert leider nicht perfekt aber ich habs versucht :(
let anchorListenerCoffee = document.getElementById("coffeeButton");
anchorListenerCoffee.addEventListener("click", handleClickKategorieCoffee);
function handleClickKategorieCoffee(_event) {
    /* console.log("lel"); */
    document.getElementById("inhalt1").style.display = "block";
    document.getElementById("inhalt2").style.display = "none";
    /* let divElem: HTMLElement = <HTMLElement>document.getElementById("Produkt"); */
}
let anchorListenerMugs = document.getElementById("mugsButton");
anchorListenerMugs.addEventListener("click", handleClickKategorieMugs);
function handleClickKategorieMugs(_event) {
    document.getElementById("inhalt1").style.display = "none";
    document.getElementById("inhalt2").style.display = "block";
}
let anchorListenerAll = document.getElementById("allButton");
anchorListenerAll.addEventListener("click", handleClickKategorieAll);
function handleClickKategorieAll(_event) {
    document.getElementById("inhalt1").style.display = "block";
    document.getElementById("inhalt2").style.display = "block";
}
//# sourceMappingURL=TypescriptDatei2.js.map