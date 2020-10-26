// capacidade de uma variavel lembrar aonde foi declara
// escopo global
// escopo de função
// escopo de bloco

function init() {
    const exemplo = 'Essa variável';

    return function(){
        console.log(`1- O valordessa variável é: ${exemplo}.`);
        return function(){
            console.log(`2- O valordessa variável é: ${exemplo}.`);
            return function(){
                console.log(`3- O valordessa variável é: ${exemplo}.`);
            }
        }
    }    
}
const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();

initFn3();

init()()()();