/**
 * 
 * var NÃO RESPEITA O ESCOPO DE BLOCO E MESMO ASSIM ESCREVE NO ESCOPO GLOBAL
 * let (intriduziram escopo de bloco) LET NAO ESCREVE NO ESCOPO GLOBAL, RESPEITA ESCOPO DE BLOCO
 * const RESPEITA ESCOPO DE BLOCO
 * 
 * 
 * 
 */

 var nameVar = 'Heittor';
 let nameLet = 'Heittor';
 const nomeConst = 'Heittor';

 console.log(`nameVar: ${nameVar}`);
 console.log(`nameLet: ${nameLet}`);
 console.log(`nomeConst: ${nomeConst}`);

//=== escopo global

 // {
     //=== escopo de bloco
 // }


 // function test(){
     //=== escopo de funcao
 // }

 