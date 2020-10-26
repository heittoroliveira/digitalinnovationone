const name = 'Heittor';

// Não podemos alterar o valor

//name = 'xpto';

const user = {
    name: 'Heittor'
};

// mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

// não podemos fazer o objeto apontar para outro lugar
/* user = {
    name: 'Heittor'
}; */

const persons = ['Heittor', 'XPTO', 'XPOZINHO'];

// podemos adicionar novos itens 
persons.push('joão');

// podemos remover algum item
persons.shift();

persons[1] = 'James';

console.log('\nArray apos as alterações: ', persons);


