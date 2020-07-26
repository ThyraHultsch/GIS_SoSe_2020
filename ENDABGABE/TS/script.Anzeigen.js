"use strict";
var Eis;
(function (Eis) {
    let buttonActionAnzeigen = document.getElementById("buttonAnzeigen");
    buttonActionAnzeigen.addEventListener("click", handleClickAnzeigen);
    async function handleClickAnzeigen() {
        let serverURL = "http://localhost:8100";
        serverURL += "/anzeigen";
        let ausgabe = await fetch(serverURL);
        console.log(ausgabe);
        let datenbankausgabeJson = await ausgabe.json();
        let datenbankausgabeFinal = await JSON.parse(datenbankausgabeJson);
        /* console.log(datenbankausgabeJson); */
        let serverResponse = document.getElementById("DatenbankAusgabe");
        serverResponse.innerHTML = "";
        /* serverResponse.innerHTML = datenbankausgabe;
        console.log(datenbankausgabe); */
        for (let a = 0; a < datenbankausgabeFinal.length; a++) {
            //Divs erstellen
            console.log("Funktioniert der BUms hier endlich?");
            //Einzelbestellung
            let bestellungEinzeln = document.createElement("div");
            bestellungEinzeln.setAttribute("class", "bestellungEinzeln");
            serverResponse.appendChild(bestellungEinzeln);
            //Ausgabe Vorname
            let bestellungVorname = document.createElement("div");
            bestellungVorname.setAttribute("class", "divAnzeigeBestellung");
            bestellungEinzeln.appendChild(bestellungVorname);
            if (datenbankausgabeFinal[a].vorname != "") {
                let ausgabeVorname = document.createElement("p");
                ausgabeVorname.innerHTML = "Vorname: " + datenbankausgabeFinal[a].vorname;
                bestellungVorname.appendChild(ausgabeVorname);
            }
            else {
                let ausgabeVorname = document.createElement("i");
                ausgabeVorname.innerHTML = "Vorname: " + "Kein Vorname angegeben";
                bestellungVorname.appendChild(ausgabeVorname);
            }
            //Ausgabe Nachname
            let bestellungNachname = document.createElement("div");
            bestellungNachname.setAttribute("class", "divAnzeigeBestellung");
            bestellungEinzeln.appendChild(bestellungNachname);
            if (datenbankausgabeFinal[a].nachname != "") {
                let ausgabeNachname = document.createElement("p");
                ausgabeNachname.innerHTML = "Nachname: " + datenbankausgabeFinal[a].nachname;
                bestellungNachname.appendChild(ausgabeNachname);
            }
            else {
                let ausgabeNachname = document.createElement("i");
                ausgabeNachname.innerHTML = "Nachname: " + "Kein Nachname angegeben";
                bestellungNachname.appendChild(ausgabeNachname);
            }
            //Ausgabe Straße
            let bestellungStraße = document.createElement("div");
            bestellungStraße.setAttribute("class", "divAnzeigeBestellung");
            bestellungEinzeln.appendChild(bestellungStraße);
            if (datenbankausgabeFinal[a].straße != "") {
                let ausgabeStraße = document.createElement("p");
                ausgabeStraße.innerHTML = "Straße: " + datenbankausgabeFinal[a].straße;
                bestellungStraße.appendChild(ausgabeStraße);
            }
            else {
                let ausgabeStraße = document.createElement("i");
                ausgabeStraße.innerHTML = "Straße: " + "Keine Straße angegeben";
                bestellungStraße.appendChild(ausgabeStraße);
            }
            //Ausgabe Stadt
            let bestellungStadt = document.createElement("div");
            bestellungStadt.setAttribute("class", "divAnzeigeBestellung");
            bestellungEinzeln.appendChild(bestellungStadt);
            if (datenbankausgabeFinal[a].stadt != "") {
                let ausgabeStadt = document.createElement("p");
                ausgabeStadt.innerHTML = "Stadt: " + datenbankausgabeFinal[a].stadt;
                bestellungStadt.appendChild(ausgabeStadt);
            }
            else {
                let ausgabeStadt = document.createElement("i");
                ausgabeStadt.innerHTML = "Stadt: " + "Keine Stadt angegeben";
                bestellungStadt.appendChild(ausgabeStadt);
            }
            //Ausgabe Land
            let bestellungLand = document.createElement("div");
            bestellungLand.setAttribute("class", "divAnzeigeBestellung");
            bestellungEinzeln.appendChild(bestellungLand);
            if (datenbankausgabeFinal[a].land != "") {
                let ausgabeLand = document.createElement("p");
                ausgabeLand.innerHTML = "Land: " + datenbankausgabeFinal[a].land;
                bestellungLand.appendChild(ausgabeLand);
            }
            else {
                let ausgabeLand = document.createElement("i");
                ausgabeLand.innerHTML = "Land: " + "Kein Land angegeben";
                bestellungLand.appendChild(ausgabeLand);
            }
            console.log(datenbankausgabeFinal[a]);
            //Ausgabe Produkte
            let bestellungArtikel = document.createElement("div");
            bestellungArtikel.setAttribute("class", "divAnzeigeBestellung");
            bestellungEinzeln.appendChild(bestellungArtikel);
            //Wenn nicht null ist dann Divs füllen oder Alternativtext
            console.log(datenbankausgabeFinal[a].Produkt4);
            //Produkt 1
            if (datenbankausgabeFinal[a].Produkt1 != undefined && datenbankausgabeFinal[a].Produkt1 != "null") {
                let produkt1 = document.createElement("p");
                produkt1.innerHTML = "1: " + datenbankausgabeFinal[a].Produkt1;
                bestellungArtikel.appendChild(produkt1);
            }
            else {
                let produkt1 = document.createElement("i");
                produkt1.innerHTML = "1: " + "Es wurde keine Bestellung abgegeben.";
                bestellungArtikel.appendChild(produkt1);
            }
            //Produkt 2
            if (datenbankausgabeFinal[a].Produkt2 != undefined && datenbankausgabeFinal[a].Produkt2 != "null") {
                let produkt2 = document.createElement("p");
                produkt2.innerHTML = "2: " + datenbankausgabeFinal[a].Produkt2;
                bestellungArtikel.appendChild(produkt2);
            }
            //Produkt 3
            if (datenbankausgabeFinal[a].Produkt3 != undefined && datenbankausgabeFinal[a].Produkt3 != "null") {
                let produkt3 = document.createElement("p");
                produkt3.innerHTML = "3: " + datenbankausgabeFinal[a].Produkt3;
                bestellungArtikel.appendChild(produkt3);
            }
            //Produkt 4
            if (datenbankausgabeFinal[a].Produkt4 != undefined && datenbankausgabeFinal[a].Produkt4 != "null") {
                let produkt4 = document.createElement("p");
                produkt4.innerHTML = "4: " + datenbankausgabeFinal[a].Produkt4;
                bestellungArtikel.appendChild(produkt4);
            }
            //Produkt 5
            if (datenbankausgabeFinal[a].Produkt5 != undefined && datenbankausgabeFinal[a].Produkt5 != "null") {
                let produkt5 = document.createElement("p");
                produkt5.innerHTML = "5: " + datenbankausgabeFinal[a].Produkt5;
                bestellungArtikel.appendChild(produkt5);
                produkt5.setAttribute("class", "nachLetztemProdukt");
            }
            let idBestellung = document.createElement("p");
            idBestellung.innerHTML = "ID: " + datenbankausgabeFinal[a]._id;
            bestellungEinzeln.appendChild(idBestellung);
            idBestellung.setAttribute("idBestellung", datenbankausgabeFinal[a]._id);
            let buttonDelete = document.createElement("button");
            buttonDelete.setAttribute("class", "buttonLöschen2");
            buttonDelete.innerHTML = "X";
            buttonDelete.addEventListener("click", handleDeleteButton2);
            bestellungEinzeln.appendChild(buttonDelete);
        }
        async function handleDeleteButton2(_event) {
            let current = _event.currentTarget;
            let idCurrent = current.previousSibling;
            let idCurrentString = idCurrent.getAttribute("idBestellung");
            let serverURL = "http://localhost:8100";
            serverURL = serverURL + "/loeschen";
            serverURL = serverURL + "?" + "id=" + idCurrentString;
            console.log(serverURL);
            current.parentElement?.remove();
            await fetch(serverURL);
        }
    }
})(Eis || (Eis = {}));
//# sourceMappingURL=script.Anzeigen.js.map