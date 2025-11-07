/* js/Configuración electrónica/Exercise4.js */

const ConfiguracionExercise4 = {
 getHTML: function() {
  return `
            <!-- Ejercicio 4: Neón (Ne) -->
            <div class="card exercise-card">
                <h4>Ejercicio 4: Configuración Electrónica del Neón (Ne)</h4>
                <p>El Neón (Z=10) es un gas noble, famoso por las luces brillantes que produce.</p>
                
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Número de electrones</div>
                        <p>El número atómico (Z) del Neón es 10. Tenemos <strong>10 electrones</strong>.</p>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Llenar orbitales</div>
                        <ol>
                            <li><strong>1s</strong>: Llenamos con 2 electrones. (Quedan 8).</li>
                            <li><strong>2s</strong>: Llenamos con 2 electrones. (Quedan 6).</li>
                            <li><strong>2p</strong>: Llenamos con los 6 electrones restantes. ¡El subnivel 'p' queda completo!</li>
                        </ol>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Escribir la configuración</div>
                        <div class="formula">1s² 2s² 2p⁶</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Diagrama de Orbitales</div>
                        <p>
                            Observa cómo todos los orbitales en el nivel de energía 2 están completamente llenos. Esto hace que el Neón sea muy estable y no reactivo.
                        </p>
                        <div id="diagrama-ne" class="orbital-diagram-container"></div>
                    </div>
                </div>
            </div>
        `;
 },
 getConfig: function() {
  return [{ orbital: '1s', electrones: 2 }, { orbital: '2s', electrones: 2 }, { orbital: '2p', electrones: 6 }];
 }
};

window.ConfiguracionExercise4 = ConfiguracionExercise4;