/* js/Peso atómico/Exercise_1_to_3.js */

// Contiene el HTML para los primeros 3 ejercicios de Peso Atómico.

const PesoAtomicoEjercicios1a3 = {
 /**
  * Devuelve el contenido HTML de los ejercicios 1 al 3.
  * @returns {string} - Una cadena de texto con el HTML.
  */
 getHTML: function() {
  return `
            <!-- Ejercicio 1: Dos Isótopos (Boro) -->
            <div class="card exercise-card">
                <h4>Ejercicio 1: Calcular el peso atómico del Boro (B)</h4>
                <p>El Boro tiene dos isótopos naturales:</p>
                <ul>
                    <li><strong>Boro-10:</strong> masa de 10.0129 uma, abundancia de 19.9%.</li>
                    <li><strong>Boro-11:</strong> masa de 11.0093 uma, abundancia de 80.1%.</li>
                </ul>
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Convertir abundancias a formato fraccional</div>
                        <p>Dividimos cada porcentaje entre 100.</p>
                        <div class="formula">Boro-10: 19.9% / 100 = 0.199<br>Boro-11: 80.1% / 100 = 0.801</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Aplicar la fórmula del promedio ponderado</div>
                        <p>Multiplicamos la masa de cada isótopo por su abundancia fraccional y sumamos los resultados.</p>
                        <div class="formula">Peso Atómico = (10.0129 × 0.199) + (11.0093 × 0.801)</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Calcular cada término</div>
                        <div class="formula">(1.9925) + (8.8184)</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Sumar para el resultado final</div>
                        <div class="result">El peso atómico del Boro es 10.8109 uma.</div>
                    </div>
                </div>
            </div>

            <!-- Ejercicio 2: Dos Isótopos (Cobre) -->
            <div class="card exercise-card">
                <h4>Ejercicio 2: Calcular el peso atómico del Cobre (Cu)</h4>
                <p>El Cobre se encuentra en la naturaleza con dos isótopos:</p>
                <ul>
                    <li><strong>Cobre-63:</strong> masa de 62.9296 uma, abundancia de 69.17%.</li>
                    <li><strong>Cobre-65:</strong> masa de 64.9278 uma, abundancia de 30.83%.</li>
                </ul>
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Convertir abundancias a formato fraccional</div>
                        <div class="formula">Cobre-63: 69.17% / 100 = 0.6917<br>Cobre-65: 30.83% / 100 = 0.3083</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Aplicar la fórmula</div>
                        <div class="formula">Peso Atómico = (62.9296 × 0.6917) + (64.9278 × 0.3083)</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Calcular cada término</div>
                        <div class="formula">(43.5284) + (20.0172)</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Resultado final</div>
                        <div class="result">El peso atómico del Cobre es 63.5456 uma.</div>
                    </div>
                </div>
            </div>

            <!-- Ejercicio 3: Tres Isótopos (Magnesio) -->
            <div class="card exercise-card">
                <h4>Ejercicio 3: Calcular el peso atómico del Magnesio (Mg)</h4>
                <p>El Magnesio es más complejo, tiene tres isótopos naturales:</p>
                <ul>
                    <li><strong>Mg-24:</strong> masa de 23.9850 uma, abundancia de 78.99%.</li>
                    <li><strong>Mg-25:</strong> masa de 24.9858 uma, abundancia de 10.00%.</li>
                    <li><strong>Mg-26:</strong> masa de 25.9826 uma, abundancia de 11.01%.</li>
                </ul>
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Convertir todas las abundancias</div>
                        <div class="formula">Mg-24: 0.7899<br>Mg-25: 0.1000<br>Mg-26: 0.1101</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Aplicar la fórmula (ahora con tres términos)</div>
                        <div class="formula">Peso Atómico = (23.9850 × 0.7899) + (24.9858 × 0.1000) + (25.9826 × 0.1101)</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Calcular cada término</div>
                        <div class="formula">(18.9458) + (2.4986) + (2.8607)</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Resultado final</div>
                        <div class="result">El peso atómico del Magnesio es 24.3051 uma.</div>
                    </div>
                </div>
            </div>
        `;
 }
};