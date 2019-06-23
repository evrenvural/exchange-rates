eventListeners();

function eventListeners(){
    $("#firstCurrency").change(getResult);
    $("#secondCurrency").change(getResult);
    $("#amount").change(getResult);
}

function getResult(){
    const firstOutput = $("#firstCurrency").val();
    const secondOutput = $("#secondCurrency").val();
    const value = parseFloat($("#amount").val());

    Currency.getK(firstOutput, secondOutput, k =>{
        const result = value * k;
        UI.displayResult(result);
    });

}