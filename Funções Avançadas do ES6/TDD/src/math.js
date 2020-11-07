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
    printSum(req, res, a , b) {
        console.log(res.load('index', a+b)); // como testar se chamou a função dentro de outra função? ferramenta sinon faz esses testes
    }
}

module.exports = Math;