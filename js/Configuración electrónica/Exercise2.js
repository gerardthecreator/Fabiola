/* js/Configuración electrónica/Exercise2.js */

const ConfiguracionExercise2 = {
 getHTML: function() {
  return `
            <!-- Ejercicio 2: Carbono (C) -->
            <div class="card exercise-card">
                <h4>Ejercicio 2: Configuración Electrónica del Carbono (C)</h4>
                <p>El Carbono (Z=6) es la base de la vida. ¡Vamos a ver dónde viven sus electrones!</p>
                
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Número de electrones</div>
                        <p>El número atómico (Z) del Carbono es 6. Por lo tanto, tenemos <strong>6 electrones</strong>.</p>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Llenar orbitales con el Diagrama de Moeller</div>
                        <ol>
                            <li><strong>1s</strong>: Llenamos con 2 electrones. (Nos quedan 4).</li>
                            <li><strong>2s</strong>: Llenamos con 2 electrones. (Nos quedan 2).</li>
                            <li><strong>2p</strong>: Es el siguiente. Puede alojar hasta 6, pero solo nos quedan 2 electrones. Los colocamos aquí.</li>
                        </ol>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Escribir la configuración</div>
                        <div class="formula">1s² 2s² 2p²</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Diagrama de Orbitales (¡Atención a la Regla de Hund!)</div>
                        <p>
                            Al llegar al subnivel '2p', que tiene 3 orbitales (cajas), los dos electrones no se aparean.
                            La <strong>Regla de Hund</strong> dice que prefieren ocupar orbitales vacíos primero.
                        </p>
                        <div id="diagrama-c" class="orbital-diagram-container"></div>
                    </div>
                </div>
            </div>
        `;
 },
 getConfig: function() {
  return [{ orbital: '1s', electrones: 2 }, { orbital: '2s', electrones: 2 }, { orbital: '2p', electrones: 2 }];
 }
};

window.ConfiguracionExercise2 = ConfiguracionExercise2;