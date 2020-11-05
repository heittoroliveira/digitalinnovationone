const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function(){

    // [hooks] formas de executar codigo e evitar repetição

    beforeEach(function(){ 
        value = 0;
    });

    it('Sum two numbers', function (){
        const math = new Math();
        try{
            assert.strictEqual(math.sum(5,5), 10);
        } catch(err){
            console.log(err);
        }
        
    });

    it('Multiply two numbers', function() { // it.only() so vai executar um teste | metodo it.skip() para ignorar 
        const math = new Math();
        assert.strictEqual(math.multiply(5,5), 25);
    });

    it('Sum two numbers async', function (done){
        const math = new Math();
         this.timeout(3000); // esperando um tempo maior para o retorno

         value = 5;

            math.sum2(value,5,(value)=> {
                assert.strictEqual(value,10);
                done();
            });        
    });
})

// mocha pede para não usar o arrow funciotio para naõ dar problema no escopo do this
