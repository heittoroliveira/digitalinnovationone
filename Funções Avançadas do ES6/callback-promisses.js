// COMO ERA FEITO AS REQUISIÇOES ANTIGAMENTE NO JAVASCRIPT

function doSomething(callback){
    setTimeout(function() {
        callback('First data');
    },1000);
}

function doOtherThing(callback){
    setTimeout(function(){
        callback('Second data');
    }, 1000);
}
// callbackhell
function doAll(){
    try {
        doSomething(function(data){
            var processedData = data.split('');
            try {
                doOtherThing(function(data2){
                    var processedData2 = data2.split('');
                    try {
                        setTimeout(function(){
                            console.log(processedData,processedData2)
                        }, 1000);
                    } catch(err){
                         // handler error
                    }
                });
            } catch(err){
                // handler error
            }
        });
    } catch(err){
         // handler error
    }
}

//doAll();

// ============================================================
// PROMISSES
// ============================================================

// UMA PROMISSES PODE TER 3 ESTADOS (pending, fulfilled, rejected)

const doSomethingPromise = new Promise((resolve, reject) => {
   // throw new Error('Something went wrong'); // simulando um erro
    setTimeout(function(){
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Second data');
    }, 1000);
});

doSomethingPromise
    .then(data => { 
        console.log(data); 
        return doOtherThingPromise 
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log(error));


// FUNÇÃO QUE GERA A PROMISSE PRA RETORNAR O TEMPO ESPERADO.

    const doSomethingPromise2 = () => new Promise((resolve, reject) => {
        // throw new Error('Something went wrong'); // simulando um erro
         setTimeout(function(){
             resolve('TREE data');
         }, 1000);
     });
     
     const doOtherThingPromise2 = () =>  new Promise((resolve, reject) => {
         setTimeout(function(){
             resolve('fOUR data');
         }, 1000);
     });
     
     doSomethingPromise2()
         .then(data => { 
             console.log(data); 
             return doOtherThingPromise2(); 
         })
         .then(data2 => console.log(data2))
         .catch(error => console.log('oPS',error));

// EX 3
// =========================================================
const doSomethingPromise3 = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('five data');
    }, 1000);
});

const doOtherThingPromise3 = () =>  new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('six data');
    }, 1000);
});

doSomethingPromise3()
    .then(data => { 
        console.log(data.split('')); 
        return doOtherThingPromise3(); 
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('oPS',error)); 

// EX 4
// =========================================================
// promisse all permite rodar as promisses ao mesmo tempo de forma não sequenciada.

const doSomethingPromise4 = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('seven data');
    }, 1000);
});

const doOtherThingPromise4 = () =>  new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('eight data');
    }, 1000);
});

Promise.all([doSomethingPromise4(), doOtherThingPromise4()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err);
});

// EX 5
// =========================================================
// Promise.race exibe os dados de quem retorna primeiro.

const doSomethingPromise5 = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('nine data');
    }, 1500);
});

const doOtherThingPromise5 = () =>  new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('ten data');
    }, 1000);
});

Promise.race([doSomethingPromise5(), doOtherThingPromise5()]).then(data => {
   console.log(data);
}).catch(err => {
    console.log(err);
});