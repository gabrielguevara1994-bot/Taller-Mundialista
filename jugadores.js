/**
 * TALLER MUNDIAL 2026 - ÁLBUM DE CROMOS
 * Módulo Principal / Entorno Base
 */

// 1. Arreglo global de cromos (Inicialmente vacío)
const cromosMundial = [];

// 2. Función fábrica para crear objetos de jugador con estructura estricta
function crearJugador({
    id,
    nombre,
    pais,
    posicion,
    urlImagen,
    urlBandera,
    colorFondoHex = "#1e293b",
    estadisticas = { goles: 0, partidos: 0 },
    destacado = false,
    curiosidad = ""
}) {
    return {
        id,
        nombre,
        pais,
        posicion,
        urlImagen,
        urlBandera,
        colorFondoHex,
        estadisticas: {
            goles: estadisticas.goles ?? 0,
            partidos: estadisticas.partidos ?? 0
        },
        destacado: Boolean(destacado),
        curiosidad 
    };
}

cromosMundial.push(

    crearJugador({
        id: 1,
        nombre: "Edson Álvarez",
        pais: "México",
        posicion: "Mediocampista",
        urlImagen: "imagenes/jugadores/Edson Álvarez.jpg",
        urlBandera: "imagenes/banderas/mexico.png",
        colorFondoHex: "#006847",
        estadisticas: {
            goles: 5,
            partidos: 83
        },
        destacado: true,
        curiosidad: "Capitán de la selección mexicana y uno de los referentes del mediocampo."
    }),

    crearJugador({
        id: 2,
        nombre: "Hirving Lozano",
        pais: "México",
        posicion: "Extremo",
        urlImagen: "imagenes/jugadores/hirvingLozano.jpg",
        urlBandera: "imagenes/banderas/mexico.png",
        colorFondoHex: "#006847",
        estadisticas: {
            goles: 18,
            partidos: 70
        },
        destacado: true,
        curiosidad: "Anotó el histórico gol con el que México derrotó a Alemania en Rusia 2018."
    }),

    crearJugador({
        id: 3,
        nombre: "Son Heung-min",
        pais: "Corea del Sur",
        posicion: "Delantero",
        urlImagen: "imagenes/jugadores/Son Heung-min.jpg",
        urlBandera: "imagenes/banderas/corea-sur.png",
        colorFondoHex: "#C60C30",
        estadisticas: {
            goles: 51,
            partidos: 135
        },
        destacado: true,
        curiosidad: "Es el máximo referente del fútbol surcoreano y ha ganado varias distinciones en la Premier League."
    }),

    crearJugador({
        id: 4,
        nombre: "Alphonso Davies",
        pais: "Canadá",
        posicion: "Lateral Izquierdo",
        urlImagen: "imagenes/jugadores/Alphonso Davies.jpg",
        urlBandera: "imagenes/banderas/canada.png",
        colorFondoHex: "#D80621",
        estadisticas: {
            goles: 15,
            partidos: 56
        },
        destacado: true,
        curiosidad: "Fue el primer canadiense en conquistar la UEFA Champions League."
    }),

    crearJugador({
        id: 5,
        nombre: "Granit Xhaka",
        pais: "Suiza",
        posicion: "Mediocampista",
        urlImagen: "imagenes/jugadores/Granit Xhaka.jpg",
        urlBandera: "imagenes/banderas/suiza.png",
        colorFondoHex: "#D52B1E",
        estadisticas: {
            goles: 14,
            partidos: 137
        },
        destacado: false,
        curiosidad: "Es uno de los futbolistas con más partidos disputados en la historia de Suiza."
    }),

    crearJugador({
        id: 6,
        nombre: "Akram Afif",
        pais: "Qatar",
        posicion: "Delantero",
        urlImagen: "imagenes/jugadores/akram-afif.jpg",
        urlBandera: "imagenes/banderas/qatar.png",
        colorFondoHex: "#8A1538",
        estadisticas: {
            goles: 35,
            partidos: 108
        },
        destacado: false,
        curiosidad: "Fue elegido el mejor jugador de la Copa Asiática 2023 tras liderar a Qatar hacia el título."
    })

);

