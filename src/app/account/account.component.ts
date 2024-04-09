import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterLink
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  profileImage = localStorage.getItem("profileImage");
  username = localStorage.getItem("username");
}
