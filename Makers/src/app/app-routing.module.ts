import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartPageComponent} from './components/start-page/start-page.component';
import {HomeComponent} from './components/home/home.component';
import {
  AuthGuardService as AuthGuard
} from './services/auth-guard.service';
import {ProfileComponent} from './components/profile/profile.component';
const routes: Routes = [
  {path: 'start-page', component: StartPageComponent},
  {path: '', redirectTo: '/start-page', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
