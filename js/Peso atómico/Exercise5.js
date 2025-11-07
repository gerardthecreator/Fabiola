/* js/Peso atómico/Exercise5.js */

// Contiene el HTML para el quinto ejercicio de Peso Atómico.

const PesoAtomicoExercise5 = {
 /**
  * Devuelve el contenido HTML del ejercicio 5.
  * @returns {string} - Una cadena de texto con el HTML.
  */
 getHTML: function() {
  return `
            <!-- Ejercicio 5: El caso clásico del Cloro (Cl) -->
            <div class="card exercise-card">
                <h4>Ejercicio 5: Calcular el peso atómico del Cloro (Cl)</h4>
                <p>El Cloro es el ejemplo perfecto para entender por qué los pesos atómicos no son números enteros. Sus dos isótopos principales son:</p>
                <ul>
                    <li><strong>Cloro-35:</strong> masa de 34.9689 uma, abundancia de 75.77%.</li>
                    <li><strong>Cloro-37:</strong> masa de 36.9659 uma, abundancia de 24.23%.</li>
                </ul>
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Convertir abundancias a formato fraccional</div>
                        <div class="formula">
                            Cloro-35: 75.77% / 100 = 0.7577<br>
                            Cloro-37: 24.23% / 100 = 0.2423
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Aplicar la fórmula</div>
                        <div class="formula">
                           Peso Atómico = (34.9689 × 0.7577) + (36.9659 × 0.2423)
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Calcular cada término</div>
                        <div class="formula">
                           (26.4959) + (8.9568)
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Resultado final</div>
                        <div class="result">El peso atómico del Cloro es 35.4527 uma.</div>
                    </div>
                </div>
            </div>
        `;
 }
};

// Hacemos el objeto accesible globalmente
window.PesoAtomicoExercise5 = PesoAtomicoExercise5;