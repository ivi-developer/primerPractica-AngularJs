import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {
  estudiantes = [
    { id: 1, nombre: 'peke' },
    { id: 2, nombre: 'marcos' },
    { id: 3, nombre: 'pablo' },
    { id: 4, nombre: 'ivi' }
  ]
  color = ''
}
