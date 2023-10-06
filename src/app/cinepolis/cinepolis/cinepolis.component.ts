import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre: string = '';
  tieneTarjeta: boolean = false;
  cantidadBoletos: number = 0;
  precioAPagar: number = 0;
  mostrarPrecio: boolean = false;

  calcularPrecio() {
    // Lógica para calcular el precio basado en las condiciones
    if (this.cantidadBoletos <= 2) {
      this.precioAPagar = this.cantidadBoletos * 12;
    } else if (this.cantidadBoletos >= 3 && this.cantidadBoletos <= 5) {
      this.precioAPagar = this.cantidadBoletos * 12 * 0.9;
    } else if (this.cantidadBoletos > 5) {
      this.precioAPagar = this.cantidadBoletos * 12 * 0.85;
    }

    if (this.tieneTarjeta) {
      this.precioAPagar *= 0.9; // Aplicar descuento adicional del 10% con tarjeta CÍNECO
    }
  }

  procesarPago() {
    // Aquí puedes implementar la lógica para procesar el pago si es necesario
    console.log('Procesando el pago...');

    // Calcular el precio antes de mostrar la sección de precio final
    this.calcularPrecio();

    // Después de procesar el pago, muestra la sección de precio final
    this.mostrarPrecio = true;
  }

  reiniciar() {
    // Limpiar los campos y precio
    this.nombre = '';
    this.tieneTarjeta = false;
    this.cantidadBoletos = 0;
    this.precioAPagar = 0;
    this.mostrarPrecio = false; // Oculta la sección de precio final al reiniciar
  }
}
