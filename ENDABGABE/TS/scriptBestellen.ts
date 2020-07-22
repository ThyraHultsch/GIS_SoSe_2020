namespace Eis {

    let formData: FormData;

    let buttonActionBestellen: HTMLButtonElement = <HTMLButtonElement> document.getElementById("in");
    buttonActionBestellen.addEventListener("click", handleClickBestellen);

    async function handleClickBestellen(): Promise<void> {

        formData = new FormData(document.forms[0]);
        let serverURL: string = "https://thyra.herokuapp.com"; 
        serverURL += "/bestellen";

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        serverURL += "?" + query.toString;

        let formular: HTMLFormElement = <HTMLFormElement> document.getElementById("formular");
        formular.reset();

        await fetch(serverURL);
    }

    let buttonActionAnzeigen: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonAnzeigen");
    buttonActionAnzeigen.addEventListener("click", handleClickAnzeigen);

    async function handleClickAnzeigen(): Promise<void> {
        let serverURL: string = "https://thyra.herokuapp.com";
        serverURL += "/anzeigen";

        let ausgabe: Response = await fetch(serverURL);
        console.log(ausgabe);
        let datenbankausgabe: string = await ausgabe.json();

        let serverResponse: HTMLElement = <HTMLElement> document.getElementById("DatenbankAusgabe");
        serverResponse.innerHTML = datenbankausgabe;
        console.log(datenbankausgabe);
    }



}