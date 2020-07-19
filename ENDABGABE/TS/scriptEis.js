"use strict";
var Eis;
(function (Eis) {
    let divContent = document.getElementById("ContentEis");
    let divAuswahl = document.createElement("div");
    divAuswahl.id = "Auswahl";
    divContent.appendChild(divAuswahl);
    let divEissorte = document.createElement("div");
    divEissorte.id = "eissorte";
    divAuswahl.appendChild(divEissorte);
    let divBehälter = document.createElement("div");
    divEissorte.id = "behälter";
    divAuswahl.appendChild(divBehälter);
    let divExtras = document.createElement("div");
    divEissorte.id = "extras";
    divAuswahl.appendChild(divExtras);
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
            preis.innerHTML = Eis.products[i].preis.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR"
            });
            divPreis.appendChild(preis);
        }
    }
    Eis.createProducts = createProducts;
})(Eis || (Eis = {}));
//# sourceMappingURL=scriptEis.js.map