"use strict";
var Aufgabe07a;
(function (Aufgabe07a) {
    let divCoffee = document.getElementById("containerCoffeeID");
    let divMugs = document.getElementById("containerMugsID");
    function createArticles() {
        for (let i = 0; i < Aufgabe07a.articles.length; i++) {
            let divElem = document.createElement("div");
            if (Aufgabe07a.articles[i].kategorie == "Coffee") {
                divElem.setAttribute("class", "artikelCoffee");
                divElem.id = "Coffee" + i;
                divCoffee.appendChild(divElem);
            }
            else {
                divElem.setAttribute("class", "artikelMugs");
                divElem.id = "Mugs" + i;
                divMugs.appendChild(divElem);
            }
            let imgElem = document.createElement("img");
            imgElem.setAttribute("src", Aufgabe07a.articles[i].imgsrc);
            imgElem.setAttribute("alt", Aufgabe07a.articles[i].label);
            divElem.appendChild(imgElem);
            let pName = document.createElement("p");
            divElem.appendChild(pName);
            pName.innerHTML = Aufgabe07a.articles[i].label;
            let pElem = document.createElement("p");
            divElem.appendChild(pElem);
            pElem.innerHTML = Aufgabe07a.articles[i].description;
            let pElem2 = document.createElement("p");
            divElem.appendChild(pElem2);
            pElem2.setAttribute("class", "preis");
            pElem2.innerHTML = Aufgabe07a.articles[i].price.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR"
            });
            let buttonElem = document.createElement("button");
            buttonElem.innerHTML = "Add to cart";
            buttonElem.addEventListener("click", handleClick);
            divElem.appendChild(buttonElem);
        }
    }
    Aufgabe07a.createArticles = createArticles;
    //Teilaufgabe1
    let gesamtpreis = 0;
    function handleClick(_event) {
        let current = _event.currentTarget;
        if (current.previousSibling) {
            let child = current.previousSibling.firstChild;
            let preis = child.nodeValue;
            //preis = preis.replace(",", ".");
            preis = preis.substring(0, preis.length - 1);
            if (preis) {
                gesamtpreis = Number((gesamtpreis + parseFloat(preis)).toFixed(2));
                console.log("Gesamtpreis:" + gesamtpreis + "€");
                localStorage.setItem("Gesamtpreis", "" + gesamtpreis);
            }
            const shoppingbagNumber = document.getElementById("shoppingbagNumber");
            const number = document.getElementById("number");
            number.innerHTML = Number(number.innerHTML) + Number("1") + "";
        }
        let itemNumber = 0;
        let divParent = current.parentNode;
        let childNodes = divParent.childNodes;
        let childNode = childNodes[0];
        localStorage.setItem("img" + itemNumber, childNode.src);
        localStorage.setItem("title" + itemNumber, childNodes[2].textContent);
        localStorage.setItem("beschreibung" + itemNumber, childNodes[4].textContent);
        localStorage.setItem("preis" + itemNumber, childNodes[6].textContent);
        itemNumber++;
        localStorage.setItem("AnzahlItems", "" + itemNumber);
        localStorage.setItem("gesamtpreis", "" + gesamtpreis);
    }
    let anchorListenerCoffee = document.getElementById("coffeeButton");
    anchorListenerCoffee.addEventListener("click", handleClickCoffee);
    function handleClickCoffee(_event) {
        hideDivs(false, "Coffee", "coffee");
        hideDivs(true, "Mugs", "mugs");
    }
    let anchorListenerMugs = document.getElementById("mugsButton");
    anchorListenerMugs.addEventListener("click", handleClickMugs);
    function handleClickMugs(_event) {
        hideDivs(true, "Coffee", "coffee");
        hideDivs(false, "Mugs", "mugs");
    }
    let anchorListenerAll = document.getElementById("allButton");
    anchorListenerAll.addEventListener("click", handleClickAll);
    function handleClickAll(_event) {
        hideDivs(false, "Coffee", "coffee");
        hideDivs(false, "Mugs", "mugs");
    }
    function hideDivs(_hide, _divId, _headerId) {
        let divId;
        for (let i = 0; i < Aufgabe07a.articles.length; i++) {
            if (Aufgabe07a.articles[i].kategorie == _divId) {
                divId = _divId + i;
                let divArticle = document.getElementById(divId);
                divArticle.hidden = _hide;
            }
        }
        let headerElem = document.getElementById(_headerId);
        headerElem.hidden = _hide;
    }
})(Aufgabe07a || (Aufgabe07a = {}));
//# sourceMappingURL=script.js.map