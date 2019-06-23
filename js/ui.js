class UI{
    static displayResult(result){
        $("#outputResult").val(result);
    }
    static changeFirstWord(word){
        $("#outputFirst").html(word);
    }
    static changeSecondWord(word){
        $("#outputSecond").html(word);
    }
}