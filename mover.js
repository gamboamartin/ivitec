let mariposa = document.getElementById("mariposa");




mariposa.style.position = 'fixed';



let coordenadasMariposa = mariposa.getBoundingClientRect();


let posicionTopMariposa = 90;
let posicionLeftMariposa = 300;



function mueve(elemento, incrementa = 0){
        let n_evento = getRandomInt(1,3);
        if(n_evento === 1){
                posicionTopMariposa = posicion (posicionTopMariposa, incrementa);
                elemento.style.top = posicionTopMariposa+"px";
        }
        if(n_evento === 2){
                posicionLeftMariposa = posicion(posicionLeftMariposa,incrementa);
                elemento.style.left = posicionLeftMariposa+"px";
        }
}


function posicion(posicion, incrementa = 0){
        let suma_resta = getRandomInt(1,3);
        let pixeles = getRandomInt(1,2);

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
        mueve(mariposa);
        mueveP(pajarito);
        },
    20
);

mariposa.addEventListener(
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





