import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LogInComponent} from "./log-in/log-in.component";
import {MapComponent} from "./map/map.component";
import {AccountComponent} from "./account/account.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {path: '', component:LogInComponent},
  {path: 'sign-up', component:SignUpComponent},
  {path: 'map', component:MapComponent},
  {path: 'account', component:AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
