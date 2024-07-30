<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ivitec</title>
    <link href="./libs/bootstrap-5.3.3-dist/css/bootstrap.css" rel="stylesheet">
    <link href="./css/layout.css" rel="stylesheet">
</head>
<body>
<nav class="navbar navbar-light">
    <div class="m-auto logo">
        <img class="logo align-content-center" src="img/logo.blanco.png" alt="Logo">
    </div>
</nav>



<div class="accordion accordion-flush" id="accordionFlush">

    <div class="accordion-item border-0">

        <h2 class="accordion-header " id="flush-headingBienvenido">

            <button class="accordion-button collapsed bg-black text-white" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseBienvenido" aria-expanded="false"
                    aria-controls="flush-collapseBienvenido">

                <img class="icono" src="img/casita.blanca.webp" alt="Bienvenido">
                <span class="text-menu">Bienvenidos</span>
            </button>
        </h2>
        <div id="flush-collapseBienvenido" class="accordion-collapse collapse text-white bg-black bg-arbol"
             aria-labelledby="flush-headingBienvenido" data-bs-parent="#accordionFlush">

            <div class="accordion-body ">

                <p class="text-parrafo parrafo">
                    <img class="cursor mariposa" id="mariposa" src="img/mariposablanco.webp" alt="Bienvenido"
                         data-bs-toggle="modal" data-bs-target="#ModalBienvenido">
                    Que tal, ¿Cómo estás?, bienvenido, ponte cómodo, te prometo que haré lo posible por no aburrirte,
                    también te pudiera decir que no intentaré venderte algo, pero sería mentirte, realmente si lo
                    intentaré, pero trataré de hacerlo de una forma clara, honesta y
                    transparente, porque ésto somos. Y en realidad espero que al final de tu viaje por mi sitio,
                    pues nos hayas conocido un poco mejor. <br><br>

                    ¡Muy bien! Si llegaste hasta aquí pues,
                    <class class="liga" data-bs-target="#flush-collapseTwo" data-bs-toggle="collapse">
                        <b>¿Que te parece si nos conocemos?</b>
                    </<class>
                </p>
            </div>
        </div>
    </div>


    <div class="accordion-item border-0">
        <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed bg-black text-white" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <img class="icono" src="img/nina.blanco.webp" alt="Que te parece si nos conocemos?">
                <span class="text-menu">¿Que te parece si nos conocemos?</span>
            </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse bg-black text-white"
             aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlush">
            <div class="accordion-body">
                <p class="text-parrafo parrafo">
                Comencemos entonces, somos un gran equipo dedicado a dar soluciones en tecnología, me imagino que
                puedes preguntarte, que parte de tecnologia ?, hay un chingo de esas cosas ?, asi que siendo un poco
                más específico y sin entrar tanto en tecnicismos, los cuales te los explicare mejor mas adelante.<br<<br>
                Nosotros creamos software, programas, aplicaciones, paginas web, lo anterior usando herramientas y técnicas
                de ultima generación, se oye mamalon verdad, bueno ya en serio si lo estamos haciendo, y como todo,
                el saberlas usar no quiere decir que se pueda aprovechar a lo máximo, pero creeme que ademas de saberlas utilizar,
                le sabemos damos un enfoque practico para su mejor aprovechamiento.<br><br>
                    Qué mas hacemos,mmm te podemos ayudar a diagnosticar el estado de tu empresa enfocado en
                    tecnologías de la información, igual que antes,y que chingados es eso o a que te refieres,
                    bueno, aqui podemos ayudarte a revisar, planear, ejecutar y mantener tu infrestructura
                informática en temas de seguirdad física y lógica, lo cual se vera reflejado en la productividad de
                    tu equipo de trabajo. <br><br>
                 Ahora sí, vamos con el detalle que tal, <class class="liga" data-bs-target="#flush-collapseThree" data-bs-toggle="collapse">
                        <b>Acompañame y te muestro.</b>
                    </<class>
                </p>
            </div>
        </div>
    </div>


    <div class="accordion-item border-0">
        <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed bg-black text-white" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <span class="text-menu">Acompañame y te muestro</span>
            </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse min-vh-100 bg-black text-white"
             aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlush">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
                happening here in terms of content, but just filling up the space to make it look, at least at first
                glance, a bit more representative of how this would look in a real-world application.
            </div>
        </div>
    </div>
</div>



<!-- Modal -->
<div class="modal fade bg-white" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-black">
                <div class="m-auto logo-modal">
                    <img class="logo align-content-center" src="img/logo.blanco.png" alt="Logo">
                </div>
            </div>
            <div class="modal-body">
                Hola, creo que quieres alcanzarme verdad, esta bien, intentalo.
            </div>
            <div class="modal-footer bg-black">
                <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
        </div>
    </div>
</div>



<script src="./libs/bootstrap-5.3.3-dist/js/popper.js" ></script>
<script src="./libs/bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js"></script>
<script src="./mover.js"></script>
</body>
</html>