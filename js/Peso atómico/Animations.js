/* js/Peso atómico/Animations.js */

const PesoAtomicoAnimations = {
 /**
  * Dibuja un gráfico de pastel animado para mostrar la abundancia de isótopos.
  * @param {string} containerId - El ID del div donde se renderizará el gráfico.
  * @param {Array<Object>} isotopes - Array de isótopos. Ej: [{ label: 'Cl-35', abundancia: 75.77, color: '#3498db' }]
  */
 animateIsotopePieChart: function(containerId, isotopes) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "-1 -1 2 2"); // Centrado en (0,0) con radio 1
  svg.style.width = "200px";
  svg.style.height = "200px";
  svg.style.transform = "rotate(-90deg)"; // Empezar desde arriba
  
  let anguloAcumulado = 0;
  const radio = 0.8;
  
  isotopes.forEach(iso => {
   const anguloSlice = (iso.abundancia / 100) * 360;
   
   const startRad = Utils.degToRad(anguloAcumulado);
   const endRad = Utils.degToRad(anguloAcumulado + anguloSlice);
   
   const x1 = radio * Math.cos(startRad);
   const y1 = radio * Math.sin(startRad);
   const x2 = radio * Math.cos(endRad);
   const y2 = radio * Math.sin(endRad);
   
   const largeArcFlag = anguloSlice > 180 ? 1 : 0;
   
   const pathData = `M ${x1} ${y1} A ${radio} ${radio} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
   
   const path = document.createElementNS(svgNS, "path");
   path.setAttribute("d", pathData);
   path.setAttribute("stroke", iso.color || '#3498db');
   path.setAttribute("stroke-width", "0.4");
   path.setAttribute("fill", "none");
   
   const length = path.getTotalLength();
   path.style.strokeDasharray = length;
   path.style.strokeDashoffset = length;
   path.style.transition = 'stroke-dashoffset 1s ease-in-out';
   
   svg.appendChild(path);
   
   // Animar el dibujado
   setTimeout(() => { path.style.strokeDashoffset = '0'; }, 100);
   
   anguloAcumulado += anguloSlice;
  });
  
  container.appendChild(svg);
 }
};

window.PesoAtomicoAnimations = PesoAtomicoAnimations;
