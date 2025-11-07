/* js/Vectores/Exercise4.js */

const VectoresExercise4 = {
 getHTML: function() {
  return `
            <!-- Ejercicio 4: Velocidad de un Bote en un Río -->
            <div class="card exercise-card">
                <h4>Ejercicio 4: Bote en un Río</h4>
                <p>El motor de un bote lo impulsa hacia el Norte a 10 km/h. Al mismo tiempo, la corriente del río lo arrastra hacia el Este a 5 km/h. ¿Cuál es la velocidad real del bote (magnitud y dirección) con respecto a la orilla?</p>
                <button id="btn-draw-vector-ex4" class="btn btn-primary btn-draw">Mostrar Representación Gráfica</button>
                
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Definir los vectores de velocidad</div>
                        <ul>
                            <li><strong>V<sub>bote</sub>:</strong> 10 km/h hacia el Norte. <strong>Ángulo = 90°</strong>.</li>
                            <li><strong>V<sub>río</sub>:</strong> 5 km/h hacia el Este. <strong>Ángulo = 0°</strong>.</li>
                        </ul>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Descomponer (¡es fácil!)</div>
                        <p>Como los vectores están sobre los ejes, sus componentes son directas:</p>
                        <div class="formula">
                            V<sub>bote</sub>: x=0, y=10<br>
                            V<sub>río</sub>: x=5, y=0
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Sumar las componentes</div>
                        <div class="formula">
                            R<sub>x</sub> = 0 + 5 = 5 km/h<br>
                            R<sub>y</sub> = 10 + 0 = 10 km/h
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Calcular la Velocidad Resultante</div>
                        <p>Usamos Pitágoras para la magnitud (rapidez) y la tangente para la dirección.</p>
                        <div class="formula">
                            R = √(5² + 10²) = √(25 + 100) = √125 ≈ 11.18 km/h
                        </div>
                        <div class="formula">
                            θ = arctan(10 / 5) = arctan(2) ≈ 63.43°
                        </div>
                        <div class="result">La velocidad real del bote es de 11.18 km/h a 63.43°.</div>
                    </div>
                </div>
            </div>
        `;
 }
};

window.VectoresExercise4 = VectoresExercise4;