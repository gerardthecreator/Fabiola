/* js/Configuración electrónica/Draw.js */

const ConfiguracionDraw = {
    /**
     * Genera y renderiza un diagrama de orbitales SVG en un contenedor específico.
     * @param {string} containerId - El ID del div donde se dibujará el diagrama.
     * @param {Array<Object>} configuracion - Un array de objetos, ej: [{orbital: '1s', electrones: 2}, {orbital: '2p', electrones: 3}]
     */
    generarDiagramaOrbitales: function(containerId, configuracion) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Contenedor de diagrama con ID "${containerId}" no encontrado.`);
            return;
        }
        container.innerHTML = ''; // Limpiar contenedor

        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("viewBox", "0 0 400 60"); // Ancho flexible, altura fija
        svg.style.fontFamily = "var(--font-body)";
        svg.style.fontSize = "14px";

        const orbitalInfo = {
            's': { cajas: 1 },
            'p': { cajas: 3 },
            'd': { cajas: 5 },
            'f': { cajas: 7 }
        };

        let currentX = 10;
        const boxSize = 30;
        const spacing = 5;
        const groupSpacing = 15;

        configuracion.forEach(item => {
            const { orbital, electrones } = item;
            const tipo = orbital.slice(-1); // 's', 'p', 'd', 'f'
            const info = orbitalInfo[tipo];
            if (!info) return;

            // Dibujar etiqueta del orbital (e.g., "2p")
            const label = document.createElementNS(svgNS, "text");
            label.setAttribute("x", currentX);
            label.setAttribute("y", 20);
            label.setAttribute("fill", "var(--primary-color)");
            label.textContent = orbital;
            svg.appendChild(label);

            // Dibujar las cajas (orbitales)
            for (let i = 0; i < info.cajas; i++) {
                const rect = document.createElementNS(svgNS, "rect");
                rect.setAttribute("x", currentX + i * (boxSize + spacing));
                rect.setAttribute("y", 30);
                rect.setAttribute("width", boxSize);
                rect.setAttribute("height", boxSize);
                rect.setAttribute("fill", "none");
                rect.setAttribute("stroke", "var(--secondary-color)");
                rect.setAttribute("stroke-width", "1.5");
                svg.appendChild(rect);
            }

            // Dibujar los electrones (flechas) respetando la Regla de Hund
            let electronesRestantes = electrones;
            // Primero, flechas hacia arriba
            for (let i = 0; i < info.cajas && electronesRestantes > 0; i++) {
                if (electrones > info.cajas) { // Si hay que aparear, no animamos
                    this.dibujarFlecha(svg, currentX + i * (boxSize + spacing), true);
                } else { // Animamos si no hay apareamiento forzado
                    setTimeout(() => this.dibujarFlecha(svg, currentX + i * (boxSize + spacing), true), i * 200);
                }
                electronesRestantes--;
            }
            // Segundo, flechas hacia abajo
            for (let i = 0; i < info.cajas && electronesRestantes > 0; i++) {
                 setTimeout(() => this.dibujarFlecha(svg, currentX + i * (boxSize + spacing), false), (info.cajas * 200) + i * 200);
                electronesRestantes--;
            }

            currentX += info.cajas * (boxSize + spacing) + groupSpacing;
        });

        container.appendChild(svg);
    },

    /**
     * Dibuja una flecha de spin (electrón) dentro de una caja.
     * @param {SVGElement} svg - El elemento SVG principal.
     * @param {number} boxX - La coordenada X de la caja.
     * @param {boolean} isUp - true para flecha arriba, false para flecha abajo.
     */
    dibujarFlecha: function(svg, boxX, isUp) {
        const svgNS = "http://www.w3.org/2000/svg";
        const path = document.createElementNS(svgNS, "path");
        const boxSize = 30;
        const xOffset = isUp ? boxSize / 3 : (boxSize * 2) / 3;
        const startY = 55, endY = 35;
        
        const d = isUp
            ? `M ${boxX + xOffset} ${startY} L ${boxX + xOffset} ${endY} M ${boxX + xOffset - 4} ${endY + 4} L ${boxX + xOffset} ${endY} L ${boxX + xOffset + 4} ${endY + 4}`
            : `M ${boxX + xOffset} ${endY} L ${boxX + xOffset} ${startY} M ${boxX + xOffset - 4} ${startY - 4} L ${boxX + xOffset} ${startY} L ${boxX + xOffset + 4} ${startY - 4}`;

        path.setAttribute("d", d);
        path.setAttribute("stroke", "var(--accent-color)");
        path.setAttribute("stroke-width", "2");
        path.setAttribute("fill", "none");
        path.setAttribute("stroke-linecap", "round");
        
        // Animación de aparición
        path.style.opacity = 0;
        path.style.transition = "opacity 0.5s ease";
        svg.appendChild(path);
        setTimeout(() => { path.style.opacity = 1; }, 10); // Pequeño delay para que la transición se aplique
    }
};

window.ConfiguracionDraw = ConfiguracionDraw;