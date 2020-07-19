namespace Eis {

    let divContent: HTMLElement = <HTMLElement>document.getElementById("ContentEis");
    let divAuswahl: HTMLElement = document.createElement("div");
    divAuswahl.id = "Auswahl";
    divContent.appendChild(divAuswahl);

    let divEissorte: HTMLElement = document.createElement("div");
    divEissorte.id = "eissorte";
    divAuswahl.appendChild(divEissorte);

    let divBehälter: HTMLElement = document.createElement("div");
    divEissorte.id = "behälter";
    divAuswahl.appendChild(divBehälter);

    let divExtras: HTMLElement = document.createElement("div");
    divEissorte.id = "extras";
    divAuswahl.appendChild(divExtras);

    export function createProducts(): void {

        for (let i: number = 0; i < products.length; i++) {
            let divProdukt: HTMLElement = document.createElement("div");
            if (products[i].kategorie == "Sorte") {
                divProdukt.setAttribute("class", "produkt");
                divEissorte.appendChild(divProdukt);
            } else if (products[i].kategorie == "Behälter") {
                divProdukt.setAttribute("class", "produkt");
                divBehälter.appendChild(divProdukt);
            } else if (products[i].kategorie == "Extras") {
                divProdukt.setAttribute("class", "produkt");
                divExtras.appendChild(divProdukt);
            }

            let divProduktschrift: HTMLElement = document.createElement("div");
            divProduktschrift.setAttribute("class", "produktschrift");
            divProdukt.appendChild(divProduktschrift);

            let produktschrift: HTMLElement = document.createElement("p");
            produktschrift.innerHTML = products[i].name;
            divProduktschrift.appendChild(produktschrift);

            let divPreis: HTMLElement = document.createElement("div");
            divProdukt.appendChild(divPreis);

            let preis: HTMLElement = document.createElement("p");
            preis.innerHTML = products[i].preis.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR"
            });
            divPreis.appendChild(preis);



        }
    }




}