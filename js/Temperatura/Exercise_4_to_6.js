/* js/Temperatura/Exercise_4_to_6.js */

// Este objeto contiene el HTML para los ejercicios 4 al 6 de temperatura.

const TemperaturaEjercicios4a6 = {
 /**
  * Devuelve el contenido HTML de los ejercicios 4 al 6.
  * @returns {string} - Una cadena de texto con el HTML.
  */
 getHTML: function() {
  return `
            <!-- Ejercicio 4 -->
            <div class="card exercise-card">
                <h4>Ejercicio 4: Convertir 0 K a Celsius (°C)</h4>
                <p>El cero absoluto es 0 Kelvin, la temperatura más fría posible. ¿Cuánto es en Celsius?</p>
                <div class="step-by-step-container">
                    <div class="step"><div class="step-title">Paso 1: Fórmula</div><p>Para ir de Kelvin a Celsius, usamos:</p><div class="formula">°C = K - 273.15</div></div>
                    <div class="step"><div class="step-title">Paso 2: Sustituir</div><p>Reemplazamos K con 0.</p><div class="formula">°C = 0 - 273.15</div></div>
                    <div class="step"><div class="step-title">Paso 3: Resultado</div><div class="result">0 K equivale a -273.15°C.</div></div>
                </div>
            </div>

            <!-- Ejercicio 5 -->
            <div class="card exercise-card">
                <h4>Ejercicio 5: Convertir 98.6°F a Kelvin (K)</h4>
                <p>La temperatura corporal normal es 98.6°F. ¿Cuánto es en Kelvin?</p>
                <div class="step-by-step-container">
                    <div class="step"><div class="step-title">Paso 1: Convertir °F a °C</div><p>No hay fórmula directa, así que primero pasamos a Celsius.</p><div class="formula">°C = (98.6 - 32) × 5/9 = 37°C</div></div>
                    <div class="step"><div class="step-title">Paso 2: Convertir °C a K</div><p>Ahora usamos el resultado anterior para pasar a Kelvin.</p><div class="formula">K = 37 + 273.15</div></div>
                    <div class="step"><div class="step-title">Paso 3: Resultado</div><div class="result">98.6°F equivale a 310.15 K.</div></div>
                </div>
            </div>

            <!-- Ejercicio 6 -->
            <div class="card exercise-card">
                <h4>Ejercicio 6: Convertir 298.15 K a Fahrenheit (°F)</h4>
                <p>La temperatura ambiente estándar en química es 298.15 K. ¿Y en Fahrenheit?</p>
                <div class="step-by-step-container">
                    <div class="step"><div class="step-title">Paso 1: Convertir K a °C</div><p>Primero, pasamos de Kelvin a Celsius.</p><div class="formula">°C = 298.15 - 273.15 = 25°C</div></div>
                    <div class="step"><div class="step-title">Paso 2: Convertir °C a °F</div><p>Con el valor en Celsius, ahora convertimos a Fahrenheit.</p><div class="formula">°F = (25 × 9/5) + 32 = 45 + 32 = 77°F</div></div>
                    <div class="step"><div class="step-title">Paso 3: Resultado</div><div class="result">298.15 K equivale a 77°F.</div></div>
                </div>
            </div>
        `;
 }
};

window.TemperaturaEjercicios4a6 = TemperaturaEjercicios4a6;