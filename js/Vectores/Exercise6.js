/* js/Vectores/Exercise6.js */

const VectoresExercise6 = {
 getHTML: function() {
  return `
            <!-- Ejercicio 6: Avión contra el Viento -->
            <div class="card exercise-card challenge">
                <h4>Ejercicio 6: Avión y Viento Cruzado</h4>
                <p>Un avión intenta volar directamente hacia el Norte a una velocidad de 300 km/h. Sin embargo, un fuerte viento sopla desde el Oeste hacia el Este a 50 km/h. ¿Cuál es la velocidad y dirección real del avión con respecto al suelo?</p>
                <button id="btn-draw-vector-ex6" class="btn btn-primary btn-draw">Mostrar Representación Gráfica</button>
                
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Definir los vectores de velocidad</div>
                        <ul>
                            <li><strong>V<sub>avión</sub>:</strong> 300 km/h hacia el Norte (<strong>90°</strong>).</li>
                            <li><strong>V<sub>viento</sub>:</strong> 50 km/h hacia el Este (<strong>0°</strong>).</li>
                        </ul>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Sumar las componentes</div>
                        <p>Como los vectores están sobre los ejes, la suma es directa:</p>
                        <div class="formula">
                            R<sub>x</sub> = V<sub>viento, x</sub> = 50 km/h<br>
                            R<sub>y</sub> = V<sub>avión, y</sub> = 300 km/h
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Calcular la Velocidad Resultante (Magnitud)</div>
                        <p>Usamos el Teorema de Pitágoras.</p>
                        <div class="formula">
                            R = √(50² + 300²) = √(2500 + 90000) = √92500 ≈ 304.14 km/h
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Calcular la Dirección Resultante (Ángulo)</div>
                        <div class="formula">
                            θ = arctan(R<sub>y</sub> / R<sub>x</sub>) = arctan(300 / 50) = arctan(6) ≈ 80.54°
                        </div>
                        <div class="result">La velocidad real del avión es de 304.14 km/h a 80.54°.</div>
                    </div>
                </div>
            </div>
        `;
 }
};

window.VectoresExercise6 = VectoresExercise6;