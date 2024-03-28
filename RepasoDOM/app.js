
// Capturar el elemento HTML donde vamos a trabajar

let contenedor = document.getElementById("contenedor")


let personajes = data.items.map( (e) => e)

// console.log(personajes[0])

//Crear una funcion para crear card 

let crearCard = obj => `<div class="flex flex-col w-3/4 md:w-1/3 lg:w-1/5  p-1 bg-yellow-200 shadow-lg">
<img class="h-[200px] object-contain"  src=" ${obj.image} " alt=" ${obj.name} ">
<div class="p-1">
    <p> Nombre : ${obj.name} </p>
    <p>Especie : ${obj.race} </p>
    <p>Genero : ${obj.gender} </p>
    <p> Ki : ${obj.ki} </p>
    <p> Desc : ${obj.description.slice(0,30)}... </p>
</div>
<a class="p-3 bg-black text-white w-1/2" href="./personajeDetails.html"> Detalles </a>
</div>
`

// console.log(crearCard( personajes[1] ))

// Filtrar personajes que tengan mas de 50k de KI

let filtrarPersonajesPorKI = (array) => array.filter( personaje => personaje.ki.replaceAll(".", "") > 50000  ) 
// console.log( personajes )
// console.log(filtrarPersonajesPorKI(personajes))

// Renderizar las card en un div contenedor

let template = document.createElement("template")

let renderizarCards = ( array, contenedor ) => contenedor.innerHTML = array.map( crearCard ).reduce( ( a , b )  => a + b)

// console.log(contenedor.innerHTML)



contenedor.innerHTML = renderizarCards( filtrarPersonajesPorKI(personajes) , template )



