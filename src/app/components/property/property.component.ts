import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css'
})

export class PropertyComponent {
  charcater: any = {
    imgUrl: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/09/dragon-ball-son-goku-2063605.jpg?tf=3840x',
    alt: 'goku chiquito',
    title: 'goku chiquito',
    width: 250,
    height: 250
  }

}
