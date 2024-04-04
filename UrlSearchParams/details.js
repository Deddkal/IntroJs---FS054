

let url = new URLSearchParams( location.search )
let id = url.get("id")
let mensaje = url.get("mensaje")

let personaje = (array, key) => array.find( obj => obj.id == key )

console.log(personaje(data.results, id))


let createCard = function( objeto ){
    return `
        <img src="${objeto.image}" alt="${objeto.name}">
        <div class="p-1">
            <p> Nombre : ${objeto.name}</p>
            <p>Especie : ${objeto.species} </p>
            <p>Genero : ${objeto.gender} </p>
            <p>Id : ${objeto.id} </p>
            <a href="./details.html?id=${objeto.id}"> Ver mas </a>
        </div>
    `
}

let contenedor = document.getElementById("main")

contenedor.innerHTML = createCard(personaje(data.results , id))