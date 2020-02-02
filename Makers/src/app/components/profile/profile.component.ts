import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Login} from '../../Models/login';
import {User} from '../../Models/user';
import {Profile} from '../../Models/profile';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
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
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService) {

  }

  myProfile: Profile;

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.myProfile = JSON.parse(localStorage.getItem('myprofile'));
    console.log(this.myProfile);
  }


}
