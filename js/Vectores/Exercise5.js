/* js/Vectores/Exercise5.js */

const VectoresExercise5 = {
 getHTML: function() {
  return `
            <!-- Ejercicio 5: El Camino de Regreso -->
            <div class="card exercise-card">
                <h4>Ejercicio 5: El Camino de Regreso</h4>
                <p>Una exploradora viaja 8 km en dirección Sureste (un ángulo de -45° o 315°). ¿Qué desplazamiento (magnitud y dirección) debe realizar para volver directamente a su punto de partida?</p>
                <button id="btn-draw-vector-ex5" class="btn btn-primary btn-draw">Mostrar Representación Gráfica</button>
                
                <div class="step-by-step-container">
                    <div class="step">
                        <div class="step-title">Paso 1: Definir el vector inicial (V1)</div>
                        <p>El vector de ida es: <strong>Magnitud = 8 km, Ángulo = 315°</strong>.</p>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 2: Entender el vector de regreso (V2)</div>
                        <p>Para volver al inicio, el vector de regreso debe ser el <strong>opuesto</strong> al vector de ida. Esto significa que V2 = -V1. Sus componentes serán las mismas pero con el signo contrario.</p>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 3: Calcular componentes de V1</div>
                        <div class="formula">
                            V1<sub>x</sub> = 8 × cos(315°) = 8 × 0.707 = 5.66 km<br>
                            V1<sub>y</sub> = 8 × sin(315°) = 8 × (-0.707) = -5.66 km
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-title">Paso 4: Determinar V2 y su resultado</div>
                        <p>Las componentes de V2 son las opuestas a V1:</p>
                        <div class="formula">
                            V2<sub>x</sub> = -5.66 km<br>
                            V2<sub>y</sub> = 5.66 km
                        </div>
                        <p>La magnitud de V2 será la misma que V1. El ángulo será 180° diferente.</p>
                        <div class="formula">
                            Ángulo de V2 = 315° - 180° = 135°
                        </div>
                        <div class="result">Debe viajar 8 km en dirección 135° (Noroeste).</div>
                    </div>
                </div>
            </div>
        `;
 }
};

window.VectoresExercise5 = VectoresExercise5;