/* ==========================================================================
   ORQUESTADOR.JS
   --------------------------------------------------------------------------
   Este es el orquestador principal de la aplicación "Ayudando a Fabiola".
   Su única responsabilidad es inicializar todos los módulos de contenido 
   (secciones) de manera ordenada, segura y eficiente.
   ========================================================================== */

const OrquestadorPrincipal = {
 
 /**
  * @property {Array<Object>} modulesToLoad - Configuración de los módulos a inicializar.
  * Para añadir una nueva sección, simplemente añade un objeto a este array.
  * @property {string} name - Un nombre descriptivo del módulo para los logs.
  * @property {object} orchestrator - La referencia al objeto orquestador del módulo.
  */
 modulesToLoad: [
  {
   name: 'Temperatura',
   orchestrator: window.OrquestadorTemperatura
  },
  {
   name: 'Peso Atómico',
   orchestrator: window.OrquestadorPesoAtomico
  },
  {
   name: 'Configuración Electrónica',
   orchestrator: window.OrquestadorConfiguracion
  },
  {
   name: 'Vectores',
   orchestrator: window.OrquestadorVectores
  }
  // Ejemplo para una futura sección:
  // {
  //     name: 'Leyes de Newton',
  //     orchestrator: window.OrquestadorLeyesNewton
  // }
 ],
 
 /**
  * Método principal de la aplicación, llamado por Main.js.
  * Itera sobre `modulesToLoad` e inicia cada módulo de forma segura.
  */
 iniciar: function() {
  console.group('Orquestador Principal: Iniciando carga de módulos...');
  console.time('Tiempo total de carga de módulos');
  
  if (!this.modulesToLoad || this.modulesToLoad.length === 0) {
   console.warn('No hay módulos configurados para cargar.');
   console.groupEnd();
   return;
  }
  
  this.modulesToLoad.forEach(module => {
   this._iniciarModulo(module);
  });
  
  console.timeEnd('Tiempo total de carga de módulos');
  console.groupEnd();
 },
 
 /**
  * Valida e inicializa un módulo individualmente.
  * Este método privado contiene la lógica de seguridad y registro.
  * @param {object} module - El objeto de configuración del módulo.
  * @private
  */
 _iniciarModulo: function(module) {
  // 1. Validar que el objeto del módulo está bien configurado
  if (!module || !module.name || !module.orchestrator) {
   console.error('[Orquestador Principal] Se encontró un módulo mal configurado. Se omitirá.', module);
   return;
  }
  
  // 2. Validar que el orquestador del módulo existe en el scope global
  if (typeof module.orchestrator === 'undefined') {
   console.error(`[ERROR] Módulo "${module.name}": El objeto orquestador no está definido en 'window'. Verifica que el script se haya cargado antes que Orquestador.js y Main.js.`);
   return;
  }
  
  // 3. Validar que el orquestador tiene un método 'iniciar'
  if (typeof module.orchestrator.iniciar !== 'function') {
   console.error(`[ERROR] Módulo "${module.name}": El orquestador no tiene un método 'iniciar' válido.`);
   return;
  }
  
  // 4. Intentar ejecutar la inicialización del módulo de forma segura
  try {
   console.time(`[Perf] Tiempo de carga de ${module.name}`);
   
   module.orchestrator.iniciar(); // La llamada de ejecución
   
   console.log(`Módulo "${module.name}" inicializado con éxito.`);
   console.timeEnd(`[Perf] Tiempo de carga de ${module.name}`);
  } catch (error) {
   console.group(`[FALLO CATASTRÓFICO] Módulo "${module.name}"`);
   console.error('Ocurrió un error irrecuperable durante la inicialización de este módulo:', error);
   console.log('La carga de otros módulos continuará.');
   console.groupEnd();
  }
 }
};

/**
 * Asignar el objeto al scope global (window).
 * Esto se hace al final para asegurar que el objeto OrquestadorPrincipal
 * está completamente definido antes de que otros scripts (como Main.js) lo usen.
 */
window.OrquestadorPrincipal = OrquestadorPrincipal;