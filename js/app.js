eventListeners();

function eventListeners(){
    $("#firstCurrency").change(getResult);
    $("#secondCurrency").change(getResult);
    $("#amount").change(getResult);
}

function getResult(){
    const firstOutput = $("#firstCurrency").val();
    const secondOutput = $("#secondCurrency").val();

    Currency.calculate(firstOutput, secondOutput);
}