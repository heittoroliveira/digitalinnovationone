(() => {
    let test = 'valor funcao';
    console.log(`Valor dentro da função "${test}"`);
    if(true){
        let test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`); // vai saber o valor da variavel por causa do hoising do var
})();

