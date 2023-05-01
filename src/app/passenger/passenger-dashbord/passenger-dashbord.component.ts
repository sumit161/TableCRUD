import { Component, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/shared/model/passenger';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-passenger-dashbord',
  templateUrl: './passenger-dashbord.component.html',
  styleUrls: ['./passenger-dashbord.component.scss'],
})
export class PassengerDashbordComponent implements OnInit {
  PassengerArray: Array<Ipassenger> = [];
  CheckedInCountNum!: number;

  constructor(private _PassengerService: PassengerService) {}

  ngOnInit(): void {
    this.PassengerArray = this._PassengerService.getAllPassenger();
    this.CheckedInCountNum = this.PassengerArray.filter(
      (ele) => ele.checkedIn === true
    ).length;
  }
  OnRemoveEmit(eve: any) {
    this.CheckedInCountNum = this.PassengerArray.filter(
      (ele) => ele.checkedIn === true
    ).length;
  }
}
