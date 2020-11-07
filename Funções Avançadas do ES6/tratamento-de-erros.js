// == EX1 ==================================================================================================================================

//console.log(name);

//const name = 'Heittor';

//Console.log('Keep going...');

// -- ERRO ReferenceError: Cannot access 'name' before initialization (por conta da variavel const que não tem o hoisting)
// -- assim que o erro e estourado não continua o codigo


// == EX2 ==================================================================================================================================
/*try{
    console.log(name);
    const name = 'Heittor';
}
catch(err){
    console.log('Error: ',err);
}

// -- com o try catch ele exibe o erro mais continua o codigo
console.log('Keep going...'); */


// == EX3 ==================================================================================================================================
/*try{
    console.log(name);
    const name = 'Heittor';
}
catch(err){
    console.log('Error: ',err);
} finally{
    console.log('Keep going...');
} */

// -- com o try catch ele exibe o erro mais continua o codigo dessa vez pelo finnaly


// == EX4 ==================================================================================================================================
/*try{
    
    const name = 'Heittor';
    const myError = new Error('Custom message');
    throw myError;
}
catch(err){
    console.log('Error: ',err);
} finally{
    console.log('Keep going...');
} */

// -- customizando suas mensagens de erro


// == EX4 ==================================================================================================================================
// pode extender a classe de error 
class CustomError extends Error {
    constructor({ message, data }){
        super(message);
        this.data = data;
    }
}

try{
    
    const name = 'Heittor';
    const myError = new CustomError({
        message: 'Custom message',
        data: {
            type: 'Server Error'
        }
    });
    throw myError;
}
catch(err){
    console.log('Error: ',err);
    console.log(err.data);
} finally{
    console.log('Keep going...');
} 

// -- customizando suas mensagens de erro