import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicar',
  templateUrl: './multiplicar.component.html',
  styleUrls: ['./multiplicar.component.css']
})
export class MultiplicarComponent {
  numero: number=0;
  vecesASumar: number=0;
  resultado: string="";

  sumar() {
    if (this.numero !== undefined && this.vecesASumar !== undefined) {
      let resultadoSuma = '';
      let sumaTotal = 0;
      
      for (let i = 0; i < this.vecesASumar; i++) {
        sumaTotal += this.numero;
        resultadoSuma += `${this.numero} + `;
      }
      
      resultadoSuma = resultadoSuma.slice(0, -2); // Eliminar el último " + "
      this.resultado = `${resultadoSuma} = ${sumaTotal}`;
    }
  }
}