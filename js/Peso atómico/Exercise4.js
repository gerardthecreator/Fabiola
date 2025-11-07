/* js/Peso atómico/Exercise4.js */

// Contiene el HTML para el cuarto ejercicio de Peso Atómico.

const PesoAtomicoExercise4 = {
 /**
  * Devuelve el contenido HTML del ejercicio 4.
  * @returns {string} - Una cadena de texto con el HTML.
  */
 getHTML: function() {
  return `
            <!-- Ejercicio 4: Tres Isótopos (Silicio) -->
            <div class="card exercise-card">
                <h4>Ejercicio 4: Calcular el peso atómico del Silicio (Si)</h4>
                <p>El Silicio, fundamental en la electrónica, tiene tres isótopos estables:</p>
                <ul>
                    <li><strong>Si-28:</strong> masa de 27.9769 uma, abundancia de 92.23%.</li>
                    <li><strong>Si-29:</strong> masa de 28.9765 uma, abundancia de 4.68%.</li>
                    <li><strong>Si-30:</strong> masa de 29.9738 uma, abundancia de 3.09%.</li>
                </ul>
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Convertir abundancias a formato fraccional</div>
                        <div class="formula">
                            Si-28: 92.23% / 100 = 0.9223<br>
                            Si-29: 4.68% / 100 = 0.0468<br>
                            Si-30: 3.09% / 100 = 0.0309
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Aplicar la fórmula del promedio ponderado</div>
                        <p>Sumamos la contribución de cada isótopo.</p>
                        <div class="formula" style="font-size: 0.9rem;">
                           Peso Atómico = (27.9769 × 0.9223) + (28.9765 × 0.0468) + (29.9738 × 0.0309)
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Calcular cada término</div>
                        <div class="formula">
                           (25.8031) + (1.3561) + (0.9262)
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Sumar para el resultado final</div>
                        <div class="result">El peso atómico del Silicio es 28.0854 uma.</div>
                    </div>
                </div>
            </div>
        `;
 }
};

// Hacemos el objeto accesible globalmente
window.PesoAtomicoExercise4 = PesoAtomicoExercise4;