

// for => 

// let array = [10,20,30,40,50]

// for (let index = 0 ; index < array.length ; index++) {
//     console.log( "Iteracion del bucle: " + index)
//     console.log( "Valor del array en el index: " + array[index] )
//     console.log("-------------------")
// }

// console.log(array.length)
// console.log(array)
// let array2 = []

// for (let elemento of array) {
//     elemento += 10
//     console.log(elemento)
//     array2.push(elemento)
// }

// let nombre = "Martin"

// console.log(nombre.slice(2))

// let mentor = {
//     // Key  : value
//     // Clave : valor
//     nombre : "Martin",
//     apellido : "Araolaza",
//     edad : 34
// }

// for (const iterator of mentor) {
//     console.log(iterator)
// }

// for (const key in mentor) {
//     if (Object.hasOwnProperty.call(mentor, key)) {
//         console.log(key)
//     }
// }

// console.log(array2)

// while => true

// let booleano = confirm("Esta seguro?")
// console.log(booleano)

// let numero = parseInt(prompt("ingrese un numero entre el 1 y el 3"))

// if(){
//     console.log("funciono")
// }

// console.log(numero)

// while((numero < 1 || numero > 3) && numero != NaN){
//     numero = parseInt(prompt("ingrese un numero entre el 1 y el 3"))
// }

// do{

//     numero = parseInt(prompt("ingrese un numero entre el 1 y el 3"))

// }while( false || true || true)



let array = []

for (let index = 0; index < 5; index++) {
    
    array.push(parseInt(prompt("Ingrese un numero")))
    
}