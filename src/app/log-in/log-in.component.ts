import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(private userService: UsersService, private router: Router) {}
  login(): void {
    const username = (document.getElementById("user_name") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    const users = this.userService.getUsers();
    const user = users.find(user => user.ID === username);

    if (user && user.password === password) {
      localStorage.setItem("profileImage", user.profilePhoto);
      localStorage.setItem("username", user.Username);
      this.router.navigateByUrl('map');
    } else {
      alert('Usuario no encontrado o contraseña incorrecta');
    }
  }
}
