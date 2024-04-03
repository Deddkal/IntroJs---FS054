
let form = document.getElementById("form")

let inputNombre = document.getElementById("nombre")
let inputApellido = document.getElementById("apellido")
let inputEdad = document.getElementById("edad")

let contador = 0

let persona = {
    nombre : "",
    apellido: "",
    edad : 0
}

let arrayPersonas = []

form.addEventListener( "submit", event => {
    event.preventDefault()
   
    arrayPersonas.push({
        nombre : inputNombre.value,
        apellido: inputApellido.value,
        edad : inputEdad.value
    })
    limpiarInputs()
    console.log(arrayPersonas)
})

let limpiarInputs = () =>{
    inputNombre.value = ""
    inputApellido.value = ""
    inputEdad.value = ""
}

let consultarPersona = () => console.log(persona)

// input.addEventListener("keyup", event => console.log(event.target.value))

let array = [1,2,3]
// let multiplicar = num1 => num1 * 2
function multiplicar( num1 ){
    return num1 * 2
}
console.log( array.map ( multiplicar ))

console.log(multiplicar)

// 5 + 3 * (1 + 1)

console.log("hola")