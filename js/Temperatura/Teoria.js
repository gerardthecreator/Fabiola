/* ==========================================================================
   TEMPERATURA/TEORIA.JS
   --------------------------------------------------------------------------
   Este módulo proporciona el contenido HTML completo y enriquecido para la
   sección teórica de Conversión de Temperatura.
   ========================================================================== */

const TemperaturaTeoria = {
    /**
     * Devuelve el contenido HTML de la teoría de temperatura.
     * Utiliza clases de CSS definidas en los archivos de componentes y recursos
     * para una presentación visual consistente y rica.
     * @returns {string} - Una cadena de texto con el HTML.
     */
    getHTML: function() {
        return `
            <!-- Título Principal de la Teoría -->
            <h3>¿Qué es la Temperatura? La Energía Invisible</h3>
            
            <p class="lead-paragraph">
                La temperatura es una medida de qué tan caliente o frío está un objeto. A nivel microscópico, es un reflejo de la <strong>energía cinética promedio</strong> de las partículas (átomos o moléculas) que componen ese objeto. ¡Más movimiento significa más temperatura!
            </p>

            <!-- Sección de Escalas de Temperatura -->
            <h4>Las Escalas: Diferentes Formas de Medir lo Mismo</h4>
            <p>Para medir la temperatura, usamos diferentes escalas. Cada una tiene puntos de referencia distintos, pero todas miden la misma propiedad física. Las tres más importantes son:</p>
            
            <!-- Tabla Comparativa de Escalas -->
            <div class="table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Escala</th>
                            <th>Símbolo</th>
                            <th>Punto de Congelación del Agua</th>
                            <th>Punto de Ebullición del Agua</th>
                            <th>Uso Principal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Celsius</strong></td>
                            <td>°C</td>
                            <td>0 °C</td>
                            <td>100 °C</td>
                            <td>Uso global y científico</td>
                        </tr>
                        <tr>
                            <td><strong>Fahrenheit</strong></td>
                            <td>°F</td>
                            <td>32 °F</td>
                            <td>212 °F</td>
                            <td>Principalmente en EE. UU.</td>
                        </tr>
                        <tr>
                            <td><strong>Kelvin</strong></td>
                            <td>K</td>
                            <td>273.15 K</td>
                            <td>373.15 K</td>
                            <td>Científico (escala absoluta)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="alert alert-info">
                <h4><span class="icon"></span>¡Dato Curioso sobre Kelvin!</h4>
                <p>La escala Kelvin se basa en el <strong>cero absoluto</strong> (0 K), la temperatura teórica más fría posible donde todo movimiento atómico se detiene. Por eso, no tiene valores negativos y no se usa el símbolo de grado (°).</p>
            </div>

            <!-- Sección de Fórmulas de Conversión -->
            <hr class="visual-divider">
            <h3>Las Fórmulas Mágicas de la Conversión</h3>
            <p>Para pasar de una escala a otra, no necesitamos magia, ¡sino matemáticas! Estas son las fórmulas clave que usaremos en los ejercicios:</p>

            <div class="formula-container grid-cols-auto-fit">
                <div class="formula">
                    <strong>De Celsius (°C) a Fahrenheit (°F):</strong>
                    <span>°F = (°C × 9/5) + 32</span>
                </div>
                <div class="formula">
                    <strong>De Fahrenheit (°F) a Celsius (°C):</strong>
                    <span>°C = (°F - 32) × 5/9</span>
                </div>
                <div class="formula">
                    <strong>De Celsius (°C) a Kelvin (K):</strong>
                    <span>K = °C + 273.15</span>
                </div>
                <div class="formula">
                    <strong>De Kelvin (K) a Celsius (°C):</strong>
                    <span>°C = K - 273.15</span>
                </div>
            </div>

            <div class="alert alert-warning">
                <h4><span class="icon"></span>¡Atención a la Ruta de Conversión!</h4>
                <p>Para convertir entre <strong>Fahrenheit y Kelvin</strong>, no hay una fórmula directa común. El camino más seguro y fácil es siempre convertir primero a Celsius y luego a la escala final. ¡Es un paso intermedio que evita errores!</p>
            </div>

            <!-- Platzhalter para una posible animación -->
            <div class="figure-container">
                <div id="termometro-ejemplo" style="display: flex; justify-content: center;">
                    <!-- El Orquestador puede inyectar aquí la animación del termómetro -->
                </div>
                <figcaption class="caption">
                    Visualización de una temperatura en un termómetro.
                </figcaption>
            </div>
        `;
    }
};

// Exponer el módulo al scope global
window.TemperaturaTeoria = TemperaturaTeoria;