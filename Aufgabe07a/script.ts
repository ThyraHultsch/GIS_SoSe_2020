namespace Aufgabe07a {



    /* Da meine Website durch die letzten Aufgaben wortwörtlich zu Frankenstein mutiert ist und mit jeder Woche immer schlechter
    und schlechter wurde und sich Fehler, Dopplungen und eine verwirrende Struktur häuften, habe ich diese Woche meinen Shop mit
    Jonathans Hilfe nocheinmal von Grund auf komplett neu programmiert und aufgebaut. Da ich ziemlich viel Hilfe von ihm benötigte um eine 
    gute Struktur der Seite hinzubekommen um auch Aufgabe 7 machen zu können ähnelt sich unser Code teilweise.  */



    let divCoffee: HTMLElement = <HTMLElement> document.getElementById("containerCoffeeID");
    let divMugs: HTMLElement = <HTMLElement> document.getElementById("containerMugsID");

    export function createArticles(): void {

        for (let i: number = 0; i < articles.length; i++) {
            let divElem: HTMLElement = document.createElement("div");
            if (articles[i].kategorie == "Coffee") {
                divElem.setAttribute("class", "artikelCoffee");
                divElem.id = "Coffee" + i;
                divCoffee.appendChild(divElem);
            }
            else {
                divElem.setAttribute("class", "artikelMugs");
                divElem.id = "Mugs" + i;
                divMugs.appendChild(divElem);
            }

            let imgElem: HTMLElement = document.createElement("img");
            imgElem.setAttribute("src", articles[i].imgsrc);
            imgElem.setAttribute("alt", articles[i].label);
            divElem.appendChild(imgElem);

            let pName: HTMLElement = document.createElement("p");
            divElem.appendChild(pName);
            pName.innerHTML = articles[i].label;

            let pElem: HTMLElement = document.createElement("p");
            divElem.appendChild(pElem);
            pElem.innerHTML = articles[i].description;

            let pElem2: HTMLElement = document.createElement("p");
            divElem.appendChild(pElem2);
            pElem2.setAttribute("class", "preis");
            pElem2.innerHTML = articles[i].price.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR"
            });

            let buttonElem: HTMLElement = document.createElement("button");
            buttonElem.innerHTML = "Add to cart";
            buttonElem.addEventListener("click", handleClick);
            divElem.appendChild(buttonElem);
        }
    }

    //Teilaufgabe1

    let gesamtpreis: number = 0; 

    function handleClick(_event: Event): void {
        let current: HTMLElement = <HTMLElement>_event.currentTarget;
        if (current.previousSibling) {
            let child: ChildNode = <ChildNode> current.previousSibling.firstChild;
            let preis: string = <string> child.nodeValue;
            //preis = preis.replace(",", ".");
            preis = preis.substring(0, preis.length - 1);

            if (preis) {
                gesamtpreis = Number((gesamtpreis + parseFloat(preis)).toFixed(2));
                console.log("Gesamtpreis:" + gesamtpreis + "€");
                localStorage.setItem("Gesamtpreis", "" + gesamtpreis);
            }

            const shoppingbagNumber: HTMLElement = <HTMLElement> document.getElementById("shoppingbagNumber");
            shoppingbagNumber.setAttribute("style", "visibility: visible");

            const number: HTMLElement = <HTMLElement> document.getElementById("number");
            number.innerHTML = Number(number.innerHTML) + Number("1") + "";
        }

        let itemNumber: number = 0;
        let divParent: HTMLElement = <HTMLElement>current.parentNode;
        let childNodes: NodeListOf<ChildNode> = divParent.childNodes;
        let childNode: HTMLImageElement = <HTMLImageElement>childNodes[0];
        localStorage.setItem("img" + itemNumber, <string>childNode.src);
        localStorage.setItem("title" + itemNumber, <string>childNodes[2].textContent);
        localStorage.setItem("beschreibung" + itemNumber, <string>childNodes[4].textContent);
        localStorage.setItem("preis" + itemNumber, <string>childNodes[6].textContent);
        itemNumber++;
        localStorage.setItem("AnzahlItems", "" + itemNumber);
        localStorage.setItem("gesamtpreis", "" + gesamtpreis);

    }


    let anchorListenerCoffee: HTMLElement = <HTMLElement> document.getElementById("coffeeButton");
    anchorListenerCoffee.addEventListener("click", handleClickCoffee);

    function handleClickCoffee(_event: Event): void {
        hideDivs (false, "Coffee", "coffee");
        hideDivs (true, "Mugs", "mugs");
    }

    let anchorListenerMugs: HTMLElement = <HTMLElement> document.getElementById("mugsButton");
    anchorListenerMugs.addEventListener("click", handleClickMugs);

    function handleClickMugs(_event: Event): void {
        hideDivs (true, "Coffee", "coffee");
        hideDivs (false, "Mugs", "mugs");
    }

    let anchorListenerAll: HTMLElement = <HTMLElement> document.getElementById("allButton");
    anchorListenerAll.addEventListener("click", handleClickAll);

    function handleClickAll(_event: Event): void {
        hideDivs (false, "Coffee", "coffee");
        hideDivs (false, "Mugs", "mugs");
    }

    function hideDivs(_hide: boolean, _divId: string, _headerId: string): void {
        let divId: string;
        for (let i: number = 0; i < articles.length; i++) {
            if (articles[i].kategorie == _divId) {
                divId = _divId + i;
                let divArticle: HTMLElement = <HTMLElement> document.getElementById(divId);
                divArticle.hidden = _hide;
            }
        }
        let headerElem: HTMLElement = <HTMLElement> document.getElementById(_headerId);
        headerElem.hidden = _hide;
    }

}