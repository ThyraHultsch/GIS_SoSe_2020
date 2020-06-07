namespace Aufgabe06 {

    export interface CoffeeArtikel {
        kategorie: string;
        bild: string;
        name: string;
        beschreibung: string; 
        preis: Number;
    }

    //Coffee
    let a1: CoffeeArtikel = { kategorie: "Coffee", bild: "Arabica.jpg", name: "Coffee Arabica", beschreibung: "Precious beans with great flavor", preis: 19.99};
    let a2: CoffeeArtikel = { kategorie: "Coffee", bild: "ArabicaBox.jpg", name: "Coffee XL Arabica", beschreibung: "Roasted coffee, 100 capsules", preis: 29.99};
    let a3: CoffeeArtikel = { kategorie: "Coffee", bild: "brasilebox.jpg", name: "Coffee XL Brasile", beschreibung: "Roasted coffee, 100 capsules", preis: 29.99};
    let a4: CoffeeArtikel = { kategorie: "Coffee", bild: "classico.jpg", name: "Coffee Classico", beschreibung: "Black as hell, strong as death and sweet as love", preis: 19.99};
    let a5: CoffeeArtikel = { kategorie: "Coffee", bild: "Espresso.jpg", name: "Coffee Espresso", beschreibung: "A liquid hug for your brain", preis: 19.99};
    let a6: CoffeeArtikel = { kategorie: "Coffee", bild: "nicaragua.jpg", name: "Coffee Nicaraqua", beschreibung: "Where you Bean all my life?", preis: 19.99};
    let a7: CoffeeArtikel = { kategorie: "Coffee", bild: "Colombia.jpg", name: "Coffee Colombia", beschreibung: "Like a hug from your mug", preis: 19.99};

    export let coffee2: CoffeeArtikel[] = [a1, a2, a3, a4, a5, a6, a7];

    export interface MugsArtikel {
        kategorie: string;
        bild: string;
        name: string;
        beschreibung: string; 
        preis: number;
    }
    //Mugs
    let a8: MugsArtikel = { kategorie: "Mugs", bild: "adventurecup.jpg", name: "Mug Adventure", beschreibung: "White porcelain, black adventure", preis: 9.99};
    let a9: MugsArtikel = { kategorie: "Mugs", bild: "blackmug.jpg", name: "Mug Black", beschreibung: "Simple, black mug with white print", preis: 9.99};
    let a10: MugsArtikel = { kategorie: "Mugs", bild: "pandamug.jpg", name: "Mug Panda", beschreibung: "Recycled bamboo mug to-go", preis: 9.99};
    let a11: MugsArtikel = { kategorie: "Mugs", bild: "campermug.jpg", name: "Mug Happy Camper", beschreibung: "White porcelain, happy camper design", preis: 9.99};
    let a12: MugsArtikel = { kategorie: "Mugs", bild: "glassmug.jpg", name: "Mug Glass", beschreibung: "Mug made out of glass", preis: 9.99};
    let a13: MugsArtikel = { kategorie: "Mugs", bild: "redmug.jpg", name: "Mug Red", beschreibung: "Classic red mug", preis: 9.99};
    let a14: MugsArtikel = { kategorie: "Mugs", bild: "rhinomug.jpg", name: "Mug Rhino", beschreibung: "White porcelain, black rhino print", preis: 9.99};
    let a15: MugsArtikel = { kategorie: "Mugs", bild: "coffeemug.jpg", name: "Mug Freshly brewed coffee", beschreibung: "White porcelain, black coffee quote", preis: 9.99};
   
    export let mugs2: MugsArtikel[] = [a8, a9, a10, a11, a12, a13, a14, a15];
}