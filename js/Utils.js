/* js/Utils.js */

// El objeto Utils proporciona funciones de ayuda reutilizables en toda la aplicación.
const Utils = {
 /**
  * Formatea un número a una cantidad específica de decimales.
  * @param {number} num - El número a formatear.
  * @param {number} decimals - La cantidad de decimales deseados.
  * @returns {number} - El número formateado.
  */
 formatNumber: function(num, decimals = 2) {
  return parseFloat(num.toFixed(decimals));
 },
 
 /**
  * Convierte grados a radianes. Esencial para trigonometría en JS.
  * @param {number} degrees - El ángulo en grados.
  * @returns {number} - El ángulo en radianes.
  */
 degToRad: function(degrees) {
  return degrees * (Math.PI / 180);
 },
 
 /**
  * Convierte radianes a grados.
  * @param {number} radians - El ángulo en radianes.
  * @returns {number} - El ángulo en grados.
  */
 radToDeg: function(radians) {
  return radians * (180 / Math.PI);
 },
 
 /**
  * Crea un elemento del DOM con atributos y contenido de texto opcionales.
  * @param {string} tag - La etiqueta del elemento (ej. 'div', 'p').
  * @param {object} attributes - Un objeto con atributos (ej. { class: 'mi-clase', id: 'mi-id' }).
  * @param {string} textContent - El contenido de texto del elemento.
  * @returns {HTMLElement} - El elemento del DOM creado.
  */
 createElement: function(tag, attributes = {}, textContent = '') {
  const element = document.createElement(tag);
  for (const key in attributes) {
   element.setAttribute(key, attributes[key]);
  }
  if (textContent) {
   element.textContent = textContent;
  }
  return element;
 }
};

// Hacemos el objeto accesible globalmente.
window.Utils = Utils;