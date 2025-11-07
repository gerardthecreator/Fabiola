/* js/Vectores/Teoria.js */

const VectoresTeoria = {
 getHTML: function() {
  return `
            <h3>¿Qué es un Vector?</h3>
            <p>
                En física, no es lo mismo decir "caminé 5 kilómetros" que "caminé 5 kilómetros <strong>hacia el Norte</strong>". La primera es una distancia (un escalar), pero la segunda es un <strong>vector</strong>.
            </p>
            <p>
                Un vector es una herramienta matemática que tiene dos características clave:
            </p>
            <ul>
                <li><strong>Magnitud:</strong> Es el "cuánto". Es el tamaño o longitud del vector (ej: 5 km, 10 N de fuerza).</li>
                <li><strong>Dirección:</strong> Es el "hacia dónde". Se representa comúnmente con un ángulo.</li>
            </ul>
            <p>Visualmente, representamos un vector como una flecha. El largo de la flecha es la magnitud y hacia donde apunta es la dirección.</p>

            <hr style="margin: 1.5rem 0;">

            <h3>Suma de Vectores: El Método Analítico</h3>
            <p>
                Cuando tenemos varios vectores (como los diferentes tramos de un viaje), a menudo queremos encontrar el "vector resultante", que es el vector que va desde el punto de inicio hasta el punto final.
            </p>
            <p>
                El método más preciso es el <strong>analítico por componentes</strong>. ¡Es como un juego de detectives en 3 pasos!
            </p>

            <div class="step">
                <div class="step-title">1. Descomponer cada vector</div>
                <p>
                    Tomamos cada vector y encontramos sus "sombras" en los ejes X e Y. A estas sombras las llamamos componentes. Usamos trigonometría básica:
                </p>
                <div class="formula">
                    Componente X (V<sub>x</sub>) = Magnitud × cos(ángulo)<br>
                    Componente Y (V<sub>y</sub>) = Magnitud × sin(ángulo)
                </div>
                <p class="tip"><strong>¡Cuidado!</strong> El ángulo debe medirse desde el eje X positivo (0°) en sentido antihorario.</p>
            </div>

            <div class="step">
                <div class="step-title">2. Sumar las componentes</div>
                <p>
                    Sumamos todas las componentes X para obtener la componente X total (R<sub>x</sub>). Hacemos lo mismo con todas las componentes Y para obtener la Y total (R<sub>y</sub>).
                </p>
                <div class="formula">
                    R<sub>x</sub> = V1<sub>x</sub> + V2<sub>x</sub> + ...<br>
                    R<sub>y</sub> = V1<sub>y</sub> + V2<sub>y</sub> + ...
                </div>
            </div>

            <div class="step">
                <div class="step-title">3. Recomponer el vector resultante</div>
                <p>
                    Con R<sub>x</sub> y R<sub>y</sub>, usamos el Teorema de Pitágoras para encontrar la magnitud del vector resultante (R) y la tangente inversa para encontrar su ángulo (θ).
                </p>
                <div class="formula">
                    Magnitud (R) = √(R<sub>x</sub>² + R<sub>y</sub>²)<br>
                    Ángulo (θ) = arctan(R<sub>y</sub> / R<sub>x</sub>)
                </div>
            </div>
        `;
 }
};

window.VectoresTeoria = VectoresTeoria;