namespace Eis {


    export interface Produkte {
        kategorie: string;
        name: string;
        preis: number;
    }
   export let products: Produkte[];
    loadArticles("../TS/produkte.json");

    async function loadArticles(_url: RequestInfo): Promise <void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        products = await JSON.parse(JSON.stringify(jsonArray));
        createProducts();
    }

    /* let a1: Produkte = {kategorie: "Sorte", name: "Erdbeere" , preis: 2 };
    let a2: Produkte = {kategorie: "Sorte", name: "Himbeere", preis: 2 };
    let a3: Produkte = {kategorie: "Sorte", name: "Mango", preis: 2 };
    let a4: Produkte = {kategorie: "Sorte", name: "Melone", preis: 2 };
    let a5: Produkte = {kategorie: "Sorte", name: "Schokolade", preis: 2 };
    let a6: Produkte = {kategorie: "Sorte", name: "Zitrone", preis: 2 };
    let a7: Produkte = {kategorie: "Sorte", name: "Amarena", preis: 2 };
    let a8: Produkte = {kategorie: "Sorte", name: "Vanille", preis: 2 };

    let a9: Produkte = {kategorie: "Behälter", name: "Waffel", preis: 0.50 };
    let a10: Produkte = {kategorie: "Behälter", name: "Plastikbecher", preis: 0.50 };
    let a11: Produkte = {kategorie: "Behälter", name: "Pappbecher", preis: 0.50 };

    let a12: Produkte = {kategorie: "Extras", name: "Streusel", preis: 1 };
    let a13: Produkte = {kategorie: "Extras", name: "Schokoladensoße", preis: 1 };
    let a14: Produkte = {kategorie: "Extras", name: "Krokant", preis: 1 };

    export let products: Produkte[] = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14]; */

}