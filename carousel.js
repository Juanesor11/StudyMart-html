let carBtnIzq = document.querySelector(".btn-izq")
let carBtnDer = document.querySelector(".btn-der")
let carContent = document.querySelector("carousel-contenido")

let valorCarIzq = 0 // propiedad izquierda de .carousel-contenido
let tWidth = carContent.getBoundingClientRect().width; // ancho total del contenido
let cantMover = 180 + 16 + 180 + 16; // cuanto hay q mover al carousel (caja + margen + 2 caja + margen)
let arrowBtnWidth = 50; //ancho de la flecha
let noOfSlides = tWidth / cantMover; // total de slides en el carousel
let slide = 1; // supongamos que el actual numero es 1

carBtnIzq.addEventListener("click", moverCarDer);
carBtnDer.addEventListener("click", moverCarIzq);

function moverCarDer(){
    if(slide == 2) valorCarIzq = 8;
    else valorCarIzq += cantMover;

    slide--;
    carContent.style.left `${valorCarIzq}px` 
}

function moverCarIzq(){
    if(slide == noOfSlides - 1)
        carBtnDer.classList.remove
}