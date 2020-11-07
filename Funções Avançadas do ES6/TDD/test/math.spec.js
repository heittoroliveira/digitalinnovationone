const assert = require('assert'); // modulo de assert 
const Math = require('../src/math.js');
const expect = require('chai').expect; // modulo mais descritivo que o assert www.chaijs.com
const sinon = require('sinon');


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
               // assert.strictEqual(value,10);
               expect(value).to.equal(10);
                done();
            });        
    });

    it('Obj property', function() { // it.only() so vai executar um teste | metodo it.skip() para ignorar 
        const math = new Math();
        const obj = {
            name: "heittor"
        };
        expect(obj).to.have.property('name').to.equal('heittor');
    });

    it('Two Obj', function() { // it.only() so vai executar um teste | metodo it.skip() para ignorar 
        const math = new Math();
        const obj = {
            name: "heittor"
        };
        const obj2 = {
            name: "heittor"
        };
       // expect(obj).to.equal(obj2); // compara referencia não valor
        expect(obj).to.deep.equal(obj2); // compara valores
    });

    it('Calls res with sum and index values', function(){
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();
        math.printSum(req,res, 5, 5);

      //  expect(res.load.calledOnce).to.be.true; //dessa forma verifica se a função foi chamada de maneira correta, Com o sinon permite verificar a função se foi chamado e quantidade de vezes que foi chamada
        expect(res.load.args[0][1]).to.equal(10); // verifica se o resultado da soma é 10 
    });

    it('Calls res with sum and index values 2', function(){
        const req = {};
        const res = {
            load: function load() {
                console.log('Called!');
            }
        };

        sinon.spy(res, 'load');
        const math = new Math();
        math.printSum(req,res, 5, 5);

      //  expect(res.load.calledOnce).to.be.true; //dessa forma verifica se a função foi chamada de maneira correta, Com o sinon permite verificar a função se foi chamado e quantidade de vezes que foi chamada
        expect(res.load.args[0][1]).to.equal(10); // verifica se o resultado da soma é 10 
       // expect(res.load.args[0][0]).to.equal('index');
    });

    it.only('Calls res with sum and index values 3', function(){
        const req = {};
        const res = {
            load: function load() {
                console.log('Called!');
            }
        };

        sinon.stub(res, 'load').returns('xpto'); // consegue substituir a função por outra e retornar outro valor
        const math = new Math();
        math.printSum(req,res, 5, 5);

        res.restore(); // retornaria ao metodo normal.

      //  expect(res.load.calledOnce).to.be.true; //dessa forma verifica se a função foi chamada de maneira correta, Com o sinon permite verificar a função se foi chamado e quantidade de vezes que foi chamada
        expect(res.load.args[0][1]).to.equal(10); // verifica se o resultado da soma é 10 
       // expect(res.load.args[0][0]).to.equal('index');
    });
})

// mocha pede para não usar o arrow funciotio para naõ dar problema no escopo do this
