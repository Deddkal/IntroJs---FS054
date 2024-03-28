
let contenedor = document.getElementById("conteiner")

const personajes = data.results.map( elemento => elemento)

// for (const iterator of data.results) {
//     personajes.push(iterator)
// }



let createCard = function( objeto ){
    return `
        <img src="${objeto.image}" alt="${objeto.name}">
        <div class="p-1">
            <p> Nombre : ${objeto.name}</p>
            <p>Especie : ${objeto.species} </p>
            <p>Genero : ${objeto.gender} </p>
        </div>
    `
}

let fragmento = new DocumentFragment()
// Borrador o plantilla

for (const iterator of personajes) {
    
    fragmento.appendChild(imprimirCard(iterator))
}

contenedor.appendChild(fragmento)
console.log([fragmento])

function imprimirCard(objeto){
    let aux = document.createElement("div")
    aux.innerHTML = createCard(objeto)
    aux.className = "flex flex-col w-3/4 md:w-1/3 lg:w-1/5 p-1 bg-yellow-200 shadow-lg"
    return aux
}

