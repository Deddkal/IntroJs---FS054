

// function saludar(){
//     let mensaje = "Hola"
    
//     console.log(mensaje)
// }


// console.log(saludar())

// let saludarAnonima = function(){
//     return function (){

//     }
// }

// saludarAnonima()

// let saludarFlecha = nombre =>  "Hola " + nombre 

// // Funcion de Orden Superior
// // Tiene que cumplir una de dos condiciones: Recibir una funcion como argumento o retornar una funcion

// let calculadora = function (num1, operacion, num2){
//     return operacion(num1, num2)
//     //      ( num1, num2 ) => num1 / num2
// }

// let multiplicar = (num1, num2) => num1*num2

// console.log(calculadora( 5 , multiplicar , 80 ))
// console.log( calculadora( 400 , ( num1 , num2 ) => num1 / num2 , 80 ) )


let array = [ 10 , 50 , 20 , 8, 4 , 900.50 , 900.48, 900.52 , -100 ]

// console.log( array.sort( ( a , b) => b - a ))

// console.log(array)

// forEach no tiene retorno, y no modifica el array original
// array.forEach( ( elemento , index, array ) => {

//     elemento *= 2
    
//     console.log(elemento)
// } )

// for (let elemento of array) {
    
//     elemento *= 2
//     console.log(elemento)
// }





// Devuelve un nuevo array del mismo tamaño del original, pero transformado

// console.log(array) 

// let array2 = array.map( ( elemento ) => elemento = "Hola")

// console.log(array)
// console.log(array2)

// Filtrar
// Retornar un nuevo array con los elementos que cumplan la condicion

// console.log(frutas)

// let arrayFiltrado = array.filter( elemento => elemento < 5 && elemento > 0 )

// console.log(arrayFiltrado)

// let frutasDulces = frutas.filter( elemento => elemento.nombre.length > 4 )

// console.log(frutasDulces)

// Buscar un elemento

// let fruta = frutas.find( elemento => elemento.esImportada )

// let hayFruta = frutas.some( elemento => elemento.esImportada )

// let frutas2 = frutas.filter(  elemento => elemento.esImportada  )

// let frutasImportadas = []
// let frutasNacionales = []

// for (const iterator of frutas) {

    
//     if( iterator.esImportada){
//         frutasImportadas.push(iterator)
//     }else{
//         frutasNacionales.push(iterator)
//     }
// }

// console.log(frutasNacionales)
// console.log( frutasImportadas)

// let hayFrutas = frutas2.every( elemento => elemento.esImportada )

// console.log(hayFrutas)

// Buscar varios elementos

// console.log(frutas)

//Agregar una propiedad llamada ganancia que sea igual a precio * stock

// let frutasConGanancia = frutas.map( fruta => fruta.ganancia = fruta.precio * fruta.stock )
// console.log(frutasConGanancia)

// console.log( frutasConGanancia.reduce( (acumulador , actual) => acumulador + actual ) )

// let totalGanancia = 0

// for (const valor of frutasConGanancia) {
//     console.log(totalGanancia)
//     totalGanancia *= valor

// }
// console.log(totalGanancia)
// console.log(frutas)

// let arrayNumeros = [ 1, 2 , 3]

// console.log(arrayNumeros.reduce(( acumulador , valorActual ) => acumulador + valorActual , 8))

let arrayNombres = [ "Pepe", "Jose", "Maria"]

console.log( arrayNombres.reduce(( acumulador, valorActual) => acumulador + " " +valorActual, "Bienvenidos" ))

// let fn = ( elemento, indice ) => {
//     console.log(elemento)
//     console.log(indice)
    
// }

let fn = elemento  => elemento.esImportada


console.log(frutas.filter( (e) => e.esImportada))