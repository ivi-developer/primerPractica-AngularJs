import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  titulo: string = 'interpolacion de datos'
  getOperation(num1: number, num2: number, callback: (n1: number, n2: number) => any) {
    return callback(num1, num2)
  }
  multiply(num1: number, num2: number) {//para trajar callbacks mejor declarandolas previamente para evitar problemas con la interpolacion
    return `El resultado de la multipliacion: ${num1 * num2}`
  }
}
