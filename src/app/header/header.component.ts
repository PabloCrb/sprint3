import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {
  }
  logout() {
    //localStorage.setItem("")
    this.router.navigateByUrl('');
  }

  navigateToMap() {
    this.router.navigateByUrl('map');
  }
}
