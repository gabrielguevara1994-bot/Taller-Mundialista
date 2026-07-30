/**
 * TALLER MUNDIAL 2026 - ÁLBUM DE CROMOS
 * Sistema de Gamificación y Recompensas (Estudiante F)
 */

// 1. Arreglo global de cromos
const cromosMundial = [];

// 2. Función fábrica para crear objetos con propiedad de desbloqueo
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
    curiosidad = "",
    desbloqueado = false // Estado inicial bloqueado
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
        curiosidad,
        desbloqueado: Boolean(desbloqueado)
    };
}

// 3. Carga masiva de cromos
cromosMundial.push(
    crearJugador({
        id: 1,
        nombre: "Edson Álvarez",
        pais: "México",
        posicion: "Mediocampista",
        urlImagen: "imagenes/jugadores/Edson Álvarez.jpg",
        urlBandera: "https://flagcdn.com/w80/mx.png",
        colorFondoHex: "#006847",
        estadisticas: { goles: 5, partidos: 83 },
        destacado: true,
        curiosidad: "Capitán de la selección mexicana y uno de los referentes del mediocampo."
    }),
    crearJugador({
        id: 2,
        nombre: "Hirving Lozano",
        pais: "México",
        posicion: "Extremo",
        urlImagen: "imagenes/jugadores/hirvingLozano.jpg",
        urlBandera: "https://flagcdn.com/w80/mx.png",
        colorFondoHex: "#006847",
        estadisticas: { goles: 18, partidos: 70 },
        destacado: true,
        curiosidad: "Anotó el histórico gol con el que México derrotó a Alemania en Rusia 2018."
    }),
    crearJugador({
        id: 3,
        nombre: "Son Heung-min",
        pais: "Corea del Sur",
        posicion: "Delantero",
        urlImagen: "imagenes/jugadores/Son Heung-min.jpg",
        urlBandera: "https://flagcdn.com/w80/kr.png",
        colorFondoHex: "#C60C30",
        estadisticas: { goles: 51, partidos: 135 },
        destacado: true,
        curiosidad: "Es el máximo referente del fútbol surcoreano y ha ganado varias distinciones en la Premier League."
    }),
    crearJugador({
        id: 4,
        nombre: "Alphonso Davies",
        pais: "Canadá",
        posicion: "Lateral Izquierdo",
        urlImagen: "imagenes/jugadores/Alphonso Davies.jpg",
        urlBandera: "https://flagcdn.com/w80/ca.png",
        colorFondoHex: "#D80621",
        estadisticas: { goles: 15, partidos: 56 },
        destacado: true,
        curiosidad: "Fue el primer canadiense en conquistar la UEFA Champions League."
    }),
    crearJugador({
        id: 5,
        nombre: "Granit Xhaka",
        pais: "Suiza",
        posicion: "Mediocampista",
        urlImagen: "imagenes/jugadores/Granit Xhaka.jpg",
        urlBandera: "https://flagcdn.com/w80/ch.png",
        colorFondoHex: "#D52B1E",
        estadisticas: { goles: 14, partidos: 137 },
        destacado: false,
        curiosidad: "Es uno de los futbolistas con más partidos disputados en la historia de Suiza."
    }),
    crearJugador({
        id: 6,
        nombre: "Akram Afif",
        pais: "Qatar",
        posicion: "Delantero",
        urlImagen: "imagenes/jugadores/akram-afif.jpg",
        urlBandera: "https://flagcdn.com/w80/qa.png",
        colorFondoHex: "#8A1538",
        estadisticas: { goles: 35, partidos: 108 },
        destacado: false,
        curiosidad: "Fue elegido el mejor jugador de la Copa Asiática 2023 tras liderar a Qatar hacia el título."
    }),
    crearJugador({
        id: 7,
        nombre: "Lionel Messi",
        pais: "Argentina",
        posicion: "Delantero",
        urlImagen: "imagenes/jugadores/messi.jpg",
        urlBandera: "https://flagcdn.com/w80/ar.png",
        colorFondoHex: "#75AADB",
        estadisticas: { goles: 13, partidos: 26 },
        destacado: true,
        curiosidad: "Máximo goleador histórico de Argentina y campeón del mundo en Qatar 2022."
    }),
    crearJugador({
        id: 8,
        nombre: "Lamine Yamal",
        pais: "España",
        posicion: "Extremo",
        urlImagen: "imagenes/jugadores/lamineYamale.jpg",
        urlBandera: "https://flagcdn.com/w80/es.png",
        colorFondoHex: "#AA151B",
        estadisticas: { goles: 3, partidos: 14 },
        destacado: true,
        curiosidad: "El jugador más joven en debutar y marcar con la selección absoluta de España."
    }),
    crearJugador({
        id: 9,
        nombre: "Vozinha",
        pais: "Cabo Verde",
        posicion: "Portero",
        urlImagen: "imagenes/jugadores/vozina.jpg",
        urlBandera: "https://flagcdn.com/w80/cv.png",
        colorFondoHex: "#002B7F",
        estadisticas: { goles: 0, partidos: 65 },
        destacado: false,
        curiosidad: "Guardameta histórico y referente del crecimiento futbolístico de Cabo Verde."
    }),
    crearJugador({
        id: 10,
        nombre: "Federico Valverde",
        pais: "Uruguay",
        posicion: "Centrocampista",
        urlImagen: "imagenes/jugadores/valverde.jpg",
        urlBandera: "https://flagcdn.com/w80/uy.png",
        colorFondoHex: "#0038A8",
        estadisticas: { goles: 7, partidos: 56 },
        destacado: true,
        curiosidad: "Conocido como 'El Pajarito', destaca por su gran despliegue físico y potente disparo lejano."
    }),
    crearJugador({
        id: 11,
        nombre: "Pedri",
        pais: "España",
        posicion: "Centrocampista",
        urlImagen: "imagenes/jugadores/pedri.jpg",
        urlBandera: "https://flagcdn.com/w80/es.png",
        colorFondoHex: "#AA151B",
        estadisticas: { goles: 2, partidos: 24 },
        destacado: false,
        curiosidad: "Ganador del Golden Boy 2021 y motor de la creación de juego en el mediocampo español."
    }),
    crearJugador({
        id: 12,
        nombre: "David Alaba",
        pais: "Austria",
        posicion: "Defensa",
        urlImagen: "imagenes/jugadores/alaba.jpg",
        urlBandera: "https://flagcdn.com/w80/at.png",
        colorFondoHex: "#ED2939",
        estadisticas: { goles: 15, partidos: 105 },
        destacado: false,
        curiosidad: "Capitán y figura polivalente que lidera el regreso de Austria a los grandes escenarios."
    })
);

