/* js/Plano_cartesiano.js */

class PlanoCartesiano {
    /**
     * @param {string} canvasId El ID del elemento canvas.
     */
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            throw new Error(`Canvas con ID "${canvasId}" no encontrado.`);
        }
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        this.scale = 40; // Píxeles por unidad (ej: 40px = 1 km)
        this.font = '12px Oswald';
    }

    /**
     * Limpia y dibuja el plano cartesiano base (cuadrícula y ejes).
     */
    dibujarPlanoBase() {
        this.limpiar();
        this.dibujarCuadricula();
        this.dibujarEjes();
        this.dibujarEtiquetas();
    }

    limpiar() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    dibujarCuadricula() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#e0e0e0'; // Gris claro
        this.ctx.lineWidth = 0.5;

        // Líneas verticales
        for (let x = this.centerX % this.scale; x < this.width; x += this.scale) {
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.height);
        }
        // Líneas horizontales
        for (let y = this.centerY % this.scale; y < this.height; y += this.scale) {
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.width, y);
        }
        this.ctx.stroke();
    }

    dibujarEjes() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#34495e'; // Gris oscuro
        this.ctx.lineWidth = 2;
        // Eje X
        this.ctx.moveTo(0, this.centerY);
        this.ctx.lineTo(this.width, this.centerY);
        // Eje Y
        this.ctx.moveTo(this.centerX, 0);
        this.ctx.lineTo(this.centerX, this.height);
        this.ctx.stroke();
    }

    dibujarEtiquetas() {
        this.ctx.fillStyle = '#2c3e50';
        this.ctx.font = this.font;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';

        // Etiquetas de los ejes (X, Y)
        this.ctx.fillText('X', this.width - 10, this.centerY - 10);
        this.ctx.fillText('Y', this.centerX + 10, 10);

        // Marcas numéricas en el eje X
        for (let i = 1; (this.centerX + i * this.scale) < this.width; i++) {
            this.ctx.fillText(i, this.centerX + i * this.scale, this.centerY + 15);
            this.ctx.fillText(-i, this.centerX - i * this.scale, this.centerY + 15);
        }
        // Marcas numéricas en el eje Y
        for (let i = 1; (this.centerY + i * this.scale) < this.height; i++) {
            this.ctx.fillText(i, this.centerX - 15, this.centerY - i * this.scale);
            this.ctx.fillText(-i, this.centerX - 15, this.centerY + i * this.scale);
        }
    }

    /**
     * Convierte coordenadas del plano a coordenadas del canvas.
     * @param {number} x Coordenada X en el plano.
     * @param {number} y Coordenada Y en el plano.
     * @returns {{cx: number, cy: number}} Coordenadas en el canvas.
     */
    transformarCoordenadas(x, y) {
        return {
            cx: this.centerX + x * this.scale,
            cy: this.centerY - y * this.scale // El eje Y del canvas está invertido
        };
    }
}

window.PlanoCartesiano = PlanoCartesiano;