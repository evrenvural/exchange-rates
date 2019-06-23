class Currency{
    static async calculate(firstOutput, secondOutput){
        const url = `https://api.exchangeratesapi.io/latest?base=${firstOutput}`;
        let k;

        Request.get(url)
        .then(data =>{
            console.log(data.rates[secondOutput]);
        })
        .catch(error =>{
            console.error(error);
        })
        
    }
}