namespace Aufgabe06 {

    let divProdukteGesamt1: HTMLElement = document.createElement("div");
    divProdukteGesamt1.setAttribute("class", "inhalt");
    divProdukteGesamt1.setAttribute("id", "inhalt1");

    let divProdukteGesamt2: HTMLElement = document.createElement("div");
    divProdukteGesamt2.setAttribute("class", "inhalt");
    divProdukteGesamt2.setAttribute("id", "inhalt2");

/*     let divKA: HTMLElement = document.createElement("div");
    divKA.setAttribute("class", "containerCoffee"); 
    divKA.setAttribute("id", "containerCoffee");  */

    let hDiv: HTMLElement = document.createElement ("h2");
    hDiv.setAttribute("id", "coffee");
    hDiv.innerHTML = "-Coffee-";

    /* divKA.appendChild(hDiv);
    divProdukteGesamt.appendChild(divKA); */
    

    for (let i: number = 0; i < coffee2.length; i++) {

        let divX: HTMLDivElement = document.createElement("div");
        divX.setAttribute("class", "Produkt");
        divX.setAttribute("id", "Produkt");
    
        let bildDiv: HTMLElement = document.createElement("img");
        bildDiv.setAttribute("src", coffee2[i].bild);
        divX.appendChild(bildDiv);

        let h4Div: HTMLElement = document.createElement("h4");
        divX.appendChild(h4Div);
        h4Div.innerHTML = coffee2[i].name;

        let pDiv: HTMLElement = document.createElement("p");
        divX.appendChild(pDiv);
        pDiv.innerHTML = coffee2[i].beschreibung;

        let h5Div: HTMLElement = document.createElement("h5");
        divX.appendChild(h5Div);
        h5Div.setAttribute("class", "preis");
        h5Div.innerHTML = coffee2[i].preis.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

        let button: HTMLElement = document.createElement("button");
        button.innerHTML = "Add to cart";
        divX.appendChild(button);
        button.addEventListener("click", handleClick);
        divProdukteGesamt1.appendChild(divX);
    }


    let divKAX: HTMLElement = document.createElement ("div");
    divKAX.setAttribute("class", "containerMugs"); 
    divKAX.setAttribute("id", "containerMugs"); 

    let hDivX: HTMLElement = document.createElement ("h2");
    hDivX.setAttribute("id", "mugs");
    hDivX.innerHTML = "-Mugs-";

    divKAX.appendChild(hDivX);
    /* divProdukteGesamt.appendChild(divKAX); */

    for (let j: number = 0; j < mugs2.length; j++) {

        let divXX: HTMLElement = document.createElement("div");
        divXX.setAttribute("class", "Produkt");
        

        let bildDivX: HTMLElement = document.createElement("img");
        bildDivX.setAttribute("src", mugs2[j].bild);
        divXX.appendChild(bildDivX);

        let h4DivX: HTMLElement = document.createElement("h4");
        divXX.appendChild(h4DivX);
        h4DivX.innerHTML = mugs2[j].name;

        let pDivX: HTMLElement = document.createElement("p");
        divXX.appendChild(pDivX);
        pDivX.innerHTML = mugs2[j].beschreibung;

        let h5DivX: HTMLElement = document.createElement("h5");
        divXX.appendChild(h5DivX);
        h5DivX.setAttribute("class", "preis");
        h5DivX.innerHTML = mugs2[j].preis.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

        let button: HTMLElement = document.createElement("button");
        button.innerHTML = "Add to cart";
        divXX.appendChild(button);
        button.addEventListener("click", handleClick);
        
        divProdukteGesamt2.appendChild(divXX);

    }

    document.getElementById("main")?.appendChild(divProdukteGesamt1);
    document.getElementById("main")?.appendChild(divProdukteGesamt2);

    let about: HTMLElement = document.createElement("h2");
    about.innerHTML = "About us";
   
}

//let test: number = 0;
let gesamtpreis: number = 0;
//Teilaufgabe1
function handleClick(_event: Event): void {

    //test++;
    //console.log(test);

    let number: HTMLElement = <HTMLElement> document.getElementById("number");
    number.innerHTML = Number(number.innerHTML) + Number("1") + "";
    let shoppingbagNumber: HTMLElement = <HTMLElement> document.getElementById("shoppingbagNumber");
    shoppingbagNumber.setAttribute("style", "visibility: visible");

    
    //let zwischenspeicher: number = 0; 
    let ausgewaehlterButton: HTMLElement = <HTMLElement>_event.currentTarget;
    
    let preisZahl: ChildNode = <ChildNode>ausgewaehlterButton.previousSibling?.firstChild;
    let preis: string = <string> preisZahl.nodeValue;
    preis = preis.replace(",", ".");
    gesamtpreis += Number((parseFloat(preis)).toFixed(2));
    //zwischenspeicher = gesamtpreis;
    console.log("Der Gesamtpreis beträgt:" + gesamtpreis.toFixed(2) + "€");

}


//Teilaufgabe2 funktioniert leider nicht perfekt aber ich habs versucht :(

let anchorListenerCoffee: HTMLElement = <HTMLElement> document.getElementById("coffeeButton");
anchorListenerCoffee.addEventListener("click", handleClickKategorieCoffee);

function handleClickKategorieCoffee(_event: Event): void {

    /* console.log("lel"); */
    (<HTMLElement>document.getElementById("inhalt1")).style.display = "block";
    (<HTMLElement>document.getElementById("inhalt2")).style.display = "none";

    /* let divElem: HTMLElement = <HTMLElement>document.getElementById("Produkt"); */
}


let anchorListenerMugs: HTMLElement = <HTMLElement> document.getElementById("mugsButton");
anchorListenerMugs.addEventListener("click", handleClickKategorieMugs);

function handleClickKategorieMugs(_event: Event): void {

    (<HTMLElement>document.getElementById("inhalt1")).style.display = "none";
    (<HTMLElement>document.getElementById("inhalt2")).style.display = "block";

}

let anchorListenerAll: HTMLElement = <HTMLElement> document.getElementById("allButton");
anchorListenerAll.addEventListener("click", handleClickKategorieAll);

function handleClickKategorieAll(_event: Event): void {

    (<HTMLElement>document.getElementById("inhalt1")).style.display = "block";
    (<HTMLElement>document.getElementById("inhalt2")).style.display = "block";

}

 