
/*************************************************
 * FETCH
 * ********************************************* */

//EX1 ===============================================================
// fetch mesmo intuito do XML HTTP Request por default é get
// chamada para localhost
fetch('/data.json').then(responseStream => {
    // transforma a stream em json/ retorna promise
    return responseStream.json().then(data => {console.log(data);});
})

//EX2 ==============================================
// chamada para localhost
fetch('/data.json')
   .then(responseStream => responseStream.json())
   .then(data => { 
       console.log(data); 
   }).catch(err => {
       console.log('Erro de rede', err);  // conexão recusada porta errada dominio etc.
   });
// {data: [1,2,3]}

// erro de recurso(arquivo), quando o arquivo não é o esperado no servidor 404 etc. o erro não é 
// so passa no catch quando e um erro de rede e não um erro diferente do status 200


//EX3 ==============================================
// dessa forma garante que realizara o parse para json apensas se o status da requisição for 200
fetch('/data.json')
   .then(responseStream => {
       if(responseStream.status === 200){
           return responseStream.json();
       } else {
           throw new Error('Request error');
       }        
   })
   .then(data => { 
       console.log(data); 
   }).catch(err => {
       console.log('Erro de rede', err);  // conexão recusada porta errada dominio etc.
   });

//EX4 ==============================================
// enviando parametros para url define um parametro como post
fetch('http://localhost:8080/data.json', {
   method: 'post',
   body: JSON.stringify
})
   .then(responseStream => {
       if(responseStream.status === 200){
           return responseStream.json();
       } else {
           throw new Error('Request error');
       }        
   })
   .then(data => { 
       console.log(data); 
   }).catch(err => {
       console.log('Erro de rede', err);  // conexão recusada porta errada dominio etc.
   });