// 3. Función de renderizado inicial mediante .forEach()
function renderizarAlbum() {
    const contenedor = document.getElementById("cromos-container");

    if (!contenedor) {
        console.warn("No se encontró el contenedor '#cromos-container' en el DOM.");
        return;
    }

    // Limpia el contenedor antes de inyectar
    contenedor.innerHTML = "";

    // Mensaje en caso de que el arreglo aún esté vacío
    if (cromosMundial.length === 0) {
        contenedor.innerHTML = `
            <div class="empty-album">
                <p>El álbum está listo. Esperando que los desarrolladores agreguen sus cromos...</p>
            </div>
        `;
        return;
    }

    // Recorrido estricto con .forEach() e inyección al DOM
    cromosMundial.forEach((jugador) => {
        const tarjetaHTML = `
            <article class="cromo-card ${jugador.destacado ? 'destacado' : ''}" style="--bg-cromo: ${jugador.colorFondoHex};">
                <header class="cromo-header">
                    <span class="cromo-id">#${jugador.id}</span>
                    <img src="${jugador.urlBandera}" alt="Bandera de ${jugador.pais}" class="cromo-flag">
                </header>

                <div class="cromo-image-container">
                    <img src="${jugador.urlImagen}" alt="${jugador.nombre}" class="cromo-img" loading="lazy">
                </div>

                <div class="cromo-info">
                    <h3 class="cromo-name">${jugador.nombre}</h3>
                    <p class="cromo-country">${jugador.pais}</p>
                    <span class="cromo-position">${jugador.posicion}</span>

                    <div class="cromo-stats">
                        <div class="stat">
                            <span class="stat-num">${jugador.estadisticas.partidos}</span>
                            <span class="stat-label">PJ</span>
                        </div>
                        <div class="stat">
                            <span class="stat-num">${jugador.estadisticas.goles}</span>
                            <span class="stat-label">Goles</span>
                        </div>
                    </div>
                </div>
            </article>
        `;

        contenedor.innerHTML += tarjetaHTML;
    });
}

// Ejecución al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    renderizarAlbum();
});

// Función para renderizar cromos en la página principal (index.html)
function renderizarJugadoresIndex() {
    const contenedorIndex = document.getElementById("index-jugadores-container");
    
    // Si no estamos en index.html, finaliza suavemente
    if (!contenedorIndex) return;

    contenedorIndex.innerHTML = "";

    if (cromosMundial.length === 0) {
        contenedorIndex.innerHTML = `<p class="empty-msg">Próximamente se cargarán las estrellas del torneo...</p>`;
        return;
    }

    // Filtra solo los destacados o toma los primeros 4 para la portada
    const jugadoresParaMostrar = cromosMundial.filter(j => j.destacado).slice(0, 4);

    // Si no hay destacados marcados, toma los primeros 4 del arreglo
    const listaFinal = jugadoresParaMostrar.length > 0 ? jugadoresParaMostrar : cromosMundial.slice(0, 4);

    listaFinal.forEach((jugador) => {
        const tarjetaHTML = `
            <article class="cromo-card ${jugador.destacado ? 'destacado' : ''}" style="--bg-cromo: ${jugador.colorFondoHex};">
                <header class="cromo-header">
                    <span class="cromo-id">#${jugador.id}</span>
                    <img src="${jugador.urlBandera}" alt="Bandera de ${jugador.pais}" class="cromo-flag">
                </header>

                <div class="cromo-image-container">
                    <img src="${jugador.urlImagen}" alt="${jugador.nombre}" class="cromo-img" loading="lazy">
                </div>

                <div class="cromo-info">
                    <h3 class="cromo-name">${jugador.nombre}</h3>
                    <p class="cromo-country">${jugador.pais}</p>
                    <span class="cromo-position">${jugador.posicion}</span>
                </div>
            </article>
        `;
        contenedorIndex.innerHTML += tarjetaHTML;
    });
}

// Escuchador de eventos unificado
document.addEventListener("DOMContentLoaded", () => {
    // Si existe el contenedor de la página del álbum completo
    if (document.getElementById("cromos-container")) {
        renderizarAlbum();
    }
    // Si existe el contenedor de la portada index.html
    if (document.getElementById("index-jugadores-container")) {
        renderizarJugadoresIndex();
    }
});