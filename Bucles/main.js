

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



// let array = []

// for (let index = 0 ; index < 5 ; index-- ) {
    
//     array.push(parseInt(prompt("Ingrese un numero")))
    
// }

/* 

for i = Ejecuta el bucle hasta cumplir la condicion dependiendo del contador

for of = Se utiliza para Arrays, String. Que sea iterable. Y en cada iteracion va tomando un valor de la iteracion actual

for in = Se utiliza para objetos.

*/

// let numero = 10

// numero = numero + 20

// numero += 20

/* 

while = Ejecuta un bucle, mientras la condicion sea verdadera. Lo primero que hace es analizar la condicion
    
    while(condicion){
        y si se cumple la condicion ejecuta esto
    }

do - while = Ejecuta un bucle, mientras la condicion sea verdadera. Se ejecuta por lo menos una vez
    
    do {
        Ejecuta una vez y luego verifica la condicion
    } while (condition);

*/

// let num = "asdasa"

// for (const iterator of num) {
//     console.log(iterator)
// }

// console.log( (num < 1 || num > 3) )

// let contador = 0
// do{

//     num = parseInt(prompt("Ingrese un numero entre 1 y 3"))

//     contador++
//     console.log(contador)
//     // if( contador == 3){
//     //     alert("Aprende a leer")
//     //     num = 1
//     // }

// } while(!(num == 1 || num== 2 || num ==3))

// let nombreCompleto = "Martin Araolaza"

// let array = nombreCompleto.split( " " )

// let contienePalabra = nombreCompleto.toLowerCase().includes("mar")

// String slice

// Arrays splice

// console.log(array)

// console.log(nombreCompleto.endsWith("azad"))

// console.log(Math.random() )

// let tirarDados = Math.random()

// console.log(Math.ceil( tirarDados * 6 ))

let num = 0.2

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

