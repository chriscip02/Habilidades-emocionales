// Herramientas emocionales divididas en categorías
const toolsByCategory = {
    1: [
        "Imaginá escenas muy relajantes",
        "Imagina un lugar secreto dentro tuyo, amueblalo de la forma que te guste, cerralo y ponele llave a la puerta contra cualquier cosa que pueda lastimarte.",
        "Imagina emociones dolorosas drenando fuera de vos como el agua fuera de un tubo.",
        "Crea un mundo imaginario calmante.",
        "Recordá un momento feliz e imagínate a vos ahí de vuelta."
    ],
    2: [
        "Tomá un baño de inmersión.",
        "Tomá una bebida caliente.",
        "Practicá yoga u otro ejercicio de estiramiento.",
        "Hacé un ejercicio de respiración."
    ],
    3: [
        "Tomate media hora para salir a caminar y alejarte de tus ocupaciones",
        "Dedicale una hora a una actividad que disfrute genuinamente",
        "Subí escaleras rápidamente",
        "Realizá ejercicios o hobbies",
        "Ordená tu casa",
        "Limpiá tu habitación o doblá tu ropa"
    ],
    4: [
        "Tomá un baño de espuma",
        "Poné sábanas limpias en la cama",
        "Acariciá a tu mascota",
        "Remoja tus pies en agua fría",
        "Ponete una compresa fría en la frente",
        "Cepillate el cabello por un buen rato",
        "Abrazá a alguien",
        "Escuchá música agradable o relajante o música energizante",
        "Prestá atención a los sonidos que te rodean",
        "Cantá tus canciones favoritas",
        "Usá tu perfume o loción favorita",
        "Encendé una vela perfumada",
        "Utilizá esencias naturales y ponetelas en las muñecas o en el cuello y sentí el perfume",
        "Bebé tu bebida relajante favorita (alcohol no), como té de hierbas",
        "Comé los alimentos conscientemente en cada bocado",
        "Comprá una linda flor",
        "Hacé espacio en una linda habitación",
        "Encendé una vela y observa la llama",
        "Arreglate las uñas para que se vean bien",
        "Mirá ballet u otro espectáculo de danza",
        "Sumergí la cara en un bol de agua con hielo",
        "Sumergí los pies en un bol de agua con hielo",
        "Ponete una máscara de gel frío",
        "Ponete una manta de gel térmico en el cuello",
        "Apretá un cubito de hielo con la mano",
        "Ponete hielo en los pómulos",
        "Apretá fuerte una pelota de goma",
        "Rocía tu cara con agua termal",
        "Escuchá música fuerte",
        "Comé comida picante o ponete una gota de picante en la lengua",
        "Mojate la nuca con agua fría"
    ],
    5: [
        "Si estás triste, pone una peli que te haga reir mucho",
        "Contá hasta 10",
        "Contá colores en una pintura, arboles, ventanas, cualquier cosa",
        "Resolvé enigmas",
        "Mirá televisión o leé",
        "Hacé un dibujo",
        "Escribí lo que sentís"
    ]
};

// Función para seleccionar una categoría
function selectCategory(category) {
    const display = document.getElementById("tool-display");
    const roulette = document.getElementById("roulette");

    // Ocultar el texto y mostrar la ruleta
    display.classList.add("hidden");
    roulette.style.display = "block";

    // Simular la ruleta girando
    setTimeout(() => {
        const tools = toolsByCategory[category];
        const randomTool = tools[Math.floor(Math.random() * tools.length)];

        // Mostrar la herramienta seleccionada
        roulette.style.display = "none";
        display.textContent = randomTool;
        display.classList.remove("hidden");
    }, 2000); // 2 segundos de simulación
}

