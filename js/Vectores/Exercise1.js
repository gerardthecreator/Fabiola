/* js/Vectores/Exercise1.js */

const VectoresExercise1 = {
 getHTML: function() {
  return `
            <!-- Ejercicio 1: El Viaje del Barco -->
            <div class="card exercise-card">
                <h4>Ejercicio 1: El Viaje de un Barco</h4>
                <p>Un barco se mueve 3 km al Noreste, y desde allí, viaja 4 km al Noroeste. Calcula la magnitud y el ángulo del desplazamiento total (vector resultante).</p>
                <button id="btn-draw-vector-ex1" class="btn btn-primary btn-draw">Mostrar Representación Gráfica</button>
                
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Definir los vectores y sus ángulos</div>
                        <p>Primero, traducimos las direcciones a ángulos medidos desde el eje X positivo (0°).</p>
                        <ul>
                            <li><strong>Vector 1 (V1):</strong> 3 km al Noreste. El Noreste está a 45° del Este. <strong>Ángulo = 45°</strong>.</li>
                            <li><strong>Vector 2 (V2):</strong> 4 km al Noroeste. El Noroeste está a 135° del Este (90° + 45°). <strong>Ángulo = 135°</strong>.</li>
                        </ul>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Descomponer cada vector en componentes X e Y</div>
                        <p><strong>Para V1 (3 km, 45°):</strong></p>
                        <div class="formula">
                            V1<sub>x</sub> = 3 × cos(45°) = 3 × 0.707 = 2.12 km<br>
                            V1<sub>y</sub> = 3 × sin(45°) = 3 × 0.707 = 2.12 km
                        </div>
                        <p><strong>Para V2 (4 km, 135°):</strong></p>
                        <div class="formula">
                            V2<sub>x</sub> = 4 × cos(135°) = 4 × (-0.707) = -2.83 km<br>
                            V2<sub>y</sub> = 4 × sin(135°) = 4 × 0.707 = 2.83 km
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Sumar las componentes</div>
                        <p>Sumamos todas las 'x' y todas las 'y' para encontrar las componentes del vector resultante (R).</p>
                        <div class="formula">
                            R<sub>x</sub> = V1<sub>x</sub> + V2<sub>x</sub> = 2.12 + (-2.83) = -0.71 km<br>
                            R<sub>y</sub> = V1<sub>y</sub> + V2<sub>y</sub> = 2.12 + 2.83 = 4.95 km
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Calcular la Magnitud del Resultante (R)</div>
                        <p>Usamos el Teorema de Pitágoras con R<sub>x</sub> y R<sub>y</sub>.</p>
                        <div class="formula">
                            R = √(R<sub>x</sub>² + R<sub>y</sub>²) = √((-0.71)² + (4.95)²) = √(0.50 + 24.50) = √25.00
                        </div>
                        <div class="result">Magnitud Resultante ≈ 5.00 km</div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 5: Calcular el Ángulo del Resultante (θ)</div>
                        <p>Usamos la tangente inversa. ¡Ojo con el cuadrante! Como R<sub>x</sub> es negativo y R<sub>y</sub> es positivo, estamos en el segundo cuadrante.</p>
                        <div class="formula">
                            θ = arctan(R<sub>y</sub> / R<sub>x</sub>) = arctan(4.95 / -0.71) = arctan(-6.97) ≈ -81.8°
                        </div>
                        <p class="tip">La calculadora da un ángulo en el cuarto cuadrante. Para corregirlo al segundo cuadrante, sumamos 180°.</p>
                        <div class="formula">
                            Ángulo corregido = -81.8° + 180° = 98.2°
                        </div>
                        <div class="result">Ángulo Resultante ≈ 98.2°</div>
                    </div>
                </div>
            </div>
        `;
 }
};

window.VectoresExercise1 = VectoresExercise1;