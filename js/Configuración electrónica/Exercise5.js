/* js/Configuración electrónica/Exercise5.js */

const ConfiguracionExercise5 = {
 getHTML: function() {
  return `
            <!-- Ejercicio 5: Sodio (Na) y Notación de Kernel -->
            <div class="card exercise-card">
                <h4>Ejercicio 5: Configuración del Sodio (Na) y Notación de Kernel</h4>
                <p>El Sodio (Z=11) es el elemento que sigue al Neón. ¿Ves alguna similitud?</p>
                
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Configuración completa</div>
                        <p>Con <strong>11 electrones</strong>, la configuración completa es:</p>
                        <div class="formula">1s² 2s² 2p⁶ 3s¹</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Introduciendo la Notación de Kernel</div>
                        <p>
                            Fíjate que la primera parte (<strong>1s² 2s² 2p⁶</strong>) es exactamente la configuración del Neón (Ne). Para simplificar, los químicos usan un atajo llamado "notación de kernel" o de gas noble.
                        </p>
                        <p>Reemplazamos la configuración del gas noble anterior por su símbolo entre corchetes.</p>
                        <div class="formula">[Ne] 3s¹</div>
                        <p class="tip">¡Mucho más corto y práctico! Solo muestra los electrones de valencia (los del último nivel).</p>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Diagrama de Orbitales (solo valencia)</div>
                        <p>Normalmente, con la notación de kernel, solo se dibuja el diagrama para los electrones de valencia.</p>
                        <div id="diagrama-na" class="orbital-diagram-container"></div>
                    </div>
                </div>
            </div>
        `;
 },
 getConfig: function() {
  return [{ orbital: '3s', electrones: 1 }];
 }
};

window.ConfiguracionExercise5 = ConfiguracionExercise5;