
    /*************************************************
     * ASYNC / AWAIT
     * ********************************************* */
    // ES7 -  ASYNC transforma a função em uma promisse
     const simpleFunc = async () => {
         return 12345;
     };
     // sintax2
     const simpleFunc2 = async function() {
        return 12345;
    };
    // retorna uma promisse ja resolvida
    simpleFunc()
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err);
        }); 

    //EX2 ==============================================  
    // ES7 -  AWAIT espera que a promisse seja resolvida

    // faz ter a função assincrona de modo sequencial.

    const asyncTimer = () => new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('dados');
        }, 1000);
    });

    const simpleFunc3 = async () => {
        const data = await asyncTimer();
        console.log(data);
        const dataJson = await fetch('/data.json').then(resStream = resStream.json());
        return dataJson;
    };

    

    simpleFunc3()
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err);
    }); 