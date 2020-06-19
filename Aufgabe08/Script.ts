namespace Aufgabe08 {

    

    let senden: HTMLButtonElement = <HTMLButtonElement> document.getElementById("senden");
    senden.addEventListener("click", handleClick);

    function handleClick(): void {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://thyra.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        communicate(url);
       
    }
    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response =  await fetch(_url);
        let responseText: string = await response.text();
        console.log(responseText);
    }
 
}