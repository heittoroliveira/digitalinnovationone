const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 5000)
})




// IIFE funcção auto invocável
// no momento que o javascript chega nessa linha ele ja chama ela

// o ASYNC informa para o interpretador que ali dentro da função será assincrono e seu retorno é automaticamente uma promise

(function(){

})()


// ou
const algumacoisa = funciton (){

}
algumacoisa();



(async function(){
    console.log('Ola mundo');
})()
// as funções marcadas com o "async"  traduz para o compilador ao similar ao codigo a baixo envolopa o codigo em uma promise e retorna ela
(function(){
    return new Promise((resolve, reject) =>{
        console.log('Ola mundo');
        resolve(); // se naochamar o resolve nunca vai resover
    })    
})()

// com async quando se uma função nao tem return ela retorna undefined

console.log('Begin')
// fomaras para consumir promisses
promise.then((text) => console.log(text))
// Or
promise.then(console.log)
// Or
promise.then(
    (res) => setTimeout(() => console.log(res), 5000),
    (rej) => console.error(rej)
)