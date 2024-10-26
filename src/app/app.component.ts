import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacionComponent } from './components/interpolacion/interpolacion.component';
import { EventComponent } from './components/event/event.component';
import { PropertyComponent } from './components/property/property.component';
import { NgforComponent } from './directivas/ngfor/ngfor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventComponent, PropertyComponent, NgforComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica';
}
