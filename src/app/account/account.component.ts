import { Component } from '@angular/core';
import {UsersService} from "../users.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  users: any[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
