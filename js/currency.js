class Currency {
    constructor(eur, usd, gbp) {
        this.eur = eur;
        this.usd = usd;
        this.gbp = gbp;
    }

}
async function currencyConvert(currencyType) {
    const apiHandler = new CurrencyApiHandler();
    const currencies = await apiHandler.getCurrencies();

    if (currencyType == "EUR") {
        const professionalEur = 25 / currencies.usd;
        const premiumEur = 60 / currencies.usd;

        document.getElementById("basic-h4").innerText = "0€";
        document.getElementById("professional-h4").innerText = professionalEur.toFixed(2) + "€";
        document.getElementById("premium-h4").innerText = premiumEur.toFixed(2) + "€";
        console.log("penelope");
    }
    if (currencyType == "GBP") {
        const professionalgbp = 25 / currencies.gbp;
        const premiumgbp = 60 / currencies.gbp;

        document.getElementById("basic-h4").innerText = "0£";
        document.getElementById("professional-h4").innerText = professionalgbp.toFixed(2) + "£";
        document.getElementById("premium-h4").innerText = premiumgbp.toFixed(2) + "£";
        console.log("penelope2");
    }
    if (currencyType == "USD") {
        document.getElementById("basic-h4").innerText = "0$";
        document.getElementById("professional-h4").innerText = "25$";
        document.getElementById("premium-h4").innerText = "60$";
        console.log("penelope3");
    }

}


document.getElementById("currency").addEventListener('click', () => {
    let currencyType = document.getElementById("currency").value;
    currencyConvert(currencyType);

})
