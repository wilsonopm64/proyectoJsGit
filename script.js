const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');



console.log( {
    h1,
    p,
    parrafito,
    pid,
    input
});

//MODIFICANDO el contenido de un elemento HTML y escribiendo etiquetas HTML

h1.innerHTML = "Este es un texto generado desde JavaScript <br> Y esta es una segunda linea generada por una etiqueta Html desde JavaScript" ;
h1.innerText  = 'Y este es un texto creado con <br> innerText'; 

//Este es una forma de crear un nuevo elemento e insertarlo en el dom
const h4 = document.createElement('h4');
h4.textContent = 'Este es un parrafo traido desde Javascript' 
parrafito.appendChild(h4)            

//Modificar o editar atributos con getAtribute o con setAtribute
//console.log(h1.getAttribute('class')) Este codigo es para leer si h1 tiene un atributo class
h1.setAttribute('class', 'rojo') //Cambia el valor del atributo lo que se puede ver inspeccionando el elemento

//Modificar solo clases
h1.classList.add('rojo');
h1.classList.remove('verde')

//Modificando el value del input
input.value = 'Hola buen dia'

//Creando elementos HTML desde 0
const img = document.createElement('img')
img.setAttribute('src', './abandonar.jpeg')
//pid.innerHTML = "" Este codigo modifica el elemento borrando su contenido
pid.appendChild(img)
img.setAttribute('width', '50%')