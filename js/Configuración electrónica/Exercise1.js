/* js/Configuración electrónica/Exercise1.js */

const ConfiguracionExercise1 = {
 getHTML: function() {
  return `
            <!-- Ejercicio 1: Litio (Li) -->
            <div class="card exercise-card">
                <h4>Ejercicio 1: Configuración Electrónica del Litio (Li)</h4>
                <p>El Litio es el tercer elemento de la tabla periódica.</p>
                
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Encontrar el número de electrones</div>
                        <p>El número atómico (Z) del Litio es 3. En un átomo neutro, el número de electrones es igual al número atómico. Por lo tanto, tenemos <strong>3 electrones</strong> para acomodar.</p>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Seguir el Diagrama de Moeller</div>
                        <p>Comenzamos a llenar los orbitales siguiendo el orden de las flechas:</p>
                        <ol>
                            <li>El primer orbital es <strong>1s</strong>. Puede alojar hasta 2 electrones. Llenamos 2 aquí. Nos queda 1 electrón.</li>
                            <li>El siguiente orbital en el camino es <strong>2s</strong>. Puede alojar hasta 2 electrones. Colocamos el electrón restante aquí.</li>
                        </ol>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Escribir la configuración</div>
                        <p>Juntamos la información anterior. El superíndice indica cuántos electrones hay en cada subnivel.</p>
                        <div class="formula">1s² 2s¹</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Diagrama de Orbitales</div>
                        <p>Así se ve visualmente, con los electrones (flechas) en sus orbitales (cajas):</p>
                        <div id="diagrama-li" class="orbital-diagram-container"></div>
                    </div>
                </div>
            </div>
        `;
 },
 getConfig: function() {
  return [{ orbital: '1s', electrones: 2 }, { orbital: '2s', electrones: 1 }];
 }
};

window.ConfiguracionExercise1 = ConfiguracionExercise1;