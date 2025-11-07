/* js/Configuración electrónica/Teoria.js */

const ConfiguracionTeoria = {
 getHTML: function() {
  return `
            <h3>La Dirección de Cada Electrón</h3>
            <p>
                Imagina que un átomo es un hotel muy especial para electrones. La <strong>configuración electrónica</strong> es simplemente la dirección de cada electrón dentro de ese hotel. Nos dice en qué piso, en qué tipo de habitación y en qué cama se encuentra.
            </p>

            <h4>Los 4 Componentes de la Dirección (Números Cuánticos)</h4>
            <ul>
                <li><strong>Nivel de Energía (n):</strong> Es el "piso" del hotel. Cuanto más alto el número (1, 2, 3...), más lejos está del núcleo y más energía tiene el electrón.</li>
                <li><strong>Subnivel (l):</strong> Es el "tipo de habitación" en cada piso. Hay 4 tipos:
                    <ul>
                        <li><strong>s</strong> (sharp): Una habitación esférica (caben 2 electrones).</li>
                        <li><strong>p</strong> (principal): Tres habitaciones con forma de lóbulo (caben 6 electrones en total).</li>
                        <li><strong>d</strong> (diffuse): Cinco habitaciones más complejas (caben 10 electrones).</li>
                        <li><strong>f</strong> (fundamental): Siete habitaciones muy complejas (caben 14 electrones).</li>
                    </ul>
                </li>
                <li><strong>Orbital (m<sub>l</sub>):</strong> Es la "cama" específica dentro de la habitación. Cada orbital puede alojar un máximo de 2 electrones.</li>
                <li><strong>Spin (m<sub>s</sub>):</strong> Indica si el electrón "gira" hacia arriba (↑) o hacia abajo (↓). Dos electrones en la misma cama deben tener giros opuestos.</li>
            </ul>

            <hr style="margin: 1.5rem 0;">

            <h3>Las 3 Reglas de Oro para Alojar Electrones</h3>
            <p>Para llenar nuestro "hotel", seguimos tres reglas muy importantes:</p>
            
            <div class="step">
                <div class="step-title">1. Principio de Aufbau (Construcción)</div>
                <p>Los electrones son "perezosos", siempre ocuparán primero las habitaciones de menor energía. Para saber el orden exacto, usamos el <strong>Diagrama de Moeller</strong> (o regla de las diagonales). ¡Mira cómo se dibuja el camino a seguir!</p>
                <!-- Este contenedor será el objetivo de nuestra animación SVG -->
                <div id="diagrama-moeller-container" class="animation-container" style="min-height: 350px; padding: 0.5rem;"></div>
            </div>

            <div class="step">
                <div class="step-title">2. Principio de Exclusión de Pauli</div>
                <p>No puede haber dos electrones con la misma "dirección" exacta. Esto significa que si dos electrones comparten una cama (orbital), uno debe girar hacia arriba (↑) y el otro hacia abajo (↓). ¡No pueden ser idénticos!</p>
            </div>

            <div class="step">
                <div class="step-title">3. Regla de Hund</div>
                <p>Cuando los electrones llenan habitaciones del mismo tipo (como las tres habitaciones 'p'), prefieren estar solos antes que en pareja. Ocuparán una cama en cada habitación disponible antes de empezar a formar parejas. ¡Les gusta su espacio personal!</p>
            </div>
        `;
 }
};

window.ConfiguracionTeoria = ConfiguracionTeoria;