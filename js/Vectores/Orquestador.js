/* ==========================================================================
   ORQUESTADOR DE VECTORES (MEJORADO CON AUTO-SCROLL)
   --------------------------------------------------------------------------
   Ahora, al hacer clic en un botón de dibujo, la página se desplazará
   automáticamente para mostrar el canvas.
   ========================================================================== */

const OrquestadorVectores = {
    plano: null,
    selectors: {
        teoriaContainer: '#vectores-teoria',
        ejerciciosContainer: '#vectores-ejercicios',
        canvasId: 'plano-cartesiano-canvas',
        // AÑADIDO: Selector para el contenedor del canvas
        canvasContainer: '.canvas-container' 
    },

    ejerciciosConfig: [
        { id: 1, modulo: window.VectoresExercise1, btnId: 'btn-draw-vector-ex1', drawFunc: function() {
            this.plano.dibujarPlanoBase();
            const finV1 = VectoresDraw.drawVector({x:0, y:0}, 3, 45, { color: '#3498db', label: 'V1' });
            VectoresDraw.drawVector(finV1, 4, 135, { color: '#e74c3c', label: 'V2' });
            VectoresDraw.drawVector({x:0, y:0}, 5, 98.2, { color: '#2ecc71', label: 'Resultante' });
        }},
        { id: 2, modulo: window.VectoresExercise2, btnId: 'btn-draw-vector-ex2', drawFunc: function() {
            this.plano.dibujarPlanoBase();
            const finV1 = VectoresDraw.drawVector({x:0, y:0}, 4, 0, { color: '#3498db', label: 'V1' });
            const finV2 = VectoresDraw.drawVector(finV1, 6, 120, { color: '#e74c3c', label: 'V2' });
            VectoresDraw.drawVector(finV2, 3, 270, { color: '#9b59b6', label: 'V3' });
            VectoresDraw.drawVector({x:0, y:0}, 2.42, 65.56, { color: '#2ecc71', label: 'Resultante' });
        }},
        { id: 3, modulo: window.VectoresExercise3, btnId: 'btn-draw-vector-ex3', drawFunc: function() {
            this.plano.dibujarPlanoBase();
            VectoresDraw.drawVector({x:0, y:0}, 50, 30, { color: '#3498db', label: 'F1' });
            VectoresDraw.drawVector({x:0, y:0}, 70, 300, { color: '#e74c3c', label: 'F2' });
            VectoresDraw.drawVector({x:0, y:0}, 86.02, -24.44, { color: '#2ecc71', label: 'Resultante' });
        }},
        { id: 4, modulo: window.VectoresExercise4, btnId: 'btn-draw-vector-ex4', drawFunc: function() {
            this.plano.dibujarPlanoBase();
            VectoresDraw.drawVector({x:0, y:0}, 10, 90, { color: '#3498db', label: 'V-Bote' });
            VectoresDraw.drawVector({x:0, y:0}, 5, 0, { color: '#e74c3c', label: 'V-Río' });
            VectoresDraw.drawVector({x:0, y:0}, 11.18, 63.43, { color: '#2ecc71', label: 'Resultante' });
        }},
        { id: 5, modulo: window.VectoresExercise5, btnId: 'btn-draw-vector-ex5', drawFunc: function() {
            this.plano.dibujarPlanoBase();
            VectoresDraw.drawVector({x:0, y:0}, 8, 315, { color: '#e74c3c', label: 'Ida' });
            VectoresDraw.drawVector({x:0, y:0}, 8, 135, { color: '#2ecc71', label: 'Regreso' });
        }},
        { id: 6, modulo: window.VectoresExercise6, btnId: 'btn-draw-vector-ex6', drawFunc: function() {
            this.plano.dibujarPlanoBase();
            VectoresDraw.drawVector({x:0, y:0}, 300, 90, { color: '#3498db', label: 'V-Avión' });
            VectoresDraw.drawVector({x:0, y:0}, 50, 0, { color: '#e74c3c', label: 'V-Viento' });
            VectoresDraw.drawVector({x:0, y:0}, 304.14, 80.54, { color: '#2ecc71', label: 'Resultante' });
        }}
    ],

    iniciar: function() {
        this.teoriaContainer = document.querySelector(this.selectors.teoriaContainer);
        this.ejerciciosContainer = document.querySelector(this.selectors.ejerciciosContainer);
        if (!this.teoriaContainer || !this.ejerciciosContainer) {
            console.error('[OrquestadorVectores] No se encontraron los contenedores principales. Abortando.');
            return;
        }
        if (!this._inicializarCanvas()) return;
        this._cargarContenido();
        this._vincularEventos();
    },

    _inicializarCanvas: function() {
        try {
            this.plano = new PlanoCartesiano(this.selectors.canvasId);
            this.plano.dibujarPlanoBase();
            if (window.VectoresDraw) window.VectoresDraw.setPlano(this.plano);
            if (window.VectoresAnimations) window.VectoresAnimations.setPlano(this.plano);
            return true;
        } catch (error) {
            console.error('[OrquestadorVectores] Fallo crítico al inicializar el plano cartesiano:', error);
            return false;
        }
    },

    _cargarContenido: function() {
        if (window.VectoresTeoria) this.teoriaContainer.innerHTML = window.VectoresTeoria.getHTML();
        let ejerciciosHTML = '';
        this.ejerciciosConfig.forEach(config => {
            if (config.modulo) ejerciciosHTML += config.modulo.getHTML();
        });
        const h3 = this.ejerciciosContainer.querySelector('h3');
        this.ejerciciosContainer.innerHTML = (h3 ? h3.outerHTML : '') + ejerciciosHTML;
    },

    /**
     * Itera sobre la configuración de ejercicios y vincula los botones a sus funciones.
     * AHORA TAMBIÉN INCLUYE LA LÓGICA DE AUTO-SCROLL.
     * @private
     */
    _vincularEventos: function() {
        if (!window.VectoresDraw) {
            console.error('[OrquestadorVectores] Módulo de dibujo (VectoresDraw) no encontrado.');
            return;
        }

        const canvasContainer = document.querySelector(this.selectors.canvasContainer);
        if (!canvasContainer) {
            console.error('[OrquestadorVectores] No se encontró el contenedor del canvas para el auto-scroll.');
            return;
        }

        this.ejerciciosConfig.forEach(config => {
            const button = document.getElementById(config.btnId);
            if (button) {
                const drawAndScroll = () => {
                    // 1. Ejecutar la función de dibujo original
                    config.drawFunc.bind(this)();

                    // 2. Desplazar la vista hacia el canvas
                    canvasContainer.scrollIntoView({
                        behavior: 'smooth', // Desplazamiento suave
                        block: 'center'     // Intenta centrar el canvas verticalmente en la pantalla
                    });
                };
                
                button.addEventListener('click', drawAndScroll);
            } else {
                console.warn(`[OrquestadorVectores] Botón con ID "${config.btnId}" no fue encontrado.`);
            }
        });
    }
};

window.OrquestadorVectores = OrquestadorVectores;