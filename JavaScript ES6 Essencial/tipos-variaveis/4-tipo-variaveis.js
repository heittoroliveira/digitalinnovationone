(() => {
    const test = 'valor funcaos';
    console.log(`Valor dentro da função "${test}"`);
    if(true){
        const test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`); // vai saber o valor da variavel por causa do hoising do var
})();

