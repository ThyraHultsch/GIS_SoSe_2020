namespace Aufgabe11{

    let formData: FormData;

    let buttonActionHtml: HTMLButtonElement = <HTMLButtonElement> document.getElementById("rein");
    buttonActionHtml.addEventListener("click", handleClickRein);

    let buttonActionJson: HTMLButtonElement = <HTMLButtonElement> document.getElementById("zeigen");
    buttonActionHtml.addEventListener("click", handleClickZeigen);

    async function handleClickRein(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let serverURL: string = "https://thyra.herokuapp.com";
        serverURL += "/rein";

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        serverURL += "?" + query.toString();

        let formular: HTMLFormElement = <HTMLFormElement> document.getElementById("formid");
        formular.reset();

        await fetch(serverURL);
    }

    async function handleClickZeigen(): Promise<void> {

        let serverURL: string = "https://thyra.herokuapp.com";
        serverURL += "/zeigen";

        let ausgabe: Response = await fetch(serverURL);
        console.log(ausgabe);
        let datenbankausgabe: string = await ausgabe.json();

        let serverResponse: HTMLElement = <HTMLElement> document.getElementById("DatenbankAusgabe");
        serverResponse.innerHTML = datenbankausgabe;
        console.log(datenbankausgabe);


    }
}