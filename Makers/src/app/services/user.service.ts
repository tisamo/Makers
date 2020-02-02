import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {User} from '../Models/user';
import {Login} from '../Models/login';
import {Observable} from 'rxjs/index';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  create(user: User) {
    return this.http.post(this.getBaseUrl() + 'users/register/', user);
  }

  login(login: Login) {
    console.log(this.getBaseUrl());
    return this.http.post(this.getBaseUrl() + 'users/login/', login);
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.getBaseUrl() + 'users/myprofile/');

  }

  private getBaseUrl() {
    return environment.apiUrl;
  }
}
