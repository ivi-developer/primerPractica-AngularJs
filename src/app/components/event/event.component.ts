import { Component } from '@angular/core';
import { InterpolacionComponent } from '../interpolacion/interpolacion.component';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [InterpolacionComponent],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  contador: number = 0
  contar() {
    this.contador++
  }
  cadena: string = ''
  setCadena(evento: any) {

    this.cadena = evento.target.value
  }
}
