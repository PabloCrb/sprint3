import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {BreakpointObserver} from "@angular/cdk/layout";
import {NgIf} from "@angular/common";
import {PhoneHeaderComponent} from "../phone-header/phone-header.component";

@Component({
  selector: 'app-saved',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NgIf,
    PhoneHeaderComponent
  ],
  templateUrl: './saved.component.html',
  styleUrl: './saved.component.css'
})
export class SavedComponent {
  isPhoneScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      `(max-width: 720px)`
    ]).subscribe(result => {
      this.isPhoneScreen = result.matches;
    });
  }
}
