/* js/Configuración electrónica/Exercise6.js */

const ConfiguracionExercise6 = {
 getHTML: function() {
  return `
            <!-- Ejercicio 6: Hierro (Fe) - El desafío con orbitales 'd' -->
            <div class="card exercise-card challenge">
                <h4>Ejercicio 6: El desafío del Hierro (Fe)</h4>
                <p>El Hierro (Z=26) es un metal de transición. ¡Aquí es donde el Diagrama de Moeller se vuelve crucial!</p>
                
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Seguir el camino con 26 electrones</div>
                        <p>Siguiendo las diagonales del diagrama con cuidado:</p>
                        <div class="formula">1s² 2s² 2p⁶ 3s² 3p⁶...</div>
                        <p>Hasta aquí llevamos 18 electrones (la configuración del Argón). ¡Nos quedan 8!</p>
                        <p class="tip"><strong>¡OJO!</strong> Después del <strong>3p</strong>, la flecha del diagrama apunta al <strong>4s</strong>, NO al 3d. El orbital 4s tiene menor energía.</p>
                        <div class="formula">...4s²...</div>
                        <p>Llenamos el 4s con 2 electrones. ¡Nos quedan 6! Ahora sí, el siguiente es el <strong>3d</strong>.</p>
                        <div class="formula">...3d⁶</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Escribir la configuración completa</div>
                        <p>Juntando todo en orden de llenado:</p>
                        <div class="formula">1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶</div>
                        <p>Por convención, a veces se reordena por nivel de energía (n) al final:</p>
                        <div class="formula">1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Notación de Kernel</div>
                        <p>El gas noble anterior al Hierro es el Argón (Ar, Z=18). Su configuración es 1s² 2s² 2p⁶ 3s² 3p⁶.</p>
                        <div class="formula">[Ar] 4s² 3d⁶</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Diagrama de Orbitales de Valencia</div>
                        <p>Dibujamos los orbitales después del kernel de Argón.</p>
                        <div id="diagrama-fe" class="orbital-diagram-container"></div>
                    </div>
                </div>
            </div>
        `;
 },
 getConfig: function() {
  return [{ orbital: '4s', electrones: 2 }, { orbital: '3d', electrones: 6 }];
 }
};

window.ConfiguracionExercise6 = ConfiguracionExercise6;