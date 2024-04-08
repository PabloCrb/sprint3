import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {EditProfileComponent} from "../edit-profile/edit-profile.component";
import {PhoneHeaderComponent} from "../phone-header/phone-header.component";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-profile-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    EditProfileComponent,
    PhoneHeaderComponent,
    NgClass,
    NgIf
  ],
  templateUrl: './edit-profile-page.component.html',
  styleUrl: './edit-profile-page.component.css'
})
export class EditProfilePageComponent {
  isPhoneScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      `(max-width: 720px)`
    ]).subscribe(result => {
      this.isPhoneScreen = result.matches;
    });
  }
}
