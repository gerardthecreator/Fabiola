/* js/Peso atómico/Exercise6.js */

// Contiene el HTML para el sexto ejercicio de Peso Atómico (desafío).

const PesoAtomicoExercise6 = {
 /**
  * Devuelve el contenido HTML del ejercicio 6.
  * @returns {string} - Una cadena de texto con el HTML.
  */
 getHTML: function() {
  return `
            <!-- Ejercicio 6: ¡Un Desafío! Encontrar la masa de un isótopo -->
            <div class="card exercise-card challenge">
                <h4>Ejercicio 6: El misterio del Galio (Ga)</h4>
                <p>
                    El peso atómico del Galio (Ga) que aparece en la tabla periódica es <strong>69.723 uma</strong>.
                    Sabemos que tiene dos isótopos: Ga-69 y Ga-71.
                </p>
                <ul>
                    <li><strong>Ga-69:</strong> tiene una masa de 68.9256 uma y una abundancia de 60.11%.</li>
                </ul>
                <p><strong>Tu misión:</strong> Calcular la masa del isótopo Ga-71.</p>
                
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Encontrar la abundancia del Ga-71</div>
                        <p>Si la abundancia total es 100%, y Ga-69 es 60.11%, el resto debe ser Ga-71.</p>
                        <div class="formula">
                           Abundancia Ga-71 = 100% - 60.11% = 39.89%<br>
                           En formato fraccional: 0.3989
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Plantear la ecuación completa</div>
                        <p>Usamos la fórmula del peso atómico, pero esta vez nuestra incógnita (la llamaremos 'M') es la masa del Ga-71.</p>
                        <div class="formula">
                           69.723 = (masa Ga-69 × abund. Ga-69) + (M × abund. Ga-71)
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Sustituir los valores conocidos</div>
                        <div class="formula">
                           69.723 = (68.9256 × 0.6011) + (M × 0.3989)
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Resolver la primera parte y despejar M</div>
                        <p>Primero, calculamos la contribución del Ga-69.</p>
                        <div class="formula">
                           69.723 = 41.431 + (M × 0.3989)<br>
                           69.723 - 41.431 = M × 0.3989<br>
                           28.292 = M × 0.3989
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 5: Calcular el resultado final</div>
                        <p>Ahora dividimos para encontrar M.</p>
                        <div class="formula">
                           M = 28.292 / 0.3989
                        </div>
                        <div class="result">La masa del isótopo Ga-71 es aproximadamente 70.9246 uma.</div>
                    </div>
                </div>
            </div>
        `;
 }
};

// Hacemos el objeto accesible globalmente
window.PesoAtomicoExercise6 = PesoAtomicoExercise6;