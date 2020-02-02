import {
  AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy,
  OnInit
} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {HireService} from '../home/HomevariableService/hire.service';


@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ])
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({
          width: 0,
        }),
        animate(500, style({
          width: '100%',
        }))
      ])
    ]),
  ]
})
export class HireComponent{
  hire: string;
  search: string;
  poly: boolean;
  hireTime: boolean;
  searchTime: boolean;

  constructor(private hireService: HireService) {
    console.log('szia');
    this.hire = this.hireService.hire;
    this.search = this.hireService.search;
    this.poly = this.hireService.poly;
    this.hireTime = this.hireService.hireTime;
    this.searchTime = this.hireService.searchTime;
  }

  pickHire() {
    this.hireTime = true;
    this.searchTime = false;
    this.poly = true;
  }

  pickSearCh() {
    this.hireTime = false;
    this.searchTime = true;
    this.poly = true;
  }

  backout() {
    this.hire = 'col-6';
    this.search = 'col-6';
    this.hireTime = false;
    this.searchTime = false;
    this.poly = false;
  }


}
