import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent {
  num1 = '';
  resultado: number = 0;
  unidad: string = 'celsius'; // Inicializamos la unidad en 'celsius'

  calcular() {
    const n1 = parseFloat(this.num1);

    if (!isNaN(n1)) {
      if (this.unidad === 'celsius') {
        this.resultado = (n1 - 32) * (5 / 9); // Conversión de Fahrenheit a Celsius
      } else if (this.unidad === 'fahrenheit') {
        this.resultado = (n1 * 9 / 5) + 32; // Conversión de Celsius a Fahrenheit
      }
    } else {
      this.resultado = 0; // Valor por defecto si la entrada no es un número válido
    }
  }
}

