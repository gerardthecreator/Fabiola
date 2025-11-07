/* ==========================================================================
   TEMPERATURA/ANIMATIONS.JS
   --------------------------------------------------------------------------
   Este módulo contiene funciones para crear y animar visualizaciones SVG
   relacionadas con el tema de la temperatura.
   ========================================================================== */

const TemperaturaAnimations = {
    
    // --- Opciones por Defecto ---
    defaultOptions: {
        width: 80,
        height: 200,
        min: 0,
        max: 100,
        unit: '°',
        duration: 1500, // Duración de la animación en ms
        mercuryColor: '#e74c3c',
        caseColor: '#34495e',
        fillColor: '#f0f0f0'
    },
    
    /**
     * Dibuja y anima un termómetro SVG en un contenedor específico.
     * @param {string} containerId - El ID del div donde se renderizará el termómetro.
     * @param {number} value - El valor final que debe mostrar el termómetro.
     * @param {object} [options={}] - Un objeto para personalizar la apariencia y animación.
     */
    animateThermometer: function(containerId, value, options = {}) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`[TemperaturaAnimations] Contenedor con ID "${containerId}" no encontrado.`);
            return;
        }
        container.innerHTML = ''; // Limpiar el contenedor antes de dibujar
        
        // Fusionar opciones de usuario con las opciones por defecto
        const finalOptions = { ...this.defaultOptions, ...options };
        
        // Crear el elemento SVG
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("viewBox", `0 0 ${finalOptions.width} ${finalOptions.height}`);
        svg.setAttribute("width", finalOptions.width);
        svg.setAttribute("height", finalOptions.height);
        
        // Definir la estructura del termómetro en SVG
        svg.innerHTML = this._getThermometerSVGStructure(finalOptions);
        container.appendChild(svg);
        
        // Obtener referencias a los elementos a animar
        const mercuryRect = svg.getElementById('mercury-rect');
        const valueText = svg.getElementById('value-text');
        
        // Iniciar la animación
        this._animateFill(mercuryRect, valueText, value, finalOptions);
    },
    
    // --- Métodos Privados de Ayuda ---
    
    /**
     * Genera la cadena de texto con la estructura SVG base del termómetro.
     * @private
     * @param {object} options - Las opciones de configuración finales.
     * @returns {string} La cadena HTML del SVG.
     */
    _getThermometerSVGStructure: function(options) {
        const bulbRadius = options.width / 4;
        const stemWidth = bulbRadius;
        const bulbCenterX = options.width / 2;
        const bulbCenterY = options.height - bulbRadius - 5;
        const stemHeight = bulbCenterY - (options.height * 0.1);
        
        return `
            <defs>
                <linearGradient id="mercuryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="${options.mercuryColor}" />
                    <stop offset="100%" stop-color="${options.mercuryColor}bf" />
                </linearGradient>
            </defs>
            <g stroke="${options.caseColor}" stroke-width="2">
                <!-- Carcasa del termómetro -->
                <rect x="${bulbCenterX - stemWidth / 2}" y="${options.height * 0.1}" width="${stemWidth}" height="${stemHeight}" rx="${stemWidth / 2}" fill="${options.fillColor}" />
                <circle cx="${bulbCenterX}" cy="${bulbCenterY}" r="${bulbRadius}" fill="${options.fillColor}" />
                
                <!-- Mercurio (parte estática del bulbo) -->
                <circle cx="${bulbCenterX}" cy="${bulbCenterY}" r="${bulbRadius * 0.8}" fill="url(#mercuryGradient)" stroke="none" />
                
                <!-- Mercurio (parte animada del tallo) -->
                <rect id="mercury-rect" x="${bulbCenterX - (stemWidth / 2) * 0.8}" y="${bulbCenterY}" width="${stemWidth * 0.8}" height="0" fill="url(#mercuryGradient)" stroke="none" />

                <!-- Texto del valor -->
                <text id="value-text" x="${bulbCenterX}" y="${bulbCenterY - stemHeight / 2}" font-family="Anton, sans-serif" font-size="16" fill="${options.caseColor}" text-anchor="middle" alignment-baseline="middle">
                    ${options.min}${options.unit}
                </text>
            </g>
        `;
    },
    
    /**
     * Anima el llenado del mercurio y la actualización del texto usando requestAnimationFrame.
     * @private
     */
    _animateFill: function(rectElement, textElement, finalValue, options) {
        let startTime = null;
        const { min, max, duration, unit } = options;
        
        const bulbCenterY = options.height - (options.width / 4) - 5;
        const stemHeight = bulbCenterY - (options.height * 0.1);
        
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easedProgress = this._easeOutQuad(progress);
            
            // Calcular el valor y la altura actuales
            const currentValue = min + (finalValue - min) * easedProgress;
            const fillPercentage = (currentValue - min) / (max - min);
            const mercuryHeight = Math.max(0, Math.min(1, fillPercentage)) * stemHeight;
            
            // Actualizar los atributos del SVG
            rectElement.setAttribute('y', bulbCenterY - mercuryHeight);
            rectElement.setAttribute('height', mercuryHeight);
            textElement.textContent = `${Math.round(currentValue)}${unit}`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    },
    
    /**
     * Función de easing para una animación más suave.
     * @private
     * @param {number} t - Progreso de la animación (0 a 1).
     * @returns {number} - Progreso suavizado.
     */
    _easeOutQuad: function(t) {
        return t * (2 - t);
    }
};

// Exponer el módulo al scope global
window.TemperaturaAnimations = TemperaturaAnimations;
