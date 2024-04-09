import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {MapComponent} from "../map/map.component";

@Component({
  selector: 'app-map-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MapComponent
  ],
  templateUrl: './map-page.component.html',
  styleUrl: './map-page.component.css'
})
export class MapPageComponent {

}
