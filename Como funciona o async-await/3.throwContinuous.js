const coinFlip = new Promise((resolve, reject) => Math.random)

console.log('Begin')

coinFlip.then((data)=> console.log(data))
    .catch((err) => {throw err})
    .then(() => console.log('End'))

new Promise((resolve) => setTimeout(() => resolve(), 2000 )).then(()=> console.log('Yay'))