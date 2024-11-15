function mostrarImagen(imagen){
    const lightBox = document.querySelector('#lightBox');
    const fullImage = document.querySelector('#imagenCompleta');

    fullImage.src = imagen.src;
    lightBox.style.display = 'flex';

}

function ocultarImagen(){
    const lightBox = document.querySelector('#lightBox');
    lightBox.style.display = 'none';
}