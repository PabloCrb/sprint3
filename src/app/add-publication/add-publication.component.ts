import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {NgIf} from "@angular/common";
import {PhoneHeaderComponent} from "../phone-header/phone-header.component";
import {Router} from "@angular/router";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-add-publication',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NgIf,
    PhoneHeaderComponent
  ],
  templateUrl: './add-publication.component.html',
  styleUrl: './add-publication.component.css'
})
export class AddPublicationComponent {
  isPhoneScreen = false;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      `(max-width: 720px)`
    ]).subscribe(result => {
      this.isPhoneScreen = result.matches;
    });
  }
}
