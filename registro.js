// BACKGROUND

const imgbg = document.querySelector('.bg-box');

const backgrounds = ['../images/cafeteriaex.jpg', '../images/cafedos.jpg', '../images/cafetres.jpg', '../images/churro.jpg', '../images/cafein.jpg'];

let random = Math.floor(Math.random() * backgrounds.length);

window.onload = function () {
  imgbg.style.backgroundImage = 'url(' + backgrounds[random] + ')';
};

//

const formRegister = document.querySelector('#formReg'),
  userReg = document.querySelector('#userReg'),
  email = document.querySelector('#email'),
  passReg = document.querySelector('#passReg');
p = document.querySelector('#mensaje');

let usuarios;

// si hay datos en LS usuarios = LS, sino usuarios = []

if (localStorage.getItem('usuarios')) {
  usuarios = JSON.parse(localStorage.getItem('usuarios'));
} else {
  usuarios = [];
}

// Constructor usuario

class Usuario {
  constructor(usuario, email, password) {
    this.usuario = usuario;
    this.email = email;
    this.pass = password;
  }
}

// Guardar usuario

function guardarUsuario(usuario) {
  if (userReg.value !== '' && email.value !== '' && passReg.value !== '') {
    window.location.href = '../pages/Productos e-comerce.html';
    return usuarios.push(usuario);
  } else {
    document.querySelector('#mensaje').innerText = 'Campos requeridos.';
  }
}

// Guardar en LS

function guardarEnLS(arr) {
  return localStorage.setItem('usuarios', JSON.stringify(arr));
}

// Evento

formRegister.addEventListener('submit', (e) => {
  e.preventDefault();
  const newUser = new Usuario(userReg.value, email.value, passReg.value);
  guardarUsuario(newUser);
  guardarEnLS(usuarios);
});