let test = document.getElementById("mover");
let coords = test.getBoundingClientRect();
let postop = parseInt(coords.top);
let posbottom = parseInt(coords.bottom);
let posleft = parseInt(coords.left);
let posright = parseInt(coords.right);
test.style.position = 'fixed';

setInterval(function(){
        let n_evento = getRandomInt(1,5);
        let pixeles = getRandomInt(1,10);
        let suma_resta = getRandomInt(1,3);
        let test = document.getElementById("mover");

        //console.log(suma_resta);
        if(n_evento === 1){

                if(suma_resta === 1){
                        postop = postop + pixeles;
                }
                if(suma_resta === 2){
                        postop = postop - pixeles;
                        if(postop < -20){
                                postop = -20;
                        }
                }
                test.style.top = postop+"px";

        }

        if(n_evento === 2){
                if(suma_resta === 1){
                        posleft = posleft + pixeles;
                }
                if(suma_resta === 2){
                        posleft = posleft - pixeles;
                        if(posleft < -20){
                                posleft = -20;
                        }
                }
                test.style.left = posleft+"px";
        }

}, 1);

/*
test.addEventListener(
    "mouseenter",
    (event) => {
            event.target.style.position = "fixed";
            let n_evento = getRandomInt(1,4);
            let pixeles = getRandomInt(1,2);
            let suma_resta = getRandomInt(1,2);
            if(n_evento === 1){
                    if(suma_resta === 1){
                            postop = postop + pixeles;
                    }
                    if(suma_resta === 2){
                            postop = postop - pixeles;
                    }
                    event.target.style.top = postop+"px";
            }

            if(n_evento === 2){
                    if(suma_resta === 1){
                            posbottom = posbottom + pixeles;
                    }
                    if(suma_resta === 2){
                            posbottom = posbottom - pixeles;
                    }
                    event.target.style.bottom = posbottom+"px";
            }
            if(n_evento === 3){
                    if(suma_resta === 1){
                            posleft = posleft + pixeles;
                    }
                    if(suma_resta === 2){
                            posleft = posleft - pixeles;
                    }
                    event.target.style.left = posleft+"px";
            }
            if(n_evento === 4){
                    if(suma_resta === 1){
                            posright = posright + pixeles;
                    }
                    if(suma_resta === 2){
                            posright = posright - pixeles;
                    }
                    event.target.style.right = posright+"px";
            }


    },
    false,
);

test.addEventListener(
    "mouseleave",
    (event) => {
            event.target.style.position = "fixed";
            let n_evento = getRandomInt(1,4);
            let pixeles = getRandomInt(1,2);
            let suma_resta = getRandomInt(1,2);
            if(n_evento === 1){
                    if(suma_resta === 1){
                            postop = postop + pixeles;
                    }
                    if(suma_resta === 2){
                            postop = postop - pixeles;
                    }
                    event.target.style.top = postop+"px";
            }

            if(n_evento === 2){
                    if(suma_resta === 1){
                            posbottom = posbottom + pixeles;
                    }
                    if(suma_resta === 2){
                            posbottom = posbottom - pixeles;
                    }
                    event.target.style.bottom = posbottom+"px";
            }
            if(n_evento === 3){
                    if(suma_resta === 1){
                            posleft = posleft + pixeles;
                    }
                    if(suma_resta === 2){
                            posleft = posleft - pixeles;
                    }
                    event.target.style.left = posleft+"px";
            }
            if(n_evento === 4){
                    if(suma_resta === 1){
                            posright = posright + pixeles;
                    }
                    if(suma_resta === 2){
                            posright = posright - pixeles;
                    }
                    event.target.style.right = posright+"px";
            }


    },
    false,
);*/


function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