// 4. Función para actualizar el contador de progreso
function actualizarContadorProgreso() {
    const total = cromosMundial.length;
    if (total === 0) return;

    const desbloqueados = cromosMundial.filter(j => j.desbloqueado).length;
    const porcentaje = Math.round((desbloqueados / total) * 100);

    const txtProgreso = document.getElementById("progress-text");
    const fillProgreso = document.getElementById("progress-bar-fill");

    if (txtProgreso) {
        txtProgreso.textContent = `${porcentaje}% (${desbloqueados} / ${total} cromos)`;
    }

    if (fillProgreso) {
        fillProgreso.style.width = `${porcentaje}%`;
    }
}

// 5. Función para desbloquear cromo con animación de destello (flash)
function desbloquearCromo(idJugador) {
    const jugador = cromosMundial.find(j => j.id === idJugador);
    if (!jugador) return;

    jugador.desbloqueado = true;

    const tarjetaElemento = document.getElementById(`cromo-card-${idJugador}`);
    if (tarjetaElemento) {
        // Remover clase bloqueado y añadir destello
        tarjetaElemento.classList.remove("cromo-bloqueado");
        tarjetaElemento.classList.add("flash-effect");

        // Quitar el botón de desbloquear
        const btn = tarjetaElemento.querySelector(".btn-unlock");
        if (btn) btn.remove();

        // Limpiar la clase de animación después de 0.5s
        setTimeout(() => {
            tarjetaElemento.classList.remove("flash-effect");
        }, 500);
    }

    // Actualizar el porcentaje global en tiempo real
    actualizarContadorProgreso();
}

// 6. Renderizado de lista con soporte para estado bloqueado
function renderizarListaJugadores(lista) {
    const contenedor = document.getElementById("cromos-container");
    if (!contenedor) return;

    if (lista.length === 0) {
        contenedor.innerHTML = `<p class="no-results">No se encontraron jugadores que coincidan con los filtros.</p>`;
        return;
    }

    contenedor.innerHTML = lista.map((jugador) => `
        <article 
            id="cromo-card-${jugador.id}" 
            class="cromo-card ${jugador.destacado ? 'destacado' : ''} ${!jugador.desbloqueado ? 'cromo-bloqueado' : ''}" 
            style="--bg-cromo: ${jugador.colorFondoHex};"
        >
            ${!jugador.desbloqueado ? `
                <button class="btn-unlock" onclick="desbloquearCromo(${jugador.id})">
                    🔓 Desbloquear Cromo con Reto
                </button>
            ` : ''}

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

                ${jugador.curiosidad ? `<p class="cromo-trivia">💡 <em>${jugador.curiosidad}</em></p>` : ''}
            </div>
        </article>
    `).join("");
}

// 7. Filtrado combinado (Respetando el estado de desbloqueo)
function aplicarFiltros() {
    const inputSearch = document.getElementById("search-input");
    const selectCountry = document.getElementById("country-select");

    const textoBusqueda = inputSearch ? inputSearch.value.toLowerCase().trim() : "";
    const paisSeleccionado = selectCountry ? selectCountry.value : "todos";

    const jugadoresFiltrados = cromosMundial.filter((jugador) => {
        const coincideTexto = 
            jugador.nombre.toLowerCase().includes(textoBusqueda) ||
            jugador.posicion.toLowerCase().includes(textoBusqueda);

        const coincidePais = 
            paisSeleccionado === "todos" || jugador.pais === paisSeleccionado;

        return coincideTexto && coincidePais;
    });

    renderizarListaJugadores(jugadoresFiltrados);
}

// 8. Inicialización al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("cromos-container")) {
        renderizarListaJugadores(cromosMundial);

        const inputSearch = document.getElementById("search-input");
        const selectCountry = document.getElementById("country-select");

        if (inputSearch) inputSearch.addEventListener("input", aplicarFiltros);
        if (selectCountry) selectCountry.addEventListener("change", aplicarFiltros);

        actualizarContadorProgreso();
    }
});