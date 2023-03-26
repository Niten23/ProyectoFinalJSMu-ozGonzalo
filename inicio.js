// BACKGROUND

const imgbg = document.querySelector('.bg-box');

const backgrounds = ['../images/cafeteriaex.jpg', '../images/cafedos.jpg', '../images/menutres.jpg', '../images/cafetres.jpg', '../images/menucuatro.jpg'];

let random = Math.floor(Math.random() * backgrounds.length); 

window.onload = function () {
  imgbg.style.backgroundImage = 'url(' + backgrounds[random] + ')';
};

//

const formIngresar = document.querySelector('#login'),
  userInput = document.querySelector('#user'),
  passInput = document.querySelector('#pass'),
  p = document.querySelector('#mensaje');

// Funciones

function inicioSesion(usuarios) {
  let userNameFound = usuarios.find((usuario) => {
    return usuario.usuario == userInput.value;
  });

  let passFound = usuarios.find((usuario) => {
    return usuario.pass == passInput.value;
  });

  if (userInput.value === '') {
    document.querySelector('#mensaje').innerText = 'Ingrese su usuario.';
  } else if (userNameFound == undefined) {
    document.querySelector('#mensaje').innerText = 'Usuario no encontrado.';
  } else if (passInput.value === '') {
    document.querySelector('#mensaje').innerText = 'Ingrese su constraseña.';
  } else if (passFound == undefined) {
    document.querySelector('#mensaje').innerText = 'Contraseña incorrecta.';
  } else if (userNameFound && passFound) {
    window.location.href = '/html/productos.html';
  } else {
    document.querySelector('#mensaje').innerText = 'Usuario no encontrado.';
  }
}
// Si userFound redireccionar

function recuperarLS() {
  return JSON.parse(localStorage.getItem('usuarios'));
}

// ejecucion de funciones

let usuariosLS = recuperarLS();

// listeners

formIngresar.addEventListener('submit', (e) => {
  e.preventDefault();
  inicioSesion(usuariosLS);
});
