/* js/Vectores/Exercise2.js */

const VectoresExercise2 = {
 getHTML: function() {
  return `
            <!-- Ejercicio 2: La Caminata de un Excursionista -->
            <div class="card exercise-card">
                <h4>Ejercicio 2: La Caminata de un Excursionista</h4>
                <p>Un excursionista realiza tres desplazamientos: 4 km al Este, luego 6 km en una dirección de 120°, y finalmente 3 km al Sur. Encuentra el desplazamiento total.</p>
                <button id="btn-draw-vector-ex2" class="btn btn-primary btn-draw">Mostrar Representación Gráfica</button>
                
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Definir los vectores</div>
                        <ul>
                            <li><strong>V1:</strong> 4 km al Este. <strong>Ángulo = 0°</strong>.</li>
                            <li><strong>V2:</strong> 6 km a 120°. <strong>Ángulo = 120°</strong>.</li>
                            <li><strong>V3:</strong> 3 km al Sur. <strong>Ángulo = 270°</strong> (o -90°).</li>
                        </ul>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Descomponer cada vector</div>
                        <div class="formula">
                            V1<sub>x</sub> = 4 × cos(0°) = 4.00 km<br>
                            V1<sub>y</sub> = 4 × sin(0°) = 0.00 km
                        </div>
                        <div class="formula">
                            V2<sub>x</sub> = 6 × cos(120°) = -3.00 km<br>
                            V2<sub>y</sub> = 6 × sin(120°) = 5.20 km
                        </div>
                        <div class="formula">
                            V3<sub>x</sub> = 3 × cos(270°) = 0.00 km<br>
                            V3<sub>y</sub> = 3 × sin(270°) = -3.00 km
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Sumar las componentes</div>
                        <div class="formula">
                            R<sub>x</sub> = 4.00 + (-3.00) + 0.00 = 1.00 km<br>
                            R<sub>y</sub> = 0.00 + 5.20 + (-3.00) = 2.20 km
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Calcular Magnitud y Ángulo del Resultante</div>
                        <div class="formula">
                            R = √(1.00² + 2.20²) = √(1 + 4.84) = √5.84 ≈ 2.42 km
                        </div>
                        <div class="formula">
                            θ = arctan(2.20 / 1.00) ≈ 65.56°
                        </div>
                        <div class="result">El desplazamiento total es de 2.42 km a 65.56°.</div>
                    </div>
                </div>
            </div>
        `;
 }
};

window.VectoresExercise2 = VectoresExercise2;