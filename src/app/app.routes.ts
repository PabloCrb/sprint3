import {Routes} from '@angular/router';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LogInComponent} from "./log-in/log-in.component";
import {AccountComponent} from "./account/account.component";
import {MapPageComponent} from "./map-page/map-page.component";
import {SavedComponent} from "./saved/saved.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {PublicationComponent} from "./publication/publication.component";
import {AddPublicationComponent} from "./add-publication/add-publication.component";

export const routes: Routes = [
  {path: '', component:LogInComponent},
  {path: 'sign-up', component:SignUpComponent},
  {path: 'map', component:MapPageComponent},
  {path: 'account', component:AccountComponent},
  {path: 'saved', component:SavedComponent},
  {path: 'edit-profile', component:EditProfileComponent},
  {path: 'publication', component:PublicationComponent},
  {path: 'add-publication', component:AddPublicationComponent},
];
