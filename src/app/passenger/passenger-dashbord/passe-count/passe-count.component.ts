import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/shared/model/passenger';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-passe-count',
  templateUrl: './passe-count.component.html',
  styleUrls: ['./passe-count.component.scss'],
})
export class PasseCountComponent implements OnInit {
  @Input() TotalCount!: number;
  @Input() CheckedInCount!: number;
  array: Array<Ipassenger> = [];
  constructor() {}
  // constructor(private _Countield: PassengerService) {}

  ngOnInit(): void {
  }
  // ngOnInit(): number {
  //   return this._Countield.getAllPassenger().filter(ele=>ele.checkedIn).length;
  // }
}
