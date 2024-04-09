import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {MapComponent} from "../map/map.component";
import {NgIf} from "@angular/common";
import {PhoneHeaderComponent} from "../phone-header/phone-header.component";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-map-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    MapComponent,
    NgIf,
    PhoneHeaderComponent
  ],
  templateUrl: './map-page.component.html',
  styleUrl: './map-page.component.css'
})
export class MapPageComponent {
  isPhoneScreen = false;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      `(max-width: 720px)`
    ]).subscribe(result => {
      this.isPhoneScreen = result.matches;
    });
  }
}
