let contenedorCards = document.getElementById("contenedorCards")
let contenedorCheck = document.getElementById("checkboxs")
let search = document.getElementById("search")

let personajes = data.filter( personaje => personaje.house )

let casas = array => Array.from( new Set( array.map( e => e.house) ) )

let crearCheckbox = nombre => `
<label class="px-5"> ${nombre}
<input type="checkbox" name="${nombre}" value="${nombre}" >
</label>`

let checkboxCasas = array => array.map( crearCheckbox ).reduce( ( a , b ) => a + b )

contenedorCheck.innerHTML = checkboxCasas( casas( personajes ) )

let crearCard = personaje => `<div class="border-[red] border p-3">
<p>Nombre : ${personaje.name} </p>
<p>Casa : ${personaje.house} </p>
</div>`

let crearCardsConPersonajes = array => array.length != 0 ? array.map( crearCard ).reduce( (a, b) => a + b, "" ) : "<h2> No hay personajes </h2>"


contenedorCards.innerHTML = crearCardsConPersonajes( personajes )

let checkChecked = []
let nombreIngresado = ""
contenedorCheck.addEventListener( "change" , e => {
    checkChecked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map( input => input.value )
 
    
    contenedorCards.innerHTML = crearCardsConPersonajes( filtrarPorNombre( filtrarPorCheck( personajes, checkChecked ) , nombreIngresado ) )
})

search.addEventListener("keyup" , e => {
    nombreIngresado = e.target.value
    contenedorCards.innerHTML = crearCardsConPersonajes( filtrarPorNombre( filtrarPorCheck( personajes, checkChecked ) , nombreIngresado ) )
})

let filtrarPorCheck = (array, arrayChecks) => arrayChecks.length > 0 ? array.filter( personaje => arrayChecks.includes(personaje.house)) : array



let filtrarPorNombre = ( array , nombreIngresado ) => array.filter( personaje => personaje.name.toLowerCase().includes(nombreIngresado.trim().toLowerCase())) 

