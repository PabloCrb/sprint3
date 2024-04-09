import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {PhoneHeaderComponent} from "../phone-header/phone-header.component";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-account',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent,
        RouterLink,
        NgIf,
        PhoneHeaderComponent
    ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  profileImage = localStorage.getItem("profileImage");
  username = localStorage.getItem("username");
  isPhoneScreen = false;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      `(max-width: 720px)`
    ]).subscribe(result => {
      this.isPhoneScreen = result.matches;
    });
  }
}
