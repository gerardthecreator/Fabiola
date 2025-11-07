/* js/Main.js */

/**
 * AppInitializer
 * Objeto principal encargado de arrancar la aplicación y gestionar la interactividad global.
 * Es el punto de entrada que se ejecuta una vez que el DOM está listo.
 */
const AppInitializer = {
 // --- PROPIEDADES ---
 scrollThreshold: 300, // Píxeles a desplazar para mostrar el botón "Volver Arriba"
 
 // --- MÉTODO PRINCIPAL DE INICIALIZACIÓN ---
 /**
  * Inicia todos los componentes de la aplicación.
  */
 init: function() {
  console.log('AppInitializer: Iniciando la aplicación...');
  
  // Inicia los módulos de contenido a través del orquestador principal.
  this._initOrchestrator();
  
  // Configura todos los listeners de eventos globales.
  this._setupGlobalEventListeners();
  
  // Inicia los controladores de UI, como el scroll-spy.
  this._initControllers();
  
  console.log('¡Página "Ayudando a Fabiola" cargada y lista para la acción!');
 },
 
 // --- MÉTODOS PRIVADOS DE CONFIGURACIÓN ---
 
 /**
  * Llama al orquestador principal para cargar el contenido de todas las secciones.
  * @private
  */
 _initOrchestrator: function() {
  if (window.OrquestadorPrincipal && typeof window.OrquestadorPrincipal.iniciar === 'function') {
   console.log('Iniciando Orquestador Principal...');
   window.OrquestadorPrincipal.iniciar();
  } else {
   console.error('FATAL: El OrquestadorPrincipal no está definido o no es válido. El contenido no se cargará.');
  }
 },
 
 /**
  * Centraliza la configuración de todos los listeners de eventos globales.
  * @private
  */
 _setupGlobalEventListeners: function() {
  this._setupSmoothScrolling();
  this._setupBackToTopButton();
  this._setupMobileMenu();
  // Se podrían añadir más listeners globales aquí en el futuro.
 },
 
 /**
  * Inicia controladores de UI adicionales.
  * @private
  */
 _initControllers: function() {
  if (window.AppControl && typeof window.AppControl.init === 'function') {
   console.log('Iniciando AppControl (Scroll Spy)...');
   window.AppControl.init();
  } else {
   console.warn('AppControl no encontrado. Funcionalidades como el scroll-spy no estarán disponibles.');
  }
 },
 
 // --- IMPLEMENTACIÓN DE FUNCIONALIDADES ---
 
 /**
  * Configura el desplazamiento suave para los anclajes de navegación.
  * @private
  */
 _setupSmoothScrolling: function() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
   link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
     targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
   });
  });
 },
 
 /**
  * Gestiona la visibilidad y la acción del botón "Volver Arriba".
  * @private
  */
 _setupBackToTopButton: function() {
  const backToTopButton = document.getElementById('back-to-top-btn');
  if (!backToTopButton) {
   console.warn('Botón "Volver Arriba" (#back-to-top-btn) no encontrado en el HTML.');
   return;
  }
  
  window.addEventListener('scroll', () => {
   if (window.scrollY > this.scrollThreshold) {
    backToTopButton.classList.add('visible');
   } else {
    backToTopButton.classList.remove('visible');
   }
  });
  
  backToTopButton.addEventListener('click', (event) => {
   event.preventDefault();
   window.scrollTo({ top: 0, behavior: 'smooth' });
  });
 },
 
 /**
  * Gestiona la lógica para un menú de navegación móvil (hamburguesa).
  * @private
  */
 _setupMobileMenu: function() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (!menuToggle || !mainNav) {
   console.warn('Elementos para el menú móvil (#mobile-menu-toggle o .main-nav) no encontrados.');
   return;
  }
  
  menuToggle.addEventListener('click', () => {
   mainNav.classList.toggle('is-active');
   menuToggle.classList.toggle('is-active');
  });
 }
};

// Punto de entrada: Iniciar la aplicación cuando el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {
 AppInitializer.init();
});