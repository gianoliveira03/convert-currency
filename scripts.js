const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectToConvert = document.querySelector(".currency-select-to-convert");


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)
    const dolarToday = 4.99
    const euroToday = 5.4
    const libraToday = 6.3

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }



    

    if(currencySelectToConvert.value == "real"){
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue )
    }

    if(currencySelectToConvert.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue  )
    }



}

function changeCurrecyConvert(){

    const currencyNameConvert = document.querySelector("#currency-name-convert")
    const currecyImageConvert = document.querySelector(".currency-img-convert")

    if(currencySelectToConvert.value == "dolar") {
        currencyNameConvert.innerHTML = "Dólar Americano"
        currecyImageConvert.src = "./assets/logo.eua.png"

    }
        

     if(currencySelectToConvert.value == "real") {
        currencyNameConvert.innerHTML = "Real"
        currecyImageConvert.src = "./assets/logo.brasil.png"
    }
    

    convertValues()
}






function changeCurrecy(){
    const currencyName = document.querySelector("#currency-name")
    const currecyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currecyImage.src = "./assets/logo.eua.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currecyImage.src = "./assets/logo.euro.png"

    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currecyImage.src = "./assets/logo.libra.png"

    }

    convertValues()
}


currencySelectToConvert.addEventListener("change", changeCurrecyConvert);
currencySelect.addEventListener("change",changeCurrecy );
convertButton.addEventListener("click", convertValues);
