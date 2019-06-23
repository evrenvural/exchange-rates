class Currency{
    static getK(firstOutput, secondOutput, callback){
        const url = `https://api.exchangeratesapi.io/latest?base=${firstOutput}`;
        let k = 1;

        Request.get(url)
        .then(data =>{
            k =  parseFloat(data.rates[secondOutput]);
            callback(k);
        })
        .catch(error =>{
            console.error(error);
        })
        
        
    }
}