import { Injectable } from '@angular/core';
import { Ipassenger } from '../model/passenger';
import { SnackBarServiceService } from './snack-bar-service.service';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  PassengerArray: Array<Ipassenger> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ];
  getAllPassenger() {
    return this.PassengerArray;
  }
  constructor(private _snackBarsservice:SnackBarServiceService) {}
  upDatePassengerullname(id: number, updatedname: string) {
    this.PassengerArray.forEach((ele) => {
      if (ele.id === id) {
        ele.fullname = updatedname;
        this._snackBarsservice.openSnackBar(`the username name is updated to ${updatedname}`)
      }
    });
  }
  RemovePassenger(id:number){
    let passIndex = this.PassengerArray.findIndex(ele=>ele.id===id);
    this.PassengerArray.splice(passIndex,1)
    this._snackBarsservice.openSnackBar(`the username name is updated to Data`)

  }

}
