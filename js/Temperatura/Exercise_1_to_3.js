/* js/Temperatura/Exercise_1_to_3.js */

// Este objeto contiene el HTML para los primeros 3 ejercicios de temperatura.
// Cada ejercicio está estructurado como un tutorial guiado.

const TemperaturaEjercicios1a3 = {
 /**
  * Devuelve el contenido HTML de los ejercicios 1 al 3.
  * @returns {string} - Una cadena de texto con el HTML.
  */
 getHTML: function() {
  return `
            <!-- Ejercicio 1 -->
            <div class="card exercise-card">
                <h4>Ejercicio 1: Convertir 25°C a Fahrenheit (°F)</h4>
                <p>Un día agradable, la temperatura es de 25°C. ¿Cuánto sería en Fahrenheit?</p>
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Elegir la fórmula correcta</div>
                        <p>Necesitamos pasar de Celsius a Fahrenheit, así que usamos:</p>
                        <div class="formula">°F = (°C × 9/5) + 32</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Sustituir el valor</div>
                        <p>Reemplazamos °C con nuestro valor, que es 25:</p>
                        <div class="formula">°F = (25 × 9/5) + 32</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Resolver la operación</div>
                        <p>Primero, la multiplicación: 25 × 9/5 = 45. Luego, la suma:</p>
                        <div class="formula">°F = 45 + 32</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Resultado Final</div>
                        <div class="result">25°C equivalen a 77°F.</div>
                    </div>
                </div>
            </div>

            <!-- Ejercicio 2 -->
            <div class="card exercise-card">
                <h4>Ejercicio 2: Convertir 100°C a Kelvin (K)</h4>
                <p>El agua hierve a 100°C. ¿Cuál es esta temperatura en la escala científica Kelvin?</p>
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Elegir la fórmula correcta</div>
                        <p>Para convertir de Celsius a Kelvin, la fórmula es:</p>
                        <div class="formula">K = °C + 273.15</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Sustituir el valor</div>
                        <p>Reemplazamos °C con 100:</p>
                        <div class="formula">K = 100 + 273.15</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Resolver la operación</div>
                        <p>Simplemente sumamos los dos números:</p>
                        <div class="formula">K = 373.15</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Resultado Final</div>
                        <div class="result">100°C equivalen a 373.15 K.</div>
                    </div>
                </div>
            </div>

            <!-- Ejercicio 3 -->
            <div class="card exercise-card">
                <h4>Ejercicio 3: Convertir 68°F a Celsius (°C)</h4>
                <p>En un termostato de aire acondicionado marca 68°F. ¿A cuántos grados Celsius corresponde?</p>
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Elegir la fórmula correcta</div>
                        <p>Ahora vamos de Fahrenheit a Celsius. La fórmula es:</p>
                        <div class="formula">°C = (°F - 32) × 5/9</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Sustituir el valor</div>
                        <p>Reemplazamos °F con 68:</p>
                        <div class="formula">°C = (68 - 32) × 5/9</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Resolver la operación</div>
                        <p>Primero el paréntesis: 68 - 32 = 36. Luego la multiplicación:</p>
                        <div class="formula">°C = 36 × 5/9 = 20</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Resultado Final</div>
                        <div class="result">68°F equivalen a 20°C.</div>
                    </div>
                </div>
            </div>
        `;
 }
};