namespace Eis {

    let formData: FormData;

    let buttonActionBestellen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("in");
    buttonActionBestellen.addEventListener("click", handleClickBestellen);

    async function handleClickBestellen(): Promise<void> {

        formData = new FormData(document.forms[0]);
        let serverURL: string = "https://thyra.herokuapp.com";
        serverURL += "/bestellen";

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        serverURL += "?" + query.toString();


        let i: number = 1;

        let nummer: number = Number(localStorage.getItem("anzahl"));
        let reihenfolge: number = 1;
        while (i <= nummer) {
            if (localStorage.getItem("name" + i) != null) {
                console.log(i);
                serverURL += "&" + "Produkt" + reihenfolge + "=" + localStorage.getItem("name" + i);
                console.log(localStorage.getItem("name" + i));
                i++;
                reihenfolge++;
            } else {
                i++;
            }            

            console.log(serverURL);
        }
        console.log(serverURL);
        localStorage.clear();

        let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular");
        formular.reset();

        await fetch(serverURL);
    }




}