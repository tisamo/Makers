import {Settings} from './settings';
/**
 * Created by tisamo on 2020. 01. 23..
 */
export class User {

  constructor(name: string, lastName: string, userName: string, email: string, password: string, password2: string) {
    this.firstName = name;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.password2 = password2;
    this.settings = JSON.stringify(new Settings());
    this.city = '';
    this.role = '';
    this.description = '';
    this.image = '';
  }

  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  password2: string;
  settings: string;
  city: string;
  role: string;
  description: string;
  image: string;
}
