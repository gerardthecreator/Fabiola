/* js/Configuración electrónica/Animations.js */

const ConfiguracionAnimations = {
    /**
     * Crea y anima el Diagrama de Moeller dentro de un contenedor específico.
     * @param {string} containerId - El ID del elemento div donde se renderizará el SVG.
     */
    animarDiagramaMoeller: function(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Contenedor con ID "${containerId}" no encontrado.`);
            return;
        }
        container.innerHTML = ''; // Limpiar por si se llama de nuevo

        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("viewBox", "0 0 250 300");

        const orbitales = [
            "1s", "2s", "2p", "3s", "3p", "3d", "4s", "4p", "4d", "4f",
            "5s", "5p", "5d", "5f", "6s", "6p", "6d", "7s", "7p"
        ];
        const coords = {
            "1s": {x: 30, y: 30}, "2s": {x: 30, y: 70}, "2p": {x: 80, y: 70},
            "3s": {x: 30, y: 110}, "3p": {x: 80, y: 110}, "3d": {x: 130, y: 110},
            "4s": {x: 30, y: 150}, "4p": {x: 80, y: 150}, "4d": {x: 130, y: 150}, "4f": {x: 180, y: 150},
            "5s": {x: 30, y: 190}, "5p": {x: 80, y: 190}, "5d": {x: 130, y: 190}, "5f": {x: 180, y: 190},
            "6s": {x: 30, y: 230}, "6p": {x: 80, y: 230}, "6d": {x: 130, y: 230},
            "7s": {x: 30, y: 270}, "7p": {x: 80, y: 270}
        };

        // Dibuja los textos de los orbitales
        orbitales.forEach(orb => {
            const text = document.createElementNS(svgNS, "text");
            text.setAttribute("x", coords[orb].x);
            text.setAttribute("y", coords[orb].y);
            text.setAttribute("font-family", "var(--font-body)");
            text.setAttribute("font-size", "16px");
            text.setAttribute("fill", "var(--primary-color)");
            text.textContent = orb;
            svg.appendChild(text);
        });

        // Define las rutas de las flechas diagonales
        const paths = [
            "M 40 20 L 20 40", // 1s
            "M 40 60 L 20 80", // 2s
            "M 90 60 L 20 120", // 2p -> 3s
            "M 90 100 L 20 160", // 3p -> 4s
            "M 140 100 L 20 200", // 3d -> 4p -> 5s
            "M 190 140 L 20 240", // 4d -> 5p -> 6s
            "M 190 180 L 80 280", // 4f -> 5d -> 6p -> 7s
            "M 140 220 L 80 280" // 5f -> 6d -> 7p (parcial)
        ];

        // Anima cada flecha secuencialmente
        paths.forEach((d, index) => {
            const path = document.createElementNS(svgNS, "path");
            path.setAttribute("d", d);
            path.setAttribute("stroke", "var(--accent-color)");
            path.setAttribute("stroke-width", "2");
            path.setAttribute("fill", "none");
            path.setAttribute("stroke-linecap", "round");
            path.setAttribute("marker-end", "url(#arrowhead)");

            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            
            // La animación ocurre aquí
            setTimeout(() => {
                path.style.transition = "stroke-dashoffset 0.8s ease-in-out";
                path.style.strokeDashoffset = "0";
            }, index * 800); // 800ms de retraso entre cada flecha

            svg.appendChild(path);
        });
        
        // Define la punta de la flecha
        const defs = document.createElementNS(svgNS, "defs");
        const marker = document.createElementNS(svgNS, "marker");
        marker.setAttribute("id", "arrowhead");
        marker.setAttribute("viewBox", "0 0 10 10");
        marker.setAttribute("refX", "8");
        marker.setAttribute("refY", "5");
        marker.setAttribute("markerWidth", "6");
        marker.setAttribute("markerHeight", "6");
        marker.setAttribute("orient", "auto-start-reverse");
        const arrowheadPath = document.createElementNS(svgNS, "path");
        arrowheadPath.setAttribute("d", "M 0 0 L 10 5 L 0 10 z");
        arrowheadPath.setAttribute("fill", "var(--accent-color)");
        marker.appendChild(arrowheadPath);
        defs.appendChild(marker);
        svg.prepend(defs);

        container.appendChild(svg);
    }
};

window.ConfiguracionAnimations = ConfiguracionAnimations;