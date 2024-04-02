const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectToConvert = document.querySelector(".currency-select-to-convert");


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor para conversor
    const currencyValueConverted = document.querySelector(".currency-value") //Resultado já convertido

    
    const dolarToday = 4.99
    const euroToday = 5.4
    const libraToday = 6.3


    if(currencySelectToConvert.value == "real-to"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue )
        }
    
        if(currencySelectToConvert.value == "dolar-to"){
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue  )
        }

        if(currencySelectToConvert.value == "libra-to"){
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue  )
        }

        if(currencySelectToConvert.value == "euro-to"){
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue  )
        }
        
    //  CONVERTENDO REAL PARA OUTRAS MOEDAS

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelect.value == "dolar") { //Se o dolar estiver selecionado entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {  //Se o euro estiver selecionado entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") { //Se a libra estiver selecionado entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    //CONVERTER DOLAR PARA OUTRAS MOEDAS

    if (currencySelectToConvert.value == "dolar-to" && currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "dolar-to" && currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }

    if (currencySelectToConvert.value == "dolar-to" && currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 0.92)
    }

    if (currencySelectToConvert.value == "dolar-to" && currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 0.79)
    }

    
    //EURO PARA OUTRAS MOEDAS

    if (currencySelectToConvert.value == "euro-to" && currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "euro-to" && currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }

    if(currencySelectToConvert.value == "euro-to" && currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 1.09)
        
    }

    if (currencySelectToConvert.value == "euro-to" && currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 0.86)
    }
    
     //LIBRA PARA OUTRAS MOEDAS

     if(currencySelectToConvert.value == "libra-to" && currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
     }

     if(currencySelectToConvert.value == "libra-to" && currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday)
     }

     if(currencySelectToConvert.value == "libra-to" && currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 1.26)
     }

     if(currencySelectToConvert.value == "libra-to" && currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 1.16)
     }


}




function changeCurrecyConvert(){

    const currencyNameConvert = document.querySelector("#currency-name-convert")
    const currecyImageConvert = document.querySelector(".currency-img-convert")

    if(currencySelectToConvert.value == "dolar-to") {
        currencyNameConvert.innerHTML = "Dólar Americano"
        currecyImageConvert.src = "./assets/logo.eua.png"

    }
        

    if(currencySelectToConvert.value == "real-to") {
        currencyNameConvert.innerHTML = "Real"
        currecyImageConvert.src = "./assets/logo.brasil.png"
    }
    
    if(currencySelectToConvert.value == "euro-to") {
        currencyNameConvert.innerHTML = "Euro"
        currecyImageConvert.src = "./assets/logo.euro.png"
    }

    if(currencySelectToConvert.value == "libra-to") {
        currencyNameConvert.innerHTML = "Libra"
        currecyImageConvert.src = "./assets/logo.libra.png"
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

    if(currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currecyImage.src = "./assets/logo.brasil.png"
    }

    convertValues()
}


currencySelectToConvert.addEventListener("change", changeCurrecyConvert);
currencySelect.addEventListener("change",changeCurrecy );
convertButton.addEventListener("click", convertValues);
