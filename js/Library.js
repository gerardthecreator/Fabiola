/* js/Library.js */

// ScienceLibrary contiene las funciones de cálculo puras para cada tema.
// Esto separa la "ciencia" de la "presentación".

const ScienceLibrary = {
 Temperatura: {
  celsiusToFahrenheit: function(c) {
   return (c * 9 / 5) + 32;
  },
  fahrenheitToCelsius: function(f) {
   return (f - 32) * 5 / 9;
  },
  celsiusToKelvin: function(c) {
   return c + 273.15;
  },
  kelvinToCelsius: function(k) {
   return k - 273.15;
  }
 },
 
 PesoAtomico: {
  /**
   * Calcula el peso atómico promedio ponderado.
   * @param {Array<Object>} isotopes - Un array de isótopos. Ej: [{ masa: 10.01, abundancia: 19.9 }]
   * @returns {number} El peso atómico calculado.
   */
  calcularPromedioPonderado: function(isotopes) {
   let pesoTotal = 0;
   isotopes.forEach(iso => {
    const abundanciaFraccional = iso.abundancia / 100;
    pesoTotal += iso.masa * abundanciaFraccional;
   });
   return pesoTotal;
  }
 },
 
 Vectores: {
  /**
   * Descompone un vector en sus componentes X e Y.
   * @param {number} magnitud - La magnitud del vector.
   * @param {number} anguloDeg - El ángulo en grados.
   * @returns {{x: number, y: number}} Las componentes del vector.
   */
  descomponerVector: function(magnitud, anguloDeg) {
   const anguloRad = Utils.degToRad(anguloDeg);
   return {
    x: magnitud * Math.cos(anguloRad),
    y: magnitud * Math.sin(anguloRad)
   };
  },
  
  /**
   * Calcula la magnitud y el ángulo de un vector a partir de sus componentes.
   * @param {number} rx - La componente X total.
   * @param {number} ry - La componente Y total.
   * @returns {{magnitud: number, angulo: number}} La magnitud y el ángulo del vector resultante.
   */
  recomponerVector: function(rx, ry) {
   const magnitud = Math.sqrt(rx ** 2 + ry ** 2);
   let anguloRad = Math.atan2(ry, rx);
   let anguloDeg = Utils.radToDeg(anguloRad);
   // Asegurar que el ángulo esté entre 0 y 360
   if (anguloDeg < 0) {
    anguloDeg += 360;
   }
   return { magnitud, angulo: anguloDeg };
  }
 }
};

window.ScienceLibrary = ScienceLibrary;