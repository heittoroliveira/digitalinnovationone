class Math{
    sum(a, b){
        return a + b;       
      
    };  
    sum2(a, b, callback){ // codigo assincrono
        setTimeout(() => {
            callback(a + b);
        },5);
      
    }
    multiply(a,b){
        return a * b;
    }
}

module.exports = Math;