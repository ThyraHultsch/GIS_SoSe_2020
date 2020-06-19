namespace Aufgabe08 {

    let formData: FormData; 

    let senden: HTMLButtonElement = <HTMLButtonElement> document.getElementById("senden");
    senden.addEventListener("click", handleClick);

    async function handleClick(): Promise<void> {

        formData = new FormData(document.forms[0]);
        let url: string = "https://thyra.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        let response: Response =  await fetch(url);
        let responseText: string = await response.text();
        console.log(responseText);
    }

}