/* ==========================================================================
   ORQUESTADOR DE TEMPERATURA
   --------------------------------------------------------------------------
   Este orquestador gestiona la sección de Conversión de Temperatura.
   Es responsable de cargar la teoría, los ejercicios y cualquier
   animación o elemento interactivo asociado de forma segura y modular.
   ========================================================================== */

const OrquestadorTemperatura = {
    
    // --- Selectores del DOM ---
    /**
     * @property {object} selectors - Centraliza los selectores del DOM para fácil mantenimiento.
     */
    selectors: {
        teoriaContainer: '#temperatura-teoria',
        ejerciciosContainer: '#temperatura-ejercicios',
        animacionEjemplo: '#termometro-ejemplo' // Contenedor para la animación de la teoría
    },
    
    // --- Módulos de Contenido ---
    /**
     * @property {Array<object>} exerciseModules - Configuración de los módulos de ejercicios a cargar.
     * Esto permite añadir o reordenar ejercicios fácilmente.
     */
    exerciseModules: [
        window.TemperaturaEjercicios1a3,
        window.TemperaturaEjercicios4a6
    ],
    
    // --- Método Principal de Inicialización ---
    /**
     * Inicia la carga y renderización de toda la sección de Temperatura.
     * Es el único método público llamado por el OrquestadorPrincipal.
     */
    iniciar: function() {
        // Almacenar referencias a los elementos del DOM para evitar búsquedas repetidas.
        this.teoriaContainer = document.querySelector(this.selectors.teoriaContainer);
        this.ejerciciosContainer = document.querySelector(this.selectors.ejerciciosContainer);
        
        // Validar que los contenedores principales existen. Si no, no se puede continuar.
        if (!this.teoriaContainer || !this.ejerciciosContainer) {
            console.error('[OrquestadorTemperatura] No se encontraron los contenedores principales de la sección (#temperatura-teoria o #temperatura-ejercicios). Abortando inicialización.');
            return;
        }
        
        // Ejecutar los pasos de inicialización en orden.
        this._cargarTeoria();
        this._cargarEjercicios();
        this._iniciarAnimaciones();
    },
    
    // --- Métodos Privados de Carga y Renderización ---
    
    /**
     * Carga el contenido teórico en su contenedor correspondiente.
     * @private
     */
    _cargarTeoria: function() {
        if (window.TemperaturaTeoria && typeof window.TemperaturaTeoria.getHTML === 'function') {
            this.teoriaContainer.innerHTML = window.TemperaturaTeoria.getHTML();
        } else {
            console.error('[OrquestadorTemperatura] Módulo de teoría (TemperaturaTeoria) no encontrado o es inválido.');
            this.teoriaContainer.innerHTML = "<p class='alert alert-danger'>Error al cargar el contenido teórico.</p>";
        }
    },
    
    /**
     * Carga el HTML de todos los módulos de ejercicios configurados.
     * @private
     */
    _cargarEjercicios: function() {
        let ejerciciosHTML = '';
        
        this.exerciseModules.forEach((modulo, index) => {
            if (modulo && typeof modulo.getHTML === 'function') {
                ejerciciosHTML += modulo.getHTML();
            } else {
                console.warn(`[OrquestadorTemperatura] Módulo de ejercicios en el índice ${index} no fue encontrado o es inválido. Se omitirá.`);
            }
        });
        
        if (ejerciciosHTML) {
            // Conservar el encabezado H3 que ya está en el HTML para no sobreescribirlo.
            const h3 = this.ejerciciosContainer.querySelector('h3');
            this.ejerciciosContainer.innerHTML = (h3 ? h3.outerHTML : '<h3>Ejercicios Guiados</h3>') + ejerciciosHTML;
        } else {
            this.ejerciciosContainer.innerHTML += "<p class='alert alert-warning'>No se pudieron cargar los ejercicios.</p>";
        }
    },
    
    /**
     * Llama a las funciones de animación relevantes para esta sección.
     * Está diseñado para ser extensible.
     * @private
     */
    _iniciarAnimaciones: function() {
        if (!window.TemperaturaAnimations || typeof window.TemperaturaAnimations.animateThermometer !== 'function') {
            console.warn('[OrquestadorTemperatura] Módulo de animaciones (TemperaturaAnimations) no encontrado.');
            return;
        }
        
        // Buscar el contenedor específico para la animación en la teoría.
        const animContainer = document.querySelector(this.selectors.animacionEjemplo);
        if (animContainer) {
            // Animar un termómetro mostrando una temperatura agradable de 25°C en una escala de -10 a 50.
            TemperaturaAnimations.animateThermometer('termometro-ejemplo', 25, {
                min: -10,
                max: 50,
                unit: '°C',
                duration: 2000 // Animación más lenta para que sea más visible
            });
        } else {
            console.log('[OrquestadorTemperatura] Contenedor de animación de ejemplo no encontrado en la teoría. Se omite la animación.');
        }
    }
};

// Asignar al scope global para que OrquestadorPrincipal pueda encontrarlo.
window.OrquestadorTemperatura = OrquestadorTemperatura;