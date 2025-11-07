/* ==========================================================================
   PESO ATÓMICO/TEORIA.JS
   --------------------------------------------------------------------------
   Este módulo proporciona el contenido HTML completo y enriquecido para la
   sección teórica de Cálculo de Peso Atómico.
   ========================================================================== */

const PesoAtomicoTeoria = {
    /**
     * Devuelve el contenido HTML de la teoría de peso atómico.
     * @returns {string} - Una cadena de texto con el HTML.
     */
    getHTML: function() {
        return `
            <h3>¿Por Qué los Pesos Atómicos Tienen Decimales?</h3>
            <p class="lead-paragraph">
                Si alguna vez has mirado la tabla periódica, habrás notado que la masa atómica de un elemento casi nunca es un número entero. Por ejemplo, el Cloro (Cl) es 35.45. La razón de esto se encuentra en unas partículas fascinantes llamadas <strong>isótopos</strong>.
            </p>

            <h4>Isótopos: La Familia de un Elemento</h4>
            <p>
                Piensa en los isótopos como hermanos de un mismo elemento. Todos tienen el <strong>mismo número de protones</strong> (que es lo que define al elemento), pero tienen un <strong>número diferente de neutrones</strong>. Esta diferencia en los neutrones hace que tengan masas ligeramente distintas.
            </p>
            <p>
                Por ejemplo, en la naturaleza no existe un único tipo de átomo de Boro. Existe el Boro-10 y el Boro-11. Ambos son Boro, pero uno es un poco más pesado que el otro.
            </p>

            <hr class="visual-divider">

            <h3>El Secreto: Un Promedio Ponderado</h3>
            <p>
                El peso atómico que vemos en la tabla periódica no es el peso de un solo átomo. Es un <strong>promedio ponderado</strong> de las masas de todos los isótopos naturales de un elemento, teniendo en cuenta qué tan abundante es cada uno en la naturaleza.
            </p>

            <div class="alert alert-info">
                <h4>Analogía de las Notas</h4>
                <p>Imagina que la masa de un isótopo es tu nota en un examen y su abundancia es el porcentaje que vale ese examen. Un examen que vale el 80% (muy abundante) influirá mucho más en tu nota final que una tarea que solo vale el 20% (poco abundante).</p>
            </div>

            <h4>La Fórmula Clave</h4>
            <p>Para calcular el peso atómico, usamos esta fórmula fundamental:</p>
            <div class="formula">
                Peso Atómico = Σ (masa del isótopo × abundancia fraccional)
            </div>
            
            <div class="alert alert-warning">
                <h4>¡Ojo con la Abundancia Fraccional!</h4>
                <p>La "abundancia fraccional" es simplemente el porcentaje de abundancia dividido entre 100. Por ejemplo, si un isótopo tiene una abundancia del <strong>75.5%</strong>, su abundancia fraccional para la fórmula es <strong>0.755</strong>.</p>
            </div>
        `;
    }
};

// Línea CRÍTICA: Asegurarse de que el objeto esté disponible globalmente.
window.PesoAtomicoTeoria = PesoAtomicoTeoria;