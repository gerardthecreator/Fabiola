/* ==========================================================================
   CONTROL.JS
   --------------------------------------------------------------------------
   Este archivo gestiona la interactividad global y el estado de la UI
   de la aplicación "Ayudando a Fabiola". Se encarga de funcionalidades
   que afectan a toda la página, como el scroll-spy y las animaciones
   que se activan con el desplazamiento.
   ========================================================================== */

const AppControl = {
 
 // --- Configuración y Selectores ---
 config: {
  scrollSpyThreshold: 0.4, // 40% de la sección debe ser visible para activarla
  animationOnScrollThreshold: 0.2 // 20% del elemento debe ser visible para animarlo
 },
 
 selectors: {
  navLinks: '.nav-link',
  sections: '.tutorial-section',
  elementsToAnimate: '.card' // Elementos que recibirán una animación al aparecer
 },
 
 // --- Método Principal de Inicialización ---
 /**
  * Se llama desde Main.js para iniciar todos los controladores.
  */
 init: function() {
  console.groupCollapsed('AppControl: Iniciando controladores de UI...');
  
  this.initScrollSpy();
  this.initAnimationsOnScroll();
  
  console.groupEnd();
 },
 
 // --- Implementación de Funcionalidades ---
 
 /**
  * Inicializa el "scroll spy" para resaltar el enlace de navegación activo.
  * Utiliza IntersectionObserver para un rendimiento óptimo.
  */
 initScrollSpy: function() {
  const sections = document.querySelectorAll(this.selectors.sections);
  const navLinks = document.querySelectorAll(this.selectors.navLinks);
  
  if (sections.length === 0 || navLinks.length === 0) {
   console.warn('[AppControl] No se encontraron secciones o enlaces de navegación para el Scroll Spy.');
   return;
  }
  
  const observerOptions = {
   root: null, // Observa intersecciones con el viewport
   rootMargin: '0px',
   threshold: this.config.scrollSpyThreshold
  };
  
  const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
    if (entry.isIntersecting) {
     const activeId = entry.target.getAttribute('id');
     
     navLinks.forEach(link => {
      link.classList.remove('active');
      // Usamos getAttribute para comparar el href completo
      if (link.getAttribute('href') === `#${activeId}`) {
       link.classList.add('active');
      }
     });
    }
   });
  }, observerOptions);
  
  sections.forEach(section => observer.observe(section));
  console.log('Scroll Spy inicializado.');
 },
 
 /**
  * Inicializa un observador para añadir una clase de animación a los elementos
  * cuando entran en la vista del usuario.
  */
 initAnimationsOnScroll: function() {
  const elements = document.querySelectorAll(this.selectors.elementsToAnimate);
  
  if (elements.length === 0) {
   console.warn('[AppControl] No se encontraron elementos para animar al hacer scroll.');
   return;
  }
  
  const observerOptions = {
   root: null,
   rootMargin: '0px',
   threshold: this.config.animationOnScrollThreshold
  };
  
  const observer = new IntersectionObserver((entries, observerInstance) => {
   entries.forEach(entry => {
    if (entry.isIntersecting) {
     entry.target.classList.add('is-visible');
     // Una vez que la animación se ha disparado, dejamos de observar el elemento.
     observerInstance.unobserve(entry.target);
    }
   });
  }, observerOptions);
  
  elements.forEach(el => observer.observe(el));
  console.log('Animaciones al hacer scroll inicializadas.');
 },
 
 // --- Funciones de Utilidad ---
 
 /**
  * Devuelve una función que, mientras siga siendo invocada, no se ejecutará.
  * La función se ejecutará una vez que deje de ser llamada por N milisegundos.
  * @param {Function} func La función a "debouncear".
  * @param {number} delay El retraso en milisegundos.
  * @returns {Function} La nueva función "debounceada".
  */
 debounce: function(func, delay = 250) {
  let timeoutId;
  return function(...args) {
   clearTimeout(timeoutId);
   timeoutId = setTimeout(() => {
    func.apply(this, args);
   }, delay);
  };
 }
};

// No es necesario un event listener aquí, ya que Main.js se encarga de llamar a AppControl.init()
window.AppControl = AppControl;