import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {SignUpComponent} from "../sign-up/sign-up.component";
import {UsersService} from "../users.service";
import { Router } from '@angular/router';

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
  constructor(private userService: UsersService, private router: Router) {
  }

  login(): void {
    const username = (document.getElementById("user_name") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    const users = this.userService.getUsers();
    const user = users.find(user => user.ID === username);

    if (user && user.password === password) {
      alert('Inicio de sesión exitoso');
      this.router.navigateByUrl('map');
    } else {
      alert('Usuario no encontrado o contraseña incorrecta');
    }
  }
}

