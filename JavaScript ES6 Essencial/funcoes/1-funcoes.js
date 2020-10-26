function getName(){
    return 'Guilherme Cabrini da Silva'
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;



logFnResult(getName);