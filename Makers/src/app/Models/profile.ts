/**
 * Created by tisamo on 2020. 01. 30..
 */
export class Profile {
  constructor(firstName: string, lastName: string, userName: string, settings: string, city: string,  description: string, role: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.settings = settings;
    this.city = city;
    this.image = '../../assets/images/Makers1';
    this.description = description;
    this.role = role;
  }
  firstName: string;
  lastName: string;
  userName: string;
  settings: string;
  city: string;
  image: string;
  description: string;
  role: string;
}
