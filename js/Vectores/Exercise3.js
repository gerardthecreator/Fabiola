/* js/Vectores/Exercise3.js */

const VectoresExercise3 = {
 getHTML: function() {
  return `
            <!-- Ejercicio 3: Fuerzas sobre un Objeto -->
            <div class="card exercise-card">
                <h4>Ejercicio 3: Fuerzas sobre un Objeto</h4>
                <p>Dos personas tiran de una caja. La Persona A tira con una fuerza de 50 Newtons a 30°. La Persona B tira con una fuerza de 70 Newtons a -60° (o 300°). ¿Cuál es la fuerza neta (resultante) sobre la caja?</p>
                <button id="btn-draw-vector-ex3" class="btn btn-primary btn-draw">Mostrar Representación Gráfica</button>
                
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Definir los vectores de fuerza</div>
                        <ul>
                            <li><strong>F1:</strong> 50 N a <strong>30°</strong>.</li>
                            <li><strong>F2:</strong> 70 N a <strong>300°</strong>.</li>
                        </ul>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Descomponer las fuerzas</div>
                        <div class="formula">
                            F1<sub>x</sub> = 50 × cos(30°) = 43.30 N<br>
                            F1<sub>y</sub> = 50 × sin(30°) = 25.00 N
                        </div>
                        <div class="formula">
                            F2<sub>x</sub> = 70 × cos(300°) = 35.00 N<br>
                            F2<sub>y</sub> = 70 × sin(300°) = -60.62 N
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Sumar las componentes</div>
                        <div class="formula">
                            R<sub>x</sub> = 43.30 + 35.00 = 78.30 N<br>
                            R<sub>y</sub> = 25.00 + (-60.62) = -35.62 N
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Calcular la Fuerza Resultante</div>
                        <div class="formula">
                            R = √(78.30² + (-35.62)²) = √(6130.89 + 1268.78) = √7400 ≈ 86.02 N
                        </div>
                        <div class="formula">
                            θ = arctan(-35.62 / 78.30) ≈ -24.44° (o 335.56°)
                        </div>
                        <div class="result">La fuerza neta es de 86.02 N a -24.44°.</div>
                    </div>
                </div>
            </div>
        `;
 }
};

window.VectoresExercise3 = VectoresExercise3;