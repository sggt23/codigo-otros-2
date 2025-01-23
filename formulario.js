const formulario = document.querySelectorAll("#form")[0];
//Se reformula por una constante porque es un valor que no va a cambiar
//Se agregan las variables al principio de JS para una mejor lectura
const nombreForm= document.getElementById("name");
const edadForm= document.getElementById("age");
const nacionalidadForm= document.getElementById("nationality");

//Se agregan funciones para cada parametro para mejorar la validación en cada input
function validarNombre(){
  if(nombreForm.length === 0){
    console.log("nombre no valido")
  }
};

function validarEdad(){
  if(edad < 18 || edad > 120){
    console.log("edad mayor a 18")
  }
}

function agregarInvitado(){
  if(nombre.length > 0 && (edad > 18  && edad < 120)){
    console.log("agregar invitaods")
  }
}

function validarFormulario(){
  const nombreValido=validarNombre();
  const edadValida=validarEdad();
  const invitadoAgregado=agregarInvitado();
}
//Se agrega una función de addEventListener en submit, para mayor precisión
formulario.addEventListener("submit", e =>{
  e.preventDefault;
  const formularioValid=validarFormulario();
  if(formularioValid){
    console.log("es valido")
  }else{
    console.log("no es valido")
  }
});

  
  // var n = formulario.elements[0]
  // var e = formulario.elements[1]
  // var na = formulario.elements[2]

//   var nombre = n.value
//   var edad = e.value

//   var i = na.selectedIndex
//   var nacionalidad = na.options[i].value
//   console.log(nombre, edad)
//   console.log(nacionalidad)

//   if (nombre.length === 0) {
//     n.classList.add("error")
//   }
//   if (edad < 18 || edad > 120) {
//     e.classList.add("error")
//   }

// if (nombre.length > 0 
//   && (edad > 18 
//     && edad < 120) ) {
//   agregarInvitado(nombre, edad, nacionalidad)
//   }


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}