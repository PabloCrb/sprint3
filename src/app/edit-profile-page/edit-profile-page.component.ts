import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {EditProfileComponent} from "../edit-profile/edit-profile.component";

@Component({
  selector: 'app-edit-profile-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    EditProfileComponent
  ],
  templateUrl: './edit-profile-page.component.html',
  styleUrl: './edit-profile-page.component.css'
})
export class EditProfilePageComponent {

}
