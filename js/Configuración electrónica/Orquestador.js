/* ==========================================================================
   ORQUESTADOR DE CONFIGURACIÓN ELECTRÓNICA
   --------------------------------------------------------------------------
   Este orquestador gestiona toda la lógica de la sección de Configuración
   Electrónica. Carga la teoría, inicializa las animaciones SVG y renderiza
   dinámicamente cada uno de los ejercicios guiados.
   ========================================================================== */

const OrquestadorConfiguracion = {
    
    // --- Selectores del DOM ---
    selectors: {
        teoriaContainer: '#configuracion-teoria',
        ejerciciosContainer: '#configuracion-ejercicios',
        animacionMoellerContainer: '#diagrama-moeller-container'
    },
    
    // --- Configuración de Ejercicios ---
    /**
     * Array de configuración para todos los ejercicios de esta sección.
     * Facilita la adición, eliminación o reordenación de ejercicios.
     */
    ejercicios: [
        { id: 1, modulo: window.ConfiguracionExercise1, containerId: 'diagrama-li' },
        { id: 2, modulo: window.ConfiguracionExercise2, containerId: 'diagrama-c' },
        { id: 3, modulo: window.ConfiguracionExercise3, containerId: 'diagrama-n' },
        { id: 4, modulo: window.ConfiguracionExercise4, containerId: 'diagrama-ne' },
        { id: 5, modulo: window.ConfiguracionExercise5, containerId: 'diagrama-na' },
        { id: 6, modulo: window.ConfiguracionExercise6, containerId: 'diagrama-fe' }
    ],
    
    // --- Método Principal de Inicialización ---
    /**
     * Inicia la carga y renderización de toda la sección.
     */
    iniciar: function() {
        this.teoriaContainer = document.querySelector(this.selectors.teoriaContainer);
        this.ejerciciosContainer = document.querySelector(this.selectors.ejerciciosContainer);
        
        if (!this.teoriaContainer || !this.ejerciciosContainer) {
            console.error('[OrquestadorConfiguracion] No se encontraron los contenedores principales de la sección. Abortando inicialización.');
            return;
        }
        
        this._cargarTeoria();
        this._iniciarAnimacionPrincipal();
        this._cargarEjercicios();
    },
    
    // --- Métodos Privados de Carga y Renderización ---
    
    /**
     * Carga el contenido teórico en su contenedor.
     * @private
     */
    _cargarTeoria: function() {
        if (window.ConfiguracionTeoria && typeof window.ConfiguracionTeoria.getHTML === 'function') {
            this.teoriaContainer.innerHTML = window.ConfiguracionTeoria.getHTML();
        } else {
            console.error('[OrquestadorConfiguracion] Módulo de teoría (ConfiguracionTeoria) no encontrado o inválido.');
            this.teoriaContainer.innerHTML = "<p class='error-msg'>Error al cargar el contenido teórico.</p>";
        }
    },
    
    /**
     * Inicia la animación del Diagrama de Moeller después de que la teoría se haya cargado.
     * @private
     */
    _iniciarAnimacionPrincipal: function() {
        // La animación depende de que el contenedor exista, lo cual ocurre en _cargarTeoria.
        const animContainer = document.querySelector(this.selectors.animacionMoellerContainer);
        if (!animContainer) {
            console.warn('[OrquestadorConfiguracion] Contenedor para la animación del Diagrama de Moeller no encontrado.');
            return;
        }
        
        if (window.ConfiguracionAnimations && typeof window.ConfiguracionAnimations.animarDiagramaMoeller === 'function') {
            // Un pequeño retraso para asegurar una transición visual suave.
            setTimeout(() => {
                window.ConfiguracionAnimations.animarDiagramaMoeller(this.selectors.animacionMoellerContainer.substring(1));
            }, 500);
        } else {
            console.error('[OrquestadorConfiguracion] Módulo de animaciones (ConfiguracionAnimations) no encontrado o inválido.');
        }
    },
    
    /**
     * Carga el HTML de todos los ejercicios y luego renderiza sus diagramas SVG.
     * @private
     */
    _cargarEjercicios: function() {
        let ejerciciosHTML = '';
        
        this.ejercicios.forEach(ejercicio => {
            if (ejercicio.modulo && typeof ejercicio.modulo.getHTML === 'function') {
                ejerciciosHTML += ejercicio.modulo.getHTML();
            } else {
                console.warn(`[OrquestadorConfiguracion] Módulo para el ejercicio ${ejercicio.id} no encontrado o inválido.`);
            }
        });
        
        // Inyectar el HTML de todos los ejercicios de una sola vez para mejor rendimiento.
        const h3 = this.ejerciciosContainer.querySelector('h3');
        this.ejerciciosContainer.innerHTML = (h3 ? h3.outerHTML : '') + ejerciciosHTML;
        
        // Renderizar los diagramas SVG después de que el HTML esté en el DOM.
        this._renderizarDiagramasDeOrbitales();
    },
    
    /**
     * Itera sobre los ejercicios configurados y llama al módulo de dibujo para cada uno.
     * @private
     */
    _renderizarDiagramasDeOrbitales: function() {
        if (!window.ConfiguracionDraw || typeof window.ConfiguracionDraw.generarDiagramaOrbitales !== 'function') {
            console.error('[OrquestadorConfiguracion] Módulo de dibujo (ConfiguracionDraw) no encontrado o inválido. No se pueden renderizar los diagramas.');
            return;
        }
        
        // Usar un timeout para asegurar que el DOM se ha actualizado completamente.
        setTimeout(() => {
            this.ejercicios.forEach(ejercicio => {
                if (ejercicio.modulo && typeof ejercicio.modulo.getConfig === 'function' && document.getElementById(ejercicio.containerId)) {
                    const configData = ejercicio.modulo.getConfig();
                    window.ConfiguracionDraw.generarDiagramaOrbitales(ejercicio.containerId, configData);
                } else {
                    console.warn(`[OrquestadorConfiguracion] No se pudo renderizar el diagrama para el ejercicio ${ejercicio.id}. Verifique el módulo o el ID del contenedor.`);
                }
            });
        }, 100); // 100ms es generalmente suficiente.
    }
};

// Asignar al scope global para que OrquestadorPrincipal pueda encontrarlo.
window.OrquestadorConfiguracion = OrquestadorConfiguracion;