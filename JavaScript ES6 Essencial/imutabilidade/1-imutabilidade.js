/**
 * OS DADOS NUNCAM MUDAM, A VARIAVEL NUNCA MUDA SE PRECISA ALTERAR ELA CRIA UMA NOVA. Objeto, Arra nunca é atualizado sempre e criado um nova variavel
 * 
 */

 const user ={
     name: 'Heittor',
     lastName: 'Fernandes Oliveira'
 };

 function getUserWithFullName(user){
     return {
         ...user,
         fullname: `${user.name} ${user.lastName}`
     }
 }

 const userWitFullName = getUserWithFullName(user);

 console.log(userWitFullName);