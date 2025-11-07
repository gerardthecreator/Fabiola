/* js/Recursos.js */

// Recursos almacena todos los datos estáticos de la aplicación,
// como los datos de los ejercicios, para separar la lógica de los datos.

const Recursos = {
 Temperatura: {
  ejercicios: [
   { id: 1, celsius: 25, enunciado: "Un día agradable, la temperatura es de 25°C. ¿Cuánto sería en Fahrenheit?" },
   { id: 2, celsius: 100, enunciado: "El agua hierve a 100°C. ¿Cuál es esta temperatura en la escala científica Kelvin?" },
   { id: 3, fahrenheit: 68, enunciado: "En un termostato de aire acondicionado marca 68°F. ¿A cuántos grados Celsius corresponde?" },
   { id: 4, kelvin: 0, enunciado: "El cero absoluto es 0 Kelvin, la temperatura más fría posible. ¿Cuánto es en Celsius?" },
   { id: 5, fahrenheit: 98.6, enunciado: "La temperatura corporal normal es 98.6°F. ¿Cuánto es en Kelvin?" },
   { id: 6, kelvin: 298.15, enunciado: "La temperatura ambiente estándar en química es 298.15 K. ¿Y en Fahrenheit?" }
  ]
 },
 PesoAtomico: {
  // Datos para los ejercicios de peso atómico...
 },
 ConfiguracionElectronica: {
  elementos: {
   Li: { nombre: "Litio", Z: 3 },
   C: { nombre: "Carbono", Z: 6 },
   N: { nombre: "Nitrógeno", Z: 7 },
   Ne: { nombre: "Neón", Z: 10 },
   Na: { nombre: "Sodio", Z: 11 },
   Fe: { nombre: "Hierro", Z: 26 }
  }
 },
 Vectores: {
  ejercicio1: {
   titulo: "El Viaje de un Barco",
   enunciado: "Un barco se mueve 3 km al Noreste, y desde allí, viaja 4 km al Noroeste. Calcula la magnitud y el ángulo del desplazamiento total (vector resultante).",
   vectores: [
    { id: "V1", magnitud: 3, direccion: "Noreste", angulo: 45, color: '#3498db' },
    { id: "V2", magnitud: 4, direccion: "Noroeste", angulo: 135, color: '#e74c3c' }
   ],
   resultante: {
    magnitud: 5,
    angulo: 98.2,
    color: '#2ecc71'
   }
  }
 }
};

window.Recursos = Recursos;