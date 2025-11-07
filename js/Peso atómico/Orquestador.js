/* ==========================================================================
   ORQUESTADOR DE PESO ATÓMICO (VERIFICADO)
   --------------------------------------------------------------------------
   Este orquestador gestiona la sección de Cálculo de Peso Atómico.
   ========================================================================== */

const OrquestadorPesoAtomico = {
 selectors: {
  teoriaContainer: '#peso-atomico-teoria',
  ejerciciosContainer: '#peso-atomico-ejercicios'
 },
 ejerciciosConfig: [
  { id: 1, modulo: window.PesoAtomicoEjercicios1a3 },
  { id: 4, modulo: window.PesoAtomicoExercise4 },
  { id: 5, modulo: window.PesoAtomicoExercise5 },
  { id: 6, modulo: window.PesoAtomicoExercise6 }
 ],
 
 iniciar: function() {
  this.teoriaContainer = document.querySelector(this.selectors.teoriaContainer);
  this.ejerciciosContainer = document.querySelector(this.selectors.ejerciciosContainer);
  
  if (!this.teoriaContainer || !this.ejerciciosContainer) {
   console.error('[OrquestadorPesoAtomico] No se encontraron los contenedores principales. Abortando.');
   return;
  }
  
  this._cargarTeoria();
  this._cargarEjercicios();
  this._iniciarAnimaciones();
 },
 
 _cargarTeoria: function() {
  // Esta es la lógica que carga la teoría.
  if (window.PesoAtomicoTeoria && typeof window.PesoAtomicoTeoria.getHTML === 'function') {
   this.teoriaContainer.innerHTML = window.PesoAtomicoTeoria.getHTML();
  } else {
   console.error('[OrquestadorPesoAtomico] Módulo de teoría (PesoAtomicoTeoria) no encontrado o inválido.');
   this.teoriaContainer.innerHTML = "<p class='alert alert-danger'>Error al cargar el contenido teórico.</p>";
  }
 },
 
 _cargarEjercicios: function() {
  let ejerciciosHTML = '';
  this.ejerciciosConfig.forEach(config => {
   if (config.modulo && typeof config.modulo.getHTML === 'function') {
    ejerciciosHTML += config.modulo.getHTML();
   }
  });
  const h3 = this.ejerciciosContainer.querySelector('h3');
  this.ejerciciosContainer.innerHTML = (h3 ? h3.outerHTML : '<h3>Ejercicios Guiados</h3>') + ejerciciosHTML;
 },
 
 _iniciarAnimaciones: function() {
  // Lógica de animaciones (si la hubiera)
  console.log('[OrquestadorPesoAtomico] Módulo de animaciones listo para ser usado.');
 }
};

window.OrquestadorPesoAtomico = OrquestadorPesoAtomico;