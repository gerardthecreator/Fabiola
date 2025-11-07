/* ==========================================================================
   VECTORES/ANIMATIONS.JS
   --------------------------------------------------------------------------
   Este módulo se encarga de todas las animaciones dinámicas en el canvas
   de la sección de Vectores. Su objetivo es ilustrar conceptos como la
   descomposición de vectores de una manera visualmente atractiva y pedagógica.
   ========================================================================== */

const VectoresAnimations = {
 
 // --- Propiedades ---
 plano: null, // La instancia del PlanoCartesiano se inyectará aquí.
 
 // --- Métodos Públicos ---
 
 /**
  * Establece la instancia del plano cartesiano que se usará para animar.
  * @param {PlanoCartesiano} planoInstance - La instancia del objeto PlanoCartesiano.
  */
 setPlano: function(planoInstance) {
  if (!planoInstance) {
   console.error("[VectoresAnimations] Se intentó configurar un plano nulo o indefinido.");
   return;
  }
  this.plano = planoInstance;
 },
 
 /**
  * Orquesta una secuencia de animación completa: dibuja el vector, luego sus
  * componentes y finalmente su ángulo.
  * @param {{x: number, y: number}} origen - El punto de inicio del vector.
  * @param {number} magnitud - La magnitud del vector.
  * @param {number} anguloDeg - El ángulo en grados.
  * @param {object} options - Opciones de estilo (color, etc.) pasadas a VectoresDraw.
  * @returns {Promise<void>} Una promesa que se resuelve cuando la animación completa ha terminado.
  */
 animateVectorAndComponents: async function(origen, magnitud, anguloDeg, options) {
  if (!this.plano) {
   console.error("[VectoresAnimations] No se puede animar: el plano no ha sido configurado.");
   return;
  }
  
  // 1. Animar el dibujado del vector principal
  await this._animateVectorTrace(origen, magnitud, anguloDeg, options);
  
  // 2. Animar la proyección de las componentes
  await this._animateComponentProjections(origen, magnitud, anguloDeg, options);
  
  // 3. Animar el arco del ángulo
  await this._animateAngleArc(origen, anguloDeg, options);
 },
 
 // --- Métodos Privados de Animación ---
 
 /**
  * Anima el "dibujado" de un vector usando requestAnimationFrame.
  * @private
  */
 _animateVectorTrace: function(origen, magnitud, anguloDeg, options) {
  return new Promise(resolve => {
   const duration = 800; // Duración de la animación en ms
   let startTime = null;
   
   const animate = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easedProgress = this._easeOutCubic(progress);
    
    // Limpiar y redibujar la base para no dejar rastros de frames anteriores
    this.plano.dibujarPlanoBase();
    
    // Dibujar el vector con la magnitud progresiva
    VectoresDraw.drawVector(origen, magnitud * easedProgress, anguloDeg, options);
    
    if (progress < 1) {
     requestAnimationFrame(animate);
    } else {
     resolve();
    }
   };
   requestAnimationFrame(animate);
  });
 },
 
 /**
  * Anima las líneas punteadas de las componentes X e Y.
  * @private
  */
 _animateComponentProjections: function(origen, magnitud, anguloDeg, options) {
  return new Promise(resolve => {
   const anguloRad = Utils.degToRad(anguloDeg);
   const finX = origen.x + magnitud * Math.cos(anguloRad);
   const finY = origen.y + magnitud * Math.sin(anguloRad);
   
   const finCanvas = this.plano.transformarCoordenadas(finX, finY);
   const proyXCanvas = this.plano.transformarCoordenadas(finX, origen.y);
   const proyYCanvas = this.plano.transformarCoordenadas(origen.x, finY);
   
   const ctx = this.plano.ctx;
   ctx.setLineDash([4, 4]);
   ctx.lineWidth = 1.5;
   ctx.strokeStyle = options.color || '#bdc3c7';
   
   const duration = 500;
   let startTime = null;
   
   const animate = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    
    // Redibujar el vector principal estático en cada frame
    VectoresDraw.drawVector(origen, magnitud, anguloDeg, options);
    
    // Animar línea a componente X
    ctx.beginPath();
    ctx.moveTo(finCanvas.cx, finCanvas.cy);
    ctx.lineTo(finCanvas.cx, finCanvas.cy - (finCanvas.cy - proyXCanvas.cy) * progress);
    ctx.stroke();
    
    // Animar línea a componente Y
    ctx.beginPath();
    ctx.moveTo(finCanvas.cx, finCanvas.cy);
    ctx.lineTo(finCanvas.cx - (finCanvas.cx - proyYCanvas.cx) * progress, finCanvas.cy);
    ctx.stroke();
    
    if (progress < 1) {
     requestAnimationFrame(animate);
    } else {
     ctx.setLineDash([]); // Restaurar línea sólida
     resolve();
    }
   };
   requestAnimationFrame(animate);
  });
 },
 
 /**
  * Anima el dibujado del arco que representa el ángulo del vector.
  * @private
  */
 _animateAngleArc: function(origen, anguloDeg, options) {
  return new Promise(resolve => {
   const origenCanvas = this.plano.transformarCoordenadas(origen.x, origen.y);
   const ctx = this.plano.ctx;
   const radius = 30; // Radio del arco en píxeles
   const startAngleRad = 0;
   const endAngleRad = Utils.degToRad(anguloDeg);
   
   ctx.lineWidth = 2;
   ctx.strokeStyle = options.color || '#34495e';
   
   const duration = 400;
   let startTime = null;
   
   const animate = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    
    ctx.beginPath();
    ctx.arc(origenCanvas.cx, origenCanvas.cy, radius, startAngleRad, endAngleRad * progress, endAngleRad < 0);
    ctx.stroke();
    
    if (progress < 1) {
     requestAnimationFrame(animate);
    } else {
     // Opcional: Dibujar etiqueta del ángulo
     const labelX = origenCanvas.cx + (radius + 15) * Math.cos(endAngleRad / 2);
     const labelY = origenCanvas.cy - (radius + 15) * Math.sin(endAngleRad / 2);
     ctx.font = 'italic 12px Oswald';
     ctx.fillStyle = options.color || '#34495e';
     ctx.fillText(`${anguloDeg.toFixed(1)}°`, labelX, labelY);
     resolve();
    }
   };
   requestAnimationFrame(animate);
  });
 },
 
 // --- Funciones de Utilidad (Easing) ---
 
 /**
  * Función de easing para suavizar las animaciones.
  * @param {number} t - Progreso de la animación (0 a 1).
  * @returns {number} - Progreso suavizado.
  */
 _easeOutCubic: function(t) {
  return 1 - Math.pow(1 - t, 3);
 }
};

// Exponer el módulo al scope global
window.VectoresAnimations = VectoresAnimations;