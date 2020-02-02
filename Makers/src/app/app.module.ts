import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StartPageComponent} from './components/start-page/start-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {HomeComponent} from './components/home/home.component';
import {JWT_OPTIONS, JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {HeaderComponent} from './components/header/header.component';
import {ProfileComponent} from './components/profile/profile.component';
import {HeaderInterceptor} from './services/HttpInterceptor/HeaderInterceptor';
import {InterceptorConfig} from './services/HttpInterceptor/IntercepterConfig';
import {SettingsComponent} from './components/settings/settings.component';
import {ChatComponent} from './components/chat/chat.component';
import {HireComponent} from './components/hire/hire.component';


export function getToken() {
  if (localStorage.getItem('token') != null)  return localStorage.getItem('token');
  else {
    return 'zszaaszasz';
  }

}


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    SettingsComponent,
    ChatComponent,
    HireComponent,

  ],

  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: ['localhost:3000']
      }
    }),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [{provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService, AuthService, AuthGuardService,
    InterceptorConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
