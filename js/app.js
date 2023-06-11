// Selectores
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// crear los años
const years = document.createElement('option');
const max = new Date().getFullYear();
const min = max - 10;


for(let i = max; i >  min; i--) {
    const option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

// Datos para la busqueda
const datosBusqueda = {
    marca : '',
    year: '',
    minimo : '',
    maximo: '',
    puertas: '',
    transmision:'',
    color:''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarCoches(coches);
});

// Event Listeners para el formulario
marca.addEventListener('input', e => {
    datosBusqueda.marca = e.target.value;

    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

year.addEventListener('input', e => {
    datosBusqueda.year = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

minimo.addEventListener('input', e => {
    datosBusqueda.minimo = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});


maximo.addEventListener('input', e => {
    datosBusqueda.maximo = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});


puertas.addEventListener('input', e => {
    datosBusqueda.puertas = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

transmision.addEventListener('input', e => {
    datosBusqueda.transmision = e.target.value
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

color.addEventListener('input', e => {
    datosBusqueda.color = e.target.value
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

function limpiarHTML() {
    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');

    // limpiar los resultados anteriores
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function mostrarCoches(coches){
    limpiarHTML();

    // Leer el elemento Resultado
    const contenedor = document.querySelector('#resultado');

    // Construir el HTML de los coches
    coches.forEach(coche => {
        const cocheHTML = document.createElement('p');
        cocheHTML.innerHTML = `
            <p>${coche.marca} ${coche.modelo} - ${coche.year} - ${coche.puertas} Puertas - Transmisión: ${coche.transmision} - Precio: ${coche.precio} - Color: ${coche.color}</p>
        `;
        contenedor.appendChild(cocheHTML);
    })
}
function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}

function filtrarAuto() {
   const resultado = coches.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

//    console.log(resultado);
   if(resultado.length){
        mostrarCoches(resultado);
   } else {
       noResultado();
   }
}


// Aplica los filtros
function filtrarMarca(coche) {
    if(datosBusqueda.marca){
        return coche.marca === datosBusqueda.marca;
    } 
    return coche;
}
function filtrarYear(coche) {
    if(datosBusqueda.year){
        return coche.year === datosBusqueda.year;
    }
    return coche;
}

function filtrarMinimo(coche) {
    if(datosBusqueda.minimo){
        return coche.precio >= datosBusqueda.minimo;
    }
    return coche;
}
function filtrarMaximo(coche) {
    if(datosBusqueda.maximo){
        return coche.precio <= datosBusqueda.maximo;
    }
    return coche;
}
function filtrarPuertas(coche) {
    if(datosBusqueda.puertas){
        return coche.puertas === datosBusqueda.puertas;
    }
    return coche;
}

function filtrarTransmision(coche) {
    if(datosBusqueda.transmision){
        return coche.transmision === datosBusqueda.transmision;
    } 
    return coche;
}

function filtrarColor(coche){
    if(datosBusqueda.color){
        return coche.color === datosBusqueda.color;
    } 
    return  coche;
}