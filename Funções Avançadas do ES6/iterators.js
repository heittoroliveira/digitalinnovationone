// symbol não é igual a outro 
// pode ser utiliado para gerar propriedades privadas evitar q sejam acessas intecionalmente

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello2');

console.log(uniqueId);

const obj = {
    [uniqueId]: 'hello'

}

console.log(obj);
console.log(Object.keys(obj));// retorna: [] // não lista as chave do objeto

console.log(Object.getOwnPropertySymbols(obj)); // retorna a chave



// Well know symbols

/* 
Symbol.iterator
Symbol.split
Symbol.toPrimitive
Symbol.toStringTag

const obj2 = {
    [Symbol.iterator]() {

    }
}*/
// cada chamada no next vai iterando o valor
const arr = [1,2,3,4]
const it = arr[Symbol.iterator]();
const str = 'Digital Innovation One';



while(true){
    let {value, done} = it.next()
    if(done){
        break;
    }
    console.log(value);
}

for(let value of arr){
    console.log(value);
}

arr[Symbol.iterator]().next();

const obj3 = {
    values: [1,2,3,4],
    [Symbol.iterator](){
        let i = 0;
        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const its = obj3[Symbol.iterator]();

console.log(its.next());
console.log(its.next());
console.log(its.next());
console.log(its.next());
console.log(its.next());
console.log(its.next());

for (let value of obj3){ // for of só para objetos iteraveis
    console.log(value);
}

const arr2 = [...obj3];

console.log(arr2);