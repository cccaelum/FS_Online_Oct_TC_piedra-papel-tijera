
const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');
piedra.addEventListener('click', function () {
    const eleccionPC = ['Piedra', 'Papel', 'Tijera'];
    const i = Math.floor(Math.random() * eleccionPC.length)
    return eleccionPC[i]},
    function resultados(jugadaUser, eleccionPC) {
        if (jugadaUser === eleccionPC) {
            return 'Empate'
        }
        else if (
            (jugadaUser === 'Piedra' && this.eleccionPC === 'Tijera') ||
            (jugadaUser === 'Tijera' && this.eleccionPC === 'Papel') ||
            (jugadaUser === 'Papel' && this.eleccionPC === 'Piedra')) {
                user++;
                return 'User gana'
            } else {PC++; return 'PC gana'}
        }, console.log(resultados()),
    );
papel.addEventListener('click', function () {
    const eleccionPC = ['Piedra', 'Papel', 'Tijera'];
    const i = Math.floor(Math.random() * eleccionPC.length)
    return eleccionPC[i]});
tijera.addEventListener('click', function () {
    const eleccionPC = ['Piedra', 'Papel', 'Tijera'];
    const i = Math.floor(Math.random() * eleccionPC.length)
    return eleccionPC[i]});
let user = 0;
let PC = 0;
function resultados(jugadaUser, jugadaPC) {
    if (jugadaUser === jugadaPC) {
        return 'Empate'
    }
    else if (
        (jugadaUser === 'Piedra' && jugadaPC === 'Tijera') ||
        (jugadaUser === 'Tijera' && jugadaPC === 'Papel') ||
        (jugadaUser === 'Papel' && jugadaPC === 'Piedra')) {
            user++;
            return 'User gana'
        } else {PC++; return 'PC gana'}
    }
13:36
const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');
piedra.addEventListener('click', function () {
    const eleccionPC = ['Piedra', 'Papel', 'Tijera'];
    const i = Math.floor(Math.random() * eleccionPC.length)
    return eleccionPC[i]},
    function resultados(jugadaUser, eleccionPC) {
        if (jugadaUser === eleccionPC) {
            return 'Empate'
        }
        else if (
            (jugadaUser === 'Piedra' && this.eleccionPC === 'Tijera') ||
            (jugadaUser === 'Tijera' && this.eleccionPC === 'Papel') ||
            (jugadaUser === 'Papel' && this.eleccionPC === 'Piedra')) {
                user++;
                return 'User gana'
            } else {PC++; return 'PC gana'}
        }, console.log(resultados()),
    );
papel.addEventListener('click', function () {
    const eleccionPC = ['Piedra', 'Papel', 'Tijera'];
    const i = Math.floor(Math.random() * eleccionPC.length)
    return eleccionPC[i]});
tijera.addEventListener('click', function () {
    const eleccionPC = ['Piedra', 'Papel', 'Tijera'];
    const i = Math.floor(Math.random() * eleccionPC.length)
    return eleccionPC[i]});
let user = 0;
let PC = 0;
function resultados(jugadaUser, jugadaPC) {
    if (jugadaUser === jugadaPC) {
        return 'Empate'
    }
    else if (
        (jugadaUser === 'Piedra' && jugadaPC === 'Tijera') ||
        (jugadaUser === 'Tijera' && jugadaPC === 'Papel') ||
        (jugadaUser === 'Papel' && jugadaPC === 'Piedra')) {
            user++;
            return 'User gana'
        } else {PC++; return 'PC gana'}
    }




