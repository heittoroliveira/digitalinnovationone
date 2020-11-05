
/*************************************************
 * EVENT EMMITER (exclusivo nodejs) EventTarget é pra o navegador
 * ********************************************* */

const EventEmitter = require('events');
/*
const emitter = new EventEmitter();
// cadastrando consumidor para receber o evento
emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged', {user: 'Heittor Oliveira'});

*/
// EX2 ====================================================


class Users extends EventEmitter {
    userLogged(data){
        this.emit('User logged', data);
    }
}

const users = new Users();

users.on('User logado', data => { 
    console.log(data); 
});

users.userLogged({ user: 'Thamiris'});