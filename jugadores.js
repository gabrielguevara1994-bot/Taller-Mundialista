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
    destacado = false
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
        destacado: Boolean(destacado)
    };
}

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
