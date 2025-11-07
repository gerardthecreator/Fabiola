/* js/Configuración electrónica/Exercise3.js */

const ConfiguracionExercise3 = {
 getHTML: function() {
  return `
            <!-- Ejercicio 3: Nitrógeno (N) -->
            <div class="card exercise-card">
                <h4>Ejercicio 3: Configuración Electrónica del Nitrógeno (N)</h4>
                <p>El Nitrógeno (Z=7) compone la mayor parte del aire que respiramos.</p>
                
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Número de electrones</div>
                        <p>El número atómico (Z) del Nitrógeno es 7. Tenemos <strong>7 electrones</strong> para distribuir.</p>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Llenar orbitales</div>
                        <ol>
                            <li><strong>1s</strong>: Llenamos con 2 electrones. (Quedan 5).</li>
                            <li><strong>2s</strong>: Llenamos con 2 electrones. (Quedan 3).</li>
                            <li><strong>2p</strong>: Colocamos los 3 electrones restantes aquí.</li>
                        </ol>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Escribir la configuración</div>
                        <div class="formula">1s² 2s² 2p³</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Diagrama de Orbitales</div>
                        <p>
                            Este es un ejemplo perfecto de la <strong>Regla de Hund</strong>. Los 3 electrones en el subnivel '2p' ocupan cada uno un orbital diferente con el mismo spin, antes de empezar a aparearse.
                        </p>
                        <div id="diagrama-n" class="orbital-diagram-container"></div>
                    </div>
                </div>
            </div>
        `;
 },
 getConfig: function() {
  return [{ orbital: '1s', electrones: 2 }, { orbital: '2s', electrones: 2 }, { orbital: '2p', electrones: 3 }];
 }
};

window.ConfiguracionExercise3 = ConfiguracionExercise3;