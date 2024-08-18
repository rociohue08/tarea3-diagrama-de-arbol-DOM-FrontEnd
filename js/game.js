function vinculacion() {
    let gameArea = document.getElementById("game-area");
    console.log('El archivo game.js se ha cargado correctamente.');
    console.log('Elemento game-area:', gameArea);
}


function estilo(){
    let boton = document.getElementById("button");
    boton.classList.add('btn');
   }


// Llama a la función cuando el dom esté cargado
document.addEventListener('DOMContentLoaded', () => {
    vinculacion();
    estilo();
});