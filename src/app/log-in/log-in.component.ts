import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {SignUpComponent} from "../sign-up/sign-up.component";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    RouterLink,
    SignUpComponent
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

}
