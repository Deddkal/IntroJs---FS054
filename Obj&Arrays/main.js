


// Propiedades || Atributos || Caracteristicas 
// Metodos (funcion dentro de un objeto) || Comportamientos || Acciones
// let mentor = {
//     // Key  : value
//     // Clave : valor
//     nombre : "Martin",
//     apellido : "Araolaza",
//     edad : 34
// }

// let guille ={
//     // Key  : value
//     // Clave : valor
//     nombre : "Guille",
//     apellido : "Cornetti",
//     edad : 41
// }

// let metodosMentores = {
//     presentarse(){
//         console.log("Hola me llamo " + this.nombre)
//     },
//     saludarApersona(nombre){
//         return "Hola " + nombre
//     }
// }

// let objetoDePrueba = {
//     nombre : "Adios"
// }

// let objetoDePrueba2 = {
//     nombre : "Chau"
// }
// // Assign ( objetivo , las fuentes)
// Object.assign(mentor, metodosMentores)
// // Object.assign(guille, metodosMentores)

// // mentor2.nombre = "Guille"

// // Modificar un valor
// // mentor.nombre = "Nico"

// // Agregar una propiedad
// // mentor.mascota = "Batman"

// // eliminar una propiedad
// // delete mentor.edad

// // console.log(Object.values( mentor ))
// // console.log(Object.keys( mentor ))
// // console.log(Object.entries( mentor ))
// console.log(Object.hasOwn( mentor , "afiliacion" ))

// console.log(mentor)
// console.log(guille)
// console.log(mentor2)

const array = [5,6,15]

// Agregar algo al array al final
array.push(3, 18, 8, 9 )
// Agregar algo al array al comienzo
// array.unshift(1 , 4)
// array[2] = 20
// // Sacar un elemento del final
// let numero = array.pop()
// Sacar varios elementos, de una posicion

let array2 = array.splice(2, 3, "9", 88, "100", "150", 200)

// unir dos arrays

let arrayUnido = [].concat(array, array2)

// console.log(array2)


// console.log(array)

// console.log(arrayUnido.length)

// Ordenar un array
let listaDeNombres = ["martin", "guille", "Nico", "Marcos"]
// console.log(array.toSorted())
// console.log(typeof(array[3]))

// console.log(listaDeNombres.includes("martin"))
// console.log(listaDeNombres.indexOf("martin", 2))

// ACA

console.log(listaDeNombres.join( " " ))

let nombre = "martin"

nombre += " hola"
console.log(nombre.toLowerCase().toUpperCase())
