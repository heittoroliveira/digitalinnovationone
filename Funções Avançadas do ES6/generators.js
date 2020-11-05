// tem funções com pausa diferente dos iterators

// para controlar fluxo de função

// pode transformar o objeto em iteravel


function* hello() {
    console.log('hello');
    yield;
    console.log('From');
    yield; // pausa
    console.log('Function');
}

const it = hello();
console.log(it.next());
/*
hello
{ value: undefined, done: false }
*/


function* hello2() {
    console.log('hello');
    yield 1; // argumento para o value
    console.log('From');
    yield 2; // pausa
    console.log('Function');
}

const it2 = hello2();
console.log(it2.next());
/*
hello
{ value: 1, done: false }
*/

// tambem pode receber um valor por argumento
function* hello3() {
    console.log('hello3');
    yield 1; // argumento para o value
    console.log('From3');
    const value = yield 2; // pausa
    console.log(value);
}

const it3 = hello3();
console.log(it3.next());
console.log(it3.next());
console.log(it3.next("teste"));

/*
hello3
{ value: 1, done: false }
From3
{ value: 2, done: false }
teste
*/
// ====================
// Função para criar um range de numeros infinitos cada chamada um numero novo
// ====================
function naturalNumbers(){
    let number = 0;
    while(true){
        yield number;
        number++;
    }
}

const it4 = naturalNumbers();

console.log(it4.next());
console.log(it4.next());
console.log(it4.next());
console.log(it4.next());


// ====================================
// contruir a interface de interação dos objetos
// ====================================

const obj3 = {
    values: [1,2,3,4],
    *[Symbol.iterator](){ // virou um metodo generator com o *
       for(var i = 0; i < this.values.length; i++){
        yield this.values[i];
       }
    }
};

for(let value of obj3){
    console.log(value);
}
