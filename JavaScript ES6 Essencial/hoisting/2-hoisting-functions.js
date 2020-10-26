function fn(){
    log('Hoisting de função');
    function log(value){
        console.log(value);
    }
}

fn();

// hosting de função é mais forte que de variável;

/**
 * function fn(){
    
    function log(value){
        console.log(value);
    }

    log('Hoisting de função');
}
 */