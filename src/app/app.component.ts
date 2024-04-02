import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {AccountComponent} from "./account/account.component";
import {AddPublicationComponent} from "./add-publication/add-publication.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {PublicationComponent} from "./publication/publication.component";
import {SavedComponent} from "./saved/saved.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, AccountComponent, AddPublicationComponent, EditProfileComponent, PublicationComponent, SavedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sprint3';
}
