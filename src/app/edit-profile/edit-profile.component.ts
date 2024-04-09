import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {NgIf} from "@angular/common";
import {PhoneHeaderComponent} from "../phone-header/phone-header.component";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    NgIf,
    PhoneHeaderComponent
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  isPhoneScreen = false;
  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      `(max-width: 720px)`
    ]).subscribe(result => {
      this.isPhoneScreen = result.matches;
    });
  }
  toggleChangePassword(): void {
    const container: HTMLElement | null = document.getElementById('changePasswordContainer');
    if (container) {
      container.classList.toggle('active');
    }
  }

  async validateOfChangePassword(): Promise<void> {
    localStorage.getItem('userId');
    const pass1: HTMLInputElement | null = document.getElementById("newPassword") as HTMLInputElement;
    //console.log(pass1.value);
    const pass2: HTMLInputElement | null = document.getElementById("repeatPassword") as HTMLInputElement;
    //console.log(pass2.value);
    const errorDiv: HTMLElement | null = document.getElementById("passwordError");

    if (pass1 && pass2 && errorDiv) {
      if (pass1.value !== pass2.value) {
        errorDiv.innerText = "Passwords do not match";
      } else if (pass1.value === "" && pass2.value === "") {
        errorDiv.innerText = "Password is empty";
      } else if (pass1.value.length < 6) {
        errorDiv.innerText = "At least 6 characters";
      } else {
        const container: HTMLElement | null = document.getElementById('changePasswordContainer');
        if (container) {
          container.classList.toggle('active');
        }
      }
    }
  }

  exit() {
    this.router.navigateByUrl("account"); // NO SIRVE - DOESN'T WORK
  }
}
