/* ==========================================================================
   VECTORES/DRAW.JS (VERIFICADO)
   --------------------------------------------------------------------------
   Este módulo es el motor de renderizado para la sección de Vectores.
   La función principal se llama 'drawVector'.
   ========================================================================== */

const VectoresDraw = {
 plano: null,
 defaultOptions: {
  color: '#2c3e50',
  lineWidth: 3,
  label: '',
  labelColor: '#000000',
  labelFont: 'bold 14px Oswald',
  arrowheadSize: 10
 },
 
 setPlano: function(planoInstance) {
  if (!planoInstance) {
   console.error("[VectoresDraw] Se intentó configurar un plano nulo o indefinido.");
   return;
  }
  this.plano = planoInstance;
 },
 
 /**
  * Dibuja un vector en el plano cartesiano.
  * @param {{x: number, y: number}} origen
  * @param {number} magnitud
  * @param {number} anguloDeg
  * @param {object} [options={}]
  * @returns {{x: number, y: number}|null}
  */
 drawVector: function(origen, magnitud, anguloDeg, options = {}) {
  if (!this.plano) {
   console.error("[VectoresDraw] No se puede dibujar: el plano cartesiano no ha sido configurado.");
   return null;
  }
  const finalOptions = { ...this.defaultOptions, ...options };
  const anguloRad = Utils.degToRad(anguloDeg);
  const finX = origen.x + magnitud * Math.cos(anguloRad);
  const finY = origen.y + magnitud * Math.sin(anguloRad);
  const origenCanvas = this.plano.transformarCoordenadas(origen.x, origen.y);
  const finCanvas = this.plano.transformarCoordenadas(finX, finY);
  const ctx = this.plano.ctx;
  ctx.beginPath();
  ctx.moveTo(origenCanvas.cx, origenCanvas.cy);
  ctx.lineTo(finCanvas.cx, finCanvas.cy);
  ctx.strokeStyle = finalOptions.color;
  ctx.lineWidth = finalOptions.lineWidth;
  ctx.stroke();
  this._drawArrowhead(ctx, origenCanvas, finCanvas, finalOptions);
  if (finalOptions.label) {
   this._drawLabel(ctx, origenCanvas, finCanvas, finalOptions);
  }
  return { x: finX, y: finY };
 },
 
 _drawArrowhead: function(ctx, p1, p2, options) {
  const angle = Math.atan2(p2.cy - p1.cy, p2.cx - p1.cx);
  const size = options.arrowheadSize;
  ctx.beginPath();
  ctx.moveTo(p2.cx, p2.cy);
  ctx.lineTo(p2.cx - size * Math.cos(angle - Math.PI / 6), p2.cy - size * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(p2.cx - size * Math.cos(angle + Math.PI / 6), p2.cy - size * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fillStyle = options.color;
  ctx.fill();
 },
 
 _drawLabel: function(ctx, p1, p2, options) {
  const midX = (p1.cx + p2.cx) / 2;
  const midY = (p1.cy + p2.cy) / 2;
  const angle = Math.atan2(p2.cy - p1.cy, p2.cx - p1.cx);
  const perpendicularAngle = angle - Math.PI / 2;
  const offset = 15;
  const offsetX = offset * Math.cos(perpendicularAngle);
  const offsetY = offset * Math.sin(perpendicularAngle);
  ctx.font = options.labelFont;
  ctx.fillStyle = options.labelColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText(options.label, midX + offsetX, midY + offsetY);
 }
};

window.VectoresDraw = VectoresDraw;