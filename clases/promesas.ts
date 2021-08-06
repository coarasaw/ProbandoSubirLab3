const promesa = new Promise ( (resolve:Function, reject:Function) =>{
    if (true) {
        setTimeout( ()=>{
            resolve('Todo Correcto')
        },2000)
    } else {
        resolve(Error('Algo sucedio mal'))
    }
})

promesa.then( (resolve) =>{
    console.log(resolve)
}).catch( (error) =>{
    console.log(error)
})

console.log('ejecucion 1')
console.log('ejecucion 2')
console.log('ejecucion 3')