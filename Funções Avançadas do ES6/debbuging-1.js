// na ferramenta de debu do crome em a opção de breakpoint onde a opção de debugar o codigo javascript em tempo real retornando os valores 

console.log("Bacl Text");
console.warn("Yellow text wih alert");
console.error("Red error Text");

console.trace(); // traz a informação de onde nosso codigo foi executado.

console.group('Me group');
console.log('Info inside group');
console.log('More Info inside group');
console.groupEnd('My group');


console.time('Log time');
setTimeout(() => {
    console.timeEnd('Log time');
},2000);


console.table(['Heittor', 'Digital']);

console.assert(1 === 0, 'Ops');


console.log('%c styled log', 'color: blue;'); // estilização do console
