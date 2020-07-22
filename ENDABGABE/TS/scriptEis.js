"use strict";
var Eis;
(function (Eis) {
    console.log("test");
    let nummer = 0;
    let anzahlWarenkorb = 0;
    if (Number(localStorage.getItem("anzahl")) != 0) {
        nummer = Number(localStorage.getItem("anzahl"));
    }
    let divContent = document.getElementById("contentEis");
    let divAuswahl = document.createElement("div");
    divAuswahl.id = "Auswahl";
    divContent.appendChild(divAuswahl);
    let divEissorte = document.createElement("div");
    divEissorte.id = "eissorte";
    divAuswahl.appendChild(divEissorte);
    let divBehälter = document.createElement("div");
    divBehälter.id = "behälter";
    divAuswahl.appendChild(divBehälter);
    let divExtras = document.createElement("div");
    divExtras.id = "extras";
    divAuswahl.appendChild(divExtras);
    /* createProducts(); */
    /* let itemNumber: number = 0; */
    function createProducts() {
        for (let i = 0; i < Eis.products.length; i++) {
            let divProdukt = document.createElement("div");
            if (Eis.products[i].kategorie == "Sorte") {
                divProdukt.setAttribute("class", "produkt");
                divEissorte.appendChild(divProdukt);
            }
            else if (Eis.products[i].kategorie == "Behälter") {
                divProdukt.setAttribute("class", "produkt");
                divBehälter.appendChild(divProdukt);
            }
            else if (Eis.products[i].kategorie == "Extras") {
                divProdukt.setAttribute("class", "produkt");
                divExtras.appendChild(divProdukt);
            }
            let divProduktschrift = document.createElement("div");
            divProduktschrift.setAttribute("class", "produktschrift");
            divProdukt.appendChild(divProduktschrift);
            let produktschrift = document.createElement("p");
            produktschrift.innerHTML = Eis.products[i].name;
            divProduktschrift.appendChild(produktschrift);
            let divPreis = document.createElement("div");
            divProdukt.appendChild(divPreis);
            let preis = document.createElement("p");
            preis.innerHTML = Eis.products[i].preis + "€";
            /* .toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR"
            }); */
            divPreis.appendChild(preis);
            let buttonHinzufügen = document.createElement("button");
            divProdukt.appendChild(buttonHinzufügen);
            buttonHinzufügen.id = "buttonHinzufügen";
            buttonHinzufügen.innerHTML = "auswählen";
            buttonHinzufügen.addEventListener("click", handleClick);
        }
    }
    Eis.createProducts = createProducts;
    // Ihre Bestellung erstellen
    let divBestellung = document.createElement("div");
    divBestellung.id = "bestellung";
    divContent.appendChild(divBestellung);
    let bestellungÜberschrift = document.createElement("h2");
    bestellungÜberschrift.id = "bestellungÜberschrift";
    bestellungÜberschrift.innerHTML = "Ihre Bestellung";
    divBestellung.appendChild(bestellungÜberschrift);
    let divAuswahlAusgabe = document.createElement("div");
    divAuswahlAusgabe.id = "auswahlAusgabe";
    divBestellung.appendChild(divAuswahlAusgabe);
    for (let i = 1; i <= nummer; i++) {
        if (localStorage.getItem("name" + i) != null) {
            let produkt = document.createElement("div");
            produkt.setAttribute("class", "produkt");
            divBestellung.appendChild(produkt);
            let produktschrift = document.createElement("p");
            produktschrift.setAttribute("class", "produktschrift");
            produktschrift.innerHTML = localStorage.getItem("name" + i);
            /* console.log(<string>localStorage.getItem("preis" + i)); */
            produkt.appendChild(produktschrift);
            let preisAuswahl = document.createElement("p");
            preisAuswahl.setAttribute("class", "preis");
            preisAuswahl.innerHTML = localStorage.getItem("preis" + i);
            produkt.appendChild(preisAuswahl);
            let buttonLöschen = document.createElement("button");
            buttonLöschen.setAttribute("class", "buttonLöschen");
            buttonLöschen.innerHTML = "X";
            buttonLöschen.addEventListener("click", handleDeleteButton);
            produkt.appendChild(buttonLöschen);
            produkt.setAttribute("divAnzahl", "" + i);
        }
    }
    function handleClick(_event) {
        nummer = 0;
        anzahlWarenkorb = Number(localStorage.getItem("anzahlWarenkorb"));
        if (anzahlWarenkorb >= 5) {
            alert("Sie können maximal 5 Kugeln Eis auswählen.");
        }
        else {
            anzahlWarenkorb++;
            localStorage.setItem("anzahlWarenkorb", "" + anzahlWarenkorb);
            if (Number(localStorage.getItem("anzahl")) != 0) {
                nummer = Number(localStorage.getItem("anzahl"));
            }
            console.log("Warenkorb:" + anzahlWarenkorb);
            nummer++;
            let ausgewähltesProdukt = _event.currentTarget;
            console.log(ausgewähltesProdukt);
            console.log(ausgewähltesProdukt.previousSibling?.firstChild);
            console.log(ausgewähltesProdukt.parentNode?.firstChild?.firstChild);
            let name = ausgewähltesProdukt.parentNode?.firstChild?.firstChild?.textContent;
            let preis = ausgewähltesProdukt.previousSibling?.firstChild?.textContent;
            let produkt = document.createElement("div");
            produkt.setAttribute("class", "produkt");
            divBestellung.appendChild(produkt);
            let produktschrift = document.createElement("p");
            produktschrift.setAttribute("class", "produktschrift");
            produktschrift.innerHTML = name;
            console.log(name);
            produkt.appendChild(produktschrift);
            let preisAuswahl = document.createElement("p");
            preisAuswahl.setAttribute("class", "preis");
            preisAuswahl.innerHTML = preis;
            produkt.appendChild(preisAuswahl);
            let buttonLöschen = document.createElement("button");
            buttonLöschen.setAttribute("class", "buttonLöschen");
            buttonLöschen.innerHTML = "X";
            buttonLöschen.addEventListener("click", handleDeleteButton);
            produkt.appendChild(buttonLöschen);
            console.log("nummer" + nummer);
            localStorage.setItem("anzahl", "" + nummer);
            console.log("localstorage nummer" + localStorage.getItem("anzahl"));
            produkt.setAttribute("divAnzahl", "" + nummer);
            localStorage.setItem("name" + nummer, name);
            localStorage.setItem("preis" + nummer, preis);
        }
        /* let current: HTMLElement = <HTMLElement>_event.currentTarget;
        console.log("Test2");
        localStorage.setItem("kategorie", products[itemNumber].kategorie);
        localStorage.setItem("name", products[itemNumber].name);
        localStorage.setItem("preis", "" + products[itemNumber].preis);
        localStorage.setItem("AnzahlItems", "" + itemNumber); */
    }
    function handleDeleteButton(_event) {
        let ausgewähltLöschen = _event.currentTarget;
        let ausgewähltDIVLöschen = ausgewähltLöschen.parentNode;
        console.log(ausgewähltLöschen);
        console.log(ausgewähltDIVLöschen);
        console.log(ausgewähltLöschen.previousSibling?.firstChild);
        console.log(ausgewähltLöschen.parentNode?.firstChild?.firstChild);
        let divAnzahl = ausgewähltDIVLöschen.getAttribute("divAnzahl");
        console.log("divanzahl" + divAnzahl);
        /* let name: string = <string>ausgewähltLöschen.parentNode?.firstChild?.firstChild?.textContent;
        let preis: string = <string>ausgewähltLöschen.previousSibling?.firstChild?.textContent;
        
        console.log(name); */
        /* console.log(localStorage.getItem(name + divAnzahl)); */
        localStorage.removeItem("name" + divAnzahl);
        console.log(localStorage.getItem(name + divAnzahl + ""));
        localStorage.removeItem("preis" + divAnzahl + "");
        /* localStorage.removeItem("name" + nummer);
        localStorage.removeItem("preis" + nummer); */
        let anzahl = Number(localStorage.getItem("anzahl"));
        //anzahl--;
        localStorage.setItem("anzahl", "" + anzahl);
        ausgewähltDIVLöschen.remove();
        //Warenkorbanzahl verringern
        let anzahlWarenkorbdelete = Number(localStorage.getItem("anzahlWarenkorb"));
        anzahlWarenkorbdelete--;
        localStorage.setItem("anzahlWarenkorb", "" + anzahlWarenkorbdelete);
        console.log("Warenkorb:" + anzahlWarenkorbdelete);
    }
    //Lieferdaten erstellen
    let divLieferdaten = document.createElement("div");
    divLieferdaten.id = "lieferdaten";
    divContent.appendChild(divLieferdaten);
    //LieferdatenÜberschrift 
    let lieferdatenÜberschrift = document.createElement("h1");
    lieferdatenÜberschrift.innerHTML = "Ihre Lieferdaten";
    divLieferdaten.appendChild(lieferdatenÜberschrift);
    //Lieferdaten Formular
    let formular = document.createElement("form");
    formular.id = "formular";
    formular.setAttribute("method", "get");
    formular.setAttribute("action", " ");
    divLieferdaten.appendChild(formular);
    //Vorname
    let labelVorname = document.createElement("label");
    formular.appendChild(labelVorname);
    let inputVorname = document.createElement("input");
    labelVorname.appendChild(inputVorname);
    inputVorname.setAttribute("type", "text");
    inputVorname.setAttribute("name", "vorname");
    inputVorname.setAttribute("placeholder", "Vorname");
    let break1 = document.createElement("br");
    formular.appendChild(break1);
    //Nachname
    let labelNachname = document.createElement("label");
    formular.appendChild(labelNachname);
    let inputNachname = document.createElement("input");
    labelNachname.appendChild(inputNachname);
    inputNachname.setAttribute("type", "text");
    inputNachname.setAttribute("name", "nachname");
    inputNachname.setAttribute("placeholder", "Nachname");
    let break2 = document.createElement("br");
    formular.appendChild(break2);
    //Straße
    let labelStraße = document.createElement("label");
    formular.appendChild(labelStraße);
    let inputStraße = document.createElement("input");
    labelStraße.appendChild(inputStraße);
    inputStraße.setAttribute("type", "text");
    inputStraße.setAttribute("name", "nachname");
    inputStraße.setAttribute("placeholder", "Straße und Hausnummer");
    let break3 = document.createElement("br");
    formular.appendChild(break3);
    //Stadt
    let labelStadt = document.createElement("label");
    formular.appendChild(labelStadt);
    let inputStadt = document.createElement("input");
    labelStadt.appendChild(inputStadt);
    inputStadt.setAttribute("type", "text");
    inputStadt.setAttribute("name", "stadt");
    inputStadt.setAttribute("placeholder", "Stadt");
    let break4 = document.createElement("br");
    formular.appendChild(break4);
    //Land
    let labelLand = document.createElement("label");
    formular.appendChild(labelLand);
    let inputLand = document.createElement("input");
    labelLand.appendChild(inputLand);
    inputLand.setAttribute("type", "text");
    inputLand.setAttribute("name", "land");
    inputLand.setAttribute("placeholder", "Land");
    //Bestellbutton
    let divButtonBestellen = document.createElement("div");
    divContent.appendChild(divButtonBestellen);
    divButtonBestellen.id = "buttonBestellen";
    let buttonBestellen = document.createElement("button");
    divButtonBestellen.appendChild(buttonBestellen);
    buttonBestellen.setAttribute("class", "button");
    buttonBestellen.id = "in";
    buttonBestellen.setAttribute("type", "button");
    buttonBestellen.innerHTML = "Bestellen";
    buttonBestellen.addEventListener("click", allesLöschen);
    //LocalStorage löschen
    function allesLöschen(_event) {
        localStorage.clear();
    }
})(Eis || (Eis = {}));
//# sourceMappingURL=scriptEis.js.map