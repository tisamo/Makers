import {Component, Input, OnInit} from '@angular/core';
import {Profile} from '../../Models/profile';
import {UserService} from '../../services/user.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({transform: 'rotate(0)'})),
      state('rotated', style({transform: 'rotate(-360deg)'})),
      transition('rotated => default', animate('1000ms ease-out')),
      transition('default => rotated', animate('1000ms ease-in'))
    ]),
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ])
    ]), trigger('slideInOut', [
      transition(':enter', [
        style({
          left: '100%'
        }),
        animate(500, style({
          left: '0 '
        }))
      ])
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [
        style({
          right: '100%'
        }),
        animate(500, style({
          right: '0 '
        }))
      ])
    ]),
  ]
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) {
  }

  isDropdownOpen: boolean = false;
  minHeight = 0;
  welcome = true;

  state;
  string = 'default';
  myProfile: Profile;
  contentSwapper = '';

  ngOnInit() {
    this.getUser();
  }

  increaseAnimationTime(): number {
    if (this.minHeight === null) {
      this.minHeight = 1;
    } else {
      this.minHeight = this.minHeight + 0.3;
    }
    console.log(this.minHeight);
    return this.minHeight;
  }

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  getUser() {

    this.userService.getUser().subscribe(res => {
      this.myProfile = new Profile(res.firstName, res.lastName, res.userName, res.settings, res.city, res.description, res.role);
      localStorage.setItem('myprofile', JSON.stringify(this.myProfile));
    }, err => {
      console.log(err);
    });
  }

  setProfilePage() {
    this.rotate();
    this.contentSwapper = 'profile';
  }

  setHire() {
    this.rotate();
    this.welcome = false;
    if (this.contentSwapper === 'hire') {
      this.contentSwapper = 'hire';
    } else {
      this.contentSwapper = 'hire';
    }
  }

  setHome() {
    this.welcome = true;
  }

  setChat() {
    this.rotate();
    this.welcome = false;
    this.contentSwapper = 'chat';
  }
}
