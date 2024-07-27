let test = document.getElementById("mover");
let coords = test.getBoundingClientRect();
let postop = Math.ceil(coords.top);
let posleft = Math.ceil(coords.left);
test.style.position = 'fixed';


function mueve(elemento, incrementa = 0){
        let n_evento = getRandomInt(1,3);
        if(n_evento === 1){
                postop = posicion (postop, incrementa);
                elemento.style.top = postop+"px";
        }
        if(n_evento === 2){
                posleft = posicion(posleft,incrementa);
                elemento.style.left = posleft+"px";
        }
}
function posicion(posicion, incrementa = 0){
        let suma_resta = getRandomInt(1,3);
        let pixeles = getRandomInt(1,4);

        if(suma_resta === 1){
                posicion = posicion + pixeles + incrementa;
        }
        if(suma_resta === 2){
                posicion = posicion - pixeles - incrementa;
                if(posicion < -20){
                        posicion = -20;
                }
        }
        return posicion;
}

function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
setInterval(function(){
        mueve(test);
        },
    10
);

test.addEventListener(
    "mouseover",
    (event) => {
            mueve(event.target,150);
        const myModal = new bootstrap.Modal('#exampleModal', {
            keyboard: false
        });
        const modalToggle = document.getElementById('toggleMyModal');

        setTimeout(function(){
                myModal.show(modalToggle);
                },
                300
            );

    },
    false,
);




