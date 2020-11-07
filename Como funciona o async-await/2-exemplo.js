const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 5000)
})

/*
(async function(){
    console.log('Begin')
    // fomaras para consumir promisses
    const result = await promise.catch(err => err); // passa o sucesso pra variavel resulto e o erro se ouver
   
    

   

    // Or
    promise.then(
        (res) => setTimeout(() => console.log(res), 5000),
        (rej) => console.error(rej)
    )
})() */

(async function(){
    console.log('Begin')
    // fomaras para consumir promisses
    const result = await promise
        .then(result => `O resultado é :${result}`)
        .then(text => `Alguem disse que ${text}`) // passa o sucesso pra variavel resulto e o erro se ouver
   
    
    new Promise((resolve) => setTimeout(() => resolve(), 2000)).then(() => console.log('Yay'))
   
})()