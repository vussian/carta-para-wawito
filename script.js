let pantallaActual = 0;

function siguientePantalla() {

    const pantallas = document.querySelectorAll(".pantalla");

    if (pantallaActual < pantallas.length - 1) {

        pantallaActual++;

        pantallas[pantallaActual].scrollIntoView({
            behavior: "smooth"
        });

    }

    crearCorazones();
}


/* ❤️ CORAZONES */

function crearCorazones() {

    const corazones = ["❤️", "💕", "💗", "💖", "💘"];

    for (let i = 0; i < 8; i++) {

        const corazon = document.createElement("span");

        corazon.innerHTML =
            corazones[Math.floor(Math.random() * corazones.length)];

        corazon.style.position = "fixed";
        corazon.style.left = (45 + Math.random() * 10) + "%";
        corazon.style.top = "55%";
        corazon.style.fontSize = (18 + Math.random() * 18) + "px";
        corazon.style.pointerEvents = "none";
        corazon.style.zIndex = "9999";

        document.body.appendChild(corazon);

        const direccion = Math.random() * 200 - 100;

        corazon.animate(
            [
                {
                    transform: "translate(0, 0) scale(0.5)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${direccion}px, -180px) scale(1.4)`,
                    opacity: 0
                }
            ],
            {
                duration: 1200,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            corazon.remove();
        }, 1200);
    }
}


/* 🌻 FLORES AL HACER CLIC */

document.addEventListener("click", function(event) {

    if (event.target.tagName === "BUTTON") {
        crearFlores(event.clientX, event.clientY);
    }

});


function crearFlores(x, y) {

    const flores = ["🌻", "🌼", "🌻", "🌻"];

    for (let i = 0; i < 6; i++) {

        const flor = document.createElement("span");

        flor.innerHTML =
            flores[Math.floor(Math.random() * flores.length)];

        flor.style.position = "fixed";
        flor.style.left = x + "px";
        flor.style.top = y + "px";
        flor.style.fontSize = (18 + Math.random() * 15) + "px";
        flor.style.pointerEvents = "none";
        flor.style.zIndex = "9999";

        document.body.appendChild(flor);

        const movimientoX = Math.random() * 160 - 80;
        const movimientoY = Math.random() * -180 - 50;

        flor.animate(
            [
                {
                    transform: "translate(0, 0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${movimientoX}px, ${movimientoY}px) rotate(360deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 1400,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            flor.remove();
        }, 1400);
    }

}