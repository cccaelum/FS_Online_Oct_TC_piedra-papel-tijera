const botonesJugada = document.querySelectorAll('.boton-jugada');
const resultados = document.getElementById('resultados');
const contadorUsuario = document.getElementById('contador-usuario');
const contadorOrdenador = document.getElementById('contador-ordenador');

let puntosUsuario = 0;
let puntosOrdenador = 0;

const opciones = ['piedra', 'papel', 'tijera'];

botonesJugada.forEach(boton => {
    boton.addEventListener('click', () => {
        const eleccionUsuario = boton.dataset.jugada;
        const eleccionOrdenador = opciones[Math.floor(Math.random() * opciones.length)];
        const resultadoJuego = obtenerResultado(eleccionUsuario, eleccionOrdenador);
        mostrarResultado(eleccionUsuario, eleccionOrdenador, resultadoJuego);
        actualizarPuntuazion(resultadoJuego);
    });
});

function obtenerResultado(usuario, ordenador) {
    if (usuario === ordenador) {
        return 'empate';
    }
    if (
        (usuario === 'piedra' && ordenador === 'tijera') ||
        (usuario === 'papel' && ordenador === 'piedra') ||
        (usuario === 'tijera' && ordenador === 'papel')
    ) {
        return 'usuario';
    } else {
        return 'ordenador';
    }
}

function mostrarResultado(usuario, ordenador, resultado) {
    if (resultado === 'empate') {
        resultados.textContent = `Empate.`;
    } else if (resultado === 'usuario') {
        resultados.textContent = `Ganas, ${usuario} vence a ${ordenador}.`;
    } else {
        resultados.textContent = `Pierdes, ${ordenador} vence a ${usuario}.`;
    }
}

function actualizarPuntuazion(resultado) {
    if (resultado === 'usuario') {
        puntosUsuario++;
    } else if (resultado === 'ordenador') {
        puntosOrdenador++;
    }
    contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
    contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
}


/* 
// Selecciona todos los botones con la clase 'boton-jugada'
const botonesJugada = document.querySelectorAll('.boton-jugada');

// Itera sobre cada botón usando forEach
botonesJugada.forEach(boton => {
    boton.addEventListener('click', () => {

// Obtiene la elección del usuario desde el atributo data-jugada del botón
const eleccionUsuario = boton.dataset.jugada;
        
// Genera una elección aleatoria para el ordenador
const eleccionOrdenador = opciones[Math.floor(Math.random() * opciones.length)];
        
// Determina el resultado del juego
const resultadoJuego = obtenerResultado(eleccionUsuario, eleccionOrdenador);
*/