// event listeners

const botonEncriptar = document.querySelector("#encriptar");
const botonDesencriptar = document.querySelector("#desencriptar");
const botonCopiar = document.querySelector("#copiar");
const texto = document.querySelector("#texto");
const mensajeFinal = document.querySelector("#mensaje-final");
const hayMensaje = document.querySelector("#hay-mensaje");

// Hay mensaje?

texto.addEventListener('change',()=>{
  if(texto.value == ""){
    hayMensaje.textContent = "Ningún mensaje fue encriptado";
    mensajeFinal.textContent = "";
  }
});

// encriptacion

const cifrado = {"a":"ai",
                "e":"enter",
                "i":"imes",
                "o":"ober",
                "u":"ufat",};

function encriptar(mensaje){
  let nuevoMensaje = "";
  let arrayMensaje = mensaje.split("");
  for(let caracter of arrayMensaje){
    if(cifrado.hasOwnProperty(caracter)){
      nuevoMensaje += cifrado[caracter];
    }else{
      nuevoMensaje += caracter; 
    }
  }
  return nuevoMensaje;
}

function desencriptar(mensaje){
  let nuevoMensaje = [];
  let arrayMensaje = mensaje.split(" ");
  for(let i = 0;i<arrayMensaje.length;i++){
    let palabra = arrayMensaje[i];
    for(let i = 0;i<palabra.length; i++){
      if(palabra.includes("ai")){
        console.log(palabra.includes("ai"));
        palabra = palabra.replace("ai", "a");
      }
      if(palabra.includes("enter")){
        palabra = palabra.replace("enter", "e");
      }
      if(palabra.includes("imes")){
        palabra = palabra.replace("imes", "i");
      }
      if(palabra.includes("ober")){
        console.log(palabra.includes("ober"));
        palabra = palabra.replace("ober", "o");
      }
      if(palabra.includes("ufat")){
        palabra = palabra.replace("ufat", "u");
      }

    }
    nuevoMensaje.push(palabra);
  }
  return nuevoMensaje.join(" ");
}

botonEncriptar.addEventListener('click',()=>{
  if(texto.value !== ""){
    mensajeFinal.textContent = encriptar(texto.value);
    hayMensaje.textContent = "Tu mensaje encriptado es este"
  }
});

botonDesencriptar.addEventListener('click',()=>{
  if(texto.value !== ""){
    mensajeFinal.textContent = desencriptar(texto.value);
    hayMensaje.textContent = "Tu mensaje desencriptado es este"
  }
});

botonCopiar.addEventListener('click',()=>{
  navigator.clipboard.writeText(mensajeFinal.textContent).then(
    () => {
      /* clipboard successfully set */
      alert("Texto copiado al clipboard");
    },
    () => {
      /* clipboard write failed */
      alert("Error al copiar al clipboard");
    }
  );
  
});