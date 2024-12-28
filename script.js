// Lista de herramientas emocionales
const tools = [
    "Respiración profunda",
    "Escucha tu música favorita",
    "Dibujar o escribir tus pensamientos",
    "Caminar al aire libre",
    "Hablar con alguien de confianza",
    "Hacer una lista de gratitud",
    "Practicar meditación por 5 minutos",
    "Tomar una pausa y beber agua",
    "Visualizar un lugar que te relaje",
    "Hacer estiramientos suaves",
    "Jugar con una mascota o cuidar de una planta",
    "Llamar a un ser querido o amigo para hablar",
    "Tomar una ducha",
    "Escuchar música fuerte",
    "Hacer una lista de tus logros o cosas positivas que has hecho",
    "Hacer una pausa y practicar el método de los 5 sentidos (observar, oler, escuchar, tocar y saborear)",
    "Sostener un objeto que te traiga calma, como una piedra lisa o una muñeca de peluche",
    "Crear una rutina de autocuidado, como cuidarte la piel o hacer un masaje",
    "Preparar una bebida o comida que disfrutes mucho"
];

// Función para iniciar la animación
function startAnimation() {
    const display = document.getElementById("tool-display");
    const spinner = document.getElementById("spinner");

    // Mostrar el spinner y ocultar el texto
    display.style.visibility = "hidden";
    spinner.style.display = "flex";

    let count = 0;
    const interval = setInterval(() => {
        count++;
        // Detenemos la animación después de 2 segundos (10 iteraciones)
        if (count > 10) {
            clearInterval(interval);
            selectTool();
        }
    }, 200); // Cambiar herramienta cada 200 ms
}

// Función para mostrar la herramienta final seleccionada
function selectTool() {
    const randomIndex = Math.floor(Math.random() * tools.length);
    const selectedTool = tools[randomIndex];
    const display = document.getElementById("tool-display");
    const spinner = document.getElementById("spinner");

    // Ocultar el spinner y mostrar el texto
    spinner.style.display = "none";
    display.style.visibility = "visible";
    display.innerText = selectedTool;
}
