/* js/Components.js */

// UIComponents se encarga de generar fragmentos de HTML reutilizables.
// Esto mantiene el código de los ejercicios más limpio y centrado en los datos.

const UIComponents = {
 /**
  * Crea una tarjeta de ejercicio completa.
  * @param {string} title - El título del ejercicio.
  * @param {string} enunciado - El texto del problema.
  * @param {Array<Object>} steps - Un array de pasos. Ej: [{ title: 'Paso 1', content: 'Explicación...' }]
  * @returns {string} - El string HTML de la tarjeta.
  */
 createExerciseCard: function(title, enunciado, steps) {
  let stepsHTML = steps.map(step => this.createStep(step.title, step.content)).join('');
  
  return `
            <div class="card exercise-card">
                <h4>${title}</h4>
                <p>${enunciado}</p>
                <div class="step-by-step-container">
                    ${stepsHTML}
                </div>
            </div>
        `;
 },
 
 /**
  * Crea un único paso para el tutorial.
  * @param {string} title - El título del paso.
  * @param {string} content - El contenido HTML del paso (puede incluir fórmulas, resultados, etc.).
  * @returns {string} - El string HTML del paso.
  */
 createStep: function(title, content) {
  return `
            <div class="step">
                <div class="step-title">${title}</div>
                ${content}
            </div>
        `;
 },
 
 /**
  * Crea una caja de fórmula estilizada.
  * @param {string} text - El contenido de la fórmula.
  * @returns {string} - El string HTML de la caja de fórmula.
  */
 createFormulaBox: function(text) {
  return `<div class="formula">${text}</div>`;
 },
 
 /**
  * Crea una caja de resultado estilizada.
  * @param {string} text - El contenido del resultado.
  * @returns {string} - El string HTML de la caja de resultado.
  */
 createResultBox: function(text) {
  return `<div class="result">${text}</div>`;
 }
};

window.UIComponents = UIComponents;